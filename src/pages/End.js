import { useContext, useEffect } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const End = () => {

    const { score, gameStart, setGameStart, setDifficulty, setScore, difficulty } = useContext(Context);
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
        <p id="score">
            You got <b>{score}</b> {score === 1 ? "word" : "words"} on <b>{difficulty.toUpperCase()}</b> difficulty.
        </p>
        <br/>
        <Button variant="contained" onClick={() => goBackToMain()}>
            Main Menu
        </Button>
    </div>)
}