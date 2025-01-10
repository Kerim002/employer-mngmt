import { BannersTable } from "@/entities/banners";
import React from "react";

const SingleBanner = () => {
  //   const { id } = useParams();
  return (
    <div className="p-2">
      <BannersTable />
    </div>
  );
};

export default SingleBanner;
