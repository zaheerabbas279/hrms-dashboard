import React, { useMemo } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
} from "react-table";
import Data from "./mockTableData.json";
import { COLUMNS } from "./columns";
import "../../style/tableStyle.scss";
import { GlobalFilter } from "../../utils/GlobalFilter";

export const UsersTable = () => {
  // use the useMemo hook to ensure that the data is not created for every render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data);

  // create a table instance
  const {
    tableInstance,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  const { globalFilter, pageSize, pageIndex } = state;

  return (
    <>
      <div className="mt-3 mb-3">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <div className="text-center mt-3">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex align-items-center mb-3">
          <div>
            <select
              value={pageSize}
              className="selectTag mb-3 w-auto"
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              <option value="" disabled>
                Select
              </option>
              {[5, 10, 15, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div className="w-100 text-center mt-3 mb-1">
            <button
              className="mx-1 skipToBtn"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="mx-1 actionBtn"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Prev
            </button>
            <span className="mx-2 pageNumber">
              {/* Page{" "} */}
              <strong>
                {pageIndex + 1}
                {/* of {pageOptions.length} */}
              </strong>{" "}
            </span>
            <button
              className="mx-1 actionBtn"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              className="skipToBtn"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
