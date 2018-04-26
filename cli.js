#!/usr/bin/env node
'use strict';
const meow = require('meow');
const formatter = require('date-fns/format');

const DEFAULT_FORMAT = 'x';
const cli = meow(`
      Usage
        $ date-now
      Options
        --format <format>, -f Get Formatted Output
      Examples
        $ date-now
        $ date-now --format  "DD.MM.YYYY"
    `,
  {
    flags: {
      format: {
        type: 'string',
        alias: 'f'
      }
    }
  }
);
const format = cli.flags.format || DEFAULT_FORMAT;
console.log(formatter(new Date(), format))

