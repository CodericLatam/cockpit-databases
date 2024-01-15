import React from "react";
import {
  Tabs,
  Tab,
  TabTitleText,
  Checkbox,
  Tooltip,
  CodeBlock,
  CodeBlockAction,
  CodeBlockCode,
  ClipboardCopyButton,
  Button,
} from "@patternfly/react-core";

import PlayIcon from "@patternfly/react-icons/dist/esm/icons/play-icon";

export const TabsBoxLight = (props) => {
  const { isEnabled } = props;
  console.dir(isEnabled);
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const [isTabsLightScheme, setIsTabsLightScheme] = React.useState(true);
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        variant={isTabsLightScheme ? "light300" : "default"}
        isBox
        aria-label="Tabs in the box light variation example"
        role="region"
      >
        <Tab
          eventKey={0}
          title={<TabTitleText>MariaDB</TabTitleText>}
          isDisabled={!isEnabled.httpd}
        >
        <CodeBlock>
          <CodeBlockCode id="code-content">{isEnabled.httpd}</CodeBlockCode>
        </CodeBlock>
        </Tab>
        <Tab
          eventKey={1}
          title={<TabTitleText>PostgreSQL</TabTitleText>}
          isDisabled={!isEnabled.tomcat}
        >
          <CodeBlock>
            <CodeBlockCode id="code-content">{isEnabled.tomcat}</CodeBlockCode>
          </CodeBlock>
        </Tab>
        <Tab
          eventKey={2}
          title={<TabTitleText>Virus Scanning</TabTitleText>}
          isDisabled={!isEnabled.nginx}
        >
        <CodeBlock>
          <CodeBlockCode id="code-content">{isEnabled.nginx}</CodeBlockCode>
        </CodeBlock>
        </Tab>
        <Tab
          eventKey={3}
          title={<TabTitleText>phpMyAdmin</TabTitleText>}
          isDisabled={!isEnabled.phpmyadmin}
        >
          <CodeBlock>
            <CodeBlockCode id="code-content">{isEnabled.phpmyadmin}</CodeBlockCode>
          </CodeBlock>
        </Tab>
      </Tabs>
    </div>
  );
};
