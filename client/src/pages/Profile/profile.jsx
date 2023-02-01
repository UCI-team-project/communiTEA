import { useEffect } from 'react'
import Navbar from '../../Components/navbar'
import { Breadcrumb, Layout, theme } from 'antd'
import style from './profile.module.css'
import { Card } from 'antd'
import FooterComponent from '../../Components/footer/footer'
import { Link } from 'react-router-dom'
const { Content } = Layout

const Profile = () => {
  useEffect(() => {
    document.title = 'CommuniTEA - Profile'
  }, [])
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <div className={style.profileContainer}>
        <Navbar navItem={'profile'} />
      </div>
      <Layout>
        <div className={style.wrapper}>
          <section className={style.profileLayout}>
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
                  <Link to='/dashboard'>communiTEA</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>profile</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className={style.siteLayoutContent}
                style={{
                  background: colorBgContainer,
                }}
              >
                {/*
                 *************************
                 * Main profile content
                 *************************
                 */}
                <h1>Profile</h1>
                <section className={style.profileHeaderSection}>
                  <article>
                    <Card
                      title='Welcome back John Doe'
                      bordered={false}
                      style={{
                        width: 500,
                      }}
                    >
                      <div className={style.cardBody}>
                        <Link to='/dashboard'>View Milk Tea places</Link>
                        <Link to='/dashboard'>View favorites List</Link>
                        <Link to='/dashboard'>View reviews</Link>
                      </div>
                    </Card>
                  </article>
                </section>
              </div>
            </Content>
          </section>
        </div>
        <FooterComponent />
      </Layout>
    </>
  )
}

export default Profile
