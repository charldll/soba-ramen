/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClinet";
import { useNavigate } from "react-router";

const TableCodeInput = ({ onValidCode }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(
    () => sessionStorage.getItem("tableCode") || ""
  );
  const [loggedTable, setLoggedTable] = useState(() => {
    // Initialize from sessionStorage if available - sessionStorage works when the tab or window is open, localStorage persisting data even after the user closes the browser
    return sessionStorage.getItem("loggedTable") || null;
  });
  const [tableId, setTableId] = useState(() => {
    return sessionStorage.getItem("tableId") || null;
  });
  const [tableCode, setTableCode] = useState(() => {
    return sessionStorage.getItem("tableCode") || null;
  });

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
        setTableCode(data.code_for_logging);
        // Store in sessionStorage
        sessionStorage.setItem("tableId", data.id);
        sessionStorage.setItem("loggedTable", data.table_identifier);
        sessionStorage.setItem("tableCode", data.code_for_logging);
        setError(null);
        onValidCode(true); // Notify parent component that code is valid
        console.log("Navigating to:", `/custom-ramen/${data.id}`);
        navigate(`/custom-ramen/${data.id}`);
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
  };

  useEffect(() => {
    if (code.length > 0) {
      const debounceTimeout = setTimeout(() => {
        verifyCode(code);
      }, 500); // Debounce for 500ms

      return () => clearTimeout(debounceTimeout);
    } else {
      setLoggedTable(null);
      setError(null);
    }
  }, [code]);

  return (
    <>
      <div className="mx-auto w-full max-w-md p-4">
        {!loggedTable ? (
          <div className="space-y-2">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                sessionStorage.setItem("tableCode", e.target.value);
              }}
              placeholder="Wpisz kod stolika"
              className="w-full rounded-lg border px-4 py-2 text-blue-500 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        ) : (
          <div className="rounded-lg bg-green-100 p-4">
            <p className="text-center text-lg font-semibold text-green-800">
              {loggedTable}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TableCodeInput;
