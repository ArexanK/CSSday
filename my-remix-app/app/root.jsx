import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import DataDisplay from "./components/dataDisplay";
import "./tailwind.css";

export default function App() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./tailwind.css" />

        <Meta />
        <Links />
      </head>
      <body>
        <h1>CSS DAY</h1>

        <DataDisplay />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
