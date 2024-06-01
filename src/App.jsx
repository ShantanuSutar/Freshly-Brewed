import { useContext, useState } from "react";
import Navbar from "../public/assets/Navbars.png";
import MobileNavbar from "../public/assets/mobileNavbar.png";
import MobileHeading from "../public/assets/mobileHeading.png";
import MobilePost1 from "../public/assets/mobilePost1.png";
import MobilePost2 from "../public/assets/mobilePost2.png";

import Heading from "../public/assets/heading.png";
import Question from "../public/assets/questions.png";
import Feedback from "./components/FeedbackFeature/Feedback";
import UserContext from "./context/UserContext";

function App() {
  const { login, logout, user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const [submitResponseVisible, setSubmitResponseVisible] = useState(false);
  const handleLogin = () => {
    // Your login logic here (e.g., API call)
    const userData = {
      name: "Shantanu Sutar",
      email: "shantanusutar@gmail.com",
    };
    login(userData);
  };
  return (
    <div className=" w-full min-h-screen bg-black text-white">
      <nav
        className={`  min-w-full flex items-center justify-center md:flex-row flex-col ${
          show || submitResponseVisible ? " brightness-50" : ""
        } `}
      >
        <img className=" w-[60%] md:block hidden" src={Navbar} alt="" />
        <img className="  block md:hidden " src={MobileNavbar} alt="" />

        {!user ? (
          <button
            onClick={handleLogin}
            className=" px-4 py-2 ml-10 rounded-md text-lg hover:opacity-80 bg-white text-black md:scale-100 scale-90"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className=" px-4 py-2 ml-10 rounded-md text-lg hover:opacity-80 bg-white text-black scale-90 md:scale-100"
          >
            Logout
          </button>
        )}
      </nav>
      <img
        className=" w-[65%] mx-auto my-10 md:block hidden"
        src={Heading}
        alt=""
      />
      <img
        className={` mx-auto my-10  md:hidden block ${
          show || submitResponseVisible ? " brightness-50" : ""
        }`}
        src={MobileHeading}
        alt=""
      />
      <img
        className=" w-[45%]  mx-auto md:block hidden"
        src={Question}
        alt=""
      />
      <img
        className={`  mx-auto md:hidden block ${
          show || submitResponseVisible ? " brightness-50" : ""
        }`}
        src={MobilePost1}
        alt=""
      />{" "}
      <img
        className={` mx-auto md:hidden block ${
          show || submitResponseVisible ? " brightness-50" : ""
        } `}
        src={MobilePost2}
        alt=""
      />
      <Feedback
        submitResponseVisible={submitResponseVisible}
        setSubmitResponseVisible={setSubmitResponseVisible}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
