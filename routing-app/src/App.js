import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComponenteParametros from './components/ComponenteParametros/ComponenteParametros';
import Home from './components/Home/Home';



const App = () => {
  return (
    <div className="container">
      <BrowserRouter>


        <Switch>
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/:palabra" exact render={(routerProps) => <ComponenteParametros {...routerProps} />} />
          <Route path="/:palabra/:color/:bg" exact render={(routerProps) => <ComponenteParametros {...routerProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
