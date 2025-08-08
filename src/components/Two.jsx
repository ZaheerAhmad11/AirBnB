import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const Two = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonfakery.com/carts")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Fetching Error:", error));
  }, []);

  const Aline = blogs.slice(1, 8);

  return (
    <div className="flex justify-center gap-2 w-full">
      {Aline.map((ablogs) => (
        <div
  key={ablogs.id}
  className="w-[14.2%] overflow-hidden bg-transparent"
>
  <div className="relative rounded-xl shadow-md overflow-hidden bg-white">
    <img
      className="w-full h-40 object-cover"
      src={ablogs.product.image}
      alt="image"
    />

    {/* Favorite Button - Top Left */}
    <button className="absolute top-1 left-1 bg-gray-300 text-white text-xs px-2 py-1 rounded shadow hover:bg-gray-400 z-10">
      Favorite
    </button>

    {/* Heart Icon - Top Right */}
    <span className="absolute top-1 right-1 bg-transparent p-1 rounded-full shadow hover:scale-110 transition cursor-pointer">
      <IoMdHeartEmpty className="text-base text-white" />
    </span>
  </div>

  {/* This part is now outside the card with transparent background */}
  <div className="p-2 bg-transparent ">
    <h3 className="text-sm font-semibold truncate">
      {ablogs.product.name}
    </h3>
    <p className="text-gray-600 text-xs mt-1 line-clamp-2">
      {ablogs.product.price}
    </p>
  </div>
</div>

      ))}
    </div>
  );
};

export default Two;
