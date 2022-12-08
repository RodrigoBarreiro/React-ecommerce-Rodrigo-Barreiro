import "./App.css"
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = ()  => {



  return (
    <div >
      <BrowserRouter>
      
      < NavBar/>

      <Routes>
      
        <Route path="/" element = { < ItemListContainer /> } />

        <Route path="/category/:Categoria" element = { < ItemListContainer /> } />

        <Route path="/category" element = { < ItemListContainer /> } />

        <Route path="/item/:Id" element ={ <ItemDetailContainer/> } />

        <Route path="/cart"  element = { <h2 className="iria_carrito" >ACA SE MOSTRARA EL CARRITO</h2>}/>

        <Route path="*" element  = { <h2 className="error_ruta">Lo siento no existe la ruta ingresada</h2> } />

      </Routes>

      < Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;