import React from 'react'

const FormModal = () => {
  return (
    <div className="w-full h-full">
            <form className="flex flex-col pt-5 gap-1 text-black">
              <label
                className="text-lg text-start font-Popins cursor-pointer"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                autoFocus
                className="px-4 border border-zinc-400 py-1 focus:border focus:border-blue-600 mb-4 text-lg rounded-md outline-none"
                type="text"
                id="name"
                placeholder="Your name..."
              />
              <label
                className="text-lg text-start font-Popins cursor-pointer"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="px-4 py-1 border border-zinc-400 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
                type="email"
                id="email"
                placeholder="Your email..."
              />
              <label
                className="text-lg text-start font-Popins cursor-pointer"
                htmlFor="Phone"
              >
                Phone / Mobile
              </label>
              <input
                className="px-4 py-1 border border-zinc-400 focus:border focus:border-blue-600 mb-4 text-xl rounded-md outline-none"
                type="number"
                placeholder="Phone / Mobile..."
              />
              <label
                className="text-lg text-start font-Popins cursor-pointer"
                htmlFor="enquiry"
              >
                Enquiry Details{" "}
              </label>
              <textarea
                id="enquiry"
                className="rounded-md border border-zinc-400 p-2 text-[1rem] mb-2"
                rows={3}
                placeholder="write your enquiry..."
              ></textarea>
              <button className='uppercase text-xl bg-blue-700 text-white px-2 py-2 rounded-md hover:bg-blue-600 active:scale-[0.9]'>
                sumbit
              </button>
            </form>
          </div>
  )
}

export default FormModal
