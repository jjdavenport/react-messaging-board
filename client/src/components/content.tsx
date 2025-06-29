import type { ReactNode } from "react";
import { Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";

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
      <form
        onSubmit={onSubmit}
        action="POST"
        className="flex flex-col gap-4 p-4 outline"
      >
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
      id: number;
    },
  ];
};

export const MessageList = ({ data }: MessageListProp) => {
  const sortedData = [...data].sort((a, b) => a.id - b.id);
  return (
    <>
      <ul className="flex flex-col gap-2">
        {sortedData.map((i, index) => (
          <MessageLink
            href={`/message/${i.id}`}
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
            <span>{user}</span>
            <p>{message}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

type MessageItemProps = {
  message: string;
  user: string;
  onEdit: () => void;
  onDelete: () => void;
};

export const MessageItem = ({
  message,
  user,
  onEdit,
  onDelete,
}: MessageItemProps) => {
  return (
    <>
      <div className="p-1 outline">
        <span>{user}</span>
        <div className="flex justify-between">
          <p>{message}</p>
          <div className="flex gap-2">
            <button onClick={onEdit} className="cursor-pointer">
              <Pencil />
            </button>
            <button onClick={onDelete} className="cursor-pointer">
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
