import React from "react";

interface UserMessage {
  name: string;
  msg: string;
}
const Message = (props: UserMessage): any => {
  return (
    <p>
      {props.name}, {props.msg}
    </p>
  );
};

export default Message;
