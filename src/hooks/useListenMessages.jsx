import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import notification from "../assets/sound/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    //clean up function for performance
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};
export default useListenMessages;