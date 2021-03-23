import React, { useState, useRef } from 'react';
import {
  Select,
  SpanContainer,
  SpanSingleSelect,
  SpanSelectRendered,
  SpanSelectArrow,
  B,
  DropdownContainer,
  SelectDropdown,
  DropdownSearch,
  SelectResults,
  SelectOptions,
  SelectOption
} from './SelectBox.styles';

const SelectBox = ({ options, label }) => {
  const [dropdownOpen, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdownOpen);
  const [state, setState] = useState({
    value: 0,
    innerText: options[0],
    outerText: options[0]
  });
  const spanContainer = useRef(null);

  const handleChange = event => {
    const { value, innerText } = event.target;
    setState({ value, innerText });
  };

  const handleHover = event => {
    const { outerText } = event.target;
    setState(state => ({ ...state, outerText }));
  };

  const getWidth = () => {
    return spanContainer.current ? spanContainer.current.clientWidth : null;
  };

  return (
    <>
      <Select tabIndex="-1" aria-hidden="true">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
      <SpanContainer
        dir="ltr"
        onClick={toggle}
        tabIndex={0}
        ref={spanContainer}
      >
        <span className="selection">
          <SpanSingleSelect
            role="combobox"
            aria-controls="select"
            aria-haspopup="true"
            aria-expanded="false"
            tabindex="0"
            aria-labelledby="select2-kokx-container"
          >
            <SpanSelectRendered
              id="select2-kokx-container"
              role="textbox"
              aria-readonly="true"
              title="Select Department"
            >
              {state.value ? options[state.value] : label}
            </SpanSelectRendered>
            <SpanSelectArrow role="presentation">
              <B open={dropdownOpen} role="presentation"></B>
            </SpanSelectArrow>
          </SpanSingleSelect>
        </span>
        <DropdownContainer open={dropdownOpen}>
          <SelectDropdown
            open={dropdownOpen}
            style={{ width: `${getWidth()}px` }}
            tabIndex={dropdownOpen && 0}
          >
            <DropdownSearch />
            <SelectResults>
              <SelectOptions>
                {options.map((option, index) => (
                  <SelectOption
                    key={index}
                    ariaSelected={state.outerText === option}
                    tabIndex={dropdownOpen && 0}  
                    onClick={event => handleChange(event)}
                    value={index}
                    selected={state.innerText === option}
                    onMouseOver={event => handleHover(event)}
                  >     
                    {option}
                  </SelectOption>
                ))}
              </SelectOptions>
            </SelectResults>
          </SelectDropdown>
        </DropdownContainer>
      </SpanContainer>
    </>
  );
};

export default SelectBox;
