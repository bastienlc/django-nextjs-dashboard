import React from 'react';
import { getApiClient } from '@/lib/api';
import { Dashboard, DashboardProps } from '@/components/Dashboard';

export async function getServerSideProps() {
    const apiClient = await getApiClient();

    const [barResponse, lineResponse, pieResponse, candlestickResponse] = await Promise.all([
        apiClient.barChartData.barChartDataRetrieve(),
        apiClient.lineChartData.lineChartDataRetrieve(),
        apiClient.pieChartData.pieChartDataRetrieve(),
        apiClient.candlestickData.candlestickDataRetrieve(),
    ]);

    return {
        props: {
            barData: barResponse.data,
            lineData: lineResponse.data,
            pieData: pieResponse.data,
            candlestickData: candlestickResponse.data,
        }
    }
}

const DashboardPage = (props: DashboardProps) => {
    return <Dashboard {...props} />;
};

export default DashboardPage;
