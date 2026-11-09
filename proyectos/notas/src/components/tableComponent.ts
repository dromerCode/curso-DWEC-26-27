import type { Student } from '../types/student';
import { createTag } from './dom';
import { createTextSpan } from './textSpanComponent';

export function createTable(students: Student[]): HTMLElement {
  const table = createTag('table', '', []);
  for (const student of students) {
    const tr = createTag('tr', '', []);
    const td1 = createTag('td', '', []);
    const td2 = createTag('td', '', []);
    td1.append(createTextSpan(student.name));
    td2.append(createTextSpan(String(student.grade)));
    tr.append(td1, td2);
    table.append(tr);
  }
  return table;
}
