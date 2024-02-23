import assest from '@/json/assest';
import styles from "@/styles/pages/configuaration.module.scss";
import OutlineButton from '@/ui/Buttons/OutlineButton';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import Image from 'next/image';

const Recipes = () => {
    return (
        <Box className={styles.recipes}>
            <Card>
                <CardContent>
                    <Box className={styles.recipe_head}>
                        <figure>
                            <Image src={assest.folderOpen} alt='img' width={21} height={18} />
                        </figure>
                        <IconButton>
                            <Image src={assest.editRecipe} alt="img" width={15} height={15} />
                        </IconButton>
                    </Box>
                    <Box className={styles.recipe_box}>
                        <Typography variant='h6'>
                            Recipe 1
                        </Typography>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                    </Box>
                    <Box className={styles.recipe_box}>
                        <Box className={styles.recipe_title}>
                            <Typography variant='h6'>
                                Description
                            </Typography>
                            <FormControlLabel label="" control={<Switch />} />
                        </Box>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur. Dui mollis arcu congue nam odio urna risus.
                        </Typography>
                    </Box>
                    <Box className={styles.recipe_box}>
                        <Box className={styles.recipe_title}>
                            <Typography variant='h6'>
                                Execution Process
                            </Typography>

                        </Box>

                        <List>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                        </List>
                    </Box>
                    <OutlineButton type='button'>
                        <Typography variant='button'>Use in Playground</Typography>
                    </OutlineButton>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Recipes;