import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function TabsNav() {

  return (
    <Tabs defaultValue="Beneficios" className="mx-auto">
        <TabsList>
            <TabsTrigger value="Beneficios">Beneficios</TabsTrigger>
            <TabsTrigger value="Descuentos">Descuentos</TabsTrigger>
            <TabsTrigger value="Stores">Locales</TabsTrigger>
        </TabsList>
            <TabsContent value="Beneficios">
                <ImageCarousel></ImageCarousel>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
  );
}
