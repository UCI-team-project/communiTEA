import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Skeleton, theme } from "antd";
import SearchBar from "../../Components/searchBar/searchBar";
import FavoritesContainer from "../../Components/favoritesList/favoritesListContainer";
import RecentReviewsContainer from "../../Components/recentReviews/recentReviewsContainer";
import FooterComponent from "../../Components/footer/footer";
import HeaderComponent from "../../Components/header";

// import SearchResults from '../../Components/searchResults/searchResults'
import style from "./dashboard.module.css";
import { Card } from "antd";

import Auth from "../../utils/auth";

const { Content } = Layout;

const Dashboard = () => {
  useEffect(() => {
    document.title = "CommuniTEA - Dashboard";
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <div className={style.navContainer}>
        <HeaderComponent />
      </div>
      <Layout>
        <div className={style.wrapper}>
          <section className={style.dashboardContainer}>
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
                  <Link to="/dashboard">Dashboard</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Search</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className={style.siteLayoutContent}
                style={{
                  background: colorBgContainer,
                }}
              >
                {/*
                 *************************
                 * Main dashboard content
                 *************************
                 */}
                <SearchBar />
                {/*
                 * TODO:
                 * - add conditional statement to return a skeleton if no new search has been queried
                 * - if a search has been initiated, render the Search Results component instead of the Skeleton component
                 * - ex: { fetchedData ? <SearchResults/> : <Skeleton/> }
                 * */}

                {Auth.loggedIn() ? (
                  <>
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
                    <Skeleton />
                    {/* displays the user's favorites list  */}
                    <section className={style.reviewSection}>
                      <FavoritesContainer />
                      <RecentReviewsContainer />
                    </section>
                  </>
                ) : (
                  <div className={style.text}>
                    <p>You need to be logged in to use these features!</p>

                    <pre className={style.art}>
                      <code>{`
         ⣀⣀⣀ ⣀⣀⣀ ⣀⡀⣀⣀ 
    ⠴⠊                    ⠈⠢⢄
            Yes, I'm            
   ⠘⡀          member of           ⠘⡀ 
  ⠀⠀⠘⡀⠀⠀⠀⠀     CommuniTEA    ⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀
  ⠀⠀⠀⠑⡀⠀⠀⠀⠀⠀⠀                    ⡔⠁⠀⠀⠀
   ⠈⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        ⡔⠁
            ⢸⠀⠀⠀⢀⣀⣀⣀ ⣀⣀⣀⣀⡀⠤⡔⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
   
  ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠋⠉⠈⠉⠉⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿
  ⣿⣿⣿⣿⡏⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿
  ⣿⣿⣿⢏⣴⣿⣷⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿
  ⣿⣿⣟⣾⣿⡟⠁⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⢢⠀⠀⠀⠀⠀⠀⠀⢸⣿
  ⣿⣿⣿⣿⣟⠀⡴⠄⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⣿
  ⣿⣿⣿⠟⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⣿
  ⣿⣁⡀⠀⠀⢰⢠⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡄⠀⣴⣶⣿⡄⣿
  ⣿⡋⠀⠀⠀⠎⢸⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠗⢘⣿⣟⠛⠿⣼
  ⣿⣿⠋⢀⡌⢰⣿⡿⢿⡀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣧⢀⣼
  ⣿⣿⣷⢻⠄⠘⠛⠋⠛⠃⠀⠀⠀⠀⠀⢿⣧⠈⠉⠙⠛⠋⠀⠀⠀⣿⣿⣿⣿⣿
  ⣿⣿⣧⠀⠈⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⢀⢃⠀⠀⢸⣿⣿⣿⣿
  ⣿⣿⡿⠀⠴⢗⣠⣤⣴⡶⠶⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡸⠀⣿⣿⣿⣿
  ⣿⣿⣿⡀⢠⣾⣿⠏⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠀⣿⣿⣿⣿
  ⣿⣿⣿⣧⠈⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿
  ⣿⣿⣿⣿⡄⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣦⣄⣀⣀⣀⣀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠙⣿⣿⡟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠁⠀⠀⠹⣿⠃⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⠿⠛⠉⠉⠁⠀⢻⣿⡇⠀⠀⠀⠀⠀⠀⢀⠈⣿⣿⡿⠉⠛⠛⠛⠉⠉
  ⣿⡿⠋⠁⠀⠀⢀⣀⣠⡴⣸⣿⣇⡄⠀⠀⠀⠀⢀⡿⠄⠙⠛⠀⣀⣠⣤⣤⠄⠀
        `}</code>
                    </pre>
                  </div>
                )}
              </div>
            </Content>
          </section>
        </div>
      </Layout>
      <FooterComponent />
    </>
  );
};
export default Dashboard;
