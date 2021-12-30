import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';


export default function StartButton () {

    const { setGameStart, loadingWords } = useContext(Context);
    const navigate = useNavigate();

    const startGame = () => {
        setGameStart(true);
        navigate('/difficulty');
    }

    return (<Button disabled={loadingWords} id="start-button" variant="contained" onClick={() => {startGame()}}>
            {loadingWords ? 'Loading Words...' : 'Start'}
        </Button>)
}