const tiedot = [
    {"title": "chapterLabel",
    "content": "Kappale 1"},
    {"title": "~てから / ~te kara / tapahtumajärjestys",
    "content": `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong><br>Tapahtumaketjuja voi 
    kuvata käyttämällä verbin te-muotoa.<br>明日、公園に<strong>行って</strong>、コーヒーを飲みます。<br><i>Ashita, kouen ni itte, koohii wo nomimasu.</i><br>Huomenna 
    menen puistoon <strong>ja</strong> juon kahvia.<br><br>Kun halutaan korostaa tapahtumien järjestystä, lisätään verbin te-muodon perään <strong>から</strong>
    <br>ヤケさんが<strong>来てから</strong>、食べましょう。<br><i>Jake-san ga kite kara, tabemashou.</i><br>Syödään <strong>sen jälkeen, kun</strong> Jake on saapunut.<br>
    <br>毎日、うちに<strong>帰ってから</strong>、勉強をします<br><i>Mainichi, uchi ni kaette kara, benkyou shimasu.</i><br>Opiskelen joka päivä <strong>sen jälkeen,
         kun</strong> olen palannut kotiin.`},
    {"title": "~てもいいですか / ~te mo ii desu ka / luvan kysyminen",
    "content": `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong>
    <br>Lupaa voidaan kysyä yhdistämällä verbin te-muodon perään partikkeli <strong>も</strong> (myös) + adjektiivi <strong>いい</strong> (hyvä) + 
    <strong>ですか</strong>。
    Näin saadaan lause, jonka merkitys olisi kirjaimellisesti suurinpiirtein "vaikka tehden X, onko se hyvä?"
    <br>明日は家に<strong>行ってもいいですか</strong>。
    <br><i>Ashita wa ie ni itte mo ii desu ka.</i>
    <br>Käykö jos tulen talollesi huomenna?
    <br>
    <br>ここで<strong>食べてもいいですか</strong>。
    <br><i>Koko de tabete mo ii desu ka.</i>
    <br>Saako täällä syödä?
    <br><br>
    Vastaavasti luvan voi myöntää (tai kertoa mikä on muuten vain ok) käyttämällä samaa rakennetta ilman lopussa olevaa か。
    <br>このケーキは<strong>食べてもいいです</strong>。
    <br><i>Kono keeki wa tabete mo ii desu.</i>
    <br>Tämän kakun voi syödä.
    <br>
    <br>あのゲームを<strong>買ってもいい</strong>よ。
    <br><i>Ano geemu o katte mo ii yo.</i>
    <br>Voit ostaa sen pelin.`},
    {"title": "~てはいけません / ~te wa ikemasen / kieltäminen",
    "content": `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong>
        <br>Kieltäminen tapahtuu lisäämällä verbin -te muodon perään <strong>はいけません</strong>
        <br>レストランでタバコを<strong>吸ってはいけません</strong>。
        <br><i>Resutoran de tabako o sutte wa ikemasen.</i>
        <br>Ravintolassa ei saa polttaa tupakkaa.

        <br><br>いけません on kohteliaampi muoto verbistä いけない jota myös voi käyttää. Yksinkertaisin ja kasuaalein käytettävä sana on <strong>だめ</strong>.
        <br>危ない場所に<strong>行ってはだめ</strong>よ。
        <br><i>Abunai basho ni itte wa dame yo.</i>
        <br>Vaarallisiin paikkoihin ei pidä mennä!`},
        {"title": "chapterLabel",
    "content": "Kappale 2"},
    {"title": "Adjektiivien luetteleminen",
        "content": `Tapa jolla adjektiivit yhdistetään riippuu siitä ovatko ne i- vai na-adjektiiveja. Jos kyseessä on i-adjektiivi, putoaa viimeinen い pois
        ja sen tilalle tulee ~<strong>くて</strong>. Jos kyseessä on na-adjektiivi, korvataan な hiraganalla <strong>で</strong>. Viimeistä adjektiivia ei enää 
        taivuteta tällä tavoin. Lauseen aikamuoto ilmenee vasta lauseen lopussa!
        <br>怖<strong>くて</strong>大きい熊です。
        <br><i>Kowakute ookii kuma desu.</i>
        <br>Pelottava <strong>ja</strong> iso karhu.
        <br>
        <br>静か<strong>で</strong>綺麗な公園です。
        <br><i>Shizuka de kirei na kouen desu.</i>
        <br>Rauhallinen <strong>ja</strong> kaunis puisto.
        <br>
        <br>この車は便利<strong>で</strong>速いです。
        <br><i>Kono kuruma wa benri de hayai desu.</i>
        <br>Tämä auto on käytännöllinen <strong>ja</strong> nopea.
        <br>
        <br>Huom, lauseessa kaikkien adjektiivien on oltava merkitykseltään joko kielteisiä tai myönteisiä. Muussa tapauksessa tarvitsee käyttää sanaa mutta,
        esim. <strong>が</strong>
        <br>映画は面白い<strong>ですが</strong>、とても長かったです。
        <br><i>Eiga wa omoshiroi desu ga, totemo nagakatta desu.</i>
        <br>Elokuva <strong><i>oli</i></strong> viihdyttävä, <strong>mutta</strong> todella pitkä.`},
        {"title": "Lauseiden yhdistäminen",
        "content": `Lauseiden yhdistäminen riippuu täysin siitä, minkälainen ensimmäinen lause on. Jos kyseessä on verbi- tai i-adjektiivilause, ne yhdistetään taivuttamalla
         ensimmäisen lauseen verbi tai adjektiivi te-muotoon. (ks. edellinen kielioppiasia)
        <br>毎朝、新聞を<strong>読んで</strong>、ジュースを飲みます。
        <br><i>Maiasa shinbun o yonde, juusu o nomimasu.</i>
        <br>Joka aamu luen sanomalehteä <strong>ja</strong> juon mehua.
        <br>
        <br>このシャツは<strong>白くて</strong>、あのシャツは黒いです。
        <br><i>Kono shatsu wa shirokute, ano shatsu wa kuroi desu.</i>
        <br>Tämä paita on valkoinen ja tuo paita tuolla on musta.
        <br><br>
        Jos kyseessä on substantiivi tai na-adjektiivi, yhdistetään lauseet laittamalla sanan perään <strong>で</strong>
        <br>マリさんは弁護士<strong>で</strong>、マリオさんは看護師です。
        <br><i>Mari-san wa bengoshi de, Mario-san wa kangoshi desu.</i>
        <br>Mari on asianajaja <strong>ja</strong> Mario on sairaanhoitaja.
        <br>
        <br>自然が<strong>好きで</strong>、よく森を散歩します。
        <br><i>Shizen ga suki de, yoku mori o sanpo shimasu.</i>
        <br>Tykkään luonnosta <strong>ja</strong> käyn usein metsässä kävelyillä.
        <br>(Huom. japanissa tykätä ei ole verbi vaan na-adjektiivi!)`}
]

export {tiedot};