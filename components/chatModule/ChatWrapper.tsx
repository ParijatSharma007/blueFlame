import useDimension from "@/hooks/general/useDimension";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

interface IChatWrapperProps {
  children: JSX.Element[] | JSX.Element;
}

const ChatWrapper = (props: IChatWrapperProps) => {
  const { height } = useDimension();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  if (loader) {
    return (
      <Backdrop open={loader}>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Box
      sx={{
        maxHeight: height ? height - 10 : height,
        overflowY: "hidden"
      }}
      p={1}
      className="chat_wraps_mdl"
    >
      {props.children}
    </Box>
  );
};

export default ChatWrapper;
