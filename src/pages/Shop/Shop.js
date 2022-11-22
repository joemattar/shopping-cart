import "./Shop.css";
import data from "../../assets/data";
import ItemCard from "../../components/ItemCard/ItemCard";

// Declare Shop component to display the shop page with all the item cards
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
          addToCartFromShopHandler={props.addToCartFromShopHandler}
        />
      );
      itemsCardList.push(newItemCard);
    }
    return itemsCardList;
  }

  return <div className="shop">{displayItems()}</div>;
}

export default Shop;
