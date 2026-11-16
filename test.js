import test from 'node:test';
import assert from 'node:assert/strict';
import { renderTitle } from './index.js';

test('renders animated SVG and escapes text', () => {
  const svg = renderTitle('<Hello & team>');
  assert.match(svg, /<animate /);
  assert.match(svg, /&lt;Hello &amp; team&gt;/);
  assert.doesNotMatch(svg, /<Hello/);
});

test('rejects injected colors', () => assert.throws(() => renderTitle('Hi', { ink: 'red" onload="x' })));
