import { useEffect } from "react";
// import Navbar from "../../Components/navbar.jsx";
import DrawerComp from "../../Components/drawer";
import { Breadcrumb, Layout, theme } from "antd";
import style from "./profile.module.css";
import { Card } from "antd";
import FooterComponent from "../../Components/footer/footer";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const { Content } = Layout;

const Profile = () => {
  useEffect(() => {
    document.title = "CommuniTEA - Profile";
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <div className={style.profileContainer}>
        <DrawerComp navItem={"profile"} />
      </div>
      <Layout>
        <div className={style.wrapper}>
          <section className={style.profileLayout}>
            <Content
              style={{
                padding: "0 1rem",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>
                  <Link to="/dashboard">communiTEA</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>profile</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className={style.siteLayoutContent}
                style={{
                  background: colorBgContainer,
                }}
              >
                {Auth.loggedIn() ? (
                  <>
                    <h1>Profile</h1>
                    <section className={style.profileHeaderSection}>
                      <article>
                        <Card
                          title="Welcome back John Doe"
                          bordered={false}
                          style={{
                            width: 500,
                          }}
                        >
                          <div className={style.cardBody}>
                            <Link to="/dashboard">View Milk Tea places</Link>
                            <Link to="/dashboard">View favorites List</Link>
                            <Link to="/dashboard">View reviews</Link>
                          </div>
                        </Card>
                      </article>
                    </section>
                  </>
                ) : (
                  <div className={style.text}>
                    <p>You need to be logged in to use these features!</p>

                    <pre className={style.art}>
                      <code>{`
          ⢂⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣴⣤⣀⣴⣤⣹⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣷⣶⣾⠿⡛⠋⠸⠿⢿⣿⡟⣻⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⢋⣡⣴⣿⣿⠏⣴⡷⢨⣿⡞⢨⣿⡷⣿⣇⡀⣀⠉⡉⠛⠻⠿⣶⣦⣄⡀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣾⣿⣿⡟⣿⡿⣹⣿⠁⣽⣿⣇⢺⣿⣷⣉⣟⣻⠿⢷⣾⣴⣥⣂⡄⢉⠙⠻⢷⣦⡀⠀⠀
          ⠁⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠈⢿⣷⣿⣿⣿⡿⣷⢿⡯⢹⡟⠹⣯⣽⣿⠙⠛⠛⠻⠿⢿⣶⣬⣭⣛⣿⣷⣾⣦⣄⣙⣿⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⠿⠛⠉⠀⠀⣠⣿⢇⣻⣧⠀⠀⠉⠛⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⢿⣿⣾⣽⣿⠿⠋⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⠿⠋⠀⠀⠀⠀⠀⠀⠈⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢷⣿⡄⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣶⡀⠀
          ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠏⠁⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡝⢿⣦
          ⠀⠀⠀⠀⠀⠀⣰⣿⠟⠁⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡆⠻
          ⠀⠀⠀⠀⣀⣼⡿⠁⠀⠀⠀⠀⣰⡟⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡷⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠹⡄
          ⠀⣴⣶⡿⠿⠋⠀⠀⠀⠀⢀⣼⠏⠀⠸⣧⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⢛⠀⠀⠀⠀⣾⣃⠀⠀⠀⠀⠨⡑
          ⠀⠻⣿⣦⣴⡾⠃⠀⠀⣠⣿⣃⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠈⢙⣦⣀⡤⠄⠒⠀⠀⠀⢌⠀⢠⣴⣾⣿⣏⡶⣤⡀⠀⠀⢣
          ⠀⠀⠈⢻⣿⠁⠀⠀⣴⣿⡉⣙⠷⣶⣤⣤⣽⣇⠀⠀⠀⠀⠀⣿⡶⠶⢶⣻⣛⣻⡟⣦⡀⠀⠀⠀⠀⢎⡀⠀⠉⢿⣿⣿⣿⢃⠁⠀⠀⡡
          ⠀⠀⢠⣿⠇⠀⢀⣾⣯⣿⣿⢿⣿⣿⢷⣬⠁⠹⣧⠀⠀⠀⢸⡏⢐⣾⠿⢿⣿⣿⢿⣿⣿⣦⣀⠀⠀⡞⡄⠀⠀⠀⢿⣿⡇⠰⠂⠀⠀⡔
          ⠀⠀⣾⡟⠀⢠⣿⣿⣿⠋⢰⣾⣿⢿⣿⣧⠀⠀⠘⢷⣄⠀⣿⠁⠀⢀⣾⣿⠿⢿⣿⣮⡙⢿⣿⣷⣴⡸⡁⠀⠀⠀⠘⣿⠃⠀⠏⡀⠰⢠
          ⠀⣼⡿⠁⠀⠸⣿⣿⣧⠀⢸⣿⣧⣬⣿⣿⠆⠀⠀⠀⠙⢷⡟⠀⠀⣼⣿⣯⣀⣸⣿⣿⣗⠈⢿⣿⣿⡿⣇⠀⠀⠀⠀⢹⠁⠀⢱⢀⠃⢆
          ⣾⣿⠇⠀⠀⢸⣯⠉⠻⠷⠻⠿⠟⠻⠛⠋⠀⢀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⢿⣿⣿⣿⡀⢘⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⡀⠸⡄⡉⠆
          ⣿⡟⠀⠀⠆⣿⡯⠠⡁⢆⡐⠠⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠠⠄⡀⠂⠄⡉⠍⡙⢋⠍⠡⣿⣏⠀⠀⠀⠀⠀⠀⡰⠈⣇⠘⡰
          ⣿⠁⠀⠀⣸⣿⠁⢂⠁⠂⠄⠡⠈⠀⢠⣶⣦⣤⣶⣶⢦⣷⣾⢶⣄⠀⠀⠡⢀⠉⠰⢀⠎⢄⠡⡈⢅⢻⡇⠀⠀⠀⠀⠀⠀⡜⡀⢿⠠⣁
          ⡿⠀⠀⢠⣿⡇⠀⢂⠈⠐⠈⡀⠈⠀⣿⡟⢭⡘⢤⠒⡢⢆⡹⠟⡿⣷⡀⠀⠀⡈⠀⠂⠈⢀⠂⠐⠈⣿⠇⠀⠀⠀⠀⠀⡰⠡⠄⢺⡐⠄
          ⠇⠀⠀⠘⣿⣧⠂⠀⠀⠀⢀⠀⠀⢸⡿⣈⠦⡑⢎⡱⡑⢎⠴⡩⢔⡩⣷⡄⠀⠀⢀⠀⠠⠀⠀⠄⣸⡿⠀⠀⠀⠀⠀⢠⢁⡃⠆⢸⡅⢊
          ⠀⠀⠀⠀⠹⣿⣆⠐⠀⠈⠀⠀⠀⢸⣿⢠⢣⡙⢦⠱⣉⢎⠲⡑⢎⠴⣹⣧⠀⠀⠀⠀⠀⠄⠀⢠⣿⠇⠀⠀⠀⠀⢠⠃⢢⡘⠄⢸⡆⡅
          ⡇⠀⠀⠀⢰⡹⣿⣷⣄⠀⠀⠀⠀⠘⣿⢆⠣⡜⢢⠓⡌⢎⡱⣉⢎⠲⣹⢿⡄⠀⠀⠀⠀⠀⢠⣿⡟⠀⠀⠀⢀⠰⡁⠎⡔⠌⡄⢸⡇⠰
          ⣿⡀⠀⠀⠀⢅⠢⡙⢿⣿⣶⣥⡀⢀⣹⣯⡓⣌⠣⣙⠸⢄⡃⠖⣌⠣⣌⣿⡇⡀⠀⠂⣠⣶⣿⡟⡀⠀⡀⠜⢢⠑⡌⠒⡌⡘⠀⡾⢄⢃
        `}</code>
                    </pre>
                  </div>
                )}
              </div>
            </Content>
          </section>
        </div>
        <FooterComponent />
      </Layout>
    </>
  );
};

export default Profile;
