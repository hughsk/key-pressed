# key-pressed [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A simple [browserify](http://browserify.org/) module for telling whether or not
a given key has been pressed down.

## Usage

[![NPM](https://nodei.co/npm/key-pressed.png)](https://nodei.co/npm/key-pressed/)

### pressed(name) ###

Given a key's `name`, check if that key is currently being pressed down and
return either `true` or `false` accordingly.

For most keyboard characters you can simply pass their uppercase equivalent,
and the remaining special characters are listed in
[vkey](https://github.com/chrisdickinson/vkey/blob/ed364428f6327bddfffb92ca09b1ee15cc09456e/index.js#L6-L112).

## License

MIT. See [LICENSE.md](http://github.com/hughsk/key-pressed/blob/master/LICENSE.md) for details.
