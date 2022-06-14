import { useState } from "react";
import { fetchAPI } from "../lib/api";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, subject } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    const response = fetchAPI(
      "/contacts",
      {},
      { method: "POST", body: JSON.stringify({ data: details }) }
    );
    setStatus("Submit");
    const result = await response;
    alert(
      result.data.id ? "Message sent successfully" : "Error sending message"
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
        Contact Us
      </h5>
      <div className="flex">
        <div className="relative z-0 w-full mb-6 group mr-6">
          <input
            id="name"
            type="text"
            name="name"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="email"
            type="email"
            name="email"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
          >
            Email address
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          id="subject"
          type="text"
          name="subject"
          className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="subject"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
        >
          Subject
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500 focus-visible:border-blue-500"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus-visible:px-2 peer-focus-visible:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus-visible:top-1 peer-focus-visible:scale-75 peer-focus-visible:-translate-y-3 left-1"
        >
          Message
        </label>
      </div>
      <button
        type="submit"
        className="group text-white bg-orange-500 hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
      >
        {status}
        <svg
          className="w-6 h-6 ml-1 duration-300 transform group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
