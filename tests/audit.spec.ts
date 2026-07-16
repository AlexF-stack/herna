import { expect, test } from "@playwright/test";

const BASE = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000";

const slugs = [
  "equipment",
  "real-estate",
  "mining",
  "agriculture",
  "energy",
] as const;

test.describe("HERNA audit", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("herna-intro-seen", "1");
      localStorage.setItem("herna-theme", "light");
    });
  });

  test("language switch en -> fr", async ({ page }) => {
    await page.goto(`${BASE}/en`, { waitUntil: "domcontentloaded" });
    await expect(page.locator("#hero-title")).toBeVisible({ timeout: 30_000 });
    await page
      .getByRole("navigation", { name: "Language" })
      .getByRole("link", { name: "fr" })
      .click();
    await page.waitForURL(/\/fr/, { timeout: 20_000 });
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(
      page.getByRole("link", { name: /Explorer les divisions/i }),
    ).toBeVisible({ timeout: 20_000 });
  });

  for (const slug of slugs) {
    test(`division page ${slug}`, async ({ page }) => {
      const res = await page.goto(`${BASE}/en/divisions/${slug}`, {
        waitUntil: "domcontentloaded",
      });
      expect(res?.ok()).toBeTruthy();
      await expect(page.locator("h1")).toBeVisible({ timeout: 30_000 });
      await expect(
        page.getByText(/Application error|Internal Server Error/i),
      ).toHaveCount(0);
    });
  }

  test("home card links navigate to each division", async ({ page }) => {
    await page.goto(`${BASE}/en`, { waitUntil: "domcontentloaded" });
    await expect(page.locator("#divisions")).toBeVisible({ timeout: 30_000 });

    for (const slug of slugs) {
      const href = await page.locator(`#division-${slug}`).getAttribute("href");
      expect(href).toBe(`/en/divisions/${slug}`);
      await page.goto(`${BASE}${href}`, { waitUntil: "domcontentloaded" });
      await expect(page).toHaveURL(new RegExp(`/en/divisions/${slug}`));
      await expect(page.locator("h1")).toBeVisible();
    }
  });
});
