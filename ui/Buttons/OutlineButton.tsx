import { ButtonType } from "@/interface/common.interface";
import styles from "@/styles/components/outlinebutton.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";

const OutlineButtonMemo = ({
  children,
  variant = "contained",
  disabled = false,
  onClick,
  color = "inherit",
  size = "medium",
  fullWidth = false,
  endIcon,
  startIcon,
  type,
  loading = false
}: ButtonType) => {
  const [className, setClassName] = useState(styles.button);

  useEffect(() => {
    if (variant === "text") {
      setClassName(styles.buttonText);
    } else if (variant === "outlined") {
      setClassName(styles.buttonOutlined);
    } else {
      setClassName(styles.button);
    }
  }, [variant]);

  return (
    <Button
      className={className}
      variant={variant}
      disabled={disabled || loading}
      disableElevation
      onClick={onClick}
      color={color}
      size={size}
      fullWidth={fullWidth}
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      <Box className={styles.inner_btn}>
        {loading && <CircularProgress size={15} color="inherit" />}
        {children}
      </Box>
    </Button>
  );
};

const OutlineButton = memo(OutlineButtonMemo);

export default OutlineButton;
