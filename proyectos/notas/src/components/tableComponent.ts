import type { Student } from '../types/student';
import { createTextSpan } from './textSpanComponent';

export function createTable(students: Student[]): HTMLElement {
  const table = document.createElement('table');
  for (const student of students) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.append(createTextSpan(student.name));
    td2.append(createTextSpan(String(student.grade)));
    tr.append(td1, td2);
    table.append(tr);
  }
  return table;
}
