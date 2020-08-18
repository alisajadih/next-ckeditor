import { Component } from "react";
import dynamic from "next/dynamic";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";

export const CKEditorWrapper = (props) => {
  return (
    <div>
      <CKEditor editor={ClassicEditor} {...props} />
    </div>
  );
};

export default CKEditorWrapper;
