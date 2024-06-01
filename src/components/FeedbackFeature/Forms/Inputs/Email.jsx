const Email = ({ setEmail, EmailLabel }) => {
  return (
    <div className=" flex gap-2 flex-col w-full">
      <label className=" font-medium text-[#4D4D4D]" htmlFor="email">
        {/* {Enter your email to receive an update} */}
        {EmailLabel} <span className=" text-red-500">*</span>
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your Email"
        className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 placeholder:text-[#808080] placeholder:font-medium  outline-none"
        type="email"
        id="email"
      ></input>
    </div>
  );
};

export default Email;
