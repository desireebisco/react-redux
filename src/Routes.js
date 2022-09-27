import { Switch, Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";
import {Hooks} from "./components/Hooks";
import { Test } from "./components/Test";
import { ApiTest } from "./components/ApiTest";
import {Game} from "./components/Game/Game";
import { LeaderBoard } from "./components/Game/Leaderboard";
import { NamePicker } from "./components/Game/NamePicker";


const Routes = () => {
  return (
    <Switch>
      <Route path="/products" component={Products}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/hooks" component={Hooks}></Route>
      <Route path="/game" component={Game}></Route>
      <Route path="/leaderboard" component={LeaderBoard}></Route>
      <Route path="/name-picker" component={NamePicker}></Route>
      <Route path="/api-test" component={ApiTest}></Route>
      <Route path="/" component={Test}></Route>
    </Switch>
  );
};

export default Routes;
