import { ActiveAccountModel } from "@/api/functions/model.api";
import useHtml from "@/hooks/useHtml";
import { IModel } from "@/interface/apiresponse.interface";
import assest from "@/json/assest";
import styles from "@/styles/pages/configuaration.module.scss";
import CustomButton from "@/ui/Buttons/CustomButton";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { queryClient } from "pages/_app";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { StyledTextField } from "../NewChatModal/NewChatModal";

interface IIntegrationCardProps {

    title: string;
    desc: string;
    id: string;
    model?: IModel
    canEdit?: boolean
    enabled: boolean
}

const IntegrationCardschema = yup.object().shape({
    usageWarning: yup
        .string()
        .trim()
        .required('Enter usageWarning'),
    enabled: yup.boolean()
});

const IntegrationCard = ({ id, title, desc, model, canEdit, enabled }: IIntegrationCardProps) => {

    const { mutate, isLoading } = useMutation('get', ActiveAccountModel)
    const [openthree, setOpenthree] = useState(false);
    const { addClassInBody, removeFromBody } = useHtml()
    const {
        handleSubmit,
        register,
        reset, setValue, watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(IntegrationCardschema)
    });

    useEffect(() => {
        reset({ id, usageWarning: desc, enabled })

    }, [id, desc, enabled])




    const handleClickOpenthree = () => {
        setOpenthree(true);
        addClassInBody()
    };

    const handleClosethree = () => {
        setOpenthree(false);
        removeFromBody()
    };

    const handleEdit = (data) => {
        mutate(data, {
            onSuccess: () => {
                handleClosethree();
                queryClient.invalidateQueries('GetAccountModelList')
            }
        })
    }

    return (
        <>
            <Card className={`${styles.integration_card} ${styles.model_card}`}>
                <CardContent>
                    <figure>
                        <Image src={assest.folderOpen} alt="img" width={21} height={18} />
                    </figure>


                    {
                        canEdit ? <IconButton onClick={handleClickOpenthree}>
                            <Image src={assest.editRecipe} alt="img" width={15} height={15} />
                        </IconButton> : null
                    }


                    <Stack direction='row' justifyContent='center' spacing={2} alignItems='center'>
                        <Typography variant="h5">{title} </Typography>
                        {/* <FormControlLabel onClick={s} label="" control={<Switch />} /> */}
                    </Stack>

                    <Typography variant="body1">{desc}</Typography>

                </CardContent>
            </Card>

            <ModalWrapper open={openthree} onClose={handleClosethree}>
                <Box component="form" onSubmit={handleSubmit(handleEdit)} className={`${styles.new_chat_modal} ${styles.intecard_modal}`}>
                    <Typography variant="h2">Edit {title}</Typography>

                    <StyledTextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        minRows={1}
                        maxRows={3}
                        multiline

                        {...register('usageWarning')}
                        error={Boolean(errors.usageWarning)}
                        helperText={errors.usageWarning?.message || ""}

                    />
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} className={styles.enabled_sec}>
                        <Typography variant="body1">Enable</Typography>

                        <FormControlLabel label="" control={<Switch checked={watch('enabled')} onChange={e => setValue('enabled', e.target.checked)} />} />
                    </Stack>


                    <Box className={styles.btn_area}>
                        <CustomButton loading={isLoading} disabled={isLoading} type="submit">

                            <Typography variant="button">Edit</Typography>
                        </CustomButton>
                    </Box>
                </Box>
            </ModalWrapper>

        </>

    )
}

export default IntegrationCard