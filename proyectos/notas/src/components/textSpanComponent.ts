import { createTag } from './dom';

export function createTextSpan(text: string): HTMLElement {
  const span = createTag('span', text, []);
  return span;
}
