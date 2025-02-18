import { useForm } from "react-hook-form";
import validator from "validator";
import ButtonComponent from "../components/ButtonComponent";
import { Loader } from "lucide-react";
import useMessage from "../hooks/useMessage";
import { React, useState } from "react";

const Contact = () => {
  const { saveMessage, setUserEmail, setMessage } = useMessage();
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitError("");

      await saveMessage(data.userEmail, data.message);
      // Send the email
      const response = await fetch(
        "https://soba-ramen.netlify.app/.netlify/functions/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: data.userEmail,
            message: data.message,
          }),
        },
      );

      if (!response.ok) throw new Error("Błąd podczas wysyłania emaila");
      reset(); // Clear the form
    } catch (error) {
      setSubmitError(error.message || "Wystąpił błąd");
      console.error("Submission error:", error);
    }
  };

  return (
    <main className="wrapper-outer">
      <h1>
        Odwiedź Nas! Adres: ul. xxx, 00-001 xxx Telefon: +48 123 456 789 E-mail:
        kontakt@ramenownia.pl
        <p>
          Godziny otwarcia: <span>Poniedziałek – Piątek: 12:00 – 22:00 </span>
          Sobota – Niedziela: 13:00 – 23:00
          <span>Masz pytania? Napisz do nas, a chętnie odpowiemy!</span>
        </p>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center rounded-md px-4 py-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Twój email</label>
          <input
            id="email"
            className="w-56 rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
            autoComplete="off"
            type="email"
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
            autoFocus
            {...register("userEmail", {
              required: true,
              validate: (value) =>
                validator.isEmail(value) || "Niepoprawny format maila",
            })}
          />
          {errors.userEmail && (
            <p className="text-red-500">{errors.userEmail}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Napisz wiadomość</label>
          <textarea
            id="message"
            className="w-56 rounded-md border p-2 focus:ring-1 focus:outline-none sm:w-64"
            onChange={(e) => setMessage(e.target.value)}
            {...register("message", { required: true })}
          />
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
              Wysyłanie...
            </>
          ) : (
            "Wyślij"
          )}
        </ButtonComponent>
        {submitError && <p className="mt-2 text-red-500">{submitError}</p>}
      </form>
    </main>
  );
};

export default Contact;
