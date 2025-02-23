import { useState } from "react";
import { supabase } from "../supabaseClinet";
import axios from "axios";

const useMessage = () => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const saveMessage = async () => {
    try {
      const { error } = await supabase.from("messages").insert([
        {
          email: userEmail,
          message: message,
        },
      ]);

      if (error) throw error;
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "https://soba-ramen.netlify.app/.netlify/functions/sendEmail",
        {
          userEmail: userEmail,
          message: message,
        },
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.status !== 200) {
        throw new Error("Błąd podczas wysyłania emaila");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return {
    message,
    setMessage,
    setUserEmail,
    saveMessage,
    sendMessage,
  };
};

export default useMessage;
