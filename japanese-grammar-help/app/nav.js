import Link from "next/link";

export default function Navbar() {
    const linkit = [{teksti: "Etusivu", osoite: "/"}, {teksti: "Kielioppi", osoite: "/grammar"}, {teksti: "Sanakirja", osoite: "/faktoja"}, {teksti: "Linkkejä", osoite: "/sivu2"}]

    return (
      <div className="bg-neutral-950 flex flex-col w-full items-center">
        <ul className="flex flex-col md:flex-row my-5">
            {linkit.map((linkki) => <li className="transition ease-in-out delay-100 
            hover:-translate-y-1 hover:scale-110 mx-10 text-teal-100 hover:text-teal-500
            duration-300"><Link href={linkki.osoite}>{linkki.teksti}</Link></li>)}
            </ul>
      </div>
    );
  }  