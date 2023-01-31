import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import SearchBar from '../../Components/searchBar/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import FooterComponent from '../../Components/footer/footer'
import Navbar from '../../Components/navbar'
// import SearchResults from '../../Components/searchResults/searchResults'
import './dashboard.css'

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
      <div className='nav-container'>
        <Navbar navItem={'dashboard'} />
      </div>
      <Layout>
        <div className='wrapper'>
          <section className='dashboard-container'>
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
                className='site-layout-content'
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
                <section className='review-section'>
                  <FavoritesContainer />
                </section>
                {/* displays the user's recent reviews they have posted  */}
                <section className='review-section'>
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
