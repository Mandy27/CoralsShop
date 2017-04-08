import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Dropdown extends Component {
  render() {
    var content = this.props.data.map(function(item, i){
        return (<MenuItem key={i}>{item}{' '}</MenuItem>);
    });
    return (
        <DropdownButton title={this.props.title} bsSize="small" id={this.props.id+"-custom-dropdown"}>
        {content}
        </DropdownButton>
    );
  }
}

export default Dropdown;