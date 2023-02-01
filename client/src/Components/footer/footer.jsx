import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import './footer.css'
import { GithubOutlined } from '@ant-design/icons'

const footerLinks = ['home', 'dashboard', 'profile', 'login']
const socialLinks = ['https://github.com/UCI-team-project/communiTEA']

const FooterComponent = () => {
  return (
    <footer>
      <section className='footer-section'>
        <h2>
          <Link className='footer-title' to='/home'>
            CommuniTEA
          </Link>
        </h2>
      </section>
      <section className='footer-section'>
        {footerLinks.map((link, key) => (
          <Link className='footer-links' to={`/${link}`} key={key}>
            {capitalizeFirstLetter(link)}
          </Link>
        ))}
      </section>
      <section className='footer-section'>
        <a
          className='social-link'
          href={socialLinks[0]}
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
