/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-extraneous-dependencies */

import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { IGetModelList } from "@/api/functions/model.api";
import useFileValidation from "@/hooks/chat/useFileValidation";
import useDimension from "@/hooks/general/useDimension";
import { useToggle } from "@/hooks/general/useToggle";
import { useChatDetails } from "@/hooks/react-query/useChat";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { IchatDetails } from "@/interface/chatapi.interface";
import assest from "@/json/assest";
import textLoading from "@/json/lottie/97930-loading.json";
import { isWithin20Seconds, truncateString } from "@/lib/functions/_helpers.lib";
import { dequeuePendingMessageQueue, enqueuePendingMessageQueue, enqueueTypingStatus, setActiveChatID } from "@/reduxtoolkit/slices/chat.slice";
import styles from "@/styles/components/chatdetails.module.scss";
import Loader from "@/ui/Loader/Loder";
import { StyledPopover } from "@/ui/Popover/StyledPopover";
import emojiData from '@emoji-mart/data';
import Picker from "@emoji-mart/react";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import {
  bindMenu,
  bindPopover, bindTrigger,
  usePopupState
} from "material-ui-popup-state/hooks";
import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from 'react';
import MessageItem, { FileMessageItem } from "./MessageItem";
import FilePreviewCard, { FileCancelWrapper } from "./Messages/FilePreviewCard";
import DiscreteSliderValues from "./menu/AdvanceMenuSlider";
import UplodedFileListSection from "./menu/UplodedFileSection";

const Lottie = dynamic(() => import("lottie-react"));


interface ChatDetailsInput {
  details: IGetModelList | undefined
}


export const Root = styled('div')(

  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
  font-size: 14px;
  margin-top:20px;
`,
);





export default function ChatDetails({ details }: ChatDetailsInput) {

  const { height } = useDimension();
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const dispatch = useAppDispatch()
  const [message, setMessage] = React.useState('')
  const { typingStatus, activeChatID, pendingMessageQueue } = useAppSelector(s => s.chatSlice)
  const [files, setFiles] = React.useState<File[]>([])
  const {
    chatdetails: { data, isLoading },
    submitChat: { mutate, isLoading: isSubmitLoading },
    createChat: { mutate: editChatMutate },
    deleteChat: { mutate: deleteChatMutate },
    submitChatFileMutation: { mutate: fileMutate }
  } = useChatDetails()
  // const handleOnDrop = (e) => {};
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { _isValidFileType, _validateFileSize } = useFileValidation()
  const [selectModel, setSelectModel] = React.useState<string>('')
  const [title, setTitle] = React.useState('')
  const [isEditing, setIsEditing] = React.useState(false)
  const advanceMenuState = usePopupState({
    variant: 'popover',
    popupId: 'advancemenu',
  })
  const { toggle, state } = useToggle(false)
  const [pendingFiles, setPendingFiles] = React.useState([])





  // FUNCTIONS START
  // ===============

  const handleDelte = () => {
    deleteChatMutate();
  }

  const handleEmoji = (value) => {
    // console.log('===================hi==================', value?.native)
    setMessage(`${message}${value?.native}`)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }


  const handleClickback = () => {
    dispatch(setActiveChatID(''))
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleSelectModel = (e) => {
    setSelectModel(e.target.value);
  }


  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);

      const temp: File[] = [];

      _files.forEach((item) => {
        if (_isValidFileType(item)) {
          // Check file size
          if (_validateFileSize(item)) {
            temp.push(item);
          }
        }
      });

      if (files?.length) {
        setFiles((prevFiles) => [...prevFiles, ...temp]);
      } else {
        setFiles(temp)
      }


    }
  };






  const messageSending = () => {
    if (message.trim() !== "") {
      // console.log('===============================');
      dispatch(enqueueTypingStatus({
        id: data?.data?.id,
        status: 'typing'
      }))


      if (data?.data?.id) {
        // Add item to message queue 

        let payload = {
          chatId: activeChatID,
          id: data?.data?.id,
          message,
          timestamp: moment().unix(),
          sending: true,
          error: false,
          isRetrying: false

        }





        dispatch(enqueuePendingMessageQueue(payload))
        setMessage('');



        mutate({
          id: data?.data?.id,
          message
        }, {
          onSuccess: () => {

            payload = {
              ...payload,
              sending: false,
              error: false,
              isRetrying: false

            }



            dispatch(enqueueTypingStatus({
              id: data?.data?.id,
              status: 'waiting'
            }));

            dispatch(dequeuePendingMessageQueue(payload))
          },
          onError: (error) => {
            // console.log(message)
            // console.log(payload)
            payload = {
              ...payload,
              sending: false,
              error: true,
              isRetrying: false
            }

            dispatch(enqueuePendingMessageQueue(payload))
            dispatch(enqueueTypingStatus({
              id: data?.data?.id,
              status: 'waiting'
            }))
          }
        })
      }
    }
  }

  const sendFile = async () => {
    if (files?.length) {
      // console.log('===============================');
      dispatch(enqueueTypingStatus({
        id: data?.data?.id,
        status: 'typing'
      }))

      setFiles([])

      files?.map(async (_file, index) => {
        const formData = new FormData();
        formData.append('file', _file)

        const temp: File[] = [];

        temp.push(_file)

        if (files?.length) {
          setPendingFiles((prevFiles) => [...prevFiles, ...temp]);
        } else {
          setPendingFiles(temp)
        }

        try {
          const res = await axiosInstance.post<IchatDetails>(
            endpoints.chat.postFile(activeChatID),
            formData
          )

          if (res?.status !== 200) {
            dispatch(enqueueTypingStatus({
              id: data?.data?.id,
              status: 'waiting'
            }))
          }
        } catch (err) {
          dispatch(enqueueTypingStatus({
            id: data?.data?.id,
            status: 'waiting'
          }))
        }












      })





    }
  }


  const handleKeyDown = (e: React.KeyboardEvent) => {

    if (e?.key === "Enter") {
      e.preventDefault();

      if (message?.trim()?.length) {
        messageSending();
      }

      if (files?.length) {
        sendFile()
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(message)
    e.preventDefault();
    messageSending()


  }

  const handleEditChat = () => {

    const findModel = details?.find(item => item?.id === selectModel)
    let payload = {}
    if (findModel) {
      payload = {
        title,
        accountModel: {
          entityType: findModel?.entityType, id: findModel.id
        },
        id: data?.data?.id,
      }
    } else {
      payload = {
        title, id: data?.data?.id
      }
    }
    if (data?.data?.title !== title || selectModel?.id !== data?.data?.accountModel?.id) {
      editChatMutate(payload)
    }
  }

  const handleDeleteChat = () => {
    const findModel = details?.find(item => item?.id === selectModel)
    let payload = {}
    if (findModel) {
      payload = {
        title,
        accountModel: findModel,
        id: data?.data?.id,
        isDeleted: true
      }
    } else {
      payload = {
        title, id: data?.data?.id, isDeleted: true
      }
    }
    if (data?.data?.title !== title || selectModel?.id !== data?.data?.accountModel?.id) {
      editChatMutate(payload)
    }

  }

  const handleDrawerOpen = () => {
    toggle();
    advanceMenuState.close();
  }

  const handleDrawerClose = () => {
    toggle()
  }

  // useMemo  START
  //================== 

  const RenderMenuList = React.useMemo(() => {
    return details?.map((item) => <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>);
  }, [details])

  const showTypingStatus = React.useMemo(() => {
    if (typingStatus[activeChatID]?.length) {
      return typingStatus[activeChatID]
    }

    return ""
  }, [typingStatus[activeChatID]])

  const showTypingStatus2 = React.useMemo(() => {
    if (typingStatus[activeChatID] === 'typing') {
      return <>{`${title} is ${typingStatus[activeChatID]}`
      }< Lottie animationData={textLoading} loop style={{ width: '2rem', height: '2rem', display: 'inline-block', position: 'relative', bottom: -10 }} /></>
    }

    return ""
  }, [typingStatus[activeChatID]])

  const RenderPendingMessages = React.useMemo(() => {
    const _pendingMsg = pendingMessageQueue[activeChatID]


    if (_pendingMsg?.length) {
      return _pendingMsg?.map((msg) => (<MessageItem
        avatar=""
        side='left'
        key={msg.timestamp}
        message={msg.message}
        animation={false}
        timestamp={msg.timestamp}
        error={msg.error}
        sending={msg.sending}
        chatId={msg.chatId}
      />))
    }

    return null


  }, [pendingMessageQueue[activeChatID]])

  const RenderFileMessages = React.useMemo(() => {


    if (pendingFiles?.length) {
      return pendingFiles?.map((msg) => (<FileMessageItem side='left' file={msg} />))
    }

    return null


  }, [pendingFiles, activeChatID])

  const handleDeleteFile = (index: number) => {
    const temp = [...files]; // Create a new array by spreading the existing files

    temp.splice(index, 1); // Remove the file at the specified index

    setFiles(temp);
  }

  const RenderFiles = React.useMemo(() => {

    return files?.length ? <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start" className={`${files?.length ? styles.chat_write_area_header : null}`} >

      {files?.map((item, index) => (

        <FileCancelWrapper onClick={() => handleDeleteFile(index)}  ><FilePreviewCard size='small' file={item} /></FileCancelWrapper>

      ))}
    </Stack> : null
  }, [files])


  // useEffect  START
  //==================

  React.useEffect(() => {
    if (data?.data?.accountModel?.id?.length) {
      // console.log('==id==', data?.data)
      // console.log(moment().diff(data?.data?.lastMessageDate, "seconds"));
      // console.log(moment.unix(data?.data?.lastMessageDate).fromNow());
      // console.log(moment().diff(moment.unix(data?.data?.lastMessageDate), 'seconds'))


      setSelectModel(data?.data?.accountModel?.id)
    } else {
      setSelectModel('')

    }
    if (data?.data?.title) {
      setTitle(data?.data?.title)
    } else {
      setTitle('')
    }
  }, [data?.data?.accountModel?.id, data?.data?.title])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (title?.length) {
        handleEditChat()
      }
    }, 500);
    return () => clearTimeout(timeout)
  }, [title, selectModel])


  React.useEffect(() => {

    return () => {
      setSelectModel('')
      setTitle('')
    }
  }, [activeChatID])

  const router = useRouter()
  const lastRef = React.useRef()






  return (
    <Box className={`${styles.chat_details} chat_play_details`}>

      <AppBar component="nav" position="sticky">
        <Box className={styles.details_head}>
          <Box>

            <Box onClick={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}

            >
              {
                isEditing ? <TextField placeholder='Enter title' error={title?.length === 0} value={title} onChange={handleTitleChange} /> : <Typography variant="h3">{isLoading ? 'loading...' : truncateString(title, 20) || 'No title'}</Typography>
              }

            </Box>



            <span>{showTypingStatus}</span>
          </Box>
          {
            router?.query?.isDelete === 'true' ? <Button onClick={handleDeleteChat}>Delete</Button> : null
          }

          <Box className={styles.head_btn}>
            <Box className={styles.drop_opt}>
              {/* <IconButton id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <Image src={assest.flag} alt="img" width={15} height={15} />
              </IconButton> */}
              {
                isLoading ? <Skeleton animation='wave' variant='rectangular' width={150} height={50} /> :
                  <Select fullWidth disabled={!!data?.data?.accountModel?.id} value={selectModel} displayEmpty onChange={handleSelectModel}  >
                    <MenuItem value="" disabled >Choose Model</MenuItem>
                    {RenderMenuList}
                  </Select>
              }

              {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                className={styles.chat_drop}
              >
              
                {RenderMenuList}

              </Menu> */}
            </Box>
            <IconButton  {...bindTrigger(advanceMenuState)}>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Menu
            {...bindMenu(advanceMenuState)}
            // open
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            className={styles.temp_popup}
          >
            <Box px={1}>
              <Typography variant="h6">Temperature</Typography>
              <Box px={2}>

                <DiscreteSliderValues />
              </Box>

              <Box className={styles.btn_area}>
                <Button onClick={handleDrawerOpen}>
                  <FileCopyIcon /> Uploaded Files
                </Button>


              </Box>


            </Box>

          </Menu>
          <UplodedFileListSection open={state} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />

        </Box>
      </AppBar >


      <Box className={`${styles.chat_show_inner} chat_body_playground`}

      // onDrop={() => console.log("Drop 1")}
      // onDragOver={() => console.log("drga over")}
      // onDropCapture={() => console.log("drop capture")}
      >
        <List
          className={`${styles.chat_write_body} `}
          sx={{
            height: height ? height - 100 : height,
            maxHeight: height ? height - 100 : height
          }}
        >
          {
            isLoading ? <Box display='flex' py={3} justifyContent='center' alignItems='center' >
              <Loader />
            </Box> : null
          }


          {data?.data?.messages?.map((item, index) => (
            <MessageItem
              avatar=""
              side={item?.fromUser === 'assistant' ? 'right' : 'left'}
              key={item?.date}
              message={item?.content}
              animation={index === data?.data?.messages?.length - 1 && item?.fromUser === 'assistant' && isWithin20Seconds(data?.data?.lastMessageDate)}
            />

          ))}

          {RenderPendingMessages}

          {RenderFileMessages}





        </List>
        <Box ref={lastRef} />
      </Box>

      <Box className={styles.chat_write_area}>



        <Box component='form' onSubmit={handleSubmit} className={styles.chat_write_area_inner} onKeyDown={handleKeyDown}>
          {RenderFiles}
          <Box className={styles.chat_write_area_inner_box}>
            <TextField
              id="outlined-multiline-static"
              multiline
              minRows={1}
              maxRows={3}
              placeholder="Type a message...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}

            />
            <IconButton component="label">
              <input hidden multiple onChange={handleFileInput} type="file" />
              <Image src={assest.attachpin} alt="img" width={14} height={14} />
            </IconButton>
            <IconButton {...bindTrigger(popupState)}>
              <Image src={assest.emoji} alt="img" width={14} height={14} />
            </IconButton>
            <StyledPopover {...bindPopover(popupState)}>
              {/* <Picker data={emojiData} onEmojiSelect={console.log} /> */}
              <Picker theme='dark' data={emojiData} onEmojiSelect={e => handleEmoji(e)} />
            </StyledPopover>

            <IconButton disabled={message.length === 0 && files?.length === 0} type='submit'>
              {/* {
              isSubmitLoading ? <Loader /> : <Image src={assest.sendIcon} alt="img" width={13} height={13} />
            } */}
              <Image src={assest.sendIcon} alt="img" width={13} height={13} />

            </IconButton>
          </Box>
        </Box>
        <span style={{ fontSize: '10px', color: '#bbb' }}>{showTypingStatus2}</span>
      </Box>
    </Box >
  );
}
