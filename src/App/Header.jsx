import React from 'react';
import Icon from 'Components/Icon';
import { HelpTrigger } from '../../../Mesa';

class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { rows, stats } = this.props;
    return (
      <header>
        <h1 id="title">
          <Icon fa={'music'} />
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontWeight: 200 }}>Mesa Demo:</span> Classic Rock Bands
        </h1>
        <h3 id="subtitle">
          <Icon fa={'clock-o'} />
          &nbsp;&nbsp;
          Featuring {rows.length} musicians and songs from {stats.startYear}–{stats.endYear} ({stats.yearRange} years)
          <HelpTrigger>Test!</HelpTrigger>
        </h3>
      </header>
    );
  }
};

export default Header;
