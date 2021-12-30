import { useContext, useEffect } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const End = () => {

    const { score, gameStart, setGameStart, setDifficulty, setScore } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if(!gameStart)return navigate("/");
    })

    const goBackToMain = () => {
        navigate("/");
        setGameStart(false);
        setDifficulty(null);
        setScore(0);
    }

    return (<div id="End">
        <h1>GAME OVER</h1>
        <br/>
        <h3>Your score: {score}</h3>
        <br/>
        <Button variant="contained" onClick={() => goBackToMain()}>
            Main Menu
        </Button>
    </div>)
}