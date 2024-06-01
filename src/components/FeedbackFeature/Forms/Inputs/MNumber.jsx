const MNumber = ({}) => {
  return (
    <div className=" flex gap-2 flex-col w-full">
      <label className=" font-medium text-[#4D4D4D]" htmlFor="number">
        Your Mobile number{" "}
      </label>
      <input
        placeholder="Enter your number"
        className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 placeholder:text-[#808080] placeholder:font-medium  outline-none"
        type="text"
        id="number"
      ></input>
    </div>
  );
};

export default MNumber;
