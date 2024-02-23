import { useAccountModel } from "@/hooks/react-query/useModel";
import IntegrationCardSkeleton from "@/ui/Skeletons/IntegrationSkeleton";
import Grid from "@mui/material/Grid";
import { useMemo } from "react";
import IntegrationCard from "../IntetrationCard/IntegrationCard";

const AllModelTab = () => {
    const { data, isLoading } = useAccountModel()


    const RenderUi = useMemo(() => {
        return data?.data?.length ? data?.data.map((_item) => {
            return (
                <Grid item xs={2.4} key={_item?.id}>
                    <IntegrationCard enabled={_item?.enabled} canEdit id={_item?.id} title={_item?.name} desc={_item?.usageWarning} model={_item?.model} />
                </Grid>
            );
        }) : 'No data'
    }, [data])



    return <Grid container rowSpacing={3} columnSpacing={4}>

        {
            isLoading ? <IntegrationCardSkeleton count={5} /> : RenderUi


        }

    </Grid>
}

export default AllModelTab