import {FC} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./modal.styles";
import {DialogTitleProps, ModalProps} from "./interfaces/modal.interfaces";



const DialogTitle = ((props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;
    const classes = useStyles();
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export const Modal: FC<ModalProps & { isOpen: boolean, setOpen: (state:boolean) => void; }> = ({headerText, contentText, isOpen, setOpen, firstButton, secondButton}) => {
    const s = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {headerText}
                </DialogTitle>
                <MuiDialogContent className={s.dialogContent} dividers>
                    <Typography gutterBottom>
                        {contentText}
                    </Typography>
                </MuiDialogContent>
                <MuiDialogActions className={s.dialogActions}>
                    {
                        firstButton ?
                            <Button variant="contained" onClick={firstButton.buttonHandler} color="primary">
                                {firstButton.buttonText}
                            </Button> : <div></div>
                    }
                    {
                        secondButton ?
                            <Button autoFocus variant="contained" onClick={secondButton.buttonHandler} color="primary">
                                {secondButton.buttonText}
                            </Button> : <div></div>
                    }

                </MuiDialogActions>
            </Dialog>
        </div>
    );
}
export default Modal;
