import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import FooterComponent from '../../Components/footer/footer'
import HeaderComponent from '../../Components/header'

// import SearchResults from '../../Components/searchResults/searchResults'
import style from './dashboard.module.css'
import { Card } from 'antd'

import Auth from '../../utils/auth'
import SearchResults from '../../Components/searchResults/searchResults'

const { Content } = Layout

export default function Dashboard() {
  const [stores, setStores] = useState({})
  const [location, setLocation] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'CommuniTEA - Dashboard'
  }, [])

  const expressAPI = process.env.REACT_APP_API_ENDPOINT
  async function fetchStores() {
    await fetch(expressAPI, {
      method: 'GET',
      headers: {
        location: location,
        // searchQuery: searchQuery,
      },
    })
      .then((res) => res.json())
      .then((stores) => setStores(stores))
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // form submit for location
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
                <form className={style.locationForm} onSubmit={handleSubmit}>
                  <input
                    className={style.formInput}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Enter location'
                  />
                  {/* <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search for a place'
                  /> */}
                  <button className={style.formSubmitBtn}>Search</button>
                </form>

                {Auth.loggedIn() ? (
                  <>
                    {stores ? (
                      <SearchResults storesData={stores} />
                    ) : (
                      <Skeleton />
                    )}
                    <section className={style.profileHeaderSection}>
                      <article>
                        <Card
                          title='Welcome back John Doe'
                          bordered={false}
                          style={{
                            width: 500,
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
                    <Skeleton />
                    {/* displays the user's favorites list  */}
                    <section className={style.reviewSection}>
                      <FavoritesContainer />
                      <RecentReviewsContainer />
                    </section>
                  </>
                ) : (
                  <div className={style.text}>
                    <p>You need to be logged in to use these features!</p>

                    <pre className={style.art}>
                      <code>{`
         ⣀⣀⣀ ⣀⣀⣀ ⣀⡀⣀⣀ 
    ⠴⠊                    ⠈⠢⢄
            Yes, I'm            
   ⠘⡀          member of           ⠘⡀ 
  ⠀⠀⠘⡀⠀⠀⠀⠀     CommuniTEA    ⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀
  ⠀⠀⠀⠑⡀⠀⠀⠀⠀⠀⠀                    ⡔⠁⠀⠀⠀
   ⠈⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        ⡔⠁
            ⢸⠀⠀⠀⢀⣀⣀⣀ ⣀⣀⣀⣀⡀⠤⡔⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
   
  ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠋⠉⠈⠉⠉⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿
  ⣿⣿⣿⣿⡏⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿
  ⣿⣿⣿⢏⣴⣿⣷⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿
  ⣿⣿⣟⣾⣿⡟⠁⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⢢⠀⠀⠀⠀⠀⠀⠀⢸⣿
  ⣿⣿⣿⣿⣟⠀⡴⠄⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⣿
  ⣿⣿⣿⠟⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⣿
  ⣿⣁⡀⠀⠀⢰⢠⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡄⠀⣴⣶⣿⡄⣿
  ⣿⡋⠀⠀⠀⠎⢸⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠗⢘⣿⣟⠛⠿⣼
  ⣿⣿⠋⢀⡌⢰⣿⡿⢿⡀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣧⢀⣼
  ⣿⣿⣷⢻⠄⠘⠛⠋⠛⠃⠀⠀⠀⠀⠀⢿⣧⠈⠉⠙⠛⠋⠀⠀⠀⣿⣿⣿⣿⣿
  ⣿⣿⣧⠀⠈⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⢀⢃⠀⠀⢸⣿⣿⣿⣿
  ⣿⣿⡿⠀⠴⢗⣠⣤⣴⡶⠶⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡸⠀⣿⣿⣿⣿
  ⣿⣿⣿⡀⢠⣾⣿⠏⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠀⣿⣿⣿⣿
  ⣿⣿⣿⣧⠈⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿
  ⣿⣿⣿⣿⡄⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣦⣄⣀⣀⣀⣀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠙⣿⣿⡟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠁⠀⠀⠹⣿⠃⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⠿⠛⠉⠉⠁⠀⢻⣿⡇⠀⠀⠀⠀⠀⠀⢀⠈⣿⣿⡿⠉⠛⠛⠛⠉⠉
  ⣿⡿⠋⠁⠀⠀⢀⣀⣠⡴⣸⣿⣇⡄⠀⠀⠀⠀⢀⡿⠄⠙⠛⠀⣀⣠⣤⣤⠄⠀
        `}</code>
                    </pre>
                  </div>
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
