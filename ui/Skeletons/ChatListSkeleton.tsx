import styles from "@/styles/components/chatsidebar.module.scss";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface IChatListSkeletonProps {
    length: number
}

const ChatListSkeleton = ({ length }: IChatListSkeletonProps) => {
    return (
        <Stack direction='column' spacing={2}>
            {Array(length).fill(2).map((item) => (
                <Box className={`${styles.userlist} `} key={item}>
                    <Box className={styles.heading}>
                        <Typography variant="h4"> <Skeleton variant="text" width={100} height={30} animation='wave' /> </Typography>
                        <small> <Skeleton variant="text" width={50} height={20} animation='wave' /></small>
                    </Box>

                    <span> <Skeleton variant="text" animation='wave' /> </span>
                    <Box className={styles.msg_txt}>
                        <Typography variant="body1">
                            <Skeleton variant="text" animation='wave' />
                        </Typography>

                        <Skeleton height={20} width={20} variant="circular" animation='wave' />
                    </Box>
                </Box>
            ))}
        </Stack>

    )
}


export default ChatListSkeleton