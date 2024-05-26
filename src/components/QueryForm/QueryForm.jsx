
const QueryForm = () => {
  return (
    <div className="w-full h-full">
            <form className="flex flex-col gap-2 text-black">
              <label
                className="text-xl font-Popins cursor-pointer"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="px-4 border border-zinc-400 py-2 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
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
                className="px-4 py-2 border border-zinc-400 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
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
                className="px-4 py-2 border border-zinc-400 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
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
                className="rounded-md border border-zinc-400 p-2 text-[1.2rem] mb-2"
                rows={4}
                placeholder="write your enquiry..."
              ></textarea>
              <button className="w-[7rem] flex items-center bg-blue-600 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest hover:bg-blue-500 duration-300 hover:gap-2 hover:translate-x-3 text-xl">
                Send
                <svg
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
  )
}

export default QueryForm
