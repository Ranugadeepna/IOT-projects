import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface IDashboardCardProps {
    title: string;
    value: string | number;
}

const DashboardCard: React.FunctionComponent<IDashboardCardProps> = ({ title, value }) => {
    return (
        <Card style={{ margin: "16px", textAlign: "center" }}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h4">{value}</Typography>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
