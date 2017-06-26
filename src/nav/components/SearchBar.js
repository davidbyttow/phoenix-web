import React, { Component } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  letter-spacing: -0.1px;
  font-size: 40px;
  line-height: 1.33;
  margin-bottom: 0;
  margin-top: 18px;
  opacity: 0.9;
  border: 0;
  outline: none;
  color: black;
  
  ::placeholder {
    color: #ccc;
  }
`;

class SearchBar extends Component {
  render() {
    return (
      <SearchInput
        placeholder="Search for anything..." />
    );
  }
}

export default SearchBar;
