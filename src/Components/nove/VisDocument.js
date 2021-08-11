import ImgDocument from './ImgDocument'
import PdfDocument from './PdfDocument'

function VisDocument({ fileName, fileUrl }) {

    // check the type of document
    const docType = (filename) => {
        const lastDot = filename.lastIndexOf(".");
        const ext = filename.substring(lastDot + 1);
        return ext;
    };

    return (
        (docType(fileName) === 'pdf') ? <PdfDocument fileUrl={fileUrl} /> : <ImgDocument fileUrl={fileUrl} />
    )
}

export default VisDocument