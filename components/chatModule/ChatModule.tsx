import { IGetModelList } from "@/api/functions/model.api";

import useDimension from "@/hooks/general/useDimension";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { setActiveChatID } from "@/reduxtoolkit/slices/chat.slice";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatWrapper from "./ChatWrapper";
import ChatDetails from "./fragments/ChatDetails";
import ChatSideBarList from "./fragments/ChatSideBarList";
import ChatEmpty from "./fragments/Messages/ChatEmpty";

interface IChatModule {
  details: IGetModelList
}

const ChatModule = ({ details }: IChatModule) => {
  const { activeChatID } = useAppSelector(s => s.chatSlice)
  const dispatch = useDispatch()
  const { height } = useDimension();
  useEffect(() => {
    return () => {
      dispatch(setActiveChatID(''))
    }
  }, [])
  return (
    <Box className="chat_Wrapper_parent">
      <ChatWrapper>
        <Box className="chat_wrapper">
          <Box className="chat_left" sx={{
            display: {
              xs: activeChatID?.length ? 'none' : 'block', md: 'block'
            },
            height,
          }}>
            <ChatSideBarList modelList={details} />
          </Box>

          {
            activeChatID?.length ? <Box className="chat_right" sx={{
              display: {
                xs: activeChatID?.length ? 'block' : 'none',
                md: 'block'
              }
            }}>
              <ChatDetails details={details} />
            </Box> : <Box className="chat_right none_chat"
            >
              <ChatEmpty />
            </Box>
          }



        </Box>
      </ChatWrapper>
    </Box>
  );
};

export default ChatModule;
