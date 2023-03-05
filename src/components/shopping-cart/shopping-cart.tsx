interface shoppingCartProps {
  shoppingCart: {
    name: string
    quantity: number
    price: number
  }[]
  setShowShoppingCart: () => void
}

export default function ShoppingCart({
  shoppingCart,
  setShowShoppingCart,
}: shoppingCartProps) {
  return (
    <div>
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map((item) => (
            <div key={item.name}>
              <figure>
                <img src="" alt="" />
              </figure>
              <p>{item.name}</p>
              <p>
                ${item.price} x {item.quantity}{' '}
                <b>${item.price * item.quantity}</b>
              </p>
              <button>x</button>
              <button>Checkout</button>
            </div>
          ))}
        </>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  )
}
