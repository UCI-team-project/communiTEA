import DrawerComp from '../drawer'
import { Layout } from 'antd'
import style from './header.module.css'
import image from '../../assets/icons/boba-icon.png'

export default function HeaderComponent() {
  return (
    <Layout className='layout'>
      <div>
        <header className={style.header}>
          <a href='/'>
            CommuniTEA
            <img className={style.icon} src={image} alt='boba icon'></img>
          </a>
          <DrawerComp />
        </header>
      </div>
    </Layout>
  )
}
