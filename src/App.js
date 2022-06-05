import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Inventory from './Components/Inventory/Inventory';
import RequiredAuth from './Components/RequiredAuth/RequuiredAuth';
import NotFound from './Components/NotFound/NotFound';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add' element={<AddItems></AddItems>}></Route>
        <Route path='/my' element={<MyItems></MyItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
