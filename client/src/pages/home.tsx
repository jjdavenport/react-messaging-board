import { Title, Button, MessageList } from "../components/content";
import { DataContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { data } = useContext(DataContext);
  if (data) {
    return (
      <>
        <Title />
        <MessageList data={data} />
        <Button />
      </>
    );
  }
};
