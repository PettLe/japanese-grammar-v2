import Link from "next/link";

export default function Navbar() {
    const linkit = [{teksti: "Etusivu", osoite: "/"}, {teksti: "Kielioppi", osoite: "/grammar"}, {teksti: "Harjoituksia", osoite: "/exercises"}, {teksti: "Linkkejä", osoite: "/links"}]

    return (
      <div className="bg-neutral-950 flex flex-col md:text-lg w-full items-center md:rounded-t-lg">
        <ul className="flex flex-col md:flex-row my-5">
            {linkit.map((linkki) => <li className="transition ease-in-out delay-100 
            hover:-translate-y-1 hover:scale-110 mx-10 text-teal-100 hover:text-teal-500
            duration-300 after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 
            after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"><Link href={linkki.osoite}>{linkki.teksti}</Link></li>)}
            </ul>
      </div>
    );
  }  