/*
    This is the code that gets the 1000 most popular websites and logs all the elements
    Made by roc0ast3r (github.com/5qc) using Node.js
*/
const request = require("request"),
      fs = require("fs")

let sites = "google.com youtube.com wikipedia.org facebook.com baidu.com taobao.com yahoo.com qq.com tmall.com amazon.com twitter.com live.com sohu.com vk.com instagram.com jd.com sina.com.cn reddit.com login.tmall.com weibo.com yandex.ru linkedin.com 360.cn blogspot.com netflix.com whatsapp.com pornhub.com yahoo.co.jp alipay.com microsoftonline.com twitch.tv naver.com microsoft.com pages.tmall.com aliexpress.com livejasmin.com csdn.net ebay.com tribunnews.com github.com bing.com google.com.hk stackoverflow.com mail.ru amazon.co.jp google.co.in okezone.com xvideos.com office.com paypal.com msn.com hao123.com bilibili.com imdb.com fandom.com t.co imgur.com xhamster.com wordpress.com apple.com 163.com soso.com google.com.br booking.com xinhuanet.com amazon.de pinterest.com dropbox.com adobe.com amazon.in bongacams.com babytree.com detail.tmall.com tumblr.com google.co.jp google.fr google.ru so.com google.de quora.com cnblogs.com amazon.co.uk detik.com bbc.com force.com deloplen.com salesforce.com ettoday.net google.cn pixnet.net onlinesbi.com roblox.com aparat.com cnn.com thestartmagazine.com bbc.co.uk amazonaws.com google.it tianya.cn rakuten.co.jp xnxx.com google.es spotify.com chase.com craigslist.org zhihu.com espn.com soundcloud.com discordapp.com jianshu.com nicovideo.jp daum.net medium.com nytimes.com cricbuzz.com google.co.uk stackexchange.com 1688.com popads.net mediafire.com globo.com indeed.com sogou.com researchgate.net wetransfer.com sindonews.com avito.ru hotstar.com nih.gov vimeo.com butheptesitrew.pro uol.com.br google.com.mx w3schools.com zhanqi.tv trello.com china.com.cn chaturbate.com godaddy.com zoom.us gmw.cn panda.tv mercadolivre.com.br gloyah.net slideshare.net fc2.com etsy.com theguardian.com walmart.com caijing.com.cn alibaba.com flipkart.com shutterstock.com ok.ru ebay.de duckduckgo.com canva.com ebay.co.uk bukalapak.com amazon.fr google.com.tw onlinevideoconverter.com freepik.com google.com.tr amazon.it slack.com huanqiu.com bankofamerica.com steamcommunity.com aliyun.com dailymotion.com espncricinfo.com youporn.com speedtest.net kompas.com ltn.com.tw liputan6.com indiatimes.com hulu.com blogger.com spankbang.com mama.cn yelp.com sciencedirect.com myshopify.com twimg.com eastday.com gamepedia.com softonic.com digikala.com deviantart.com vice.com cnet.com wellsfargo.com steampowered.com wikihow.com weather.com okta.com douban.com yts.lt zillow.com instructure.com youm7.com dspmulti.com iqiyi.com mega.nz scribd.com rednet.cn cbbp1.com amazon.es google.ca messenger.com thepiratebay.org udemy.com tripadvisor.com foxnews.com mozilla.org redd.it savefrom.net archive.org patria.org.ve airbnb.com livedoor.jp gfycat.com office365.com dailymail.co.uk google.pl rambler.ru amazon.ca google.com.sa zendesk.com tistory.com line.me setn.com toutiao.com grid.id google.co.th bet9ja.com exoclick.com ebay-kleinanzeigen.de google.com.eg google.com.ar allegro.pl google.co.kr zoho.com phengung.net ikea.com intuit.com yy.com shopify.com atlassian.net gamersky.com abs-cbn.com ibps.in homedepot.com douyu.com pixabay.com sarkariresult.com google.co.id 3dmgame.com bestbuy.com dmm.co.jp patreon.com kinopoisk.ru 9gag.com behance.net ilovepdf.com 52pojie.cn varzesh3.com manoramaonline.com youdao.com telegram.org usps.com washingtonpost.com breitbart.com fiverr.com hubspot.com momoshop.com.tw mailchimp.com hdfcbank.com xfinity.com hp.com livejournal.com otvfoco.com.br hespress.com primevideo.com rt.com pornq.com academia.edu americanexpress.com rutracker.org jrj.com.cn elbalad.news capitalone.com openload.co pinimg.com zol.com.cn smallpdf.com pixiv.net chouftv.ma reverso.net ask.com ebc.net.tw box.com bet365.com wordpress.org ouo.io suara.com doubleclick.net forbes.com wikimedia.org cdstm.cn buzzfeed.com mercadolibre.com.ar ups.com ameblo.jp kakaku.com oracle.com 17ok.com genius.com fedex.com elsevier.com op.gg 1337x.to kissanime.ru mercadolibre.com.mx redtube.com dell.com namu.wiki gismeteo.ru patch.com kumparan.com healthline.com youku.com cjl58f3agc.com sex.com susm0q6jys.com mi.com aol.com cdninstagram.com outbrain.com google.com.au bnsjb1ab1e.com taboola.com ctrip.com namnak.com google.com.sg theepochtimes.com 65vk1fba34.com coinmarketcap.com 51sole.com samsung.com shaparak.ir dkn.tv baike.com ladbible.com yr9n47004g.com upwork.com bitly.com accuweather.com 0byv9mgbn0.com marca.com sberbank.ru playstation.com alnigeringcer.pro feedly.com tencent.com l6b587txj1.com siteadvisor.com flickr.com cloudfront.net businessinsider.com myanimelist.net list.tmall.com wix.com slickdeals.net zippyshare.com investing.com gamespot.com biobiochile.cl geeksforgeeks.org divar.ir myornamenti.com springer.com evernote.com asos.com ensonhaber.com rarbg.to glassdoor.com amazon.cn idntimes.com sahibinden.com leboncoin.fr sourceforge.net grammarly.com namasha.com uptodown.com friv.com 104.com.tw livedoor.com icicibank.com gearbest.com yao.tmall.com bp.blogspot.com sdpnoticias.com theverge.com cambridge.org jf71qh5v14.com icloud.com billdesk.com citi.com 360doc.com webex.com elpais.com onet.pl myway.com uidai.gov.in themeforest.net pulzo.com irctc.co.in gov.ao weebly.com blog.jp giphy.com goodreads.com qj.com.cn wp.pl wordreference.com adp.com inquirer.net goo.ne.jp google.com.ua alicdn.com userapi.com ndtv.com target.com ria.ru usatoday.com thesaurus.com googlevideo.com mercari.com banggood.com olx.pl ign.com animeflv.net lenta.ru weblio.jp google.gr unsplash.com 360.com verystream.com ptt.cc albawabhnews.com ecosia.org tradingview.com huffpost.com repubblica.it metropoles.com olx.ua taleo.net mlb.com rediff.com ouedkniss.com mgid.com huawei.com fidelity.com quizlet.com nur.kz downdetector.com skype.com kaskus.co.id kapanlagi.com pikabu.ru crptgate.com webmd.com hatenablog.com ultimate-guitar.com freejobalert.com tutorialspoint.com y2mate.com alwafd.news asus.com norton.com mathrubhumi.com wowhead.com trendingnow.video wiley.com prothomalo.com bancodevenezuela.com bzw315.com cnbc.com kakao.com wixsite.com 6.cn discogs.com surveymonkey.com asana.com runoob.com artstation.com files.wordpress.com duba.com wiktionary.org memurlar.net nike.com autodesk.com pornhublive.com gmx.net urdupoint.com segmentfault.com gmarket.co.kr free.fr google.com.vn ninisite.com cnzz.com popcash.net youth.cn emol.com naukri.com dianping.com ca.gov wsj.com wattpad.com jw.org spiegel.de subscene.com trustpilot.com list-manage.com gosuslugi.ru expedia.com squarespace.com web.de japanpost.jp telewebion.com 3c.tmall.com leagueoflegends.com google.com.pk pexels.com ebay.it gazeta.ru sonyliv.com gmanetwork.com best2019-games-web1.com crunchyroll.com independent.co.uk as.com hotels.com incometaxindiaefiling.gov.in cinecalidad.to hm.com gamer.com.tw bloomberg.com flvto.biz bild.de 91jm.com myworkday.com engadget.com myanmarload.com nhk.or.jp ifeng.com smzdm.com impress.co.jp heavy.com seznam.cz nexusmods.com internetdownloadmanager.com tokopedia.com alodokter.com lun.com aksam.com.tr nyaa.si gome.com.cn gizmodo.com dmm.com visualstudio.com chess.com heroesofrpg.com blog.me v2ex.com google.co.ve lowes.com reuters.com eventbrite.com orange.fr nhentai.net ebay.com.au tenki.jp t66y.com google.co.za udn.com 5ch.net stremanp.com viva.co.id ibm.com lordsfilm.tv b3z29k1uxb.com ea.com bandcamp.com lifo.gr eksisozluk.com souq.com europa.eu infobae.com kooora.com justdial.com blackboard.com google.cl merdeka.com minecraft.net wish.com jb51.net quintag.com oschina.net agoda.com indoxxi.studio td.com att.com jiameng.com discover.com bitbucket.org cloudflare.com indiamart.com beeg.com issuu.com mileroticos.com 126.com archiveofourown.org www.gov.uk rakuten.com drom.ru envato.com auction.co.kr chinaz.com interia.pl costco.com wunderground.com dcard.tw nikkei.com mit.edu go.com adaranth.com google.com.pe google.ro politico.com azure.com merriam-webster.com epfindia.gov.in storiespace.com macys.com n11.com vidio.com olx.com.br uniqlo.tmall.com intel.com kickstarter.com kknews.cc fbsbx.com zhaopin.com filehippo.com e-hentai.org service-now.com kerumal.com ozon.ru urbandictionary.com sxyprn.com hh.ru thesun.co.uk 2movierulz.ac dcinside.com ieee.org rbc.ru cnnindonesia.com zhiding.cn gstatic.com cisco.com pchome.com.tw joins.com realtor.com banesconline.com libero.it hotnewhiphop.com cdiscount.com naver.jp rapidgator.net newegg.com google.com.co t.me kijiji.ca yespornplease.com asahi.com afreecatv.com klix.ba iqoption.com duolingo.com uptobox.com in.gr getawesome2.com investopedia.com nba.com bolasport.com techradar.com sputniknews.com gsmarena.com marriott.com drive2.ru dribbble.com thefreedictionary.com donga.com 11st.co.kr techtudo.com.br hepsiburada.com uzone.id brilio.net coursera.org nianhuo.tmall.com google.ch hamariweb.com americanas.com.br avgle.com ecleneue.com lenovo.com drudgereport.com npr.org vnexpress.net labanquepostale.fr khanacademy.org state.gov codepen.io canalrcn.com coinbase.com dawmal.com chatwork.com semanticscholar.org google.co.ao shopee.tw t-online.de dytt8.net sozcu.com.tr hurriyet.com.tr ivi.ru cctv.com doc88.com flaticon.com subject.tmall.com nownews.com scol.com.cn ntralpenedhy.pro yandex.kz apkpure.com elmundo.es kizlarsoruyor.com concursolutions.com motorsport.com fast.com nature.com binance.com arxiv.org appledaily.com 4399.com rutor.info huya.com itmedia.co.jp google.pt blibli.com express.co.uk storm.mg verizonwireless.com royalbank.com legit.ng pantip.com superuser.com delta.com utorrent.com feng.com wildberries.ru lifewire.com thewhizmarketing.com corriere.it turkiye.gov.tr ebay.fr gotporn.com mercadolibre.com.ve akoam.net doorblog.jp 4pda.ru 51cto.com rarbgprx.org abola.pt canada.ca teamviewer.com chron.com eporner.com southwest.com creditonebank.com sci-hub.tw amazon.com.mx cnbeta.com seasonvar.ru redfin.com caixa.gov.br kompasiana.com shimo.im 58.com coupang.com inven.co.kr cryptobrowser.site discuss.com.hk pelisplus.co google.be paytm.com dafont.com thingiverse.com strava.com news18.com getpocket.com payu.in setare.com eyny.com andhrajyothy.com timeanddate.com xe.com qualtrics.com goal.com bleacherreport.com gyazo.com hesport.com chiphell.com indiatoday.in ytimg.com bicentenariobu.com chip.de hatena.ne.jp square-enix.com bol.uol.com.br ccleaner.com getbootstrap.com 4chan.org exhentai.org pole-emploi.fr 17track.net uniqlo.com wysasys.com zara.com kayak.com gtarcade.com food.tmall.com howtogeek.com weibo.cn nypost.com bankmellat.ir nvzhuang.tmall.com nga.cn cbssports.com blizzard.com axisbank.co.in polygon.com hupu.com moneycontrol.com cimaclub.com lefigaro.fr vtv.vn groupon.com dawn.com pandora.com istockphoto.com myfreecams.com prnt.sc atlassian.com docusign.net jooble.org google.dz pngtree.com motor1.com shopee.co.id live.net meetup.com harvard.edu kotaku.com wayfair.com clarin.com mynet.com secureserver.net chegg.com punchng.com xbombo.com westernjournal.com nate.com nbcnews.com caliente.mx beytoote.com gogoanime.io usaa.com yandex.com ruliweb.com reallifecam.com mawdoo3.com bhphotovideo.com telegraph.co.uk cima4u.tv kp.ru google.at shein.com tabelog.com python.org ccm.net google.nl err.tmall.com mayoclinic.org notifications.website docusign.com uber.com google.az indoxxi.show propdfconverter.com reclameaqui.com.br wondershare.com fmovies.to tandfonline.com sakshi.com nvidia.com narcity.com milliyet.com.tr mptentry.com aa.com ytmp3.cc bellesa.co rottentomatoes.com 178.com constantcontact.com epicgames.com nextdoor.com pcgamer.com audible.com cam4.com jma.go.jp dw.com media.tumblr.com spectrum.net elmogaz.com moocauby.com curseforge.com provincial.com mobile.de dictionary.com marketwatch.com dailypost.ng intentmedia.net prom.ua subito.it youjizz.com jumia.com.ng livescore.com searchdimension.com pornpics.com yaplakal.com myntra.com eshkol.io xda-developers.com hootsuite.com thehindu.com poste.it nexon.com ntdtv.kr fullhdfilmizlesene.net biblegateway.com cbsnews.com yadi.sk intoday.in wp.com tebyan.net fazenda.gov.br dhl.de ukr.net bookmyshow.com makeuseof.com expressvpn.com crunchbase.com google.sk basecamp.com tsinghua.edu.cn elwatannews.com socialblade.com neobux.com jugantor.com usbank.com depositphotos.com ctfile.com indosport.com lazada.sg lemonde.fr gitlab.com farfetch.com fanfiction.net anjuke.com gamib.com yallakora.com creditkarma.com codecanyon.net battle.net ithome.com ruten.com.twallocine.fr"
sites = sites.split(" ")

