import { getActivityInfo } from "./fetchSource.js";
import SearchViewPresenter from "./presenter/searchViewPresenter.js";
function App() {
  getActivityInfo(22, "male", 180, 100, "level_1")

  return (<div>
    <SearchViewPresenter />
  </div>);

}

export default App;
