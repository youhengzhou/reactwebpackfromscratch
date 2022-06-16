import React, { Suspense } from 'react';
import styled from 'styled-components';

const AppShell = React.lazy(() => import('AppShell/AppShell'));
const App0Widget = React.lazy(() => import('./Widget'));
const App1Widget = React.lazy(() => import('App1/Widget'));
const App2Widget = React.lazy(() => import('App2/Widget'));

const Box = styled('div')`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: cyan;
`;

const WidgetContainer = styled('div')`
  display: flex;
  > * {
    flex: 1 1 auto;
  }
`;

const App = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <AppShell>
          <Box>
            <h1>App 0</h1>
          </Box>
          <WidgetContainer>
            <Suspense fallback={'loading...'}>
              <App0Widget />
            </Suspense>
            <Suspense fallback={'loading...'}>
              <App1Widget />
            </Suspense>
            <Suspense fallback={'loading...'}>
              <App2Widget />
            </Suspense>
          </WidgetContainer>
        </AppShell>
      </Suspense>
    </div>
  );
};

export default App;
