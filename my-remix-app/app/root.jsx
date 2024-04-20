import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import DataDisplay from "./components/dataDisplay";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>CSS DAY </h1>
        <DataDisplay />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
