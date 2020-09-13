import React from "react";
import { render, getAllByTestId } from "@testing-library/react";

import TabsPanel from "./TabsPanel";
import { TabsPanelProps } from "./TabsPanel.types";

const commonTabs = [
  {
    label: "Empty",
    value: 0,
    content: null,
  },
  {
    label: "Link",
    value: 1,
    content: "Link content"
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

describe("Test TabsPanel Component", () => {
  let props: TabsPanelProps;

  beforeEach(() => {
    props = {
      tabs: commonTabs,
    };
  });

  const renderComponent = () => render(<TabsPanel {...props} />);
  it("should render two tabs and the first one must be selected by default", () => {
    const { getByTestId } = renderComponent();
    const panelTabsComponent = getByTestId("tabs-component");
    const panelTabsHeaderComponent = getByTestId("tabs-component_header");
    const panelTabsTabComponent = getAllByTestId(panelTabsHeaderComponent, "tabs-component_tab");

    expect(panelTabsComponent).toHaveClass("tabs-component-light");
    expect(panelTabsTabComponent).toHaveLength(props.tabs.length);
    expect(panelTabsTabComponent[0]).toHaveClass("tabs-component_tab--selected");
    expect(panelTabsTabComponent[1]).not.toHaveClass("tabs-component_tab--selected");
  });

  it("should have three tabs and the last one must be in loading state", () => {
    props.tabs = [...commonTabs, loadingTab];
    const { getByTestId } = renderComponent();
    const panelTabsComponent = getByTestId("tabs-component");
    const panelTabsHeaderComponent = getByTestId("tabs-component_header");
    const panelTabsTabComponent = getAllByTestId(panelTabsHeaderComponent, "tabs-component_tab");

    expect(panelTabsComponent).toHaveClass("tabs-component-light");
    expect(panelTabsTabComponent).toHaveLength(props.tabs.length);
    expect(panelTabsTabComponent[0]).toHaveClass("tabs-component_tab--selected");
    expect(panelTabsTabComponent[1]).not.toHaveClass("tabs-component_tab--selected");

    expect(panelTabsTabComponent[2]).toHaveTextContent("Loading...");
  });

  it("should have three tabs and the last one must be in disabled state", () => {
    props.tabs = [...commonTabs, disabledTab];
    const { getByTestId } = renderComponent();
    const panelTabsComponent = getByTestId("tabs-component");
    const panelTabsHeaderComponent = getByTestId("tabs-component_header");
    const panelTabsTabComponent = getAllByTestId(panelTabsHeaderComponent, "tabs-component_tab");

    expect(panelTabsComponent).toHaveClass("tabs-component-light");
    expect(panelTabsTabComponent).toHaveLength(props.tabs.length);
    expect(panelTabsTabComponent[0]).toHaveClass("tabs-component_tab--selected");
    expect(panelTabsTabComponent[1]).not.toHaveClass("tabs-component_tab--selected");

    expect(panelTabsTabComponent[2]).toHaveClass("tabs-component_tab--disabled");
    expect(panelTabsTabComponent[2]).toHaveAttribute("title", "Tab Disabled");
  });
});