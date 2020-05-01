import { RefObject } from 'react';
import { MeasuringOptions, Dimensions, Measurer } from "./interfaces";
declare function useMeasurer<T extends MeasuringOptions>(options: T[]): [{
    [K in T]: Dimensions[K];
}, RefObject<HTMLElement>, Measurer];
export default useMeasurer;
