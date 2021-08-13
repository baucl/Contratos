import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeContext from "./context";
import MainApp from "./containers/MainApp";

const App = () => (
  <ThemeContext>
    <BrowserRouter>
      <Switch>
        <Route render={() => <MainApp />} />
      </Switch>
    </BrowserRouter>
  </ThemeContext>
);

export default App;
