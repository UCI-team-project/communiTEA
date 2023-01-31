import React from 'react'
import './favoritesList.css'
import { StarOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
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
    <div className='single-item-container'>
      <Carousel afterChange={onChange}>
        {itemArray.map((item, key) => (
          <div key={key} style={contentStyle}>
            <article className='list-item-container'>
              <div className='container-row'>
                <h3>{item.name}</h3>
                <p className='rating'>
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
