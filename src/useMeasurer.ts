/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import useInstance from '@use-it/instance/dist/instance';
import { MeasuringOptions, Dimensions } from "./interfaces";
import getNodeRect from "./getNodeRect";

type Measurer = () => void;

function useMeasurer<T extends MeasuringOptions>(options: T[]): [{ [K in T]: Dimensions[K] }, React.RefObject<HTMLElement>, Measurer] {
    const self = useInstance<{ animFrameID: number | never }>({});
    const [mesure, setMeasure] = useState<any>({});
    const node = useRef<HTMLElement>(null);

    const measurer = useCallback<Measurer>(() => {
        if (node.current) {
            const measured = getNodeRect(node.current, options);
            self.animFrameID = window.requestAnimationFrame(() => {
                setMeasure(measured);
            });
        }
    }, [node.current]);

    var observer: ResizeObserver | null = useInstance(new ResizeObserver(measurer));

    useEffect(() => {
        if (node.current) {
            observer?.unobserve(node.current);
            observer?.observe(node.current);
        }

        return () => {
            window.cancelAnimationFrame(self.animFrameID);
            observer?.disconnect();
            observer = null;
        }
    }, [node.current]);

    return [mesure, node, measurer];
}

export default useMeasurer;
