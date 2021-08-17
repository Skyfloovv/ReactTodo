import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "../../store/store";
import { AuthAction } from "../../store/auth/action";
import { useStyles } from "./navar.style";

const Navbar: FC = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const s = useStyles();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(AuthAction.logOut());
  };
  return (
    <div className={s.nav}>
      <div className={s.content}>
        <Typography variant="h5" component="h5">
          TODO
        </Typography>
        <Button
          children={isAuth ? "LogOut" : "LogIn"}
          variant="contained"
          onClick={logOut}
        />
      </div>
    </div>
  );
};

export default Navbar;
