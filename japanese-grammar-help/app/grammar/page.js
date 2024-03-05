"use client"

import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import {data} from "./grammarData.js"
import { useState } from 'react'
import BackToTopBtn from "../topButton.js";

export default function Grammar() {
  // Reactin State Hook mahdollistaa staten lisäämisen funktion komponentteihin ilman erillisen Classin luomista
    const [query, setQuery] = useState('');

    // Funktio, joka avaa ja sulkee kortin
    const toggleCard = function(e){
        const toggle = e.target.querySelector(".toggleThis")
        toggle.classList.toggle("hidden")
    }

    // javascriptin filter-funktiolla käydään läpi korttien Titlet ja katsotaan matchaako nykyiseen Stateen (query)
    const filter = (array) => {
      return array.filter(el => el.title.toLowerCase().includes(query))}
    
      const filtered = filter(data)
    
    // päivitetään State sen mukaan mitä hakukenttään on kirjoitettu
    const handleChange = (e) => {
      setQuery(e.target.value)
      }

  
    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-5 md:p-24 rounded-b-lg">
        <div className="flex flex-col z-10 w-5xl w-full items-center justify-between text-sm">
          <div className="w-3/4 text-teal-500 text-lg font-bold text-center md:text-left">
        <input className="p-50 text-slate-900 my-5 self-start" onChange={handleChange} type="text" placeholder="Etsi.."/>
        </div>
        {/* Mapin avulla käydään läpi filtteröity kielioppi-data yksi kohta kerrallaan ja renderöidään sen pohjalta kortit */}
        {filtered.map((card) => (
          // jos kortin title on "chapterLabel", siitä renderöidään otsikko. Muussa tapauksessa tehdään kortti.
            card.title == "chapterLabel"     
        ? (<h1 className="w-3/4 text-orange-400 text-center md:text-start text-lg font-bold">{card.content}</h1>)
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
          <p className="invisible md:visible flex text-teal-100 md:transition ease-in-out delay-100 
            hover:-translate-y-1 hover:scale-110 text-teal-100 hover:text-teal-500
            duration-300">Klikkaa</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="toggleThis hidden">
        <p className="text-left text-teal-50" dangerouslySetInnerHTML={{__html:card.content}}></p>
      </CardBody>
    </Card>)))}

        </div>
        {/* Muualta importattu Back to the Top -button */}
        {BackToTopBtn()}
      </main>
    );
  }
  