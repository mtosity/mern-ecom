"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.MiddleBanner = () => {
    return (<div className="w-full flex flex-col justify-center items-center text-white" style={{
        backgroundImage: "url('https://preview.uideck.com/items/shopr-theme/assets/img/bg/dsc-bg.jpg')",
        backgroundPosition: "center",
        height: "450px"
    }}>
      <p className="font-semibold text-lg">BEST DEALS OF THE WEEK</p>
      <p className="text-5xl jo-font font-bold">Up to 60% Discount on Winter Collection!</p>

      <input type="button" value="VIEW DETAILS" className=" mt-2 animated bounceInUp rounded delay-2s mt-8 outline-none bg-red-700
           hover:bg-red-600 cursor-pointer" style={{
        width: "200px",
        height: "44px",
        color: "#f4f4f4"
    }}/>
    </div>);
};
