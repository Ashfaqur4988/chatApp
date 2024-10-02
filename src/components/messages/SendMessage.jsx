import { Send } from "lucide-react";
import { useState } from "react";

const SendMessage = () => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {};

  return (
    <>
      <div className="border-t border-gray-800 p-4">
        <form className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            onClick={handleSendMessage}
            className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};
export default SendMessage;
