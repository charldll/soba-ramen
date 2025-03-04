/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClinet";

const useCode = (onValidCode) => {
  const [code, setCode] = useState(
    () => sessionStorage.getItem("tableCode") || "",
  );
  const [loggedTable, setLoggedTable] = useState(
    () => sessionStorage.getItem("loggedTable") || null,
  );
  const [tableId, setTableId] = useState(
    () => sessionStorage.getItem("tableId") || null,
  );
  const [error, setError] = useState(null);

  const verifyCode = async (inputCode) => {
    try {
      const { data, error } = await supabase
        .from("restaurant_tables")
        .select("table_identifier, code_for_logging, id")
        .eq("code_for_logging", inputCode)
        .single();

      if (error) throw error;

      if (data) {
        setLoggedTable(data.table_identifier);
        setTableId(data.id);
        sessionStorage.setItem("tableId", data.id);
        sessionStorage.setItem("loggedTable", data.table_identifier);
        sessionStorage.setItem("tableCode", data.code_for_logging);
        setError(null);
        onValidCode(true);
        return data.id; // Return the table ID so navigation can happen outside the hook
      } else {
        setLoggedTable(null);
        sessionStorage.removeItem("loggedTable");
        sessionStorage.removeItem("tableId");
        sessionStorage.removeItem("tableCode");
        setError("Niepoprawny kod");
        onValidCode(false);
      }
    } catch (err) {
      setError("Błąd kodu");
      console.error("Error:", err);
      onValidCode(false);
    }
    return null;
  };

  useEffect(() => {
    if (code.length > 0) {
      const debounceTimeout = setTimeout(() => {
        verifyCode(code);
      }, 500);
      return () => clearTimeout(debounceTimeout);
    } else {
      setLoggedTable(null);
      setError(null);
    }
  }, [code]);

  return { code, setCode, loggedTable, error, verifyCode };
};

export default useCode;
