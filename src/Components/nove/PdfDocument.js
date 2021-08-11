import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";

function PdfDocument({ fileUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const nextPage = (e) => {
        e.preventDefault()
        setPageNumber((prev) => { return (prev + 1) })
    }
    return (
        <div className="image">
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <button onChange={nextPage} >Next page</button>
        </div>
    );
}

export default PdfDocument