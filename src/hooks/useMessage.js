import { useState } from "react";
import { supabase } from "../supabaseClinet";

const useMessage = () => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const saveMessage = async (userEmail, message) => {
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

  return {
    message,
    setMessage,
    userEmail,
    setUserEmail,
    saveMessage,
  };
};

export default useMessage;
