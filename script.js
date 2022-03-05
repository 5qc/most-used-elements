function deprecated(tag) {
    if (tag === "acronym" || tag === "applet" || tag === "basefont" || tag === "big" || tag === "center" || tag === "dir" || tag === "font" || tag === "frame" || tag === "frameset" || tag === "noframes" || tag === "strike" || tag === "tt") {
        return `title="Deprecated Element" deprecated`
    } else {
        return ""
    }
}

const client = new XMLHttpRequest()
client.onreadystatechange = function() {
    if (this.readyState === 4 && this.status == "200") {
        const response = JSON.parse(client.responseText)
        const theTags = {
            "!doctype": 0,
            a: 0,
            abbr: 0,
            acronym: 0,
            address: 0,
            applet: 0,
            area: 0,
            article: 0,
            aside: 0,
            audio: 0,
            b: 0,
            base: 0,
            basefont: 0,
            bdi: 0,
            bdo: 0,
            big: 0,
            blockquote: 0,
            body: 0,
            br: 0,
            button: 0,
            canvas: 0,
            caption: 0,
            center: 0,
            cite: 0,
            code: 0,
            col: 0,
            colgroup: 0,
            data: 0,
            datalist: 0,
            dd: 0,
            del: 0,
            details: 0,
            dfn: 0,
            dialog: 0,
            dir: 0,
            div: 0,
            dl: 0,
            dt: 0,
            em: 0,
            embed: 0,
            fieldset: 0,
            figcaption: 0,
            figure: 0,
            font: 0,
            footer: 0,
            form: 0,
            frame: 0,
            frameset: 0,
            h1: 0,
            h2: 0,
            h3: 0,
            h4: 0,
            h5: 0,
            h6: 0,
            head: 0,
            header: 0,
            hr: 0,
            html: 0,
            i: 0,
            iframe: 0,
            img: 0,
            input: 0,
            ins: 0,
            kbd: 0,
            label: 0,
            legend: 0,
            li: 0,
            link: 0,
            main: 0,
            map: 0,
            mark: 0,
            meta: 0,
            meter: 0,
            nav: 0,
            noframes: 0,
            noscript: 0,
            object: 0,
            ol: 0,
            optgroup: 0,
            option: 0,
            output: 0,
            p: 0,
            param: 0,
            picture: 0,
            pre: 0,
            progress: 0,
            q: 0,
            rp: 0,
            rt: 0,
            ruby: 0,
            s: 0,
            samp: 0,
            script: 0,
            section: 0,
            select: 0,
            small: 0,
            source: 0,
            span: 0,
            strike: 0,
            strong: 0,
            style: 0,
            sub: 0,
            summary: 0,
            sup: 0,
            svg: 0,
            table: 0,
            tbody: 0,
            td: 0,
            template: 0,
            textarea: 0,
            tfoot: 0,
            th: 0,
            thead: 0,
            time: 0,
            title: 0,
            tr: 0,
            track: 0,
            tt: 0,
            u: 0,
            ul: 0,
            var: 0,
            video: 0,
            wbr: 0
        }
        var sortable = []

        for (let i = 0; i < response.length; i++) {
            const site = response[i]
            const tags = site.tags

            for (const tag in tags) {
                theTags[tag] += tags[tag]
            }
        }
        for (let i = 0; i < Object.keys(theTags).length; i++) {
            sortable.push([Object.keys(theTags)[i], Object.values(theTags)[i]])
            sortable.sort(function(a, b) {
                return b[1] - a[1]
            })
        }

        let elements = document.querySelector(".elements tbody")
        console.log(sortable[100])
        for (let i = 0; i < sortable.length; i++) {
            let html = `<tr class="element"><td class="number">${i + 1}.</td><td class="name" ${deprecated(sortable[i][0])}><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${sortable[i][0]}" target="_blank">&lt;${sortable[i][0]}&gt;</a></td><td class="times">Used ${sortable[i][1]} times</td></tr>`
            elements.insertAdjacentHTML("beforeend", html)
        }
    }
}
client.open("GET", "/data.json", true)
client.send()
