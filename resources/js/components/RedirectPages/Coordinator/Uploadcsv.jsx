import React, { useMemo, useRef } from "react";
import Button from "@material-ui/core/Button";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Notification from "../../Auth/Notisfication";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import toast, { Toaster } from "react-hot-toast";

import fileupload from '../../../../images/file_upload.png';

const useStyles = makeStyles(theme => ({
    button: {
        // margin: "20px auto",
        width: "100%",
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
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "100%",
    padding: "25px",
    fontSize: "16px",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: "20px",
    borderColor: "#cccccc",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};

const activeStyle = {
    borderColor: "#2196f3",
    borderStyle: "solid"
};

const acceptStyle = {
    borderColor: "#00e676"
};

const rejectStyle = {
    borderColor: "#ff1744"
};

const Uploadcsv = () => {
    const classes = useStyles();
    const [loader, setLoader] = React.useState(false);
    const mainFileRef = useRef("");

    const {
        acceptedFiles,
        isDragActive,
        fileRejections,
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: ".csv",
        maxFiles: 1,
        onDrop: acceptedFiles => {
            mainFileRef.current = acceptedFiles;
            acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            );
        }
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
        }),
        [isDragActive, isDragAccept]
    );

    const acceptedFileItems = acceptedFiles.map(file => {
        return <li key={file.name}>{file.name}</li>;
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (
            <li key={file.name}>
                {file.name}
                <ul>
                    {errors.map(e => (
                        <li key={e.code}>{e.message}</li>
                    ))}
                </ul>
            </li>
        );
    });

    const handleClick = () => {
        const dataFile = mainFileRef.current[0];
        setLoader(true);
        Papa.parse(dataFile, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: function(results) {
                let data = results;
                axios
                    .post("/api/registerstudent", {
                        data: data
                    })
                    .then(res => {
                        setLoader(false);
                        if (res.data.success === 0) {
                            toast.error(res.data.message);
                        } else {
                            toast.success(res.data.message);
                        }
                    })
                    .catch(error => {
                        setLoader(false);
                        toast.error("An unexpected error occured");
                        console.log(error);
                    });
            }
        });
    };
    return (
        <>
            <Toaster />
            {/* <h2 className={classes.title}>Upload data through CSV</h2> */}
            <section className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <img style={{width: 100, aspectRatio: 1, marginBottom: 10}} src={fileupload} alt="file upload" />
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                    <em>(Only .csv files will be accepted)</em>
                </div>
                <aside style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between', padding: 20}}>
                    <h4 style={{ color: "#2196f3", fontSize: 30}}>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                    <h4 style={{ color: "#2196f3", fontSize: 30}}>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul>
                </aside>
                <button
                    type="submit"
                    style={{ fontSize: 24 }}
                    onClick={handleClick}
                    className={classes.button}
                >
                    Upload File
                </button>
            </section>
        </>
    );
};
export default Uploadcsv;
