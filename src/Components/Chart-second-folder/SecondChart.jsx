import './SecondChart.css';

export const SecondChart = props => {
    let barFill = '0%';

    if (props.maxValue > 0) {
        barFill = Math.round(( props.value / props.maxValue) * 100 ) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="inner">
                <div className="fill" style={{height: barFill}}> </div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    )
};