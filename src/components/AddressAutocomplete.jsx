import React, { useRef } from "react";
import { Input } from "antd";
import { usePlacesWidget } from "react-google-autocomplete";
import { HomeOutlined } from "@ant-design/icons";

function AddressAutocomplete(props) {
  const inputRef = useRef(null);
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
    language: "en",
    onPlaceSelected: (place) => props.onChange(place?.formatted_address),
  });

  return (
    <Input
      {...props}
      placeholder="None"
      suffix={<HomeOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
      ref={(c) => {
        inputRef.current = c;
        if (c) ref.current = c.input;
      }}
    />
  );
}

export default AddressAutocomplete;
