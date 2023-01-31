import React from "react";
import { Link } from "react-router-dom";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { Layout, Menu } from "antd";

import Auth from "../utils/auth";

const { Header } = Layout;

const Navbar = ({ navItem }) => {
  const navList = ["home", "dashboard", "profile", "login"];

  const navListAuth = ["home", "dashboard", "profile"];

  let nav = navListAuth.map((item, index) => {
    const key = index + 1;
    return {
      key,
      label: <Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>,
    };
  });
  nav.push({
    key: 5,
    label: (
      <Link to={`/`} onClick={Auth.logout}>
        Logout
      </Link>
    ),
  });

  console.log(navItem);

  function populateNav(item) {
    if (item === "home") {
      return ["1"];
    }
    if (item === "dashboard") {
      return ["2"];
    }
    if (item === "profile") {
      return ["3"];
    }
    if (item === "login") {
      return ["4"];
    }
    if (item === "logout") {
      return Auth.logout;
    }
  }
  return (
    <Header>
      <div className="" />
      {Auth.loggedIn() ? (
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={populateNav(navItem)}
          items={nav}
        />
      ) : (
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={populateNav(navItem)}
          items={navList.map((item, index) => {
            const key = index + 1;
            return {
              key,
              label: <Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>,
            };
          })}
        />
      )}
    </Header>
  );
};

export default Navbar;
