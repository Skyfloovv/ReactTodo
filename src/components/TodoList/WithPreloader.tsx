import React, { FC } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

const WithPreloader: FC<{ isLoading: boolean; children: any }> = ({
  isLoading,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default WithPreloader;
