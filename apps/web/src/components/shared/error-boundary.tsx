'use client';

import React, { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.hasError ? (
      <main className="grid min-h-screen place-items-center bg-canvas p-6">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">This view could not load</h1>
          <p className="mt-2 text-sm text-muted">
            Try refreshing the page. If the problem persists, share the request ID with your team.
          </p>
        </div>
      </main>
    ) : (
      this.props.children
    );
  }
}
