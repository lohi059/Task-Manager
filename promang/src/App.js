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
        <Route path='/tasks' element = {<Home/>}/>
        <Route path='/projects' element = {<Home/>}/>
        <Route path='/calender' element = {<Home/>}/>
        <Route path='/analytics' element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
