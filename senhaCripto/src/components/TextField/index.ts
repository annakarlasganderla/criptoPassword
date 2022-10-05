import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)({
    '& label': {
        color: '#000',
    },
    '& label.Mui-focused': {
        color: '#61dbfb',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#000',
        },
        
        '&.Mui-focused fieldset': {
            borderColor: '#61dbfb',
            
        },
    },
});