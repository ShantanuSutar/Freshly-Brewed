import { useState } from "react";
import Attach from "../../../../../public/assets/buttons/attach.png";
const Desc = ({ setMessage, Heading, attach }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className=" ">
      <h1 className=" text-[#4D4D4D] font-medium">
        {Heading} {Heading && <span className=" text-red-500">*</span>}
      </h1>
      <div className=" relative">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" Write here..."
          className=" z-20 relative mt-2 rounded-[5px] customTextArea w-full min-h-40  bg-[#E0E0E0] border-[1px] border-[#CCCCCC] p-2 placeholder:text-[#808080] placeholder:font-medium  outline-none"
        />
        {attach && (
          <div className=" z-30 absolute flex  items-center   bg-[#E0E0E0]  bottom-0 w-full justify-between px-3 ">
            <label
              htmlFor="file-input"
              className="cursor-pointer bg-[#C7C7C7] text-[#333333] font-semibold py-2 px-4 rounded hover:opacity-80 flex mb-2"
            >
              <img src={Attach} alt="" />
              <span className=" ml-1">Attach</span>
            </label>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {imagePreview && (
              <div className=" mb-2">
                <img
                  src={imagePreview}
                  alt="Selected"
                  className=" size-10 border border-gray-300 rounded"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Desc;
