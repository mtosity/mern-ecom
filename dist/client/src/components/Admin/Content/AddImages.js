"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_images_upload_1 = __importDefault(require("react-images-upload"));
const AdminButton_1 = require("./AdminButton");
exports.AddImages = (props) => {
    const [picture, setPicture] = react_1.useState();
    const [url, setUrl] = react_1.useState("");
    const onDrop = (picture) => {
        setPicture(picture[0]);
    };
    const getURL = async () => {
        if (picture) {
            setUrl("uploading...");
            var myHeaders = new Headers();
            // myHeaders.append("Authorization", "Client-ID a8fbbe85d3e9bbe");
            myHeaders.append("Authorization", "Bearer 72f4f8c97dbc1d7eb0d89a93b554358a35d1d589");
            var formdata = new FormData();
            formdata.append("image", picture);
            formdata.append("name", "Ryo");
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            setUrl("creating url...");
            fetch("https://api.imgur.com/3/image", requestOptions)
                .then(response => response.json())
                .then(result => setUrl(result.data.link))
                .catch(error => console.log(error.text));
        }
    };
    return (<div>
      <react_images_upload_1.default {...props} withIcon={true} onChange={onDrop} imgExtension={[".jpg", ".gif", ".png"]} maxFileSize={5242880} fileContainerStyle={{
        backgroundColor: "#2B3C46",
        color: "#DDF3FE",
        minHeight: "550px"
    }} singleImage withPreview buttonStyles={{ backgroundColor: "#ad13ce", color: "white" }} buttonClassName="hover:bg-purple-200" label="Max upload file size: 5mb, accepted: JPG | GIF | PNG"/>
      <div className="flex">
        <AdminButton_1.AdminButton title="Get URL" onClick={getURL}/>
      <p className="text-admin-title ml-4">{url}</p>
      </div>
    </div>);
};
