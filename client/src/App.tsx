import { useEffect, useState } from "react";
import { Wrapper, Container } from "./components/content";
import { Outlet } from "react-router";

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
      <Wrapper>
        <Container>
          <Outlet context={{ data }} />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
