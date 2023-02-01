import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import SearchBar from '../../Components/searchBar/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import FooterComponent from '../../Components/footer/footer'
import Navbar from '../../Components/navbar'
// import SearchResults from '../../Components/searchResults/searchResults'
import style from './dashboard.module.css'

const { Content } = Layout

const Dashboard = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Dashboard'
  }, [])

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
                <Skeleton />
                {/* displays the user's favorites list  */}
                <section className={style.reviewSection}>
                  <FavoritesContainer />
                </section>
                {/* displays the user's recent reviews they have posted  */}
                <section className={style.reviewSection}>
                  <RecentReviewsContainer />
                </section>
              </div>
            </Content>
          </section>
        </div>
        <FooterComponent />
      </Layout>
    </>
  )
}
export default Dashboard
