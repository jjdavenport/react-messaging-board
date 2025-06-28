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
      <Link className="p-1 text-center outline" to="/new">
        New message
      </Link>
    </>
  );
};

type NewMessageProps = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueInput: string;
  onChangeTextarea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  valueTextarea: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const NewMessage = ({
  onChangeInput,
  onChangeTextarea,
  valueInput,
  valueTextarea,
  onSubmit,
}: NewMessageProps) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 outline">
        <label htmlFor="input">Name</label>
        <input
          id="input"
          onChange={onChangeInput}
          value={valueInput}
          className="outline"
          type="text"
        />
        <label htmlFor="textarea">Message</label>
        <textarea
          onChange={onChangeTextarea}
          value={valueTextarea}
          className="outline"
          id="textarea"
        />
        <button type="submit" className="cursor-pointer outline">
          Post
        </button>
      </form>
    </>
  );
};

export const Container = ({ children }: Prop) => {
  return (
    <>
      <div className="flex w-full max-w-3xl flex-col gap-2 p-1">{children}</div>
    </>
  );
};

type MessageListProp = {
  data: [
    {
      text: string;
      user: string;
    },
  ];
};

export const MessageList = ({ data }: MessageListProp) => {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {data.map((i, index) => (
          <Message message={i.text} user={i.user} key={index} />
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
      <li className="p-1 outline">
        <p>{message}</p>
        <span>{user}</span>
      </li>
    </>
  );
};
