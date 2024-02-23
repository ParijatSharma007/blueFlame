/* eslint-disable react/jsx-no-useless-fragment */
import useFileValidation from "@/hooks/chat/useFileValidation";
import assest from "@/json/assest";
import styles from "@/styles/components/chatdetails.module.scss";
import CancelIcon from '@mui/icons-material/Cancel';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useMemo } from "react";

const SMALL_PREVIEW = 80

type size = 'small' | 'medium' | 'large'

interface FilePreviewCardProps {
  file: File,
  size: size
}

interface OnlyImageProps extends FilePreviewCardProps {

}

export const OnlyImage = ({ size, file }: OnlyImageProps) => {

  const url = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file)
    }
    return ''
  }, [])


  return (
    <Card sx={{ maxWidth: size === 'small' ? SMALL_PREVIEW : 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={size === 'small' ? SMALL_PREVIEW : 345}
        image={url}
      />
    </Card>
  );
};



const OnlyVideo = ({ size, file }: OnlyImageProps) => {

  const source = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file)
    }
    return ''
  }, [])

  return (
    <Card sx={{ maxWidth: size === 'small' ? SMALL_PREVIEW : 345 }}>
      <video controls={size !== 'small'} title={file?.name} width={size === 'small' ? SMALL_PREVIEW : 345}>
        <source src={source} />
      </video>
    </Card>
  );
};

export const OnlyDocument = ({ size, file }: OnlyImageProps) => {
  return (
    <Card className={styles.document_card}>
      {
        size === 'small' ? <><Box >
          <Box className={styles.icon}>
            <Image src={assest.document} alt="img" width={50} height={50} />
          </Box>

        </Box>
        </> : null
      }

      {
        size === 'medium' ? <><Box className={styles.doc_left}>
          <Box className={styles.icon}>
            <Image src={assest.document} alt="img" width={11} height={14} />
          </Box>
          <Box className={styles.text_area}>
            <Typography variant="h6">{file?.name}</Typography>
            <Typography variant="h6">{file?.size} bytes</Typography>
          </Box>
        </Box>
          <Button className={styles.download_btn}>
            <Image src={assest.download} alt="img" width={13} height={12} />
          </Button></> : null
      }

    </Card>
  );
};

export const AudioFile = () => {
  return (
    <Card sx={{ display: "flex", maxWidth: 345 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};



export default function FilePreviewCard({ file, size }: FilePreviewCardProps) {
  const { _findFileType } = useFileValidation();

  const Component = useMemo(() => {
    const fileType = _findFileType(file);

    console.log(fileType, 'fileType')




    if (fileType === 'image') {
      return <OnlyImage file={file} size={size} />;
    }

    if (fileType === "video") {
      return <OnlyVideo file={file} size={size} />;
    }

    if (fileType === 'zip') {
      return <OnlyDocument file={file} size={size} />
    }
  }, [file]);

  return <>{Component}</>;
}

export const FileCancelWrapper = ({ children, onClick }: { children: JSX.Element }) => {

  return <Box sx={{
    borderRadius: '8px',
    backgroundColor: '#fff',
    border: '1px solid #00000036',
    padding: '2px',
    position: 'relative'
  }}>
    <IconButton onClick={onClick} sx={{
      position: 'absolute',
      top: '2px',
      right: '2px', backgroundColor: '#fff', zIndex: 999
    }} >
      <CancelIcon />
    </IconButton>
    {children}
  </Box>
}