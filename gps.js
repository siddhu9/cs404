#!/usr/bin/env node
var b=require('bonescript');
var nmea =require('nmea');
var port ='/dev/tty04';
var options ={
baudrate: 9600,
parser: b.serialParsers.readline("\n")
};
b.serialOpen(port,options,onSerial);
function onSerial(x){
if(x.err){
       console.log('***ERROR***'+JSON.stringify(x));
}
           if(x.event =='open'){
console.log('***OPENED***');
}
 if(x.event =='data'){
console.log(String(x.data));
console.log(nmea.parse(x.data));
}
}
/usr/local/lib/node_modules/bonescript/serial.js:
exports.serialParsers =m.module.parsers;
