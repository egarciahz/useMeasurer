import { RefObject } from 'react';
import { MeasuringOptions, Dimensions } from "./interfaces";
declare type Measurer = () => void;
declare function useMeasurer<T extends MeasuringOptions>(options: T[]): [{
    [K in T]: Dimensions[K];
}, RefObject<HTMLElement>, Measurer];
export default useMeasurer;
