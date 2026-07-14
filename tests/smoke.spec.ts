import { expect, test } from "@playwright/test";

test.describe("HERNA smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("herna-intro-seen", "1");
      localStorage.setItem("herna-theme", "light");
    });
  });

  test("loads EN hero and can open FR", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#hero-title")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByRole("link", { name: /Explore divisions/i })).toBeVisible();

    await page.getByRole("navigation", { name: "Language" }).getByText("fr").click();
    await expect(page).toHaveURL(/\/fr/);
    await expect(
      page.getByRole("link", { name: /Explorer les divisions/i }),
    ).toBeVisible({ timeout: 20_000 });
  });

  test("site stays in light mode", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#hero")).toBeVisible({ timeout: 60_000 });
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(
      page.getByRole("button", { name: /Light mode|Dark mode|Mode clair|Mode sombre/i }),
    ).toHaveCount(0);
  });

  test("lab page renders design system", async ({ page }) => {
    await page.goto("/en/lab", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "Component Lab" })).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByText("Primary CTA")).toBeVisible();
  });
});
