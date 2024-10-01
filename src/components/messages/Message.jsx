const Message = () => {
  const message = { sender: "user" };

  return (
    <div>
      <div
        className={`flex ${
          message.sender === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex items-end space-x-2 max-w-xs md:max-w-md ${
            message.sender === "user"
              ? "flex-row-reverse space-x-reverse"
              : "flex-row"
          }`}
        >
          <div className="text-gray-300 py-1">Username</div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
            <img src="/noavatar.jpg" alt="" className="rounded-full" />
          </div>
          <div
            className={`rounded-lg p-3 ${
              message.sender === "user" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            <p>Hi this is a message</p>
            <p className="text-xs text-gray-400 mt-1">1 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
