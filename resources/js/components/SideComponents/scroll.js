import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        boxShadow: "0px 15px 25px #038ed433",
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            backgroundColor: theme.palette.primary.main,
            boxShadow: "5px 20px 25px #038ed466",
        },
        right: '5%',
    }
}))

const Scroll = ( {showBelow} ) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)     
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    }
    )

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <div>
            {show &&
            <IconButton onClick={handleClick} className={classes.toTop}>
                <ExpandLessIcon />
            </IconButton>
            }
        </div>
    )
}

export default Scroll