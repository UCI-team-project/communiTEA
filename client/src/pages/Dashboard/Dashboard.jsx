import { Breadcrumb, Layout, Menu, Skeleton, theme } from 'antd'
import './dashboard.css'
import SearchBar from '../../Components/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesListContainer'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
const { Header, Content, Footer } = Layout

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const navList = ['Home', 'Dashboard', 'Profile', 'Login']
  return (
    <Layout className='layout '>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={navList.map((item, index) => {
            const key = index + 1
            return {
              key,
              label: `${item}`,
            }
          })}
        />
      </Header>
      <div className='wrapper'>
        <section className='dashboard-container'>
          <Content
            style={{
              padding: '0 50px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
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
              <Skeleton />
              <FavoritesContainer />
              <RecentReviewsContainer />
            </div>
          </Content>
        </section>{' '}
      </div>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        ©2023 Created by CommuniTEA
      </Footer>
    </Layout>
  )
}
export default Dashboard
