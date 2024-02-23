import { useChatDetails } from "@/hooks/react-query/useChat";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { dequeuePendingMessageQueue, enqueuePendingMessageQueue } from "@/reduxtoolkit/slices/chat.slice";
import { StyledPopover } from "@/ui/Popover/StyledPopover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { TypeAnimation } from 'react-type-animation';
import FilePreviewCard from "./Messages/FilePreviewCard";
import MessageMenu from "./menu/MessageMenu";

// import defaultChatMsgStyles from '@mui-treasury/styles/chatMsg/default';

const StyledGrid = styled(Grid)`
  .leftRow {
    display: flex;
    justify-content: space-between;
    direction: rtl;
    align-items: end;
    margin-bottom: 42px;
    .msg {
      border: 1px solid var(--chatboxbgright);
      border-radius: 20px 20px 0px 20px;
      max-width: 432px;
      display: inline-block;
      direction: ltr;
      margin-bottom: 0;
      font-weight: 400;
      font-size: 14px;
      color: var(--sidebartextactive);
      /* @media(max-width: 1366px){
        width: 100%;
        max-width: 60%;
        padding: 12px;
      }
      @media(max-width: 767px){
        max-width: 90%;
        width: 100%;
      } */
      @media(max-width:575px){
        padding:16px;
      }
    }
    button {
      padding: 0;
      min-width: auto;
      background-color: transparent;
      margin-right: 8px;
      &:hover {
        svg {
          path {
            fill: var(--activeColor);
          }
        }
      }
      svg {
        font-size: 18px;
        width: 22px;
        height: 22px;
        path {
          fill: var(--blueshadeIcon);
        }
      }
    }
  }
  .rightRow {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 42px;
    .msg {
      background: var(--chatboxbgleft2);
      border-radius: 20px 20px 20px 0px;
      max-width: 515px;
      display: inline-block;
      text-align: left;
      margin-bottom: 0;
      font-weight: 400;
      font-size: 14px;
      color: var(--sidebartextactive);
      /* @media(max-width: 1366px){
        max-width: 75%;
        width: 100%;
      }
      @media(max-width: 767px){
        max-width: 90%;
        width: 100%;
        padding: 12px;
      } */
      @media(max-width:575px){
        padding:16px;
      }
    }
    button {
      padding: 0;
      min-width: auto;
      background-color: transparent;
      margin-left: 8px;
      &:hover {
        svg {
          path {
            fill: var(--activeColor);
          }
        }
      }
      svg {
        font-size: 18px;
        width: 22px;
        height: 22px;
        path {
          fill: var(--blueshadeIcon);
        }
      }
    }
  }
  .left {
  }
  .right {
  }
  .leftfirst {
    border-top-left-radius: 15px;
  }
  .leftlast {
    border-bottom-left-radius: 15px;
  }
  .rightfirst {
    border-top-right-radius: 15px;
  }
  .rightlast {
    border-bottom-right-radius: 15px;
  }
`;

const StyledMsg = styled(Typography)(() => ({
  padding: "15px 25px"
}));

interface IMessageItemProps {
  avatar: string;
  message: string;
  side: "left" | "right";
  animation?: boolean;
  // for error handling
  timestamp?: number;
  sending?: boolean;
  error?: boolean;
  isRetrying?: boolean;
  chatId?: string;

}





const SingleMessageItem = (props: IMessageItemProps) => {
  const { message, side, animation, sending, error, chatId, timestamp } = props;
  const openMessageMenuState = usePopupState({ variant: "popover", popupId: "messagePopoverMenu" });
  const dispatch = useAppDispatch()
  const {
    submitChat: { mutate, isLoading: isSubmitLoading },

  } = useChatDetails()

  const handleRetry = () => {
    if (chatId && timestamp) {


      let payload = {
        chatId,
        id: chatId,
        message,
        timestamp,
        sending: true,
        error: false,
        isRetrying: false

      }

      mutate({
        id: chatId,
        message
      }, {
        onSuccess: () => {


          payload = {
            ...payload,
            sending: false,
            error: false,
            isRetrying: false

          }

          dispatch(dequeuePendingMessageQueue(payload))
        },
        onError: () => {
          payload = {
            ...payload,
            sending: false,
            error: true,
            isRetrying: false
          }

          dispatch(enqueuePendingMessageQueue(payload))

        }
      })

    }

  }




  return <>
    <Stack display='flex' direction='column'>
      <StyledMsg
        align={side}
        // {...TypographyProps}
        className={`${side} msg`}
      >
        {
          animation === true ? <TypeAnimation
            sequence={[
              message, // Types 'One'
              1000, // Waits 1s

            ]}
            wrapper="span"
            cursor={false}
            repeat={1}

          /> : message
        }

      </StyledMsg>
      {

        (sending || isSubmitLoading) ? <span>
          <svg style={{ opacity: 0.5 }} viewBox="0 0 16 15" height="15" width="16" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 15" xmlSpace="preserve"><path fill="currentColor" d="M9.75,7.713H8.244V5.359c0-0.276-0.224-0.5-0.5-0.5H7.65c-0.276,0-0.5,0.224-0.5,0.5v2.947 c0,0.276,0.224,0.5,0.5,0.5h0.094c0.001,0,0.002-0.001,0.003-0.001S7.749,8.807,7.75,8.807h2c0.276,0,0.5-0.224,0.5-0.5V8.213 C10.25,7.937,10.026,7.713,9.75,7.713z M9.75,2.45h-3.5c-1.82,0-3.3,1.48-3.3,3.3v3.5c0,1.82,1.48,3.3,3.3,3.3h3.5 c1.82,0,3.3-1.48,3.3-3.3v-3.5C13.05,3.93,11.57,2.45,9.75,2.45z M11.75,9.25c0,1.105-0.895,2-2,2h-3.5c-1.104,0-2-0.895-2-2v-3.5 c0-1.104,0.896-2,2-2h3.5c1.105,0,2,0.896,2,2V9.25z" /></svg>

        </span> : null
      }

      {


        (error) && !(sending || isSubmitLoading) ? <Button onClick={handleRetry} type='button' color='error'>
          retry
        </Button> : null
      }


    </Stack>


    {/* <OnlyDocument /> */}
    <Box sx={{ position: "relative" }} pb={1}>
      <IconButton
        {...bindTrigger(openMessageMenuState)}
      >
        <MoreHorizIcon />
      </IconButton>
      <StyledPopover
        {...bindPopover(openMessageMenuState)}
      >
        <MessageMenu />
      </StyledPopover>
    </Box>
  </>
}

const MessageItem = (props: IMessageItemProps) => {
  const { side } = props;

  return (
    <StyledGrid
      container
      justifyContent={side === "right" ? "flex-end" : "flex-start"}
    // {...GridContainerProps}
    >
      <Grid item xs={12}>
        <div className={`${side}Row`}>
          <SingleMessageItem {...props} />
        </div>


      </Grid>
    </StyledGrid>
  );
};

export const FileMessageItem = (props: IMessageItemProps) => {
  const { side } = props;

  return (
    <StyledGrid
      container
      justifyContent={side === "right" ? "flex-end" : "flex-start"}
    // {...GridContainerProps}
    >
      <Grid item xs={12}>
        <div className={`${side}Row`}>

          <FilePreviewCard size='medium' {...props} />
        </div>


      </Grid>
    </StyledGrid>
  );
};

export default MessageItem;
