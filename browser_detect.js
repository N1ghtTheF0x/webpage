/**
 * Get the Browser you REALLY are using
 * @returns {"opera"|"firefox"|"safari"|"ie11"|"edge_old"|"chrome"|"edge_stalker"|"blink"|"unknown"} - a shot name of the common browser
 */
function GetBrowser()
{
    // https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined'

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification))

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia

    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.app && !!window.chrome.csi && !!window.chrome.loadTimes)

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1)

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS
    if(isOpera)
    {
        return "opera" // Nah it's ok...
    }
    else if(isFirefox)
    {
        return "firefox" // Good one
    }
    else if(isSafari)
    {
        return "safari" // yuck, apple
    }
    else if(isIE)
    {
        return "ie11" // seriously what are you doing here?
    }
    else if(isEdge)
    {
        return "edge_old" // go away
    }
    else if(isChrome)
    {
        return "chrome" // RECOMMENED, ALWAYS USE THIS BROWSER!!!
    }
    else if(isEdgeChromium)
    {
        return "edge_stalker" // Creep
    }
    else if(isBlink)
    {
        return "blink" // I don't have any knowledege about you
    }
    else
    {
        return "unknown" // I don't know what you're using...
    }
}
/**
 * Check if your REALLY using the browser
 */
function IsRealBrowser()
{
    const real_browser = GetBrowser()
    console.info("Real Browser: "+real_browser+"\nUserAgent: "+navigator.userAgent)
    if(navigator.userAgent.toLowerCase().includes(real_browser)||real_browser==="unknown")
    {
        return true
    }
    else
    {
        return false
    }
}