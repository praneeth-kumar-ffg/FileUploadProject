import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import Dashboard from './views/app/Dashboard';
import EmployeeInfo from './views/data/EmployeeInfo';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
         <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/viewdata' component={EmployeeInfo} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
