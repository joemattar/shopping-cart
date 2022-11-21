import "./Shop.css";
import data from "../../assets/data";
import ItemCard from "../../components/ItemCard/ItemCard";

function Shop() {
  function displayItems() {
    const itemsInfoList = Object.values(data);

    const itemsCardList = [];

    for (let item of itemsInfoList) {
      const newItemCard = (
        <ItemCard
          urlImage={item.urlImage}
          name={item.name}
          subgroup={item.subgroup}
          alliance={item.alliance}
          price={item.price}
        />
      );
      itemsCardList.push(newItemCard);
    }
    return itemsCardList;
  }

  return <div className="shop">{displayItems()}</div>;
}

export default Shop;
