import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog';
import Dashboard from './Components/Pages/Dashboard';
import Home from './Components/Pages/Home/Home';
import Purchse from './Components/Pages/Purchase/Purchse';
import Tools from './Components/Pages/Tools/Tools';
import Footer from './Components/SharedComponents/Footer';
import Header from './Components/SharedComponents/Header';
import Login from './Components/User/Login';
import RequireAuth from './Components/User/RequireAuth';
import SignUp from './Components/User/SignUp';

function App() {
  return (
    <div className='px-12' >
      <Header></Header>


      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>

        <Route path='/product' element={<Tools></Tools>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/parts/:purchaseId' element={
         <RequireAuth>
           <Purchse></Purchse>
         </RequireAuth>
       }></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
