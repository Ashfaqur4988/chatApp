import MessageWindow from "../../components/messages/MessageWindow";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Navbar */}
      <div className="flex-none">
        <Navbar />
      </div>

      {/* Main content area with Sidebar and MessageWindow */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="  text-xl h-full">
          <SideBar />
        </div>

        {/* Message Window */}
        <div className="flex-grow flex flex-col h-full">
          <MessageWindow />
        </div>
      </div>
    </div>
  );
};
export default Home;
