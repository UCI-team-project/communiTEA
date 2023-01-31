import { useEffect } from 'react'
import Navbar from '../../Components/navbar'

const Home = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Home'
  }, [])
  return (
    <>
      <div className='profile-container'>
        <Navbar navItem='home' />
      </div>
      <h1 className='text-blue-400'>CommuniTEA</h1>
    </>
  )
}

export default Home
