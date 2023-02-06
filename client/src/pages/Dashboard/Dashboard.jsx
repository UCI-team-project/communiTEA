import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

import RecentReviewsContainer from "../../Components/recentReviews/recentReviewsContainer";
import FavoritesContainer from "../../Components/favoritesList/favoritesListContainer";
import SearchResults from "../../Components/searchResults/searchResults";
import FooterComponent from "../../Components/footer/footer";
import HeaderComponent from "../../Components/header";
import CodeArt from "../../Components/codeArt/art";

import { Breadcrumb, Card, Layout, Skeleton, theme } from "antd";
// import { Card } from 'antd'
import style from "./dashboard.module.css";

const { Content } = Layout;

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  const welcomer = `Welcome back ${userData.full_name}!`;
  // console.log(userData)

  const [stores, setStores] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    document.title = "CommuniTEA - Dashboard";
  }, []);

  const expressAPI = process.env.REACT_APP_API_ENDPOINT;
  async function fetchStores() {
    await fetch(expressAPI, {
      method: "GET",
      headers: {
        location: location,
      },
    })
      .then((res) => res.json())
      .then((stores) => setStores(stores));
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // form for location search

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchStores();
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

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
                {Auth.loggedIn() ? (
                  <>
                    <section className={style.profileHeaderSection}>
                      <article className={style.welcomeContainer}>
                        <Card
                          title={welcomer}
                          bordered={false}
                          className={style.welcomer}
                        >
                          <div className={style.cardBody}>
                            <Link to="/dashboard">View Milk Tea places</Link>
                            <Link to="/dashboard">View Favorites List</Link>
                            <Link to="/dashboard">View Reviews</Link>
                          </div>
                        </Card>
                      </article>
                    </section>

                    <form
                      className={style.locationForm}
                      onSubmit={handleSubmit}
                    >
                      <h3>Search for a Milk Tea place!</h3>
                      <span className={style.inputContainer}>
                        {" "}
                        <input
                          className={style.formInput}
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Enter location"
                        />
                        <button className={style.formSubmitBtn}>Search</button>
                      </span>
                    </form>

                    {location ? (
                      <>
                        <SearchResults storesData={stores} />
                      </>
                    ) : (
                      <div className={style.skeletonContainer}>
                        <Skeleton />
                      </div>
                    )}

                    {/* displays the user's favorites list  */}
                    <section className={style.reviewSection}>
                      <FavoritesContainer favStores={userData.savedStores} />
                      <RecentReviewsContainer reviews={userData.reviews} />
                    </section>
                  </>
                ) : (
                  <CodeArt />
                )}
              </div>
            </Content>
          </section>
        </div>
      </Layout>
      <FooterComponent />
    </>
  );
}
