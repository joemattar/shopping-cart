import "./Shop.css";
import data from "../../assets/data";
import ItemCard from "../../components/ItemCard/ItemCard";

function Shop(props) {
  function displayItems() {
    const itemsInfoList = Object.values(data);

    const itemsCardList = [];

    for (let item of itemsInfoList) {
      const newItemCard = (
        <ItemCard
          key={item.id}
          id={item.id}
          urlImage={item.urlImage}
          url={item.url}
          name={item.name}
          subgroup={item.subgroup}
          alliance={item.alliance}
          price={item.price}
          addToCartHandler={props.addToCartHandler}
        />
      );
      itemsCardList.push(newItemCard);
    }
    return itemsCardList;
  }

  return <div className="shop">{displayItems()}</div>;
}

export default Shop;
