"use client"

import {Image} from "@nextui-org/react";
import handleClick from "./clickFunction";

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

export default async function Home() {
    // const router = useRouter()
    // const [word, setWord] = useState('');
    // Fetch API-kutsu, jolla haetaan satunnainen japaninkielinen sana
    let randomWord = await fetch(`https://jlpt-vocab-api.vercel.app/api/words/random`, { cache: 'no-store' }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        return data;
    })

    // const handleClick = async function(e) {
    //   // router.reload();
    //   console.log("Jebou klikkaus")
    //   console.log(e)
    // }
    const generateNewWord = function(e){
      console.log("CLICK")
      const word = e.target.querySelector(".word")
      const meaning = e.target.querySelector(".meaning")
      console.log(word + " " + meaning)
      // toggle.classList.toggle("hidden")
  }

  return (
    <main className="bg-neutral-950 text-teal-100 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex-column">
      <h1 className="text-lg animate-bounce">Terve</h1>
      <p>Teretulemast oppimaan japanin kielioppia ja sellasta, ehkä joku parempi teksti tähän hei myöhemmin.</p>
      <div className="my-5"><h3>Ennen kuin jatkat, ota matkaasi uusi sana!</h3>
      <br />
    <p className="word">Sana: {randomWord.word} ({randomWord.furigana})</p>
    <p className="meaning">Merkitys: {randomWord.meaning}</p>
    <form action={handleClick}>
    <button type="submit" className="bg-transparent hover:bg-teal-100 text-teal-100 font-semibold hover:text-black py-2 px-4 border border-teal-100 hover:border-transparent rounded">Arvo uusi sana</button>
    </form>
    </div>
      </div>
      <Image className="rounded-xl"
      width={600}
      alt="Picture of a street of Japan"
      src="frontImg.jpg"
    />
      </div>
    </main>
  );
}
