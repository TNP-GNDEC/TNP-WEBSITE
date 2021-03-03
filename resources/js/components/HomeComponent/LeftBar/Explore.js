import React from "react";
import Axios from "axios";
import ExploreData from "./LeftBarData/ExploreData";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Explore from '@material-ui/icons/Explore';
import Loading from "../SideComponents/LoadingCard";
import { TrainRounded } from "@material-ui/icons";

const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      boxShadow: "0 1px 1px rgba(0,0,0,0.15),0 8px 0 -5px #eee,0 8px 1px -4px rgba(0,0,0,0.15),0 16px 0 -10px #eee,0 16px 1px -9px rgba(0,0,0,0.15)",
    },
    header:{
        display: "flex",
    },
    icon:{
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "0px 5px 15px #193b6833",
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

class Explores extends React.Component {
    state = {
        data: [],
        loading: true
    }
    fetchData = async () => {
        const res = await Axios.get("/addExploreItems");
        if(res.data.status === 200){
            this.setState({data: res.data.data});
            this.setState({loading: false});
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    deleteData = async (id) => {
        const res = await Axios.delete(`/addExploreItems/${id}`);
        if(res.data.status === 200){
            this.fetchData();
        }
    }

    render(){
        if(this.state.loading){
            return <Loading />
        }
        if(Object.keys(this.state.data).length == 0){
            return <div></div>
        }
        const {classes} = this.props;
        return(
            <Card className={classes.root} variant="outlined">
                <div className={classes.header}>
                <div className={classes.icon}><Explore className={classes.Icon}/></div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Explore
                    </Typography>
                </div>
                {this.state.data.map(data => (
                    <ExploreData data = {data} key={data.id} deleteData = {this.deleteData}/>
                ))}
            </Card>
        )
    }
}

export default withStyles(useStyles)(Explores);