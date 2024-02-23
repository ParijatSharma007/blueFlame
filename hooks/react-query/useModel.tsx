import { GetAccountModelList, GetModelList } from '@/api/functions/model.api'
import { useQuery } from 'react-query'

const useModel = () => {
    return (
        <div>useModel</div>
    )
}

export const useAccountModel = () => {
    const res = useQuery('GetAccountModelList', GetAccountModelList)


    return res;
}

export const useModelList = () => {
    const res = useQuery('GetModelList', GetModelList)


    return res;
}



export default useModel