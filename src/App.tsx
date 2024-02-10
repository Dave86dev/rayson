import "./App.css";

import { JsonRender } from "./common/JsonRender/JsonRender";
import jsonData from "./data/demoData.json";

function App() {
  // const [criteria, setCriteria] = useState<string>("");

  return (
    <div className="mainContainer">
      <div className="answer">
        {/* <input
          className="input"
          type="text"
          autoCorrect="off"
          spellCheck="false"
          value={criteria || path || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCriteria(e.target.value)
          }
        /> */}
        {/* <div className="value">{value}</div> */}
      </div>
      <div className="jsonContainer">
        <JsonRender data={jsonData as unknown} depth={0} actualRoute="" />
      </div>
    </div>
  );
}

export default App;
