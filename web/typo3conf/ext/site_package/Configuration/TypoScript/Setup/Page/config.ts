config {
    // BestPractice
    absRefPrefix = auto
    cache_period = 86400
    content_from_pid_allowOutsideDomain = 1
    contentObjectExceptionHandler = 0
    debug = 0
    disablePrefixComment = 1
    doctype = html5
    no_cache = 0
    extTarget = _blank
    fileTarget = _blank
    headerComment = Powered by sitepackage
    index_enable = 1
    index_externals = 1
    intTarget = _top
    linkVars = L
    metaCharset = utf-8
    moveJsFromHeaderToFooter = 1
    noScaleUp = 1
    pageTitleFirst = 1
    removeDefaultCSS = 1
    removeDefaultJS = external
    removePageCss = 1
    sendCacheHeaders = 1
    spamProtectEmailAddresses = 1
    typolinkCheckRootline = 1
    typolinkEnableLinksAcrossDomains = 1

    // Language Settings
    htmlTag_langKey = de-DE
    language = de
    sys_language_isocode_default = de
    sys_language_mode = content_fallback
    sys_language_overlay = 1
    sys_language_uid = 0

    // Compression and Concatenation
    compressJs = 1
    compressCss = 1
    concatenateJs = 1
    concatenateCss = 1

    // Extension defaults
    tx_realurl_enable = 1
}

[applicationContext = Development*]
    config {
        compressJs = 0
        compressCss = 0
        concatenateJs = 0
        concatenateCss = 0
        debug = 1
        sendCacheHeaders = 0
    }
[global]
