import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./Sidebar.scss";

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  );
}

export default function TestSidebar({ items, depthStep, depth }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 240, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <div className="sidebarTest">
          <List disablePadding dense>
            {items.map((sidebarItem, index) => (
              <SidebarItem
                key={`${sidebarItem.name}${index}`}
                depthStep={depthStep}
                depth={depth}
                {...sidebarItem}
              />
            ))}
          </List>
        </div>
      </nav>
    </Box>
  );
}
