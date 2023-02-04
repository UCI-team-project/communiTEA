import SingleItem from './singleItem'
import style from './favoritesList.module.css'

export default function FavoritesContainer() {
  return (
    <div className={style.favoritesListContainer}>
      <h2>Favorites List</h2>
      <SingleItem />
    </div>
  )
}
