import EmptyCard from '../skeleton/emptyCard'
import { Carousel } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import style from './reviewsList.module.css'

export default function SingleItem({ reviews }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  console.log(reviews);
  return (
    <div className={style.singleItemContainer}>
      <Carousel afterChange={onChange}>
        {reviews ? (
          reviews?.map((review) => (
            <div key={review._id} style={contentStyle}>
              <article className={style.listItemContainer}>
                <p className={style.rating}>
                  {review.score} <StarOutlined />
                </p>
                <div className={style.containerRow}>
                  <h3>"{review.content}"</h3>
                </div>
                <p>
                  - {review.full_name} {review.createdAt}
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

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
