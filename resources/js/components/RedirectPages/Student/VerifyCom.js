import React, {useEffect} from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import ProfilePreview from '../form/finalStep/ProfilePreview';
import UgPreview from "../form/finalStep/UgPreview";
import MatriculationPreview from "../form/finalStep/MatriculationPreview";
import DiplomaPreview from '../form/finalStep/DiplomaPreview';
import TwelfthPreview from '../form/finalStep/TwelfthPreview';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
        textAlign: "center",
        color: theme.palette.primary.dark
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
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
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
        justifyContent: "flex-start",
        padding: "0px 15px",
        fontWeight: "400",
        fontSize: "22px"
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
        padding: "5px 0px",
        textAlign: "left"
    },
    keySpan: {
        fontSize: "18px",
        color: "#038ed4"
    },
    valueSpan: {
        fontSize: "18px"
    }
}));

export default function finalStep(props) {
    const classes = useStyles();
    const [loader, setLoader] = React.useState(false);
    const [cond, setCond] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [photoPath, setPhotoPath] = React.useState("");
    const [matricPath, setMatricPath] = React.useState("");
    const [twelfthPath, setTwelfthPath] = React.useState("");
    const [diplomaPath, setDiplomaPath] = React.useState("");
    const [degreePath, setDegreePath] = React.useState("");

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
        { id: 11, label: "Rural Area", value: "value" },
        { id: 12, label: "Disability", value: "value" },
        { id: 13, label: "Father Name", value: "value" },
        { id: 14, label: "Father Phone", value: "value" },
        { id: 15, label: "Mother Name", value: "value" },
        { id: 16, label: "Mother Phone", value: "value" },
        { id: 17, label: "Course", value: "value" },
        { id: 18, label: "Stream", value: "value" },
        { id: 19, label: "Section", value: "value" },
        { id: 20, label: "Shift", value: "value" },
        // { id: 21, label: "Training Sem", value: "value" },
        { id: 22, label: "Leet", value: "value" },
        { id: 23, label: "Hostler", value: "value" },
        { id: 24, label: "WhatsApp No", value: "value" },
        { id: 25, label: "Contact No", value: "value" },
        { id: 26, label: "Address", value: "value" },
        { id: 27, label: "City", value: "value" },
        { id: 28, label: "District", value: "value" },
        { id: 29, label: "State", value: "value" },
        { id: 30, label: "Pincode", value: "value" },
        {id: 31, label: "Photo", value: "value"}
    ]);

    const [MatriculationData, setMatriculationData] = React.useState([
        { id: 1, label: "Board", value: "value" },
        { id: 2, label: "Institute Name", value: "value" },
        { id: 3, label: "State", value: "value" },
        { id: 4, label: "City", value: "value" },
        { id: 5, label: "Year of Passing", value: "value" },
        { id: 6, label: "Marks type", value: "value" },
        { id: 7, label: "Pincode", value: "value" },
        { id: 8, label: "Obtained Marks", value: "value" },
        { id: 9, label: "Maximum Marks", value: "value" },
        { id: 10, label: "File", value: "value" },
    ]);
    const [UgData, setUgData] = React.useState([
        { id: 1, label: "Institute Name", value: "value" },
        { id: 2, label: "State", value: "value" },
        { id: 3, label: "City", value: "value" },
        { id: 4, label: "Year of Passing", value: "value" },
        { id: 5, label: "Marks type", value: "value" },
        { id: 6, label: "Pincode", value: "value" },
        { id: 7, label: "Obtained Marks", value: "value" },
        { id: 8, label: "Maximum Marks", value: "value" },
        { id: 9, label: "File", value: "value" },
    ]);
    const [Cat, setCat] = React.useState({
        label: "Category",
        value: "",
    });
    const [TwelfthData, setTwelfthData] = React.useState([
        { id: 1, label: "Board", value: "value" },
        { id: 2, label: "Institution Name", value: "value" },
        { id: 3, label: "Jee Rank", value: "value" },
        { id: 4, label: "State", value: "value" },
        { id: 5, label: "City", value: "value" },
        { id: 6, label: "Year of Passing", value: "value" },
        { id: 7, label: "Year Gap", value: "value" },
        { id: 8, label: "Marks Type", value: "value" },
        { id: 9, label: "Obtained Marks", value: "value" },
        { id: 10, label: "Maximum Marks", value: "value" },
        { id: 11, label: "Pincode", value: "value" },
        { id: 12, label: "File", value: "value" },
    ]);
    const [DiplomaData, setDiplomaData] = React.useState([
        { id: 1, label: "Branch", value: "value" },
        { id: 2, label: "Institution Name", value: "value" },
        { id: 3, label: "State", value: "value" },
        { id: 4, label: "City", value: "value" },
        { id: 5, label: "Year of Passing", value: "value" },
        { id: 6, label: "Year Gap", value: "value" },
        { id: 7, label: "Marks Type", value: "value" },
        { id: 8, label: "Obtained Marks", value: "value" },
        { id: 9, label: "Maximum Marks", value: "value" },
        { id: 10, label: "Pincode", value: "value" },
        { id: 11, label: "File", value: "value" },
    ]);
    const handleVerify = () => {
        setLoader(true);
        var msg = "done";
        var token = localStorage.getItem("token");
        axios.post(`/api/formCompleted`,
            msg,{
                headers: { 'Authorization': 'Bearer ' + token }
            }
        )
        .then(response => {
            if(response.data.msg === "stepcomplete"){
            setLoader(false);
            localStorage.removeItem('token');
            localStorage.removeItem('userid');
            localStorage.removeItem('useruuid');
            window.location.href = window.origin+ "/login";
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    const options = (x) => {
        if(x === 0){
            return "No"
        }
        return "Yes"
    }
    const Marks_type = (x) => {
        if(x === 1){
            return "CGPA"
        }
        return "PERCENTAGE"
    }
    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/verifyAll`,{
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
                { id: 10, label: "Farming Background", value: options(res.data.details['farming_background']) },
                { id: 11, label: "Rural Area", value: options(res.data.details['ruralarea']) },
                { id: 12, label: "Disability", value: options(res.data.details['disability']) },
                { id: 13, label: "Father Name", value: res.data.details['father_name'] },
                { id: 14, label: "Father Phone", value: res.data.details['father_mobile'] },
                { id: 15, label: "Mother Name", value: res.data.details['mother_name'] },
                { id: 16, label: "Mother Phone", value: res.data.details['mother_mobile'] },
                { id: 17, label: "Course", value: res.data.details['category'] },
                { id: 18, label: "Stream", value: res.data.details['stream'] },
                { id: 19, label: "Section", value: res.data.details['branch_type'] },
                { id: 20, label: "Shift", value: res.data.details['shift'] },
                //{ id: 21, label: "Training Sem", value: res.data.details['training_sem'] },
                { id: 22, label: "Leet", value: options(res.data.details['leet']) },
                { id: 23, label: "Hostler", value: options(res.data.details['hostler']) },
                { id: 24, label: "WhatsApp No", value: res.data.details['whatsapp'] },
                { id: 25, label: "Contact No", value: res.data.details['mobile'] },
                { id: 26, label: "Address", value: res.data.details['address'] },
                { id: 27, label: "City", value: res.data.details['city'] },
                { id: 28, label: "District", value: res.data.details['district']},
                { id: 29, label: "State", value: res.data.details['state'] },
                { id: 30, label: "Pincode", value: res.data.details['pincode'] },
                { id: 31, label: "Photo", value: res.data.details['file'].split('\\').pop().split('/').pop() },
            ]);
            setPhotoPath(res.data.details['file']);
            setMatriculationData([
                { id: 1, label: "Board", value: res.data.matric['board'] },
                { id: 2, label: "Institute Name", value: res.data.matric['institution_name'] },
                { id: 3, label: "State", value: res.data.matric['state'] },
                { id: 4, label: "City", value: res.data.matric['city'] },
                { id: 5, label: "Year of Passing", value: res.data.matric['year_of_passing'] },
                { id: 6, label: "Marks type", value: Marks_type(res.data.matric['marks_type']) },
                { id: 7, label: "Pincode", value: res.data.matric['pincode'] },
                { id: 8, label: "Obtained Marks", value: res.data.matric['obtained_marks'] },
                { id: 9, label: "Maximum Marks", value: res.data.matric['maximum_marks'] },
                { id: 10, label: "File", value: res.data.matric['file'].split('\\').pop().split('/').pop() },
            ]);
            setMatricPath(res.data.matric['file']);
            setCat({value: res.data.category['category'], label: "Category"});
            if(res.data.category['category']=== "both" || res.data.category['category'] === "XII"){
                setTwelfthData([
                    { id: 1, label: "Board", value: res.data.twelfth['board'] },
                    { id: 2, label: "Institution Name", value: res.data.twelfth['institution_name'] },
                    { id: 3, label: "Jee Rank", value: res.data.twelfth['jee_rank'] },
                    { id: 4, label: "State", value: res.data.twelfth['state'] },
                    { id: 5, label: "City", value: res.data.twelfth['city'] },
                    { id: 6, label: "Year of Passing", value: res.data.twelfth['year_of_passing'] },
                    { id: 7, label: "Year Gap", value: res.data.twelfth['year_gap'] },
                    { id: 8, label: "Marks type", value: Marks_type(res.data.twelfth['marks_type']) },
                    { id: 9, label: "Pincode", value: res.data.twelfth['pincode'] },
                    { id: 10, label: "Obtained Marks", value: res.data.twelfth['obtained_marks'] },
                    { id: 11, label: "Maximum Marks", value: res.data.twelfth['maximum_marks'] },
                    { id: 12, label: "File", value: res.data.twelfth['file'].split('\\').pop().split('/').pop() },
                ]);
                setTwelfthPath(res.data.twelfth['file']);
            }
            if(res.data.category['category']=== "both" || res.data.category['category'] === "diploma"){
                setDiplomaData([
                    { id: 1, label: "Branch", value: res.data.diploma['branch'] },
                    { id: 2, label: "Institution Name", value: res.data.diploma['institution_name'] },
                    { id: 3, label: "State", value: res.data.diploma['state'] },
                    { id: 4, label: "City", value: res.data.diploma['city'] },
                    { id: 5, label: "Year of Passing", value: res.data.diploma['year_of_passing'] },
                    { id: 6, label: "Year Gap", value: res.data.diploma['year_gap'] },
                    { id: 7, label: "Marks type", value: Marks_type(res.data.diploma['marks_type']) },
                    { id: 8, label: "Pincode", value: res.data.diploma['pincode'] },
                    { id: 9, label: "Obtained Marks", value: res.data.diploma['obtained_marks'] },
                    { id: 10, label: "Maximum Marks", value: res.data.diploma['maximum_marks'] },
                    { id: 11, label: "File", value: res.data.diploma['file'].split('\\').pop().split('/').pop() },
                ]);
                setDiplomaPath(res.data.diploma['file']);
            }
            if(res.data.ug){
                setCond(true);
                setUgData([
                    { id: 1, label: "Institution Name", value: res.data.ug['institution_name'] },
                    { id: 2, label: "State", value: res.data.ug['state'] },
                    { id: 3, label: "City", value: res.data.ug['city'] },
                    { id: 4, label: "Year of Passing", value: res.data.ug['year_of_passing'] },
                    { id: 5, label: "Marks type", value: Marks_type(res.data.ug['marks_type']) },
                    { id: 6, label: "Pincode", value: res.data.ug['pincode'] },
                    { id: 7, label: "Obtained Marks", value: res.data.ug['obtained_marks'] },
                    { id: 8, label: "Maximum Marks", value: res.data.ug['maximum_marks'] },
                    { id: 9, label: "File", value: res.data.ug['file'].split('\\').pop().split('/').pop() },
                ]);
                setDegreePath(res.data.ug['file']);
            }
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
                        <h1>Your Details</h1>
                    </b>
                    </div>
                </div>
                <hr />
                <ProfilePreview data={ProfileData} path={photoPath}/>
                <hr />
                <MatriculationPreview data={MatriculationData} path={matricPath} /> 
                <hr />
                <div>
                    <Typography
                        variant="h4"
                        className={classes.cardHeading}
                    >
                        Twelfth/Diploma Details
                    </Typography>
                    <CardContent>
                        <span className={classes.outerSpan}>
                            <span className={classes.keySpan}>
                                {Cat.label} :
                            </span>
                            <span className={classes.valueSpan}>
                                {Cat.value}
                            </span>
                        </span>
                    </CardContent>
                </div>
                {Cat.value === "both" ? (
                    <div>
                        <hr />
                        <TwelfthPreview data={TwelfthData} path={twelfthPath}/>
                        <hr />
                        <DiplomaPreview data={DiplomaData} path={diplomaPath}/>
                    </div>
                ):(<div></div>)}
                {Cat.value === "XII" ? (
                    <div>
                        <hr />
                        <TwelfthPreview data={TwelfthData} path={twelfthPath}/>
                    </div>
                ):(<div></div>)}
                {Cat.value === "diploma" ? (
                    <div>
                        <hr />
                        <DiplomaPreview data={DiplomaData} path={diplomaPath}/>
                    </div>
                ):(<div></div>)}
                {cond ? (
                    <div>
                        <hr />
                        <UgPreview data={UgData} path={degreePath}/>
                    </div>
                ):(<div></div>)}
            </div>
            </div>
            )}
        </div>
    );
}
