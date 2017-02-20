/**
 Copyright © Oleg Bogdanov
 Developer: Oleg Bogdanov
 Contacts: https://github.com/wormen
 ---------------------------------------------
 */

const
    util = require( 'util' ),
    events = require('events')

class Core {
    constructor(){
        events.call(this)
    }


}
util.inherits(Core, events);

module.exports = new Core;