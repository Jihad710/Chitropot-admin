import React from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Dropzone from "react-dropzone";

const Addblog = () => {
  return (
    <div>
    <h3 className="mb-4 title">
       Blog
    </h3>

    <div className="">
      <form action="" onSubmit={""}>
        <div className="mt-4">
          <CustomInput
            type="text"
            label="Enter Blog Title"
            name="title"
         
          />
        </div>
        <div className="error">

        </div>
        <select
          name="category"
        
          className="form-control py-3  mt-3"
          id=""
        >
          <option value="">Select Blog Category</option>
          
            return (
              <option key={""} value={""}>
                {}
              </option>
            );
     
        </select>
        <div className="error">
     
        </div>
        <ReactQuill
          theme="snow"
          className="mt-3"
          name="description"
        
        />
        <div className="error">
          
        </div>
        <div className="bg-white border-1 p-5 text-center mt-3">
          <Dropzone
            onDrop={(acceptedFiles) => ((acceptedFiles))}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    Drag 'n' drop some files here, or click to select files
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="showimages d-flex flex-wrap mt-3 gap-3">
          
            return (
              <div className=" position-relative" key={""}>
                <button
                  type="button"
                
                  className="btn-close position-absolute"
                  style={{ top: "10px", right: "10px" }}
                ></button>
                <img src={""} alt="" width={200} height={200} />
              </div>
            );
      
        </div>

        <button
          className="btn btn-success border-0 rounded-3 my-5"
          type="submit"
        >
         Blog
        </button>
      </form>
    </div>
  </div>
  );
};

export default Addblog;
