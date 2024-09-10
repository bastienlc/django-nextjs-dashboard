'use client'

import { Chart } from "react-google-charts";
import { BarChartDataElement } from '@frontend/types/api/services/BarChartDataService';
import { LineChartDataElement } from '@frontend/types/api/services/LineChartDataService';
import { PieChartDataElement } from '@frontend/types/api/services/PieChartDataService';
import { CandlestickDataElement } from '@frontend/types/api/services/CandlestickDataService';

export type DashboardProps = {
    barData: BarChartDataElement[];
    lineData: LineChartDataElement[];
    pieData: PieChartDataElement[];
    candlestickData: CandlestickDataElement[];
};

export const BarChartComponent = ({ data }: { data: BarChartDataElement[] }) => {
    const chartData = [
        ["Label", "Value"],
        ...data.map(({ label, x }) => [label, x]),
    ];

    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={chartData}
        />
    );
};

export const LineChartComponent = ({ data }: { data: LineChartDataElement[] }) => {
    const chartData = [
        ["Label", "Value"],
        ...data.map(({ label, x }) => [label, x]),
    ];

    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="300px"
            data={chartData}
            options={{
                curveType: "function",
            }}
        />
    );
};

export const PieChartComponent = ({ data }: { data: PieChartDataElement[] }) => {
    const chartData = [
        ["Label", "Value"],
        ...data.map(({ label, x }) => [label, x]),
    ];

    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={chartData}
            options={{
                colors: ['#fc2403', '#4287f5', '#fcba03']
            }}
        />
    );
};

export const CandlestickChartComponent = ({ data }: { data: CandlestickDataElement[] }) => {
    const chartData = [
        ["Date", "Value", "", "", ""],
        ...data.map(({ x, open, low, high, close }) => [x, low, open, close, high]),
    ];

    return (
        <Chart
            chartType="CandlestickChart"
            width="100%"
            height="300px"
            data={chartData}
            options={{
                candlestick: {
                    fallingColor: { strokeWidth: 0, fill: "#a52714" },
                    risingColor: { strokeWidth: 0, fill: "#0f9d58" }
                }
            }}
        />
    );
};

export const Dashboard = ({ barData, lineData, pieData, candlestickData }: DashboardProps) => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
                <BarChartComponent data={barData} />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
                <LineChartComponent data={lineData} />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
                <PieChartComponent data={pieData} />
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2>
                <CandlestickChartComponent data={candlestickData} />
            </div>
        </div>
    );
};
