import { useEffect } from 'react'
import { Breadcrumb, Layout, Skeleton, theme } from 'antd'
import './dashboard.css'
import SearchBar from '../../Components/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
// import SearchResults from '../../Components/searchResults/searchResults'
import FooterComponent from '../../Components/footer'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar'

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
      <Navbar navItem={'dashboard'} />
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
                 *
                 * TODO:
                 * - add conditional statement to return a skeleton if no new search has been queried
                 * - if a search has been initiated, render the Search Results component instead of the Skeleton component
                 * {fetchedData ? <Skeleton/> : <SearchResults/>}
                 * */}
                <Skeleton />
                <section className='review-section'>
                  <FavoritesContainer />
                </section>
                <section className='review-section'>
                  <RecentReviewsContainer />
                </section>
              </div>
            </Content>
          </section>{' '}
        </div>
        <FooterComponent />
      </Layout>
    </>
  )
}
export default Dashboard
