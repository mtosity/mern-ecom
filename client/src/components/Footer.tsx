import React, { useState } from "react";
import { FooterTitle } from "./Footer/FooterTitle";
import { FooterInfo } from "./Footer/FooterInfo";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FooterCopyRight } from "./Footer/FooterCopyRight";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = async () => {
    setLoading(true);
    const res = await fetch(`/api/user/mail?email=${email}`);
    if (res.status === 200) {
      Swal.fire("Sent! Welcome to MTOShop ^^");
    } else {
      Swal.fire("Error sending! It's not you fault ^^");
    }
    setLoading(false);
  };
  return (
    <div>
      <div
        className="w-full flex p-16 sm:px-2"
        style={{ backgroundColor: "#171717", color: "#999999" }}
      >
        <div className="flex-1">
          <FooterTitle title="CONTACT US" />
          <FooterInfo
            icon={faHome}
            title="9923 South Avenue Street, New York City."
          />
          <FooterInfo icon={faPhone} title="+880- 123-456-789" />
          <FooterInfo icon={faEnvelope} title="tam310599@gmail.com" />
        </div>
        <div className="flex-1">
          <FooterTitle title="NEWSLETTER" />
          <p className="mt-4">
            Quisque a nunc interdum tellus placerat cursus. Quisque facilisis
            dapibus facilisis! Vivamus dictum lectus ut porta volutpat.
          </p>
          <input
            type="text"
            className="outline-none text-black mt-4 p-4 rounded w-1/2 sm:w-full"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div className="flex">
            <button
              className="py-2 px-4 text-white bg-red-600 mt-4 rounded active:bg-red-800 outline-none focus:outline-none"
              onClick={() => sendEmail()}
            >
              SUBSCRIBE
            </button>
            {loading ? (
              <div className="ml-4 mt-2">
                <DotLoader color="red" />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <FooterCopyRight />
    </div>
  );
};
