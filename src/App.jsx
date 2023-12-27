
import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


export const App = () => {

let profesor = "Nazareno";

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting={"Mi Primer Pre-Entrega"}/>
    </>
  )
}

export default App