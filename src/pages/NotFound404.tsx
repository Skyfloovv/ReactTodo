import { FC } from "react";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  notFound: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    background: 'url("/404page.png") 100% 100% no-repeat',
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));
const NotFound404: FC = () => {
  const s = useStyles();
  return <div className={s.notFound}></div>;
};

export default NotFound404;
