import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import './footer.css'
import { GithubOutlined } from '@ant-design/icons'
const { Footer } = Layout

const footerLinks = ['home', 'dashboard', 'profile', 'login']

const FooterComponent = () => {
  return (
    <footer>
      <section className=''>
        <h2>
          <Link className='footer-title' to='/home'>
            CommuniTEA
          </Link>
        </h2>
      </section>
      <section className='footer-section'>
        {footerLinks.map((link) => (
          <Link className='footer-links' to={`/${link}`}>
            {capitalizeFirstLetter(link)}
          </Link>
        ))}
      </section>
      <section className='footer-section'>
        <a
          className='social-link'
          href='https://github.com/UCI-team-project/communiTEA'
          target='_blank'
          rel='noreferrer'
        >
          <GithubOutlined />
        </a>
      </section>
    </footer>
  )
}

export default FooterComponent

// <Footer
// style={{
//   textAlign: 'center',
// }}
// >
// ©2023 Created by CommuniTEA
// </Footer>
