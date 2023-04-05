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
import { useFormik } from "formik";
import { Input_element } from "../../components/input_field/Input_element";
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
        Header: "Name",
        accessor: "emp_name",
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
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
      },
      {
        Header: "View",
        accessor: "view",
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
      //   {
      //     Header: "Farm Name",
      //     accessor: "farm_name",
      //     Filter: ColumnFilter,
      //   },
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
            <h5 className="text-light">Details</h5>

            <div className="row">
              <div className="col-md-6">
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">Employee Id</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag"> Employee Name</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag"> Leave Type</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">From</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">To</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">
                    {" "}
                    No of Paid Leaves
                  </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">
                    {" "}
                    No of UnPaid Leaves
                  </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">
                    {" "}
                    Available Leaves
                  </p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">Status</p>
                </div>
                <div className="my-2">
                  {rejected && (
                    <p className="mb-0 text-light modal_p_tag">Remarks</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">Emp0001</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">Jon Doe</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">Sick Leave</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">12/12/2023</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">12/12/2023</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">12</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">12</p>
                </div>
                <div className="my-2">
                  <p className="mb-0 text-light modal_p_tag">12</p>
                </div>
                <div className="my-2">
                  {/* // * radio buttons to approve and reject */}
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Accept"
                          className="text-light"
                          name="group1"
                          type={type}
                          id={`Accept`}
                          value="accept"
                          onChange={changeStatusForLeave}
                        />
                        <Form.Check
                          inline
                          label="Reject"
                          className="text-light"
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
                {/* //* show the reason of the leave is rejected */}
                <div className="my-2">
                  {rejected && (
                    // <p className="mb-0 text-light">
                    //   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    //   Pariatur, nobis.
                    // </p>
                    <textarea
                      name="reason"
                      id="reason"
                      cols="30"
                      rows="10"
                      placeholder="Enter the remark"
                      className="_reason_text_area"
                    ></textarea>
                  )}
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
