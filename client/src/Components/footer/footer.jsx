/* eslint-disable react/jsx-no-target-blank */
import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import style from './footer.module.css'
import { GithubOutlined } from '@ant-design/icons'

export default function FooterComponent() {
  return (
    <footer>
      <section className={style.footerSection}>
        <h2>
          <Link className={style.footerTitle} to='/home'>
            CommuniTEA
          </Link>
        </h2>
      </section>
      <section className={style.footerSection}>
        {footerLinks.map((link, key) => (
          <Link className={style.footerLinks} to={`/${link}`} key={key}>
            {capitalizeFirstLetter(link)}
          </Link>
        ))}
      </section>
      <section className={style.footerSection}>
        <a className={style.socialLink} href={githubLink} target='_blank'>
          <GithubOutlined />
        </a>
      </section>
    </footer>
  )
}

const footerLinks = ['home', 'dashboard', 'profile', 'login']
const githubLink = 'https://github.com/UCI-team-project/communiTEA'
