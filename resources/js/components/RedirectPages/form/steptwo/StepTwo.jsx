import React, { useEffect } from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { Card, DialogContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProfileDetails from "./ProfileDetails";
import ParentDetails from "./ParentsDetails";
import AcademicDetails from "./AcademicDetails";
import ContactDetails from "./ContactDetails";
import Button from "@material-ui/core/Button";
import { concat } from "lodash";
import AddressDetails from "./AddressDetails";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import {capitalCase} from 'change-case'; 
import { faLastfmSquare, faOdnoklassnikiSquare } from "@fortawesome/free-brands-svg-icons";
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
        paddingTop: "20px"
    },
    para:{
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
        ['@media (max-width:960px)']: {
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
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033"
    },
    loader:{
        padding: "10px"
    },
    toast:{
        top: "15%",
    },
    pos: {
        float: "right"
    },
    btnBox:{
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
        "&:focus":{
            outline: "none"
        },
        "&:hover":{
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
}));

export default function StepTwo(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const [loader, setLoader] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const {action, setAction} = props;
    const [open, setOpen] = React.useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const validate = () => {
        let temp = {}
        temp.first_name = (/^[a-zA-Z\s]*$/).test(profile.first_name) && profile.first_name? "": "Enter Valid Name using [A-Z] and/or [a-z]."
        temp.dob = profile.dob? "": "Required."
        temp.aadhar = (/^[0-9]{12}$/).test(profile.aadhar) ? "": "Enter 12 digits with no space or hyphens(-)."
        temp.height = (/^[0-9]{1,3}$/).test(profile.height)?"": "Height can't be more than 3 digits long"
        temp.weight = (/^[0-9]{2,3}$/).test(profile.weight) ? "": "Required and can be of max 3 digits."
        temp.blood_group = profile.blood_group ? "": "Required."
        temp.gender = profile.gender ? "": "Required."
        temp.marital_status = profile.marital_status ? "": "Required."
        temp.farming_background = profile.farming_background == 0 || profile.farming_background == 1 ? "": "Required."
        temp.disability = profile.disability == 0 || profile.disability == 1 ? "": "Required."

        temp.father_name = (/^[a-zA-Z\s]*$/).test(parent.father_name) && parent.father_name? "": "Enter Valid Name using [A-Z] and/or [a-z]."
        temp.father_phone = (/^[0-9]{10}$/).test(parent.father_phone) ? "": "Phone no. can contain only digits [0-9]."
        temp.mother_name = (/^[a-zA-Z\s]*$/).test(parent.mother_name) && parent.mother_name? "": "Enter Valid Name using [A-Z] and/or [a-z]."
        temp.mother_phone = (/^[0-9]{10}$/).test(parent.mother_phone) ? "": "Phone no. can contain only digits [0-9]."

        temp.course = academics.course ? "": "Required."
        temp.stream = academics.stream ? "": "Required."
        temp.shift = academics.shift ? "": "Required."
        temp.section = academics.section ? "": "Required."
        temp.leet = academics.leet == 0 || academics.leet == 1 ? "": "Required."
        temp.hostler = academics.hostler ==0 || academics.hostler == 1 ? "": "Required."
        temp.training_sem = academics.training_sem ? "": "Required."

        temp.whatsapp_contact = (/^[0-9]{10}$/).test(contact.whatsapp_contact) ? "": "Phone no. can contain only digits [0-9]."
        temp.contact = (/^[0-9]{10}$/).test(contact.contact) ? "": "Phone no. can contain only digits [0-9]."
        temp.re_enter_contact = (/^[0-9]{10}$/).test(contact.re_enter_contact) ? "": "Phone no. can contain only digits [0-9]."

        temp.street = address.address ? "": "Required."
        temp.city = (/^[a-zA-Z\s]*$/).test(address.city) && address.city? "": "Required."
        temp.pincode2 = (/^[0-9]{6}$/).test(address.pincode) ? "": "Required and must be exactly 6 digits."
        temp.state = (/^[a-zA-Z\s]*$/).test(address.state) && address.state? "": "Required."
        temp.district = (/^[a-zA-Z\s]*$/).test(address.district) && address.district? "": "District can contain only letters [A-Z] and/or [a-z]"
        setErrors({
          ...temp
        })
        var filter =  Object.keys(temp);
        var ok = "";
        if(filter.every(x => temp[x].valueOf() === ok.valueOf())){
            setOpen(false);
        }else{
            setOpen(true);
        }
        return filter.every(x => temp[x].valueOf() === ok.valueOf());
      }


    // state for holding inputs from profile form imported as ProfileDetails
    const [profile, setProfile] = React.useState({
        first_name: "",
        last_name: "",
        dob: "",
        height: "",
        weight: "",
        blood_group: "",
        gender: "",
        marital_status: "",
        farming_background: "",
        disability: "",
        aadhar: ""
    });
    // state for holding inputs from parent form imported as ParentsDetails
    const [parent, setParent] = React.useState({
        father_name: "",
        father_phone: "",
        mother_name: "",
        mother_phone: ""
    });

    // state for holding inputs from academics form imported as AcademicDetails
    const [academics, setAcademics] = React.useState({
        univ_roll: "",
        college_roll: "",
        course: "",
        branch: "",
        stream: "",
        section: "",
        shift: "",
        training_sem: "",
        leet: "",
        hostler: ""
    });

    // state for holding inputs from contact form imported as ContactDetails
    const [contact, setContact] = React.useState({
        whatsapp_contact: "",
        contact: "",
        re_enter_contact: ""
    });

    const [address, setAddress] = React.useState({
        address: "",
        pincode: "",
        district: "",
        city: "",
        state: ""
    });

   

    // State setter function of Profile form sent as props to ProfileDetails forms
    const handleProfileChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...profile, first_name: value });
                // setProfile({ ...profile, [e.target.id]: value });

                break;
            case 2:
                setProfile({ ...profile, last_name: value });
                break;
            case 3:
                setProfile({ ...profile, dob: value });
                break;
            case 4:
                setProfile({
                    ...profile,
                    aadhar: value
                });
                break;
            case 5:
                setProfile({
                    ...profile,
                    // height: parseFloat(value) ? parseFloat(value) : ""
                    height: value
                });
                break;
            case 6:
                setProfile({
                    ...profile,
                    // weight: parseFloat(value) ? parseFloat(value) : ""
                    weight: value
                });
                break;
            case 7:
                setProfile({ ...profile, blood_group: value });
                break;
            case 8:
                setProfile({ ...profile, gender: value });
                break;
            case 9:
                // value = parseInt(value)
                setProfile({ ...profile, marital_status: value });
                break;
            case 10:
                // value = parseInt(value)
                setProfile({ ...profile, farming_background: value });
                break;
            case 11:
                // value = parseInt(value)
                setProfile({ ...profile, disability: value });
                break;
            default:
                break;
        }
    };
    const ChangeCase = (dic) => {
        Object.keys(dic).every((key) => {
            dic[key] = capitalCase(dic[key]);
        });
        return dic;
    }
    // State setter function of parent form sent as props to ParentDetails forms
    const handleParentChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            case 1:
                setParent({ ...parent, father_name: value });
                break;
            case 2:
                setParent({
                    ...parent,
                    father_phone: value
                });
                break;
            case 3:
                setParent({ ...parent, mother_name: value});
                break;
            case 4:
                setParent({
                    ...parent,
                    mother_phone: value
                });
                break;
            default:
                break;
        }
    };

    // State setter function of academics form sent as props to AcademicDetails forms
    const handleAcademicsChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            case 3:
                setAcademics({ ...academics, course: value });
                break;
            case 4:
                setAcademics({ ...academics, stream: value });
                break;
            case 5:
                setAcademics({ ...academics, shift: value });
                break;
            case 6:
                setAcademics({ ...academics, section: value });
                break;
            case 7:
                setAcademics({ ...academics, leet: value });
                break;
            case 8:
                setAcademics({ ...academics, hostler: value });
                break;
            case 9:
                setAcademics({ ...academics, training_sem: value });
                break;
            default:
                break;
        }
    };

    // State setter function of contact form sent as props to ContactDetails forms
    const handleContactChangeInput = (e, id) => {
        let value = e.target.value;
        switch (id) {
            case 1:
                // value = contact.whatsapp_contact.toString().length+1 <= 10 ? value : contact.whatsapp_contact.toString()
                setContact({
                    ...contact,
                    whatsapp_contact: value
                });
                break;
            case 2:
                setContact({
                    ...contact,
                    contact: value
                });
                break;
            case 3:
                setContact({
                    ...contact,
                    re_enter_contact: value
                });
                break;
            default:
                break;
        }
    };

    // function for setting  address object
    const handleAddresssChangeInput = (e, id) => {
        const value = e.target.value;
        switch (id) {
            case 1:
                setAddress({ ...address, address: value });
                break;
            case 2:
                setAddress({ ...address, city: value });
                break;
            case 3:
                setAddress({ ...address, district: value});
                break;
            case 4:
                setAddress({
                    ...address,
                    pincode: value
                });
                break;
            case 5:
                setAddress({ ...address, state:value});
                break;
            default:
                break;
        }
    };

    // function for making objects ready by converting values into camelCase;
    const makeOjectsReady = () => {};
    const handleFormSubmit = event => {
        event.preventDefault();
        if(validate()){
            setLoader(true);
            if(academics.course === "M.Tech"){
                setAction(false);
            }
            else{
                setAction(true);
            }
            const token = localStorage.getItem("token");
            axios.post(`/api/personaldetails`, {
                    profile: ChangeCase(profile),
                    academics: academics,
                    parent: ChangeCase(parent),
                    contact: contact,
                    address: ChangeCase(address)
                }, {
                    headers: { 'Authorization': 'Bearer ' + token }})
                .then((response) => {
                    setLoader(false);
                    if(response.data.msg === "stepcomplete"){
                        props.Complete();
                        props.Next();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
                }
    };

    const fetchDetails = async () => {
        var token= localStorage.getItem("token")
        const res = await axios.get(`/api/personalDetails`,{
            headers: { 'Authorization': 'Bearer ' + token }});
            setProfile({
                first_name: res.data.details['first_name'],
                last_name: res.data.details['last_name'],
                dob: res.data.details['dob'],
                height: res.data.details['height'],
                weight: res.data.details['weight'],
                blood_group: res.data.details['blood_group'],
                gender: res.data.details['gender'],
                marital_status: res.data.details['marital_status'],
                farming_background: res.data.details['farming_background'],
                disability: res.data.details['disability'],
                aadhar: res.data.details['aadhar']
            })
            setParent({
                father_name: res.data.details['father_name'],
                father_phone: res.data.details['father_mobile'],
                mother_name: res.data.details['mother_name'],
                mother_phone: res.data.details['mother_mobile']
            })
            setAcademics({
                univ_roll: res.data.details['urn'],
                college_roll: res.data.details['crn'],
                course: res.data.details['category'],
                stream: res.data.details['stream'],
                section: res.data.details['branch_type'],
                shift: res.data.details['shift'],
                training_sem: res.data.details['training_sem'],
                leet: res.data.details['leet'],
                hostler: res.data.details['hostler']
            })
            setContact({
                whatsapp_contact: res.data.details['whatsapp'],
                contact: res.data.details['mobile'],
                re_enter_contact: res.data.details['mobile']
            })
            setAddress({
                address: res.data.details['address'],
                pincode: res.data.details['pincode'],
                district: res.data.details['district'],
                city: res.data.details['city'],
                state: res.data.details['state']
            })

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
                        Checking the Step 2 - Personal Details Status
                    </p>
                </b>
                </div>
              </Card>
            ):(
            <form onSubmit={event => handleFormSubmit(event)}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ProfileDetails
                                Profile={profile}
                                handleInputChange={handleProfileChangeInput}
                                Errors= {errors}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ParentDetails
                                parent={parent}
                                handleInputChange={handleParentChangeInput}  
                                Errors= {errors}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <AcademicDetails
                                academics={academics}
                                handleInputChange={handleAcademicsChangeInput}
                                Errors= {errors}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ContactDetails
                                contact={contact}

                                handleInputChange={handleContactChangeInput}
                                Errors= {errors}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <AddressDetails
                                address={address}
                                handleInputChange={handleAddresssChangeInput}
                                Errors= {errors}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.toast}>
                    <Alert onClose={handleClose} severity="error">
                    Please rectify the errors, before submitting
                    </Alert>
                </Snackbar>
                <div className={classes.btnBox}>
                {loader ? (
                            
                            <CircularProgress />
                        ):(
                <button type="submit" className={classes.button}>
                    Submit & Next
                </button>
                        )}
                </div>
            </form>
            )}
        </div>
    );
}
