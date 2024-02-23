import { IGetActivityList } from "@/api/functions/activities.api";
import assest from "@/json/assest";
import { truncateString } from "@/lib/functions/_helpers.lib";
import styles from "@/styles/pages/activities.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

interface ActivityListProps {
    data: IGetActivityList
}

const ActivityList = ({ data }: ActivityListProps) => {
    return data?.map(item => (
        <Accordion className={styles.first_accordion} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"

            >
                <Link href={`/activities/details/${item?.id}`}>
                    <Typography>
                        <Image
                            src={assest.research}
                            alt="img"
                            width={18}
                            height={18}
                        />
                        {item?.objective?.length ? truncateString(item?.objective, 50) : 'No title'}
                    </Typography>
                </Link>

            </AccordionSummary>

        </Accordion>
    )
    )

}

export default ActivityList