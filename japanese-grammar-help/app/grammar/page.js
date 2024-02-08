"use client"

import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import {tiedot} from "./testi.js"

// className="md:hidden" tällä saa piiloon elementin

export default async function Grammar() {
    const toggleCard = function(e){
        const toggle = e.target.querySelector(".toggleThis")
        // console.log(toggle)
        toggle.classList.toggle("hidden")

    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 w-5xl w-full items-center justify-between font-mono text-sm">
        {tiedot.map((card) =>      
        <Card
        key={card.title}
        className="bg-zinc-500 w-3/4 p-10 my-10 rounded-xl"
        shadow="lg"
        fullWidth="true"
        isPressable onPress={(e) => toggleCard(e)}
        disableRipple="true">
      <CardHeader className="flex gap-3">
        <div className="flex w-full gap-3 justify-between">
          <p className="flex text-black-500 font-bold text-lg">{card.title}</p>
          <p className="flex">Klikkaa</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="toggleThis hidden">
        <p dangerouslySetInnerHTML={{__html:card.content}}></p>
      </CardBody>
    </Card>)}

        </div>
      </main>
    );
  }
  