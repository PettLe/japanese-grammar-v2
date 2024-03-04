"use client"

import {Image} from "@nextui-org/react";
import handleClick from "./clickFunction";

export default async function Home() {
    // Fetch API-kutsu, jolla haetaan satunnainen japaninkielinen sana ulkoisesta lähteestä
    let randomWord = await fetch(`https://jlpt-vocab-api.vercel.app/api/words/random`, { cache: 'no-store' }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        return data;
    })

    const generateNewWord = function(e){
      console.log("CLICK")
      const word = e.target.querySelector(".word")
      const meaning = e.target.querySelector(".meaning")
      console.log(word + " " + meaning)
  //     // toggle.classList.toggle("hidden")
  }

  return (
    <main className="bg-neutral-950 text-teal-100 flex min-h-screen flex-col items-center justify-between p-24 rounded-b-lg">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="flex-column w-full md:w-3/4 p-5">
      <h1 className="text-lg text-orange-400 animate-bounce">Tervetuloa</h1>
      <p>Tämä sivusto on tarkoitettu meidän omalle japaninkurssin ryhmälle (tiedätte kyllä keitä olette, ystävät!) Täältä löytyy tärkeimmät
        käsittelemämme kielioppiasiat tähän mennessä. Jos etit jotain spesifiä, voit turvautua kielioppi-osion hakuun. Sivustolta löytyy myös
        harjoitustehtäviä ja linkkejä hyödyllisille sivustoille! 頑張ってね！
      </p>
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
