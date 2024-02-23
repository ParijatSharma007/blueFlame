import assest from "@/json/assest";
import styles from "@/styles/components/modalwrapper.module.scss";
import CustomButton from "@/ui/Buttons/CustomButton";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

const NotesModal = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box className={styles.Notes_modal}>
      <Typography variant="h2">Where to store it!</Typography>
      <figure>
        <Image src={assest.oneNote} alt="img" width={88} height={82} />
      </figure>
      <Typography variant="body1">Onenote</Typography>
      <FormControl fullWidth className={styles.form_field}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Notebook 1</em>
          </MenuItem>
          <MenuItem value={10}>Notebook 2</MenuItem>
          <MenuItem value={20}>Notebook 3</MenuItem>
          <MenuItem value={30}>Notebook 4</MenuItem>
        </Select>
      </FormControl>
      <Box className={styles.btn_grp}>
        <CustomButton type="button">
          <Typography variant="button">Save</Typography>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default NotesModal;
