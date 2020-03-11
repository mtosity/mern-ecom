import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { AdminButton } from "./AdminButton";

export const AddImages = (props: any) => {
  const [pictures, setPictures] = useState<Array<File>>([]);

  const onDrop = (picture: Array<File>) => {
    console.log(picture);
    setPictures([...pictures, ...picture]);
  };
  
  const getURL = () => {
    
  }

  return (
    <div>
      <ImageUploader
        {...props}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png"]}
        maxFileSize={5242880}
        fileContainerStyle={{
          backgroundColor: "#2B3C46",
          color: "#DDF3FE",
          minHeight: "550px"
        }}
        singleImage
        withPreview
        buttonStyles={{ backgroundColor: "#ad13ce", color: "white" }}
        buttonClassName="hover:bg-purple-200"
        label="Max upload file size: 5mb, accepted: JPG | GIF | PNG"
      />
      <AdminButton title="Get URL" onClick={() => {}}/>
    </div>
  );
};
