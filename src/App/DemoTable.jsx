import React from 'react';
import { Mesa, MesaState, Utils } from '../../../Mesa';
import { Rows, Columns, Options } from 'Content/DataSet';

class DemoTable extends React.Component {
  constructor (props) {
    super(props);
    this.onSort = this.onSort.bind(this);
    this.onColumnReorder = this.onColumnReorder.bind(this);

    this.state = {
      columns: Columns,
      rows: Rows,
      options: Options,
      uiState: {
        sort: {
          columnKey: null,
          direction: 'asc'
        }
      }
    };
  }

  onSort ({ key }, direction) {
    const { state } = this;
    const { setSortColumnKey, setSortDirection } = MesaState;
    const updatedState = setSortDirection(setSortColumnKey(state, key), direction);
    this.setState(updatedState);
  }

  onColumnReorder (fromKey, toIndex) {
    const { moveColumnToIndex } = MesaState;
    const newState = moveColumnToIndex(this.state, fromKey, toIndex);
    return this.setState(newState);
  }

  render () {
    const { columns, rows, options, uiState } = this.state;
    const { onSort, onColumnReorder } = this;
    const eventHandlers = { onSort, onColumnReorder };
    const filteredRows = uiState && uiState.sort && uiState.sort.columnKey
      ? Utils.textSort(rows, uiState.sort.columnKey, uiState.sort.direction === 'asc')
      : rows;
    const props = { columns, rows, filteredRows, options, uiState, eventHandlers };
    const state = MesaState.create(props);

    return (
      <div className="DemoTable">
        <Mesa state={state} />
      </div>
    );
  }
};

export default DemoTable;
