import assest from '@/json/assest';
import WebWrapper from '@/layout/WebWrapper/WebWrapper';
import styles from "@/styles/pages/inferred.module.scss";
import { Popover } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import * as React from 'react';

function createData(
    sl: number,
    name: string,

    text1: string,
    text2: string,
    protein: number,
) {
    return { sl, name, text1, text2, protein };
}

const rows = [
    createData(1, "Craig Vetrovs", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", 4.0),
    createData(2, "James Dokidis", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", 4.3),
    createData(3, "Lincoln Donin", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", 6.0),
    createData(4, "Justin Bator", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", 4.3),
    createData(5, "Brandon Ekstrom", "Lorem ipsum dolor sit", "Lorem ipsum dolor sit", 3.9),
];

const index = () => {
    const countcard = [
        {
            text: "Contacts 1"
        },
        {
            text: "Contacts 2"
        },
        {
            text: "Contacts 3"
        },
        {
            text: "Contacts 4"
        },

    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <WebWrapper>
            <Typography variant="h3" id="monthAndYear" className="sub_heading">
                Inferred Metadata
            </Typography>
            <Box className={styles.contactbox}>
                <Grid container spacing={3} className={styles.contactboxs_row}>
                    {countcard.map((item) => {
                        return (
                            <Grid item xs={3} className={styles.contactboxs_col}>
                                <Card>
                                    <CardContent>
                                        <Box className={styles.card_head}>
                                            <figure>
                                                <Image src={assest.avtarIcon} alt='img' width={16} height={21} />
                                            </figure>
                                            <Typography variant='h3'>{item.text}</Typography>
                                        </Box>
                                        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. A diam eros euismod mattis at. Tempor ultrices at ante lorem eu blandit.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Box>
            <Box className={styles.table_wrapper}>
                <Box className={styles.table_head}>
                    <Typography variant='h4'>Details Of Selected Metadata</Typography>
                    <Box className={styles.filter_area}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Sort by</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            {/* <Button><Image src={assest.sortArr} alt='img' width={10} height={6} /></Button> */}

                        </FormControl>
                        <Button className={styles.filter_btn}>
                            <Image src={assest.filterIcon} alt="img" width={25} height={17} />
                        </Button>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SL No.</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Lorem ipsum dolor</TableCell>
                                <TableCell align="right">Lorem ipsum dolor</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="td" scope="row">
                                        {row.sl}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.text1}</TableCell>
                                    <TableCell align="right">{row.text2}</TableCell>
                                    <TableCell align="right">
                                        <Box className={styles.dskptp_toggler_pop}>
                                            <Button className={styles.edit_btn}><Image src={assest.editIcon} alt="img" width={13} height={13} />Edit</Button>
                                            <Button className={styles.edit_btn}><Image src={assest.deleteIcon} alt="img" width={15} height={16} />Delete</Button>
                                        </Box>

                                        <Box className={styles.mobile_toggler_pop}>
                                            <Button onClick={handleClicks}>
                                                <Image src={assest.dot_icon} width={2} height={12} alt='' />
                                            </Button>
                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                className='notif-popover'
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                            >
                                                <Box className={styles.edit_Del_btn_in}>
                                                    <Button className={styles.edit_btn}><Image src={assest.editIcon} alt="img" width={13} height={13} />Edit</Button>
                                                    <Button className={styles.edit_btn}><Image src={assest.deleteIcon} alt="img" width={15} height={16} />Delete</Button>
                                                </Box>
                                            </Popover>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack spacing={2} className={styles.pagination}>
                    <Pagination count={10} />


                </Stack>
            </Box>
        </WebWrapper>
    )
}

export default index;