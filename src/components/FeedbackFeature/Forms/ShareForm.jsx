import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import Email from "./Inputs/Email";
import Desc from "./Inputs/Desc";

const ShareForm = ({ setSubmitResponse, handleSubmit }) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(UserContext);

  return (
    <div className=" bg-white text-black shadow-md shadow-gray-500 md:rounded-[5px] md:mb-3 px-4 py-5 md:max-w-[430px]  border border-white md:rounded-t-[5px] rounded-t-3xl -mb-[10%]  min-w-full -mr-[30px] md:mr-0">
      <h1 className=" px-16 text-lg text-center text-gray-700 font-medium">
        Let us know your{" "}
        <span className=" font-bold text-black">Feedback </span>
        about us!
      </h1>
      <hr className=" border my-5" />
      <div className="flex flex-col gap-5">
        <Desc attach={true} setMessage={setMessage} Heading={""} />
        {!user ? (
          <div className="">
            <Email
              setEmail={setEmail}
              EmailLabel={"Enter your email to receive an update "}
            />
          </div>
        ) : (
          <div className=" flex items-center gap-2">
            <input className=" size-4" type="checkbox" id="anonymous"></input>
            <label htmlFor="anonymous">Send feedback anonymously</label>
          </div>
        )}
      </div>
      <div className=" w-full  flex justify-end">
        <button
          onClick={() => {
            setSubmitResponse("Thanks for your valuable feedback!");
            handleSubmit();
          }}
          disabled={!message || (!user && !email)}
          className={` rounded-[4px]  px-4 py-1  mt-3 text-lg ${
            !message || (!user && !email)
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

export default ShareForm;
