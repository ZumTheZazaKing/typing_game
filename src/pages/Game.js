import { useEffect, useContext, useState } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';
import GameFocus from '../components/GameFocus';

export const Game = () => {

    const { gameStart, difficulty } = useContext(Context);
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        //if(!gameStart)return navigate('/');
        const countingDown = setInterval(() => {
            setCountdown(countdownn => countdownn - 1);
        }, 1000)
        setTimeout(() => {
            clearInterval(countingDown);
        },5000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (<div id="Game">
        {countdown > 0 ? <h1>{countdown}</h1> : ""}
        {countdown === 0 ? <h1>START!</h1> : ""}
        {countdown < 0 ? 
        <GameFocus/>
        
        : ""}
    </div>)
}