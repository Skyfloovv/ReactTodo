import { FC } from "react";
import { Snackbar } from "@material-ui/core";
import { useSelector } from "../../store/store";
import { useDispatch } from "../../store/store";
import { AuthAction } from "../../store/auth/action";
export const SnackBarError: FC = () => {
  const message = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(AuthAction.setError(null));
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={!!message || false}
      autoHideDuration={6000}
      onClose={close}
      message={message}
    />
  );
};
