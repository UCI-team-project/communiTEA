import React from 'react'
import SingleItem from './singleItem'
import style from './favoritesList.module.css'
const FavoritesContainer = () => {
  return (
    <div className={style.favoritesListContainer}>
      <h2>Favorites List</h2>
      <SingleItem />
    </div>
  )
}

export default FavoritesContainer
