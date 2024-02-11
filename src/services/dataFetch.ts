const isValidUrl = (urlString: string): boolean => {
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
};

export const fetchDataFromUrl = async (url: string): Promise<any | { error: string }> => {
  if (!isValidUrl(url)) {
    return { error: 'The input is not a valid URL. Please enter a valid URL.' };
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('The URL is invalid or the resource does not exist.');
      } else {
        throw new Error(`Fetch failed with status ${response.status}: ${response.statusText}`);
      }
    }

    const contentType = response.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('The response was not valid JSON. Please ensure the URL is correct and returns JSON.');
    }

    return await response.json();
  } catch (error) {
    // console.error('Error fetching data:', error);
    return { error: error instanceof Error ? error.message : 'An unexpected error occurred' };
  }
};
