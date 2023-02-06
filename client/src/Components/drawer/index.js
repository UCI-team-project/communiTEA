import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Drawer } from "antd";
import style from "./drawer.module.css";

export default function DrawerComp() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          <Link className={style.drawer} to={"/aboutus"}>
            About Us
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
}
