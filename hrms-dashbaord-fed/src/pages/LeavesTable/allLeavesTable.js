import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
} from "react-table";
import Data from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
import "../../style/tableStyle.scss";
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

  const handleShow = (data) => {
    console.log("dataaaaa", data);
    setShow(true);
    setFieldData(data);
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
      {
        Header: "Emp ID",
        accessor: "emp_id",
        Filter: ColumnFilter,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
      },
      {
        Header: "Leave Type",
        accessor: "leave_type",
        Filter: ColumnFilter,
      },
      {
        Header: "From",
        accessor: "from",
        Filter: ColumnFilter,
      },
      {
        Header: "To",
        accessor: "to",
        Filter: ColumnFilter,
      },
      {
        Header: "No. of Days",
        accessor: "num_day",
        Filter: ColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
      },
      {
        Header: "Approval action",
        accessor: "action",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                src={Images.editLogo}
                alt=""
                id="edit"
                className="editIcon mx-2"
                onClick={() => handleShow(tableProps.cell.row.original)}
              />
            </div>
          </div>
        ),
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
              <div className="col-6 text-end"><p className="mb-0 font_color">Employee Id :</p></div>
              <div className="col-6"><p className="mb-0 font_color">DB001</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Employee Name :</p></div>
              <div className="col-6"><p className="mb-0 font_color">Chandrahasa</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Leave Type :</p></div>
              <div className="col-6"><p className="mb-0 font_color">Paid leave</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">leave Days :</p></div>
              <div className="col-6"><p className="mb-0 font_color">01</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Leave From :</p></div>
              <div className="col-6"><p className="mb-0 font_color">04/29/2023</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Leave To :</p></div>
              <div className="col-6"><p className="mb-0 font_color">04/29/2023</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Available Sick Leaves :</p></div>
              <div className="col-6"><p className="mb-0 font_color">12</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Available Paid Leaves :</p></div>
              <div className="col-6"><p className="mb-0 font_color">12</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Available Client Leaves :</p></div>
              <div className="col-6"><p className="mb-0 font_color">12</p></div>
            </div>
            <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Status :</p></div>
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
            {rejected ? <div className="row my-2">
              <div className="col-6 text-end"><p className="mb-0 font_color">Remarks :</p></div>
              <div className="col-6">
                <textarea
                  name="reason"
                  id="reason"
                  cols="30"
                  rows="10"
                  placeholder="Enter the remark"
                  className="_reason_text_area"
                ></textarea>
              </div>
            </div> : null}
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
