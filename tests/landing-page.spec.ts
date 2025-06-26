
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('[data-testid="hero-cta"]')).toBeVisible();
  });

  test('should navigate through all sections', async ({ page }) => {
    await page.goto('/');
    
    // Test hero section
    await expect(page.locator('#hero')).toBeVisible();
    
    // Test features section
    await page.locator('[href="#features"]').click();
    await expect(page.locator('#features')).toBeInViewport();
    
    // Test testimonials section
    await page.locator('[href="#testimonials"]').click();
    await expect(page.locator('#testimonials')).toBeInViewport();
    
    // Test contact section
    await page.locator('[href="#contact"]').click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    await page.fill('[name="name"]', 'Test User');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="message"]', 'Test message');
    
    await page.click('[type="submit"]');
    
    // Should show success message or handle form submission
    await expect(page.locator('[role="status"]')).toBeVisible();
  });
});
