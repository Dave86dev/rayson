import { useEffect, useState } from "react";
import FetchInput from "./common/FetchInput/FetchInput"; 
import SearchInput from "./common/SearchInput/SearchInput"; 
import { JsonRender } from "./common/JsonRender/JsonRender";
import { FetchState } from "./interfaces";
import { fetchDataFromUrl } from "./services/dataFetch";
import { JsonExplorer } from "./utils/jsonExplorer";
import "./App.css";

function App() {
  const [fetchingUrl, setFetchingUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchState, setFetchState] = useState<FetchState>({ data: null, error: "", hasFetched: false });
  const [searchResult, setSearchResult] = useState<string | null>(null);

  useEffect(() => {
    if (fetchingUrl.trim() !== "") {
      const fetching = setTimeout(async () => {
        try {
          const result = await fetchDataFromUrl(fetchingUrl);
          if ("error" in result) {
            setFetchState({ data: null, error: result.error, hasFetched: false });
          } else {
            setFetchState({ data: result, error: "", hasFetched: true });
          }
        } catch (err) {
          setFetchState({ data: null, error: "An error occurred while fetching data.", hasFetched: false });
        }
      }, 375);
      return () => clearTimeout(fetching);
    } else {
      setFetchState({ data: null, error: "", hasFetched: false });
    }
  }, [fetchingUrl]);

  useEffect(() => {
    if (searchQuery.trim() !== "" && fetchState.data) {
      const result = JsonExplorer({ dataJson: fetchState.data, criteria: searchQuery });
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  }, [searchQuery, fetchState.data]);

  return (
    <div className="mainContainer">
      <div className="logo">
        <span className="logoOrange">{"{"}</span>r<span className="logoOrange">{"}"}</span>rayson<span className="logoOrange">ts</span>
      </div>
      <div className="warningMsg">
        Designed for desktops: requires screen width over 760px.
      </div>
      <div className="uxContainer">
        <FetchInput value={fetchingUrl} onChange={setFetchingUrl} />
        <SearchInput value={searchQuery} onChange={setSearchQuery} disabled={!fetchState.data} />
        <div className="jsonContainer">
          {fetchState.error && <p className="errorMessage">{fetchState.error}</p>}
          {!fetchState.error && fetchState.hasFetched && (searchResult !== null ? (
            <div>{searchResult}</div>
          ) : (
            <JsonRender data={fetchState.data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
