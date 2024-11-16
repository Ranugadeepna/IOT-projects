import * as React from "react";
import { IWidgetProps } from "../index";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar: React.FunctionComponent<IWidgetProps> = () => {
    return (
        <div style={{ width: "250px", backgroundColor: "#f4f5f7", height: "100vh" }}>
            <h2 style={{ padding: "16px" }}>Dashboard</h2>
            <List>
                <ListItem component="div">
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component="div">
                    <ListItemIcon><BarChartIcon /></ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItem>
                <ListItem component="div">
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
