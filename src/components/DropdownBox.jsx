import axios from "axios";
import React, { useState, Fragment } from "react";
import { Spinner } from "reactstrap";
import AsyncSelect from "react-select/async";

const DropdownBox = () => {
  const [selectdata, setSelectdata] = useState([]);
  const [isloading, setisloading] = useState(true);

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const fetchUsers = async () => {
    const result = await axios.get("https://reqres.in/api/users?page=1");
    const res = result.data.data;
    return res;
  };

  console.log("select", selectdata.data);
  return (
    <Fragment>
      <div className="select">
        <AsyncSelect
          cacheOptions
          defaultOptions
          isLoading
          isMulti
          value={selectedValue}
          getOptionLabel={(e) => e.first_name + " " + e.last_name}
          getOptionValue={(e) => e.id}
          loadOptions={fetchUsers}
          onInputChange={handleInputChange}
          onChange={handleChange}
        ></AsyncSelect>
      </div>
    </Fragment>
  );
};

export default DropdownBox;
