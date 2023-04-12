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
                Header: "First Name",
                accessor: "first_name",
                Filter: ColumnFilter,
            },
            {
                Header: "Last Name",
                accessor: "last_name",
                Filter: ColumnFilter,
            },
            {
                Header: "Email",
                accessor: "email",
                Filter: ColumnFilter,
            },
            {
                Header: "Date Of Birth",
                accessor: "date_of_birth",
                Filter: ColumnFilter,
            },
            {
                Header: "Age",
                accessor: "age",
                Filter: ColumnFilter,
            },
            {
                Header: "Country",
                accessor: "country",
                Filter: ColumnFilter,
            },
            {
                Header: "Phone",
                accessor: "phone",
                Filter: ColumnFilter,
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: (tableProps) => (
                    <div>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <img
                                src={Images.editLogo}
                                alt=""
                                id="editInventory"
                                className="editIcon mx-2"
                                onClick={() => { }}
                            />
                            <img
                                src={Images.deleteLogo}
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
                </div>
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
