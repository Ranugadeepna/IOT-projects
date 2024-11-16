import * as React from "react";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";

const Home: React.FunctionComponent = () => {
    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <DashboardCard title="Total Users" value="1,200" />
                <DashboardCard title="Revenue" value="$34,000" />
                <DashboardCard title="Orders" value="320" />
            </div>
            <div style={{ marginTop: "32px" }}>
                <Chart />
            </div>
        </div>
    );
};

export default Home;
