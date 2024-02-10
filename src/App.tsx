import "./App.css";

import { JsonRender } from "./common/JsonRender/JsonRender";

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
        <JsonRender />
      </div>
    </div>
  );
}

export default App;
