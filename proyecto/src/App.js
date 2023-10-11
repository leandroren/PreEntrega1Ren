import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer Saludo="Bienvenidos a nuestra Tienda" />
    </div>
  )
}

export default App