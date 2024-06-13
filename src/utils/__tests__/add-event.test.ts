import { addEvent } from "../add-event";
const event: Window["wcs"]["event"] = vi.fn();
globalThis.window = {
  wcs: {
    event,
  },
} as never;
beforeEach(() => {
  vi.resetAllMocks();
});

describe("addEvent", () => {
  it("pass category and type to wcs.event", () => {
    addEvent("mock", "name");
    expect(window.wcs.event).toHaveBeenLastCalledWith("mock", "name");
  });
});
