import React from 'react';
import Icon from 'Components/Icon';

export const Columns = [
  {
    key: 'name',
    name: 'Member Name',
    type: 'text',
    renderCell: ({ value }) => (<h3>{value}</h3>),
    // width: '200px'
  },
  {
    key: 'band',
    helpText: 'What band are they known for?',
    name: 'Band',
    // width: '150px'
  },
  {
    key: 'alive',
    helpText: 'Is this person alive in 2017?',
    name: 'Still Kickin\'',
    // width: '120px',
    style: { textAlign: 'center', fontSize: '2em' },
    className: 'AliveColumn',
    renderCell: ({ value }) => (<Icon fa={value ? 'check-circle alive' : 'hand-peace-o dead'} />)
  },
  {
    key: 'instrument',
    name: 'Instrument',
    // width: '180px'
  },
  {
    key: 'song',
    name: 'Featured Song',
    type: 'html',
    // width: '500px'
  },
  {
    key: 'songYear',
    name: 'Featured Song Year',
    // width: '140px',
    style: { textAlign: 'center', fontSize: '2em' }
  }
];
