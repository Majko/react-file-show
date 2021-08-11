import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useEffect, useState } from "react";

function PdfDocument({ fileUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(()=>{
        setPageNumber(1)
    },[fileUrl])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const nextPage = (e) => {
        e.preventDefault()
        setPageNumber((prev) => { return ((prev < numPages) ? (prev + 1) : prev) })
    }

    const previousPage = (e) => {
        e.preventDefault()
        setPageNumber((prev) => { return ((prev > 0) ? (prev - 1) : prev) })
    }

    return (
        <div className="image">
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {(pageNumber < numPages) && <button onClick={nextPage} >Next page</button>}
            {(pageNumber > 1) && <button onClick={previousPage} >Previous page</button>}
        </div>
    );
}

export default PdfDocument