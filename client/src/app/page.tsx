// pages/index.js
"use client"

import TabsNav from "@/components/TabsNav";
import FooterNav from "@/components/contents/FooterNav";
import HeaderNav from "@/components/contents/HeaderNav";
import { NextUIProvider } from "@nextui-org/react";


export default function HomePage() {
  const user = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    signupDate: '01/01/2023',
  };

  return (
    <NextUIProvider>
      <HeaderNav>
        <TabsNav>
          
        </TabsNav>

        <FooterNav></FooterNav>

      </HeaderNav>
    </NextUIProvider>
  );
}
