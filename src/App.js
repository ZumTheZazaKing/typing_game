import { lazy, Suspense as Sus, useState, useEffect } from 'react';
import { Context } from './context';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Main = lazy(() => import('./pages/Main').then(module => ({ default: module.Main })));
const Difficulty = lazy(() => import('./pages/Difficulty').then(module => ({ default: module.Difficulty })));
const Game = lazy(() => import('./pages/Game').then(module => ({ default: module.Game })));
const End = lazy(() => import('./pages/End').then(module => ({ default: module.End })));

function App() {

  const [gameStart, setGameStart] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(JSON.parse(localStorage.getItem("words")) || []);
  const [loadingWords, setLoadingWords] = useState(false);

  useEffect(() => {
    if(words.length > 0)return;

    setLoadingWords(true);
    fetch("https://random-word-api.herokuapp.com/word?number=1000000&swear=0")
    .then(res => res.json())
    .then(data => {
      const wordsToStore = data.filter(word => word.length > 3 && word.length < 10);
      setWords(wordsToStore);
      localStorage.setItem("words", JSON.stringify(wordsToStore));
      setLoadingWords(false);
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Router>
      <div className="App">
        <Sus fallback={<div className='loading'><CircularProgress disableShrink thickness={5} size={60}/></div>}>
          <Context.Provider value={{
            gameStart, setGameStart, difficulty, setDifficulty,
            score, setScore, loadingWords, words
          }}>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path="/difficulty" element={<Difficulty />} />
              <Route path="/game" element={<Game />} />
              <Route path="/end" element={<End />} />

            </Routes>
          </Context.Provider>
        </Sus>
      </div>
    </Router>
  );
}

export default App;
