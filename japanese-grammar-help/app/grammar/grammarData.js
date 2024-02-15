const data = [
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
        <br>(Huom. japanissa tykätä ei ole verbi vaan na-adjektiivi!)`},
        {"title": "Komparatiivi osa 1",
    "content": `Kun kysytään vertailumielessä kahden asian väliltä, käytetään kysymyssanaa <strong>どちら</strong> ja partikkelia <strong>と</strong>.
    <br>デッドリフト<strong>と</strong>スクワット<strong>とどちら</strong>が厳しいですか。
    <br><i>Deddorifuto to sukuwatto to dochira ga kibishii desu ka.</i>
    <br>Kumpi on raskaampaa, maastaveto vai kyykky?
    <br>
    <br>Vastaaminen tapahtuu kaavalla "vertailun voittaja <strong>のほうが</strong> (vertailun häviäjä <strong>より</strong>) vertailtava asia です。"
    <br>デッドリフト<strong>のほうが</strong> ( スクワット<strong>より</strong> ) 厳しいです。
    <br><i>Deddorifuto no hou ga (sukuwatto yori) kibishii desu.</i>
    <br>Maastaveto on raskaampi (kuin kyykky).
    <br>! Kuten voi huomata, ns. hävinnyttä osapuolta ei ole välttämätöntä mainita.`},
  {"title": "Komparatiivi osa 2",
  "content": `Kun kyseessä on väitelause, jotain todetaan vain faktana, on rakenne "vertailun voittaja <strong>は</strong> vertailun häviäjä <strong>より</strong> 
  vertailtava asia です。
  <br>寿司<strong>は</strong>パスタ<strong>より</strong>美味しいです。
  <br><i>Sushi wa pasuta yori oishii desu.</i>
  <br>Sushi on herkullisempaa kuin pasta.
  <br>
  <br>Kun vertailtavien asioiden välillä ei ole eroa, on helpointa vastata <strong>どちらも同じぐらい</strong>(vertailtava asia)です。
  <br>どちらも同じぐらい( 可愛い )です。
  <br><i>Dochira mo onaji gurai (kawaii) desu.</i>
  <br>Molemmat ovat yhtä söpöjä.
  <br><br>Jos haluaa korostaa vaihtoehtoja, voi myös vastata seuraavalla kaavalla:
  <br>猫<strong>も</strong>犬<strong>も同じぐらい</strong> (可愛い) です。
  <br><i>Neko mo inu mo onaji gurai (kawaii) desu.</i>
  <br>Kissat ja koirat ovat yhtä söpöjä.`},
{"title": "Superlatiivi",
"content": `Kun kysytään suosikkia, parasta tms., niin käytetään kaavaa "vertailujoukko ( <strong>の中</strong> ) <strong>で</strong> kysymyssana <strong>が 
いちばん</strong> vertailtava asia ですか。"
<br>Kysymyssana voi olla aiheesta riippuen esimerkiksi どこ、何、いつ、どれ
<br>アニメ ( <strong>の中</strong> ) <strong>で何がいちばん</strong>楽しいですか。
<br><i>Anime (no naka) de nani ga ichiban tanoshii desu ka.</i>
<br>Mikä anime on mielestäsi nautittavin?
<br>
<br>Vastata voi sanomalla "ylivertainen asia<strong> が いちばん</strong> ominaisuus です。
<br>ビール<strong>がいちばん</strong>好きです。
<br><i>Biiru ga ichiban suki desu.</i>
<br>Tykkään eniten oluesta
<br>
<br>Kun väitelauseena vain kerrotaan mikä on ylivertainen, rakenne on "asia <strong>は</strong> joukko ( <strong>の中</strong> ) <strong>で いちばん</strong> ominaisuus です。"
<br>ピカチュウ<strong>は</strong>ポケモン( <strong>の中</strong> )<strong>でいちばん</strong>強いネズミです。
<br><i>Pikachuu wa pokemon (no naka) de ichiban tsuyoi nezumi desu.</i>
<br>Pikachu on vahvin hiiri kaikista pokemoneista.`},
{"title": "chapterLabel",
    "content": "Kappale 3"},
    {"title": "Verbien perustyylin preesens",
    "content": `<strong>Ryhmä 1</strong>
    <br>ます-muoto: i-loppuinen tavu + ます
    <br>Perustyyli: poistetaan ます ja vika tavu muuttuu i-loppuiseksi vastineeksi
    <br>Kielteinen perustyyli: viimeisen tavun a-loppuinen vastine + ない
    <br>! Jos verbi loppuu pelkkä う perusmuodossaan, niin kielteisessä perusmuodossa tulee <strong>わ</strong> eikä あ  
    <br><br>
     <table class="min-w-full bg-white shadow overflow-hidden rounded border-b border-gray-200">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ます-muoto</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli (neg.)</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">suomennos</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">書<strong>き</strong>ます
        <br><i>kakimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">書<strong>く</strong>
            <br><i>kaku</i></td>
          <td class="text-left py-3 px-4">書<strong>か</strong>ない
            <br><i>kakanai</i></td>
          <td class="text-left py-3 px-4"><i>kirjoittaa</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">泳<strong>ぎ</strong>ます
            <br><i>oyogimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">泳<strong>ぐ</strong>
            <br><i>oyogu</i></td>
          <td class="text-left py-3 px-4">泳<strong>が</strong>ない
            <br><i>oyoganai</i></td>
          <td class="text-left py-3 px-4"><i>uida</i></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">読<strong>み</strong>ます
            <br><i>yomimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">読<strong>む</strong>
            <br><i>yomu</i></td>
          <td class="text-left py-3 px-4">読<strong>ま</strong>ない
            <br><i>yomanai</i></td>
          <td class="text-left py-3 px-4"><i>lukea</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">飛<strong>び</strong>ます
            <br><i>tobimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">飛<strong>ぶ</strong>
            <br><i>tobu</i></td>
          <td class="text-left py-3 px-4">飛<strong>ば</strong>ない
            <br><i>tobanai</i></td>
          <td class="text-left py-3 px-4"><i>lentää</i></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">死<strong>に</strong>ます
            <br><i>shinimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">死<strong>ぬ</strong>
            <br><i>shinu</i></td>
          <td class="text-left py-3 px-4">死<strong>な</strong>ない
            <br><i>shinanai</i></td>
          <td class="text-left py-3 px-4"><i>kuolla (pls don't)</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">買<strong>い</strong>ます
            <br><i>kaimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">買<strong>う</strong>
            <br><i>kau</i></td>
          <td class="text-left py-3 px-4">買<strong>わ</strong>ない
            <br><i>kawanai</i></td>
          <td class="text-left py-3 px-4"><i>ostaa</i></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">待<strong>ち</strong>ます
            <br><i>machimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">待<strong>つ</strong>
            <br><i>matsu</i></td>
          <td class="text-left py-3 px-4">待<strong>た</strong>ない
            <br><i>matanai</i></td>
          <td class="text-left py-3 px-4"><i>odottaa</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">走<strong>り</strong>ます
            <br><i>hashirimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">走<strong>る</strong>
            <br><i>hashiru</i></td>
          <td class="text-left py-3 px-4">走<strong>ら</strong>ない
            <br><i>hashiranai</i></td>
          <td class="text-left py-3 px-4"><i>juosta</i></td>
        </tr>
        <tr class="bg-red-300">
          <td class="w-1/3 text-left py-3 px-4">あ<strong>り</strong>ます
            <br><i>arimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">あ<strong>る</strong>
            <br><i>aru</i>
          </td>
          <td class="text-left py-3 px-4"><strong>ない</strong>
            <br><i>nai</i>
          </td>
          <td class="text-left py-3 px-4"><i>olla olemassa (eloton)</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">話<strong>し</strong>ます
            <br><i>hanashimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">話<strong>す</strong>
            <br><i>hanasu</i></td>
          <td class="text-left py-3 px-4">話<strong>さ</strong>ない
            <br><i>hanasanai</i></td>
          <td class="text-left py-3 px-4"><i>puhua</i></td>
        </tr>                                                                                                                                                
      </tbody>
    </table>
    <br>
    <strong>Ryhmä 2:</strong>
    <br>Perustyyli: ます-pääte korvaantuu tavulla <strong>る</strong>
    <br>Kielteinen perustyyli: Korvataan verbin pääte päätteellä <strong>ない</strong>
    <br><br>
    <table class="min-w-full bg-white shadow overflow-hidden rounded border-b border-gray-200">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ます-muoto</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli (neg.)</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">suomennos</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">食べ<strong>ます</strong>
        <br><i>tabemasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">食べ<strong>る</strong>
            <br><i>taberu</i></td>
          <td class="text-left py-3 px-4">食べ<strong>ない</strong>
            <br><i>tabenai</i></td>
          <td class="text-left py-3 px-4"><i>syödä</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">見<strong>ます</strong>
            <br><i>mimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">見<strong>る</strong>
            <br><i>miru</i></td>
          <td class="text-left py-3 px-4">見<strong>ない</strong>
            <br><i>minai</i></td>
          <td class="text-left py-3 px-4"><i>katsoa / nähdä</i></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="w-1/3 text-left py-3 px-4">起き<strong>ます</strong>
            <br><i>okimasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">起き<strong>る</strong>
            <br><i>okiru</i></td>
          <td class="text-left py-3 px-4">起き<strong>ない</strong>
            <br><i>okinai</i></td>
          <td class="text-left py-3 px-4"><i>nousta ylös / herätä</i></td>
        </tr>
        <tr>
          <td class="w-1/3 text-left py-3 px-4">い<strong>ます</strong>
            <br><i>imasu</i></td>
          <td class="w-1/3 text-left py-3 px-4">い<strong>る</strong>
            <br><i>iru</i></td>
          <td class="text-left py-3 px-4">い<strong>ない</strong>
            <br><i>inai</i></td>
          <td class="text-left py-3 px-4"><i>olla olemassa (elävä)</i></td>
        </tr>
      </tbody>
      </table>
      <br>
      <strong>Epäsäännölliset + です:</strong>
      <br><br>
      <table class="min-w-full bg-white shadow overflow-hidden rounded border-b border-gray-200">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ます-muoto</th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli</th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">perustyyli (neg.)</th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">suomennos</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="bg-gray-100">
            <td class="w-1/3 text-left py-3 px-4"><strong>します</strong>
          <br><i>shimasu</i></td>
            <td class="w-1/3 text-left py-3 px-4"><strong>する</strong>
              <br><i>suru</i></td>
            <td class="text-left py-3 px-4"><strong>しない</strong>
              <br><i>shinai</i></td>
            <td class="text-left py-3 px-4"><i>tehdä</i></td>
          </tr>
          <tr>
            <td class="w-1/3 text-left py-3 px-4"><strong>来ます</strong>
              <br><i>kimasu</i></td>
            <td class="w-1/3 text-left py-3 px-4"><strong>来る</strong>
              <br><i>kuru</i></td>
            <td class="text-left py-3 px-4"><strong>来ない</strong>
              <br><i>konai</i></td>
            <td class="text-left py-3 px-4"><i>tulla</i></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="w-1/3 text-left py-3 px-4"><strong>です</strong>
              <br><i>desu</i></td>
            <td class="w-1/3 text-left py-3 px-4"><strong>だ</strong>
              <br><i>da</i></td>
            <td class="text-left py-3 px-4"><strong>じゃない</strong> / <strong>ではない</strong>
              <br><i>ja nai / de wa nai</i></td>
            <td class="text-left py-3 px-4"><i>olla kyseessä</i></td>
          </tr>
      </tbody>
      </table> `},
    {"title": "ので / node / Koska-rakenne",
"content": `<strong>Verbit ja i-adjektiivit</strong>
<br>Perustyylissä. Verbit ja adjektiivit voivat olla kielteisessä, myönteisessä sekä menneessä muodossa.
<br>今日は<strong>寒いので</strong>、外に行きません。
<br><i>Kyou wa samui node, soto ni ikimasen.</i>
<br>Tänään on kylmä, <strong>joten</strong> en mene ulos.
<br>
<br>コーヒーは<strong>甘くなかったので</strong>、サトウを入れました。
<br><i>Koohii wa amakunakatta node, satou o iremashita.</i>
<br>Kahvi ei ollut makeaa, joten laitoin sokeria.
<br>
<br>明日は早く<strong>起きるので</strong>、９時に寝ます。
<br><i>Ashita wa hayaku okiru node, ku-ji ni nemasu.</i>
<br>Herään huomenna aikaisin, <strong>joten</strong> menen nukkumaan kello 21.
<br>
<br>明日は仕事が<strong>ないので</strong>、友達に会います。
<br><i>Ashita wa shigoto ga nai node, tomodachi ni aimasu.</i>
<br>Huomenna ei ole töitä, <strong>joten</strong> tapaan ystäväni.
<br>
<br><strong>Substantiivit ja na-adjektiivit</strong>
<br>Myönteisessä lauseessa substantiivien ja na-adjektiivien perään tulee <strong>な</strong> ennen <strong>ので</strong>:a
<br>Jos lause on kielteinen, な tilalle tulee <strong>じゃない</strong> / <strong>ではない</strong>
<br>寿司が<strong>好きなので</strong>、よく食べます。
<br><i>Sushi ga suki na node, yoku tabemasu.</i>
<br>Tykkään sushista, <strong>joten</strong> syön sitä usein.
<br><br><strong>夏休みなので</strong>、旅行に行きたいです。
<br><i>Natsu yasumi na node, ryokou ni ikitai desu.</i>
<br>On kesäloma, <strong>joten</strong> tahdon lähteä matkalle.
<br>
<br><strong>金曜日じゃないので</strong>、飲みに行きたくないです。
<br><i>Kinyoubi ja nai node, nomi ni ikitakunai desu.</i>
<br>Ei ole perjantai, <strong>joten</strong> en tahdo lähteä muutamalle lasilliselle.
<br>
<br>その建物は<strong>安全じゃなかったので</strong>、解体されました。
<br><i>Sono tatemono wa anzen janakatta node, kaitai saremashita.</i>
<br>Se rakennus ei ollut turvallinen, <strong>joten</strong> se purettiin.
<br><br>ので:lle löytyy myös toinen vastine, から, joka on hitusen epämuodollisempi ja subjektiivisempi. Toisaalta se myös korostaa syyn ja seurauksen
yhteyttä, jonka takia sitä käytetään esimerkiksi asemien kuulutuksissa, jotka liittyvät nopeasti reagoitaviin (jopa vaarallisiin) tilanteisiin, kuten 
aseman ohittaviin juniin.
<br>
<br>から-sanaa käyttäessä substantiivien ja na-adjektiivien taivutukset ovat hitusen erilaiset (<strong>な</strong> -> <strong>だ</strong> / <strong>です</strong>)`},
{"title": "なる / naru / adverbit + muutoksen kuvaaminen",
"content": `Adverbi voidaan muodostaa kahdella tavalla. i-adjektiiveista korvaamalla viimeinen い tavulla <strong>く</strong> ja na-adjektiiveista korvaamalla
な tavulla <strong>に</strong>
<br>早<strong>い</strong> --> 早<strong>く</strong>
<br>早<strong>く</strong>来てください。
<br><i>Hayaku kite kudasai.</i>
<br>Ole kiltti ja tule nopeasti.
<br>
<br>静か <strong>な</strong> --> 静か <strong>に</strong>
<br>もうちょっと静か<strong>に</strong>話して。
<br><i>Mou chotto shizuka ni hanashite.</i>
<br>Puhuisitko vähän hiljempaa.
<br><br>
<strong>Muutosta</strong> voi kuvata verbillä <strong>なる</strong> (Ryhmä 1: なります なりません -> なる ならない)
<br>Rakenne voi käyttää niin adjektiiveja kuin substantiiveja, ja kertoo <i>miksi</i> tai <i>millaiseksi</i> jokin tulee. Näitä asioita voi olla mm.
ammatit, vuodenajat, ikä, ominaisuus, ajan muutos työstä lomaksi jne.
<br>公園は賑やか<strong>になりました</strong>。
<br><i>Kouen wa nigiyaka ni narimashita.</i>
<br>Puistosta tuli eläväinen/vilkas.
<br>
<br>どうして夏<strong>になりません</strong>か。
<br><i>Doushite natsu ni narimasen ka.</i>
<br>Miksi kesä ei tule?
<br>
<br>綺麗<strong>になりたい</strong>です。
<br><i>Kirei ni naritai desu.</i>
<br>Tahdon tulla kauniiksi.
<br>
<br>値段がだんだん高<strong>くなります</strong>。
<br><i>Nedan ga dandan takaku narimasu.</i>
<br>Hinnat kallistuvat pikkuhiljaa`},
{"title": "chapterLabel",
    "content": "Kappale 4"},
]

export {data};