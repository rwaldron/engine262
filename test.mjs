import { NonSpecRunScript } from './lib/engine.mjs';

/*
[
  'try { throw new Error("hi!"); } catch (e) { print(e.message); }',
  'print(ReferenceError.name);',
].forEach((sourceText) => {
  NonSpecRunScript(sourceText);
});
*/

NonSpecRunScript(`
const a = 1;

print(a);
`);
