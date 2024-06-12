import { Link } from "react-router-dom";

const BottomL = () => {
  return (
    <>
      <nav className="flex justify-center items-center fixed bottom-0 left-1 right-0 py-3 gap-10 bg-gray-300 w-11/12 m-3 rounded-2xl shadow-lg">
        <Link
          to={"/"}
          className=" hover:p-3 hover:bg-gray-400 transition transition-all rounded-full hover:-top-9 hover:left-7 hover:border hover:border-4 hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M224 120v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v52a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a16 16 0 0 1 4.69-11.31l80-80a16 16 0 0 1 22.62 0l80 80A16 16 0 0 1 224 120"
            />
          </svg>
        </Link>
        <Link className=" hover:p-3 hover:bg-gray-400 transition transition-all rounded-full hover:-top-9 hover:left-20 hover:border hover:border-4 hover:border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
            />
          </svg>
        </Link>
        <Link className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2.596 16.97q0-.697.36-1.198q.361-.5.97-.8q1.301-.62 2.584-.988q1.282-.369 3.086-.369t3.087.369t2.584.987q.608.3.969.801q.36.501.36 1.197v.608q0 .382-.299.71t-.74.328H3.636q-.44 0-.74-.299q-.299-.299-.299-.739zm15.777 1.646q.102-.239.163-.504q.06-.264.06-.535v-.654q0-.87-.352-1.641q-.351-.772-.998-1.324q.737.15 1.42.416t1.35.599q.65.327 1.019.837t.369 1.113v.654q0 .44-.3.74q-.298.298-.738.298zm-8.777-7.231q-1.237 0-2.118-.882t-.882-2.118t.882-2.12t2.118-.88t2.119.88t.881 2.12t-.881 2.118t-2.119.882m7.27-3q0 1.237-.882 2.118t-2.118.882q-.064 0-.162-.015t-.162-.031q.509-.623.781-1.382q.273-.758.273-1.575t-.285-1.56q-.286-.745-.769-1.391q.081-.029.162-.038t.162-.009q1.237 0 2.118.882t.882 2.118"
            />
          </svg>
        </Link>
        <Link className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
            />
          </svg>
        </Link>
        {/* <hr className=" absolute bottom-4 h-1 w-4/5 bg-black rounded-full" /> */}
      </nav>
    </>
  );
};

export default BottomL;
