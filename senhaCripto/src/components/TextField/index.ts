import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)({
    '& label': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: '#61dbfb',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },

        '&.Mui-focused fieldset': {
            borderColor: '#61dbfb',
        },
    },
});