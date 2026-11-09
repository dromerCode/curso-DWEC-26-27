import { createTag } from './dom';

export function createHr(): HTMLElement {
  const hr = createTag('hr', '', []);
  return hr;
}
