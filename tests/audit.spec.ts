import { expect, test } from "@playwright/test";

const BASE = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3010";

const slugs = [
  "equipment",
  "real-estate",
  "mining",
  "agriculture",
  "energy",
] as const;

async function dismissLoader(page: import("@playwright/test").Page) {
  const skip = page.getByRole("button", { name: /^Skip$|^Passer$/i });
  try {
    await skip.waitFor({ state: "visible", timeout: 4_000 });
    await skip.click({ force: true });
  } catch {
    /* already dismissed */
  }
  await expect(page.locator('[aria-label="Loading"]')).toHaveCount(0, {
    timeout: 12_000,
  });
}

test.describe("HERNA audit", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("herna-theme", "light");
    });
  });

  test("language switch en -> fr", async ({ page }) => {
    await page.goto(`${BASE}/en`, { waitUntil: "domcontentloaded" });
    await dismissLoader(page);
    await expect(page.locator("#hero-title")).toBeVisible({ timeout: 60_000 });
    await page
      .getByRole("navigation", { name: "Language" })
      .getByText("fr")
      .first()
      .click();
    await expect(page).toHaveURL(/\/fr/, { timeout: 20_000 });
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await dismissLoader(page);
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
    await dismissLoader(page);
    await expect(page.locator("#divisions")).toBeVisible({ timeout: 60_000 });

    for (const slug of slugs) {
      await page.locator("#divisions").scrollIntoViewIfNeeded();
      const card = page.locator(`#division-${slug}`);
      await expect(card).toBeVisible();
      await card.click();
      await expect(page).toHaveURL(new RegExp(`/en/divisions/${slug}`), {
        timeout: 20_000,
      });
      await expect(page.locator("h1")).toBeVisible();
      await page.goto(`${BASE}/en`, { waitUntil: "domcontentloaded" });
      await dismissLoader(page);
    }
  });
});
