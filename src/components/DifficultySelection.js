import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import makeStyles from '@mui/styles/makeStyles';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FaceIcon from '@mui/icons-material/Face';

export default function DifficultySelection(props) {

    const { chooseEasy, chooseNormal, chooseHard, chooseInsane } = props.actions;

    const useStyles = makeStyles(theme => ({
        customWidth: {
          maxWidth: 200
        }
    }));
    const classes = useStyles();

    const easyTitle = (<div>
        <b>Easy</b>
        <br/><br/>
        - Time added for correct answers: <b>6 seconds</b>
    </div>);

    const normalTitle = (<div>
        <b>Normal</b>
        <br/><br/>
        - Time added for correct answers: <b>4 seconds</b>
    </div>);

    const hardTitle = (<div>
        <b>Hard</b>
        <br/><br/>
        - Time added for correct answers: <b>2 seconds</b>
    </div>);

    const insaneTitle = (<div>
        <b>Insane</b>
        <br/><br/>
        - Time added for correct answers: <b>1 second</b>
    </div>);    

    return (<div id="difficulty-selection">
        <Tooltip  title={easyTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <IconButton onClick={() => chooseEasy()} onContextMenu={e => e.preventDefault()}>
                <ChildCareIcon fontSize="large"/>
            </IconButton>
        </Tooltip>
        <Tooltip  title={normalTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <IconButton onClick={() => chooseNormal()} onContextMenu={e => e.preventDefault()}>
                <FaceIcon fontSize="large"/>
            </IconButton>
        </Tooltip>
        <Tooltip  title={hardTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <IconButton onClick={() => chooseHard()} onContextMenu={e => e.preventDefault()}>
                <SchoolIcon fontSize="large"/>
            </IconButton>
        </Tooltip>
        <Tooltip  title={insaneTitle} classes={{ tooltip: classes.customWidth }} arrow>
            <IconButton onClick={() => chooseInsane()} onContextMenu={e => e.preventDefault()}>
                <LocalFireDepartmentIcon fontSize="large"/>
            </IconButton>
        </Tooltip>
    </div>)
}