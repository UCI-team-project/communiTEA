import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import style from "./drawer.module.css";
// import icon from "../../assets/icons/boba-icon.png";

import Auth from "../../utils/auth";

const DrawerComp: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Todo: get button to float right */}
      <button className={style.btn} onClick={showDrawer}>
        <i className="fa fa-bars"></i> Menu
      </button>

      {/* Todo: add styling to the drawer header */}
      <Drawer
        className={style.drawerTitle}
        title="CommuniTEA"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div>
          <Link className={style.drawer} to={"/"}>
            Home
          </Link>
        </div>
        <div>
          <Link className={style.drawer} to={"/dashboard"}>
            Dashboard
          </Link>
        </div>
        <div>
          <Link className={style.drawer} to={"/profile"}>
            Profile
          </Link>
        </div>
        {Auth.loggedIn() ? (
          <div>
            <Link className={style.drawer} to={"/"} onClick={Auth.logout}>
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link className={style.drawer} to={"/login"}>
              Login
            </Link>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default DrawerComp;
