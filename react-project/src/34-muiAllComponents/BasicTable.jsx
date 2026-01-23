import {
  Table, TableHead, TableBody,
  TableRow, TableCell, Paper
} from "@mui/material";

export default function BasicTable() {

  const rows = [
    { id: 1, name: "Pavan", age: 24 },
    { id: 2, name: "Kumar", age: 28 },
    { id: 3, name: "Ravi", age: 30 }
  ];

  return (
    <Paper sx={{ width: 400 }}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </Paper>
  );
}
