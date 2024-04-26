import React, { useState } from "react";
import axios from "axios";
import { IoChatbubbles } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { TextInput } from "flowbite-react";
import { BsFillSendFill } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const ChatBot = () => {
  const [showModel, setShowModel] = useState(false);
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") setShowModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dms-mobile-server.onrender.com/api/chatbot",
        {
          content: content,
          role: "user",
        }
      );

 
      const newMessage = { content: content, result: response.data };
      setMessages([...messages, newMessage]);
      setContent("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer bg-primary w-12 h-12 flex items-center justify-center rounded-full border border-white"
        onClick={() => setShowModel(true)}
      >
        <IoChatbubbles style={{ color: "white" }} className="w-7 h-7" />
      </div>
      {showModel && (
        <div
          className="fixed right-10 bottom-20 z-[999] flex justify-center items-center shadow-xl bg-white"
          id="wrapper"
          onClick={handleClose}
        >
          <div className="w-full sm:w-[600px] flex flex-col h-[60vh] sm:h-[450px] border rounded-xl">
            <button
              className="bg-black flex items-center justify-end w-full rounded-t-xl p-1"
              onClick={() => setShowModel(false)}
            >
              <h1 className="text-white font-semibold px-5 text-center">
                Chat Bot
              </h1>
              <IoMdCloseCircle style={{ color: "white" }} className="w-6 h-6" />
            </button>
            <div className=" p-2 rounded w-full overflow-auto flex-grow">
              <div className="relative">
                {messages.map((message, i) => (
                  <div key={i}>
                    <div className="flex justify-start items-center gap-2">
                      <RiRobot2Fill className="w-5 h-5" />
                      <div
                        className=" bg-green-300 p-2 rounded-tr-xl rounded-bl-xl rounded-br-xl text-sm mb-2 "
                        style={{ width: "fit-content" }}
                      >
                        {message.content}
                      </div>
                    </div>

                    <div className="flex justify-end items-center gap-2">
                      <div
                        className=" bg-pink-300 p-2 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm mb-2"
                        style={{ width: "fit-content" }}
                      >
                        {message.result}
                      </div>
                      <FaUserAlt className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bottom-0 left-0 right-0 p-1 flex justify-between items-center gap-2">
              <TextInput
                type="text"
                placeholder="Ask anything..."
                value={content}
                className="flex-grow"
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                type="submit"
                className="text-white bg-black p-2 rounded-xl"
                onClick={handleSubmit}
              >
                <BsFillSendFill className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
