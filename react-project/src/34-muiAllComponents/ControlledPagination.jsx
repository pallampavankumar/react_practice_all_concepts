import { useState } from "react";
import { Pagination, Typography } from "@mui/material";

export default function ControlledPagination() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        count={5}
        page={page}
        onChange={(e, value) => setPage(value)}
      />

      <Typography sx={{ mt: 2 }}>
        Current Page: {page}
      </Typography>
    </>
  );
}
