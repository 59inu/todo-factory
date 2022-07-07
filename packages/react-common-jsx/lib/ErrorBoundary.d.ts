import React from "react";
export declare class ErrorBoundary extends React.Component {
    state: {
        hasError: boolean;
    };
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
