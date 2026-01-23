import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";

export default function PermanentSidebarDrawer() {
  return (
    <Box sx={{ display: "flex" }}>

      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": { width: 240, position: "relative" }
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ p: 3 }}>
        Main Page Content Here
      </Box>
    </Box>
  );
}
