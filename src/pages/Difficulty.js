import { useEffect, useContext } from 'react';
import { Context } from '../context';
import { useNavigate } from 'react-router-dom';

import DifficultyBack from '../components/DifficultyBack';
import DifficultySelection from '../components/DifficultySelection';

export const Difficulty = () => {

    const { gameStart, setDifficulty } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if(!gameStart)return navigate('/');
    })

    const chooseEasy = () => {
        setDifficulty('easy');
        navigate('/game');
    }
    const chooseNormal = () => {
        setDifficulty('normal');
        navigate('/game');
    }
    const chooseHard = () => {
        setDifficulty('hard');
        navigate('/game');
    }

    return (<div id="Difficulty">
        <DifficultyBack/>
        <h2>Choose Difficulty</h2>
        <br/>
        <DifficultySelection actions={{'chooseEasy':chooseEasy, 'chooseNormal':chooseNormal, 'chooseHard':chooseHard}}/>
    </div>)
}