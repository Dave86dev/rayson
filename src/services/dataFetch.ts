
export const fetchDataFromUrl = async (url: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('failed.....')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      return null
    }
  }