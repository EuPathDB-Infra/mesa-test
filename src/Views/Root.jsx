import React from 'react';

import Icon from 'Components/Icon';
import DemoTable from 'App/DemoTable';
import Header from 'App/Header';
import { startYear, endYear, yearRange, Rows } from 'Content/DataSet';
import { ModalBoundary } from '../../../Mesa';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const stats = { startYear, endYear, yearRange };
    return (
      <ModalBoundary>
        <main>
          <Header rows={Rows} stats={stats} />
          <DemoTable />
        </main>
      </ModalBoundary>
    );
  }
};

export default Root;
