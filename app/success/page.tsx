import React from "react";
import SuccessPage from "./SuccessPage";

export default function page({
  searchParams,
}: {
  searchParams: { approved?: string; request_token?: string };
}) {
  return (
    <div>
      <SuccessPage
        requestToken={searchParams.request_token}
        approved={searchParams.approved}
      />
    </div>
  );
}
