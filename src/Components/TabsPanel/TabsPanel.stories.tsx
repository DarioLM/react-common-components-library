import React from "react";
import TabsPanel from './TabsPanel';
import Link from "../Link/Link";
export default {
  title: "TabsPanel"
};

const commonTabs = [
  {
    label: "Empty",
    value: 0,
    content: null,
  },
  {
    label: "Link",
    value: 1,
    content:
      <Link
        theme="dark"
        to="https://github.com/DarioLM/react-common-components-library"
        content="Library GitHub Page"
      />
  },
];

const disabledTab = {
    label: "Button",
    value: 2,
    content: null,
    disabled: true,
};

const loadingTab = {
    label: "Button",
    value: 2,
    content: "Button content",
    loading: true,
};

export const Light = () => <TabsPanel tabs={commonTabs}/>;

export const Dark = () => <TabsPanel theme="dark" tabs={commonTabs} />;

export const LoadingStatus = () => <TabsPanel tabs={[...commonTabs, loadingTab]} />;

export const DisabledStatus = () => <TabsPanel tabs={[...commonTabs, disabledTab]} />;