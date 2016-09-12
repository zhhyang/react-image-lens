# Getting started
## Install

```
npm install --save 
```
## Usage Example

```
import React from 'react'
import {render} from 'react-dom'
import ReactImageLens from '../dist/index'
import midSrc from './mid/01.jpg'
import bigSrc from './big/01.jpg'

render(
    <ReactImageLens
        image={{
          src: midSrc,
          width: 400,
          height: 400
        }}
        zoomImage={{
          src: bigSrc,
          width: 800,
          height: 800
        }}
    />
    ,
    document.getElementById('root')
) 
```

## Demo
```
npm dev
```

then open browser http://localhost:8080/