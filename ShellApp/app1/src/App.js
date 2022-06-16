import React, { Suspense } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

const AppShell = React.lazy(() => import('AppShell/AppShell'));
const App0Widget = React.lazy(() => import('App0/Widget'));
const App1Widget = React.lazy(() => import('./Widget'));
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
            <h1>App 1</h1>
            <em>
              moment-timezone: The time in America/Los_Angeles is{' '}
              {moment().tz('America/Los_Angeles').format('ha z')}
            </em>
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
