import React, { useState } from "react";
import { ReviewStar } from "./ReviewForm/ReviewStar";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../../../Reducers/CombinedReducers";
import { stringify } from "querystring";
import swa2 from "sweetalert2";

interface props {
  productID: string;
}

export const ReviewForm = ({ productID }: props) => {
  const [stars, setStars] = useState("0");
  const [name, setName] = useState("");
  const [cmt, setCmt] = useState("");
  const userID = useSelector<ApplicationState, string>(
    state => state.AccountReducer.id
  );
  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      productID,
      userID,
      cmt,
      userName: name,
      stars: parseFloat(stars)
    };
    fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => {
      res.json().then((data) => {
        if (res.status === 200) {
          swa2.fire(data.message);
        } else {
          swa2.fire(data.errors[0].message);
        }
      });
    });
  };
  return (
    <form onSubmit={submitReview}>
      <p className="font-bold mt-4">Your rating</p>
      <ReviewStar stars={stars} setStars={setStars} />
      <input
        type="text"
        placeholder="Your name here..."
        value={name}
        onChange={e => setName(e.target.value)}
        className="p-2 flex-1 w-2/3 outline-none border border-gray-400 bg-white focus:border-red-600 ml-2 mt-8"
      />
      <textarea
        value={cmt}
        onChange={e => setCmt(e.target.value)}
        className="w-2/3 p-2 flex ml-2 outline-none border border-gray-400 bg-white focus:border-red-600 mt-4"
        placeholder="Your review here"
      />
      <button className="focus:outline-none p-4 bg-red-700 hover:bg-red-600 text-white mt-8">
        SUBMIT REVIEW
      </button>
    </form>
  );
};
