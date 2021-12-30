import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';


export default function StartButton () {

    const { setGameStart } = useContext(Context);
    const navigate = useNavigate();

    const startGame = () => {
        setGameStart(true);
        navigate('/difficulty');
    }

    return (<Button id="start-button" variant="contained" onClick={() => {startGame()}}>
            Start
        </Button>)
}