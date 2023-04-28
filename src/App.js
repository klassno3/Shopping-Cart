import "./App.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Navibar } from "./component/Navibar"
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"
import { ShopContextProvider } from "./context/ShopContext";
function App () {
  return <div className="App">
    <ShopContextProvider>
      
    <Router>
      <Navibar />
      
      
      <Routes>
          <Route path="/" element={ <Shop />} />
          <Route path="/cart" element={ <Cart /> } />

      </Routes>
   </Router>

   </ShopContextProvider>
    
  </div>
}
export default App;