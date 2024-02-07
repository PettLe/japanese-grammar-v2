import Link from "next/link";

export default function Navbar() {
    const linkit = [{teksti: "Etusivu", osoite: "/"}, {teksti: "Kielioppi", osoite: "/grammar"}, {teksti: "Sanakirja", osoite: "/faktoja"}, {teksti: "Linkkejä", osoite: "/sivu2"}]

    return (
      <div className="flex flex-col items-center mx-10">
        <ul className="flex flex-col md:flex-row my-5">
            {linkit.map((linkki) => <li className="mx-10"><Link href={linkki.osoite}>{linkki.teksti}</Link></li>)}
            </ul>
      </div>
    );
  }  