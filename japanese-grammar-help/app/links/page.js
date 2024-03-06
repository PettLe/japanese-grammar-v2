import React from "react";
import {Link} from "@nextui-org/react";

export default function Links() {
    return (
      <main className="bg-neutral-950 flex min-h-[calc(100vh-114px)] flex-col items-center justify-between p-24 rounded-b-lg">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-slate-50 text-lg p-5 my-5">Täältä löytyy erilaisia hyödyllisiä linkkejä tukemaan opiskelua</h1>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://www3.nhk.or.jp/news/easy/" isExternal>NHK Easier</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Japanin yleisradion helpommalla kielellä kirjoitettu uutissivusto</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://easyjapanese.net/jlpt-test?hl=en-US" isExternal>Todai JLPT</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Täysipitkiä JLPT-kokeita (vaatii esim. FB-kirjautumisen)</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://tadoku.org/japanese/free-books/" isExternal>Tadoku - Graded Readers</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Kaiken tasoista ilmaisia satuja ja tarinoita</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://takoboto.jp/" isExternal>Takoboto</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Loistava sanakirja (pitch accentit myös merkittynä)</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://kanji.sljfaq.org/" isExternal>Hand Written Kanji Search</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Etsi tuntematon kanji piirtämällä</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://bunpro.jp/" isExternal>Bunpro</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">SRS kieliopin opiskeluun</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://www.wanikani.com/" isExternal>Wanikani</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">SRS kanjien ja sanaston opiskeluun</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://www.youtube.com/@kanamenaito" isExternal>Youtube - Kaname Naito</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Kielioppia selkeästi selostettuna</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://www.youtube.com/@JapanesewithShun" isExternal>Youtube - Japanese with Shun</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Helppo podcast ja vlog</p></div>
        <div className="flex w-full place-items-center"><Link className="text-lg w-1/2 md:w-1/3 text-orange-400 mx-5 hover:text-teal-500" href="https://www.youtube.com/@mikurealjapanese" isExternal>Youtube - Miku Real Japanese</Link><p className="text-slate-50 w-1/2 md:w-2/3 text-md">Kielioppia, kulttuuria ja vlog (Spotifyssä myös podcast)</p></div>
        </div>
      </main>
    );
  }