import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h5rg7uq", "template_fm40nf8", form.current, {
        publicKey: "3WRVAppoEMjqNECn2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-base-200 mx-auto max-w-2xl space-y-5 rounded-xl p-10 shadow-lg"
    >
      <div>
        <label className="mb-1 block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="bg-base-100 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="bg-base-100 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="bg-base-100 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      {/* Hidden time input */}
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <div>
        <input
          type="submit"
          value="Send"
          className="btn btn-primary mt-2 w-full"
        />
      </div>
    </form>
  );
};

export default SendEmail;
