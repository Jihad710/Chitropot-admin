import {React, useState} from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";



const Addproduct = () => {
    const [desc, setDesc ] = useState()
    const handleDesc = (e) =>{
        setDesc(e);
    };
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form action="">
            <CustomInput type="text" Label="Enter Product Title"/>
            <ReactQuill
            theme="snow"
           value={desc}
           
            
            />
            <button className="btn btn-success border-0 rounded-3 my-5 " type="submit">Add product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
