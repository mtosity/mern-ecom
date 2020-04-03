import React from "react";
import { Tag } from "./InfoTags/Tag";

export const InfoTags = () => {
  return (
    <>
      <div className="flex">
        <Tag title="Women" />
        <Tag title="Men" />
        <Tag title="Dresses" />
        <Tag title="Jeans" />
      </div>
      <div className="flex">
        <Tag title="Shoes" />
        <Tag title="Loungewear" />
        <Tag title="Tops" />
      </div>
      <div className="flex">
        <Tag title="Sale" />
        <Tag title="Shorts" />
        <Tag title="KAV" />
      </div>
    </>
  );
};
