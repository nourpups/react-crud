import {useTotalPages} from "../../../hooks/useTotalPages";
import classes from "./NPagination.module.css"

export const NPagination = ({totalPages, page, changePage}) => {
  const pagesArray = useTotalPages(totalPages);

  return (
    <div className={classes.pageWrapper}>
      <div
        className={`${classes.page} ${page === 1 ? classes.disabled : ""}`}
        onClick={() => {
          console.log('oio')
          console.log(page)
          changePage(page - 1);
        }}
      >
        &lt;
      </div>
      {pagesArray.map((p) => (
        <div
          key={p}
          className={
            page === p ? `${classes.page} ${classes.pageCurrent}` : classes.page
          }
          onClick={() => changePage(p)}
        >
          {p}
        </div>
      ))}
      <div
        className={`${classes.page} ${page === totalPages ? classes.disabled : ""}`}
        onClick={() => changePage(page + 1)}
      >
        &gt;
      </div>
    </div>
  );
};
