import { chatBarList, createNewChatMutation, deleteChatt, getChatDetails, submitChatFile, submitChatMessage } from "@/api/functions/chat.api";
import { queryClient } from "pages/_app";
import { useMutation, useQuery } from "react-query";
import { useAppSelector } from "../redux/useAppSelector";

export const useChatList = () => {
    const res = useQuery({
        queryKey: ['chatList'],
        queryFn: () => chatBarList(),
        refetchOnMount: false
    })


    return res;
};

export const useChatDetails = () => {
    const { activeChatID } = useAppSelector(s => s.chatSlice)

    const chatdetails = useQuery(['getChatDetails', activeChatID], {
        queryFn: () => getChatDetails(activeChatID),

    })


    const submitChat = useMutation('submitChatMessage', submitChatMessage, {
        onSuccess: () => {
            chatdetails.refetch();


        }
    })

    const submitChatFileMutation = useMutation('submitChatFile', submitChatFile, {
        onSuccess: () => {
            chatdetails.refetch();


        }
    })

    const createChat = useMutation('createNewChatMutation', createNewChatMutation, {
        onSuccess: () => {
            queryClient.invalidateQueries('chatList')
        }
    })

    const deleteChat = useMutation(['deleteChatMutation', activeChatID], {
        mutationFn: () => deleteChatt(activeChatID, { isDeleted: true }),
        onSuccess: () => {
            console.log('hello to me')
            queryClient.invalidateQueries('chatList')
        }
    })





    return { chatdetails, submitChat, createChat, deleteChat, submitChatFileMutation }
}