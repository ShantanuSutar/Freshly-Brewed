import { useContext, useState } from "react";
import Choose from "./Inputs/Choose";
import Desc from "./Inputs/Desc";
import Email from "./Inputs/Email";
import UserContext from "../../../context/UserContext";

const GiveForm = ({ setSubmitResponse, handleSubmit }) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(UserContext);

  return (
    <div className=" bg-white text-black shadow-md shadow-gray-500 md:rounded-[5px] md:mb-3 px-4 py-5 md:max-w-[430px]  border border-white md:rounded-t-[5px] rounded-t-3xl -mb-[10%]  min-w-full -mr-[30px] md:mr-0">
      <h1 className=" px-14 text-lg text-center text-gray-700 font-medium">
        Share your
        <span className=" font-bold text-black"> Suggestions</span> with us for
        a chance to earn rewards!
      </h1>
      <hr className=" border my-5" />
      <div className={`flex flex-col ${user ? "gap-5" : "gap-2"} `}>
        <Choose />
        <Desc
          attach={true}
          setMessage={setMessage}
          Heading={"Describe the suggestion in detail "}
        />
        {!user && (
          <div className="">
            <Email
              setEmail={setEmail}
              EmailLabel={"Enter your email to receive an update "}
            />
          </div>
        )}
      </div>
      <div className=" w-full  flex justify-end">
        <button
          onClick={() => {
            setSubmitResponse("Thanks for your valuable Suggestion!");
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

export default GiveForm;
