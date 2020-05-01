export interface VectorShape {
    top: number;
    left: number;
    width: number;
    height: number;
}
export interface Dimensions {
    client?: VectorShape;
    offset?: VectorShape;
    scroll?: VectorShape;
    bounds?: ClientRect;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export declare type MeasuringOptions = keyof Dimensions;
export interface Measurer {
    (): void;
}
