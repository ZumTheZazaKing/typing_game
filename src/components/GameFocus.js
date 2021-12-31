import { useEffect, useContext, useState, useRef } from 'react';
import { Context } from '../context';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import BackgroundMusic from '../audio/background.mp3';

export default function GameFocus(){

    const { difficulty, score, words, setScore } = useContext(Context);
    const [word, setWord] = useState('');
    const [timeLeft, setTimeLeft] = useState(10);
    const audioRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const wordQuery = Math.floor(Math.random() * words.length);
        setWord(words[wordQuery]);
        audioRef.current.play();

        const timer = setInterval(() => {
            setTimeLeft(timeLeftToTry => timeLeftToTry - 1);
        },1000)

        return () => clearInterval(timer);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {

        if(timeLeft === 0){
            navigate('/end');
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

    },[timeLeft, navigate])

    const checkInput = e => {
        if(!word)return;
        if(e.target.value.trim() === word) {
            setScore(score + 1);
            e.target.value = '';
            generateNewWord();
            if(timeLeft >= 100 || timeLeft + 4 >= 100 || timeLeft + 2 >= 100 || timeLeft + 1 >= 100)return;
            switch(difficulty){
                case 'easy': setTimeLeft(timeLeft + 6); break;
                case 'normal': setTimeLeft(timeLeft + 4); break;
                case 'hard': setTimeLeft(timeLeft + 2); break;
                case 'insane': setTimeLeft(timeLeft + 1); break;
                default:break;
            }
        }
    }

    const generateNewWord = () => {
        const wordQuery = Math.floor(Math.random() * words.length);
        setWord(words[wordQuery]);
    }

    return (<div id="game-focus">
        <p id="score">Score: {score}</p>
        <br/>
        <CircularProgress variant="determinate" value={(timeLeft/100)*100} thickness={22} size={40}/>
        <br/>
        <h2>{word}</h2>
        <br/>
        <TextField 
            sx={{input:{color:'white'}}} 
            variant="standard"
            placeholder='Enter word here'
            onChange={e => checkInput(e)}
            autoFocus
        />
        <audio ref={audioRef} src={BackgroundMusic} loop/>
    </div>)
}