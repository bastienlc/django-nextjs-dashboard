'use client'

import { Chart } from "react-google-charts";
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { BarChartDataElement } from '@frontend/types/api/services/BarChartDataService';
import { LineChartDataElement } from '@frontend/types/api/services/LineChartDataService';
import { PieChartDataElement } from '@frontend/types/api/services/PieChartDataService';
import { CandlestickDataElement } from '@frontend/types/api/services/CandlestickDataService';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'
import styles from './Dashboard.module.css';

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
        <div className={styles.dashboardContainer}>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="#">My Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Charts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <h1 className={`text-center text-3xl font-bold my-4 ${styles.dashboardTitle}`}>Interactive Dashboard</h1>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className={`shadow-sm mb-4 ${styles.card}`}>
                            <Card.Body>
                                <Card.Title className="text-center">Bar Chart</Card.Title>
                                <BarChartComponent data={barData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className={`shadow-sm mb-4 ${styles.card}`}>
                            <Card.Body>
                                <Card.Title className="text-center">Line Chart</Card.Title>
                                <LineChartComponent data={lineData} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className={`shadow-sm mb-4 ${styles.card}`}>
                            <Card.Body>
                                <Card.Title className="text-center">Pie Chart</Card.Title>
                                <PieChartComponent data={pieData} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className={`shadow-sm mb-4 ${styles.card}`}>
                            <Card.Body>
                                <Card.Title className="text-center">Candlestick Chart</Card.Title>
                                <CandlestickChartComponent data={candlestickData} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
