import { useAppSelector } from "@/hooks/redux/useAppSelector";
import useHtml from "@/hooks/useHtml";
import styles from "@/styles/components/Guidecard.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import NotesModal from "../NotesModal/NotesModal";

interface CardPropItem {
  img1: any;
  text: string;
  width_size: number;
  height_size: number;
  img2: any;
}

interface cardprop {
  item?: CardPropItem;
  onActive: () => void;
  isActive: boolean;
}
const NotesCard = (props: cardprop) => {
  const { item, onActive, isActive } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [openthree, setOpenthree] = useState(false);
  const { addClassInBody, removeFromBody } = useHtml();
  const handleClickOpenthree = () => {
    setOpenthree(true);
  };

  const handleClosethree = () => {
    setOpenthree(false);
  };

  const handleClickCard = () => {
    setOpenthree(true);
    handleClickOpenthree();
    addClassInBody();
    // onActive();
    // onClick();
  };

  const handleModalClose = () => {
    setOpenthree(false);
    removeFromBody();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { theme } = useAppSelector((state) => state.globalSlice);
  return (
    <>
      <Box
        className={
          isActive
            ? `${styles.Card} ${styles.CardTwo} ${styles.activecard} `
            : `${styles.Card} ${styles.CardTwo}`
        }
      >
        <Card>
          <CardContent onClick={handleClickCard}>
            <Box className={styles.tool}>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            </Box>
            <figure>
              {theme === "dark-mode" ? (
                <Image
                  src={item?.img2}
                  alt="img"
                  width={item?.width_size}
                  height={item?.height_size}
                />
              ) : (
                <Image
                  src={item?.img1}
                  alt="img"
                  width={item?.width_size}
                  height={item?.height_size}
                />
              )}
            </figure>

            <Typography variant="body1">{item?.text}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        className={styles.pop_over}
      >
        {/* <Box
          sx={{
            position: "relative",
            mt: "10px",
            "&::before": {
              backgroundColor: "white",
              content: '""',
              display: "block",
              position: "absolute",
              width: 12,
              height: 12,
              top: -6,
              transform: "rotate(45deg)",
              left: "calc(50% - 6px)"
            }
          }}
        /> */}
        <List>
          <ListItem>Notebooks</ListItem>
          <ListItem>Add Interaction</ListItem>
        </List>
      </Popover>
      <ModalWrapper open={openthree} onClose={() => handleModalClose()}>
        <NotesModal />
      </ModalWrapper>
    </>
  );
};

export default NotesCard;
