import { Breadcrumb, Layout, Menu, theme } from 'antd'
import './dashboard.css'
import FooterComponent from '../../Components/footer'
import SearchBar from '../../Components/searchBar'
import FavoritesContainer from '../../Components/favoritesList/favoritesContainer'
const { Header, Content, Footer } = Layout

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const navList = ['Home', 'Dashboard', 'Profile', 'Login']
  return (
    <Layout className='layout'>
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
          <FavoritesContainer />
        </div>
      </Content>
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
