"use client";

import React from "react";
import {Card, CardHeader, CardBody, Divider, CardFooter} from "@nextui-org/react";
// Tuodaan harjoitustehtävien data erillisestä tiedostosta
import { harjoitukset } from "./harjoitusData";
import BackToTopBtn from "../topButton";

export default function Exercises() {
    // funktio vastausten paljastamiseen ja piilottamiseen
    const toggleAnswer = function(e){
        const toggle = e.target.querySelector(".toggleThis")
        toggle.classList.toggle("hidden")
    }

    return (
      <main className="bg-neutral-950 flex min-h-screen flex-col items-center justify-between p-24 rounded-b-lg">
        <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between text-sm md:text-base lg:flex">
        <h1 className="text-slate-50 text-lg p-5 my-5">Harjoituksia</h1>
        <h2>Tehtävät ovat jaettuna osiin kielioppiasioiden mukaisessa järjestyksessä. Lopussa vastaukset voi paljastaa klikkaamalla.</h2>
        
            {/* Map-funktio käy jokaisen importatun harjoitustehtävän läpi ja generoi kortit niille */}
            <div className="flex flex-col z-10 w-5xl w-full items-center justify-between">
            {harjoitukset.map((harjoitus) => (
            ((<Card
                key={harjoitus.teht}
                className="bg-slate-800 w-full md:w-3/4 p-10 my-10 rounded-xl"
                shadow="lg"
                isPressable onPress={(e) => toggleAnswer(e)} 
                fullWidth="true"
                disableRipple="true">
              <CardHeader className="flex gap-3">
                <div className="flex w-full gap-3 justify-between">
                  <p className="flex text-teal-50 font-bold text-lg" dangerouslySetInnerHTML={{__html:harjoitus.otsikko}}></p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p 
                className="text-left text-teal-50" dangerouslySetInnerHTML={{__html:harjoitus.teht}}></p>
              </CardBody>
              <CardFooter className="toggleThis hidden">
                <p 
                className="text-left text-teal-50" dangerouslySetInnerHTML={{__html:harjoitus.vast}}></p>
                </CardFooter>
            </Card>))
            ))}
    </div>
        </div>
        {/* erikseen importattu Back to the Top -painike */}
        {BackToTopBtn()}
      </main>
    );
  }