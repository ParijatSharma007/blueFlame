import { GetActivityDetails } from "@/api/functions/activities.api"
import { useQuery } from "react-query"

export const useActivityDetails = (id: string | string[] | undefined) => {

    return useQuery(['GetActivityDetails', id], {
        queryFn: () => GetActivityDetails(id)
    })

}