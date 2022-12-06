import SearchViewPresenter from "./presenter/searchViewPresenter.js";
function App(props) {
  

  return (<div>
    <SearchViewPresenter model={props.model} />
  </div>);

}

export default App;
