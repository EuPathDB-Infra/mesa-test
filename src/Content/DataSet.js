import React from 'react';
import Icon from 'Components/Icon';

import { Rows } from './Rows';
import { Columns } from './Columns';
import { Options } from './Options';

export const [ startYear, endYear] = Rows
  .map(({ songYear }) => songYear)
  .sort()
  .filter((y, i, l) => i === 0 || ++i === l.length);
export const yearRange = endYear - startYear;

export { Rows, Columns, Options };
