/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react'
import Navbar from '../../Components/navbar'
import { Link } from 'react-router-dom'
import SearchBar from '../../Components/searchBar/searchBar'
import { Button } from 'antd'
import TrendingShopsContainer from '../../Components/trendingshops/trendingshopsContainer'
import style from './home.module.css'
import FooterComponent from '../../Components/footer/footer'
import image from '../../assets/images/tea.jpg'

const Home = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Home'
  }, [])

  return (
    <>
      <div className={style.navContainer}>
        <Navbar navItem={'home'} />
      </div>
      <div className={style.homeContainer}>
        <div className={style.wrapper}>
          <h1 className=''>CommuniTEA</h1>
          <article className={style.ctaWrapper}>
            <p className={style.headerText}>
              Unsure of where to go for delicious boba drinks? Find the best
              boba spots near you curated by our friendly community!
            </p>
            <img src={image} alt='header' className={style.image} />
            <article className={style.apiContainer}>
              <p className={style.apiInfo}>
                "With millions of business updates every month, Yelp Fusion
                delivers the most current and most accurate local data
                available. Choose from dozens of attributes per business, and as
                millions of new reviews and photos are added by active Yelp
                users, the Yelp data set remains unparalleled in its rich
                detail, freshness, and accuracy."{' '}
                <a
                  href='https://fusion.yelp.com/'
                  className={style.apiLink}
                  target='_blank'
                >
                  - Yelp Fusion API{' '}
                </a>
              </p>
            </article>
            <div className={style.cta}>
              <SearchBar />
              <Link to='/login'>
                <Button>LOGIN</Button>
              </Link>
              <h5>or</h5>
              <Link to='/signup'>
                <Button>SIGNUP</Button>
              </Link>
            </div>
          </article>
          <TrendingShopsContainer />
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Home
