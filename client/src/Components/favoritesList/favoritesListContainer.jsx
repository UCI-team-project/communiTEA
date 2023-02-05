import SingleItem from './singleItem'
import style from './favoritesList.module.css'

export default function FavoritesContainer({favStores}) {

  return (
    <div className={style.favoritesListContainer}>
      <h2>Favorites List</h2>
      {favStores
        ? <SingleItem storeList={favStores}/>
        : <p>You have no favorited stores</p>
      }
    </div>
  )
}
