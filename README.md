# useMeasurer 

[![npm version](https://badge.fury.io/js/use-measurer.svg)](https://badge.fury.io/js/use-measurer)
[![Dependency Status](https://david-dm.org/egarciahz/use-measurer.svg)](https://david-dm.org/egarciahz/use-measurer)

Measure DOM nodes using a React Hook.

## Install
__________
`npm install use-measurer --save`


## useMeasure
_____________
**useMeasure** receives a key array with the following possible options.

Example

`useMeasure(["client", "margin", ...])`


#### `client`

Adds the following to `contentRect.client` returned in the child function.

[clientTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop),
[clientLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft),
[clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth),
and
[clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight).

#### `offset`

Adds the following to `contentRect.offset` returned in the child function.

[offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop),
[offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft),
[offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth),
and
[offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight).

#### `scroll`

Adds the following to `contentRect.scroll` returned in the child function.

[scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop),
[scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft),
[scrollWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth),
and
[scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight).

#### `bounds`

Uses
[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
to calculate the element rect and add it to `contentRect.bounds` returned in the
child function.

#### `margin`

Uses
[getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
to calculate margins and add it to `contentRect.margin` returned in the child
function.

### Example

``` javascript
import React from "react";
import useMeasurer from "use-measurer";

function MyComponent(){
    const [measuring, nodeRef, forceMeasure] = useMeasurer(["client","margin"]);


    return (
        <div ref={nodeRef} style={{ margin: 10, width: '100%', maxWidth: 500, height: 100, border: '2px solid black'  }}>
            <code>{JSON.stringfy(measuring)}</code>
            {measuring.client?.width > 300 ? <span>The managed node</span> : null}
        </div>
    )
}

export default MyComponent;

```