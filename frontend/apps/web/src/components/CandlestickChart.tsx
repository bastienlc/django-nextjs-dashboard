import { XAxis, YAxis, Tooltip, LineChart, Line, ErrorBar, ResponsiveContainer, Cell } from 'recharts';
import { CandlestickDataElement } from '@frontend/types/api/services/CandlestickDataService';


/* Basic Candlestick chart as recharts does not implement one. Todo:
- Add fill color depending on direction
- Remove unused labels
- Fix ticks on x-axis */
export const CandlestickChart = (props: { candlestickData: CandlestickDataElement[] }) => {
    const data = props.candlestickData.map(({ x, open, high, low, close }, index) => {
        const err1 = (high - open) / 2
        const err2 = (low - open) / 2
        const err3 = (close - open) / 2

        return {
            position: index,
            x: x,
            open: open,
            close: close,
            high: high,
            low: low,

            err1: err1,
            ref1: open + err1,
            err2: err2,
            ref2: open + err2,
            err3: err3,
            ref3: open + err3,

            fill: close > open ? "#eb4034" : "#348ceb",
        };
    });

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="position" type="number" />
                <YAxis dataKey="open" />
                <Tooltip />
                <Line dataKey={"open"} strokeWidth={0} />
                <Line dataKey={"close"} strokeWidth={0} />
                <Line dataKey={"high"} strokeWidth={0} />
                <Line dataKey={"low"} strokeWidth={0} />
                <Line dataKey={"ref1"} strokeWidth={0}>
                    <ErrorBar dataKey="err1" direction="x" width={0} />
                </Line>
                <Line dataKey={"ref2"} strokeWidth={0} >
                    <ErrorBar dataKey="err2" direction="x" width={0} />
                </Line>
                <Line dataKey={"ref3"} strokeWidth={0} >
                    <ErrorBar dataKey="err3" direction="x" width={4} strokeWidth={4} />
                </Line>
            </LineChart>
        </ResponsiveContainer >
    );
}
