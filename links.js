const { http, https } = require("follow-redirects");
const fs = require("fs");

const tweets = [
  {
    id: "1511479011620315144",
    text: "https://t.co/DPQCcM9IGr https://t.co/WYwEkVpTyq",
  },
  {
    id: "1511478712327446541",
    text: "https://t.co/9LFpMtmE1I https://t.co/OCIBEVBs2B",
  },
  {
    id: "1511478463294808065",
    text: "https://t.co/qQVM8L1DYO https://t.co/sGvpRjxRIx",
  },
  {
    id: "1511478098130259974",
    text: "https://t.co/5VBbY05DWw https://t.co/rMu8HIWc29",
  },
  {
    id: "1511477822228942855",
    text: "https://t.co/DYTx2qRcDT https://t.co/SOW2IH4hTI",
  },
  {
    id: "1511477636580712459",
    text: "https://t.co/NVMPexaYBb https://t.co/OYDlpL04Wc",
  },
  {
    id: "1511477282438881285",
    text: "so inclusive https://t.co/hw2Yrkz9y1 https://t.co/MWxK41wHql",
  },
  {
    id: "1511477043019534344",
    text: "https://t.co/JKkryTRM1y https://t.co/0A4uv4whXx",
  },
  {
    id: "1511476944629600259",
    text: "https://t.co/CXJw6vGoXk https://t.co/N3V3ZT6Y7e",
  },
  {
    id: "1511476701309644800",
    text: "https://t.co/2JSZXtRfMb https://t.co/8etfa1SVRb",
  },
  {
    id: "1511476541884186625",
    text: "https://t.co/jXnIcldzhK https://t.co/gRP6Jka3Vv",
  },
  {
    id: "1511476273767399424",
    text: "https://t.co/C82rVo4qEH https://t.co/l00uG68qwF",
  },
  {
    id: "1511475923765321729",
    text: "https://t.co/CL30jlrYi4 https://t.co/vbNQ7am7SP",
  },
  {
    id: "1511475622421401600",
    text: "https://t.co/56tTu8oHJc https://t.co/xYjTTmpjaZ",
  },
  {
    id: "1511475409841446915",
    text: "https://t.co/gVvcLcmzFE https://t.co/STTu74Mqs6",
  },
  {
    id: "1511474837264420875",
    text: "https://t.co/B8FrZ5wyb8 https://t.co/Mr0xBf1ZNl",
  },
  {
    id: "1511474686068248579",
    text: "https://t.co/ShXDtsEWLD https://t.co/mA8bQz3zMy",
  },
  {
    id: "1511474452676190209",
    text: "https://t.co/UNRPDVYfT1 https://t.co/AJmmuvisqr",
  },
  {
    id: "1511474360091127812",
    text: "https://t.co/8e45LdhY2p https://t.co/nvYy5ac4mn",
  },
  {
    id: "1511474218394951680",
    text: "https://t.co/tmyd1uRrWT https://t.co/qsWYuAFw5D",
  },
  {
    id: "1511473885631467528",
    text: "https://t.co/gb3bf0q6FK https://t.co/ZWygMaFCag",
  },
  {
    id: "1511473751736655880",
    text: "https://t.co/fgp9xKLabC https://t.co/PSxfboonp3",
  },
  {
    id: "1511473413575122947",
    text: "https://t.co/a8kDtFIv8j https://t.co/49kKSzLvNr",
  },
  {
    id: "1511473207949340672",
    text: "https://t.co/SJX61N94Rq https://t.co/6vMP7cTzzr",
  },
  {
    id: "1511473027300614145",
    text: "RIP Pluto https://t.co/mq4zC53ymE https://t.co/xmlmSArxlH",
  },
  {
    id: "1511472408485634057",
    text: "https://t.co/7tLD9HHF4f https://t.co/r87ZDVSLa5",
  },
  {
    id: "1511471843051556869",
    text: "this one got me https://t.co/VE2vI5dJOT https://t.co/6r4HjrUmKO",
  },
  {
    id: "1511471566672076805",
    text: "https://t.co/lHhbbv6QrB https://t.co/11qE39FVls",
  },
  {
    id: "1511471410107097093",
    text: "https://t.co/DNaQfRVZu7 https://t.co/Rp3iFEFJf8",
  },
  {
    id: "1511471034712662018",
    text: "https://t.co/28tDd5WmTm https://t.co/M0yl5haDVI",
  },
  {
    id: "1511470766432432128",
    text: "https://t.co/sGfUb2051M https://t.co/yfACHHhRM7",
  },
  {
    id: "1511470560496304136",
    text: "go blue https://t.co/lLu7KoGteC https://t.co/20dgyFkvds",
  },
  {
    id: "1511470113387692034",
    text: "https://t.co/vyrofK68JI https://t.co/3vr3VeB0Yt",
  },
  {
    id: "1511469959498633216",
    text: "https://t.co/WoAGikGMTt https://t.co/AC38AchmUA",
  },
  {
    id: "1511469749783388166",
    text: "https://t.co/NcpyT598pP https://t.co/HMpU3dhZ2X",
  },
  {
    id: "1511469537476100096",
    text: "https://t.co/auQgD6WdCO https://t.co/sGIs4htLi9",
  },
  {
    id: "1511469412926345217",
    text: "https://t.co/LjzcrxHUUm https://t.co/4TvlZsvClo",
  },
  {
    id: "1511469125171826689",
    text: "https://t.co/4zMJfTx5sQ this is so smug lol https://t.co/W0BOXS0O2B",
  },
  {
    id: "1511468794400628740",
    text: "https://t.co/eIIOgOzUW3 https://t.co/NSVxMs6HG5",
  },
  {
    id: "1511468517866053638",
    text: "https://t.co/4W2RnZ7l8R https://t.co/BW8U321KBI",
  },
  {
    id: "1511468399070695424",
    text: "https://t.co/Ws1xFtfUwb https://t.co/igX8Qenvly",
  },
  {
    id: "1511468231852187659",
    text: "thanx https://t.co/TOnnnYXhXq https://t.co/NHDxNXBuXP",
  },
  {
    id: "1511467838397165569",
    text: "https://t.co/fIut2GLo2n https://t.co/BnLWSzabSi",
  },
  {
    id: "1511467617042718720",
    text: "https://t.co/zZS78ARrHo https://t.co/rZPwhY3UEV",
  },
  {
    id: "1511467474717450243",
    text: "https://t.co/dDUDN2ElPA https://t.co/K5voIFZod8",
  },
  {
    id: "1511467129006178308",
    text: "https://t.co/zHanWPY9Jk https://t.co/lkya05cWVT",
  },
  {
    id: "1511466878039961602",
    text: "https://t.co/k6koTlaaIi https://t.co/ltlzXzMlRL",
  },
  {
    id: "1511466455681966095",
    text: "https://t.co/8l187uqwox",
  },
  {
    id: "1511466363407187968",
    text: "wikipedia rocks https://t.co/TvqQBv59gi",
  },
  {
    id: "1511466180166524938",
    text: "lots of options https://t.co/r6F6fTJJ6y",
  },
  {
    id: "1511466049190912003",
    text: "https://t.co/qhrG0KgkkK",
  },
  {
    id: "1511465885122322435",
    text: "Wikipedia editors often put userboxes on their user pages to communicate traits/interests and some of them are *so* funny. starting a thread of some good ones I see in the wild",
  },
  {
    id: "1511454811077685248",
    text: "https://t.co/P1FCQgIdP2",
  },
  {
    id: "1511454740428767239",
    text: "https://t.co/NMpBDeKw1i",
  },
  {
    id: "1511423036091613188",
    text: "https://t.co/e52K91xPaF",
  },
  {
    id: "1511422983239176196",
    text: "https://t.co/MWlcyNOYvf",
  },
  {
    id: "1511422334036373510",
    text: "https://t.co/S0rGrOGBdl",
  },
  {
    id: "1511422206705750018",
    text: "https://t.co/z4j7AflN6Z",
  },
  {
    id: "1511351129468194823",
    text: "https://t.co/7QRurAsiXA photo: RickyBennison, CC BY-SA 4.0",
  },
  {
    id: "1511350950874828800",
    text: "https://t.co/rORmGNwm06",
  },
  {
    id: "1511349300013502469",
    text: "all hail the almighty Jar'Edo Wens 🙏  Jared(?)'s only other edit was adding \"Yohrmum\" to a list of Australian dieties. \nWikipedia is usually very good at catching this sort of vandalism. please don't try it (and if you do, get ready to get blocked/banned) https://t.co/RPUixTZogs",
  },
  {
    id: "1511347990509805575",
    text: 'in 2005, an anonymous editor (possibly named Jared Owens) added a Wikipedia entry for an "aboriginal god" named Jar\'Edo Wens. despite being just 2 sentences and having no sources, it remained up for almost 10 years, was translated into 4+ languages, even was printed into a book https://t.co/CvhBdAXlgr',
  },
  {
    id: "1511346165777850381",
    text: "https://t.co/3wvMVicjvb",
  },
  {
    id: "1511346122173952002",
    text: "the almighty tongs, the holiest kitchen tool https://t.co/TMuK9y6Vwl",
  },
  {
    id: "1511165702408916994",
    text: "almost didn't post this because I don't wanna glorify vandalism but it's just so funny https://t.co/Hn4KYRqL3k",
  },
  {
    id: "1511164838361370628",
    text: "Julius Pringles https://t.co/0n4eOoNQe9",
  },
  {
    id: "1511163241266876416",
    text: "https://t.co/telmSKGoYW photo: Cgs, CC BY-SA 3.0",
  },
  {
    id: "1511163150036606976",
    text: "https://t.co/Uq617irl1w",
  },
  {
    id: "1511162528935690241",
    text: "https://t.co/xuR1eH2VgH",
  },
  {
    id: "1511162491597987848",
    text: "https://t.co/2Zp25rz0LJ",
  },
  {
    id: "1511073293704605697",
    text: "@LucasWerkmeistr WOWWW congrats!!!!!",
  },
  {
    id: "1511064807105089547",
    text: "I hate wikipediAPRIL FOOLS!!!!!!!!!",
  },
  {
    id: "1511061112829190149",
    text: "@RadiantMF https://t.co/S5G0BAlQNJ",
  },
  {
    id: "1511061005807362050",
    text: "https://t.co/mqfRcSwE1Y",
  },
  {
    id: "1511054752725012491",
    text: "@jausick https://t.co/gevk2vjG9p photo: Mx. Granger, public domain",
  },
  {
    id: "1511054550622515202",
    text: "https://t.co/FFj5RHcSzR",
  },
  {
    id: "1510814939010715652",
    text: "for the record I do kinda like math, even the abstract nonsense https://t.co/mdygNqAaG0",
  },
  {
    id: "1510813927181017094",
    text: "oh yeah this math concept comes very naturally for me https://t.co/ebcWP8zTta",
  },
  {
    id: "1510803280066228231",
    text: "@MKVRiscy tfw you see the the 27th sporadic group😳👅😱😍",
  },
  {
    id: "1510800871772278789",
    text: "https://t.co/s0DsZxNx4V",
  },
  {
    id: "1510800830672297985",
    text: "https://t.co/K3HpZ2Eeb3",
  },
  {
    id: "1510800609825505280",
    text: "RT @MKVRiscy: Guys help I signed up to join a tits group but apparently it’s a math thing 😭 https://t.co/6QbAgqvIq8",
  },
  {
    id: "1510673099003502594",
    text: "https://t.co/CE6s4PXXZW",
  },
  {
    id: "1510673060042620930",
    text: "https://t.co/ebN66cSZaP",
  },
  {
    id: "1510672758182752261",
    text: "https://t.co/bYuwfvFSYy",
  },
  {
    id: "1510672433560403976",
    text: "wuggiest frug I’ve seen in my life https://t.co/aUVeMBlsff",
  },
  {
    id: "1510644654412382213",
    text: "https://t.co/xxDmME7LNh photo: Jake Metcalf from Bremerton WA, US of MFn A, CC BY 2.0",
  },
  {
    id: "1510644553157599236",
    text: "https://t.co/7L7m64b79t",
  },
  {
    id: "1510641979822153734",
    text: "https://t.co/pdyyXxXwot photo: Matthew Bellemare, CC BY-SA 3.0",
  },
  {
    id: "1510641865904828417",
    text: "really makes you think https://t.co/78AUgnn7cT",
  },
  {
    id: "1510640335495602182",
    text: "https://t.co/FBA61c7QRW",
  },
  {
    id: "1510640283347783690",
    text: "https://t.co/m3gB1oKnwX",
  },
  {
    id: "1510637758905307139",
    text: "https://t.co/OeWwMNREYs @jackmanzolillo photo: Illegitimate Barrister, CC BY-SA 4.0",
  },
  {
    id: "1510637608988200960",
    text: "https://t.co/OopApz2zTW",
  },
  {
    id: "1510449651551543305",
    text: "https://t.co/6qSqG3C4rp photo: Lorie Shaull from St Paul, United States, CC BY 2.0",
  },
  {
    id: "1510449554553987073",
    text: "https://t.co/X73z7ldret",
  },
  {
    id: "1510448976734085123",
    text: "@Dromeoraptor https://t.co/t6OgTD8RUG photo: Olga Ernst, CC BY-SA 4.0",
  },
  {
    id: "1510448859431985161",
    text: "https://t.co/rC3vqTUSkx",
  },
  {
    id: "1510208833943216131",
    text: "RT @coolgirl0nline: i got a ticket for texting and driving but i was reading the Wikipedia page for pulled pork",
  },
  {
    id: "1510025840964386824",
    text: "https://t.co/JVyf4cIv5t \n@Myles_Bartoli photo: Serenity, CC BY-SA 3.0",
  },
  {
    id: "1516392532158165007",
    text: "https://t.co/g3cEvpAQZj",
  },
  {
    id: "1516391640939773957",
    text: "photo: wetwebwork, CC BY-SA 2.0 https://t.co/5emmUaOKqL",
  },
  {
    id: "1516391638939185155",
    text: "https://t.co/TLFrEFAuCn",
  },
  {
    id: "1516252606233985028",
    text: "https://t.co/Y6Z0uDdIm1",
  },
  {
    id: "1516252604497547267",
    text: "https://t.co/T1YOPXiLeU",
  },
  {
    id: "1516187273175482370",
    text: "https://t.co/Wp5Yty8xeJ",
  },
  {
    id: "1516187271216652292",
    text: "https://t.co/QTaVlVQ4Aq",
  },
  {
    id: "1516159098034794497",
    text: "RT @anniierau: omg! I'm in the @newyorker!!! thanks @naamanzhou for writing about the @depthsofwiki live show!!!! :') \nhttps://t.co/ctFw0lO…",
  },
  {
    id: "1516062149180899334",
    text: "https://t.co/KwaNMFwEs4",
  },
  {
    id: "1516062148031565833",
    text: "https://t.co/Cuj0Axz1Bl",
  },
  {
    id: "1516059156121362435",
    text: "https://t.co/maySTJd1wA",
  },
  {
    id: "1516058767376400388",
    text: "https://t.co/fWcCJ88h5P",
  },
  {
    id: "1516058765799342094",
    text: "question everything https://t.co/7Win5DmvlM",
  },
  {
    id: "1515673197487792134",
    text: "https://t.co/fJI1ktucZb",
  },
  {
    id: "1515673196376297473",
    text: "https://t.co/UQDZi7r5pF",
  },
  {
    id: "1515669868187688971",
    text: "photo: United States Navy, Public domain https://t.co/aJlXe8hgse",
  },
  {
    id: "1515669866551947265",
    text: "https://t.co/MfThLhiWGR",
  },
  {
    id: "1515669248546328577",
    text: "https://t.co/qMJXbuWyg6 photo:\nThe White House, Public domain",
  },
  {
    id: "1515669246700929027",
    text: "https://t.co/QMuliVTbU3",
  },
  {
    id: "1515508322539089927",
    text: 'it is cute and funny that the "Elizabethan collar" is for pets and the "ruff" is for humans https://t.co/6bZzHI5Ztc',
  },
  {
    id: "1515506251165220871",
    text: "photo: Megs, CC BY-SA 4.0 aka the wonderful @megwacha !!! https://t.co/nEOBLZCzj9",
  },
  {
    id: "1515506249475014657",
    text: "https://t.co/6wLuqdNNHd",
  },
  {
    id: "1515417928438530048",
    text: "photo: Julien.jeany, CC BY-SA 4.0 https://t.co/1lO1qxAV4q",
  },
  {
    id: "1515417735664218112",
    text: "https://t.co/YWqQZ4dj7c",
  },
  {
    id: "1515411989711011843",
    text: "@Ittapup_ I'm very curious what Robyn is up to now. and I wonder if that crazzzzzzzy lady gets recognized on the street! does anyone know Robyn's whereabouts?",
  },
  {
    id: "1515410133534351374",
    text: "https://t.co/5hhxkAve6X",
  },
  {
    id: "1515410131835506688",
    text: "https://t.co/ZIdxumY2xq",
  },
  {
    id: "1515408430147723264",
    text: "@PSArsonist didn't believe it til I saw this 😭😭😭 https://t.co/LbTZbKut5s",
  },
  {
    id: "1515408101108850699",
    text: "https://t.co/O3IuETNopi",
  },
  {
    id: "1515408099955429381",
    text: "https://t.co/IheFldGjOs",
  },
  {
    id: "1515354364294180868",
    text: "https://t.co/yNcDyqOpdg",
  },
  {
    id: "1515354277488832513",
    text: "they are so crazzzy! can't take them anywhere! https://t.co/LaueMgBNhn",
  },
  {
    id: "1515352952696889346",
    text: "@Ya_boi_mg @xkcd here are all the articles with the tag! https://t.co/VRc5p6EIcq",
  },
  {
    id: "1515350275208491011",
    text: "@xkcd another good one is [weasel words]!!",
  },
  {
    id: "1515202745170595841",
    text: "https://t.co/wQhcUibJC0",
  },
  {
    id: "1515201405899972608",
    text: "when you sync up with your bff &lt;3 https://t.co/pGij4CZVEo",
  },
  {
    id: "1515178991476432896",
    text: "https://t.co/A8JZO5CWkC",
  },
  {
    id: "1515178990083977221",
    text: "absolutely obsessed with the guy who uploads these dance gifs https://t.co/87lLY1lSSr",
  },
  {
    id: "1515176027894464520",
    text: "photo: CarrieBee, Public domain https://t.co/924tvirQ9A",
  },
  {
    id: "1515175774277582851",
    text: "https://t.co/sB4ozpNNOl",
  },
  {
    id: "1515127262236008449",
    text: "https://t.co/9e617jgllo  Boris Groh, Public domain, via Wikimedia Commons",
  },
  {
    id: "1515127260788969478",
    text: "https://t.co/ygYb6cZh5c",
  },
  {
    id: "1515126909293760517",
    text: "https://t.co/s4g4dBzn5s @hunocsi Punkmorten, Public domain",
  },
  {
    id: "1515126781396856835",
    text: "https://t.co/5KWyBYBnTA",
  },
  {
    id: "1515047932839530503",
    text: "@Donald3812 @gimmicksellouts oh no! I'm not making money from this promo! and https://t.co/mZDwJcN5ka doesn't appear to be directly monetized either. I just wanted to share bc it was fun and wikipedia-related. I have no plans to start shilling nfts or vibrators on this account, i promise!!",
  },
  {
    id: "1515047014098214922",
    text: "@matthewcr I assume it's the % of your guesses that were indeed words in the article",
  },
  {
    id: "1515046189821054980",
    text: "took me almost 20 min but I finally got it!! https://t.co/w9Kqco0b6b",
  },
  {
    id: "1515040399290781702",
    text: "pleasantly surprised with https://t.co/xnXIsiXNYF, the wordle spinoff where you guess the words in a mostly-redacted wikipedia article. pretty fun! https://t.co/BDX54PTSo8",
  },
  {
    id: "1514812859720495108",
    text: "MikeGogulski, CC BY-SA 3.0 &lt;https://t.co/n9bRmB10PA&gt;, via Wikimedia Commons https://t.co/O3IuETvN0I",
  },
  {
    id: "1514812663586455552",
    text: "https://t.co/NerCzhBebR",
  },
  {
    id: "1514738748868730888",
    text: "he would fit right into this pic https://t.co/4kaBRrOELH",
  },
  {
    id: "1514738216443723776",
    text: "@Internossusest https://t.co/iVvYgsxGuv CC BY SA 3.0",
  },
  {
    id: "1514737843301765123",
    text: "love how it's synthwave https://t.co/gzfow69Re6",
  },
  {
    id: "1514611315947442196",
    text: "https://t.co/P68mDzjJji",
  },
  {
    id: "1514611313925795844",
    text: "https://t.co/30xzty4igd",
  },
  {
    id: "1514610822105817102",
    text: "photo: DonkeyHotey, CC BY 2.0 https://t.co/ull7dDbuyE.",
  },
  {
    id: "1514610820272906240",
    text: "https://t.co/UPun6dXYah",
  },
  {
    id: "1514610576470675464",
    text: "Photo: S. RIMBAUD https://t.co/ull7dDbuyE.",
  },
  {
    id: "1514610574453141508",
    text: "https://t.co/WZbdQ8yame",
  },
  {
    id: "1514478894451240960",
    text: "photo: Orygun, CC BY-SA 2.0 https://t.co/0NgvbwwBTk",
  },
  {
    id: "1514478565500280833",
    text: "https://t.co/3xL0MwubCV Photo: Kremlin. ru, CC BY 3.0",
  },
  {
    id: "1514472200220430336",
    text: "https://t.co/JtAn9PmlhX",
  },
  {
    id: "1514471582944669702",
    text: "https://t.co/EhgbLDccc4",
  },
  {
    id: "1514446714782027776",
    text: "@chandlerjdean @WestWingWriters @caveatnyc @david_j_roth @KoushaNavidar @liza_harris_ @labh_adesh @WatchNwachukwu @sarahagruen yayyy!!",
  },
  {
    id: "1514303345888047111",
    text: "Photo: J. T. Newman, Public domain https://t.co/k4HOGAjTHw",
  },
  {
    id: "1514303344050905091",
    text: "https://t.co/nHLV21WJ9B",
  },
  {
    id: "1514109107229401090",
    text: "@MakeshftSwahili https://t.co/rTzX6goFrP",
  },
  {
    id: "1514108943630573573",
    text: "don't mess with this guy's grandkids https://t.co/Smr3r74VFe",
  },
  {
    id: "1514032801493966857",
    text: "photo: National Archives at College Park, Public domain https://t.co/j8Y4kasN0y",
  },
  {
    id: "1514032685324324868",
    text: "this dude looks like one of the misshapen figures you see in bad 21st-century corporate art https://t.co/SWpRt7fbon",
  },
  {
    id: "1514028916100509702",
    text: "@miss_s4ndr4 @TheresNoTimeFor I'm sure you'll get other replies but here's the (very long) wikipedia community discussion with wikipedia editors' arguments for and against \nhttps://t.co/tkL40uE3ea",
  },
  {
    id: "1514022305013379082",
    text: "RT @TheresNoTimeFor: The Wikimedia community has voted to stop accepting #cryptocurrency donations to #Wikipedia ✨ https://t.co/y8xqTlWSvF",
  },
  {
    id: "1514022228438007810",
    text: "https://t.co/cn1jbGTh5Q",
  },
  {
    id: "1514022226860904457",
    text: "https://t.co/vcDOOkZEP5",
  },
  {
    id: "1513751453634076672",
    text: "https://t.co/9LI3LVSR3o",
  },
  {
    id: "1513749082740830210",
    text: "https://t.co/ZrXg9c9VxM",
  },
  {
    id: "1513749034212773895",
    text: "https://t.co/Qh9ocAfVvJ",
  },
  {
    id: "1513737619187851264",
    text: "thanks for the submission @ollychaney!! from the nabisco article https://t.co/Efc3IjowFG",
  },
  {
    id: "1513737438518259721",
    text: "https://t.co/g6kRjzTI7H",
  },
  {
    id: "1513698912892342273",
    text: "Maximilian Schönherr, CC BY-SA 3.0 @coochiepachi  https://t.co/GnR3PzQJsK",
  },
  {
    id: "1513698911487209479",
    text: "https://t.co/E1ShIkU8Ga",
  },
  {
    id: "1513696719137132548",
    text: "https://t.co/VJuNQGLxvy",
  },
  {
    id: "1513696530665984011",
    text: "https://t.co/2OXaVCmEF1",
  },
  {
    id: "1513696101257383941",
    text: "https://t.co/52eT8kKmTd",
  },
  {
    id: "1513696074170605572",
    text: "they were hiding https://t.co/t5MVfGd5tb",
  },
  {
    id: "1513625000351305732",
    text: "theinstantmatrix, CC BY-SA 3.0 https://t.co/AFnOONVNr3",
  },
  {
    id: "1513624998065446920",
    text: "https://t.co/G2wg6h0smF",
  },
  {
    id: "1513593777058947076",
    text: "@acieeeeeeeed idk I just think it's funny he has his own page",
  },
  {
    id: "1513593310782369797",
    text: "https://t.co/F0p9rJAu3M",
  },
  {
    id: "1513593308123054081",
    text: "https://t.co/3uQF239I4e",
  },
  {
    id: "1513570444401688578",
    text: "photo: François Lopinot / Wikimedia Commons https://t.co/Fytc5Oyt6b",
  },
  {
    id: "1513570442879148044",
    text: "https://t.co/8OspljGhlI",
  },
  {
    id: "1513541618699313161",
    text: "https://t.co/evRn3d0BBM    @cooltot101 photo: Markus Säynevirta, CC BY-SA 4.0",
  },
  {
    id: "1513541616589582345",
    text: "https://t.co/EqfdQmW3Sy",
  },
  {
    id: "1513541058600255492",
    text: "https://t.co/trMQxdmLV5 photo: Voice of America, Public domain",
  },
  {
    id: "1513541057191063552",
    text: "https://t.co/nQ38dtzish",
  },
  {
    id: "1513209468787507202",
    text: "https://t.co/fDoFY7sK04",
  },
  {
    id: "1513208639250702339",
    text: "https://t.co/huYkt3T6nu",
  },
  {
    id: "1513208508216483850",
    text: "https://t.co/vzrqTj9bE5",
  },
  {
    id: "1513206095204040704",
    text: "RT @vrandezo: I just found out you can use the Wikidata query service to find out which languages share a word for the same thing and visua…",
  },
  {
    id: "1518454717541761025",
    text: "https://t.co/bIp4WZZnvR",
  },
  {
    id: "1518454715985637376",
    text: 'Obsessed with this person who went to the Wikipedia help desk looking for "neal" https://t.co/a168LkU9mj',
  },
  {
    id: "1518442339466895361",
    text: "Elfi von Fliegenpilz, CC BY 3.0 https://t.co/Fw4W111OVW",
  },
  {
    id: "1518442337927585792",
    text: "https://t.co/XWlmH3tPTZ",
  },
  {
    id: "1518401844531412994",
    text: 'thinking about how the "Central Wisconsin Sunday" newspaper called Wikipedia editors "a mass assembly of expert Uncle Joes" in 2004 https://t.co/ooakr3KWuZ https://t.co/y4HhAF06wF',
  },
  {
    id: "1518400014506152002",
    text: "these early aughts newspaper articles about wikipedia kill me https://t.co/QI0uFu87xN https://t.co/06tvyLnWYq",
  },
  {
    id: "1518392800819269641",
    text: "link for your convenience https://t.co/AI0gEV8O1D",
  },
  {
    id: "1518392256688009221",
    text: "https://t.co/0ODlWgWZ0G",
  },
  {
    id: "1518392255291215874",
    text: "still true 19 years later https://t.co/wR2hWTDZB2",
  },
  {
    id: "1518373706229334018",
    text: "@OccamShaveCream https://t.co/Kqkm1I0gmc",
  },
  {
    id: "1518370269676646404",
    text: "the full list is fun to peruse! note that the list appears to be ranked by length in bytes, not by number of entries in the list. Also, it was last updated October 2019 https://t.co/uMxNU9fErR",
  },
  {
    id: "1518370268602851329",
    text: 'Some disambiguation pages are *long.* There are 262 William Smiths, 247 John Smiths, and 182 John Browns with Wikipedia articles. Over 800 "St. Mary\'s Church" articles and 167 articles titled "I want you", most of which are about songs',
  },
  {
    id: "1518359153722462209",
    text: "https://t.co/G6wK5alIJJ",
  },
  {
    id: "1518359152048971776",
    text: "https://t.co/4llEWSmOX0",
  },
  {
    id: "1518357873524412418",
    text: "money doesn't buy happiness &lt;3 https://t.co/1bphhjw0Rg",
  },
  {
    id: "1518349818892066817",
    text: "https://t.co/z6hAJfgEtM",
  },
  {
    id: "1518349815914156041",
    text: "https://t.co/qdH5Vrxjap",
  },
  {
    id: "1518349812336320514",
    text: "https://t.co/uaCkFPgUeh",
  },
  {
    id: "1518349808154685440",
    text: 'the scientific term for a bird\'s overall vibe is "jizz" https://t.co/F8kHZ0HKtt',
  },
  {
    id: "1518349805159960576",
    text: "thread of horny birding/ornithology words",
  },
  {
    id: "1518347130213179396",
    text: "https://t.co/bekPiUc8ps",
  },
  {
    id: "1518347128808083456",
    text: "https://t.co/RIfIGqF4Ur",
  },
  {
    id: "1518346976403804165",
    text: "what word do do you use for them? https://t.co/1Mu2qAkxey",
  },
  {
    id: "1518344980162650113",
    text: "https://t.co/XzioxgNfrS",
  },
  {
    id: "1518344876399681538",
    text: "I learned from @dhjshi_shi that Rule 34 applies to rubber duck debugging and it's reddit /u/fuckswithducks. now you have to know too!!!",
  },
  {
    id: "1518344874671620096",
    text: "he is so smart &lt;3 https://t.co/E0gMARuUDd",
  },
  {
    id: "1518285167093288971",
    text: "https://t.co/0vuCl4HgN9",
  },
  {
    id: "1518285165398827010",
    text: "https://t.co/ZcKAncnzXj",
  },
  {
    id: "1518270705892302850",
    text: "https://t.co/zWBXcygJfP",
  },
  {
    id: "1518270703765757952",
    text: "https://t.co/C36lOA0ANx",
  },
  {
    id: "1518270129695604736",
    text: "https://t.co/xcCijtBUFe",
  },
  {
    id: "1518270128349188097",
    text: "https://t.co/vKukC3BRDj",
  },
  {
    id: "1518265008744026116",
    text: "https://t.co/7ykXEhBtqY",
  },
  {
    id: "1518265007523381248",
    text: "https://t.co/dBKhKCHOBZ",
  },
  {
    id: "1518258545229275139",
    text: "RT @FinitePhysicist: mom said it was my turn to use the electron https://t.co/KkpEBSVXug",
  },
  {
    id: "1518258280056958976",
    text: "https://t.co/pA9VZpmnCI",
  },
  {
    id: "1518258277187993605",
    text: "https://t.co/7XjawkYMvw",
  },
  {
    id: "1518257533122662400",
    text: "photo: United States Army Air Force, Public domain https://t.co/LHmwzLE5zR",
  },
  {
    id: "1518257531977613318",
    text: "https://t.co/hD6MHklsT3",
  },
  {
    id: "1518254996420276224",
    text: "https://t.co/nDcoycl3lK",
  },
  {
    id: "1518254995027734528",
    text: "is this real https://t.co/AD7OmQoxy3",
  },
  {
    id: "1518254365714391040",
    text: "https://t.co/FVOsDT7BgQ",
  },
  {
    id: "1518254363969470465",
    text: "https://t.co/QI2GiL9ZF6",
  },
  {
    id: "1518245633840324610",
    text: "https://t.co/j5JNzhoZlM",
  },
  {
    id: "1518245632586268674",
    text: "https://t.co/M5P3egsd91",
  },
  {
    id: "1517989024400609281",
    text: "https://t.co/j9hLZOd7zi",
  },
  {
    id: "1517928223413317632",
    text: "@embel713 https://t.co/bSS61V3Zk0",
  },
  {
    id: "1517891241387560961",
    text: "https://t.co/ctSay5FzAc",
  },
  {
    id: "1517891239898759168",
    text: "on a brighter note https://t.co/dvGa0VUacE",
  },
  {
    id: "1517725183183921153",
    text: "submitted by @nhfruchter ! photo via Jim Evans, CC BY-SA 4.0 https://t.co/R5YF7yYR9l",
  },
  {
    id: "1517725181845942272",
    text: "https://t.co/vapa7TARRL",
  },
  {
    id: "1517720037896990721",
    text: "https://t.co/WxGIffl7tg",
  },
  {
    id: "1517720036680605697",
    text: "https://t.co/0pmwKq0Gql",
  },
  {
    id: "1517710370827345920",
    text: "RT @anniierau: wrote about why dudes dig digging! https://t.co/fD7QIzCkyM",
  },
  {
    id: "1517679142736744448",
    text: "this is who edits wikipedia. on the internet no one knows you're a dog",
  },
  {
    id: "1517674669809278978",
    text: "photo: Smallbones, CC BY-SA 3.0 https://t.co/PDUPK0ZqTK",
  },
  {
    id: "1517674668353855491",
    text: "https://t.co/bIr8bv7GeA",
  },
  {
    id: "1517660628806246400",
    text: "https://t.co/JmrD8peszH",
  },
  {
    id: "1517639868603584512",
    text: "https://t.co/wyTbSP5ya0",
  },
  {
    id: "1517639867584417792",
    text: "https://t.co/w8GCKT4HDb",
  },
  {
    id: "1517539745613725697",
    text: "RT @reedkavner: May 6! @depthsofwiki LIVE is coming back to @caveatnyc. This sold out last time and it'll sell out again, so get ya tix now…",
  },
  {
    id: "1517382573831462912",
    text: "wikipedia",
  },
  {
    id: "1517381330547400704",
    text: "Gophi, CC BY-SA 4.0 https://t.co/4jiu0uQnvT",
  },
  {
    id: "1517381329171718149",
    text: "https://t.co/gZeokqgyoa",
  },
  {
    id: "1517380615024300032",
    text: "https://t.co/m6rDPEJD4M",
  },
  {
    id: "1517380613623492610",
    text: "wish this were me https://t.co/dmHMgkZcQ7",
  },
  {
    id: "1517370358566989825",
    text: "https://t.co/qmQKuWihPp",
  },
  {
    id: "1517370356876644355",
    text: 'I don\'t care about the "metaverse" I want this https://t.co/cfgsR21cHh',
  },
  {
    id: "1517302803705835521",
    text: "reminder for finals season https://t.co/nKjiIXpdsG",
  },
  {
    id: "1517282774784352256",
    text: "your crush isn't thinking about you they're reading https://t.co/rVDlAazDLh",
  },
  {
    id: "1517282422945157123",
    text: "https://t.co/5tfT7puQMQ",
  },
  {
    id: "1517282421678424064",
    text: "coolest page of all time https://t.co/6Urz0kLKXt",
  },
  {
    id: "1517171411927851009",
    text: "without geography, you’re nowhere https://t.co/qtwh6s9mCc",
  },
  {
    id: "1516988704556036097",
    text: "https://t.co/mOLzlGoyXc via @CTE_theo",
  },
  {
    id: "1516988702538534912",
    text: "if you liked toast sandwich you're gonna love https://t.co/GyhvmNJ3N3",
  },
  {
    id: "1516980353403076608",
    text: "https://t.co/TYyZICEp0b",
  },
  {
    id: "1516980351737946113",
    text: "https://t.co/2yQYC7slac",
  },
  {
    id: "1516979155266584584",
    text: "@turangalula omg",
  },
  {
    id: "1516973181365637120",
    text: "https://t.co/SJhO8VkduO",
  },
  {
    id: "1516973179859836930",
    text: "goals https://t.co/1V5p6O3rzn",
  },
  {
    id: "1516850237880610817",
    text: "https://t.co/nkDeo1lPYN @Happify10",
  },
  {
    id: "1516850236450394122",
    text: "https://t.co/5FEY2xZWrQ",
  },
  {
    id: "1516819327256875013",
    text: "https://t.co/FTj3xE3uSI submitted by @lucia_urreta_",
  },
  {
    id: "1516819324602036227",
    text: "https://t.co/Fvhk4MDODl",
  },
  {
    id: "1516804125878591495",
    text: "@kwhitaker_ https://t.co/QKrc4Qnohz",
  },
  {
    id: "1516800074235396099",
    text: "most mammals on the list have one citation but lion has six. this objectively means that lions are six times more gay https://t.co/gJSptJBsYH",
  },
  {
    id: "1516798718464430086",
    text: "oh! thank you to @literalsynapsid for sending this in my discord this morning! feel free to join for lots of fun facts, trivia, redactle competitions, etc etc. link in bio!",
  },
  {
    id: "1516797842794422275",
    text: "@fruitbbat this is the funniest QT ive ever seen",
  },
  {
    id: "1516797025584623626",
    text: "https://t.co/X45w5f7K1n",
  },
  {
    id: "1516797023265202182",
    text: "List of mammals displaying homosexual behavior https://t.co/drMkSg6oLH",
  },
  {
    id: "1516635053899538435",
    text: "he died in 2008 at the age of 102!! https://t.co/ldw4W3r0aU",
  },
  {
    id: "1516633949648437256",
    text: "Happy Bicycle Day, the (79th!) anniversary of chemist Albert Hofmann taking a massive dose of LSD and had the first LSD trip ever, which started as he was biking home from the lab \nhttps://t.co/kd4LQwuJx1 https://t.co/TiepUOS6Q2",
  },
  {
    id: "1516528636756733963",
    text: "(obligatory disclosure that I made this parody with inspect element &amp; I don't condone vandalism) https://t.co/J6BBnIRTry",
  },
  {
    id: "1516526938181050374",
    text: "https://t.co/3o7EHJkdrX",
  },
  {
    id: "1516526936591327241",
    text: "https://t.co/Y6E8EgkilI",
  },
  {
    id: "1516520985054400525",
    text: '@sg_noya @waitbutwhy haha. out of curiosity, I searched "my account" in Wikipedia and it redirects to "User (computing)". \n\n*This* account actually does have its own article now, though! https://t.co/XihiwnN22f',
  },
  {
    id: "1516519409011073028",
    text: "@waitbutwhy hello!!! if you like this thread you might like my account!!!!",
  },
  {
    id: "1516393066130722816",
    text: "https://t.co/4m07sGdLX0",
  },
  {
    id: "1516393064612388868",
    text: "this made it into the article for Atlantic Records https://t.co/8MbHB2Z47z",
  },
  {
    id: "1516392534234259468",
    text: "https://t.co/QB3OgnAHvc",
  },
  {
    id: "1516392532158165007",
    text: "https://t.co/g3cEvpAQZj",
  },
  {
    id: "1516391640939773957",
    text: "photo: wetwebwork, CC BY-SA 2.0 https://t.co/5emmUaOKqL",
  },
  {
    id: "1516391638939185155",
    text: "https://t.co/TLFrEFAuCn",
  },
  {
    id: "1516252606233985028",
    text: "https://t.co/Y6Z0uDdIm1",
  },
  {
    id: "1516252604497547267",
    text: "https://t.co/T1YOPXiLeU",
  },
  {
    id: "1516187273175482370",
    text: "https://t.co/Wp5Yty8xeJ",
  },
  {
    id: "1516187271216652292",
    text: "https://t.co/QTaVlVQ4Aq",
  },
  {
    id: "1516159098034794497",
    text: "RT @anniierau: omg! I'm in the @newyorker!!! thanks @naamanzhou for writing about the @depthsofwiki live show!!!! :') \nhttps://t.co/ctFw0lO…",
  },
  {
    id: "1516062149180899334",
    text: "https://t.co/KwaNMFwEs4",
  },
  {
    id: "1516062148031565833",
    text: "https://t.co/Cuj0Axz1Bl",
  },
  {
    id: "1516059156121362435",
    text: "https://t.co/maySTJd1wA",
  },
  {
    id: "1516058767376400388",
    text: "https://t.co/fWcCJ88h5P",
  },
  {
    id: "1516058765799342094",
    text: "question everything https://t.co/7Win5DmvlM",
  },
  {
    id: "1515673197487792134",
    text: "https://t.co/fJI1ktucZb",
  },
  {
    id: "1515673196376297473",
    text: "https://t.co/UQDZi7r5pF",
  },
  {
    id: "1515669868187688971",
    text: "photo: United States Navy, Public domain https://t.co/aJlXe8hgse",
  },
  {
    id: "1515669866551947265",
    text: "https://t.co/MfThLhiWGR",
  },
  {
    id: "1515669248546328577",
    text: "https://t.co/qMJXbuWyg6 photo:\nThe White House, Public domain",
  },
  {
    id: "1515669246700929027",
    text: "https://t.co/QMuliVTbU3",
  },
  {
    id: "1515508322539089927",
    text: 'it is cute and funny that the "Elizabethan collar" is for pets and the "ruff" is for humans https://t.co/6bZzHI5Ztc',
  },
  {
    id: "1515506251165220871",
    text: "photo: Megs, CC BY-SA 4.0 aka the wonderful @megwacha !!! https://t.co/nEOBLZCzj9",
  },
  {
    id: "1515506249475014657",
    text: "https://t.co/6wLuqdNNHd",
  },
  {
    id: "1515417928438530048",
    text: "photo: Julien.jeany, CC BY-SA 4.0 https://t.co/1lO1qxAV4q",
  },
  {
    id: "1515417735664218112",
    text: "https://t.co/YWqQZ4dj7c",
  },
  {
    id: "1515411989711011843",
    text: "@Ittapup_ I'm very curious what Robyn is up to now. and I wonder if that crazzzzzzzy lady gets recognized on the street! does anyone know Robyn's whereabouts?",
  },
  {
    id: "1515410133534351374",
    text: "https://t.co/5hhxkAve6X",
  },
  {
    id: "1515410131835506688",
    text: "https://t.co/ZIdxumY2xq",
  },
  {
    id: "1515408430147723264",
    text: "@PSArsonist didn't believe it til I saw this 😭😭😭 https://t.co/LbTZbKut5s",
  },
  {
    id: "1515408101108850699",
    text: "https://t.co/O3IuETNopi",
  },
  {
    id: "1515408099955429381",
    text: "https://t.co/IheFldGjOs",
  },
  {
    id: "1515354364294180868",
    text: "https://t.co/yNcDyqOpdg",
  },
  {
    id: "1515354277488832513",
    text: "they are so crazzzy! can't take them anywhere! https://t.co/LaueMgBNhn",
  },
  {
    id: "1515352952696889346",
    text: "@Ya_boi_mg @xkcd here are all the articles with the tag! https://t.co/VRc5p6EIcq",
  },
  {
    id: "1515350275208491011",
    text: "@xkcd another good one is [weasel words]!!",
  },
  {
    id: "1515202745170595841",
    text: "https://t.co/wQhcUibJC0",
  },
  {
    id: "1515201405899972608",
    text: "when you sync up with your bff &lt;3 https://t.co/pGij4CZVEo",
  },
  {
    id: "1515178991476432896",
    text: "https://t.co/A8JZO5CWkC",
  },
  {
    id: "1515178990083977221",
    text: "absolutely obsessed with the guy who uploads these dance gifs https://t.co/87lLY1lSSr",
  },
  {
    id: "1515176027894464520",
    text: "photo: CarrieBee, Public domain https://t.co/924tvirQ9A",
  },
  {
    id: "1515175774277582851",
    text: "https://t.co/sB4ozpNNOl",
  },
  {
    id: "1515127262236008449",
    text: "https://t.co/9e617jgllo  Boris Groh, Public domain, via Wikimedia Commons",
  },
  {
    id: "1515127260788969478",
    text: "https://t.co/ygYb6cZh5c",
  },
  {
    id: "1515126909293760517",
    text: "https://t.co/s4g4dBzn5s @hunocsi Punkmorten, Public domain",
  },
  {
    id: "1515126781396856835",
    text: "https://t.co/5KWyBYBnTA",
  },
  {
    id: "1515047932839530503",
    text: "@Donald3812 @gimmicksellouts oh no! I'm not making money from this promo! and https://t.co/mZDwJcN5ka doesn't appear to be directly monetized either. I just wanted to share bc it was fun and wikipedia-related. I have no plans to start shilling nfts or vibrators on this account, i promise!!",
  },
  {
    id: "1515047014098214922",
    text: "@matthewcr I assume it's the % of your guesses that were indeed words in the article",
  },
  {
    id: "1515046189821054980",
    text: "took me almost 20 min but I finally got it!! https://t.co/w9Kqco0b6b",
  },
  {
    id: "1515040399290781702",
    text: "pleasantly surprised with https://t.co/xnXIsiXNYF, the wordle spinoff where you guess the words in a mostly-redacted wikipedia article. pretty fun! https://t.co/BDX54PTSo8",
  },
  {
    id: "1514812859720495108",
    text: "MikeGogulski, CC BY-SA 3.0 &lt;https://t.co/n9bRmB10PA&gt;, via Wikimedia Commons https://t.co/O3IuETvN0I",
  },
  {
    id: "1514812663586455552",
    text: "https://t.co/NerCzhBebR",
  },
  {
    id: "1514738748868730888",
    text: "he would fit right into this pic https://t.co/4kaBRrOELH",
  },
  {
    id: "1514738216443723776",
    text: "@Internossusest https://t.co/iVvYgsxGuv CC BY SA 3.0",
  },
  {
    id: "1514737843301765123",
    text: "love how it's synthwave https://t.co/gzfow69Re6",
  },
  {
    id: "1514611315947442196",
    text: "https://t.co/P68mDzjJji",
  },
  {
    id: "1514611313925795844",
    text: "https://t.co/30xzty4igd",
  },
  {
    id: "1514610822105817102",
    text: "photo: DonkeyHotey, CC BY 2.0 https://t.co/ull7dDbuyE.",
  },
  {
    id: "1514610820272906240",
    text: "https://t.co/UPun6dXYah",
  },
  {
    id: "1514610576470675464",
    text: "Photo: S. RIMBAUD https://t.co/ull7dDbuyE.",
  },
  {
    id: "1514610574453141508",
    text: "https://t.co/WZbdQ8yame",
  },
  {
    id: "1514478894451240960",
    text: "photo: Orygun, CC BY-SA 2.0 https://t.co/0NgvbwwBTk",
  },
  {
    id: "1514478565500280833",
    text: "https://t.co/3xL0MwubCV Photo: Kremlin. ru, CC BY 3.0",
  },
  {
    id: "1514472200220430336",
    text: "https://t.co/JtAn9PmlhX",
  },
  {
    id: "1514471582944669702",
    text: "https://t.co/EhgbLDccc4",
  },
  {
    id: "1514446714782027776",
    text: "@chandlerjdean @WestWingWriters @caveatnyc @david_j_roth @KoushaNavidar @liza_harris_ @labh_adesh @WatchNwachukwu @sarahagruen yayyy!!",
  },
  {
    id: "1514303345888047111",
    text: "Photo: J. T. Newman, Public domain https://t.co/k4HOGAjTHw",
  },
  {
    id: "1514303344050905091",
    text: "https://t.co/nHLV21WJ9B",
  },
  {
    id: "1514109107229401090",
    text: "@MakeshftSwahili https://t.co/rTzX6goFrP",
  },
  {
    id: "1514108943630573573",
    text: "don't mess with this guy's grandkids https://t.co/Smr3r74VFe",
  },
  {
    id: "1514032801493966857",
    text: "photo: National Archives at College Park, Public domain https://t.co/j8Y4kasN0y",
  },
  {
    id: "1514032685324324868",
    text: "this dude looks like one of the misshapen figures you see in bad 21st-century corporate art https://t.co/SWpRt7fbon",
  },
  {
    id: "1514028916100509702",
    text: "@miss_s4ndr4 @TheresNoTimeFor I'm sure you'll get other replies but here's the (very long) wikipedia community discussion with wikipedia editors' arguments for and against \nhttps://t.co/tkL40uE3ea",
  },
  {
    id: "1514022305013379082",
    text: "RT @TheresNoTimeFor: The Wikimedia community has voted to stop accepting #cryptocurrency donations to #Wikipedia ✨ https://t.co/y8xqTlWSvF",
  },
  {
    id: "1514022228438007810",
    text: "https://t.co/cn1jbGTh5Q",
  },
  {
    id: "1514022226860904457",
    text: "https://t.co/vcDOOkZEP5",
  },
  {
    id: "1513751453634076672",
    text: "https://t.co/9LI3LVSR3o",
  },
  {
    id: "1513749082740830210",
    text: "https://t.co/ZrXg9c9VxM",
  },
  {
    id: "1513749034212773895",
    text: "https://t.co/Qh9ocAfVvJ",
  },
  {
    id: "1513737619187851264",
    text: "thanks for the submission @ollychaney!! from the nabisco article https://t.co/Efc3IjowFG",
  },
  {
    id: "1513737438518259721",
    text: "https://t.co/g6kRjzTI7H",
  },
  {
    id: "1513698912892342273",
    text: "Maximilian Schönherr, CC BY-SA 3.0 @coochiepachi  https://t.co/GnR3PzQJsK",
  },
  {
    id: "1513698911487209479",
    text: "https://t.co/E1ShIkU8Ga",
  },
  {
    id: "1513696719137132548",
    text: "https://t.co/VJuNQGLxvy",
  },
  {
    id: "1513696530665984011",
    text: "https://t.co/2OXaVCmEF1",
  },
  {
    id: "1513696101257383941",
    text: "https://t.co/52eT8kKmTd",
  },
  {
    id: "1513696074170605572",
    text: "they were hiding https://t.co/t5MVfGd5tb",
  },
  {
    id: "1513625000351305732",
    text: "theinstantmatrix, CC BY-SA 3.0 https://t.co/AFnOONVNr3",
  },
  {
    id: "1513624998065446920",
    text: "https://t.co/G2wg6h0smF",
  },
  {
    id: "1513593777058947076",
    text: "@acieeeeeeeed idk I just think it's funny he has his own page",
  },
  {
    id: "1513593310782369797",
    text: "https://t.co/F0p9rJAu3M",
  },
  {
    id: "1513593308123054081",
    text: "https://t.co/3uQF239I4e",
  },
  {
    id: "1513570444401688578",
    text: "photo: François Lopinot / Wikimedia Commons https://t.co/Fytc5Oyt6b",
  },
  {
    id: "1513570442879148044",
    text: "https://t.co/8OspljGhlI",
  },
  {
    id: "1513541618699313161",
    text: "https://t.co/evRn3d0BBM    @cooltot101 photo: Markus Säynevirta, CC BY-SA 4.0",
  },
  {
    id: "1513541616589582345",
    text: "https://t.co/EqfdQmW3Sy",
  },
  {
    id: "1513541058600255492",
    text: "https://t.co/trMQxdmLV5 photo: Voice of America, Public domain",
  },
  {
    id: "1513541057191063552",
    text: "https://t.co/nQ38dtzish",
  },
  {
    id: "1513209468787507202",
    text: "https://t.co/fDoFY7sK04",
  },
  {
    id: "1513208639250702339",
    text: "https://t.co/huYkt3T6nu",
  },
  {
    id: "1513208508216483850",
    text: "https://t.co/vzrqTj9bE5",
  },
  {
    id: "1513206095204040704",
    text: "RT @vrandezo: I just found out you can use the Wikidata query service to find out which languages share a word for the same thing and visua…",
  },
  {
    id: "1534234497822216192",
    text: "https://t.co/2RgkcGA3y7",
  },
  {
    id: "1534234496047906821",
    text: "https://t.co/mRkZNDej0I",
  },
  {
    id: "1534218219480834049",
    text: "https://t.co/X4oirKuPfV",
  },
  {
    id: "1534218217425719296",
    text: 'what did this deltoidal trihexagonal tiling do to get the name "zero length degenerate," such a sick burn https://t.co/P93ZEx0hEZ',
  },
  {
    id: "1534217411133689856",
    text: "https://t.co/dFWBlZDQTt",
  },
  {
    id: "1534217409074286592",
    text: "https://t.co/I9MQgEBgyZ",
  },
  {
    id: "1534212661860261888",
    text: "https://t.co/VBQ7TTpFup",
  },
  {
    id: "1534212624077971458",
    text: "https://t.co/Thfw9ZvlQW",
  },
  {
    id: "1533887069952540674",
    text: "@slcboston me neither, just perused the archives for something berlin-related so i could use it as a plea to make berlin friends",
  },
  {
    id: "1533884772979814400",
    text: "if you don't know me, i am a real, relatively normal person named annie (@anniierau) https://t.co/dKpvKEH1Jj",
  },
  {
    id: "1533884770140180487",
    text: "i'm in berlin for a month and if anyone wants to go graffiti logic onto a wall or hang out or something, hit me up!!! https://t.co/4LStQ7SNyb",
  },
  {
    id: "1533611293327900679",
    text: "https://t.co/mbcgikCds1",
  },
  {
    id: "1533605841584136193",
    text: "so far, of the ~20 replies and QTs, I have already posted 17! makes me feel like i need to go touch grass",
  },
  {
    id: "1533604772724494337",
    text: "@hotwomenkisser *whispering* it still is up on simple english wikipedia",
  },
  {
    id: "1533603978835070977",
    text: "reply with your favorite photos captions on wikipedia. here are two of my longtime faves https://t.co/N7ovK7MqjN",
  },
  {
    id: "1533601593408495617",
    text: "https://t.co/fhtkIr9aBF",
  },
  {
    id: "1533601592099975173",
    text: "https://t.co/PiAePleyL1",
  },
  {
    id: "1533600468085182464",
    text: "@robotics @AGoldmund https://t.co/80OB4aVC0Q",
  },
  {
    id: "1533599665924587521",
    text: "@GabeHockett your mind",
  },
  {
    id: "1533594103581220864",
    text: "https://t.co/z4FrQhTgyJ",
  },
  {
    id: "1533594102251520002",
    text: "finally found them https://t.co/abHo27CwfS",
  },
  {
    id: "1533591841005871107",
    text: "https://t.co/tpzDtYYuR8",
  },
  {
    id: "1533590938567729153",
    text: "https://t.co/Liemc2hPQI",
  },
  {
    id: "1533590937154338821",
    text: "https://t.co/ltcXp92kQk",
  },
  {
    id: "1533577821884399620",
    text: "https://t.co/i14y72GEFt",
  },
  {
    id: "1533577820349382657",
    text: "https://t.co/LbdzAGd6Cn",
  },
  {
    id: "1533570947197935617",
    text: "https://t.co/KOszu456W9",
  },
  {
    id: "1533570945490853891",
    text: "your crush isn't thinking about you they're reading this https://t.co/7CYyGoGT8d",
  },
  {
    id: "1533566079078916098",
    text: "meet me here https://t.co/FN5iIvJATA",
  },
  {
    id: "1533503612407652352",
    text: "https://t.co/u7PYQUEXeE",
  },
  {
    id: "1533503610520317952",
    text: "https://t.co/EY4uUS4xrB",
  },
  {
    id: "1533503201911230465",
    text: "https://t.co/GUEjXTJcUE",
  },
  {
    id: "1533503200548077571",
    text: "https://t.co/XxZNBxfBbN",
  },
  {
    id: "1533443818544156675",
    text: "https://t.co/YTCHqMYA8m",
  },
  {
    id: "1533443816107216896",
    text: "finding nixon in an article about third derivatives is a certified jump scare https://t.co/W9ZlpKUYDf",
  },
  {
    id: "1532879555798519808",
    text: "https://t.co/YpL0hoAEyt",
  },
  {
    id: "1532840800450711552",
    text: "at a loss for words https://t.co/SJJbpJCEHp",
  },
  {
    id: "1532755622520926209",
    text: "thanks epicgenius for sending in!!!!",
  },
  {
    id: "1532755559325237250",
    text: "https://t.co/51pX2DuF7a",
  },
  {
    id: "1532755557215502337",
    text: '"internet memes" section of the morbius wikipedia article is the best thing I\'ve read in ages https://t.co/EgFtMVoH0d',
  },
  {
    id: "1532737118673551363",
    text: "https://t.co/DXCELeJDG0 sent in by @macadamiea !",
  },
  {
    id: "1532737116941205504",
    text: "https://t.co/PYkhLPytVb",
  },
  {
    id: "1532735572065796097",
    text: "https://t.co/wH7URHe4b5",
  },
  {
    id: "1532735570232938496",
    text: "Dick Bacon https://t.co/6drdr1Tqqq",
  },
  {
    id: "1532732678541299713",
    text: "RT @firstopenlygay: a happy pride month to the gay section of wikipedia https://t.co/E5wEDTtRNp",
  },
  {
    id: "1532444019099410433",
    text: "photo: TheAlphaWolf , CC BY 3.0 https://t.co/ikhLJplFeB",
  },
  {
    id: "1532444017463640070",
    text: "https://t.co/5ibCb0vN6T",
  },
  {
    id: "1532443662134788102",
    text: "photo: Gerd Leibrock CC BY-SA 3.0 https://t.co/lXFhs4ZQqG",
  },
  {
    id: "1532443660595384320",
    text: "https://t.co/lO6p7QrspP",
  },
  {
    id: "1532366460676362240",
    text: "RT @cliffordvickrey: Wikipedia entry for the British TV series “The Goodies” took an unexpected turn https://t.co/sp2xMxSbIN",
  },
  {
    id: "1532366146866913280",
    text: "photo: Dennis Jarvis, CC BY-SA 2.0 https://t.co/9xOL1BrTHR",
  },
  {
    id: "1532366145331806209",
    text: "https://t.co/Ofki4YAbpA",
  },
  {
    id: "1532364838109839362",
    text: 'fyi this is an old revision — the caption was changed two years ago to "drawing of a bowhead whale in 1884" https://t.co/yCgsNOc2Kp',
  },
  {
    id: "1532364836025278465",
    text: "how can you deny evolution when this evidence exists https://t.co/lTUFWDAnSW",
  },
  {
    id: "1532363480736620544",
    text: "give them a raise https://t.co/XgzSNMP2BF",
  },
  {
    id: "1532362305257742338",
    text: '@jeeeberts "duolingo but for ___" is the new "uber of __"',
  },
  {
    id: "1532362197204099072",
    text: "@Antisomniac @prospect_park @BirdBrklyn awww",
  },
  {
    id: "1532359450757038082",
    text: "https://t.co/SorKTLRnUH",
  },
  {
    id: "1532359449209409536",
    text: "you could say I'm a bit of a film buff https://t.co/VlXCEXJnaI",
  },
  {
    id: "1532358890322632704",
    text: "https://t.co/iGRZhPLVaa",
  },
  {
    id: "1532358888942620675",
    text: "arguably https://t.co/ieCDbsVrag",
  },
  {
    id: "1532358368857403393",
    text: "https://t.co/yv136aioix",
  },
  {
    id: "1532358367427043328",
    text: "https://t.co/Y4JoVvIWGH",
  },
  {
    id: "1532078605156634625",
    text: "RT @depthsofwiki: List of mammals displaying homosexual behavior https://t.co/drMkSg6oLH",
  },
  {
    id: "1532078397161357312",
    text: '@KARUROSUFUCKER no huge reason, just forgot to type "happy pride"',
  },
  {
    id: "1532077579641180160",
    text: "https://t.co/j7RZiWnEnB",
  },
  {
    id: "1532077577451479050",
    text: "happy pride to him https://t.co/29UOciBzrw",
  },
  {
    id: "1532028195804962818",
    text: "https://t.co/X5EnJ1tlVc",
  },
  {
    id: "1531665700519026691",
    text: "https://t.co/ZdxcJU8for",
  },
  {
    id: "1531665698262589443",
    text: "https://t.co/uOHxdVqXK7",
  },
  {
    id: "1531665139421814784",
    text: "https://t.co/ZyEZHBcvQo",
  },
  {
    id: "1531665137777647617",
    text: "https://t.co/Bq26TIRRpM",
  },
  {
    id: "1531664183162445825",
    text: "https://t.co/iBrjmB4f29",
  },
  {
    id: "1531664181837148161",
    text: "https://t.co/xHfonxi6ST",
  },
  {
    id: "1531653420444155905",
    text: "@jeeeberts please please please please",
  },
  {
    id: "1531337334028910592",
    text: "https://t.co/XqWaU3DtmM",
  },
  {
    id: "1531324890254647296",
    text: "photo:  Epachamo, CC0\nhttps://t.co/sLILGaZZNl",
  },
  {
    id: "1531324592098263041",
    text: "oh to be a skimmer loafing gregariously on a sandbar https://t.co/BN47MlKSzH",
  },
  {
    id: "1531077989961805829",
    text: "photo: Sebastian8036, CC BY-SA 3.0 https://t.co/QtjTJqSM9z",
  },
  {
    id: "1531077987969400842",
    text: "https://t.co/c9cuozSOZa",
  },
  {
    id: "1531061146538627074",
    text: "https://t.co/Mkz8T42HC6",
  },
  {
    id: "1531060942787776513",
    text: "https://t.co/BDABre2p8J",
  },
  {
    id: "1531026319496077312",
    text: "https://t.co/pZZ1jTCd7r",
  },
  {
    id: "1531026318053228544",
    text: "I believe I have located the bra https://t.co/zQs1MUgRgf",
  },
  {
    id: "1531025154154938370",
    text: "could make a stop here first https://t.co/EMkglVmfHw",
  },
  {
    id: "1531024539559272450",
    text: "https://t.co/X6xPaLoYPx",
  },
  {
    id: "1531024537663459343",
    text: "who wants to go https://t.co/7Rp0sFjiXk",
  },
  {
    id: "1530953373884854272",
    text: "photo: https://t.co/d2BBjePLRu",
  },
  {
    id: "1530953371640791040",
    text: "pufferfish flirt by making large, geometric shapes in the sand https://t.co/oeTkZSPuRk",
  },
  {
    id: "1530673774399397888",
    text: "https://t.co/pfXPOahsNT",
  },
  {
    id: "1530673770448375809",
    text: "hmmm https://t.co/ti02qez2Uh",
  },
  {
    id: "1530586791140548610",
    text: '@senciosomething oh also! you can google "wikipedia discord" to find a more casual community of editors. lurking there might help you pick up editing lingo (there are approx. a bazillion acronyms/abbreviations)',
  },
  {
    id: "1530586266961600518",
    text: "@kilosfromlolo @senciosomething yes, wikimedia foundation's a good place to give money — it consistently ranks highly on charity evaluations (charity navigator, givewell, etc). but donating doesn't necessarily improve Wikipedia's content! the encyclopedia is written by people just like you and me who volunteer",
  },
  {
    id: "1530585219094413315",
    text: '@senciosomething Hi!! what wikipedia needs most is new editors. start small-- lurk and fix typos, beef up stubs, etc. before doing anything big (like starting a new article). check out the "contribute" section on the left side of the page! there\'s a lot to learn but I believe in you!!! https://t.co/kmSNKbbztm',
  },
  {
    id: "1530583013389750272",
    text: "photo: George Bush Presidential Library Foundation, public domain. https://t.co/2RX6szX9MO",
  },
  {
    id: "1530583010948665344",
    text: "imagine if someone had triple dog dared him https://t.co/YUQ8sDu2Ea",
  },
  {
    id: "1530580775023910913",
    text: "https://t.co/xFWiN7eRaf",
  },
  {
    id: "1530580729557573632",
    text: "we found them https://t.co/OAwW5yahVQ",
  },
  {
    id: "1530580175112511488",
    text: "https://t.co/iGZnAROI7x",
  },
  {
    id: "1526211242070884357",
    text: "https://t.co/gGy7MwVDlC",
  },
  {
    id: "1526211240292409346",
    text: "this knot is out of control https://t.co/tARMzXR8G6",
  },
  {
    id: "1526062001922920449",
    text: "@computer_gay https://t.co/AuVvG5KYcV",
  },
  {
    id: "1526062000807321600",
    text: "https://t.co/LAly3cCK7e",
  },
  {
    id: "1526055053857013760",
    text: "https://t.co/ELFiFdg036",
  },
  {
    id: "1526055052124749824",
    text: "I love NFTs, nice friendly tapirs https://t.co/1FPtPUg13f",
  },
  {
    id: "1525931890611453955",
    text: "https://t.co/hzpjzqyhXP",
  },
  {
    id: "1525931889143566337",
    text: "https://t.co/lUmZU9Div5",
  },
  {
    id: "1525926996211118080",
    text: "photo: Jackhynes, CC BY-SA 3.0  https://t.co/MkPutvSaMA",
  },
  {
    id: "1525926994239684608",
    text: "ok https://t.co/J1lnDXyCKT",
  },
  {
    id: "1525914116556304385",
    text: "@anna_p_k @NYTStyles go anna!!!!!!!",
  },
  {
    id: "1525827906471182339",
    text: "https://t.co/dewqMtA8T7",
  },
  {
    id: "1525827904676020224",
    text: "you probably think your crush is thinking of you rn but they're actually reading this https://t.co/uqX68MaPQz",
  },
  {
    id: "1525697037211140096",
    text: "photo: Richard Nixon Presidential Library and Museum, Public domain https://t.co/zHKiXULZi4",
  },
  {
    id: "1525697035969646592",
    text: "https://t.co/zkd3TtBZPI",
  },
  {
    id: "1525520409621315588",
    text: "https://t.co/BPVzvdnboD",
  },
  {
    id: "1525520408337960962",
    text: "https://t.co/Sn8kdNY1Gp",
  },
  {
    id: "1525273121120522240",
    text: '@gabrielroth everyone was QTing with things like "the depths of wikipedia admin is just some girl who was born in 1999 and is learning things" which is so valid... but I was not brave enough to endure more of it....',
  },
  {
    id: "1525217079040872449",
    text: "submitted by famed economist @jackcorrbit  https://t.co/FbMqyi6eiV",
  },
  {
    id: "1525217077761650690",
    text: "https://t.co/60PixInIgS",
  },
  {
    id: "1525181363686711302",
    text: "@fuzheado @Wikipedia YES! a few people have told me this today. I just started a folder on my computer with good, guessable tables of contents of public figures",
  },
  {
    id: "1525178927005712385",
    text: "@molly0xFFF go molly, once again!!! I feel like every day there's something exciting to congratulate you for",
  },
  {
    id: "1525145091693748225",
    text: "https://t.co/bVM7K0O6Dq",
  },
  {
    id: "1525142300376154112",
    text: "RT @depthsofwiki: https://t.co/UQDZi7r5pF",
  },
  {
    id: "1525140707228454912",
    text: "@ghasshah this is incredible i'm posting immediately!!!!!!!!!!",
  },
  {
    id: "1525140527884247040",
    text: "https://t.co/AcfnKDrmcT",
  },
  {
    id: "1525140526265139207",
    text: "https://t.co/3biZJFUPnY",
  },
  {
    id: "1525139418188763136",
    text: "@largeicedcawfee *in the tune of california dreaming* and the sky is gray",
  },
  {
    id: "1525139242564956160",
    text: "the article is about bond trader howie hubler but it could be a lot of u https://t.co/aYqwGDkpJ5",
  },
  {
    id: "1525138869322137602",
    text: "https://t.co/UKPR5JLK1r",
  },
  {
    id: "1525119340760248321",
    text: "https://t.co/N0RR16c7Vd",
  },
  {
    id: "1524989564653387779",
    text: "https://t.co/9fHdZW3tVx",
  },
  {
    id: "1524989562765942784",
    text: "we've all been there https://t.co/XlLtpjb1M8",
  },
  {
    id: "1524929307071631360",
    text: "photo: Pink kitty111, CC BY-SA 4.0 https://t.co/HGJeAoFyVY",
  },
  {
    id: "1524929304987049986",
    text: "obsessed with this image in the png article https://t.co/bTWhkHa00M",
  },
  {
    id: "1524821091004428288",
    text: "photo: Los Angeles Times photographer, Public domain\nhttps://t.co/ZHWWige4Zd",
  },
  {
    id: "1524821088957497347",
    text: "https://t.co/hvZwGTbizc",
  },
  {
    id: "1524780094446882820",
    text: "photo: Thomas Lehmann (Horizonterix), CC BY-SA 4.0  https://t.co/3rnCJpX5wp",
  },
  {
    id: "1524780093008134147",
    text: "unbothered, in its lane, flourishing https://t.co/yjzz9kN3dQ",
  },
  {
    id: "1524778826588381185",
    text: "image via NASA https://t.co/NFWPmU7WDn",
  },
  {
    id: "1524778825313406977",
    text: "great image, no notes https://t.co/1bVCZY7Ghm",
  },
  {
    id: "1524778299968331776",
    text: "photo: Weatherkidnh, CC BY-SA 4.0 https://t.co/5NondLmsBS",
  },
  {
    id: "1524778298726834179",
    text: "https://t.co/jYMakk3R5T",
  },
  {
    id: "1524643231828434950",
    text: "https://t.co/HEFNLDCCsd",
  },
  {
    id: "1524643230201098246",
    text: "crazy how many corporations have controversy sections like this https://t.co/cngaMWsE9S",
  },
  {
    id: "1524639401938243585",
    text: "https://t.co/MDte85Ir4j",
  },
  {
    id: "1524639400684105728",
    text: "https://t.co/0B2NU7Dvsy",
  },
  {
    id: "1524622658326913024",
    text: "@DrWho42 I love it so much i could just die",
  },
  {
    id: "1524601961798062081",
    text: "@GabeHockett there's nothing worse than travelling from perixisomal beta oxidation to carbon fixation during rush hour",
  },
  {
    id: "1524601449837121536",
    text: "you can of course find more detailed biochem charts, like the Roche ones, but this is a really cool piece of web design imo with the divs carefully positioned over .svg background so that they can be HTML links",
  },
  {
    id: "1524601200993255424",
    text: "I looooove this clickable metro-style map of metabolic pathways. and someone made it for free, for strangers https://t.co/AxERwjRIUj https://t.co/BeXun1vyL5",
  },
  {
    id: "1524500727808368643",
    text: "photo: Mike Perry, CC BY-SA 3.0 https://t.co/1myNzRSrUJ",
  },
  {
    id: "1524500725585305600",
    text: "WHEW good news https://t.co/yx4v3o36fs",
  },
  {
    id: "1524500086188908545",
    text: "photo: Chris 73, CC-BY-SA 3.0 https://t.co/ypGu9SWfiF",
  },
  {
    id: "1524500084255301639",
    text: "has technology has gone too far https://t.co/2Lm1dqGPuu",
  },
  {
    id: "1524475267057598470",
    text: "joke is from tamoraboys in my discord. link in bio if you wanna join and discuss fun facts :) https://t.co/5geJZ8NFUK",
  },
  {
    id: "1524475265392553988",
    text: 'humans really see some squares and go "yeah but what if i jacked off to it" https://t.co/0UADq62F9D',
  },
  {
    id: "1524465505293283330",
    text: "https://t.co/Et1TmNSBsM",
  },
  {
    id: "1524465503749746688",
    text: "read all about it https://t.co/ZMKpFhD48a",
  },
  {
    id: "1524461207666761728",
    text: "https://t.co/1myNzRSrUJ",
  },
  {
    id: "1524461205485727746",
    text: "https://t.co/NGw3joMvCv",
  },
  {
    id: "1524460241584373762",
    text: "@whoweekly needed this x",
  },
  {
    id: "1524459372193144832",
    text: "@molly0xFFF go molly!!!!!!!!!!! &lt;3",
  },
  {
    id: "1524059979703103490",
    text: "@ratsandromance https://t.co/8cQTGn2Gji",
  },
  {
    id: "1524059977710772231",
    text: "https://t.co/J0qYuLfYkG",
  },
  {
    id: "1524055300008992773",
    text: "From https://t.co/fZRHNuvqTm",
  },
  {
    id: "1524055296661938176",
    text: "https://t.co/Sp3Lq4hiGT",
  },
  {
    id: "1524025285724848128",
    text: "these memes are inspired by this tweet from yesterday that got a lot of traction?? https://t.co/CIrvp4Oxwg",
  },
  {
    id: "1524025128694206465",
    text: "https://t.co/Gdh7opV7II",
  },
  {
    id: "1523794057356451841",
    text: "https://t.co/skjfuByGax",
  },
  {
    id: "1523794054785679361",
    text: "the day doge died https://t.co/ALzJ7jkIdc",
  },
  {
    id: "1523793557391298560",
    text: "photo: Kotivalo, CC BY-SA 3.0 https://t.co/MlTL5o1nYp",
  },
  {
    id: "1523793555549921280",
    text: "ok https://t.co/jQTnXlOfjP",
  },
  {
    id: "1523792967311716352",
    text: "photo: NASA/GSFC/Solar Dynamics Observatory https://t.co/JMHKRYCztm",
  },
  {
    id: "1523792964551852032",
    text: "the aliens looked at us and said ??????? https://t.co/NYfUCk8Uf3",
  },
  {
    id: "1523720877636206592",
    text: "photo: Clancy Ratliff, CC BY-SA 2.0 https://t.co/92hGvdTxpc",
  },
  {
    id: "1523720875962679296",
    text: "https://t.co/GBzrqMdJ9d",
  },
  {
    id: "1523711955516547072",
    text: "curious if any of you used bomis dot com (the pre-Google era internet directory that supported Wikipedia's early development) back in the day? if so, send me a message! I have a couple fun qs!",
  },
  {
    id: "1523710899076612096",
    text: "https://t.co/SaOiPpZZ1D",
  },
  {
    id: "1523710896606187520",
    text: "2007 media cycle about a disputed drug made from fecal matter https://t.co/Pb3fsSOvs5",
  },
  {
    id: "1523692681519845376",
    text: "https://t.co/I9P9vbaVJp",
  },
  {
    id: "1523692679464308737",
    text: "https://t.co/4G6Y2O9wRC",
  },
  {
    id: "1523669531989737473",
    text: "@itsmesnacks my jaw is on the floor.......... what am I going to do with this information... hopefully something big",
  },
  {
    id: "1523668854769352704",
    text: "https://t.co/zUIcT3kae4",
  },
  {
    id: "1523668852219199488",
    text: "ok this flag kinda goes hard https://t.co/3FrImFbPDR",
  },
  {
    id: "1523666310487756803",
    text: "here's the post https://t.co/rJenK92ELj",
  },
  {
    id: "1523666214945361922",
    text: "credit to redditor u/maenefa https://t.co/ectF4vTe0V",
  },
  {
    id: "1523663104902823936",
    text: "@sdkb42 @jdforward they are so lucky!!!!!! congrats!",
  },
  {
    id: "1523377926929936386",
    text: "@flipdrivel oops I meant genocide! typo!",
  },
  {
    id: "1523377642245746689",
    text: 'oops I wish I could edit this tweet! I meant to write "Armenian genocide" not revolution!',
  },
  {
    id: "1523373011729981440",
    text: "mississippi finally recognized the Armenian revolution this year so here's a reminder that this map existed https://t.co/QZiS9Uz1G8 https://t.co/7DKe8wgxKw",
  },
  {
    id: "1523370124316921856",
    text: "@MKVRiscy ah yes, madison cauthon",
  },
  {
    id: "1523363112312786944",
    text: "photo: Ed6767, CC BY-SA 4.0 https://t.co/4WBcDOkMpF",
  },
  {
    id: "1523363109909692416",
    text: "what would i do without wikipedia https://t.co/4tv8ANJuQB",
  },
  {
    id: "1523351282068901888",
    text: "https://t.co/GFLeclbTuX",
  },
  {
    id: "1523351279589810177",
    text: "https://t.co/qLMrANG5Ut",
  },
  {
    id: "1523075972844728322",
    text: "https://t.co/5NKCBH1Kbm",
  },
  {
    id: "1523075971053768707",
    text: "RIP purple dot com, the first known single service website that lived from 1994 until 2017 (when its creator sold the domain to a mattress company for 900k). now there's https://t.co/JCVQvGz22B https://t.co/YeXIwc4mV5",
  },
  {
    id: "1523071336582508544",
    text: "kiwi makes your mouth a little raw because it's eating you back https://t.co/zs0tx6P8RP",
  },
  {
    id: "1523043088612020225",
    text: "edit warring irl https://t.co/C2jk0ncn50",
  },
];

const links = [];

// for every link in the text field, check if it ends up at https://en.wikipedia.org/wiki/. If so, add it to the links array. At the end, console.log the links array.

tweets.forEach((tweet) => {
  const text = tweet.text;
  // match t.co/{LINK}
  const matches = text.match(/t.co\/[a-zA-Z0-9]+/g);
  if (matches) {
    matches.forEach((match) => {
      console.log("match", match);
      console.log("host", "https://" + match.split("/")[0]);
      console.log("path", match.split("/")[1]);
      try {
        const request = http.request(
          {
            host: match.split("/")[0],
            path: "/" + match.split("/")[1],
          },
          (response) => {
            console.log(response.responseUrl);
            if (
              response.responseUrl.includes("en.wikipedia.org/wiki/") &&
              !response.responseUrl.includes("en.wikipedia.org/wiki/User:")
            ) {
              links.push(response.responseUrl);
              console.log(links);
              fs.writeFileSync("links.json", JSON.stringify(links));
            }
          }
        );
        request.end();
      } catch (e) {
        console.log(e);
      }
    });
  }
});
