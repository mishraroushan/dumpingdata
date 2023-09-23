import NoDataFound from "./NoDataFound";
import { TablePagination } from "@mui/material";

export default function Grid(props) {
  const rows = props.rows || [];
  const headerData = props.headerData || [];
  return (
    <>
      {props.isData ? (
        <div className="p-2 bg-orange-400">
          <div className="text-xs">
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, 40]}
              component="div"
              count={props.totalCount}
              rowsPerPage={props.limit}
              page={props.page}
              onPageChange={props.handlePageChange}
              onRowsPerPageChange={props.handleLimitChange}
            />
          </div>
          <div className=" overflow-x-auto bg-white relative ">
          <table className="w-full text-xs text-center ">
              <thead className="text-xs  uppercase bg-black text-white">
                <tr>
                  {headerData.map((item) => (
                    <td
                      className="px-4 py-2 border border-white"
                      scope="col"
                      key={item.key}
                    >
                      {item.label}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr className="even:bg-white odd:bg-gray-300" key={row}>
                    {row.map((item) => (
                      <td
                        className="px-4 py-2 border border-black"
                        scope="col"
                        key={item}
                      >
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
}
