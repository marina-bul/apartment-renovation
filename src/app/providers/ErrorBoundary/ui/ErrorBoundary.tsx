import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends React.Component <ErrorBoundaryProps, ErrorBoundaryState>{
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=""><PageError /></Suspense>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary