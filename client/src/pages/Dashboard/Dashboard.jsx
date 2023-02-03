import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import SearchBar from '../../Components/searchBar/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import FooterComponent from '../../Components/footer/footer'
import Navbar from '../../Components/navbar'
// import SearchResults from '../../Components/searchResults/searchResults'
import style from './dashboard.module.css'

import Auth from '../../utils/auth'
import SearchResults from '../../Components/searchResults/searchResults'

const { Content } = Layout

export default function Dashboard() {
  const [stores, setStores] = useState({})
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  console.log('location state: ' + location)
  console.log('search state: ' + searchQuery)

  useEffect(() => {
    document.title = 'CommuniTEA - Dashboard'
    // fetchStores()
  }, [searchQuery])

  async function fetchStores() {
    await fetch('http://localhost:3001/api/yelp', {
      method: 'GET',
      headers: {
        location: location,
        searchQuery: searchQuery,
      },
    })
      .then((res) => res.json())
      .then((stores) => setStores(stores))
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchStores()
  }
  return (
    <>
      <div className={style.navContainer}>
        <Navbar navItem={'dashboard'} />
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
                <form onSubmit={handleSubmit}>
                  {/* <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search for a place'
                  /> */}
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Enter location'
                  />
                  <button>Search</button>
                </form>

                {Auth.loggedIn() ? (
                  <>
                    {stores ? (
                      <SearchResults storesData={stores} />
                    ) : (
                      <Skeleton />
                    )}
                    {/* displays the user's favorites list  */}
                    <section className={style.reviewSection}>
                      <FavoritesContainer />
                      <RecentReviewsContainer />
                    </section>
                  </>
                ) : (
                  <>
                    <p>You need to be logged in to use these features!</p>
                  </>
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
