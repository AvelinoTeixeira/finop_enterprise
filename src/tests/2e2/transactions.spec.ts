import { test, expect } from '@playwright/test';

test('fluxo de dashboard', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('text=FinOp.')).toBeVisible();
  
  await page.fill('input[name="description"]', 'Teste de Gasto');
  await page.fill('input[name="amount"]', '100');
  await page.fill('input[name="category"]', 'Lazer');
  await page.click('button:has-text("Adicionar")');

  await expect(page.locator('text=Teste de Gasto')).toBeVisible();
});