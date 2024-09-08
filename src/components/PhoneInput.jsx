import React from "react";
import { Input } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const PhoneInput = (props) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    const onlyNumbers = value.replace(/\D/g, "");

    if (onlyNumbers.length > 12) {
      return; // Prevent more than 12 digits
    }

    const formattedNumber = onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{3,4})$/,
      "(+$1) $2-$3-$4"
    );

    props.onChange(formattedNumber);
  };

  return (
    <Input
      {...props}
      onChange={handleOnChange}
      suffix={<PhoneOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
      placeholder="None"
    />
  );
};

export default PhoneInput;
