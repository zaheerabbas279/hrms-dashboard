// import { format } from "date-fns";
import { ColumnFilter } from "../../utils/ColumnFilter";
import { Images } from "../../utils/images";
import '../../style/tableStyle.scss'
export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
    // Cell: ({ value }) => {
    //   return format(new Date(value), "dd/MM/yyyy");
    // },
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
          {/* <button className="btn btn-info mx-1">Edit</button>
          <button className="btn btn-danger mx-1">Delete</button> */}
          <img
            src={Images.editLogo}
            alt=""
            id="editInventory"
            className="editIcon mx-2"
            // onClick={() => handleShow(tableProps.cell.row.original)}
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
];
