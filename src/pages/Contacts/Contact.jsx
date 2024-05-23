import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import QueryForm from "../../components/QueryForm/QueryForm";

const Contact = () => {
  return (
    <div className="pt-[72px] w-full h-full">
      <div className="w-full h-full px-4 sm:px-[4rem] md:px-[10rem] pb-20">
      <h1 className="text-5xl font-Popins font-semibold pt-12 pb-4 text-start">
        Contact Us
      </h1>
        <div className="w-full shadow-lg bg-zinc-200 flex md:flex-row flex-col gap-14 justify-center items-start rounded-lg px-6 sm:px-20 py-8">
          <div className="w-full">
            <h1 className="font-semibold text-3xl tracking-wider py-4 mb-4">DTech Engineering</h1>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center justify-start gap-5">
                <FaUser className="text-3xl" />
                <div>
                  <h1 className="text-xl font-semibold" >Contact Person</h1>
                  <p className="text-sm">Mr. Deepak Kumar</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-5">
                <FaLocationDot className="text-3xl" />
                <div>
                  <h1 className="text-xl font-semibold" >Address</h1>
                  <p className="text-sm">Khasra No.1143, Major Asharan Tyagi Marg, Ghaziabad</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-5">
                <FaPhone className="text-3xl" />
                <div>
                  <h1 className="text-xl font-semibold" >Call Us</h1>
                  <p className="text-sm font-semibold">+91 8802056194</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-5">
                <MdOutlinePhoneAndroid className="text-3xl" />
                <div>
                  <h1 className="text-xl font-semibold" >Phone Number</h1>
                  <p className="text-sm font-semibold">+91 8802056194</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-5">
                <MdEmail className="text-3xl" />
                <div>
                  <h1 className="text-xl font-semibold" >Email</h1>
                  <p className="text-sm font-semibold">dtech.deepakkardem@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <QueryForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
