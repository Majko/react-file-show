
function ImgDocument({fileUrl}) {

    return (
        <div className="image">
          <img
            src={fileUrl}
            alt="inb"
            width="700"
            height="900"
          />
        </div>
      );
}

export default ImgDocument