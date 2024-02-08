import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import { promises as fs } from 'fs';
import {tiedot} from "./testi.js"

export default async function Grammar() {
    const res = await fs.readFile(process.cwd() + "/app/grammar/grammar.json", "utf-8")
    const grammarData = JSON.parse(res);
    // console.log(grammarData)
    // console.log(grammarData[0].content)
    console.log(tiedot[1].content)

    const kokeilu = "<br>apina ja <i>gorilla</i>"
    const seuraava = {__html:kokeilu};
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        {tiedot.map((card) =>      
        <Card
        key="{card}" 
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
        <p dangerouslySetInnerHTML={{__html:card.content}}></p>
      </CardBody>
      <Divider/>
    </Card>)}

        </div>
      </main>
    );
  }
  