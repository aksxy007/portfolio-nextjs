import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"></Image>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2  md:h-full md:w-1/2 flex flex-col md:gap-8 gap-4 items-start justify-center">
        {/* TITLE */}
        <h1 className="text-2xl md:text-4xl font-bold">Crafting Digital Experiences,Desinging Tomorrow.</h1>
        {/* DESC */}
        <p className="sm:text-sm md:text-lg">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse colllection of projects that relect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-3 rounded-lg ring-1 ring-black" >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
