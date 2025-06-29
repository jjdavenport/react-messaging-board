import { Title, MessageItem } from "../components/content";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Message = () => {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  const fetchMessage = async () => {
    try {
      const response = await fetch(`/api/message/${id}`);
      const result = await response.json();
      setMessage(result);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchMessage();
  }, [id]);

  if (message) {
    return (
      <>
        <Title />
        <MessageItem message={message.text} user={message.user} />
      </>
    );
  }
};
