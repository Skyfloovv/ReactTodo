import React, { FC } from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  preloader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
}));
const WithPreloader: FC<{ isLoading: boolean; children: any }> = ({
  isLoading,
  children,
}) => {
  const s = useStyles();
  return (
    <>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className={s.preloader}>{children}</div>
      )}
    </>
  );
};

export default WithPreloader;
