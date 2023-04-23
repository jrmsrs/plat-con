import { test, expect } from '@playwright/test'

test('index page', async ({ page }) => {
  await page.goto('/')
  // await page.getByText('loading...').first().isVisible()
  await page.getByText('Hello world').isVisible()
  await page.getByText('This is Home page.').isVisible()
})

test('about page', async ({ page }) => {
  await page.goto('/')
  // await page.getByText('loading...').first().isVisible()
  await page.getByText('About').isVisible()
  await page.getByText('This is About page.').isVisible()
})

test('supabase test page', async ({ page }) => {
  await page.goto('/supatest')
  // await page.getByText('loading...').first().isVisible()
  await page.getByText('Supabase Connection Test').isVisible()
})
