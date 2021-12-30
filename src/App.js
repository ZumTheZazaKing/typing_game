import { lazy, Suspense as Sus, useState } from 'react';
import { Context } from './context';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Main = lazy(() => import('./pages/Main').then(module => ({ default: module.Main })));
const Difficulty = lazy(() => import('./pages/Difficulty').then(module => ({ default: module.Difficulty })));
const Game = lazy(() => import('./pages/Game').then(module => ({ default: module.Game })));

function App() {

  const [gameStart, setGameStart] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <Router>
      <div className="App">
        <Sus fallback={<div className='loading'><CircularProgress disableShrink thickness={5} size={60}/></div>}>
          <Context.Provider value={{
            gameStart, setGameStart, difficulty, setDifficulty
          }}>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path="/difficulty" element={<Difficulty />} />
              <Route path="/game" element={<Game />} />

            </Routes>
          </Context.Provider>
        </Sus>
      </div>
    </Router>
  );
}

export default App;
