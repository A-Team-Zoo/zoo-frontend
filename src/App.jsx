import { Route, Switch } from 'react-router-dom';
import AnimalList from './views/AnimalList';

export default function App() {
  return (
    <>
      <h1>Zoo Animals</h1>
      <Switch>
        <Route path="/animals">
          <AnimalList />
        </Route>
        ;
      </Switch>
    </>
  );
}
