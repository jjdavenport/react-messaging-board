import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { NewMessage, Title } from "../components/content";
import { DataContext } from "../App";

export const Form = () => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();
  const { fetchData } = useContext(DataContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input, textarea }),
    });
    setInput("");
    setTextarea("");
    await fetchData();
    navigate("/");
  };

  return (
    <>
      <Title />
      <NewMessage
        onSubmit={onSubmit}
        valueInput={input}
        valueTextarea={textarea}
        onChangeInput={(e) => setInput(e.target.value)}
        onChangeTextarea={(e) => setTextarea(e.target.value)}
      />
    </>
  );
};
