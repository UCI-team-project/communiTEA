import { useEffect } from 'react'
import Navbar from '../../Components/navbar'
import { Link } from 'react-router-dom'
import SearchBar from '../../Components/searchBar/searchBar'
import { Button } from 'antd'
import TrendingShopsContainer from '../../Components/trendingshops/trendingshopsContainer'

const Home = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Home'
  }, [])

  return (
    <>
      <Navbar navItem='home' />
      <h1 className=''>CommuniTEA</h1>
      <div>
        <SearchBar />
        <Link to='/login'>
          <Button>LOGIN</Button>
        </Link>
        <h5>or</h5>
        <Link to='/signup'>
          <Button>SIGNUP</Button>
        </Link>
      </div>
      <TrendingShopsContainer />
    </>
  )
}

export default Home
