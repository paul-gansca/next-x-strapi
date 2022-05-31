import NextLink from "next/link";
import NextImage from "next/image";

const Tile = () => {
  return (
    <div>
      <NextLink href="/">
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-sm hover:bg-gray-100">
          <NextImage
            className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            width="150px"
            height="170px"
            src="https://placekitten.com/150/170"
            alt="Team picture"
          />
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 border-b border-slate-300">
              All Stars
            </h5>
            <p className="font-normal text-gray-700">Solaforce</p>
            <p className="font-normal text-gray-700">3 Members</p>
          </div>
        </div>
      </NextLink>
    </div>
  );
};

export default Tile;
