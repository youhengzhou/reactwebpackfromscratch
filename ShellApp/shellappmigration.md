the difference between shell app and simple host remote app is that

shell app have shared app-libs
each "remote" in shell app can render app-shell, which has boilerplate shared content such as app-links, and render other "remote" shell app widgets inside its own app-shell instance.

shell app migration

```
+++/app-libs
used for shared singleton library such as react, react-dom etc.

/src
+index.js
empty because we only need package.json for shared libraries

+package.json
where the goodies are

+webpack.config.js
entry: still has an entry
mode: dev
devServer: dump to 'dist'
publicPath: always auto for public path
module: none, nothing to build
plugins:
MFP:
name: AppLibs
filename: remoteEntry.js, always this for exposure
+++(this is the most important part) exposes: react, react-dom, etc.
shared: react, react-dom, and singleton
```

```
+++/app-shell
used to wrap around the host and the remote perhaps for shared libraries purposes

/src
+AppLinks.js
a page with all the links, not very useful tbh

+AppShell.js
takes in children and renders children
imports AppLinks and renders AppLinks

+index.js
+++imports app-libs for their node_modules packages

+webpack.config.js
very standard expose the AppShell as a remote to be consumed
```

```
+++/app0
/public
+index.html
very standard

/src
+App.js
imports AppShell(AppShell imports AppLibs),App0Widget,App1Widget

+bootstrap.js
the ReactDom for rendering only app1

+index.js
imports remoteUrls (for getting the exact urls)
imports Applibs (for loading shared libraries)
imports bootstrap (for the ReactDOM)

+Widget.js
the actual App0 widget itself for exporting and used by other hosts

+webpack.config.js
imports AppLibs, AppShell, App0, App1 as remotes
exposes widget only for export
shares react, react-dom, styled-components
```

```
+++/app1
the same exact thing as app0, pretty much a copy
which is the beauty of it, with app shell, the AppLib works as the shared library, and AppShell works as the host container boilerplate, so technically each app doesn't even need the App.js and can only have the Widget.js for export, and in that case we import all the child app inside AppShell and make AppShell the host in a solution 1 like way, that combines the host remote pattern of solution 1 and shared library pattern of solution 2, removing duplicate code of App.js for each apps.
```

+++Notes
there are still some distinctions in that app0, app1, app2 uses different extra stuff in their App.js, but sharing the same imports and sharing AppShell

app3 doesn't even use app0,app1,app2, and doesn't have a widget, and it exposes it self as /src/App

basically app3 takes app-shell as host and in its own App.js renders it as AppShell wraps around its own content, without using widgets, but in the App.js file itself through something similar to solution 1's remote and host method

also app3 fetches AppShell's url in index.js

appshell,app0,app1,app2 fetches from remoteUrls, a global file

+++Theory Questions

+for AACChromeUI, do we use remote host strategy or have every micro-frontend remotes be able to render other micro-frontends strategy

it seems strategy 1 makes more sense, we don't load a header remote that loads an app shell that loads the footer, and other navbars for example

+should we keep app-libs and app-shell but get rid of App.js and keep Widget.js

it seems like a good idea would be to keep app-libs as a central repository schema for other microfrontends to know which packages to use

it also seems like a good idea to keep the AppShell as the boilerplate top level code that wraps around all the other micro-frontends and contains the necessary html and css organization to keep the header in the header, the navbar where its supposed to be, the footer in the footer etc.

it doesn't seem like a good idea to keep the App.js, for each remote to be able to contain all the other remote should the remote app itself run, it doesn't seem to fit the usecase here for AACChromeUI

it seems like a good idea to keep Widget.js, and furthermore if we ditch keeping App.js as something for each remote to render all the other remotes, we can just rename Widget.js to App.js as solution 1 has it

+do we keep a remoteUrls boilerplate file in all our micro-frontends, is that good or bad idea

+++Action Questions

+starting project

should I start the project by making packages for header, navbar, footer, etc.

+where should each microfrontend take url

should each remote take it from a remoteUrl.js file in their src folder

how do we decide which port number each microfrontend uses

+do I refactor the AACChromeUI itself into a AACChromeUI-libs, and AACChromeUI-shell

or keep it as one, the lib is the shell, and keep it like solution 1

+any hidden icebergs I should be aware of that I haven't been made aware of

is there any features, design decisions, nuances to the AACChromeUI that I haven't mentioned in this document here
