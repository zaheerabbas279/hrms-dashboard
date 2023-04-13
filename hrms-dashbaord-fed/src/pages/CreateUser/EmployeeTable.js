import React, { useMemo, useState } from "react";
import {
    useGlobalFilter,
    useTable,
    usePagination,
    useFilters,
} from "react-table";
import Data from "./mockTableData.json";
// import { COLUMNS } from "./columns";
import "../../style/tableStyle.scss";
import { GlobalFilter } from "../../utils/GlobalFilter";
import { ColumnFilter } from "../../utils/ColumnFilter";
import { Images } from "../../utils/images";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useFormik } from "formik";
// import { Input_element } from "../../components/input_field/Input_element";

export const EmployeeTable = () => {
    const [fieldData, setFieldData] = useState([]);

    const [isDisabled, setIsDisabled] = useState(true);

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
                Header: "Designation",
                accessor: "designation",
                Filter: ColumnFilter,
            },
            {
                Header: "Department",
                accessor: "department",
                Filter: ColumnFilter,
            },
            {
                Header: "Email",
                accessor: "email",
                Filter: ColumnFilter,
            },
            {
                Header: "Contact Number",
                accessor: "contact_number",
                Filter: ColumnFilter,
            },
            {
                Header: "View/Edit",
                accessor: "action",
                Cell: (tableProps) => (
                    <div>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <img
                                src={Images.viewIcon}
                                alt=""
                                id="editInventory"
                                className="editIcon mx-2"
                                onClick={() => { }}
                            />
                            <img
                                src={Images.editLogo}
                                alt=""
                                id="showinventoryHistory"
                                className="editIcon mx-2"
                            // onClick={() => handleShowHistory(tableProps.cell.row.original)}
                            />
                        </div>
                    </div>
                ),
            },
        ],
        []
    );
    const data = useMemo(() => Data);


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
            {/* <Modal show={show} onHide={handleClose}>
                <form onSubmit={formrik.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{fieldData.field_name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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
            </Modal> */}
        </>
    );
};
