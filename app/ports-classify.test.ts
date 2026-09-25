import { describe, expect, it } from "vitest";
import { isDevProcess } from "./ports-classify.js";

describe("isDevProcess", () => {
  it("drops system apps and non-dev processes that ports-scan does not cover", () => {
    expect(isDevProcess("Spotify", "/Applications/Spotify.app/Contents/MacOS/Spotify")).toBe(
      false,
    );
    expect(isDevProcess("bb", "/Applications/bb.app/Contents/MacOS/bb serve")).toBe(false);
  });

  it("treats a python process running uvicorn as a dev server", () => {
    expect(isDevProcess("python3", "python3 -m uvicorn app:app")).toBe(true);
  });
});
