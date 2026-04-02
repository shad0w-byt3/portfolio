import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-900 text-white p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 text-red-400">⚠️ Component Error</h1>
            <div className="mb-4">
              <strong className="text-red-300">Error:</strong>
              <pre className="bg-black/50 p-4 rounded overflow-auto text-sm mt-2">
                {this.state.error?.toString()}
              </pre>
            </div>
            {this.state.errorInfo && (
              <div className="mb-4">
                <strong className="text-red-300">Component Stack:</strong>
                <pre className="bg-black/50 p-4 rounded overflow-auto text-sm mt-2 text-xs">
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded font-bold"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
