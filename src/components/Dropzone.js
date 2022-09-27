import React from "react";
import 'react-dropzone-uploader/dist/styles.css'
import DropzoneArea from 'react-dropzone-uploader'

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
      <div>
        {previews}
  
        <div {...dropzoneProps}>
          {files.length < maxFiles && input}
        </div>
  
        {files.length > 0 && submitButton}
      </div>
    )
  }

export const Dropzone = () => {
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
      }
    return (
        <DropzoneArea
        // getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
        LayoutComponent={Layout}
      inputContent="Drop Files (Custom Preview)"
      />
    )
}

export default Dropzone;