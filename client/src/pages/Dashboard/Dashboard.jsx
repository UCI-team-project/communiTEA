import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import SearchResults from '../../Components/searchResults/searchResults'
import FooterComponent from '../../Components/footer/footer'
import HeaderComponent from '../../Components/header'
import CodeArt from '../../Components/codeArt/art'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import { Card } from 'antd'
import style from './dashboard.module.css'

const { Content } = Layout

export default function Dashboard() {
  const [stores, setStores] = useState({})
  const [location, setLocation] = useState('')

  useEffect(() => {
    document.title = 'CommuniTEA - Dashboard'
  }, [])

  const expressAPI = process.env.REACT_APP_API_ENDPOINT
  async function fetchStores() {
    await fetch(expressAPI, {
      method: 'GET',
      headers: {
        location: location,
      },
    })
      .then((res) => res.json())
      .then((stores) => setStores(stores))
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // form for location search
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchStores()
  }

  return (
    <>
      <div className={style.navContainer}>
        <HeaderComponent />
      </div>
      <Layout>
        <div className={style.wrapper}>
          <section className={style.dashboardContainer}>
            <Content
              style={{
                padding: '0 1rem',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              >
                <Breadcrumb.Item>
                  <Link to='/dashboard'>Dashboard</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Search</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className={style.siteLayoutContent}
                style={{
                  background: colorBgContainer,
                }}
              >
                {/*
                 *************************
                 * Main dashboard content
                 *************************
                 */}
                <section className={style.profileHeaderSection}>
                  <article>
                    <Card
                      title='Welcome back John Doe'
                      bordered={false}
                      style={{
                        width: '100%',
                        backgroundColor: 'gainsboro',
                      }}
                    >
                      <div className={style.cardBody}>
                        <Link to='/dashboard'>View Milk Tea places</Link>
                        <Link to='/dashboard'>View favorites List</Link>
                        <Link to='/dashboard'>View reviews</Link>
                      </div>
                    </Card>
                  </article>
                </section>
                {/*
                 *******************
                 * Search store form
                 *******************
                 */}
                <form className={style.locationForm} onSubmit={handleSubmit}>
                  <h3>Search for a Milk Tea place!</h3>
                  <span className={style.inputContainer}>
                    {' '}
                    <input
                      className={style.formInput}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder='Enter location'
                    />
                    <button className={style.formSubmitBtn}>Search</button>
                  </span>
                </form>
                {Auth.loggedIn() ? (
                  <>
                    {location ? (
                      <>
                        <SearchResults storesData={stores} />
                      </>
                    ) : (
                      <div className={style.skeletonContainer}>
                        <Skeleton />
                      </div>
                    )}

                    {/* displays the user's favorites list  */}
                    <section className={style.reviewSection}>
                      <FavoritesContainer />
                      <RecentReviewsContainer />
                    </section>
                  </>
                ) : (
                  <CodeArt />
                )}
              </div>
            </Content>
          </section>
        </div>
      </Layout>
      <FooterComponent />
    </>
  )
}
