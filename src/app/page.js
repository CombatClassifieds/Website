"use client";

import Item from "./item/[id]/page";

export default function Home() {
  return <Item params={{ id: 1 }} />;
}
