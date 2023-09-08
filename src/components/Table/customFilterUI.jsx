import * as React from 'react';
export const CustomFilterUI = props => {
  const onChange = event => {
    const value = event.target.value === 'null' ? null : event.target.value === 'true';
    const {
      firstFilterProps,
    } = props;
    firstFilterProps.onChange({
      value,
      operator: 'eq',
      syntheticEvent: event.syntheticEvent
    });
  };
  return(
    <div>
      <div>Show items with value:</div>
      <input type="text" className="w-100" onChange={onChange} />
    </div>
  ) 
};