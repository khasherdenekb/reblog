import React from "react";
type PageTitleProp = {
  title: String;
};
const PageTitle = ({ title }: PageTitleProp) => {
  return (
    <h2
      className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 py-4`}
    >
      {title}
    </h2>
  );
};

export default PageTitle;
