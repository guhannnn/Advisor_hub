
import {Route,Routes} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/qual';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/account' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/p' element={<Profile/>} />

      </Routes>
    </div>
  );
}

export default App;
