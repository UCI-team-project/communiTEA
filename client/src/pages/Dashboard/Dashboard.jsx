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

  useEffect(() => {
    document.title = 'CommuniTEA - Dashboard'
    fetchStores()
  }, [])

  async function fetchStores() {
    await fetch('http://localhost:3001/api/yelp')
      .then((res) => res.json())
      .then((stores) => setStores(stores))
  }
  // console.log('fetched data: ' + stores?.map((store) => store?.name))
  const {
    token: { colorBgContainer },
  } = theme.useToken()

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
                <SearchBar />
                {/*
                 * TODO:
                 * - add conditional statement to return a skeleton if no new search has been queried
                 * - if a search has been initiated, render the Search Results component instead of the Skeleton component
                 * - ex: { fetchedData ? <SearchResults/> : <Skeleton/> }
                 * */}

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
