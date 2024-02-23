import WebWrapper from "@/layout/WebWrapper/WebWrapper";
import styles from "@/styles/pages/archive.module.scss";
import styles2 from "@/styles/pages/configuaration.module.scss";
import CustomButton from "@/ui/Buttons/CustomButton";
import useAutocomplete from "@mui/base/useAutocomplete";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { getpeopleList, IpeopleList } from "@/api/functions/archive.api";
import CustomDatePicker from "@/components/DatePicker/CustomDatePicker";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from "dayjs";
import PropTypes from "prop-types";
import * as React from "react";

const Root = styled("div")(
    ({ theme }) => `
    color: ${theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.65)"
            : "rgba(0,0,0,.85)"
        };
    font-size: 14px;
    width:100%;
    margin-bottom: 15px;
  `
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-weight: 600;
  font-size: 16px;
  color: var(--primaryblack);
`;

const InputWrapper = styled("div")(
    ({ theme }) => `
    width: 100%;
    border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    border-radius: 6px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
    min-height: 50px;
    // &:hover {
    //   border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    // }
  
    // &.focused {
    //   border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    //   box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    // }
  
    & input {
      background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
      color: ${theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.65)"
            : "rgba(0,0,0,.85)"
        };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `
);

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

const StyledTag = styled(Tag)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
        };
    border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  height:40px;

    &:focus {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
      background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
        };
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 21px;
      cursor: pointer;
      padding: 4px;
    }
  `
);

const Listbox = styled("ul")(
    ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 9;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"
        };
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
        };
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `
);
const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 }
];



export const getServerSideProps = async () => {
    const res = await getpeopleList()

    return {
        props: {
            peopleList: res?.data
        }
    }
}

interface PageProps {
    peopleList: IpeopleList
}

interface PeopleListAutoCompleteProps {
    list: IpeopleList

}
const PeopleListAutoComplete = ({ list }: PeopleListAutoCompleteProps) => {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl
    } = useAutocomplete({
        id: "customized-hook-demo",
        defaultValue: [],
        multiple: true,
        options: list,
        getOptionLabel: (option) => option.person.email
    });



    return (
        <>
            <div {...getRootProps()}>
                <Label {...getInputLabelProps()}>People</Label>
                <InputWrapper
                    ref={setAnchorEl}
                    className={focused ? "focused" : ""}
                >
                    {value.map((option, index) => (
                        <StyledTag
                            label={`${option.person.firstName} ${option.person.lastName} (${option.person.email}`}
                            {...getTagProps({ index })}
                        />
                    ))}

                    <input {...getInputProps()} />
                </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <li {...getOptionProps({ option, index })}>
                            <span>{option.person.firstName} {option.person.lastName}  ({option.person.email})</span>
                            <CheckIcon fontSize="small" />
                        </li>
                    ))}
                </Listbox>
            ) : null}
        </>
    )



}

const Index = ({ peopleList }: PageProps) => {


    const [tab, setTab] = React.useState("1st");
    const [checInDate, setCheckInDate] = React.useState<Dayjs | null>(dayjs())
    const [checOutDate, setCheckOutDate] = React.useState<Dayjs | null>(dayjs())
    const [peopleListAutoComplete, setPeopleListAutoComplete] = React.useState<IpeopleList>([])

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl
    } = useAutocomplete({
        id: "customized-hook-demo",
        defaultValue: [top100Films[1]],
        multiple: true,
        options: top100Films,
        getOptionLabel: (option) => option.title
    });




    return (
        <WebWrapper>
            <Box className={styles2.tab_bar}>
                <Grid container spacing={2} className={`${styles2.tab_inner} ${styles.tab_inner_archive}`}>
                    <Grid item xs={6} className={styles2.tab_sec}>
                        <Button
                            className={`${tab === "1st" ? styles2.active_btn : null}`}
                            onClick={() => setTab("1st")}
                        >
                            Search
                        </Button>
                    </Grid>
                    <Grid item xs={6} className={styles2.tab_sec}>
                        <Button
                            className={`${tab === "2nd" ? styles2.active_btn : null}`}
                            onClick={() => setTab("2nd")}
                        >
                            Configuration
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box className={styles.tab_content_archive}>
                {tab === "1st" ? (
                    <Box className={styles.tab_inner}>
                        <Grid container rowSpacing={3} columnSpacing={5}>
                            <Grid item xs={6}>
                                <Root>
                                    <div {...getRootProps()}>
                                        <Label {...getInputLabelProps()}>Keywords</Label>
                                        <InputWrapper
                                            ref={setAnchorEl}
                                            className={focused ? "focused" : ""}
                                        >
                                            {value.map((option, index) => (
                                                <StyledTag
                                                    label={option.title}
                                                    {...getTagProps({ index })}
                                                />
                                            ))}

                                            <input {...getInputProps()} />
                                        </InputWrapper>
                                    </div>
                                    {groupedOptions.length > 0 ? (
                                        <Listbox {...getListboxProps()}>
                                            {groupedOptions.map((option, index) => (
                                                <li {...getOptionProps({ option, index })}>
                                                    <span>{option.title}</span>
                                                    {/* <CheckIcon fontSize="small" /> */}
                                                </li>
                                            ))}
                                        </Listbox>
                                    ) : null}
                                </Root>
                                <Root>
                                    <PeopleListAutoComplete list={peopleList} />
                                </Root>

                            </Grid>
                            <Grid item xs={6}>
                                <Box className={styles.date_range}>
                                    <Label >Check in</Label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                                        <CustomDatePicker
                                            label=""
                                            value={checInDate}
                                            onChange={val => setCheckInDate(val)}
                                        />

                                    </LocalizationProvider>
                                </Box>
                                <Box className={styles.date_range}>
                                    <Label >Check Out</Label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                                        <CustomDatePicker
                                            label=""
                                            value={checOutDate}
                                            onChange={val => setCheckOutDate(val)}
                                        />

                                    </LocalizationProvider>
                                </Box>
                            </Grid>
                            <Grid item xs={12} />
                        </Grid>
                        <Box className={styles.btn_area}>
                            <CustomButton type="button">
                                <Typography variant="button">Save</Typography>
                            </CustomButton>
                        </Box>
                    </Box>
                ) : null}
                {tab === "2nd" ?
                    <Box className={styles.tab_inner}>
                        <Box className={styles.config_area}>
                            <Box className={styles.config_box}>
                                <Box className={styles.toogle_sec}>
                                    <Typography variant="body1">Enable Archive</Typography>
                                    <FormControlLabel label="" control={<Switch />} />
                                </Box>
                                <Box className={styles.toogle_sec}>
                                    <Typography variant="body1">Send to Email </Typography>
                                    <FormControlLabel label="" control={<Switch />} />
                                </Box>

                            </Box>
                            <Box className={styles.config_box}>
                                <Box className={styles.select_drop}>
                                    {/* <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={top100FilmsTwo}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Text1" />}
                                    /> */}
                                    <PeopleListAutoComplete list={peopleList} />
                                </Box>
                                <Box className={styles.type_msg}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        minRows={3}

                                        placeholder="Type a message...."

                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box className={styles.btn_area}>
                            <CustomButton type="button">
                                <Typography variant="button">Save</Typography>
                            </CustomButton>
                        </Box>

                    </Box> : null}
            </Box>
        </WebWrapper >
    );
};

export default Index;
