'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { BarChartDataElement } from '@frontend/types/api/services/BarChartDataService';
import { LineChartDataElement } from '@frontend/types/api/services/LineChartDataService';
import { PieChartDataElement } from '@frontend/types/api/services/PieChartDataService';
import { CandlestickDataElement } from '@frontend/types/api/services/CandlestickDataService';
import { CandlestickChart } from './CandlestickChart';

export type DashboardProps = {
    barData: BarChartDataElement[];
    lineData: LineChartDataElement[];
    pieData: PieChartDataElement[];
    candlestickData: CandlestickDataElement[];
};

export const Dashboard = ({ barData, lineData, pieData, candlestickData }: DashboardProps) => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="x" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="x" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} dataKey="x" nameKey="label" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={['#eb4034', '#348ceb', '#ffc658'][index % 3]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Candlestick Chart</h2>
                <CandlestickChart candlestickData={candlestickData} />
            </div>
        </div>
    );
};
