import React, { useMemo, useRef, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
  useExpanded,
} from "react-table";
import Data from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
// import "../../style/tableStyle.scss";
import "./leavestable.scss";
import { GlobalFilter } from "../../utils/GlobalFilter";
import { ColumnFilter } from "../../utils/ColumnFilter";
import { Images } from "../../utils/images";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const AllLeavesTable = () => {
  const [show, setShow] = useState(false);
  const [fieldData, setFieldData] = useState([]);
  const [rejected, setRejected] = useState(false);

  const [updatedData, setUpdatedData] = useState({
    field_name: "",
    type: "",
    length: "",
  });

  const renderRowSubComponent = React.useCallback(({ row }) => {
    // console.log("the row data", row.original);
    const leaves_data = row.original.leves_container.slice(1);
    // return (
    //   <>
    //     <div style={{}}>
    //       {/* <h6 className="text-light">Leaves Details</h6> */}

    //       <div className="text-start">
    //         <table className="text-center p-0 m-0">
    //           <tr>
    //             {/* <th>Emp Id</th> */}
    //             {/* <th>Name</th> */}
    //             <th>Leave Type</th>
    //             <th>From</th>
    //             <th>To</th>
    //             <th>No. of Days</th>
    //             <th>Status</th>
    //             <th>Action</th>
    //           </tr>
    //           <tr>
    //             <td>Sick Leave</td>
    //             <td>12/12/2023</td>
    //             <td>15/12/2023</td>
    //             <td>3</td>
    //             <td>pending</td>
    //             <td>
    //               <img
    //                 src={Images.editLogo}
    //                 alt=""
    //                 id="edit"
    //                 className="editIcon mx-2"
    //                 onClick={() => handleShow(row)}
    //               />
    //             </td>
    //           </tr>
    //         </table>
    //       </div>
    //     </div>
    //   </>
    // );
    return (
      <div>
        {/* if leaves is 0 */}
        {/* display no extra leaves */}
        {leaves_data.length <= 0 ? (
          <h1>no data</h1>
        ) : (
          <table>
            {leaves_data.map((value) => (
              <tr>
                <td>{value.leave_type}</td>
                <td>{value.from}</td>
                <td>{value.to}</td>
                <td>{value.num_day}</td>
                <td>{value.status}</td>
              </tr>
            ))}
          </table>
        )}
        {/* if leaves > 0 */}
        {/* display data */}
      </div>
    );
  }, []);

  const handleShow = (data) => {
    console.log("dataaaaa", data);
    setShow(true);
    setFieldData(data);
  };
  const goToSellerDetails = (data) => {
    console.log("data", data);
    handleShow(data);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const changeStatusForLeave = (e) => {
    if (e.target.value === "accept") {
      setRejected(false);
    } else {
      setRejected(true);
    }
  };

  const handleClose = () => {
    setUpdatedData({ ...updatedData, field_name: "", type: "" });
    setIsDisabled(true);
    setShow(false);
  };
  // const handleShow = () => setShow(true);
  // use the useMemo hook to ensure that the data is not created for every render
  //   const columns = useMemo(() => COLUMNS, []);
  const columns = React.useMemo(
    () => [
      // {
      //   Header: "",
      //   accessor: "expand",
      //   Cell: (tableProps) => {
      //     return (
      //       <>
      //         {tableProps.row.isExpanded ? (
      //           <>
      //             <img src={Images.down} alt="" className="exp_logo" />
      //           </>
      //         ) : (
      //           <>
      //             <img src={Images.right} alt="" className="exp_logo" />
      //           </>
      //         )}
      //       </>
      //     );
      //   },
      // },
      {
        Header: "Emp ID",
        accessor: "emp_id",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return <span>{cellProps.cell.row.original.emp_id}</span>;
        },
      },

      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return (
            <div className="NameCell">
              <span className="name_cell_data">
                {cellProps.cell.row.original.name}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Leave Type",
        accessor: "leave_type",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return (
            <div className="cellStyles">
              {cellProps.cell.row.original.leves_container.map((val) => (
                <span className="cell_data" style={{ display: "block" }}>
                  {val.leave_type}
                </span>
              ))}
            </div>
          );
        },
      },
      {
        Header: "From",
        accessor: "from",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return (
            <div className="cellStyles">
              {cellProps.cell.row.original.leves_container.map((val) => (
                <span className="cell_data" style={{ display: "block" }}>
                  {val.from}
                </span>
              ))}
            </div>
          );
        },
      },
      {
        Header: "To",
        accessor: "to",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return (
            <div className="cellStyles">
              {cellProps.cell.row.original.leves_container.map((val) => (
                <span className="cell_data" style={{ display: "block" }}>
                  {val.to}
                </span>
              ))}
            </div>
          );
        },
      },
      {
        Header: "No. of Days",
        accessor: "num_day",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          return (
            <div className="cellStyles">
              {cellProps.cell.row.original.leves_container.map((val) => (
                <span className="cell_data" style={{ display: "block" }}>
                  {val.num_day}
                </span>
              ))}
            </div>
          );
        },
      },
      // {
      //   Header: "Status",
      //   accessor: "status",
      //   Filter: ColumnFilter,
      // },
      {
        Header: "Approval action",
        accessor: "action",
        Filter: ColumnFilter,
        Cell: (cellProps) => {
          const leave = cellProps.cell.row.original.leves_container;
          // <>
          //   {tableProps.row.isExpanded ? (
          //     <>
          //       <img src={Images.down} alt="" className="exp_logo" />
          //     </>
          //   ) : (
          //     <>
          //       <img src={Images.left} alt="" className="exp_logo" />
          //     </>
          //   )}
          // </>
          return (
            <div className="cellStyles">
              {leave.map((val) => (
                <div className=" cell_data">
                  <img
                    src={Images.editLogo}
                    alt=""
                    id="edit"
                    className="editIcon mx-2"
                    onClick={() => handleShow(val)}
                  />
                </div>
              ))}
            </div>
          );
        },
      },
    ],
    []
  );
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
    useExpanded,
    usePagination
  );

  const { globalFilter, pageSize, pageIndex } = state;

  return (
    <>
      <div className="mt-5 mb-2 d-flex justify-content-between">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div>
          <select
            value={pageSize}
            className="selectTag"
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
      </div>
      <div className="text-center">
        <div className="table_scroll">
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
                  <>
                    <tr
                      {...row.getRowProps()}
                      // onClick={() => {
                      //   row.toggleRowExpanded(); // toggle row expand
                      // }}
                      style={{ color: "pink" }}
                    >
                      {row.cells.map((cell) => {
                        // const handler =
                        //   cell.column.Header != ""
                        //     ? () => goToSellerDetails(cell.row.original)
                        //     : null;
                        // console.log(cell.column.Header,'handler', handler);
                        return (
                          <td
                            {...cell.getCellProps()}
                            // onClick={handler}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                    {row.isExpanded ? (
                      <tr>
                        <td colSpan={2}></td>
                        <td colSpan={7}>{renderRowSubComponent({ row })}</td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-center mb-3">
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
              <strong>{pageIndex + 1}</strong>{" "}
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

      {/* Modal for the view field data */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave Application of {fieldData.emp_name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modalBody">
            <h5 className="font_color">Details</h5>

            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Employee Id:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">DB001</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Employee Name:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">Chandrahasa</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Leave Type:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">Paid leave</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">leave Days:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">01</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Leave From:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">04/29/2023</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Leave To:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">04/29/2023</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Available Sick Leaves:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">12</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Available Paid Leaves:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">12</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Available Client Leaves:</p>
              </div>
              <div className="col-6">
                <p className="mb-0 font_color">12</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end">
                <p className="mb-0 font_color">Status:</p>
              </div>
              <div className="col-6">
                <Form>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Accept"
                        className="font_color"
                        name="group1"
                        type={type}
                        id={`Accept`}
                        value="accept"
                        onChange={changeStatusForLeave}
                      />
                      <Form.Check
                        inline
                        label="Reject"
                        className="font_color"
                        name="group1"
                        type={type}
                        id={`Reject`}
                        value="reject"
                        onChange={changeStatusForLeave}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
            {rejected ? (
              <div className="row my-2">
                <div className="col-6 text-end">
                  <p className="mb-0 font_color">Remarks:</p>
                </div>
                <div className="col-6">
                  <textarea
                    name="reason"
                    id="reason"
                    cols="30"
                    rows="10"
                    placeholder="Enter the remark"
                    className="_reason_text_area w-100"
                  ></textarea>
                </div>
              </div>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            //   disabled={isDisabled}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
