import CommandCard from "@/components/CommandCard/CommandCard";
import AllModelTab from "@/components/configuarationModule/AllModelTab";
import IntegrationTab from "@/components/configuarationModule/IntegrationTab";
import Recipes from "@/components/Recipes/Recipes";
import Tuning from "@/components/Tuning/Tuning";
import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import styles from "@/styles/pages/configuaration.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const inteloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tab, setTab] = useState("1st");

    return (
        <WebWrapper>
            <Typography variant="h3" id="monthAndYear" className="sub_heading">
                Configuration
            </Typography>
            <Box className={styles.tab_bar}>
                <Grid container spacing={2} className={styles.tab_inner}>
                    <Grid item xs={2.4} className={styles.tab_sec}>
                        <Button
                            className={`${tab === "1st" ? styles.active_btn : null}`}
                            onClick={() => setTab("1st")}
                        >
                            Integration
                        </Button>
                    </Grid>
                    <Grid item xs={2.4} className={styles.tab_sec}>
                        <Button
                            className={`${tab === "2nd" ? styles.active_btn : null}`}
                            onClick={() => setTab("2nd")}
                        >
                            Commands
                        </Button>
                    </Grid>
                    <Grid item xs={2.4} className={styles.tab_sec}>
                        <Button
                            className={`${tab === "3rd" ? styles.active_btn : null}`}
                            onClick={() => setTab("3rd")}
                        >
                            Recipes
                        </Button>
                    </Grid>
                    <Grid item xs={2.4} className={styles.tab_sec}>
                        <Button
                            className={`${tab === "4th" ? styles.active_btn : null}`}
                            onClick={() => setTab("4th")}
                        >
                            Fine - Tuning
                        </Button>
                    </Grid> <Grid item xs={2.4} className={styles.tab_sec}>
                        <Button
                            className={`${tab === "model" ? styles.active_btn : null}`}
                            onClick={() => setTab("model")}
                        >
                            Models
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={styles.tab_content}>
                {tab === "1st" ? (
                    <IntegrationTab />
                ) : null}
                {tab === "2nd" ? (
                    <Grid container rowSpacing={3} columnSpacing={4} className={styles.cmndcardsec_row}>
                        {[1, 2, 3].map((item, index) => {
                            return (
                                <Grid item xs={4} className={styles.cmndcardsec_col}>
                                    <CommandCard />
                                </Grid>
                            );
                        })}
                    </Grid>
                ) : null}
                {tab === "3rd" ? (
                    <Grid container rowSpacing={3} columnSpacing={4} className={styles.recipes_row_part}>
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <Grid item xs={2.4} className={styles.recipes_col_part}>
                                    <Recipes />
                                </Grid>
                            );
                        })}
                    </Grid>

                ) : null}
                {tab === "4th" ? (


                    <Tuning />

                ) : null}

                {
                    tab === 'model' ? <AllModelTab /> : null
                }


            </Box>
        </WebWrapper>
    );
};

export default index;
