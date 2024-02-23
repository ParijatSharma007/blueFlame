import { MAX_SIZE_FILE, SUPPORTED_FILE_TYPE, SUPPORTED_FILE_TYPE_ALL_FORMAT } from '@/config/constants';
import validationText from '@/json/messages/validationText';
import { fileTypes } from '@/types/common.type';
import useNotiStack from '../general/useNotistack';

const useFileValidation = () => {

    const { toastError } = useNotiStack();

    const _validateFileSize = (file: File): boolean => {
        if (file?.size > MAX_SIZE_FILE) {
            toastError(`${validationText.error.file_size_exceed} for ${file.name}`);
            return false;
        }

        return true;
    };


    const _isValidFileType = (file: File): boolean => {
        if (file) {
            const fileType = file.type.split('/')[0];

            if (SUPPORTED_FILE_TYPE.includes(fileType)) {

                return true
            } else {
                toastError(validationText.error.not_a_valid_file);
                return false;
            }



        }

        return false

    }

    const _findFileType = (file: File): fileTypes | string | null => {
        if (file) {
            const fileName = file.name;
            const _popFileName = fileName.split('.').pop()

            if (_popFileName === undefined) {
                return null;
            }
            const fileExtension = _popFileName.toLowerCase();

            // Check the file extension against the supported types
            const fileCategory = Object.keys(SUPPORTED_FILE_TYPE_ALL_FORMAT).find(category =>
                SUPPORTED_FILE_TYPE_ALL_FORMAT[category].includes(fileExtension)
            );



            // If the file type is not supported, return null or handle accordingly
            return fileCategory || null;
        }

        return null

    };


    return { _validateFileSize, _isValidFileType, _findFileType }
}

export default useFileValidation