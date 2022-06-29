import { Route, Switch } from 'react-router-dom';
import AnimalList from './views/AnimalList';
import AnimalDetail from './views/AnimalDetail';

export default function App() {
  return (
    <>
      <h1>Zoo Animals</h1>
      <Switch>
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
