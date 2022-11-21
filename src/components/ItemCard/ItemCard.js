import "./ItemCard.css";

function ItemCard(props) {
  return (
    <div className="item-card">
      <img src={props.urlImage} alt={props.name} />
      <div>{props.name}</div>
      <div>{props.subgroup}</div>
      <div>{props.alliance}</div>
      <div>{`${props.price} CAD`}</div>
    </div>
  );
}

export default ItemCard;
