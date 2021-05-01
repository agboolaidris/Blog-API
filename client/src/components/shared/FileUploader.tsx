import React from "react";

function FileUploader({ multiple, onChange }) {
  return (
    <div className="mt-3">
      <input type="file" multiple={multiple} onChange={onChange} />
    </div>
  );
}

export default FileUploader;
