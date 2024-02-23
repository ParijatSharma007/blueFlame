import Wrapper from '@/layout/wrapper/Wrapper';
import { Autocomplete, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { parseAsStringEnum, useQueryState } from 'nuqs';

enum QUERYPARAMS {
    term = "",
    startDate = "",
    endDate = "",
    urlIds = "",
    includeDeleted = "false"
}

export default function DatePickerValue() {

    const [queryParams, setQueryParams] = useQueryState(
        'queryparams',
        parseAsStringEnum<QUERYPARAMS>(Object.values(QUERYPARAMS))
            .withDefault(QUERYPARAMS.term).withDefault(QUERYPARAMS.startDate)
            .withDefault(QUERYPARAMS.endDate).withDefault(QUERYPARAMS.urlIds)
            .withDefault(QUERYPARAMS.includeDeleted)
    )

    console.log(queryParams, "queryparams");

    const keywordHandler = (value: string) => {
        setQueryParams()
    }

    return (
        <Wrapper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
                <Box display={"flex"} flexDirection={'row'}
                    padding={"50px"} justifyItems={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Autocomplete
                        multiple
                        sx={{ width: "450px", paddingRight: "50px" }}
                        // id="tags-standard"
                        // options={top100Films}
                        // getOptionLabel={(option) => option.title}
                        // defaultValue={[top100Films[13]]}
                        freeSolo={true}
                        options={[]}
                        onChange={(_, value) => keywordHandler(value)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Keywords"
                                placeholder="Keywords"
                            />
                        )}
                    />
                    <Select sx={{ paddingRight: "300px" }}>


                    </Select>
                </Box>
                <Box display={"flex"} flexDirection={'row'}
                    padding={"50px"} justifyItems={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <DatePicker
                        sx={{ padding: "30px" }}
                        label="Start Date"
                        defaultValue={dayjs(dayjs(Date.now()).format("YYYY-MM-DD"))}
                    />
                    <DatePicker
                        sx={{ padding: "30px" }}
                        label="End Date"
                        defaultValue={dayjs(dayjs(Date.now()).format("YYYY-MM-DD"))}
                    />
                </Box>
                {/* </DemoContainer> */}
            </LocalizationProvider>
            <Box justifyContent={"center"} justifyItems={"center"}
                alignItems={"cemter"} alignContent={"ceter"} justifySelf={"center"} alignSelf={"center"}>
                <Button variant="contained">Contained</Button>
            </Box>
        </Wrapper>
    );
}



