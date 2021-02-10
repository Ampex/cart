import { Button } from "react-bootstrap"
import React from "react"

const ErrorBoundaryFallback = ({ resetErrorBoundary }) => {
  return (
    <div className="container-fluid vh-100 m-0 align-items-center d-flex justify-content-center">
      <div className="row border-0 d-flex flex-column align-items-center text-center">
        <h1 style={{ fontSize: "8rem" }} className="col">
          404
        </h1>
        <h1 style={{ fontSize: "3rem" }} className="col mb-4">
          STRONA NIE ZNALEZIONA
        </h1>
        <p className="col-8">
          Przepraszamy, nie udało się znaleźć strony, której szukasz. Link,
          który kliknąłeś, może być uszkodzony lub już nie istnieje. Proszę
          spróbuj ponownie.
        </p>
        <Button className="mt-2" onClick={resetErrorBoundary}>
          Odśwież stronę
        </Button>
      </div>
    </div>
  )
}

export default ErrorBoundaryFallback
