import { useEffect, useState, useRef, useCallback, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import useInstance from '@use-it/instance';
import { MeasuringOptions, Dimensions, Measurer } from "./interfaces";
import getNodeRect from "./getNodeRect";


function useMeasurer<T extends MeasuringOptions>(options: T[]): [{ [K in T]: Dimensions[K] }, RefObject<HTMLElement>, Measurer] {
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
        if (node.current && observer) {
            observer.unobserve(node.current);
            observer.observe(node.current);
        }

        return () => {
            window.cancelAnimationFrame(self.animFrameID);
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        }
    }, [node.current]);

    return [mesure, node, measurer];
}

export default useMeasurer;
