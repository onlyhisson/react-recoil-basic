import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./component/App";
import ErrorBoundary from "./ErrorBoundary";

const Loading = () => <div>Loading...</div>;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={Loading()}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
