interface INavigation {
  currentPage: number;
  totalPages: number;
  nextPage: () => false | Promise<void> | void;
  prevPage: () => false | Promise<void> | void;
}

const Navigation = ({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
}: INavigation) => {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <button
        onClick={prevPage}
        disabled={currentPage <= 1}
        className={`px-4 py-2 rounded-lg font-medium ${
          currentPage <= 1
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-[#97ce4c] hover:bg-[#96d440] text-[#f8f8f8]"
        }`}
      >
        Previous
      </button>

      <span className="font-semibold text-[#f8f8f8]">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 rounded-lg font-medium ${
          currentPage >= totalPages
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-[#97ce4c] hover:bg-[#96d440] text-[#f8f8f8]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
