import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import makeStyles from '@mui/styles/makeStyles';

export default function DifficultySelection(props) {

    const { chooseEasy, chooseNormal, chooseHard } = props.actions;

    const useStyles = makeStyles(theme => ({
        customWidth: {
          maxWidth: 200
        }
    }));
    const classes = useStyles();

    const easyTitle = (<div>
        <b>Easy</b>
        <br/><br/>
        - Time added for correct answers: <b>4 seconds</b>
    </div>);

    const normalTitle = (<div>
        <b>Normal</b>
        <br/><br/>
        - Time added for correct answers: <b>2 seconds</b>
    </div>);

    const hardTitle = (<div>
        <b>Hard</b>
        <br/><br/>
        - Time added for correct answers: <b>1 second</b>
    </div>);    

    return (<div id="difficulty-selection">
        <Tooltip  title={easyTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <Button onClick={() => chooseEasy()} onContextMenu={e => e.preventDefault()}>Easy</Button>
        </Tooltip>
        <Tooltip  title={normalTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <Button onClick={() => chooseNormal()} onContextMenu={e => e.preventDefault()}>Normal</Button>
        </Tooltip>
        <Tooltip  title={hardTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <Button onClick={() => chooseHard()} onContextMenu={e => e.preventDefault()}>Hard</Button>
        </Tooltip>
    </div>)
}