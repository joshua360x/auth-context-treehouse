import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import EntryList from './views/EntryList';
import Login from './views/Login';
import Main from './views/Main';
import PrivateRoute from './views/PrivateRoute';

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
        <PrivateRoute path='guestbook/views'>
        <EntryList />
        </PrivateRoute>
      </Switch>
    </main>
  );
}
