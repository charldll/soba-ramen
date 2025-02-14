/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import validator from "validator";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ButtonComponent from "../components/ButtonComponent";

const AdminLogin = () => {
  const { signInWithEmail, user } = useAuth();
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");

    try {
      await signInWithEmail(data.email, data.password);
      navigate("/kitchen");
    } catch (error) {
      console.log(error);
      setServerError("Oszukałeś z danymi. Spróbuj ponownie.");
    }
  };

  return (
    <main className="wrapper-outer">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-md p-4">
        {serverError && <p className="text-red-500">{serverError}</p>}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
            autoComplete="off"
            type="email"
            placeholder="Admin Email"
            autoFocus
            {...register("email", {
              required: true,
              validate: (value) =>
                validator.isEmail(value) || "Niepoprawny format maila",
            })}
          />
          <label htmlFor="password">Hasło</label>
          <div className="relative flex justify-center gap-2">
            <input
              id="password"
              className="w-56 rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
              placeholder="Hasło"
              type={showPassword ? undefined : "password"}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-md"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <ButtonComponent
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-56 bg-[#E14F52] font-semibold sm:w-64"
          >
            {isSubmitting ? "Logowanie..." : "Zaloguj"}
          </ButtonComponent>
        </div>
      </form>
    </main>
  );
};

export default AdminLogin;
