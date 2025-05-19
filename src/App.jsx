import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a mi eCommerce' />

    </div>
  )
}

export default App
