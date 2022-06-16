import React, { Suspense } from 'react';
import styled from 'styled-components';

const Box = styled('div')`
  margin: 10px;
  padding: 10px;
  border: solid 10px yellow;
`;

const AppsMap = {
  'App 0': 3001,
  'App 1': 3002,
  'App 2': 3003,
};

const AppLinks = ({ children }) => {
  return (
    <Box>
      <ul>
        {Object.entries(AppsMap).map(([name, port]) => {
          const pageUrl = document.location.href.replace(/[0-9]{4}/, port);
          return (
            <li key={port}>
              {name}: <a href={pageUrl}>{pageUrl}</a>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default AppLinks;
