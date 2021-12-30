import { useEffect } from 'react';

export default function GameFocus(){

    useEffect(() => {
        console.log('GameFocus');
    },[])

    return (<div id="game-focus">
        <h1>Game Focus</h1>
    </div>)
}