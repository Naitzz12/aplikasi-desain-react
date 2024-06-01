const Bar = ({ toggleButton }) => {
  return (
    <>
      <div
        className="flex justify-center items-end flex-col gap-1"
        onClick={toggleButton}
      >
        <span className=" w-6 h-0.5 bg-black rounded-full"></span>
        <span className=" w-4 h-0.5 bg-cyan-500 rounded-full"></span>
        <span className=" w-5 h-0.5 bg-black rounded-full"></span>
      </div>
    </>
  );
};

export default Bar;
