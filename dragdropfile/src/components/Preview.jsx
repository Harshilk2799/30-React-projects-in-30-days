function Preview({ fileDetails, removePreview }) {
  return (
    <div>
      {fileDetails.map((curValue, index) => {
        let imgURL = URL.createObjectURL(curValue);
        console.log("Img: ", imgURL);
        return (
          <div className="preview" key={curValue.index}>
            <div className="info">
              <img src={imgURL} alt={curValue.name} />
              <div>
                <span>{curValue.name}</span> <br />
                <span>{curValue.size}</span>
              </div>
            </div>
            <button onClick={() => removePreview(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default Preview;
