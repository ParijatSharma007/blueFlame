import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";

export const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    background: var(--activeBodyColor);
    border: 0.5px solid var(--activeColor);
    color: var(--white);
    max-width: 350px;
    z-index: 9;
    svg{
      color: var(--textcolortext);
    }
    .MuiTypography-root {
      font-weight: 400;
      font-size: 14px;
      color: var(--textcolortext);
    }
  }
`;
