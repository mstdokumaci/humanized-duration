# humanized-duration
Display durations in short yet human readable way.

## How to install

### npm
```sh
npm install humanized-duration
```

### bower
```sh
bower install humanized-duration
```

## How to use

### NodeJS
```js
var humanized_duration = require('humanized-duration');
```

### Browser
```js
var humanized_duration = window.humanized_duration;
```

## Examples

```js
humanized_duration(59 * 1000) // 59s
humanized_duration(60 * 1000) // 1m

humanized_duration((58 * 60 + 59) * 1000) // 58m 59s
humanized_duration((58 * 60 + 60) * 1000) // 59m

humanized_duration((59 * 60 + 59) * 1000) // 59m 59s
humanized_duration((59 * 60 + 60) * 1000) // 1h

humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000) // 6d 23h
humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 60) * 1000) // 1w

humanized_duration((5 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000, 3) // 5d 23h 59m
humanized_duration((6 * 24 * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000, 4) // 6d 23h 59m 59s
```
