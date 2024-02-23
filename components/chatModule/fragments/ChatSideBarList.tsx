import { IChatBarListItem } from "@/api/functions/chat.api";
import { IGetModelList } from "@/api/functions/model.api";
import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";
import NewChatModal from "@/components/NewChatModal/NewChatModal";
import useDimension from "@/hooks/general/useDimension";
import { useChatList } from "@/hooks/react-query/useChat";
import useHtml from "@/hooks/useHtml";
import styles from "@/styles/components/chatsidebar.module.scss";
import ChatListSkeleton from "@/ui/Skeletons/ChatListSkeleton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import SideBarItem from "./SideBarItem";

interface ChatSideBarListProps {
  modelList: IGetModelList
}

export default function ChatSideBarList({ modelList }: ChatSideBarListProps) {
  const { height } = useDimension();
  const [searchText, setSearchText] = useState<string>('')
  const [searchTextMain, setsearchTextMain] = useState<string>('')
  const [chatlist, setChatList] = useState<IChatBarListItem[]>([])
  const [isPendingSearchTransition, setSearchTransition] = useTransition();



  const { data, isLoading } = useChatList();
  // console.log('==================================', data);

  const RenderData = useMemo(() => {
    return chatlist?.length ? chatlist?.map((item) => (
      <SideBarItem title={item?.title} lastModifiedDate={item?.lastModifiedDate} id={item?.id} />
    )) : <Typography>No chat found</Typography>
  }, [chatlist?.length])




  const handleSearch = useCallback(() => {

    if (searchTextMain?.length === 0 && !!data?.data) {
      setChatList(data?.data)
      return;

    }

    setSearchTransition(() => {
      const temp = data?.data?.filter((item) => item?.title?.toLowerCase().includes(searchTextMain?.toLowerCase()))

      if (temp?.length) {
        setChatList(temp)
      } else {
        setChatList([])
      }
    })


  }, [searchTextMain])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsearchTextMain(searchText)
    }, 500);
    return () => clearTimeout(timeout)
  }, [searchText])

  useEffect(() => {
    if (data) {
      setChatList(data?.data)
    }
  }, [data])

  useEffect(() => {
    handleSearch()
  }, [searchTextMain])
  const [openthree, setOpenthree] = useState(false);
  const { addClassInBody, removeFromBody } = useHtml()
  const handleClickOpenthree = () => {
    setOpenthree(true);
    addClassInBody()
  };

  const handleClosethree = () => {
    setOpenthree(false);
    removeFromBody()
  };
  return (
    <Box className={styles.chat_sidebar}>
      <AppBar component="nav" color='inherit' position="sticky">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          className={styles.chat_head}
        >
          <Box className={styles.chat_head_add}>
            <Typography variant="h3">Chat</Typography>
            <Button onClick={handleClickOpenthree}>
              <AddCircleOutlineIcon /> <span>Create new chat</span>
            </Button>
          </Box>
          <Box className={styles.search_area}>
            <TextField
              fullWidth
              placeholder="Search"
              value={searchText} onChange={e => setSearchText(e.target.value)}
              InputProps={{

                type: "search",
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type='button' onClick={handleSearch}>
                      <SearchIcon />
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Stack>
      </AppBar>
      <List
        sx={{
          width: "100%",
          maxHeight: height ? height - 10 : height
        }}
        className={styles.side_list_body}
      >
        {
          (isLoading || isPendingSearchTransition) ? <ChatListSkeleton length={10} /> : RenderData
        }


        {/* <Toolbar />
        <Toolbar /> */}
      </List>
      <ModalWrapper open={openthree} onClose={handleClosethree}>
        <NewChatModal modelList={modelList} onClose={handleClosethree} />
      </ModalWrapper>
    </Box>
  );
}
