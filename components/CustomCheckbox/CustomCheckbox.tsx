import useTheme from "@/hooks/general/useTheme";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow: "inset 0 0 0 2px #9D9D9D, inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto #9D9D9D",
    outlineOffset: 2
  }
}));

const BpIconDark = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  border: '1px solid white',
  backgroundColor: "transparent",
  ".Mui-focusVisible &": {
    outline: "2px auto #9D9D9D",
    outlineOffset: 2
  }
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "transparent",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",

  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: 'url("/assets/images/checkIcon.svg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    content: '""'
  }
});

const BpCheckedIconDark = styled(BpIcon)({
  backgroundColor: "transparent",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: 'url("/assets/images/checkdark.svg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    content: '""'
  }
});

const CustomCheckbox = (props: CheckboxProps) => {
  const { theme } = useTheme()
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" }
      }}
      disableRipple
      color="default"
      checkedIcon={theme === 'light-mode' ? <BpCheckedIcon /> : <BpCheckedIconDark />}
      icon={theme === 'light-mode' ? <BpIcon /> : <BpIconDark />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
};

export default CustomCheckbox;
