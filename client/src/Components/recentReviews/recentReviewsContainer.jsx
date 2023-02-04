import React from 'react'

import SingleItem from './singleItem'
import style from './reviewsList.module.css'
const RecentReviewsContainer = ({ reviews }) => {
  return (
    <div className={style.recentReviewsContainer}>
      <h2>Recent reviews</h2>
      <SingleItem reviews={reviews} />
    </div>
  )
}

export default RecentReviewsContainer
