"use client";

import React from "react";
import { useState } from 'react'
import {Input} from "@nextui-org/react";
// import * as data from "./n5.csv"
export default function Dictionary() {
    const testiSana = "denki"
    // JLPT dictionary `https://jlpt-vocab-api.vercel.app/api/words?word=夜更かし`
    // await fetch(`https://jlpt-vocab-api.vercel.app/api/words`, { cache: 'no-store' }).then((response) => {
        // return response.json();
    // }).then((data) => {
        // Tämän hetkinen metodi aivan liian hidas ja epäonnistuu
        // console.log(data)
        // console.log(data.words[0])
        // for (let i = 0; i < 5; i++) {
            // console.log(Object.values(data.words[i]))
            // if (Object.values(data.words[i]).includes(testiSana)) {
                // console.log(data.words[i]) 
        // } else {
            // console.log("Sanaa ei löytynyt")
        // }
    // }
    // })


    // async function handleClick(data) {
    //     'use server';
    //     console.log(data.get("inputField"))

        // const n5jlpt = data
        // console.log(n5jlpt)
        // const csvData = [];
        // const lines = n5jlpt.split("\n");
      
        // for (let i = 0; i < 15; i++) {
        //     csvData[i] = lines[i].split(",");
        // }

        // console.log(csvData);
        
    // }
    const [query, setQuery] = useState('');

    const arr = [{"index": "1", "cont": "asd"}, {"index": "2", "cont":"eeemellson"}, {"index": "3", "cont":"kalimero"}, {"index": "4", "cont": "xyz"}]
    // const testaus = (array) => {
    //     return array.filter(el => el.cont.toLowerCase().includes("e"))
    // }

    const filterTesti = (array) => {
        return array.filter(el => el.cont.toLowerCase().includes(query))}

    const filtered = filterTesti(arr)

    const handleChange = (e) => {
        setQuery(e.target.value)
        }
    // console.log(testaus(arr))
    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-slate-50 text-lg p-5 my-5">SANAKIRJA</h1>
        
            <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-4 m-5 place-items-center">
                <div id="filtteroi">Testi diiba daabaa
                    monta riviä
                    More more more
                    Testataan sitten hakua tai jotain
                    lalalaala
                </div>
                <form>
            <Input name="inputField" type="search" label="Hae sanaa:" placeholder="Haku" className="p-50 text-slate-900"/><button type="submit" className="p-2 bg-neutral-500 rounded-md">Hae</button>
            </form>
            <input className="p-50 text-slate-900" onChange={handleChange} type="text" placeholder="Etsi.."/>

    </div>
    <div>
        {filtered.map((item) => {
                console.log(item.cont);
                return <h1 className="text-slate-50 text-lg p-5">{item.cont}</h1>
            })}
            </div>
        </div>
      </main>
    );
  }