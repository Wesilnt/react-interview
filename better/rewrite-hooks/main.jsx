import React from "react";
import { fetch } from "@/fetch";
import { ServerDate } from "./server-date";
import { ListWrapper } from "./list-wrapper";

export const Main = () => {
  return (
    <div>
      <ServerDate />
      <ListWrapper />
    </div>
  );
};
