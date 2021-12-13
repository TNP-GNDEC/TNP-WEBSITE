import React from "react";
import Button from "@material-ui/core/Button";
import Papa from "papaparse";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Notification from "../../Auth/Notisfication";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";

const useStyles = makeStyles(theme => ({
    button: {
        margin: "20px 6%",
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main
        }
    },
    container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        paddingTop: "15px",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 15px 25px #0000001a"
    },
    title: {
        color: theme.palette.primary.dark,
        marginLeft: "5.5%"
    },
    alert: {
        marginTop: "10px",
        margin: "auto",
        width: "90%"
    },
    fileupload: {
        width: "90%",
        marginLeft: "60px",
        padding: "10px 0 20px"
    }
}));

const Uploadcsv = () => {
    const classes = useStyles();
    const [loader, setLoader] = React.useState(false);
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: "",
        type: ""
    });

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: ".csv",
        maxFiles: 1
    });

    const acceptedFileItems = acceptedFiles.map(file => {
        var data;
        setLoader(true);
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: function(results) {
                data = results;
                axios
                    .post("/api/registerstudent", {
                        data: data
                    })
                    .then(response => {
                        setLoader(false);
                        if (response.data.success === 0) {
                            setNotify({
                                isOpen: true,
                                message: response.data.message,
                                type: "error"
                            });
                        } else {
                            setNotify({
                                isOpen: true,
                                message: response.data.message,
                                type: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    const hiddenFileInput = React.useRef(null);

    // const handleClick = event => {
    //   hiddenFileInput.current.click();
    // };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // handleFile(fileUploaded);
    };

    const handleClick = file => {
        // const file = document.getElementById("file").files[0];
        var data;
        setLoader(true);
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: function(results) {
                data = results;
                axios
                    .post("/api/registerstudent", {
                        data: data
                    })
                    .then(response => {
                        setLoader(false);
                        if (response.data.success === 0) {
                            setNotify({
                                isOpen: true,
                                message: response.data.message,
                                type: "error"
                            });
                        } else {
                            setNotify({
                                isOpen: true,
                                message: response.data.message,
                                type: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };
    return (
        <>
            <h2 className={classes.title}>Upload data through CSV</h2>
            <div className={classes.container}>
                <div className={classes.alert}>
                    <Notification
                        notify={notify}
                        setNotify={setNotify}
                        className={classes.alert}
                    />
                </div>
                <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>
                            Drag 'n' drop some files here, or click to select
                            files
                        </p>
                        <em>
                            (1 files are the maximum number of files you can
                            drop here)
                        </em>
                    </div>
                    <aside>
                        <h4>Accepted files</h4>
                        <ul>{acceptedFileItems}</ul>
                        <h4>Rejected files</h4>
                        <ul>{fileRejectionItems}</ul>
                    </aside>
                </section>

                {/* {loader ? (
                    <CircularProgress />
                ) : (
                    <button
                        type="submit"
                        onClick={handleClick}
                        className={classes.button}
                    >
                        Upload
                    </button>
                )} */}
            </div>
        </>
    );
};
export default Uploadcsv;
