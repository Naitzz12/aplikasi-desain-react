import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const Discount = () => {
  var Settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" bg-blue-300">
      <h3>New Discount</h3>
      <Slider {...Settings}>
        <div>
          <h1>Hallo</h1>
        </div>
        <div>
          <h1>Hallo</h1>
        </div>
        <div>
          <h1>Hallo</h1>
        </div>
        <div>
          <h1>Hallo</h1>
        </div>
        <div>
          <h1>Hallo</h1>
        </div>
        <div>
          <h1>Hallo</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Discount;
