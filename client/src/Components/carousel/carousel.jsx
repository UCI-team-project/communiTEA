/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Carousel } from 'antd'
import image from '../../assets/images/tea.jpg'
import style from './imageCarousel.module.css'

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const itemArray = [
  { img: image },
  { img: image },
  { img: image },
  { img: image },
]

export default function ImageCarousel() {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <div>
      <Carousel afterChange={onChange}>
        {itemArray.map((item, key) => (
          <div key={key} style={contentStyle}>
            <article className=''>
              <div className={style.imgContainer}>
                <img src={item.img} className={style.carouselImg} />
              </div>
            </article>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
