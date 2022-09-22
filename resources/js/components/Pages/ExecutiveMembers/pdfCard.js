import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
    btn_handler: {
        marginTop: "12px"
    },
    page_num_info: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "16px"
    },
    btn_group_handler: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        border: "none",
        boxShadow: "none"
    }
}));

export default function PdfCard(props) {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    function previousPage() {
        if (pageNumber > 1) {
            changePage(-1);
        }
    }
    function nextPage() {
        if (pageNumber < numPages) {
            changePage(1);
        }
    }

    return (
        <>
            <Document file={props.source} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false}></Page>
            </Document>
            <div className={classes.btn_handler}>
                <div className={classes.page_num_info}>
                    Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                    {numPages || "--"}
                </div>
                <div>
                    <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label=" small contained primary button group"
                        size="small"
                        className={classes.btn_group_handler}
                    >
                        <Button onClick={previousPage}>Previous</Button>
                        <Button onClick={nextPage}>Next</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}
