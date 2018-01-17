# node-fishbowl

`node-fishbowl` was created as a communication tool between node and [Fishbowl Inventory](https://www.fishbowlinventory.com/).  Usage is as easy as:

```bash
npm install node-fishbowl --save
```

## Install

`node-fishbowl` can be used in two ways.  

Without Typescript:
```js
//Include
var Fishbowl = require('node-fishbowl');

//Create new instance
var fb = new Fishbowl({
    host: '127.0.0.1',
    IADescription: 'A node wrapper for Fishbowl Inventory',
    IAID: 2286,
    IAName: 'node-fishbowl',
    password: 'admin2',
    port: 28192,
    username: 'admin',
    bunyanLevel: 'debug'
});
```
If your javascript engine does not follow the new ES6 import model, you
will need to call the default export manually.

`var Fishbowl = require('node-fishbowl').default;`


With Typescript:
```js
//Include
import Fishbowl = require('node-fishbowl');

//Create new instance
var fb = new Fishbowl({
    host: '127.0.0.1',
    IADescription: 'A node wrapper for Fishbowl Inventory',
    IAID: 2286,
    IAName: 'node-fishbowl',
    password: 'admin2',
    port: 28192,
    username: 'admin',
    bunyanLevel: 'debug'
});
```

## Config
| Config Name | Description |
|:------------|:------------|
| host | The host that Fishbowl in installed on. |
| IADescription | The description for the Integrated App.  This will be stored/used in Fishbowl |
| IAID | The ID of this Integrated App. This will be stored/used in Fishbowl|
| IAName | The Name of this Integrated App. This will be stored/used in Fishbowl|
| password | The password of the user for the Integrated App. |
| port | The port number that Fishbowl is installed on. |
| username | The username of the user for the Integrated App. |
| bunyanLevel | The logging level of the library. |

## Usage

```js
//Example
fb.sendRequest({
    action: 'ApiCallName',
    params: {
      XMLKey1: XMLValue1,
      XMLKey2: XMLValue2
    }
});

//Call that can be used to test
fb.sendRequest({
    action: 'ExecuteQueryRq',
    params: {
      Query: 'select * from customer'
    }
});
```

### Formatting Values
There is also an option to format all values that get passed to Fishbowl. This was created
so that I could capitalize everything before sending, but could be used for all kinds of things.

```js

function capitalize(a) {
  return a.toUpperCase();   
}

fb.sendRequest({
    action: 'ApiCallName',
    params: {
      XMLKey1: XMLValue1,
      XMLKey2: XMLValue2
    },
    formatValues: capitalize
});

/* Will Send
  <XMLKey1>XMLVALUE1</XMLKey1>
  <XMLKey2>XMLVALUE2</XMLKey2> */
```




## Help!
This was a pain to get working.  There are a lot of quirks that I had to work through.  If you're having issues, open a ticket and I'll try to help as much as I can.  I also wrote a handful of hints in the Wiki but not in a clear format yet. Feel free to poke around there as well.   
