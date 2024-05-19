const ProductCard = ({ title, partImg, desc }) => {
  return (
    <div>
      <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
        <div>
          <img className="group-hover:scale-110 w-full object-cover object-center h-60 duration-500" src={partImg} alt="parts-image" />
          {/* <div className={`group-hover:scale-110 w-full h-60 bg-[url("${partImg}")] bg-center bg-cover duration-500`}></div> */}
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-90 group-hover:bg-zinc-900"></div>
            <span className="text-xl font-bold">{title}</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
