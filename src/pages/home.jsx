import { Link } from "react-router-dom";
import Bar from "../components/bar";
import Slider from "react-slick";
import Image1 from "../assets/png1.png";
import ListMenu from "../components/ListMenu";
// import Discount from "../components/DiscountList";
import Payment from "../components/PaymentList";

// Icons
import Icon2 from "../components/icons/IconSearch";
import Github from "../components/icons/IconGithub";
// Icons

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" mt-24">
        <div className="relative mx-3 flex justify-between items-center flex-col gap-4 pb-10 bg-blue-900 p-4 border rounded-2xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <h1 className=" text-3xl text-cyan-500" id="Text_home1">
                Hi Naitzz!
              </h1>
              <p className=" text-xs text-white" id="Text_home2">
                Welcome To The Dash
              </p>
            </div>
            <Bar />
          </div>
          <hr className=" h-1 w-full bg-white rounded-full" />
          <div className="absolute mx-2 w-11/12 top-24">
            <input
              type="search"
              placeholder="Search Something.."
              className="w-full p-2 py-3 pl-11 rounded-full my-3 outline-none bg-gray-200 -z-10 text-xs shadow-xl"
            />
            <p className="absolute top-4 left-2">
              <Icon2 />
            </p>
          </div>
        </div>

        <ListMenu />
        <Slider {...settings} className=" m-3 rounded-xl mt-8">
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40 rounded-xl">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40 rounded-xl">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40 rounded-xl">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40 rounded-xl">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-col p-5 relative h-40 rounded-xl">
              <img
                src={Image1}
                alt=""
                className=" absolute left-0 right-0 top-0 bottom-0 -z-10 h-60 w-full object-cover rounded-2xl"
              />
              <h1 className=" top-0 font-extrabold text-4xl text-black z-10">
                Software Enginer
              </h1>
              <p className=" w-60 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, sint!
              </p>
              <Link
                to={"https://github.com/"}
                className=" absolute right-9 bottom-5 bg-black text-white rounded-full p-2"
              >
                <Github />
              </Link>
            </div>
          </div>
        </Slider>
        <Payment />
        {/* <Discount /> */}
      </div>
    </>
  );
};

export default Home;
