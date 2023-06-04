import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;