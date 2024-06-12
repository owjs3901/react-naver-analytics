export { NaverAnalytics } from "./components/NaverAnalytics.tsx";
export { addCnv } from "./utils/add-cnv";
export { addEvent } from "./utils/add-event";

declare global {
  interface Window {
    wcs: {
      cnv: (type: string, value: string) => void;
      event: (category: string, eventName: string) => void;
    };
  }
}
