#!/usr/bin/env node
import meow from 'meow';
import {format as formatter} from 'date-fns';
import terminalLink from 'terminal-link';

const link = terminalLink('date-fns', 'https://date-fns.org/docs/format');

const cli = meow(`
	Usage
	  $ date-now

	Options
	  --format=<string>, -f  Format the date

	Examples
	  $ date-now
	  1524733860619
	  $ date-now --format='dd.MM.yyyy'
	  11.08.2021

	See the ${link} docs for supported formats
`, {
	importMeta: import.meta,
	flags: {
		format: {
			type: 'string',
			alias: 'f',
		},
	},
});

const {format} = cli.flags;

console.log(format ? formatter(new Date(), format) : Date.now());

