import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";



export default function Grammar() {
    const data = [{title: "Kielioppi 1", content: "Tähän tulee paljon asiaa."}, 
    {title: "Kielioppi 2", content: "Mutta tänne saattaa tulla vielä enemmän"}]

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        {data.map((card) =>         
        <Card 
        className="bg-zinc-500 max-w-[400px] p-10 my-10 rounded-xl"
        shadow="lg"
        fullWidth="true">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-black-500 font-bold text-lg">{card.title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{card.content}</p>
      </CardBody>
      <Divider/>
    </Card>)}

        </div>
      </main>
    );
  }
  