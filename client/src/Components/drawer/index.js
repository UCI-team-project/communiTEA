import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";

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
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="CommuniTea"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
        <div>
          <Link to={"/profile"}>Profile</Link>
        </div>
        {Auth.loggedIn() ? (
          <div>
            <Link to={"/"} onClick={Auth.logout}>
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>Login</Link>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default DrawerComp;
