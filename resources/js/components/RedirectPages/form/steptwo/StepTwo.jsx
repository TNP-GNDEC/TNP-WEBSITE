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
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  camelCase,
  capitalCase,
} from "change-case";
import { faOdnoklassnikiSquare } from "@fortawesome/free-brands-svg-icons";
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

    const validate = () => {
        let temp = {}
        temp.first_name = (/^[a-zA-Z\s]*$/).test(profile.first_name) ? "": "Enter Valid Name (only char)."
        temp.dob = profile.dob? "": "Enter DOB in correct format(yyyy-mm-dd)."
        temp.aadhar = (/^[0-9]{12}$/).test(profile.aadhar) ? "": "Enter 12 digits with no space."
        temp.height = (/^[0-9\s]+$/).test(profile.height) ? "": "This field is required."
        temp.weight = (/^[0-9]{2,3}$/).test(profile.weight) ? "": "This field is required and can be of max 3 digits."
        temp.blood_group = profile.blood_group ? "": "This field is required."
        temp.gender = profile.gender ? "": "This field is required."
        temp.marital_status = profile.marital_status ? "": "This field is required."
        temp.farming_background = profile.farming_background == 0 || profile.farming_background == 1 ? "": "This field is required."
        temp.disability = profile.disability == 0 || profile.disability == 1 ? "": "This field is required."

        temp.father_name = (/^[a-zA-Z\s]*$/).test(parent.father_name) ? "": "Enter Valid Name (only char)."
        temp.father_phone = (/^[0-9]{10}$/).test(parent.father_phone) ? "": "Enter valid Phone No."
        temp.mother_name = (/^[a-zA-Z\s]*$/).test(parent.mother_name) ? "": "Enter Valid Name (only char)."
        temp.mother_phone = (/^[0-9]{10}$/).test(parent.mother_phone) ? "": "Enter valid Phone No."

        temp.course = academics.course ? "": "This field is required."
        temp.stream = academics.stream ? "": "This field is required."
        temp.shift = academics.shift ? "": "This field is required."
        temp.section = academics.section ? "": "This field is required."
        temp.leet = academics.leet == 0 || academics.leet == 1 ? "": "This field is required."
        temp.hostler = academics.hostler ==0 || academics.hostler == 1 ? "": "This field is required."
        temp.training_sem = academics.training_sem ? "": "This field is required."

        temp.whatsapp_contact = (/^[0-9]{10}$/).test(contact.whatsapp_contact) ? "": "Enter valid Phone No."
        temp.contact = (/^[0-9]{10}$/).test(contact.contact) ? "": "Enter valid Phone No."
        temp.re_enter_contact = (/^[0-9]{10}$/).test(contact.re_enter_contact) ? "": "Enter valid Phone No."

        temp.street = address.address ? "": "This field is required."
        temp.city = (/^[a-zA-Z\s]*$/).test(address.city) ? "": "This field is required."
        temp.pincode2 = (/^[0-9]{6}$/).test(address.pincode) ? "": "This field is required and must be of 6 digits."
        temp.state = (/^[a-zA-Z\s]*$/).test(address.state) ? "": "This field is required."
        temp.district = (/^[a-zA-Z\s]*$/).test(address.district) ? "": "This valid name (only char)."
        setErrors({
          ...temp
        })
        var filter =  Object.keys(temp);
        var ok = "";
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

    function setCamelCase(){
        setProfile({
            first_name : camelCase(profile.first_name),
            last_name : camelCase(profile.last_name),
            dob: profile.dob,
            height: profile.height,
            weight: profile.weight,
            blood_group: profile.blood_group,
            gender: profile.gender,
            marital_status: profile.marital_status,
            farming_background: profile.farming_background,
            disability: profile.disability,
            aadhar: profile.aadhar
        });
        setParent({
            father_name: camelCase(parent.father_name),
            mother_name: camelCase(parent.mother_name),
            father_phone: parent.father_phone,
            mother_phone: parent.mother_phone
        });
        setAddress({ 
            address: camelCase(address.address),
            city: camelCase(address.city),
            district: camelCase(address.district),
            state: camelCase(address.state),
            pincode: address.pincode
        });
    }

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
        // setCamelCase();
        if(validate()){
            setLoader(true);
            const token = localStorage.getItem("token");

            axios
                .post(`/api/personaldetails/`, {
                    profile: profile,
                    academics: academics,
                    parent: parent,
                    contact: contact,
                    address: address
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
        const token= localStorage.getItem("token")
        const res = await axios.get(`/api/personalDetails/`,{
            headers: { 'Authorization': 'Bearer ' + token }});
            console.log(res.data.details)
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
