
// Simplified telemetry setup for MVP template
// Advanced OpenTelemetry setup can be added by clients as needed

export const initTelemetry = () => {
  // Only initialize if environment variable is set and in production
  if (import.meta.env.VITE_OTLP_ENDPOINT && import.meta.env.PROD) {
    console.log('Telemetry endpoint configured:', import.meta.env.VITE_OTLP_ENDPOINT);
    
    // Basic telemetry initialization
    // Clients can extend this with full OpenTelemetry setup if needed
    try {
      // Simple performance tracking
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          console.log('Page load time:', loadTime);
          
          // You can send this to your telemetry endpoint
          // fetch(import.meta.env.VITE_OTLP_ENDPOINT, {
          //   method: 'POST',
          //   body: JSON.stringify({ loadTime, timestamp: Date.now() })
          // });
        });
      }
    } catch (error) {
      console.warn('Telemetry initialization failed:', error);
    }
  } else {
    console.log('Telemetry disabled: No OTLP endpoint configured or not in production');
  }
};

// Network error logging for additional observability
export const logNetworkError = (url: string, error: Error) => {
  console.error(`Network error for ${url}:`, error);
  
  // Send to analytics if available
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('Network Error', {
      props: {
        url: url,
        error: error.message,
      },
    });
  }
};

// Performance monitoring helper
export const logPerformanceMetric = (name: string, value: number) => {
  console.log(`Performance metric - ${name}: ${value}ms`);
  
  // Send to analytics if available
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('Performance Metric', {
      props: {
        metric: name,
        value: value,
      },
    });
  }
};
