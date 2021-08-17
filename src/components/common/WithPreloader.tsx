import React, { FC } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useStyles } from "./withPreloader.style";

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
