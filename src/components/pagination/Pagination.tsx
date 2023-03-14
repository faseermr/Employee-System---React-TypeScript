type PropType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
};

const Pagination: React.FC<PropType> = ({
  currentPage,
  setCurrentPage,
  pages,
}) => {
  return (
    <div>
      {" "}
      <ul className="pagination" style={{ cursor: "pointer" }}>
        <li className={currentPage == pages[0] ? "page-item disabled" : ""}>
          <a
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pages.map((number: any, idx: any) => {
          return (
            <li
              key={idx}
              className={
                currentPage == number ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => setCurrentPage(number)}>
                {number}
              </a>
            </li>
          );
        })}

        <li
          className={
            currentPage == pages[pages.length - 1]
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
