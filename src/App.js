import BmrSearchPresenter from "./presenter/bmrSearchPresenter.js";
import ResultPresenter from "./presenter/resultpresenter.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App(props) {


  return (
    <Router>
      <div>
        <nav>
          <h1>Calorie Gram</h1>
          <Link to="/">BMR</Link>
          <Link to="/result">Result</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<BmrSearchPresenter model={props.model} />} />
          <Route exact path="/result" element={<ResultPresenter model={props.model} />} />
        </Routes>
      </div>
    </Router>

  );

}

export default App;
