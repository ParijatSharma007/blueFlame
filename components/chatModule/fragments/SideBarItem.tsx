import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { truncateString } from "@/lib/functions/_helpers.lib";
import { setActiveChatID } from "@/reduxtoolkit/slices/chat.slice";
import styles from "@/styles/components/chatsidebar.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { useMemo } from "react";

interface SideBarItemProps {
  title: string;
  lastModifiedDate: number;
  id: string
}

const SideBarItem = ({ title, lastModifiedDate, id }: SideBarItemProps) => {
  const dispatch = useAppDispatch()


  const handleClick = () => {
    dispatch(setActiveChatID(id))
  }

  const { typingStatus, activeChatID } = useAppSelector(s => s.chatSlice)
  const showTypingStatus = useMemo(() => {
    if (typingStatus[id]?.length) {
      return typingStatus[id]
    }

    return ""
  }, [typingStatus[id]])


  return (
    <Box className={`${styles.userlist} ${styles.mobileuserlist} ${activeChatID === id ? styles.userlistactive : null}`} onClick={handleClick}>
      <Box className={styles.heading}>
        {/* <Typography variant="h4">AML Market Trends</Typography> */}

        <Typography variant="h4">{title?.length ? truncateString(title, 20) : 'No title'}</Typography>
        <small>{dayjs(lastModifiedDate).format('h:mmA')}</small>

      </Box>
      <span>{showTypingStatus}</span>

      <Box className={styles.msg_txt}>
        <Typography variant="body1">

          Lorem ipsum dolor sit amet consectetur. Vel ipsum adipiscing.

        </Typography>
        <Box className={styles.number_show}>2</Box>

      </Box>
    </Box>
  );
};

export default SideBarItem;
