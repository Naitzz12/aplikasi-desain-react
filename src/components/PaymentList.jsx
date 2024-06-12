// Image
import Dana from "../assets/dana.png";
import Gopay from "../assets/gopay.png";
import OVO from "../assets/ovo.png";
import Paypal from "../assets/paypal.png";

const Payment = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-7 my-10">
      <div className="flex justify-center items-center gap-10 bg-slate-100 w-full py-6 relative">
        <h4 className=" absolute -top-4 -right-3 border rounded-s-full bg-slate-300 px-10 py-1">
          Payment
        </h4>
        <div className=" flex justify-center items-center flex-col relative">
          <img src={Gopay} alt="" className="w-12 drop-shadow-xl" />
          <p className=" text-xs">Gopay</p>
        </div>
        <div className=" flex justify-center items-center flex-col mt-2 relative">
          <img src={Paypal} alt="" className=" w-9" />
          <p className=" text-xs mt-1">Paypal</p>
        </div>
        <div className=" flex justify-center items-center flex-col mt-2 relative">
          <img src={Dana} alt="" className=" w-14" />
          <p className=" text-xs mt-1">Dana</p>
        </div>
        <div className=" flex justify-center items-center flex-col mt-2 relative">
          <img src={OVO} alt="" className=" w-9" />
          <p className=" text-xs mt-1">OVO</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
