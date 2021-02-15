import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import ProfilePreview from './ProfilePreview';
import AcademicsPreview from "./AcademicsPreview";
import ParentsPreview from "./ParentsPreview";
import DiplomaPreview from './DiplomaPreview';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120
    },
    heading: {
        paddingTop: "20px",
        textAlign: "center"
    },
    para: {
        color: "#000"
    },
    box: {
        margin: "30px auto 60px",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
        ["@media (max-width:960px)"]: {
            width: "90%"
        }
    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    cardStyles: {
        width: "90%",
        margin: "auto",
        marginTop: "50px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 15px 25px #00000033"
    },
    loader: {
        padding: "10px"
    },
    pos: {
        float: "right"
    },
    btnBox: {
        width: "90%",
        margin: "20px auto",
        paddingBottom: "10px",
        textAlign: "right"
    },
    button: {
        // marginRight: theme.spacing(1)
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main
        }
    },

    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        backgroundColor: "#038ed459"
    },
    textFieldContainer: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    fields: {
        width: "80%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533"
    },
    focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
    },
    outerSpan: {
        padding: "10px 0px"
    },
    keySpan: {
        fontSize: "22px",
        fontWeight: "700"
    },
    valueSpan: {
        fontSize: "22px"
    }
}));

export default function finalStep(props) {
    const classes = useStyles();
    const [loader, setLoader] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const [ProfileData, setProfileData] = React.useState([
        { id: 1, label: "First Name", value: "value" },
        { id: 2, label: "Last Name", value: "value" },
        { id: 3, label: "DOB", value: "value" },
        { id: 4, label: "Aadhar Number", value: "value" },
        { id: 5, label: "Height", value: "value" },
        { id: 6, label: "Weight", value: "value" },
        { id: 7, label: "Blood Group", value: "value" },
        { id: 8, label: "Gender", value: "value" },
        { id: 9, label: "Martial Status", value: "value" },
        { id: 10, label: "Farming Background", value: "value" },
        { id: 11, label: "Disability", value: "value" },
        { id: 12, label: "Father Name", value: "value" },
        { id: 13, label: "Father Phone", value: "value" },
        { id: 14, label: "Mother Name", value: "value" },
        { id: 15, label: "Mother Phone", value: "value" },
        { id: 16, label: "Course", value: "value" },
        { id: 17, label: "Stream", value: "value" },
        { id: 18, label: "Section", value: "value" },
        { id: 19, label: "Shift", value: "value" },
        { id: 20, label: "Training Sem", value: "value" },
        { id: 21, label: "Leet", value: "value" },
        { id: 22, label: "Hostler", value: "value" },
        { id: 23, label: "WhatsApp No", value: "value" },
        { id: 24, label: "Contact No", value: "value" },
        { id: 25, label: "Address", value: "value" },
        { id: 26, label: "City", value: "value" },
        { id: 27, label: "District", value: "value" },
        { id: 28, label: "State", value: "value" },
        { id: 29, label: "Pincode", value: "value" },
    ]);

    const [ParentsData, setParentsData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);
    const [AcademicsData, setAcademicsData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);

    const [DiplomaData, setDiplomaData] = React.useState([
        { id: 1, label: "key", value: "value" },
        { id: 2, label: "key", value: "value" },
        { id: 3, label: "key", value: "value" },
        { id: 4, label: "key", value: "value" },
        { id: 5, label: "key", value: "value" },
        { id: 6, label: "key", value: "value" },
        { id: 7, label: "key", value: "value" },
        { id: 8, label: "key", value: "value" },
        { id: 9, label: "key", value: "value" },
        { id: 10, label: "key", value: "value" },
        { id: 11, label: "key", value: "value" },
        { id: 12, label: "key", value: "value" },
        { id: 13, label: "key", value: "value" },
        { id: 14, label: "key", value: "value" },
        { id: 15, label: "key", value: "value" },
        { id: 16, label: "key", value: "value" },
        { id: 17, label: "key", value: "value" }
    ]);
    
    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/verifyAll/`,{
            headers: { 'Authorization': 'Bearer ' + token }});
            setProfileData([
                { id: 1, label: "First Name", value: res.data.details['first_name'] },
                { id: 2, label: "Last Name", value: res.data.details['last_name'] },
                { id: 3, label: "DOB", value: res.data.details['dob'] },
                { id: 4, label: "Aadhar Number", value: res.data.details['aadhar'] },
                { id: 5, label: "Height", value: res.data.details['height'] },
                { id: 6, label: "Weight", value: res.data.details['weight'] },
                { id: 7, label: "Blood Group", value: res.data.details['blood_group'] },
                { id: 8, label: "Gender", value: res.data.details['gender'] },
                { id: 9, label: "Martial Status", value: res.data.details['marital_status'] },
                { id: 10, label: "Farming Background", value: res.data.details['farming_background'] },
                { id: 11, label: "Disability", value: res.data.details['disability'] },
                { id: 12, label: "Father Name", value: res.data.details['father_name'] },
                { id: 13, label: "Father Phone", value: res.data.details['father_mobile'] },
                { id: 14, label: "Mother Name", value: res.data.details['mother_name'] },
                { id: 15, label: "Mother Phone", value: res.data.details['mother_mobile'] },
                { id: 16, label: "Course", value: res.data.details['category'] },
                { id: 17, label: "Stream", value: res.data.details['stream'] },
                { id: 18, label: "Section", value: res.data.details['branch_type'] },
                { id: 19, label: "Shift", value: res.data.details['shift'] },
                { id: 20, label: "Training Sem", value: res.data.details['training_sem'] },
                { id: 21, label: "Leet", value: res.data.details['leet'] },
                { id: 22, label: "Hostler", value: res.data.details['hostler'] },
                { id: 23, label: "WhatsApp No", value: res.data.details['whatsapp'] },
                { id: 24, label: "Contact No", value: res.data.details['mobile'] },
                { id: 25, label: "Address", value: res.data.details['address'] },
                { id: 26, label: "City", value: res.data.details['city'] },
                { id: 27, label: "District", value: res.data.details['district']},
                { id: 28, label: "State", value: res.data.details['state'] },
                { id: 29, label: "Pincode", value: res.data.details['pincode'] },
            ])
            
        setLoading(false);
    }
    useEffect(()=>{
        fetchDetails();
    },[])
    return (
        <div className={classes.root}>
            {loading ? (
                <Card className={classes.box}>
                <div className={classes.heading}>
                <div className={classes.loader}>
                <CircularProgress color="#193b68" size="80px" />
                </div>
                <b>
                    <p className={classes.para}>
                        Checking Confirmation Status
                    </p>
                </b>
                </div>
              </Card>
            ):(
                <div>
            <div className={classes.cardStyles}>
                <div>
                    <div className={classes.heading}>
                    <b>
                        <h1>Verify Your Data</h1>
                    </b>
                    <b>
                        <p className={classes.para}>
                            Please Check all the information carefully, You cannot change it after Finish
                        </p>
                    </b>
                    </div>
                </div>
                <hr />
                <ProfilePreview data={ProfileData}/>
                <hr />
                <ParentsPreview data={ParentsData} /> 
                <hr />
                <AcademicsPreview data={AcademicsData} />
                {/* <hr />
                <DiplomaPreview data={DiplomaData} /> */}
            </div>
            <div className={classes.btnBox}>
            <button className={classes.button} onClick={props.Back}>
                Back
            </button>
            {loader ? (
                        
                        <CircularProgress />
                    ):(
            <button type="submit" className={classes.button}>
                Finish
            </button>
                    )}
            </div>
            </div>
            )}
        </div>
    );
}
