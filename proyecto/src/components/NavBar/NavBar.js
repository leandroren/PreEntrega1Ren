import './NavBar.css'
import logo from '../NavBar/logo.png'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <div className="header">
      <div className="nav container">
        <div className="logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
        <ul className="menu">
          <li><a href="/">Remeras</a></li>
          <li><a href="/">Buzos</a></li>
          <li><a href="/">Tazas</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
        <div className="cart">
          <CartWidget />
        </div>
      </div>
    </div>
  )
}

export default NavBar

