# useMeasurer 

[![npm version](https://badge.fury.io/js/use-measurer.svg)](https://badge.fury.io/js/use-measurer)
[![dependencies Status](https://david-dm.org/egarciahz/useMeasurer/status.svg)](https://david-dm.org/egarciahz/useMeasurer)

Measure DOM nodes using a React Hook.

## Install

`npm install use-measurer --save`


## useMeasurer

**useMeasure** receives a key array with the following possible options.

The first value returned by the hook is an object, here are the measured properties.


Example

``` javascript
const [measuring, ...] = useMeasure(["client", "margin", ...]);
const { client, margin } = measuring;

```
> Note: the initial value of the measurements is an empty object


#### `client`

Adds the following to `client` returned in the first value of the array.

[clientTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop),
[clientLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft),
[clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth),
and
[clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight).

#### `offset`

Adds the following to `offset` returned in the first value of the array.

[offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop),
[offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft),
[offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth),
and
[offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight).

#### `scroll`

Adds the following to `scroll` returned in the first value of the array.

[scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop),
[scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft),
[scrollWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth),
and
[scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight).

#### `bounds`

Uses
[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
to calculate the element rect and add it to `bounds` returned in the first value of the array.

#### `margin`

Uses
[getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
to calculate margins and add it to `margin` returned in the first value of the array.

### Example

``` javascript
import React from "react";
import useMeasurer from "use-measurer";

function MyComponent(){
    const [measuring, nodeRef, forceMeasurementFn] = useMeasurer(["client","margin"]);


    return (
        <div ref={nodeRef} style={{ margin: 10, width: '100%', maxWidth: 500, height: 100, border: '2px solid black'  }}>
            <code>{JSON.stringfy(measuring)}</code>
            {measuring.client?.width > 300 ? <span>The managed node</span> : null}
        </div>
    )
}

export default MyComponent;

```