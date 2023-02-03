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
const itemArray = [
  { name: 'Boba House', rating: 5.0, description: 'business description' },
  { name: 'ShareTea', rating: 3.5, description: 'business description' },
  { name: 'Boba Place', rating: 4.0, description: 'business description' },
  { name: 'Milk Tea', rating: 4.6, description: 'business description' },
]
const SingleItem = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <div className={style.singleItemContainer}>
      <Carousel afterChange={onChange}>
        <EmptyCard />
        {itemArray.map((item, key) => (
          <div key={key} style={contentStyle}>
            <article className={style.listItemContainer}>
              <div className={style.containerRow}>
                <h3>{item.name}</h3>
                <p className={style.rating}>
                  {item.rating} <StarOutlined />
                </p>
              </div>
              <p>{item.description}</p>
            </article>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SingleItem