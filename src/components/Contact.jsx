import React from "react";
import { toast } from "react-toastify";
const accessKey = import.meta.env.VITE_ACCESS_KEY;
console.log(accessKey);
const Contact = () => {
 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult('');
      toast.error(data.message)
    }
  };

  return (
    <div
      className=" text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}
          With Us{" "}
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-6 lg:mb-12 max-w-80 mx-auto text-sm sm:text-base">
        Ready to Make a Move? Lets's Build Your Future Togegher
      </p>
      <form onSubmit={onSubmit}
        className=" max-w-2xl mx-auto text-gray-600 pt-8 mt-0
      "
      >
        <div className=" flex flex-wrap ">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="
             w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="text"
              placeholder="Your name"
              required
              name="Name"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="
             w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              type="email"
              placeholder="Your Email"
              required
              name="Email"
            />
          </div>
        </div>
        <div className=" my-6 text-left">
          Message
          <textarea
            className=" w-full border border-gray-300 rounded py=3 px-4 mt-2 h-48 resize-none"
            name="Mesaage "
            required
            placeholder="Message"
          ></textarea>
        </div>
        <button className=" bg-blue-600 text-white py-2 px-12 rounded mb-12 cursor-pointer">
          {result ? result : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
