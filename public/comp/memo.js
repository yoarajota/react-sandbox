import { useMemo } from "react";

export default function Memo(props) {
    const c = props.arr

    const memoVal = useMemo(() => eCalc(c), [c]);    
    function eCalc(v) {
        var y = [];
        for (let i = 0; i < 40000; i++) {
            y[i] = v * i;
        }
        var a = '';
        for (let i = 0; i < y.length; i++) {
            a += y[i];
        }
        return a;
    };

    return (
        <div>
            {memoVal}
        </div>
    )
}
