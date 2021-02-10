import React from "react"
import { render } from "react-dom"
import { ErrorBoundary } from "react-error-boundary"

import { App } from "./components/App/App"
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback"

render(
  <ErrorBoundary
    FallbackComponent={ErrorBoundaryFallback}
    onReset={() => window.location.reload()}
  >
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
)
