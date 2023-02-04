import React from 'react'
import style from './reviewsList.module.css'
import { StarOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import EmptyCard from '../skeleton/emptyCard'
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const SingleItem = ({ reviews }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <div className={style.singleItemContainer}>
      <Carousel afterChange={onChange}>
        {reviews ? (
          reviews?.reviews?.map((item, key) => (
            <div key={key} style={contentStyle}>
              <article className={style.listItemContainer}>
                <p className={style.rating}>
                  {item.rating} <StarOutlined />
                </p>
                <div className={style.containerRow}>
                  <h3>"{item.text}"</h3>
                </div>
                <p>
                  - {item.user.name} {item.time_created}
                </p>
              </article>
            </div>
          ))
        ) : (
          <EmptyCard />
        )}
      </Carousel>
    </div>
  )
}

export default SingleItem
