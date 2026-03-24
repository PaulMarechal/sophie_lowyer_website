"use client";

import { BrowserView, MobileView } from "react-device-detect";
import Desktop from "../../components/layout/Desktop";
import Home from "./Home";
import Mobile from "./Mobile";

export default function HomeEntryClient() {
  return (
    <>
      <BrowserView>
        <Desktop>
          <Home />
        </Desktop>
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
}
