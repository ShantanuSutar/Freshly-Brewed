const Choose = () => {
  return (
    <div className=" flex flex-col">
      <label className=" font-medium text-[#4D4D4D]" htmlFor="sections">
        Choose a section
      </label>

      <select
        className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer outline-none"
        name="sections"
        id="sections"
      >
        <option
          className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer"
          value="interviewquestions"
        >
          Interview Questions
        </option>
        <option
          className="text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer"
          value="conceptcards"
        >
          Concept cards
        </option>
        <option
          className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer"
          value="practicequestions"
        >
          Practice Questions
        </option>
        <option
          className="text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer"
          value="quizzes"
        >
          Quizzes
        </option>
        <option
          className=" text-[#333333] font-medium bg-[#E0E0E0] border-[1px] border-[#CCCCCC] rounded-[5px] py-2 px-4 mt-2 cursor-pointer"
          value="other"
        >
          Other
        </option>
      </select>
    </div>
  );
};

export default Choose;
