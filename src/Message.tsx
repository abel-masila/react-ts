import React from "react";
import msgHoc from "./HOC";

const example = (props: any): any => (
  <p>
    {props.name}, {props.msg}
  </p>
);

const Message = msgHoc(example);
export default Message;
