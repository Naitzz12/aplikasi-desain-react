import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <>
      <Link
        to={"/settings"}
        className="flex justify-center items-end flex-col gap-1 bg-gray-200 p-3 rounded-lg"
      >
        <span className=" w-6 h-0.5 bg-black rounded-full"></span>
        <span className=" w-4 h-0.5 bg-cyan-500 rounded-full"></span>
      </Link>
    </>
  );
};

export default Bar;
