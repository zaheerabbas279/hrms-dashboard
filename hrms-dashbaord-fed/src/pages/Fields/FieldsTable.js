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

export const FieldsTable = () => {
  const [show, setShow] = useState(false);
  const [fieldData, setFieldData] = useState([]);
  const [updatedData, setUpdatedData] = useState({
    field_name: "",
    type: "",
    length: "",
  });

  const formrik = useFormik({
    initialValues: {
      field_name: fieldData.field_name,
      type: fieldData.type,
      length: fieldData.length,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("formik udpated values are", values);
    },

    validate: (values) => {
      let errors = {};
      if (!values.field_name) {
        errors.field_name = "Field Name must not be empty!";
      }
      if (!values.type) {
        errors.type = "Type must not be empty!";
      }
      if (!values.length) {
        errors.length = "Length must not be empty!";
      }

      return errors;
    },
  });

  const handleShow = (data) => {
    console.log("dataaaaa", data);
    setShow(true);
    setFieldData(data);
    formrik.setFieldValue("field_name", data.field_name);
    formrik.setFieldValue("type", data.type);
    formrik.setFieldValue("length", data.length);
  };

  const [isDisabled, setIsDisabled] = useState(true);

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
        Header: "Field Name",
        accessor: "field_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Type",
        accessor: "type",
        Filter: ColumnFilter,
      },
      {
        Header: "Length",
        accessor: "length",
        Filter: ColumnFilter,
      },
      {
        Header: "Edit",
        accessor: "edit",
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
          {/* <div className="w-100 text-center mt-3 mb-1">
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
              <strong>
                {pageIndex + 1}
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
          </div> */}
        </div>
      </div>

      {/* Modal for the view field data */}
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={formrik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{fieldData.field_name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <label htmlFor="">Field Name</label> */}
            <Input_element
              type="text"
              input_label="Field Name"
              //   name={fieldData.field_name}
              name="field_name"
              handleChange={formrik.handleChange}
              handleBlur={formrik.handleBlur}
              value={formrik.values.field_name}
            />
            {formrik.touched.field_name && formrik.errors.field_name ? (
              <>
                <p className="mb-0 small text-danger">
                  {formrik.errors.field_name}
                </p>
              </>
            ) : null}
            <Input_element
              type="text"
              input_label="Field Type"
              //   name={fieldData.type}
              name="type"
              handleChange={formrik.handleChange}
              handleBlur={formrik.handleBlur}
              value={formrik.values.type}
            />
            {formrik.touched.type && formrik.errors.type ? (
              <>
                <p className="mb-0 small text-danger">{formrik.errors.type}</p>
              </>
            ) : null}
            <Input_element
              type="number"
              input_label="Field Length"
              name="length"
              //   name={fieldData.length}
              handleChange={formrik.handleChange}
              handleBlur={formrik.handleBlur}
              value={formrik.values.length}
            />
            {formrik.touched.length && formrik.errors.length ? (
              <>
                <p className="mb-0 small text-danger">
                  {formrik.errors.length}
                </p>
              </>
            ) : null}
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
        </form>
      </Modal>
    </>
  );
};
