import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProfileDetails from "./ProfileDetails";
import ParentDetails from "./ParentsDetails";
import AcademicDetails from "./AcademicDetails";
import ContactDetails from "./ContactDetails";
import Button from "@material-ui/core/Button";
import { concat } from "lodash";
import AddressDetails from "./AddressDetails";
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

export default function StepTwo() {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
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

    const [eror, setEror] = React.useState(0);

    const handleEror = (r, section) => {
        if (section == "contact") {
            setEror(r);
            return r ? true : false;
        }
        if(section=="parent"){
            setEror(r);
            return r? true :false
        }
    };
    // Utility Function
    // const toCamelCase = str => {
    //     if (typeof str == "string") {
    //         var splittedStr = [];
    //         var strInCamelCase = "";
    //         splittedStr = str.split(8000" ");

    //         for (var i = 0; i < splittedStr.length; i++) {
    //             var word = splittedStr[i];
    //             if (word.length > 0) {
    //                 strInCamelCase = strInCamelCase.concat(
    //                     word[0].toUpperCase() + word.substr(1, word.length)
    //                 );
    //             }
    //         }
    //         return strInCamelCase;
    //     } else {
    //         return str;
    //     }
    // };

    function camelize() {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    // State setter function of Profile form sent as props to ProfileDetails forms
    const handleProfileChangeInput = (e, id) => {
        console.log("I am called");
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
                    aadhar: parseInt(value) ? parseInt(value) : ""
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

    // State setter function of parent form sent as props to ParentDetails forms
    const handleParentChangeInput = (e, id) => {
        console.log("I am called for parent");
        const value = e.target.value;
        switch (id) {
            case 1:
                setParent({ ...parent, father_name: value });
                console.log(parent.father_name);
                break;
            case 2:
                setParent({
                    ...parent,
                    father_phone: parseInt(value) ? parseInt(value) : ""
                });
                break;
            case 3:
                setParent({ ...parent, mother_name: value });
                break;
            case 4:
                setParent({
                    ...parent,
                    mother_phone: parseInt(value) ? parseInt(value) : ""
                });
                break;
            default:
                break;
        }
    };

    // State setter function of academics form sent as props to AcademicDetails forms
    const handleAcademicsChangeInput = (e, id) => {
        console.log("I am called for academics");
        const value = e.target.value;
        switch (id) {
            // case 1:
            //     setAcademics({ ...academics, univ_roll: value });
            //     break;
            // case 2:
            //     setAcademics({ ...academics, college_roll: value });
            //     break;
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
        console.log("I am called for contact : ", e.target);
        let value = e.target.value;
        switch (id) {
            case 1:
                // value = contact.whatsapp_contact.toString().length+1 <= 10 ? value : contact.whatsapp_contact.toString()
                setContact({
                    ...contact,
                    whatsapp_contact: parseInt(value) ? parseInt(value) : ""
                });
                console.log(contact.whatsapp_contact.toString().length);
                break;
            case 2:
                setContact({
                    ...contact,
                    contact: parseInt(value) ? parseInt(value) : ""
                });
                break;
            case 3:
                setContact({
                    ...contact,
                    re_enter_contact: parseInt(value) ? parseInt(value) : ""
                });
                break;
            default:
                break;
        }
    };

    // function for setting  address object
    const handleAddresssChangeInput = (e, id) => {
        console.log("I am called for contact");
        const value = e.target.value;
        switch (id) {
            case 1:
                setAddress({ ...address, address: value });
                break;
            case 2:
                setAddress({ ...address, city: value });
                break;
            case 3:
                setAddress({ ...address, district: value });
                break;
            case 4:
                setAddress({
                    ...address,
                    pincode: parseInt(value) ? parseInt(value) : ""
                });
                break;
            case 5:
                setAddress({ ...address, state: value });
                break;
            default:
                break;
        }
    };

    // function for making objects ready by converting values into camelCase;
    const makeOjectsReady = () => {};

    const handleFormSubmit = event => {
        event.preventDefault();
        const id = localStorage.getItem("userid");
        if (eror) {
            axios
                .post(`/api/personaldetails/${id}`, {
                    profile: profile,
                    academics: academics,
                    parent: parent,
                    contact: contact,
                    address: address
                })
                .then(response => {
                    if(response.data.form_status === "form_step_change"){
                        props.Complete();
                        props.Next();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            window.alert("Please Remove Erors Before Submitting");
        }
    };

    const fetchDetails = async () => {
        var id= localStorage.getItem("userid")
        const res = await axios.get(`personalDetails/${id}`);
        setLoading(false);
        if (res.data.details.first_name !==  null){
            setProfile({
                first_name: res.data.details.first_name,
                last_name: res.data.details.last_name,
                dob: res.data.details.dob,
                height: res.data.details.height,
                weight: res.data.details.weight,
                blood_group: res.data.details.blood_group,
                gender: res.data.details.gender,
                marital_status: res.data.details.marital_status,
                farming_background: res.data.details.farming_background,
                disability: res.data.details.disability,
                aadhar: res.data.details.aadhar
            })
        }

        setLoading(false);
    }
    useEffect(()=>{
        // fetchDetails();
        setLoading(false);
    },[])

    const validate = () => {
        if (contact.contact != contact.re_enter_contact) {
            setEror({ ...eror, contact: "Numbers Not Matched" });
            return false;
        }
    };
    return (
        <div className={classes.root}>
            {loading ? (
                <Card className={classes.box}>
                <div className={classes.heading}>
                <b>
                    <h1>Please Wait...</h1>
                </b>
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
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ParentDetails
                                parent={parent}
                                handleInputChange={handleParentChangeInput}
                                handleEror={handleEror}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <AcademicDetails
                                academics={academics}
                                handleInputChange={handleAcademicsChangeInput}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ContactDetails
                                contact={contact}
                                eror={eror}
                                handleInputChange={handleContactChangeInput}
                                handleEror={handleEror}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <AddressDetails
                                address={address}
                                handleInputChange={handleAddresssChangeInput}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <div className={classes.btnBox}>
                <button type="submit" className={classes.button}>
                    Submit & Next
                </button>
                </div>
            </form>
            )}
        </div>
    );
}
