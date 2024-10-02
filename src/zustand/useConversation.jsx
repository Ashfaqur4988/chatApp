import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversion: null, //initial value of state
  setSelectedConversation: (conversation) =>
    set({ selectedConversion: conversation }), //setting value

  messages: [],
  setMessages: (messages) => set({ messages: messages }),
}));

export default useConversation;
