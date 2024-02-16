export default async function Dictionary() {
    const testiSana = "denki"
    // JLPT dictionary `https://jlpt-vocab-api.vercel.app/api/words?word=夜更かし`
    await fetch(`https://jlpt-vocab-api.vercel.app/api/words`, { cache: 'no-store' }).then((response) => {
        return response.json();
    }).then((data) => {
        // Tämän hetkinen metodi aivan liian hidas ja epäonnistuu
        // console.log(data)
        // console.log(data.words[0])
        for (let i = 0; i < 5; i++) {
            // console.log(Object.values(data.words[i]))
            // if (Object.values(data.words[i]).includes(testiSana)) {
                console.log(data.words[i]) 
        // } else {
            // console.log("Sanaa ei löytynyt")
        // }
    }
    })

    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-slate-50 text-lg p-5 my-5">SANAKIRJA</h1>
        </div>
      </main>
    );
  }