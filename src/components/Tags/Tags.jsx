import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Tags = ({ defaultActiveKey, items, onChange }) => (
  <Tabs defaultActiveKey={defaultActiveKey} onChange={onChange}>
    {items.map((item) => (
      <TabPane tab={item.label} key={item.key}>
        {item.children}
      </TabPane>
    ))}
  </Tabs>
);

export default Tags;
