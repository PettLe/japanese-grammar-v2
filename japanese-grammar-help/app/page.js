"use client"

import {Image} from "@nextui-org/react";
import { useState, useEffect } from 'react'

export default function Home() {
    const [query, setQuery] = useState({"word": "", "meaning": "", "furigana": ""});


  // asynkroninen funktio, jolla hoidetaan etusivun painikkeen klikkaus (tapahtuma: form submit)
  const handleClick = async function () {
    // Haetaan ulkoisesta APIsta Fetchillä random sana merkityksineen JSONina.
    const res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words/random`, { cache: 'default' }).then((response) => {
    return response.json();
}).then((data) => {
    return data;
})
    // Vastaanotettu data päivitetään stateen objectina
    setQuery({"word": res.word, "meaning": res.meaning, "furigana": res.furigana})
  }
    useEffect(() => {handleClick})

  return (
    <main className="bg-neutral-950 text-teal-100 flex min-h-[calc(100vh-114px)] flex-col items-center justify-between p-24 rounded-b-lg gap-y-14">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm md:text-base lg:flex">
        <div className="flex-column w-full md:w-3/4 p-5">
      <h1 className="text-lg text-orange-400 text-xl animate-bounce">Tervetuloa</h1>
      <p>Tämä sivusto on tarkoitettu meidän omalle japaninkurssin ryhmälle (tiedätte kyllä keitä olette, ystävät!) Täältä löytyy tärkeimmät
        käsittelemämme kielioppiasiat tähän mennessä. Jos etsit jotain spesifiä, voit turvautua kielioppi-osion hakuun. Sivustolta löytyy myös
        harjoitustehtäviä ja linkkejä hyödyllisille sivustoille! 頑張ってね！
      </p>
      <div className="my-5"><h3>Ennen kuin jatkat, ota matkaasi uusi sana!</h3>
      <br />
    <p className="word font-bold">Sana: {query.word} ({query.furigana})</p>
    <p className="meaning font-bold">Merkitys: {query.meaning}</p>
    <form action={handleClick}>
    <button type="submit" className="bg-transparent hover:bg-teal-100 text-teal-100 font-semibold hover:text-black py-2 px-4 border border-teal-100 
    hover:border-transparent rounded">Arvo uusi sana</button>
    </form>
    </div>
      </div>
      <Image className="rounded-xl"
      width={600}
      alt="Picture of a street of Japan"
      src="frontImg.jpg"
    />
      </div>
      <div className="text-sm mt-50"><p><i>&#169; Petteri Leino, 2024</i></p></div>
    </main>
  );
}
