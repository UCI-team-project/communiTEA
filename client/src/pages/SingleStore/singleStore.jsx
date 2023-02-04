/* eslint-disable jsx-a11y/alt-text */
import { Button } from 'antd/es/radio'
import { useState, useEffect } from 'react'
import FooterComponent from '../../Components/footer/footer'
import HeaderComponent from '../../Components/header'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import style from './singleStore.module.css'
import { useLocation } from 'react-router-dom'

const SingleStore = () => {
  const location = useLocation()
  const path = location.pathname.split('/')
  const storeID = path[path.length - 1]

  const [reviews, setReviews] = useState({})
  const [storeData, setStoreData] = useState({})

  useEffect(() => {
    document.title = 'CommuniTEA - Search results'
    fetchYelpReviews()
    fetchStoreDetails()
  }, [])

  const expressAPI = process.env.REACT_APP_API_ENDPOINT

  async function fetchYelpReviews() {
    const endpoint = `/reviews/${storeID}`
    const api = expressAPI + endpoint
    await fetch(api, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews))
  }

  async function fetchStoreDetails() {
    const endpoint = `/store/${storeID}`
    const api = expressAPI + endpoint
    await fetch(api, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((stores) => setStoreData(stores))
  }

  console.log(storeData)
  return (
    <>
      {storeData && (
        <>
          <div className={style.navContainer}>
            <HeaderComponent />
          </div>
          <main className={style.main}>
            <div className={style.contentWrapper}>
              <header className={style.header}>
                <h1>
                  <a href={storeData.url} target='_blank'>
                    {storeData.name}
                  </a>
                </h1>
                <p id='rating' className={style.rating}>
                  {storeData.rating}
                </p>
              </header>
              <section className={style.photoContainer}>
                {storeData?.photos?.map((photo) => (
                  <img src={photo} className={style.image} />
                ))}
              </section>
              <div className={style.descriptionWrapper}>
                <section className={style.storeDescription}>
                  <div>
                    {' '}
                    <article>
                      <div className={style.categoryContainer}>
                        {storeData?.categories?.map((category, key) => (
                          <p key={key}>{category.alias}</p>
                        ))}
                      </div>
                      <p>{storeData?.location?.address1}</p>
                      <p>
                        {storeData?.location?.city},{' '}
                        {storeData?.location?.state}{' '}
                        {storeData?.location?.zip_code}
                      </p>
                      <p>price: {storeData?.price}</p>
                      <p>{storeData?.display_phone}</p>
                      <button className={style.addToFavBtn}>
                        Add to favorites
                      </button>
                    </article>
                  </div>
                </section>
                <section className={style.reviewsContainer}>
                  <RecentReviewsContainer reviews={reviews} />
                </section>
              </div>
              <article className={style.reviewFormArticle}>
                <form action='#' className={style.reviewForm}>
                  <label htmlFor='comment'>Comments</label>
                  <textarea
                    name='review'
                    id='reviewForm'
                    cols='30'
                    rows='10'
                    placeholder='Leave a comment...'
                  ></textarea>
                  <div className={style.reviewBtnContainer}>
                    <button className={style.reviewBtn}>Post</button>
                  </div>
                </form>
              </article>
            </div>
          </main>
          <FooterComponent />{' '}
        </>
      )}
    </>
  )
}

export default SingleStore
