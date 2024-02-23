import { truncateString } from "@/lib/functions/_helpers.lib";
import styles from "@/styles/components/learninglist.module.scss";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface ILearningListProps {
  data: string[] | undefined
}

const LearningList = ({ data }: ILearningListProps) => {
  return (
    <Box className={styles.learning_list}>
      <List>
        {
          data?.map((text) => (<ListItem>
            {truncateString(text, 100)}
          </ListItem>))
        }


      </List>
    </Box>
  );
};

export default LearningList;
