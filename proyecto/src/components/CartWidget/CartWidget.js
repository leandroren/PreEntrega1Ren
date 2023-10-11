import cart from './cart.svg'

const CartWidget = () => {
  const itemCount = 10

  return (
    <div className="cart">
      <img src={cart} alt="Carrito de compras" />
      <span>{itemCount}</span>
    </div>
  )
}

export default CartWidget