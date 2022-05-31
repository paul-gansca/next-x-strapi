const Search = () => {
  return (
    <div className="pb-6">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-6 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-slate-100 focus:outline-none shadow-md shadow-gray-400/50"
          placeholder="Search Teams"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-4 bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          <div className="flex">
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="relative inline-flex justify-center items-center text-white bg-[#F26529] rounded-full h-4 w-4 text-[10px]">
              1
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
