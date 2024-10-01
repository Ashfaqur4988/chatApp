const Conversations = () => {
  return (
    <>
      <div className="flex items-center p-4 hover:bg-gray-800 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <img src="/noavatar.jpg" alt="" className="rounded-full" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">name</h3>
            <span className="text-xs text-gray-500">time</span>
          </div>
          <p className="text-sm text-gray-400 truncate">message </p>
        </div>
        {/* {conversation.unread > 0 && (
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center ml-2">
            <span className="text-xs">{conversation.unread}</span>
          </div>
        )} */}
      </div>
    </>
  );
};
export default Conversations;