const allSites = []
for (let i = 0; i < sites.length; i++) {
    request(`https://${sites[i]}`, function(error, response, body) {
        let stuff = "",
            re = /<(.*?)>/g
        if (body) {
            body.replace(re, function(s, match) {
                if (match.startsWith("/") === false) {
                    if (match.startsWith("=") === false) {
                        match = match
                                    .replace(/(.*?) (.*)/, "$1")
                                    .replace(/\//, "")
                                    .toLowerCase()
                        stuff += match += "\n"
                    }
                }
            })
        }

        stuff = stuff.split(" ")
        let data = {
            "site": sites[i]
        }
        let allTheTags = {}
        for (let i = 0; i < stuff.length; i++) {
            for (let tag = 0; tag < tags.length; tag++) {
                let tagLength = stuff[i].split(tags[tag]).length - 1
                let tagName = tags[tag].toString()
                if (tagLength !== 0) {
                    allTheTags[tagName] = tagLength
                } else {
                    continue
                }
            }
        }
        Object.assign(data, {"tags": allTheTags})
        allSites.push(data)
        
        fs.writeFile("data.json", JSON.stringify(allSites), function(err) {
            if (err) throw err
        })
    })
    console.log(`${sites[i]} (Site #${i}) Saved`)
}

const tags = [
    "!doctype",
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "meta",
    "meter",
    "nav",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
]
