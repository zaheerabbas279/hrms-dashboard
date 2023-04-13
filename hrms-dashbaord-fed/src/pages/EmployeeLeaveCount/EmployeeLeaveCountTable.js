import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
  useRowSelect,
} from "react-table";
import Data from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
import "../../style/tableStyle.scss";
import { GlobalFilter } from "../../utils/GlobalFilter";
import { ColumnFilter } from "../../utils/ColumnFilter";
import { Images } from "../../utils/images";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Input_element } from "../../components/input_field/Input_element";
import Form from "react-bootstrap/Form";
import { Checkbox } from "../../utils/checkbox";

export const EmployeeLeaveCountTable = () => {
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
        Header: "Id",
        accessor: "emp_id",
        Filter: ColumnFilter,
      },
      {
        Header: "Employee Name",
        accessor: "emp_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Year",
        accessor: "year",
        Filter: ColumnFilter,
      },
      {
        Header: "Sick Leave",
        accessor: "sick_leave",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div className="w-100 d-flex align-items-center justify-content-center">
            <div className="sick_leave_inp_div">
              <Input_element defaultValue="0" />
            </div>
          </div>
        ),
      },
      {
        Header: "Left SL",
        accessor: "sick_leave_left",
        Filter: ColumnFilter,
      },
      {
        Header: "Client Leave",
        accessor: "client_leave",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div className="w-100 d-flex align-items-center justify-content-center">
            <div className="sick_leave_inp_div">
              <Input_element defaultValue="0" />
            </div>
          </div>
        ),
      },
      {
        Header: "Left CL",
        accessor: "client_leave_left",
        Filter: ColumnFilter,
      },
      {
        Header: "Paid Leave",
        accessor: "paid_leave",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div className="w-100 d-flex align-items-center justify-content-center">
            <div className="sick_leave_inp_div">
              <Input_element defaultValue="0" />
            </div>
          </div>
        ),
      },
      {
        Header: "Left PL",
        accessor: "paid_leave_left",
        Filter: ColumnFilter,
      },
      {
        Header: "LOP",
        accessor: "lop",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div className="w-100 d-flex align-items-center justify-content-center">
            <div className="sick_leave_inp_div">
              <Input_element defaultValue="0" />
            </div>
          </div>
        ),
      },
      {
        Header: "Update",
        accessor: "update",
        Filter: ColumnFilter,
        Cell: (tableProps) => (
          <div>
            <button className="btn btn-primary">Update</button>
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
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageSize, pageIndex } = state;
  console.log(
    "🚀 ~ file: EmployeeLeaveCountTable.js:172 ~ EmployeeLeaveCountTable ~ selectedFlatRows:",
    selectedFlatRows
  );

  return (
    <>
      <div className="mt-3 mb-3 d-flex align-items-center justify-content-between">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div>
          <select
            value={pageSize}
            className="selectTag w-auto"
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
      <div className="text-center mt-3 table_scroll">
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

        {/* <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre> */}
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

      {/* Modal for the view field data */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave Application of {fieldData.emp_name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modalBody">
            <h5 className="font_color">Details</h5>

            <div className="row">
              <div className="col-md-6">
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">Employee Id</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag"> Employee Name</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag"> Leave Type</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">From </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">To</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">
                    No of Paid Leaves
                  </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">
                    No of UnPaid Leaves
                  </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">
                    Available Leaves
                  </p>
                </div>
                {/* <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">Status</p>
                </div> */}
                <div className="my-2">
                  {/* {rejected && (
                    <p className="mb-0 font_color modal_p_tag">Remarks</p>
                  )} */}
                  {fieldData.status === "Approved" ? null : (
                    <>
                      <p className="mb-0 font_color modal_p_tag">Remarks</p>
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">Emp0001</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">Jon Doe</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">Sick Leave</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">12/12/2023</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">12/12/2023</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">12</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">12</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 font_color modal_p_tag">12</p>
                </div>
                {/* <div className="my-2">
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
                </div> */}
                {/* //* show the reason of the leave is rejected */}
                <div className="my-2">
                  {/* {rejected && ( */}
                  {/* // <textarea */}
                  {/* //   name="reason"
                    //   id="reason"
                    //   cols="30"
                    //   rows="10"
                    //   placeholder="Enter the remark"
                    //   className="_reason_text_area"
                    // ></textarea> */}
                  <>
                    {fieldData.status === "Approved" ? null : (
                      <>
                        <p className="text-light mb-0">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Vel, laudantium.
                        </p>
                      </>
                    )}
                  </>
                  {/* // )} */}
                </div>
              </div>
            </div>
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
