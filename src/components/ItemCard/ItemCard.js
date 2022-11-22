import "./ItemCard.css";

// Declare ItemCard component to display an item card with item info & price
function ItemCard(props) {
  return (
    <div className="item-card" id={props.id}>
      <img src={props.urlImage} alt={props.name} />
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="item-name">{props.name.toUpperCase()}</div>
      </a>
      <div className="item-subgroub">{props.subgroup.toUpperCase()}</div>
      <div className="item-alliance">{props.alliance.toUpperCase()}</div>
      <div className="item-price">{`${props.price} CAD`}</div>
      <button className="add-cart" onClick={props.addToCartFromShopHandler}>
        ADD TO CART
      </button>
    </div>
  );
}

export default ItemCard;
