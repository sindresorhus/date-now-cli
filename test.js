import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.regex(stdout, /\d+/);
});

test('format option', async t => {
	const {stdout} = await execa('./cli.js', ['--format', 'yyyy']);
	const expectedOut = new Date().getFullYear();
	t.is(Number(stdout), expectedOut);
});
