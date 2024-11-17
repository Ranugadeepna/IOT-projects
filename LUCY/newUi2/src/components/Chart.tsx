import * as React from "react";
import { Line } from "react-chartjs-2";

const Chart: React.FunctionComponent = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Sales",
                data: [12, 19, 3, 5, 2],
                borderColor: "#3e95cd",
                fill: false,
            },
        ],
    };

    return <Line data={data} />;
};

export default Chart;
