import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';

export default function DifficultyBack(){

    const { setGameStart } = useContext(Context);
    const navigate  = useNavigate();

    const goBack = () => {
        setGameStart(false);
        navigate('/');
    }

    return (<IconButton sx={{color:"white"}} 
    id="difficulty-back-button"
    onClick={() => goBack()}>
        <ArrowBackIcon/>
    </IconButton>)
}