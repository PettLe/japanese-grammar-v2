import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-teal-100 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex-column">
      <h1 className="text-lg animate-bounce">Terve</h1>
      <p>Teretulemast oppimaan japanin kielioppia ja sellasta, ehkä joku parempi teksti tähän hei myöhemmin.</p>
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
