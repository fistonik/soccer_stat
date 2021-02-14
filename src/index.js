import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {reducer} from "./store/reducer";
import {fetchCompetitionList} from "./store/api-actions";

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

Promise.all([
  store.dispatch(fetchCompetitionList())
])
.then(() => {
  ReactDom.render(
    <Provider
      store={store}
    >
      <App />
    </Provider>,
    document.getElementById(`root`)
  );
});
