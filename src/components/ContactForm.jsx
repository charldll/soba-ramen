/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import useMessage from "../hooks/useMessage";
import ButtonComponent from "./ButtonComponent";
import { Loader } from "lucide-react";

const Input = ({ label, error, register, ...props }) => (
  <div className="space-y-2">
    <label className="mb-2 block text-sm font-medium text-gray-700 md:text-base">
      {label}
    </label>
    <input
      {...props}
      {...register}
      className={`w-full rounded-lg border bg-white/50 px-4 py-3 md:py-4 ${
        error ? "border-red-500" : "border-white/30"
      } text-gray-700 placeholder-gray-500 transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50`}
    />
    {error && <span className="text-sm text-red-500">{error.message}</span>}
  </div>
);

const TextArea = ({ label, error, register, ...props }) => (
  <div className="space-y-2">
    <label className="mb-2 block text-sm font-medium text-gray-700 md:text-base">
      {label}
    </label>
    <textarea
      {...props}
      {...register}
      className={`w-full rounded-lg border bg-white/50 px-4 py-3 md:py-4 ${
        error ? "border-red-500" : "border-white/30"
      } resize-none text-gray-700 placeholder-gray-500 transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50`}
    />
    {error && <span className="text-sm text-red-500">{error.message}</span>}
  </div>
);

export default function ContactForm() {
  const { saveMessage, sendMessage, setUserEmail, setMessage } = useMessage();
  const [serverStatus, setServerStatus] = useState({
    message: "",
    type: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const validateEmail = (value) => {
    if (!value) return "Adres email jest wymagany";
    return isEmail(value) || "Adres email jest niepoprawny";
  };

  const onSubmit = async () => {
    try {
      await saveMessage();

      await sendMessage();

      setServerStatus({
        message: "Wiadomość wysłana!",
        type: "success",
      });

      setTimeout(() => {
        setServerStatus({ message: "", type: "" });
        reset();
      }, 3000);
    } catch (error) {
      setServerStatus({
        message: "Błąd podczas wysyłania wiadomości. Spróbuj ponownie...",
        type: "error",
      });
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex w-full items-center justify-center lg:justify-start">
      <div className="w-full lg:w-3/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:border-menu-red rounded-lg p-6 md:p-8 lg:border-2"
          noValidate
        >
          <h2 className="animate-slide border-menu-red mx-auto mb-8 w-fit border-b text-center text-2xl font-bold md:text-3xl lg:border-none lg:text-4xl">
            Masz pytanie?
          </h2>

          <div className="space-y-5 md:space-y-6">
            <Input
              label="Email"
              error={errors.email}
              register={register("email", {
                validate: validateEmail,
                onChange: (e) => setUserEmail(e.target.value),
              })}
              type="email"
              placeholder="email@gmail.com"
              disabled={isSubmitting}
            />

            <TextArea
              label="Treść wiadomości"
              error={errors.message}
              register={register("message", {
                required: "Wiadomość jest wymagana",
                minLength: {
                  value: 10,
                  message: "Treść wiadomości musi zawierać minimum 10 znaków",
                },
                onChange: (e) => setMessage(e.target.value),
              })}
              rows={4}
              placeholder="Jak możemy Ci pomóc?"
              disabled={isSubmitting}
            />

            {serverStatus.message && (
              <div
                className={`rounded-lg p-3 text-sm md:text-base ${
                  serverStatus.type === "success"
                    ? "bg-green-100/80 text-green-700"
                    : "bg-red-100/80 text-red-700"
                }`}
              >
                {serverStatus.message}
              </div>
            )}

            <ButtonComponent
              type="submit"
              disabled={isSubmitting}
              className="bg-menu-red hover:bg-menu-red flex w-full transform items-center justify-center rounded-lg px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 md:py-4"
              onClick={async () => {
                const isValid = await trigger();
                if (!isValid) {
                  setServerStatus({
                    message: "Proszę poprawić błędy w formularzu",
                    type: "error",
                  });
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader
                    className="mr-3 size-10 animate-spin pr-2"
                    viewBox="0 0 24 24"
                  />
                  Wysyłanie...
                </>
              ) : (
                "Wyślij"
              )}
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
}
