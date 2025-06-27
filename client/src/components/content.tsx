import type { ReactNode } from "react";
import { Link } from "react-router";

type Prop = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Prop) => {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col items-center">
        {children}
      </div>
    </>
  );
};

export const Title = () => {
  return (
    <>
      <h1>MessageBoard</h1>
    </>
  );
};

export const Button = () => {
  return (
    <>
      <Link to="/new">New message</Link>
    </>
  );
};

export const NewMessage = () => {
  return (
    <>
      <form className="flex flex-col" action="POST">
        <label htmlFor="input" />
        <input className="outline" type="text" />
        <label htmlFor="textarea" />
        <textarea className="outline" name="message" id="message" />
      </form>
    </>
  );
};

export const Container = ({ children }: Prop) => {
  return (
    <>
      <div className="w-full max-w-3xl">{children}</div>
    </>
  );
};

type MessageListProp = {
  data: [
    {
      message: string;
      user: string;
    },
  ];
};

export const MessageList = ({ data }: MessageListProp) => {
  return (
    <>
      <ul>
        {data.map((i, index) => (
          <Message message={i.message} user={i.user} key={index} />
        ))}
      </ul>
    </>
  );
};

type MessageProps = {
  message: string;
  user: string;
};

const Message = ({ message, user }: MessageProps) => {
  return (
    <>
      <li>
        <p>{message}</p>
        <span>{user}</span>
      </li>
    </>
  );
};
