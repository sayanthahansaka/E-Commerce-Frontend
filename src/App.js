import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRoutern,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRoutern>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRoutern>
    </div>
  );
}

export default App;
