import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  usePagination,
  useFilters,
} from "react-table";
import "../../style/tableStyle.scss";
import { GlobalFilter } from "../../utils/GlobalFilter";
import { ColumnFilter } from "../../utils/ColumnFilter";
import { Images } from "../../utils/images";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Input_element } from "../../components/input_field/Input_element";

export const FieldsTable = (Data) => {

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
    // console.log("dataaaaa", data);
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
        Header: "Field Label Name",
        accessor: "field_label_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Input Type",
        accessor: "field_type",
        Filter: ColumnFilter,
      },
      {
        Header: "Input Length",
        accessor: "input_length",
        Filter: ColumnFilter,
      },
      {
        Header: "Field Required",
        accessor: "field_required",
        Filter: ColumnFilter,
      },
      {
        Header: "Select type Options",
        accessor: "select_options",
        Filter: ColumnFilter,
      },
      {
        Header: "Action",
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
              <img
                src={Images.deleteLogo}
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
  const data = useMemo(() => Data.Data);

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
      <div className="d-flex justify-content-between mb-2 mt-4">
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
      <div className="text-center table_scroll">
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
              lableClass="font_color"
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
              lableClass="font_color"
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
              lableClass="font_color"
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
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
