import React from "react";
import { Button } from "./ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center px-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Oops!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Something went wrong. This might be due to an ad blocker or
              network issue.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Try disabling ad blockers or privacy extensions for this site,
                then refresh the page.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium"
              >
                Refresh Page
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-medium"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
