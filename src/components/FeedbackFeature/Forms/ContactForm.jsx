import { useContext, useState } from "react";
import Name from "./Inputs/Name";
import Desc from "./Inputs/Desc";
import Email from "./Inputs/Email";
import MNumber from "./Inputs/MNumber";
import UserContext from "../../../context/UserContext";

const ContactForm = ({ setSubmitResponse, handleSubmit }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(UserContext);

  return (
    <div className=" bg-white text-black shadow-md shadow-gray-500 md:rounded-[5px] md:mb-3 px-4 py-5 md:max-w-[430px]  border border-white md:rounded-t-[5px] rounded-t-3xl -mb-[10%]  min-w-full -mr-[30px] md:mr-0">
      <h1 className=" px-14 text-lg text-center text-gray-700 font-medium">
        Let us know what
        <span className=" font-bold text-black"> your queries </span>are!{" "}
      </h1>
      <hr className={` border ${!user ? "my-2" : "my-5"} `} />
      <div className={`flex flex-col ${user ? "gap-5" : "gap-2"} `}>
        <Name setName={setName} />
        {!user && <Email setEmail={setEmail} EmailLabel={"Your Email"} />}
        {!user && <MNumber />}
        <Desc
          setMessage={setMessage}
          Heading={"What would you like to ask? "}
          attach={false}
        />
      </div>
      <div className=" w-full  flex justify-end">
        <button
          onClick={() => {
            setSubmitResponse(
              "Thanks for reaching out to us! We will get back to you as soon as possible"
            );
            handleSubmit();
          }}
          disabled={!message || !name || (!user && !email)}
          className={` rounded-[4px]  px-4 py-1  mt-3 text-lg ${
            !message || !name || (!user && !email)
              ? " bg-black opacity-60 text-white"
              : "bg-black text-white"
          } `}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
