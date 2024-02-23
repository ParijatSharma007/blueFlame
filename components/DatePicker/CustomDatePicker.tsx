/* eslint-disable import/no-extraneous-dependencies */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface CustomDatePickerProps {
  value: Date | null;
  onChange: ((value: Date | null) => void),
  label: string

}

export default function CustomDatePicker({
  value,
  onChange, label
}: CustomDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        views={["month", "year", "day"]}
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              ref={inputRef}
              {...inputProps}
              fullWidth
              disabled
              InputProps={{
                endAdornment: InputProps?.endAdornment,
              }}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
