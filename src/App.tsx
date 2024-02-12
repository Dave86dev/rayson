import React, { useEffect, useState } from "react";
import { JsonRender } from "./common/JsonRender/JsonRender";
import { fetchDataFromUrl } from "./services/dataFetch";
import { searchJson } from "./utils/jsonExplorer";
import "./App.css";

function App() {
  const [criteria, setCriteria] = useState<{ fetching: string; searching: string }>({
    fetching: "",
    searching: "",
  });

  const [searchResult, setSearchResult] = useState<string>("")

  const [dataJson, setDataJson] = useState<unknown>(null);
  const [error, setError] = useState<string>("");
  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(prevState => ({
      ...prevState, 
      [e.target.name] : e.target.value
    }));
  };

  useEffect(() => {
    if (criteria.fetching.trim() !== "") {
      const fetching = setTimeout(async () => {
        const result = await fetchDataFromUrl(criteria.fetching);
        if ("error" in result) {
          setError(result.error);
          setDataJson(null);
          setHasFetchedData(false);
        } else {
          setDataJson(result);
          setError("");
          setHasFetchedData(true);
        }
      }, 375);

      return () => clearTimeout(fetching);
    } else {
      setDataJson(null);
      setError("");
      setHasFetchedData(false);
      setCriteria(prevState => ({
        ...prevState, 
        searching : ""
      }));
    }
  }, [criteria.fetching]);

  useEffect(() => {
    if (criteria.searching.trim() !== "" && dataJson) {
      const result = searchJson(dataJson, criteria.searching);
      setSearchResult(result);
    } else {
      setSearchResult("");
    }
  }, [criteria.searching, dataJson]);

  return (
    <div className="mainContainer">
      <h4>
        {"{"} raYSON 0.4 Beta {"}"}
      </h4>
      <div className="uxContainer">
        <>
          <input
            type="text"
            autoCorrect="off"
            spellCheck="false"
            name="fetching"
            placeholder="Enter a URL that returns JSON data"
            value={criteria.fetching || ""}
            onChange={handleInputChange}
          />
        </>
        <>
          <input
            type="text"
            autoCorrect="off"
            spellCheck="false"
            name="searching"
            disabled={!dataJson ? true : false }
            placeholder=""
            value={criteria.searching || ""}
            onChange={handleInputChange}
          />
        </>
        <div className="jsonContainer">
          {error ? (
            <p className="errorMessage">{error}</p>
          ) : hasFetchedData ? (
            <JsonRender data={dataJson} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
