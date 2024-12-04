import Script from "next/script";
import { FunctionComponent } from "react";

const Analytics: FunctionComponent = () => {
  if (process.env.APP_ENV !== "production") return null;
  return (
    <Script
      defer
      src="https://unpkg.com/@tinybirdco/flock.js"
      data-host={process.env.TINYBIRD_HOST}
      data-token={process.env.TINYBIRD_TOKEN}
    />
  );
};

export default Analytics;
