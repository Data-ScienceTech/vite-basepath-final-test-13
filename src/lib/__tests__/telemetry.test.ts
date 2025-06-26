
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { logNetworkError, logPerformanceMetric } from '../telemetry';

// Mock console methods
const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

// Mock window.plausible
const mockPlausible = vi.fn();
Object.defineProperty(window, 'plausible', {
  value: mockPlausible,
  writable: true,
});

describe('Telemetry', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    consoleLogSpy.mockClear();
    mockPlausible.mockClear();
  });

  describe('logNetworkError', () => {
    it('logs network error to console', () => {
      const url = 'https://api.example.com';
      const error = new Error('Network timeout');
      
      logNetworkError(url, error);
      
      expect(consoleSpy).toHaveBeenCalledWith(
        `Network error for ${url}:`,
        error
      );
    });

    it('sends error to plausible if available', () => {
      const url = 'https://api.example.com';
      const error = new Error('Network timeout');
      
      logNetworkError(url, error);
      
      expect(mockPlausible).toHaveBeenCalledWith('Network Error', {
        props: {
          url: url,
          error: error.message,
        },
      });
    });
  });

  describe('logPerformanceMetric', () => {
    it('logs performance metric to console', () => {
      const name = 'page-load';
      const value = 1500;
      
      logPerformanceMetric(name, value);
      
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Performance metric - ${name}: ${value}ms`
      );
    });

    it('sends metric to plausible if available', () => {
      const name = 'page-load';
      const value = 1500;
      
      logPerformanceMetric(name, value);
      
      expect(mockPlausible).toHaveBeenCalledWith('Performance Metric', {
        props: {
          metric: name,
          value: value,
        },
      });
    });
  });
});
