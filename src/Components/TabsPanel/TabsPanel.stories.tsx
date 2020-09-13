import React from "react";
import TabsPanel from './TabsPanel';
import Link from "../Link/Link";

export default {
  title: "TabsPanel",
  content: TabsPanel,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    tabs: {
      control: {
        type: 'object',
      },
    },
  },
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

const Template = (args) => <TabsPanel {...args} />;

export const Light = Template.bind({});
Light.args = {theme: "light", tabs: commonTabs };

export const Dark = Template.bind({});
Dark.args = {theme: "dark", tabs: commonTabs };

export const LoadingStatus = Template.bind({});
LoadingStatus.args = {theme: "light", tabs: [...commonTabs, loadingTab] };

export const DisabledStatus = Template.bind({});
DisabledStatus.args = {theme: "light", tabs: [...commonTabs, disabledTab] };