/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";
import useCode from "../hooks/useCode";

const TableCodeInput = ({ onValidCode }) => {
  const navigate = useNavigate();
  const { code, setCode, loggedTable, error, verifyCode } =
    useCode(onValidCode);

  const handleCodeChange = async (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    sessionStorage.setItem("tableCode", newCode);

    const tableId = await verifyCode(newCode);
    if (tableId) {
      navigate(`/custom-ramen/${tableId}`);
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-md p-4">
        {!loggedTable ? (
          <div className="space-y-2">
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="Podaj kod stolika"
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
