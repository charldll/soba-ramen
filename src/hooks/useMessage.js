import { useState } from "react";
import { supabase } from "../supabaseClinet";

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
      const response = await fetch(
        "https://soba-ramen.netlify.app/.netlify/functions/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: userEmail,
            message: message,
          }),
        },
      );

      if (!response || !response.ok)
        throw new Error("Błąd podczas wysyłania emaila");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    message,
    setMessage,
    userEmail,
    setUserEmail,
    saveMessage,
    sendMessage,
  };
};

export default useMessage;
