import { useEffect, useState } from "react"
import { JsonRender } from "./common/JsonRender/JsonRender"
import { fetchDataFromUrl } from "./services/dataFetch"
import "./App.css"

function App() {

  const [fetchCriteria, setFetchCriteria] = useState<string>("")
  const [dataJson, setDataJson] = useState<any>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFetchCriteria(e.target.value);
  }

  useEffect(() => {
    //debouncing the search....
    const fetching = setTimeout(async () => {
      if (fetchCriteria.trim() !== "") {
        try {
          const data = await fetchDataFromUrl(fetchCriteria)
          setDataJson(data)
        } catch (error) {
          console.log(error)

          //next thing to do...handle errors properly....
        }
      } else {
        setDataJson("")
      }
    }, 375)

    return () => clearTimeout(fetching)
  }, [fetchCriteria])

  return (
    <div className="mainContainer">
      <div className="search">
        <input
          className="inputFetch"
          type="text"
          autoCorrect="off"
          spellCheck="false"
          value={fetchCriteria || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="jsonContainer">
        <JsonRender data={dataJson} />
      </div>
    </div>
  )
}

export default App
