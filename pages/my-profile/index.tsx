import { useToggle } from '@/hooks/general/useToggle';
import assest from '@/json/assest';
import WebWrapper from '@/layout/WebWrapper/WebWrapper';
import styles2 from "@/styles/pages/configuaration.module.scss";
import styles from "@/styles/pages/myprofile.module.scss";
import CustomButton from '@/ui/Buttons/CustomButton';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const companyDetails = [
    {
        name: "Company Name",
        details: "Lorem ipsum dolor company",

    },
    {
        name: "Title",
        details: "Lorem ipsum dolor sit amet",
    },
    {
        name: "Secondary Email Address",
        details: "info@dummyemail.com",
    },
    {
        name: "Account Administrator",
        details: "info@dummyemail.com",
    },
]

interface IInputRowProps {
    name: string;
    details: string;
}

const InputRow = ({ name, details }: IInputRowProps) => {
    const [value, setValue] = React.useState<string>(details);
    const { state, toggle } = useToggle(false)
    return (<TableRow >
        <TableCell component="td" scope="row">
            <Box className={styles.company_name}>
                {name}
            </Box>
        </TableCell>

        <TableCell component="td" scope="row">
            <Box className={styles.company_dtls}>
                {
                    state ? <TextField
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                        : value
                }

            </Box>
        </TableCell>

        <TableCell component="td" scope="row">
            <Box className={styles.company_editp}>

                {
                    state ?
                        <button type='button' onClick={toggle}>
                            save
                        </button>
                        : <button type='button' onClick={toggle}>
                            <i><Image src={assest.edit_icon} width={13} height={13} alt='' /></i>
                            Edit
                        </button>
                }

            </Box>
        </TableCell>

    </TableRow>)
}

function MyProfile() {

    const [tab, setTab] = React.useState("1st");



    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            <WebWrapper>
                <Typography variant="h3" id="monthAndYear" className="sub_heading">
                    Profile
                </Typography>
                <Box className={styles2.tab_bar}>
                    <Grid container spacing={2} className={styles2.tab_inner}>
                        <Grid item xs={4} className={styles2.tab_sec}>
                            <Button className={`${tab === "1st" ? styles2.active_btn : null}`} onClick={() => setTab("1st")}>My Account</Button>
                        </Grid>
                        <Grid item xs={4} className={styles2.tab_sec}>
                            <Button className={`${tab === "2nd" ? styles2.active_btn : null}`} onClick={() => setTab("2nd")}>Plan & Billing</Button>
                        </Grid>
                        <Grid item xs={4} className={styles2.tab_sec}>
                            <Button className={`${tab === "3rd" ? styles2.active_btn : null}`} onClick={() => setTab("3rd")}>Users</Button>
                        </Grid>

                    </Grid>




                </Box>
                <Box className={styles.tab_content}>
                    {tab === "1st" ? (
                        <Box className={styles.profile_Details_sc}>
                            <Box className={styles.profile_Details_heading}>
                                <Typography variant='h5'>Profile Details</Typography>
                            </Box>
                            <Box className={styles.profile_Dtls_boxs}>
                                <Box className={styles.profile_Dtls_boxs_top}>
                                    <Grid container rowSpacing={2} columnSpacing={2} className={styles.profile_Dtls_boxsrow}>
                                        <Grid item md={7} xs={12} className={styles.profile_Dtls_col_lft}>
                                            <Box className={styles.profile_imgs_inner}>
                                                <Box className={styles.profile_imgs_lft}>
                                                    <Image src={assest.profile_imgsec1} width={172} height={172} alt='' />
                                                </Box>

                                                <Box className={styles.profile_imgs_rght}>
                                                    <Typography variant='h4'>John Alfredo</Typography>
                                                    <Link href='mailto:John@dummyemail.com' className={styles.email_sec_profile}><i><Image src={assest.mail_icon} width={18} height={15} alt='' /></i> John@dummyemail.com</Link>
                                                    <Box className={`${styles.custom_style_newbtn} ${styles.mbl}`}>
                                                        <CustomButton type='button'>
                                                            <Typography variant='caption'>Update password</Typography>
                                                        </CustomButton>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item md={5} xs={12} className={styles.profile_Dtls_col_rtt}>
                                            <Box className={styles.custom_style_newbtn}>
                                                <CustomButton type='button'>
                                                    <Typography variant='caption'>Update password</Typography>
                                                </CustomButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className={styles.profile_Dtls_boxs_btms}>
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableBody>
                                                {
                                                    companyDetails.map((item) => (
                                                        <InputRow name={item?.name} details={item?.details} key={item?.name} />
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </Box>
                    ) : (null)}
                    {
                        tab === "2nd" ? (
                            <Typography variant='h6' className="coming_soon">Coming Soon</Typography>
                        ) : null
                    }
                    {
                        tab === "3rd" ? (
                            <Typography variant='h6' className="coming_soon">Coming Soon</Typography>
                        ) : null
                    }
                </Box>


            </WebWrapper>
        </>
    );
}

export default MyProfile;