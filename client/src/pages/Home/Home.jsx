import { useEffect } from "react";
import Navbar from "../../Components/navbar";

const Home = () => {
  useEffect(() => {
    document.title = "CommuniTEA - Home";
  }, []);
  return (
    <>
      <Navbar navItem="home" />
      <h1 className="text-blue-400">CommuniTEA</h1>
    </>
  );
};

export default Home;
