
import Nav from './layout/Nav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Auth from './pages/auth/Auth';
import Footer from './layout/Footer';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Nav></Nav>
      <div className=' z-50 fixed right-5 bottom-5 bg-black/30 text-amber-50 p-2 rounded cursor-pointer' onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <MdKeyboardDoubleArrowUp size={20}  />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact  />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/auth' element={<Auth />} />
        
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;