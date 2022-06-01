import NextImage from "next/image";

const Banner = () => {
  return (
    <div className="p-4 mb-6 w-full bg-white rounded-lg border shadow-md sm:p-8">
      <div className="text-left mb-4">
        <svg
          className="w-6 h-6 inline-block mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="align-bottom font-medium text-xl">Back</span>
      </div>
      <div className="min-w-full flex flex-col">
        {/* <NextImage
          classes="object-cover rounded-t-lg md:rounded-none min-w-full md:rounded-l-lg"
          image={cardImage}
        /> */}
        <NextImage
          className="object-cover rounded-lg min-w-full"
          width="800px"
          height="300px"
          src="https://placekitten.com/800/300"
        />
        <h5 className="text-2xl font-bold tracking-tight self-start mt-4 text-gray-800">
          All stars - Perugo
        </h5>
      </div>
    </div>
  );
};

export default Banner;
