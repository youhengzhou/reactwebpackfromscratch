import React, { Suspense } from 'react';
import styled from 'styled-components';

const Box = styled('div')`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: cornflowerblue;
`;

const Widget = () => {
  return (
    <Box>
      <h1>App 0: Widget</h1>
    </Box>
  );
};

export default Widget;
