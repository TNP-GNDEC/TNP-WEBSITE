import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Notification from "../../Auth/Notisfication";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        width: "100%",
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

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};

const activeStyle = {
    borderColor: "#2196f3"
};

const acceptStyle = {
    borderColor: "#00e676"
};

const rejectStyle = {
    borderColor: "#000"
};

const Uploadcsv = () => {
    const classes = useStyles();
    const [loader, setLoader] = React.useState(false);
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: "",
        type: ""
    });
    const [file, setFile] = React.useState("");
    const {
        acceptedFiles,
        isDragActive,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: ".csv",
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : { borderColor: "#2196f3" }),
            ...(acceptedFiles ? acceptStyle : {}),
            ...(fileRejections ? rejectStyle : {})
        }),
        [isDragActive, fileRejections, acceptedFiles]
    );

    const acceptedFileItems = acceptedFiles.map(file => {
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>;
        setFile(file);
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>;
        file = " ";
    });

    const hiddenFileInput = React.useRef(null);

    // const handleClick = event => {
    //   hiddenFileInput.current.click();
    // };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // handleFile(fileUploaded);
    };

    const handleClick = () => {
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
                {/* <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    className={classes.fileupload}
                    id="file"
                    required
                /> */}
                <section>
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        <p>
                            Drag 'n' drop some files here, or click to select
                            files
                        </p>
                    </div>
                    <aside>
                        <h4>Accepted files</h4>
                        <ul>{acceptedFileItems}</ul>
                        <h4>Rejected files</h4>
                        <ul>{fileRejectionItems}</ul>
                    </aside>
                </section>

                {loader ? (
                    <CircularProgress />
                ) : (
                    <button
                        type="submit"
                        onClick={handleClick}
                        className={classes.button}
                    >
                        Upload
                    </button>
                )}
            </div>
        </>
    );
};
export default Uploadcsv;
