import React, { useEffect, useState } from "react";
import { ReviewType } from "../../../DataType";
import { ProductStars } from "../ProductStars";
import { ReviewForm } from "./InfoReview/ReviewForm";

interface props {
  productID: string;
}

export const InfoReviews = ({ productID }: props) => {
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);
  useEffect(() => {
    fetch(`/api/review/${productID}`).then((res) => {
      res.json().then((reviews) => {
        setReviews(reviews);
      });
    });
  }, [productID]);
  return (
    <div>
      <h1 className="jo-font font-bold text-lg mb-8">CUSTOMER REVIEW</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <div className="w-full" key={review.id}>
              <div className="w-full flex justify-between">
                <h3 className="jo-font font-bold text-base uppercase">
                  {review.userName}
                </h3>
                <ProductStars stars={review.stars} />
              </div>
              <p className="text-gray-600 text-sm">{review.createdAt}</p>
              <p className="">{review.cmt}</p>
            </div>
          );
        })
      ) : (
        <p>No Review</p>
      )}
      <h1 className="jo-font font-bold text-lg mt-8">LEAVE YOUR REVIEW</h1>
      <ReviewForm productID={productID} />
    </div>
  );
};
