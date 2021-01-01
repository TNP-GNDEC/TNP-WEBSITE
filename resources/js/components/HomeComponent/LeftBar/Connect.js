import React from "react";
import Axios from "axios";
import ConnectData from "./LeftBarData/ConnectData";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/PersonAdd';
import Loading from "../SideComponents/LoadingCard";

const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      boxShadow: "0px 15px 25px #00000033",
    },
    header:{
        display: "flex",
    },
    icon:{
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      borderRadius: "5px",
      boxShadow: "0px 15px 25px #193b6833",
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

class Connect extends React.Component {
    state = {
        data: [],
        loading: true
    }
    fetchData = async () => {
        const res = await Axios.get("/addConnectItems");
        if(res.data.status === 200){
            this.setState({data: res.data.data});
            this.setState({loading: false});
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    deleteData = async (id) => {
        const res = await Axios.delete(`/addConnectItems/${id}`);
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
                <div className={classes.icon}><Person className={classes.Icon}/></div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Connect
                    </Typography>
                </div>
                {this.state.data.map(data => (
                    <ConnectData data = {data} key={data.id} deleteData = {this.deleteData}/>
                ))}
            </Card>
        )
    }
}

export default withStyles(useStyles)(Connect);