import ImgDocument from './ImgDocument'
import PdfDocument from './PdfDocument'

/**
 * @description Component renders content of both pdf and image files (png, jpeg, ...)
 * @param {String} param0 fileName - name/key of the file to be presented. 
 * @param {String} param0 fileUrl - url of the image file to be presented. In case of local file
 * the valus submitted should be created by URL.createObjectURL(file)
 * @returns none
 */
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