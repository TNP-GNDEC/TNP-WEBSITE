import React from "react";
import Axios from "axios";
import DownloadsData from "./LeftBarData/DownloadsData";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Download from '@material-ui/icons/GetApp';

const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px"
    },
    header:{
        display: "flex",
    },
    icon:{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderRadius: "5px",
      marginRight: "10px",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  Icon:{
    fontSize: "18px",
  },
    title:{
        color: theme.palette.primary.dark,
        fontSize: "22px"
    },
});

class Downloads extends React.Component {
    state = {
        data: [],
    }
    fetchData = async () => {
        const res = await Axios.get("/addDownloadsItems");
        if(res.data.status === 200){
            this.setState({data: res.data.data});
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    deleteData = async (id) => {
        const res = await Axios.delete(`/addDownloadsItems/${id}`);
        if(res.data.status === 200){
            this.fetchData();
        }
    }

    render(){
        if(Object.keys(this.state.data).length == 0){
            return <div></div>
        }
        const {classes} = this.props;
        return(
            <Card className={classes.root} variant="outlined">
                <div className={classes.header}>
                <div className={classes.icon}><Download className={classes.Icon}/></div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Downloads
                    </Typography>
                </div>
                {this.state.data.map(data => (
                    <DownloadsData data = {data} key={data.id} deleteData = {this.deleteData}/>
                ))}
            </Card>
        )
    }
}

export default withStyles(useStyles)(Downloads);