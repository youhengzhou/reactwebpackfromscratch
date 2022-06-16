import React, { Suspense } from 'react';
import styled from 'styled-components';
const AppShell = React.lazy(() => import('AppShell/AppShell'));

const Box = styled('div')`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: pink;
`;

const App = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <AppShell>
          <Box>
            <h1>App 3</h1>
          </Box>
        </AppShell>
      </Suspense>
    </div>
  );
};

export default App;
