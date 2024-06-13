import { addCnv } from "../add-cnv";
const cnv: Window["wcs"]["cnv"] = vi.fn();
globalThis.window = {
  wcs: {
    cnv,
  },
} as never;
beforeEach(() => {
  vi.resetAllMocks();
});

describe("addCnv", () => {
  it("pass number and value to wcs.cnv", () => {
    addCnv("1", "value");
    expect(window.wcs.cnv).toHaveBeenLastCalledWith("1", "value");
    for (let i = 1; i < 5; i++) {
      addCnv(String(i + 1) as "2" | "3" | "4" | "5", "value");
      expect(window.wcs.cnv).toHaveBeenLastCalledWith(String(i + 1), "value");
    }
  });

  it("pass number and default value to wcs.cnv", () => {
    for (let i = 1; i < 5; i++) {
      addCnv(String(i + 1) as "2" | "3" | "4" | "5");
      expect(window.wcs.cnv).toHaveBeenLastCalledWith(String(i + 1), "1");
    }
  });
});
