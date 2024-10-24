import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter> 
        <NavBar/>
        
        <Routes> 
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a mi tienda"}/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Categorias"}/>}/>
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer />} /> 

          <Route path="*" element={ <div>Error 404 - Pagina no encontrada</div> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
