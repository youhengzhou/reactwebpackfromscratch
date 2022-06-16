import React, { Suspense } from 'react';
import styled from 'styled-components';

import AppLinks from './AppLinks';

const Box = styled('div')`
  padding: 10px;
  text-align: center;
  border: solid 10px greenyellow;
`;

const AppShell = ({ children }) => {
  return (
    <div>
      <Box>
        <h1>App Shell</h1>
        {children}
      </Box>
      <AppLinks />
    </div>
  );
};

export default AppShell;
