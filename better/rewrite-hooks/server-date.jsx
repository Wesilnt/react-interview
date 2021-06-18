import React, { useEffect, useState, useRef } from "react";
import { fetch } from "@/fetch";

export const ServerDate = () => {
  const [date, setDate] = useState("");
  const IntervalID = useRef("");

  const intervalServerDate = async () => {
    const fetchDate = () => {
      fetch({ url: "getServerDate" }).then((res) => {
        const { data: date, success } = res;
        if (!success) return;
        if (!IntervalID.current) return;
        setDate(date);
      });
    };
    fetchDate();
    return setInterval(() => {
      fetchDate();
    }, 4000);
  };

  useEffect(() => {
    IntervalID.current = intervalServerDate();
    return () => {
      clearInterval(IntervalID.current);
      IntervalID.current = "";
    };
  }, []);

  return date;
};
