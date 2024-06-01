const Name = ({ setName }) => {
  return (
    <div className=" flex gap-2 flex-col w-full">
      <label className=" font-medium text-[#4D4D4D]" htmlFor="name">
        Your Name
        <span className=" text-red-500"> *</span>
      </label>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 placeholder:text-[#808080] placeholder:font-medium outline-none"
        type="text"
        id="name"
      ></input>
    </div>
  );
};

export default Name;
