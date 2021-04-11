import React, { useState } from 'react';
import { Input } from 'reactstrap';
import dateFormat from 'dateformat';

const getValidDate = date => dateFormat(date, 'yyyy-mm-dd');

const DatePicker = ({ date, onChange }) => {
  const [today, setDate] = useState();
  const setTodaysDate = date => setDate(getValidDate(date));

  return (
    <>
      <Input
        type="date"
        defaultValue={date ? getValidDate(date) : today}
        onChange={onChange}
        onClick={() => setTodaysDate(today)}
      />
    </>
  );
};

export default DatePicker;
