var util = require( 'util' );
var HID = require( 'node-hid' );
var EventEmitter = require( 'events' ).EventEmitter;

module.exports = Controller;
util.inherits( Controller, EventEmitter );

function Controller() {
    EventEmitter.call( this );
    this._config = {};
    this._buttonStates = {};
    process.on( 'exit', this.disconnect.bind( this ) );
}

Controller.prototype.loadConfiguration = function() {
    this._config = require( './gamepad.json' );
    var buttons = this._config.buttons;
    for( var i = 0, len = buttons.length; i < len; i++ ) {
        this._buttonStates[ buttons[ i ].name ] = false;
    }
};

Controller.prototype.connect = function() {
    this.emit( 'connecting' );
    this.loadConfiguration();
    this._usb = new HID.HID( this._config.vendorID, this._config.productID );
    this.emit( 'connected' );

    this._usb.on( 'data', this._processFrames.bind( this ) );
};

Controller.prototype.disconnect = function() {
    if( this._usb ) {
        this._usb.close();
    }
};

Controller.prototype._processFrames = function( data ) {
    var buttons = this._config.buttons, button, isPressed, currentState;
    // check all of the buttons now
    for( var i = 0, len = buttons.length; i < len; i++ ) {
        button = buttons[ i ];
        isPressed = ( data[ button.block ] & 0xff ) === button.value;
        currentState = this._buttonStates[ button.name ];
        if( isPressed && currentState !== isPressed ) {
            this.emit( button.name + ':press' );
        } else if( ! isPressed && currentState !== isPressed ) {
            this.emit( button.name + ':release' );
        }

        this._buttonStates[ button.name ] = isPressed;
    }

};