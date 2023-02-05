import { useEffect } from "react";
import HeaderComponent from "../../Components/header";
import { Breadcrumb, Layout, theme } from "antd";
import style from "./profile.module.css";
import { Card } from "antd";
import FooterComponent from "../../Components/footer/footer";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

const { Content } = Layout;

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  const welcomer = `Welcome back ${userData.full_name}!`;
  console.log(userData);

  useEffect(() => {
    document.title = "CommuniTEA - Profile";
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <div className={style.profileContainer}>
        <HeaderComponent navItem={"profile"} />
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
                      <article className={style.welcomeContainer}>
                        <Card
                          title={welcomer}
                          bordered={false}
                          className={style.welcomer}
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
