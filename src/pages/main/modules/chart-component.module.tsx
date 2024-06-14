import * as React from "react";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, lineElementClasses } from "@mui/x-charts/LineChart";

export default function LineChart() {
    return (
        <ResponsiveChartContainer
            margin={{ top: 2, left: 1, right: 10, bottom: 2 }}
            height={130}
            series={[
                {
                    type: "line",
                    data: [2, 30, 54, 20, 65, 5, 64, 30, 95, 25, 89, 100],
                },
            ]}
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            sx={{
                margin: "0 20px 0 0",
                "& .MuiChartAxis-root": {
                    display: "none",
                },
                "& .MuiChartGrid-root": {
                    display: "none",
                },
                [`& .${lineElementClasses.root}`]: {
                    stroke: "#f7f0f0",
                    strokeWidth: 3,
                },
            }}
        >
            <LinePlot />
        </ResponsiveChartContainer>
    );
}
