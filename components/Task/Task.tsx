/* eslint-disable react/no-unescaped-entities */

import { getTaskList } from '@/api/functions/activities.api';
import { IAccountUser, IactivityDetails, IAgent, IParameters } from '@/interface/apiresponse.interface';
import assest from '@/json/assest';
import styles from '@/styles/components/task.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import moment from 'moment';
import Image from 'next/image';
import { memo, useCallback, useState, useTransition } from 'react';
import Tree from 'react-d3-tree';
import { useQuery } from 'react-query';


interface IgenerateOrgChart extends IactivityDetails {
  taskIndex: string;
  children: IactivityDetails;
  taskId: string;
}




// Usage example




// const CustomSvgLine = ({ sourceX, sourceY, targetX, targetY }) => {
//   // Customize the appearance of the SVG line here
//   const strokeWidth = 2;
//   const strokeColor = 'blue';

//   return (
//     <g className='bluesvg'>
//       <line
//         x1={sourceX}
//         y1={sourceY}
//         x2={targetX}
//         y2={targetY}
//         strokeWidth={strokeWidth}
//         stroke={strokeColor}
//       />
//     </g>
//   );
// };

interface InodeData extends IactivityDetails {
  taskId: string;
  websites?: string[]
}

interface IParentNodeProps {
  nodeData?: InodeData, parentNodeId: string

}




interface ITaskProps {
  taskIds: string
}

export interface ItaskDataMain {
  taskIndex: number
  id: string
  replacedWithId: any
  entityType: string
  creationDate: number
  lastModifiedDate: number
  lastModifiedUser: string
  lastModifiedComment: any
  isDeleted: boolean
  customValues: any
  accountUser: IAccountUser
  actionItem: string
  output: string
  learnings: any
  agent: IAgent
  status: string
  scheduledStart: any
  command: string
  parameters: IParameters
  processorClass: string
  startTime: any
  artifacts: any
  endTime: any
  context: any
  dependsOn: any
  taskId: string
}

export interface ItaskDataProps extends ItaskDataMain {
  children: ItaskDataMain[]
}


const ParentNode = (props: IParentNodeProps) => {
  const { nodeData, parentNodeId } = props;


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (<>
    <Paper elevation={0} className={nodeData?.taskId === parentNodeId ? `${styles.taskCard} ${styles.forComplete}` : `${styles.taskCard} ${styles.forPending}`}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" className={styles.taskCardHeader}>
        <Typography variant='h3'>{nodeData?.name}</Typography>
        <Button onClick={handleClickOpen}>Details</Button>
      </Stack>
      <Typography variant='h4' className={nodeData?.status === 'COMPLETED' ? styles.complete : styles.pending}><span>{nodeData?.status} -</span> {`${moment.unix(nodeData?.lastModifiedDate).format('DD/MM/YY')} at ${moment.unix(nodeData?.lastModifiedDate).format('hh:mm a')}`}  </Typography>
      <Typography variant='body1'>{nodeData?.actionItem}</Typography>


    </Paper>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={styles.details_modal}
    >
      <DialogTitle id="alert-dialog-title">Task Details</DialogTitle>
      <DialogContent>
        <Typography variant="h5">
          {/* Task 1 : Lorem ipsum dolor sit amet */}
          Task : {nodeData?.taskId}
        </Typography>
        <Box className={styles.grey_box}>
          <Box className={styles.inner_text}>
            <Typography variant="h6">Action:</Typography>
            <Typography variant="body1">
              {nodeData?.actionItem}
            </Typography>
          </Box>
          <Box className={styles.inner_text}>
            <Typography variant="h6">Output:</Typography>
            <Typography variant="body1">
              {nodeData?.output}
            </Typography>
          </Box>
          <Box className={styles.inner_text}>
            <Typography variant="h6">Websites:</Typography>

            {
              nodeData?.websites && <List>

                {
                  nodeData?.websites?.length ? nodeData?.websites?.map((website, index) => {
                    <ListItem>{website}</ListItem>
                  }) : <ListItem>No website found</ListItem>
                }
              </List>
            }

            {/* // <ListItem>http://loremipsumdolorsitamet.com</ListItem>
              // <ListItem>http://loremipsumdolorsitamet.com</ListItem>
              // <ListItem>http://loremipsumdolorsitamet.com</ListItem>
              // <ListItem>http://loremipsumdolorsitamet.com</ListItem> */}

          </Box>
          <Box className={styles.inner_text}>
            <Typography variant="h6">Files:</Typography>
            <List>

              <ListItem><Image src={assest.document} alt="" width={10} height={13} />Loremipsumdolorsitamet.pdf</ListItem>
              <ListItem><Image src={assest.document} alt="" width={10} height={13} />Loremipsumdolorsitamet.pdf</ListItem>

            </List>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  </>)
}









const Task = memo(({ taskIds }: ITaskProps) => {

  const [taskData, setTaskData] = useState<ItaskDataProps | null>(null);
  const [isPending, setTransition] = useTransition()

  const { isLoading, } = useQuery('getTaskList', {
    queryFn: () => getTaskList(taskIds),
    onSuccess: (data) => {
      setTransition(() => {

        setTaskData(data?.data)
      })
    },
    onError(err) {
      setTaskData(null)
    },
  })







  const RenderTask = useCallback(
    () => {
      return taskData ? <Tree data={taskData} pathFunc='step'
        zoomable

        orientation="horizontal"

        // scaleExtent={{ min: 1, max: 3 }}
        nodeSize={{ x: 300, y: 200 }}
        allowForeignObjects
        nodeSvgShape={{
          shape: 'none', // Set the default shape to none
        }}
        // translate={{ x: 200, y: 200 }}
        nodeLabelComponent={{
          render: <ParentNode parentNodeId={taskData?.taskId} />,
          foreignObjectWrapper: {
            style: {
              x: -50,
              y: -50
            }
          }
        }}
        collapsible={false}



      /> : <Typography>No task found</Typography>


    },
    [taskData],
  )


  return (
    <Paper className={styles.taskPaper}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" className={styles.taskHeader}>
        <Typography variant='h2'>Task</Typography>
        <Box className={styles.searchTask}>
          <TextField
            label=""
            id="outlined-size-normal"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Stack>

      <Box className={styles.listWrapper}>

        <Box sx={{ height: '500px' }}>
          {
            isLoading ? <Box alignItems='center' justifyContent='center' display='flex' height='100%' ><CircularProgress /></Box> : <RenderTask />
          }



        </Box>


      </Box>

    </Paper>
  );
});

export default Task;
