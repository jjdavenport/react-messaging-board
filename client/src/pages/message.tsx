import { Title, MessageItem, NewMessage } from "../components/content";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DataContext } from "../App";

export const Message = () => {
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [edit, setEdit] = useState(false);
  const { fetchData } = useContext(DataContext);
  const navigate = useNavigate();

  const fetchMessage = async () => {
    try {
      const response = await fetch(
        `https://react-messaging-board.onrender.com/api/message/${id}`,
      );
      const result = await response.json();
      setMessage(result);
      setInput(result.user);
      setTextarea(result.text);
    } catch {
      console.log("error");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(
      `https://react-messaging-board.onrender.com/api/message/${id}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ input, textarea }),
      },
    );
    setInput("");
    setTextarea("");
    setEdit(false);
    await fetchData();
  };

  const onDelete = async () => {
    await fetch(
      `https://react-messaging-board.onrender.com/api/message/${id}`,
      { method: "DELETE" },
    );
    await fetchData();
    navigate("/react-messaging-board/");
  };

  useEffect(() => {
    fetchMessage();
  }, [id, edit]);

  if (message) {
    return (
      <>
        <Title />
        {edit ? (
          <NewMessage
            onSubmit={onSubmit}
            onChangeTextarea={(e) => setTextarea(e.target.value)}
            onChangeInput={(e) => setInput(e.target.value)}
            valueInput={input}
            valueTextarea={textarea}
          />
        ) : (
          <MessageItem
            onDelete={onDelete}
            onEdit={() => setEdit(!edit)}
            message={message.text}
            user={message.user}
          />
        )}
      </>
    );
  }
};
