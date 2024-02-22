
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

import React, { useState } from 'react';



export default function CardCarrousel() {
    const [loaded, setLoaded] = useState(false);
    return (
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 rounded-lg">
            <CardHeader className="absolute z-10 top-1 flex-col items-start ms-2">
                <p className="text-tiny text-black/60 uppercase font-bold">Nuevo</p>
                <h4 className="text-black/90 font-medium text-2xl">Salon de Belleza</h4>
            </CardHeader>
            <img
                src="images/imagen2.jpg"
                alt="Card example background"
                width="300"
                height="300"
                onLoad={() => setLoaded(true)}
                className={`z-0 w-full h-full scale-125 -translate-y-6 object-cover ${loaded ? 'opacity-100' : 'opacity-100'}`}
                />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className="ms-2">
                <p className="text-black text-tiny">40% OFF</p>
                <p className="text-black text-tiny">Productos seleccionados</p>
                </div>
                <Button className="text-tiny p-1 ps-2 pe-2 me-2" color="primary" radius="full" size="sm">
                Reservar
                </Button>
            </CardFooter>
        </Card>
    ) 
}