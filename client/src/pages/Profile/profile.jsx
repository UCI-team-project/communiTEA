import { useEffect } from 'react'
import Navbar from '../../Components/navbar'

const Profile = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Profile'
  }, [])
  return (
    <>
      <Navbar navItem={'profile'} />
      <div>Profile</div>
    </>
  )
}

export default Profile
