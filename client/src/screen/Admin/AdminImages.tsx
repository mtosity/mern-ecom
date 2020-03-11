import React from "react";
import { Content } from "../../components/Admin/Content";
import { ContentCard } from "../../components/Admin/Content/ContentCard";
import { AddImages } from "../../components/Admin/Content/AddImages";
import { Title } from "../../components/Admin/Content/Title";

export const AdminImages = () => {
  return (
    <Content>
      <Title title="Upload image and create image url" />
      <ContentCard>
        <AddImages />
      </ContentCard>
    </Content>
  );
};
