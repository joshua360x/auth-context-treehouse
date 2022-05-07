import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './views/Login';
import Main from './views/Main';

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </main>
  );
}
