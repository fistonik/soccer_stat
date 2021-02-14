import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import CompetitionList from "../competition-list/competition-list";
import CompetitionDetail from "../competition-detail/competition-detail";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/competitions">
          <CompetitionList />
        </Route>
        <Route exact path="/competition/:id?" component={CompetitionDetail}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
