page = PAGE
page {
    typeNum = 0

    10 = FLUIDTEMPLATE
    10 {
        templateName = TEXT
        templateName.stdWrap {
            cObject = TEXT
            cObject {
                data = levelfield:-2, backend_layout_next_level, slide
                override.field = backend_layout
                split {
                    token = pagets__
                    1.current = 1
                    1.wrap = |
                }
            }
            ifEmpty = Default
        }

        templateRootPaths {
            10 = EXT:site_package/Resources/Private/Templates/Page/
        }

        partialRootPaths {
            10 = EXT:site_package/Resources/Private/Partials/Page/
        }

        layoutRootPaths {
            10 = EXT:site_package/Resources/Private/Layouts/Page/
        }

        variables {
            content < styles.content.get

            sidebar < styles.content.get
            sidebar.select.where = colPos = 1

            headerNavigation < lib.navigation.header
        }
    }

    includeCSS {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap.external = 1
    }

    includeJSFooterlibs {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
        bootstrap.external = 1

        jquery = https://code.jquery.com/jquery-1.12.4.min.js
        jquery {
            external = 1
            forceOnTop = 1
        }
    }

    meta {
        viewport = width=device-width, initial-scale=1
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1
        robots = index, follow
        description = {$page.meta.description}
        description.override.field = description
        author = {$page.meta.author}
        author.override.field = author
        keywords = {$page.meta.keywords}
        keywords.override.field = keywords
    }

    footerData {
        10 = COA
        10 {
            wrap = <script type="text/javascript">|</script>

            if.isTrue = {$page.tracking.google.trackingID}

            10 = TEXT
            10 {
                trim = 1
                value (
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                ga('create', '{$page.tracking.google.trackingID}', 'auto');
                )
            }

            20 = TEXT
            20 {
                if.isTrue = {$page.tracking.google.anonymizeIp}
                value = ga('set', 'anonymizeIp', true);
            }

            30 = TEXT
            30.value = ga('send', 'pageview');
        }
    }
}

[applicationContext = Development*]
    page {
        meta {
            robots = noindex, nofollow
        }
    }
[global]
