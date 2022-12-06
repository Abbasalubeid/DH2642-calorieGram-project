import {getFitnessInfo, getActivityInfo} from "./fetchSource.js";
import resolvePromise1 from "./resolvePromise.js";
import SearchViewPresenter from "./presenter/searchViewPresenter.js";
function App() {

  return (<div>
          <SearchViewPresenter />
        </div>);
  
}

export default App;
