import "./CartItem.css";

function CartItem(props) {
  return (
    <div className="cart-item" id={props.id}>
      <img src={props.urlImage} alt={props.name} />
      <div className="cart-item-name">{props.name}</div>
      <div className="cart-item-price">{`${props.price} CAD`}</div>
      <button
        className="cart-item-remove"
        onClick={props.removeFromCartFromCartHandler}
      >
        -
      </button>
      <div className="cart-item-quantity">{`x${props.quantity}`}</div>
      <button
        className="cart-item-add"
        onClick={props.addToCartFromCartHandler}
      >
        +
      </button>
      <div className="cart-item-subtotal">{`${props.subtotal} CAD`}</div>
    </div>
  );
}

export default CartItem;
