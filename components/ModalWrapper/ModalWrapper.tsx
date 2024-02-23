import styles from "@/styles/components/modalwrapper.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

interface MuiModalWrapperProps {
  children: JSX.Element | JSX.Element[];

  onClose: () => any;
  open: boolean;
}
const ModalWrapper = (props: MuiModalWrapperProps) => {
  const { children, onClose, open } = props;
  return (
    <Dialog
      className={styles.common_modal}
      onClose={onClose}
      open={open}
      disableScrollLock
      disablePortal
    >
      <Box className={styles.modal_head}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className={styles.modal_body}>{children}</Box>
    </Dialog>
  );
};

export default ModalWrapper;
