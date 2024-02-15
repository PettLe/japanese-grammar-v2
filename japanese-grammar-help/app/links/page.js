import React from "react";
import {Link} from "@nextui-org/react";

export default function Links() {
    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-slate-50 text-lg p-5 my-5">Täältä löytyy erilaisia hyödyllisiä linkkejä tukemaan opiskelua</h1>
        <div className="flex w-full place-items-center"><Link className="text-lg text-orange-400 mx-5" href="https://www3.nhk.or.jp/news/easy/" isExternal>NHK Easier</Link><p className="text-slate-50 text-md">Japanin yleisradion helpommalla kielellä kirjoitettu uutissivusto</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg text-orange-400 mx-5" href="https://easyjapanese.net/jlpt-test?hl=en-US" isExternal>Todai JLPT</Link><p className="text-slate-50 text-md">Täysipitkiä JLPT-kokeita (vaatii esim. FB-kirjautumisen)</p></div>
        </div>
      </main>
    );
  }