import { Hand, MessageSquareMore } from "lucide-react";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageWindow = () => {
  const { selectedConversion } = useConversation();

  return (
    <div className="flex flex-col h-full bg-gray-900 text-gray-100">
      {!selectedConversion ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex-1 p-4 space-y-4 overflow-y-scroll scrollbar-hide">
            <Messages />
          </div>
          <SendMessage />
        </>
      )}
    </div>
  );
};

export default MessageWindow;

const NoChatSelected = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center font-semibold gap-5">
        <p className="text-4xl">
          <Hand fill="yellow" size={60} className="inline" /> Welcome{" "}
          {currentUser.username}!
        </p>
        <p className="text-2xl">Select a chat to start messaging</p>
        <MessageSquareMore size={80} />
      </div>
    </div>
  );
};
