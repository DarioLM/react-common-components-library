import React, { useState } from "react";

import { TabsPanelProps } from "./TabsPanel.types";

import "./TabsPanel.scss";

const TabsPanel: React.FC<TabsPanelProps> = ({ tabs, initTab, theme = "light" }) => {
  const [actualTab, setActualTab] = useState(initTab || tabs[0]);
  return (
    <div className={`tabs-component tabs-component-${theme}`}>
      <div data-testid="tabs-component" className="tabs-component_header">
        {tabs.map(tab =>
          <div
            key={tab.value}
            className={
              `tabs-component_tab
              ${tab.value === actualTab.value ? "tabs-component_tab--selected" : ""}
              ${tab.disabled ? "tabs-component_tab--disabled" : ""}`
            }
            onClick={() => tab.disabled ? console.log("Tab Disabled") : setActualTab(tab)}
            title={tab.disabled ? "Tab Disabled" : tab.label}
          >
            {tab.loading ? "Loading..." : tab.label}
          </div>)
        }
        </div>
        <div className="tabs-component_content">
          {actualTab.loading ? "Loading..." : (actualTab.content || "No content for this tab")}
      </div>
    </div>
  );
};

export default TabsPanel;