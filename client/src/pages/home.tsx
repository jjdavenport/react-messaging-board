import { Title, Button, MessageList } from "../components/content";
import { useOutletContext } from "react-router";

export const Home = () => {
  const { data } = useOutletContext();

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
