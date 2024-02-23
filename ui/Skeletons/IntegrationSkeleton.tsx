import styles from "@/styles/pages/configuaration.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const IntegrationCardSkeleton = ({ count }: { count: number }) => {
    return (
        <>
            {
                Array(count).fill(0).map(() => (<Grid item xs={2.4}>

                    <Card className={styles.integration_card}>


                        <CardContent>
                            <figure>
                                <Skeleton variant="circular" width={21} height={18} />
                            </figure>
                            <Skeleton width="100%" height={50} variant="text" />
                            <br />
                            <Skeleton width="100%" height={50} variant="text" />
                        </CardContent>


                    </Card>
                </Grid>))
            }

        </>


    )
}

export default IntegrationCardSkeleton