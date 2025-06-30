import { Title, Button, MessageList } from "../components/content";
import { DataContext } from "../hooks/data-provider";
import { useContext } from "react";

export const Home = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Message must be used within a DataContext.Provider");
  }
  const { data } = context;

  return data ? (
    <>
      <Title />
      <MessageList data={data} />
      <Button />
    </>
  ) : (
    <span>Waiting for Server...</span>
  );
};
