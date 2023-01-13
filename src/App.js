import "./App.css"
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Form } from "./components/Form";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/CartContext";
import { Orders } from "./components/Orders";

const App = ()  => {

  return (
    <div >
      <BrowserRouter>
        <CartContextProvider> 
          <NavBar/>
          <Routes>
            <Route path="/" element = { < ItemListContainer /> } />
            <Route path="/category/:Categoria" element = { < ItemListContainer /> } />
            <Route path="/category" element = { < ItemListContainer /> } />
            <Route path="/item/:id" element ={ <ItemDetailContainer/> } />
            <Route path="/cart"  element = { < Cart/>}/>
            <Route path="/checkout"  element = { <Orders/> }/>
            <Route path="*" element  = { <h2 className="error_ruta">Lo siento no existe la ruta ingresada</h2> } />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;