import { useState } from "react";
import Preview from "./Preview";

function DragDropFile() {
  const [files, setFiles] = useState([]);
  const [drag, setDrag] = useState(false);

  function handleChange(e) {
    let selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  }

  function removePreview(id) {
    setFiles((prevState) => {
      return prevState.filter((curValue, index) => index !== id);
    });
  }

  function handleDragEnter(e) {
    e.preventDefault();
    setDrag(true);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    setDrag(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    console.log(e);
    let dropFile = e.dataTransfer.files;
    setFiles([...files, ...dropFile]);
  }

  return (
    <div className="container">
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        className={`uploadBox ${drag ? "dragging" : ""}`}
      >
        <p>Drag & Drop files here...</p>
        <input
          type="file"
          multiple
          className="inputFiles"
          onChange={handleChange}
          id="input-file"
        />
        <label htmlFor="input-file">Browse Files</label>
      </div>

      {files.length > 0 ? (
        <Preview removePreview={removePreview} fileDetails={files} />
      ) : (
        ""
      )}
    </div>
  );
}

export default DragDropFile;
