/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useAuthContext } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { currentUser } = useAuthContext();

  return (
    <div>
      <div
        className={`flex ${
          currentUser.id === message.senderId ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex items-end space-x-2 max-w-xs md:max-w-md ${
            currentUser.id === message.senderId
              ? "flex-row-reverse space-x-reverse"
              : "flex-row"
          }`}
        >
          <div className="text-gray-300 py-1">{currentUser.username}</div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
            <img
              src={
                currentUser.profilePic
                  ? currentUser.profilePic
                  : "/noavatar.jpg"
              }
              alt=""
              className="rounded-full"
            />
          </div>
          <div
            className={`rounded-lg p-3 ${
              currentUser.id === message.senderId
                ? "bg-blue-600"
                : "bg-gray-700"
            }`}
          >
            <p>{message.body}</p>
            <p className="text-xs text-gray-400 mt-1">1 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
