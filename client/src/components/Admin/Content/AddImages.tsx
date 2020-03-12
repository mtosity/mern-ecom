import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { AdminButton } from "./AdminButton";
import Swal from "sweetalert2"

export const AddImages = (props: any) => {
  const [picture, setPicture] = useState<File>();
  const [url, setUrl] = useState("");

  const onDrop = (picture: Array<File>) => {
    setPicture(picture[0]);
  };

  const getURL = async () => {
    if (picture) {
      setUrl("uploading...")
      var myHeaders = new Headers();
      // myHeaders.append("Authorization", "Client-ID a8fbbe85d3e9bbe");
      myHeaders.append(
        "Authorization",
        "Bearer 72f4f8c97dbc1d7eb0d89a93b554358a35d1d589"
      );

      var formdata = new FormData();
      formdata.append("image", picture);
      formdata.append("name", "Ryo");

      var requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

      setUrl("creating url...")
      fetch("https://api.imgur.com/3/image", requestOptions)
        .then(response => response.json())
        .then(result => setUrl(result.data.link))
        .catch(error => console.log(error.text));
    }
  };

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
      <div className="flex">
        <AdminButton title="Get URL" onClick={getURL} />
      <p className="text-admin-title ml-4">{url}</p>
      </div>
    </div>
  );
};
