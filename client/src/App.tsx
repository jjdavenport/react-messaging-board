import { useEffect, useState } from "react";
import { Wrapper, Container } from "./components/content";
import { Outlet } from "react-router";
import { DataContext } from "./hooks/data-provider";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://react-messaging-board.onrender.com/api",
      );
      const result = await response.json();
      setData(result);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, fetchData }}>
        <Wrapper>
          <Container>
            <Outlet />
          </Container>
        </Wrapper>
      </DataContext.Provider>
    </>
  );
}

export default App;
