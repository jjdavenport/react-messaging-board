import { useEffect, useState, createContext } from "react";
import { Wrapper, Container } from "./components/content";
import { Outlet } from "react-router";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api");
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
            <Outlet context={{ data }} />
          </Container>
        </Wrapper>
      </DataContext.Provider>
    </>
  );
}

export default App;
