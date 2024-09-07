import React, { useEffect, useState } from "react";
import { ContentHeader, Tabs, Form } from "../components";
import { Button, Form as AntForm, Skeleton, Grid } from "antd";
import { useLocation } from "react-router-dom";
import {
  applicationsPreparationsTabsParams,
  applicationsTabsParams,
} from "../params/tabsParams";
import PropgressBar from "../components/ProgressBar";
import { applicationsProgressItems } from "../params/progressParams";
import { applicationPreparationFormParams } from "../params/formParams";
import fetchMockData from "../__mocks__/fetchMockData";

const { useBreakpoint } = Grid;

function ApplicationDetails() {
  const [form] = AntForm.useForm();
  const { pathname } = useLocation();
  const screens = useBreakpoint();
  const [isFormActive, setFormActive] = useState(false);
  const [data, setData] = useState();

  const setLocalStorageData = (data) =>
    localStorage.setItem("formData", JSON.stringify(data));

  useEffect(() => {
    fetchMockData().then((data) => setData(data));
  }, [pathname]);

  const localFormdata = JSON.parse(localStorage.getItem("formData"));

  const TabContent = ({ title, actions, children, style }) => (
    <>
      <ContentHeader
        style={style || { paddingTop: 24 }}
        title={<span style={{ fontSize: 24 }}>{title}</span>}
        actions={actions}
      />
      {children}
    </>
  );

  const handleSubmit = (formData) => {
    setLocalStorageData(formData);
  };

  return (
    <>
      <ContentHeader
        style={{ padding: "16px 0" }}
        title={
          <div
            style={{
              height: 40,
              display: "flex",
              alignItems: "center",
            }}
          >
            {data ? (
              `${data.name} ${data.uuid}`
            ) : (
              <Skeleton.Input active block style={{ height: 40, width: 240 }} />
            )}
            <Button
              size="large"
              style={{ marginLeft: 16, fontWeight: 700, fontSize: 14 }}
            >
              View user profile
            </Button>
          </div>
        }
        actions={
          <div
            style={
              !screens.lg ? { display: "flex", flexDirection: "column" } : null
            }
          >
            <Button
              size="large"
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginRight: screens.lg ? 8 : 0,
                marginBottom: screens.lg ? 0 : 8,
              }}
            >
              Reset Application
            </Button>
            <Button size="large" style={{ fontSize: 14 }} type="primary">
              Generate Advisor Report
            </Button>
          </div>
        }
      />
      <PropgressBar
        items={applicationsProgressItems}
        current={data?.applicationStatus}
      />
      <Tabs
        defaultActiveKey="1"
        items={applicationsTabsParams}
        childrens={[
          (title) => <TabContent title={title} />,
          (title) => (
            <TabContent
              title={title}
              actions={
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <Button
                    disabled={isFormActive}
                    style={{ fontSize: 14, marginRight: 8 }}
                    type="primary"
                    onClick={() => setFormActive(!isFormActive)}
                  >
                    Edit
                  </Button>
                  <Button
                    disabled={!isFormActive}
                    style={{ fontWeight: 700, fontSize: 14 }}
                    onClick={() => {
                      form.submit();
                      setFormActive(!isFormActive);
                    }}
                  >
                    Save changes
                  </Button>
                </div>
              }
            >
              <Tabs
                style={{ marginTop: 48 }}
                defaultActiveKey="0"
                items={applicationsPreparationsTabsParams}
                tabPosition="left"
                childrens={[
                  () => (
                    <Form
                      loading={!data}
                      title="Loan Party #"
                      titleStyle={{ marginBottom: 26 }}
                      form={form}
                      disabled={!isFormActive}
                      onFinish={(formData) => handleSubmit(formData)}
                      params={applicationPreparationFormParams}
                      selectData={{
                        title: [
                          { label: "Mr", value: "mr" },
                          { label: "Mrs", value: "mrs" },
                          { label: "Ms", value: "ms" },
                          { label: "Miss", value: "miss" },
                        ],
                        employmentStatus: [
                          { label: "Employed", value: "employed" },
                          { label: "Not Employed", value: "notEmployed" },
                        ],
                        residencyStatus: [
                          { label: "Citizen", value: "citizen" },
                          { label: "Resident", value: "resident" },
                        ],
                      }}
                      initialValues={data || localFormdata}
                    />
                  ),
                ]}
              />
            </TabContent>
          ),
          (title) => <TabContent title={title} />,
          (title) => <TabContent title={title} />,
          (title) => <TabContent title={title} />,
          (title) => <TabContent title={title} />,
          (title) => <TabContent title={title} />,
        ]}
      />
    </>
  );
}

export default ApplicationDetails;
