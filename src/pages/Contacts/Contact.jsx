import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-[72px] w-full h-full">
      <h1 className="w-full text-4xl font-semibold font-Popins pt-12 pb-8 pl-[10rem] underline">
        Contact
      </h1>
      <div className="w-full h-full px-4 sm:px-[4rem] md:px-[10rem] pb-20">
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
          <div className="w-full">
            <form className="flex flex-col gap-2">
              <label
                className="text-xl font-Popins cursor-pointer"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                autoFocus
                className="px-4 py-2 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
                type="text"
                id="name"
                placeholder="Your name..."
              />
              <label
                className="text-xl font-Popins cursor-pointer"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="px-4 py-2 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
                type="email"
                id="email"
                placeholder="Your email..."
              />
              <label
                className="text-xl font-Popins cursor-pointer"
                htmlFor="Phone"
              >
                Phone / Mobile
              </label>
              <input
                className="px-4 py-2 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
                type="number"
                placeholder="Phone / Mobile..."
              />
              <label
                className="text-xl font-Popins cursor-pointer"
                htmlFor="enquiry"
              >
                Enquiry Details{" "}
              </label>
              <textarea
                id="enquiry"
                className="rounded-md p-2 text-[1.2rem] mb-2"
                rows={4}
              ></textarea>
              <button className="w-[7rem] flex items-center bg-blue-600 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest hover:bg-blue-500 duration-300 hover:gap-2 hover:translate-x-3 text-xl">
                Send
                <svg
                  class="w-5 h-5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
