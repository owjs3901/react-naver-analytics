import * as index from "../index";
describe("index", () => {
  it("export", () => {
    expect({ ...index }).toEqual({
      addCnv: expect.any(Function),
      addEvent: expect.any(Function),
      NaverAnalytics: expect.any(Function),
    });
  });
});
