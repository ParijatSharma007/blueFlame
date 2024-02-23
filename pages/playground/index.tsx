import RecipeTree from '@/components/RecipeTree/RecipeTree';
import ChatDetails from '@/components/chatModule/fragments/ChatDetails';
import assest from '@/json/assest';
import WebWrapper from '@/layout/WebWrapper/WebWrapper';
import styles from "@/styles/pages/playground.module.scss";
import CustomButton from '@/ui/Buttons/CustomButton';
import OutlineButton from '@/ui/Buttons/OutlineButton';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

const index = () => {
    const listMap = [1, 2, 3, 4, 5]

    return (
        <WebWrapper>
            <Typography variant="h3" id="monthAndYear" className="sub_heading">
                Playground Items
            </Typography>
            {/* <Grid container spacing={3} >
                <Grid item xs={3.3}>
                    gcfgf
                </Grid>
            </Grid> */}
            <Box className={styles.play_wrapper}>
                <Box className={styles.play_left}>
                    <List>
                        {listMap.map((item, index) => {
                            return (
                                <ListItem>
                                    <Image src={assest.GPT} alt='img' width={31} height={24} />
                                    <Box className={styles.text_area}>
                                        <Typography variant='h5'>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. Vel ipsum adipiscing.</Typography>
                                    </Box>
                                </ListItem>
                            )
                        })}

                    </List>
                </Box>
                <Box className={styles.play_right}>
                    <Box className={styles.page_right_inner}>
                        <Box className={styles.right_head}>
                            <Typography variant='h3'>
                                Test Recipe
                            </Typography>
                        </Box>
                        <Box className={styles.text_area_sec}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        id="outlined-multiline-static"

                                        multiline
                                        rows={4}
                                        defaultValue="Recipe...."
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        id="outlined-multiline-static"

                                        multiline
                                        rows={4}
                                        defaultValue="Prompt...."
                                    />
                                </Grid>
                            </Grid>
                            <Box className={styles.btn_area}>
                                <OutlineButton type='button'>
                                    <Typography variant='button'>Run</Typography>
                                </OutlineButton>
                                <CustomButton type='button'>
                                    <Typography variant='button'>Save Recipe</Typography>
                                </CustomButton>
                            </Box>
                        </Box>
                        <RecipeTree />
                        <Box className='payground_chat'>
                            <ChatDetails />
                        </Box>

                    </Box>

                </Box>
            </Box>
        </WebWrapper>
    )
}

export default index;