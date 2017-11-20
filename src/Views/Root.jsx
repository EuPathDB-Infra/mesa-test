import React from 'react';

import Icon from 'Components/Icon';
import DemoTable from 'App/DemoTable';
import { startYear, endYear, yearRange, Rows } from 'Content/DataSet';
import { ModalBoundary } from '../../../Mesa';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ModalBoundary>
        <main>
          <h1 id="title">
            <Icon fa={'music'} />
            &nbsp;&nbsp;&nbsp;
            <span style={{ fontWeight: 200 }}>Mesa Demo:</span> Classic Rock Bands
          </h1>
          <h3 id="subtitle">
            <Icon fa={'clock-o'} />
            &nbsp;&nbsp;
            Featuring {Rows.length} musicians and songs from {startYear}–{endYear} ({yearRange} years)
          </h3>
          <DemoTable />
        </main>
      </ModalBoundary>
    );
  }
};

export default Root;
