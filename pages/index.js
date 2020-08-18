import Head from "next/head";
import dynamic from "next/dynamic";

const CKEditor = dynamic(() => import("../components/CKEditor"), {
  ssr: false,
});
const Base64UploadAdapter = dynamic(
  () => import("@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        {/* <CKEditor data="<p>HI There</p>" /> */}
        <CKEditor
          // editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </div>
  );
}

// import CKEditor from "@ckeditor/ckeditor5-react";
// const CKEditor = dynamic(
//   () => import("@ckeditor/ckeditor5-react").then((res) => res),
//   {
//     ssr: false,
//     loading: () => <p>...</p>,
//   }
// );
// // import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// const ClassicEditor = dynamic(
//   () => import("@ckeditor/ckeditor5-build-classic"),
//   {
//     ssr: false,
//     loading: () => <p>...</p>,
//   }
// );
