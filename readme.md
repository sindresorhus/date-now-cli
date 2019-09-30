# date-now-cli [![Build Status](https://travis-ci.org/sindresorhus/date-now-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/date-now-cli)

> Prints the current date and time as a UNIX timestamp or custom format

Similar to the `date +%s` command, but cross-platform and prints milliseconds instead of seconds.


## Install

```
$ npm install --global date-now-cli
```

Or for a one-time run:

```
$ npx date-now-cli
```


## Usage

```
$ date-now --help

  Usage
    $ date-now

  Options
    --format=<string>, -f  Format the date

  Examples
    $ date-now
    1524733860619
    $ date-now --format='DD.MM.YYYY'
    26.04.2018

  See the date-fns docs for supported formats
```


## Related

- [date-fns](https://github.com/date-fns/date-fns) - Modern JavaScript date utility library


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
