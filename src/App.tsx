import React from "react";
import { Route, Switch } from "react-router-dom";
import Fof from "./views/Fof";
import Home from "./views/Home";
import Post from "./views/Post";
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/post/:_slug" component={Post}></Route>
        <Route path="*" component={Fof}></Route>
      </Switch>
    </div>
  );
};

export default App;
