"use client"

import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import {data} from "./grammarData.js"
import { useState } from 'react'

export default function Grammar() { //aikaisemmin oli async-funktio, älä unohda
    const [query, setQuery] = useState('');
    const toggleCard = function(e){
        const toggle = e.target.querySelector(".toggleThis")
        toggle.classList.toggle("hidden")
    }

    const filter = (array) => {
      return array.filter(el => el.title.toLowerCase().includes(query))}

    const filtered = filter(data)

    const handleChange = (e) => {
      setQuery(e.target.value)
      console.log("toimii")
      }

  
    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 w-5xl w-full items-center justify-between font-mono text-sm">
          <div className="w-3/4 text-teal-500 text-lg font-bold text-left">
        <input className="p-50 text-slate-900 self-start" onChange={handleChange} type="text" placeholder="Etsi.."/>
        </div>
        {filtered.map((card) => (
            card.title == "chapterLabel"     
        ? (<h1 className="w-3/4 text-teal-500 text-lg font-bold text-left">{card.content}</h1>)
        : (<Card
        key={card.title}
        className="bg-slate-800 w-full md:w-3/4 p-10 my-10 rounded-xl"
        shadow="lg"
        fullWidth="true"
        isPressable onPress={(e) => toggleCard(e)}
        disableRipple="true">
      <CardHeader className="flex gap-3">
        <div className="flex w-full gap-3 justify-between">
          <p className="flex text-teal-50 font-bold text-lg">{card.title}</p>
          <p className="invisible md:visible flex text-teal-100">Klikkaa</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="toggleThis hidden">
        <p className="text-left text-teal-50" dangerouslySetInnerHTML={{__html:card.content}}></p>
      </CardBody>
    </Card>)))}

        </div>
      </main>
    );
  }
  