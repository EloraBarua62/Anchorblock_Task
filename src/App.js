// import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import Users from './pages/Users.tsx'
import Dashboard from './pages/Dashboard.tsx'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>    
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
