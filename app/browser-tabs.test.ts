import { describe, expect, it } from "vitest";
import {
  removeBrowserTab,
  upsertBrowserTab,
  type TabRecord,
} from "./browser-tabs.js";

const browser = (id: string, url: string): TabRecord => ({
  id,
  kind: "browser",
  url,
  title: "Preview · app",
  environmentId: "env_1",
});

describe("upsertBrowserTab", () => {
  it("updates an existing tab by id or url instead of duplicating", () => {
    const tabs = [browser("preview", "http://127.0.0.1:5173")];
    const byId = upsertBrowserTab(tabs, {
      id: "preview",
      kind: "browser",
      url: "https://hung--5173.getbb.app",
      title: "Preview · Vite",
      environmentId: "env_1",
    });
    expect(byId).toHaveLength(1);
    expect(byId[0]?.url).toBe("https://hung--5173.getbb.app");
    const byUrl = upsertBrowserTab(tabs, {
      id: "other",
      kind: "browser",
      url: "http://127.0.0.1:5173",
      title: "Preview · Vite",
      environmentId: "env_1",
    });
    expect(byUrl).toHaveLength(1);
    expect(byUrl[0]?.id).toBe("other");
  });
});

describe("removeBrowserTab", () => {
  it("removes the owned tab by id or matching url and leaves others", () => {
    const tabs = [
      { id: "info", kind: "thread-info" },
      browser("preview", "http://127.0.0.1:5173"),
      browser("other", "https://example.com"),
    ];
    expect(removeBrowserTab(tabs, { id: "preview", urls: [] }).map((tab) => tab.id)).toEqual([
      "info",
      "other",
    ]);
    expect(
      removeBrowserTab(tabs, { id: null, urls: ["http://127.0.0.1:5173"] }).map((tab) => tab.id),
    ).toEqual(["info", "other"]);
  });
});
