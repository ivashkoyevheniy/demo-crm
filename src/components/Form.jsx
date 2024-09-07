import React, { Fragment } from "react";
import {
  Col,
  Form as AntForm,
  Input,
  Row,
  Select,
  DatePicker,
  Skeleton,
} from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import ContentHeader from "./ContentHeader";
import dayjs from "dayjs";

const getFieldStyle = (index) => ({
  maxWidth: "none",
  fontWeight: 600,
  margin:
    index % 2 === 0 && index % 4 !== 0
      ? "0 8px"
      : index % 4 === 0
      ? "0 0 0 8px"
      : 0,
});

const FormItem = ({ name, index, ...props }) => {
  return <AntForm.Item style={getFieldStyle(index)} name={name} {...props} />;
};

function Form(props) {
  const {
    params,
    selectData,
    initialValues,
    title,
    titleStyle,
    loading,
    ...otherProps
  } = props;

  const getFieldType = (type, name) => {
    let field;
    switch (type) {
      case "select":
        field = (
          <Select placeholder="None">
            {selectData[name].map((option, index) => (
              <Select.Option key={`option_${index}`} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        );
        break;
      case "date":
        field = <DatePicker placeholder="None" style={{ width: "100%" }} />;
        break;
      case "email":
        field = (
          <Input
            type="email"
            placeholder="None"
            suffix={<MailOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          />
        );
        break;
      case "phone":
        field = (
          <Input
            placeholder="None"
            suffix={<PhoneOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          />
        );
        break;
      default:
        field = <Input placeholder="None" />;
        break;
    }
    return field;
  };

  const getFields = (params, field) =>
    params.map((item, index) => {
      const { name, label } = item;
      return (
        <Col key={index} span={6} style={{ paddingBottom: 24 }}>
          {loading ? (
            <div
              style={{
                ...getFieldStyle(index + 1),
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Skeleton.Input style={{ height: 16, marginBottom: 8 }} active />
              <Skeleton.Input active block />
            </div>
          ) : (
            <FormItem
              index={index + 1}
              name={field ? [field.name, name] : name}
              label={label}
            >
              {getFieldType(item?.type, item.name)}
            </FormItem>
          )}
        </Col>
      );
    });

  const validateInitialValues = (initialValues) => {
    if (initialValues?.forms) {
      const dateParams = params.filter((param) => param?.type === "date");

      initialValues.forms.forEach((values) =>
        dateParams.forEach((param) => {
          if (values?.[param.name])
            values[param.name] = dayjs(values[param.name], "YYYY-MM-DD");
        })
      );
      return initialValues;
    }
  };

  return (
    <AntForm
      layout="vertical"
      initialValues={validateInitialValues(initialValues)}
      {...otherProps}
    >
      <Row>
        {initialValues?.forms ? (
          <AntForm.List style={{ border: "none" }} name="forms">
            {(fields) =>
              fields.map((field, index) => (
                <Fragment key={`field_${index}`}>
                  <ContentHeader
                    style={{ width: "100%", ...titleStyle }}
                    title={
                      <span style={{ fontSize: 20 }}>{title + index}</span>
                    }
                  />
                  {getFields(params, field)}
                </Fragment>
              ))
            }
          </AntForm.List>
        ) : (
          <>
            {loading ? (
              <Skeleton.Input
                size="large"
                style={{ height: 24, width: 10, marginBottom: 28 }}
                active
                block
              />
            ) : (
              <ContentHeader
                style={{ width: "100%", ...titleStyle }}
                title={<span style={{ fontSize: 20 }}>{title}</span>}
              />
            )}

            {getFields(params)}
          </>
        )}
      </Row>
    </AntForm>
  );
}
export default Form;
