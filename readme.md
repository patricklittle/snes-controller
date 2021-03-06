# snes-controller

> snes-controller is a node package that exposes events for every button on the SNES controller.

This folk is specifically for the iBuffalo SNES Gampad

## Installation

```js
npm install snes-controller
```

## How to Use

Plug in your SNES controller and run the following code:

```js
var SNESController = require( 'snes-controller' );
var controller = new SNESController();
controller.connect();

controller.on( 'up:press', function() {
    console.log( 'up' );
} );
controller.on( 'down:press', function() {
    console.log( 'down' );
} );
controller.on( 'left:press', function() {
    console.log( 'left' );
} );
controller.on( 'right:press', function() {
    console.log( 'right' );
} );
controller.on( 'x:press', function() {
    console.log( 'x' );
} );
controller.on( 'y:press', function() {
    console.log( 'y' );
} );
controller.on( 'a:press', function() {
    console.log( 'a' );
} );
controller.on( 'b:press', function() {
    console.log( 'b' );
} );
controller.on( 'l:press', function() {
    console.log( 'L' );
} );
controller.on( 'r:press', function() {
    console.log( 'R' );
} );
controller.on( 'start:press', function() {
    console.log( 'start:press' );
} );
controller.on( 'start:release', function() {
    console.log( 'start:release' );
} );
controller.on( 'slect:press', function() {
    console.log( 'selct' );
} );
```

## Support

This library is being built for the iBuffalo Classic USB Gamepad

## License

The MIT License (MIT)

Copyright (c) 2014 Carl Danley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
