import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo={"Bienvenidos a mi tienda"}/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App
