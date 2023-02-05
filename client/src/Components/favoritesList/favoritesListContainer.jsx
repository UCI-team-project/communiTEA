import EmptyCard from "../skeleton/emptyCard";
import SingleItem from "./singleItem";
import style from "./favoritesList.module.css";

export default function FavoritesContainer({ favStores }) {
  return (
    <div className={style.favoritesListContainer}>
      <h2>Favorites List</h2>
      {/* {favStores.length ? ( */}

      {/* favstores.length randomly started giving me an error */}
      {favStores ? (
        <SingleItem storeList={favStores} />
      ) : (
        <EmptyCard item={"favorite stores"} />
      )}
    </div>
  );
}
