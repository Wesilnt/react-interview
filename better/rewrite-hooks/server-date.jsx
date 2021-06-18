import React, { useEffect, useState } from "react";
import { fetch } from "@/fetch";

export const ServerDate = () => {
  const [date, setDate] = useState("");

  const intervalServerDate = async () => {
    const fetchDate = () => {
      fetch({ url: "getServerDate" }).then((res) => {
        const { data: date, success } = res;
        if (!success) return;
        setDate(date);
      });
    };
    fetchDate();
    return setInterval(() => {
      fetchDate();
    }, 4000);
  };

  useEffect(() => {
    const IntervalID = intervalServerDate();
    return () => {
      clearInterval(IntervalID);
    };
  }, []);

  return date;
};
