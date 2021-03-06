import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Pages/Blog';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myorder from './Components/Pages/Dashboard/Myorder';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Review from './Components/Pages/Dashboard/Review';
import Home from './Components/Pages/Home/Home';
import MyPortFolio from './Components/Pages/MyPortFolio';
import Purchse from './Components/Pages/Purchase/Purchse';
import Tools from './Components/Pages/Tools/Tools';
import Footer from './Components/SharedComponents/Footer';
import Header from './Components/SharedComponents/Header';
import NotFound from './Components/SharedComponents/NotFound';
import Login from './Components/User/Login';
import RequireAuth from './Components/User/RequireAuth';
import SignUp from './Components/User/SignUp';


function App() {
  return (
    <div className='px-12' >
      <Header></Header>


      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='portfolio' element={<MyPortFolio></MyPortFolio>}></Route>

        <Route path='/product' element={<Tools></Tools>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='dashboard' element={
         <RequireAuth><Dashboard></Dashboard></RequireAuth>
       }>

          <Route path='myOrder' element={<Myorder></Myorder>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myReview' element={<Review></Review>}></Route>

       </Route>
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
