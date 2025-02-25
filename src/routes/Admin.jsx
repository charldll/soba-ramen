/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import validator from "validator";
import { Eye, EyeOff, Loader } from "lucide-react";
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
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/kitchen");
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    setServerError("");

    try {
      await signInWithEmail(data.email, data.password);
      navigate("/kitchen");
    } catch (error) {
      console.log(error);
      setServerError("Czy na pewno możesz się tu logować, hmmm?");
    }
  };

  if (isLoading) {
    return (
      <main className="wrapper-outer flex h-screen items-center justify-center">
        <Loader className="size-10 animate-spin" />
      </main>
    );
  }

  if (user) {
    return (
      <main className="wrapper-outer flex h-screen items-center justify-center">
        <Loader className="size-10 animate-spin" />
      </main>
    );
  }

  return (
    <main className="my-4 flex min-h-[80vh] flex-col items-center justify-center p-4">
      <h1 className="text-center text-xl text-pretty md:text-3xl">
        Logowanie do panelu administracyjnego*
      </h1>
      {serverError && (
        <p className="text-menu-red pt-8 text-center">{serverError}</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center rounded-md px-4 py-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-56 rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
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
          <div className="relative flex w-56 justify-center gap-2 sm:w-64">
            <input
              id="password"
              className="relative w-56 rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
              placeholder="Hasło"
              type={showPassword ? undefined : "password"}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-md"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <ButtonComponent
            type="submit"
            disabled={isSubmitting}
            className="mt-8 flex w-56 items-center justify-center bg-[#E14F52] font-semibold sm:w-64"
          >
            {isSubmitting ? (
              <>
                <Loader
                  className="mr-3 size-5 animate-spin pr-2"
                  viewBox="0 0 24 24"
                />
                Logowanie...
              </>
            ) : (
              "Zaloguj"
            )}
          </ButtonComponent>
        </div>
      </form>
      <h2 className="mx-auto w-fit text-xs">
        * Chcesz dołączyć do zespołu? Zostaw nam swoje CV.
      </h2>
    </main>
  );
};

export default AdminLogin;
