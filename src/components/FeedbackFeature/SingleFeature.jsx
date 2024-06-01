const SingleFeature = ({
  setFormOpen,
  setFormType,
  formTypeName,
  formOpen,
  Icon,
  Desc,
}) => {
  const handleFormOpen = () => {
    setFormOpen(true);
    setFormType({
      report: false,
      share: false,
      give: false,
      contact: false,
      [formTypeName]: true,
    });
  };

  return (
    <div
      onClick={handleFormOpen}
      className={`  flex items-center gap-2 justify-end cursor-pointer`}
    >
      {!formOpen && (
        <span className=" text-black  font-medium text-[17px] bg-white py-[2px] px-3 rounded-[5px]">
          {Desc}
        </span>
      )}
      <img className=" md:w-16 w-14" src={Icon} alt="" />
    </div>
  );
};

export default SingleFeature;
