import { FaPlay } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex justify-center items-center bg-transparent h-16"> {/* 64px = 16 tailwind units */}
      <div className="relative flex justify-center items-center">
        {/* Outer Circle with Gradient Border */}
        {/* <div className="w-16 h-16  animate-spin-fast rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 p-1 ">
          <div className="w-full h-full bg-transparent rounded-full border-2 border-[rgba(0,0,0,0.2)] animate-spin"></div>
        </div> */}

        {/* Inner Circle with Gradient Border */}
        <div className="absolute animate-spin-slow  w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
          <div className="w-full h-full bg-transparent rounded-full border-2 border-[rgba(0,0,0,0.2)] animate-spin"></div>
        </div>

        {/* Play Button in the Center */}
        <div className="absolute w-8 h-8  bg-[rgba(0,0,0,0.2)] flex justify-center items-center rounded-full">
          <FaPlay className="text-[rgba(25,23,33,0.5)]  text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
