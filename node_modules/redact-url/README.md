# redact-url [![Build Status](https://travis-ci.org/zeke/redact-url.png?branch=master)](https://travis-ci.org/zeke/redact-url)

Redact or remove authentication data from URLs

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install redact-url --save
```

## Usage

```js
var redact = require('redact-url');

// u:p style
redact('https://suzy:secrets@example.com');
// https://REDACTED@example.com

// sketchy query params
redact('https://example.com/password=1');
// https://example.com/password=REDACTED

// optional replacment string
redact('https://example.com/password=1', 'XXX');
// https://example.com/password=XXX

// clean URLs are untouched
redact('https://no-auth-stuff-here.com');
// https://no-auth-stuff-here.com

// non-URLs are untouched
redact("this is not a url");
// this is not a url
```

## Tests

```sh
npm install
npm test
```

## License

MIT

Zeke Sikelianos &lt;zeke@sikelianos.com&gt; (http://zeke.sikelianos.com/)
