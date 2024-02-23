import { GetActivityDetails, GetActivityList } from "@/api/functions/activities.api";
import ActivityList from "@/components/activityList/ActivityList";
import ChatBox from "@/components/ChatBox/ChatBox";
import ContentCard from "@/components/ContentCard/ContentCard";
import LearningList from "@/components/LearningList/LearningList";
import { IGetActivityDetails } from "@/interface/apiresponse.interface";
import assest from "@/json/assest";
import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import styles from "@/styles/pages/activities.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";


const Task = dynamic(() => import('@/components/Task/Task'), { ssr: false })




export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const res = await GetActivityDetails(query?.id)



    return { props: { details: res?.data } };
};

interface IActivities {
    details: IGetActivityDetails | undefined
}


const Index = ({ details }: IActivities) => {
    const router = useRouter();



    // const { data } = useActivityDetails(router.query?.id);





    const { data: activityList } = useQuery('GetActivityList', {
        queryFn: () => GetActivityList()
    })

    // console.log({ activityList })




    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tab, setTab] = useState("one");
    return (
        <WebWrapper>
            <Typography variant="h3" id="monthAndYear" className="sub_heading">
                Activities
            </Typography>
            <Grid container spacing={2} className={styles.activities_wrapper}>
                {/* Sidebar start*/}
                <Grid item xs={2.2}>
                    <Box className={styles.left_act_side}>
                        <Accordion className={styles.first_accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <Image
                                        src={assest.salesIcon}
                                        alt="img"
                                        width={15}
                                        height={13}
                                    />
                                    Sales
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h5">General</Typography>
                                <Typography variant="body1">
                                    Channel Partnership with ACME
                                </Typography>
                                <Button className={styles.add_btn}>+ Add New</Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.first_accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <Image
                                        src={assest.recruting}
                                        alt="img"
                                        width={18}
                                        height={18}
                                    />
                                    Recruiting
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h5">General</Typography>
                                <Typography variant="body1">
                                    Channel Partnership with ACME
                                </Typography>
                                <Button className={styles.add_btn}>+ Add New</Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.first_accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <Image
                                        src={assest.clientIcon}
                                        alt="img"
                                        width={18}
                                        height={18}
                                    />
                                    Client Delivery
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h5">General</Typography>
                                <Typography variant="body1">
                                    Channel Partnership with ACME
                                </Typography>
                                <Button className={styles.add_btn}>+ Add New</Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.first_accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <Image
                                        src={assest.research}
                                        alt="img"
                                        width={18}
                                        height={18}
                                    />
                                    Market Research
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h5">General</Typography>
                                <Typography variant="body1">
                                    Channel Partnership with ACME
                                </Typography>
                                <Button className={styles.add_btn}>+ Add New</Button>
                            </AccordionDetails>
                        </Accordion>

                        {
                            activityList ? <ActivityList data={activityList?.data} /> : null
                        }



                        <Box className={styles.folder_btn}>
                            <Button className={styles.add_new_folder}>
                                + Add New Folder
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Sidebar end */}



                <Grid item xs={9.8}>
                    <Box className={styles.right_act_side}>
                        <Box className={styles.first_sec}>
                            <Typography variant="h4">General</Typography>
                            <Typography variant="body1" >
                                {details?.objective || 'No objective found'}
                            </Typography>
                        </Box>
                        <Box className={styles.second_sec}>
                            <Typography variant="h4">Automation state</Typography>
                            <List>

                                <ListItem>
                                    <Box className={details?.threadState === 'ERRORED' ? 'red_dot dotCircle ' : 'dotCircle green_dot'} /> {details?.originalInput || 'No Automation State found'}
                                </ListItem>
                            </List>
                            <Box className={styles.tab_btn}>
                                <Button
                                    className={`${tab === "one" ? styles.active_btn : null}`}
                                    onClick={() => setTab("one")}
                                >
                                    Associated Files and Content{" "}
                                </Button>
                                <Button
                                    className={`${tab === "two" ? styles.active_btn : null}`}
                                    onClick={() => setTab("two")}
                                >
                                    Learning{" "}
                                </Button>
                            </Box>
                            {tab === "one" ? <ContentCard /> : null}
                            {tab === "two" ? <LearningList data={details?.learnings} /> : null}
                        </Box>
                        {
                            details?.tasks ? <Task taskIds={router?.query?.id} /> : null
                        }

                        <ChatBox />
                    </Box>
                </Grid>
            </Grid>
        </WebWrapper>
    );
};

export default Index;
