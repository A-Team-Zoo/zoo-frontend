import { Route, Switch } from 'react-router-dom';
import AnimalList from './views/AnimalList';
import AnimalDetail from './views/AnimalDetail';
import { Auth } from './views/Auth';
import Create from './views/Create';

export default function App() {
  return (
    <>
      <h1>Zoo Animals</h1>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/animals/:id">
          <AnimalDetail />
        </Route>
        <Route path="/animals">
          <AnimalList />
        </Route>
        ;
      </Switch>
    </>
  );
}
