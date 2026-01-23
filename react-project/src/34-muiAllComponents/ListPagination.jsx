import { useState } from "react";
import { Pagination, List, ListItem } from "@mui/material";

const items = ["A","B","C","D","E","F","G","H","I","J"];

export default function ListPagination() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = items.slice(start, end);

  return (
    <>
      <List>
        {paginatedItems.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>

      <Pagination
        count={Math.ceil(items.length / itemsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
}
