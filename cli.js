#!/usr/bin/env node
'use strict';
const meow = require('meow');
const formatter = require('date-fns/format');
const terminalLink = require('terminal-link');

const termLink = terminalLink('date-fns', 'https://date-fns.org/v1.29.0/docs/format');
const cli = meow(`
      Usage
        $ date-now
      Options
        --format <format>, -f Get Formatted Output
      Examples
        $ date-now
          1524733860619 //Output
        $ date-now --format  "DD.MM.YYYY"
          26.04.2018 //Output
        For supported date formats please visit ${termLink}
    `, {
	flags: {
		format: {
			type: 'string',
			alias: 'f'
		}
	}
}
);
if ('format' in cli.flags) {
	const {format} = cli.flags;
	if (format) {
    console.log(formatter(new Date(), format));
	} else {
    console.log(`Please specify a format.Visit  ${termLink} for supported date formats`);
	}
} else {
  console.log(Date.now());
}

