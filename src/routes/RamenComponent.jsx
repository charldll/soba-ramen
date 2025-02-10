import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import ProgressBar from "../components/ProgressBar";
import useOrder from "../hooks/useOrder";
import { supabase } from "../supabaseClinet";

const RamenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { selectedItems, totalPrice, orderStatus, toggleItem, placeOrder } =
    useOrder();

  const { table } = useParams();
  const navigate = useNavigate();

  const validateTable = async (table) => {
    try {
      const { data, error } = await supabase
        .from("restaurant_tables")
        .select("id, table_identifier")
        .eq("id", table)
        .single();

      if (error || !data) {
        sessionStorage.removeItem("tableId");
        sessionStorage.removeItem("loggedTable");
        // sessionStorage.removeItem("tableCode");
        return false;
      }

      sessionStorage.setItem("tableId", data.id);
      sessionStorage.setItem("loggedTable", data.table_identifier);
      // sessionStorage.setItem("tableCode", tableCode);
      return true;
    } catch (err) {
      console.error("Error validating table:", err);
      return false;
    }
  };

  useEffect(() => {
    const checkTable = async () => {
      if (table) {
        const isValid = await validateTable(table);
        if (!isValid) {
          navigate("/custom-ramen"); // Redirect if invalid
        } else {
          setCurrentStep(2);
        }
      }
    };

    checkTable();
  }, [table]);
  const steps = [
    { icon: KeyRound, label: "Zaloguj" },
    { icon: Soup, label: "Wybierz" },
    { icon: ThumbsUp, label: "Potwierdź" },
  ];

  const handleCodeValidation = (isValid) => {
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleNextStep = () => {
    if (selectedItems.length === 0) {
      console.log(orderStatus);
      // TODO: No warning the order is empty! No log. Figure it out.
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePlaceOrder = async () => {
    await placeOrder();
    setCurrentStep(4);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TableCodeInput onValidCode={handleCodeValidation} />;
      case 2:
        return (
          <div className="wrapper-inner">
            <IngredientChoice
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              orderStatus={orderStatus}
              onClick={handleNextStep}
            />
          </div>
        );
      case 3:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            orderStatus={orderStatus}
            placeOrder={handlePlaceOrder}
          />
        );
      case 4:
        return <OrderConfirmation />;
      default:
        return null;
    }
  };

  return (
    <main className="wrapper-outer">
      <ProgressBar currentStep={currentStep} steps={steps} />
      {renderStepContent()}
    </main>
  );
};

export default RamenComponent;
