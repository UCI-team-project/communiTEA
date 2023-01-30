import React from 'react'
import './favoritesList.css'
import { StarOutlined } from '@ant-design/icons'
const itemArray = [
  { name: 'Boba House', rating: 5.0, description: 'business description' },
  { name: 'ShareTea', rating: 3.5, description: 'business description' },
  { name: 'Boba Place', rating: 4.0, description: 'business description' },
  { name: 'Milk Tea', rating: 4.6, description: 'business description' },
]
const SingleItem = () => {
  return (
    <div className='single-item-container'>
      {itemArray.map((item) => (
        <article className='list-item-container'>
          <div className='container-row'>
            <h3>{item.name}</h3>
            <p className='rating'>
              {item.rating} <StarOutlined />
            </p>
          </div>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default SingleItem
