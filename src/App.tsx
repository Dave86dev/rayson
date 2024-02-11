import React, { useEffect, useState } from "react";
import { JsonRender } from "./common/JsonRender/JsonRender";
import { fetchDataFromUrl } from "./services/dataFetch";
import "./App.css";

function App() {
  const [fetchCriteria, setFetchCriteria] = useState<string>("");
  const [dataJson, setDataJson] = useState<unknown>(null);
  const [error, setError] = useState<string>("");
  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFetchCriteria(e.target.value);
  };

  useEffect(() => {
    if (fetchCriteria.trim() !== "") {
      const fetching = setTimeout(async () => {
        const result = await fetchDataFromUrl(fetchCriteria);
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
    }
  }, [fetchCriteria]);

  return (
    <div className="mainContainer">
      <h4>
        {"{"} raYSON 0.4 Beta {"}"}
      </h4>
      <div className="uxContainer">
        <div className="search">
          <input
            className="inputFetch"
            type="text"
            autoCorrect="off"
            spellCheck="false"
            placeholder="Enter a URL that returns JSON data"
            value={fetchCriteria || ""}
            onChange={handleInputChange}
          />
        </div>
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
