import Bar from "../components/bar";

// Icons
import Icon2 from "../components/icons/IconSearch";
// Icons

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

const Home = () => {
  return (
    <>
      <div className=" mt-24">
        <div className="flex justify-between items-center mx-5 ">
          <div className="flex flex-col">
            <h1 className=" text-3xl text-cyan-500" id="Text_home1">
              Hi Naitzz!
            </h1>
            <p className=" text-xs text-black" id="Text_home2">
              Welcome To The Dash
            </p>
          </div>
          <Bar />
        </div>
        <div className="relative mx-2">
          <input
            type="search"
            placeholder="Search Something.."
            className="w-full p-2 pl-11 rounded-full my-3 outline-none bg-gray-200 -z-10"
          />
          <p className="absolute top-4 left-2">
            <Icon2 />
          </p>
        </div>
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            width: 900,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
        >
          <SplideSlide>
            <h1>Test1</h1>
          </SplideSlide>
          <SplideSlide>
            <h1>Test2</h1>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Home;
