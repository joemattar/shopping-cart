import "./ItemCard.css";

function ItemCard(props) {
  return (
    <div className="item-card" id={props.id}>
      <img src={props.urlImage} alt={props.name} />
      <div className="item-name">{props.name.toUpperCase()}</div>
      <div className="item-subgroub">{props.subgroup.toUpperCase()}</div>
      <div className="item-alliance">{props.alliance.toUpperCase()}</div>
      <div className="item-price">{`${props.price} CAD`}</div>
      <button className="add-cart" onClick={props.addToCartHandler}>
        ADD TO CART
      </button>
    </div>
  );
}

export default ItemCard;
