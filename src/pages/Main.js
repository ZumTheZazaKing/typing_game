import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';

import StartButton from '../components/StartButton';

export const Main = () => {

    const [mainHelpOpen, setMainHelpOpen] = useState(false);

    return (<div id="Main">
        <div id="main-content">
            <div>
                <h1>Zum's Typing Game</h1>
                <br/>
                <StartButton/>
            </div>
            <IconButton id="help" onClick={() => setMainHelpOpen(true)}>
                <QuestionMarkIcon />
            </IconButton>
            <Dialog
                open={mainHelpOpen}
                onClose={() => setMainHelpOpen(false)}
            >
                <DialogContent>
                    <DialogContentText>
                        1. Upon starting the game, you will be given a selection of difficulties.
                        <br/><br/>
                        2. After choosing a difficulty, you will be given a random word to type. 
                        You must type that word correctly within the initial time (10s).
                        <br/><br/>
                        3. If you succeed in typing the word, you will be given more time 
                        (scales with difficulty) and a new word will be given for you to type next.
                        <br/><br/>
                        4. The game ends when the time runs out so it's only a matter of how long you
                        last typing the words correctly.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setMainHelpOpen(false)} autoFocus>Got it</Button>
                </DialogActions>
            </Dialog>
        </div>
    </div>)
}