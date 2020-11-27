import React, { useState } from "react";
import { RightLink } from "./RightLink";

const Burger = ({ cartItems, currentUser, userSignOut }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="styled-burger" onClick={() => setOpen(!open)}>
        <div className={open ? "openStyled" : ""} />
        <div className={open ? "openStyled1" : ""} />
        <div className={open ? "openStyled2" : ""} />
      </div>
      <RightLink
        open={open}
        cartItems={cartItems}
        currentUser={currentUser}
        userSignOut={userSignOut}
      />
    </React.Fragment>
  );
};
export default Burger;
