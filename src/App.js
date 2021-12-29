import { lazy, Suspense } from 'react';
import { Context } from './context';

const Main = lazy(() => import('./pages/Main').then(module => ({ default: module.Main })));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Context.Provider value={{}}>

          <Main />

        </Context.Provider>
      </Suspense>
    </div>
  );
}

export default App;
