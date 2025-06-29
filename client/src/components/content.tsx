import type { ReactNode } from "react";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";

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
      <Link to="/">MessageBoard</Link>
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
      id: string;
    },
  ];
  onClick: () => void;
};

export const MessageList = ({ data, onClick }: MessageListProp) => {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {data.map((i, index) => (
          <MessageLink
            href={`/message/${i.id}`}
            onClick={onClick}
            message={i.text}
            user={i.user}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};

type MessageLinkProps = {
  message: string;
  user: string;
  href: string;
};

const MessageLink = ({ message, user, href }: MessageLinkProps) => {
  return (
    <>
      <li className="outline">
        <Link to={href}>
          <div className="p-1">
            <p>{message}</p>
            <span>{user}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

type MessageItemProps = {
  message: string;
  user: string;
  onClick: () => void;
  href: string;
};

export const MessageItem = ({ message, user, onClick }: MessageItemProps) => {
  return (
    <>
      <div className="p-1 outline">
        <p>{message}</p>
        <div className="flex justify-between">
          <span>{user}</span>
          <button onClick={onClick} className="cursor-pointer">
            <Trash2 />
          </button>
        </div>
      </div>
    </>
  );
};
