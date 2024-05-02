import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import DataDisplay from "./my-remix-app/app/components/dataDisplay";
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
        <DataDisplay />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
