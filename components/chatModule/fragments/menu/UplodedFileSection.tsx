import assest from "@/json/assest";
import styles from "@/styles/components/uploadsidebar.module.scss";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface UplodedFileListSectionProps {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}

export default function UplodedFileListSection({
    handleDrawerOpen,
    open,
    handleDrawerClose
}: UplodedFileListSectionProps) {
    return (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            className={styles.upload_side_drawer}
        >
            <Box className={styles.drawer_head}>
                <IconButton onClick={handleDrawerClose}>
                    <ClearIcon />
                </IconButton>
                <Typography variant="h2">Upload</Typography>
            </Box>
            <Box className={styles.drawer_body}>
                <Box className={styles.file_upload}>
                    <input type="file" />
                    <Button>
                        <span>Add</span>
                        <AddIcon />
                    </Button>
                </Box>
                <List>
                    <ListItem>
                        <Typography variant="h4">13th February,2023</Typography>
                        <Card>
                        
                            <CardContent>
                                <figure>
                                    <Image
                                        src={assest.smallcard7}
                                        alt="img"
                                        width={100}
                                        height={100}
                                    />
                                </figure>

                                <Box className={styles.content_box}>
                                    <Typography variant="h6">Text1</Typography>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </ListItem>

                    <ListItem>
                        <Typography variant="h4">13th February,2023</Typography>
                        <Card>
                     
                            <CardContent>
                                <Box className={styles.doc_box}>
                                    <Image
                                        src={assest.oneNote}
                                        alt="img"
                                        width={50}
                                        height={50}
                                    />
                                </Box>

                                <Box className={styles.content_box}>
                                    <Typography variant="h6">Text1</Typography>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h4">13th February,2023</Typography>
                        <Card>
                       
                            <CardContent>
                                <figure>
                                    <video width="100" height="100" controls>
                                        <source src="..Videos/video1.mp4" type="video/mp4" />
                                    </video>
                                </figure>

                                <Box className={styles.content_box}>
                                    <Typography variant="h6">Text1</Typography>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </ListItem>
                </List>
            </Box>
        </SwipeableDrawer>
    );
}
