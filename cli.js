#!/usr/bin/env node
'use strict';
const meow = require('meow');
const formatter = require('date-fns/format');
const terminalLink = require('terminal-link');

const link = terminalLink('date-fns', 'https://date-fns.org/v1.29.0/docs/format');

const cli = meow(`
	Usage
	  $ date-now

	Options
	  --format=<string>, -f  Format the date

	Examples
	  $ date-now
	  1524733860619
	  $ date-now --format='DD.MM.YYYY'
	  26.04.2018

	See the ${link} docs for supported formats
`, {
	flags: {
		format: {
			type: 'string',
			alias: 'f'
		}
	}
});

const {format} = cli.flags;

console.log(format ? formatter(new Date(), format) : Date.now());

