import Open from "../../../public/assets/buttons/open.png";
import MobileOpen from "../../../public/assets/buttons/mobileOpen.png";

import Close from "../../../public/assets/buttons/close.png";
import Contact from "../../../public/assets/buttons/contact.png";
import Give from "../../../public/assets/buttons/give.png";
import Report from "../../../public/assets/buttons/report.png";
import Share from "../../../public/assets/buttons/share.png";
import SingleFeature from "./SingleFeature";
import { useState } from "react";
import ContactForm from "./Forms/ContactForm";
import ShareForm from "./Forms/ShareForm";
import GiveForm from "./Forms/GiveForm";
import ReportForm from "./Forms/ReportForm";

const Feedback = ({
  show,
  setShow,
  setSubmitResponseVisible,
  submitResponseVisible,
}) => {
  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState({
    report: true,
    share: false,
    give: false,
    contact: false,
  });

  const [submitResponse, setSubmitResponse] = useState("");

  const handleSubmit = () => {
    setShow(!show);
    setFormOpen(false);
    setSubmitResponseVisible(true);
    setTimeout(() => {
      setSubmitResponseVisible(false);
    }, 4000); // Hide message after 5 seconds
  };
  return (
    <div className=" text-white font-['Poppins']">
      <div
        className={`fixed brightness-100 right-[32px] bottom-[20px] ${
          formOpen
            ? "md:flex md:flex-col md:items-center flex flex-col-reverse"
            : ""
        }`}
      >
        {/* Respective Feedback Form */}
        {formOpen && show && (
          <div className=" md:scale-100">
            {formType.contact && (
              <div className=" ">
                <ContactForm
                  setSubmitResponse={setSubmitResponse}
                  handleSubmit={handleSubmit}
                />
              </div>
            )}
            {formType.share && (
              <div>
                <ShareForm
                  setSubmitResponse={setSubmitResponse}
                  handleSubmit={handleSubmit}
                />
              </div>
            )}
            {formType.give && (
              <div>
                <GiveForm
                  setSubmitResponse={setSubmitResponse}
                  handleSubmit={handleSubmit}
                />
              </div>
            )}
            {formType.report && (
              <div>
                <ReportForm
                  setSubmitResponse={setSubmitResponse}
                  handleSubmit={handleSubmit}
                />
              </div>
            )}
          </div>
        )}

        {/* Submit Response */}
        {submitResponseVisible && (
          <div
            className={` bg-white text-black rounded py-1 px-4 text-center  font-semibold bottom-full max-w-[480px] message ${
              submitResponseVisible ? "visible" : ""
            }`}
          >
            {submitResponse}
            <svg
              className=" fixed  text-white h-2 md:right-4 right-3 md:bottom-[62px] bottom-[54px] mr-3  scale-[260%]"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        )}
        {/* All Buttons - select a type of feedback */}
        <div className={` ${formOpen ? "flex items-center" : ""}`}>
          {show && (
            <div
              className={` ${
                formOpen ? " items-center justify-center" : "flex-col"
              } ml-auto flex  gap-3`}
            >
              <SingleFeature
                formTypeName={"report"}
                setFormType={setFormType}
                setFormOpen={setFormOpen}
                formOpen={formOpen}
                Icon={Report}
                Desc={"Report an Issue"}
              />
              <SingleFeature
                formTypeName={"share"}
                setFormType={setFormType}
                setFormOpen={setFormOpen}
                formOpen={formOpen}
                Icon={Share}
                Desc={"Share Feedback"}
              />
              <SingleFeature
                formTypeName={"give"}
                setFormType={setFormType}
                setFormOpen={setFormOpen}
                formOpen={formOpen}
                Icon={Give}
                Desc={"Give Suggestion"}
              />
              <SingleFeature
                formTypeName={"contact"}
                setFormType={setFormType}
                setFormOpen={setFormOpen}
                formOpen={formOpen}
                Icon={Contact}
                Desc={"Contact Us"}
              />
            </div>
          )}
          <img
            onClick={() => {
              setShow(!show);
              setFormOpen(false);
            }}
            className={` w-16 md:block hidden   ml-auto ${
              formOpen ? " ml-[16px]" : "mt-3"
            } cursor-pointer`}
            src={show ? Close : Open}
            alt=""
          />
          <img
            onClick={() => {
              setShow(!show);
              setFormOpen(false);
            }}
            className={` w-14 md:w-16 md:hidden block  ml-auto ${
              formOpen ? " ml-[12px]" : "mt-3"
            } cursor-pointer`}
            src={show ? Close : MobileOpen}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
