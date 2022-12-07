import BmrSearchPresenter from "./presenter/bmrSearchPresenter.js";
function App(props) {
  

  return (<div>
    <BmrSearchPresenter model={props.model} />
  </div>);

}

export default App;
