import assest from "@/json/assest";
import styles from "@/styles/components/recipetree.module.scss";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const RecipeTree = () => {
    return (
        <Box className={styles.recipebox}>
            <Box className={styles.recipeboxinner}>
                <Box className={styles.taskList}>
                    <Paper
                        elevation={0}
                        className={`${styles.taskCard} ${styles.forComplete}`}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            className={styles.taskCardHeader}
                        >
                            <figure>
                                <Image src={assest.folderOpen} alt="img" width={21} height={18} />
                            </figure>
                            <Box className={styles.recipe_txt}>
                                <Typography variant="h5">Recipe Tile 1</Typography>
                                <Typography variant="body1">Lorem ipsum dolor sit amet lacinia at mauris ullamcorper </Typography>
                            </Box>
                        </Stack>

                    </Paper>
                    <List className={styles.taskListStyled}>
                        <ListItem>
                            <Paper
                                elevation={0}
                                className={`${styles.taskCard} `}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    flexWrap="wrap"
                                    className={styles.taskCardHeader}
                                >
                                    <figure>
                                        <Image src={assest.folderOpen} alt="img" width={21} height={18} />
                                    </figure>
                                    <Box className={styles.recipe_txt}>
                                        <Typography variant="h5">Recipe Tile 2</Typography>
                                        <Typography variant="body1">Lorem ipsum dolor sit amet lacinia at mauris ullamcorper </Typography>
                                    </Box>
                                </Stack>

                            </Paper>
                        </ListItem>
                        <ListItem>
                            <Paper
                                elevation={0}
                                className={`${styles.taskCard} `}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    flexWrap="wrap"
                                    className={styles.taskCardHeader}
                                >
                                    <figure>
                                        <Image src={assest.folderOpen} alt="img" width={21} height={18} />
                                    </figure>
                                    <Box className={styles.recipe_txt}>
                                        <Typography variant="h5">Recipe Tile 3</Typography>
                                        <Typography variant="body1">Lorem ipsum dolor sit amet lacinia at mauris ullamcorper </Typography>
                                    </Box>
                                </Stack>

                            </Paper>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box >
    )
}

export default RecipeTree;