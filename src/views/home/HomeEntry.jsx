"use client";

import dynamic from "next/dynamic";

const HomeEntryClient = dynamic(() => import("./HomeEntryClient"), { ssr: false });

export default function HomeEntry() {
  return <HomeEntryClient />;
}
