import React, { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "../../store/store";
import { AuthAction } from "../../store/auth/action";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "0 10px 0 10px",
  },
}));
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
