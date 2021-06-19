import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "0 10px",
    },
    heading:{
        fontSize: "18px",
        color: theme.palette.primary.main
      },
});


class LinksData extends React.Component {
    delData = (id) => {
        alert("Are You Want To Delete This Post");
        this.props.deleteData(id);
    }
    render(){
        const {data} = this.props;
        const {classes} = this.props;
        if(window.location.href === window.origin + "/addLinks"){
            return(
                <div>
                    <hr />
                    <div className={classes.root}>
                        <Typography variant="h5" component="h2" className={classes.heading}>
                            {data.title}
                        </Typography>
                        <div className="action">
                        <button className="secondary2"><Link to={`/editLinks/${data.id}`}>Edit</Link></button>
                        <button className="secondary2" onClick={() => this.delData(data.id)}>Delete</button>
                    </div>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <hr />
                <div className={classes.root}>
                    <a href={data.link}><Typography variant="h5" component="h2" className={classes.heading}>
                        {data.title}
                    </Typography></a>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(LinksData);

 