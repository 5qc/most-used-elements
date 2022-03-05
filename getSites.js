/*
    This is the code that gets the 1000 most popular websites and logs all the elements
    Made by roc0ast3r (github.com/5qc) using Node.js
*/
const request = require("request"),
      fs = require("fs")

let sites = "google.com youtube.com facebook.com baidu.com wikipedia.org qq.com taobao.com yahoo.com tmall.com amazon.com twitter.com sohu.com live.com jd.com vk.com instagram.com sina.com.cn weibo.com reddit.com login.tmall.com .cn yandex.ru linkedin.com blogspot.com netflix.com twitch.tv whatsapp.com pornhub.com yahoo.co.jp csdn.net alipay.com microsoftonline.com naver.com pages.tmall.com microsoft.com livejasmin.com aliexpress.com bing.com ebay.com github.com tribunnews.com google.com.hk amazon.co.jp stackoverflow.com mail.ru okezone.com google.co.in office.com xvideos.com msn.com paypal.com bilibili.com hao.com imdb.com t.co fandom.com imgur.com xhamster.com .com wordpress.com apple.com soso.com google.com.br booking.com xinhuanet.com adobe.com pinterest.com amazon.de amazon.in dropbox.com bongacams.com google.co.jp babytree.com detail.tmall.com tumblr.com google.ru google.fr google.de so.com cnblogs.com quora.com amazon.co.uk detik.com google.cn bbc.com force.com deloplen.com salesforce.com pixnet.net ettoday.net cnn.com onlinesbi.com roblox.com aparat.com thestartmagazine.com bbc.co.uk google.es amazonaws.com google.it tianya.cn xnxx.com rakuten.co.jp chase.com spotify.com espn.com craigslist.org zhihu.com soundcloud.com discordapp.com jianshu.com nicovideo.jp daum.net medium.com nytimes.com cricbuzz.com .com google.co.uk stackexchange.com popads.net nih.gov mediafire.com globo.com indeed.com sogou.com researchgate.net wetransfer.com sindonews.com avito.ru vimeo.com hotstar.com butheptesitrew.pro uol.com.br trello.com google.com.mx wschools.com zhanqi.tv china.com.cn gmw.cn chaturbate.com zoom.us godaddy.com panda.tv etsy.com mercadolivre.com.br slideshare.net gloyah.net fc.com theguardian.com walmart.com alibaba.com caijing.com.cn ok.ru flipkart.com shutterstock.com ebay.de duckduckgo.com canva.com ebay.co.uk bukalapak.com google.com.tw freepik.com amazon.fr onlinevideoconverter.com slack.com amazon.it google.com.tr huanqiu.com dailymotion.com bankofamerica.com aliyun.com steamcommunity.com espncricinfo.com speedtest.net youporn.com kompas.com liputan.com ltn.com.tw indiatimes.com yelp.com hulu.com blogger.com spankbang.com mama.cn sciencedirect.com eastday.com myshopify.com twimg.com gamepedia.com softonic.com digikala.com deviantart.com vice.com cnet.com yts.lt wellsfargo.com steampowered.com wikihow.com weather.com okta.com douban.com zillow.com youm.com instructure.com dspmulti.com mega.nz iqiyi.com scribd.com rednet.cn cbbp.com google.ca amazon.es messenger.com thepiratebay.org udemy.com tripadvisor.com redd.it mozilla.org foxnews.com savefrom.net archive.org google.pl patria.org.ve livedoor.jp airbnb.com gfycat.com office.com dailymail.co.uk rambler.ru amazon.ca google.com.sa zendesk.com tistory.com line.me setn.com grid.id toutiao.com google.co.th betja.com allegro.pl exoclick.com google.com.ar ebay-kleinanzeigen.de google.com.eg yy.com google.co.kr zoho.com abs-cbn.com ikea.com phengung.net intuit.com shopify.com atlassian.net gamersky.com ibps.in douyu.com homedepot.com patreon.com pixabay.com sarkariresult.com google.co.id bestbuy.com dmgame.com dmm.co.jp behance.net youdao.com kinopoisk.ru gag.com pojie.cn varzesh.com ilovepdf.com manoramaonline.com usps.com telegram.org hubspot.com washingtonpost.com fiverr.com breitbart.com rt.com momoshop.com.tw hdfcbank.com mailchimp.com xfinity.com hp.com livejournal.com hespress.com otvfoco.com.br primevideo.com pornq.com pinimg.com academia.edu americanexpress.com elbalad.news rutracker.org zol.com.cn jrj.com.cn capitalone.com openload.co chouftv.ma smallpdf.com pixiv.net box.com ask.com reverso.net ebc.net.tw bet.com forbes.com ouo.io wordpress.org doubleclick.net suara.com ups.com wikimedia.org cdstm.cn buzzfeed.com ameblo.jp mercadolibre.com.ar kakaku.com genius.com ok.com oracle.com x.to fedex.com elsevier.com op.gg kissanime.ru mercadolibre.com.mx namu.wiki redtube.com dell.com sex.com patch.com gismeteo.ru kumparan.com healthline.com youku.com mi.com cjlfagc.com bnsjbabe.com susmqjys.com aol.com cdninstagram.com google.com.au outbrain.com coinmarketcap.com taboola.com namnak.com ctrip.com google.com.sg theepochtimes.com samsung.com vkfba.com dkn.tv sole.com shaparak.ir baike.com yrng.com ladbible.com bitly.com marca.com upwork.com accuweather.com tencent.com byvmgbn.com sberbank.ru playstation.com alnigeringcer.pro feedly.com lbtxj.com siteadvisor.com cloudfront.net list.tmall.com flickr.com slickdeals.net businessinsider.com myanimelist.net investing.com wix.com gamespot.com zippyshare.com biobiochile.cl geeksforgeeks.org evernote.com myornamenti.com divar.ir asos.com ensonhaber.com springer.com rarbg.to glassdoor.com idntimes.com amazon.cn uptodown.com sahibinden.com leboncoin.fr sourceforge.net namasha.com grammarly.com .com.tw friv.com livedoor.com cambridge.org icicibank.com yao.tmall.com gearbest.com bp.blogspot.com billdesk.com sdpnoticias.com jfqhv.com theverge.com icloud.com doc.com wp.pl citi.com myway.com webex.com elpais.com onet.pl uidai.gov.in irctc.co.in themeforest.net pulzo.com weebly.com giphy.com gov.ao blog.jp qj.com.cn goodreads.com wordreference.com adp.com google.com.ua inquirer.net ria.ru goo.ne.jp userapi.com alicdn.com ndtv.com target.com usatoday.com mercari.com thesaurus.com googlevideo.com banggood.com unsplash.com ign.com animeflv.net olx.pl weblio.jp lenta.ru ptt.cc google.gr .com albawabhnews.com verystream.com repubblica.it tradingview.com ecosia.org metropoles.com huffpost.com rediff.com olx.ua mlb.com taleo.net ouedkniss.com huawei.com quizlet.com mgid.com nur.kz fidelity.com downdetector.com kaskus.co.id skype.com pikabu.ru crptgate.com kapanlagi.com alwafd.news webmd.com hatenablog.com ultimate-guitar.com tutorialspoint.com freejobalert.com ymate.com norton.com asus.com wowhead.com wiley.com mathrubhumi.com bzw.com trendingnow.video prothomalo.com bancodevenezuela.com cnbc.com kakao.com discogs.com wixsite.com gmx.net .cn surveymonkey.com artstation.com asana.com runoob.com duba.com files.wordpress.com wiktionary.org memurlar.net nike.com autodesk.com pornhublive.com urdupoint.com gmarket.co.kr segmentfault.com google.com.vn free.fr ninisite.com ca.gov cnzz.com popcash.net emol.com wsj.com youth.cn naukri.com dianping.com subscene.com wattpad.com jw.org spiegel.de japanpost.jp trustpilot.com gosuslugi.ru list-manage.com expedia.com squarespace.com telewebion.com web.de leagueoflegends.com c.tmall.com pexels.com hotels.com gazeta.ru ebay.it google.com.pk sonyliv.com gmanetwork.com best-games-web.com independent.co.uk crunchyroll.com as.com hm.com incometaxindiaefiling.gov.in gamer.com.tw cinecalidad.to bild.de bloomberg.com jm.com seznam.cz flvto.biz myworkday.com impress.co.jp engadget.com myanmarload.com nhk.or.jp ifeng.com smzdm.com heavy.com lun.com nexusmods.com internetdownloadmanager.com tokopedia.com nyaa.si alodokter.com aksam.com.tr gizmodo.com dmm.com gome.com.cn blog.me visualstudio.com heroesofrpg.com chess.com vex.com ty.com google.co.ve reuters.com lowes.com orange.fr eventbrite.com nhentai.net tenki.jp ebay.com.au ibm.com google.co.za ch.net udn.com stremanp.com ea.com viva.co.id lordsfilm.tv bzkuxb.com kooora.com bandcamp.com google.cl lifo.gr eksisozluk.com europa.eu infobae.com souq.com justdial.com blackboard.com merdeka.com jb.net minecraft.net quintag.com wish.com att.com oschina.net agoda.com indoxxi.studio jiameng.com td.com discover.com bitbucket.org issuu.com cloudflare.com indiamart.com beeg.com drom.ru .com mileroticos.com costco.com archiveofourown.org www.gov.uk rakuten.com envato.com auction.co.kr chinaz.com nikkei.com dcard.tw interia.pl mit.edu wunderground.com go.com adaranth.com google.ro politico.com google.com.pe azure.com macys.com merriam-webster.com n.com epfindia.gov.in storiespace.com uniqlo.tmall.com vidio.com olx.com.br intel.com fbsbx.com kickstarter.com kknews.cc ozon.ru zhaopin.com filehippo.com service-now.com e-hentai.org thesun.co.uk kerumal.com hh.ru urbandictionary.com zhiding.cn sxyprn.com movierulz.ac cisco.com dcinside.com ieee.org rbc.ru cnnindonesia.com libero.it gstatic.com banesconline.com pchome.com.tw realtor.com joins.com hotnewhiphop.com cdiscount.com naver.jp newegg.com rapidgator.net google.com.co t.me kijiji.ca drive.ru yespornplease.com asahi.com afreecatv.com klix.ba iqoption.com uptobox.com duolingo.com getawesome.com in.gr sputniknews.com investopedia.com nba.com bolasport.com st.co.kr thefreedictionary.com uzone.id techradar.com gsmarena.com marriott.com dribbble.com donga.com brilio.net hepsiburada.com techtudo.com.br nianhuo.tmall.com coursera.org hamariweb.com npr.org google.ch americanas.com.br vnexpress.net avgle.com ecleneue.com lenovo.com drudgereport.com codepen.io labanquepostale.fr state.gov khanacademy.org canalrcn.com shopee.tw dawmal.com coinbase.com chatwork.com ivi.ru semanticscholar.org google.co.ao dytt.net t-online.de sozcu.com.tr hurriyet.com.tr cctv.com appledaily.com huya.com doc.com nownews.com flaticon.com subject.tmall.com apkpure.com scol.com.cn ntralpenedhy.pro motorsport.com yandex.kz elmundo.es arxiv.org kizlarsoruyor.com concursolutions.com fast.com nature.com .com binance.com rutor.info itmedia.co.jp google.pt pda.ru blibli.com storm.mg verizonwireless.com express.co.uk legit.ng pantip.com royalbank.com delta.com utorrent.com superuser.com wildberries.ru thewhizmarketing.com feng.com lifewire.com corriere.it turkiye.gov.tr ebay.fr mercadolibre.com.ve gotporn.com akoam.net abola.pt doorblog.jp cto.com canada.ca rarbgprx.org southwest.com teamviewer.com chron.com eporner.com caixa.gov.br .com amazon.com.mx creditonebank.com sci-hub.tw cnbeta.com seasonvar.ru redfin.com kompasiana.com xe.com coupang.com shimo.im cryptobrowser.site inven.co.kr pelisplus.co discuss.com.hk google.be paytm.com thingiverse.com dafont.com strava.com news.com getpocket.com payu.in setare.com eyny.com andhrajyothy.com timeanddate.com chiphell.com qualtrics.com indiatoday.in goal.com bleacherreport.com hesport.com gyazo.com ytimg.com chip.de bicentenariobu.com ccleaner.com hatena.ne.jp square-enix.com pole-emploi.fr bol.uol.com.br chan.org getbootstrap.com uniqlo.com exhentai.org hupu.com track.net wysasys.com kayak.com zara.com nga.cn gtarcade.com food.tmall.com howtogeek.com weibo.cn nypost.com bankmellat.ir nvzhuang.tmall.com cbssports.com atlassian.com blizzard.com axisbank.co.in polygon.com moneycontrol.com prnt.sc cimaclub.com lefigaro.fr vtv.vn groupon.com dawn.com pandora.com istockphoto.com myfreecams.com docusign.net shopee.co.id jooble.org pngtree.com google.dz meetup.com motor.com live.net harvard.edu kotaku.com nbcnews.com wayfair.com clarin.com mynet.com secureserver.net chegg.com punchng.com xbombo.com westernjournal.com usaa.com nate.com caliente.mx ruliweb.com beytoote.com gogoanime.io yandex.com bhphotovideo.com reallifecam.com mawdoo.com kp.ru cimau.tv telegraph.co.uk google.at ccm.net shein.com tabelog.com google.nl python.org google.az err.tmall.com mayoclinic.org indoxxi.show notifications.website docusign.com uber.com propdfconverter.com fmovies.to wondershare.com reclameaqui.com.br nvidia.com tandfonline.com sakshi.com aa.com narcity.com milliyet.com.tr mptentry.com bellesa.co .com ytmp.cc nextdoor.com rottentomatoes.com constantcontact.com audible.com epicgames.com mobile.de pcgamer.com jma.go.jp cam.com dw.com media.tumblr.com moocauby.com spectrum.net elmogaz.com provincial.com curseforge.com subito.it dictionary.com marketwatch.com dailypost.ng intentmedia.net prom.ua eshkol.io youjizz.com jumia.com.ng livescore.com searchdimension.com myntra.com pornpics.com yaplakal.com dhl.de xda-developers.com thehindu.com hootsuite.com poste.it ntdtv.kr nexon.com cbsnews.com fullhdfilmizlesene.net biblegateway.com intoday.in yadi.sk wp.com tebyan.net fazenda.gov.br ukr.net bookmyshow.com basecamp.com expressvpn.com makeuseof.com google.sk crunchbase.com jugantor.com tsinghua.edu.cn elwatannews.com neobux.com socialblade.com depositphotos.com ctfile.com usbank.com lemonde.fr lazada.sg indosport.com farfetch.com gamib.com gitlab.com fanfiction.net anjuke.com battle.net yallakora.com creditkarma.com codecanyon.net allocine.fr ithome.com ruten.com.tw"
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