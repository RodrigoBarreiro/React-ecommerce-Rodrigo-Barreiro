import "./App.css"
import { NavBar } from "./components/NavBar";
import {Articulos} from "./components/Articulos";
import { Footer } from "./components/Footer";
import { ItemListConteiner } from "./components/ItemListConteiner";


const App = ()  => {
  return (
    <div >
      < NavBar/>
      <ItemListConteiner greetings= {"Hola Rodrigo como estas?"} />
      <div className="conjunto_articulos">
        <Articulos titulo= "Boba Fett" content= "Boba Fett cazara la atencion de quien ingrese a tu casa al punto que no querra irse sin tomarle una foto" precio= "$500" img= "./images/1.jpg"/>
        <Articulos titulo= "Trooper" content= "Troopers con grandes estilos realzaran tu habitacion pero cuidado con mirar a los ojos a mitico Darth Vader" precio= "$500" img= "./images/2.jpg"/>
        <Articulos titulo= "Maestro Yoda" content= "Maestro Yoda guiara con la fuerza la atencion de quien lo mire, seguramente no dejen de mirarlo" precio= "$500" img= "./images/3.jpg"/>
        <Articulos titulo= "Darth Vader" content= "Darth Vader guiara al lado oscuro con sus ojos no tan oscuros, pero seguro que alguien preguntara donde compraste ese cuadro" precio= "$500" img= "./images/4.jpg"/>
        <Articulos titulo= "Baby Yoda" content= "El encanto de Grogu o baby Yoda, no importa como lo llamen el siempre tendra tu atencion   " precio= "$500" img= "./images/5.jpg"/>
        <Articulos titulo= "Dark Power" content= "Darth Vader en su maximo explendor te guiara al lado oscuro con solo mirarlo" precio= "$500" img= "./images/6.jpg"/>
        <Articulos titulo= "Chewbacca" content= "Chewbacca tiene mas estilo que nunca, mas de uno querra tener su cabello" precio= "$500" img= "./images/7.jpg"/>
        <Articulos titulo= "Dark Side" content= "La combinacion del lado oscuro sera irresistible para quien la vea " precio= "$500" img= "./images/8.jpg"/>
        <Articulos titulo= "Hope" content= "El mitio Luke Skywalker no dejara de brillar en tu hogar, generando asi una presencia luminosa hacie el lado de la luz" precio= "$500" img= "./images/9.jpg"/>
      </div>
      < Footer />
    </div>
  );
}

export default App;
