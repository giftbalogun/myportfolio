/*
    Copyright 2016 - BoxedAll flatBridge
    Developed by : BoxedAll Platforms
    Last Update : Fri 12, September - 2016

*/
function flatAnalytics(a) {
  (globalKey = a),
    (sessToken = "_flA001" + a),
    (getJSON = new XMLHttpRequest());
  var b = sessionStorage.getItem(sessToken);
  localStorage.getItem(sessToken + "token");
  b
    ? passDataToAnalytics(b)
    : (getJSON.open("GET", "https://freegeoip.live/json/", !0),
      (getJSON.onreadystatechange = function () {
        if (4 == getJSON.readyState && 200 == getJSON.status) {
          var b = JSON.parse(getJSON.responseText),
            c =
              "IP=" +
              b.ip +
              "&SERVICEID=" +
              a +
              "&COUNTRY=" +
              b.country_code +
              "&REGION=" +
              b.region_name +
              "&OS=" +
              platform.os +
              "&BROWSER=" +
              platform.name +
              "&VERSION=" +
              platform.version +
              "&LAYOUT=" +
              platform.layout +
              "&INFO=" +
              platform.info +
              "&DESC=" +
              platform.description;
          sessionStorage.setItem(sessToken, c), passDataToAnalytics(c);
        }
      }),
      getJSON.send(null));
}
function passDataToAnalytics(a) {
  var c =
    (sessionStorage.getItem(sessToken),
    localStorage.getItem(sessToken + "token"));
  if (a) {
    c
      ? (url = URL + "?" + a + "&TOKEN=" + c + "&PATH=" + window.location.href)
      : (url = URL + "?" + a + "&PATH=" + window.location.href);
    var d = new XMLHttpRequest();
    d.open("GET", url, !0),
      (d.onreadystatechange = function () {
        if (4 == d.readyState && 200 == d.status) {
          var a = JSON.parse(d.responseText);
          "new" == a.status &&
            localStorage.setItem("_flA001" + globalKey + "token", a.token),
            socketCounter(localStorage.getItem(sessToken + "token"));
        }
      }),
      d.send(null);
  } else {
    flatAnalytics(globalKey);
  }
}
function socketCounter(a) {
  var b = document.createElement("iframe");
  b.setAttribute("src", URL + "/livecounter/?name=" + globalKey + "---" + a),
    b.setAttribute("style", "height: 0px; width: 0px; display: none;"),
    document.body.appendChild(b);
}
var URL = "https://analyticsapp.boxedall.com";
(function () {
  "use strict";
  function a(a) {
    return (a = String(a)), a.charAt(0).toUpperCase() + a.slice(1);
  }
  function b(a, b, c) {
    var e = {
      "10.0": "10",
      6.4: "10 Technical Preview",
      6.3: "8.1",
      6.2: "8",
      6.1: "7 / Server 2008 R2",
      "6.0": "Vista / Server 2008",
      5.2: "XP 64-bit / Server 2003",
      5.1: "XP",
      5.01: "2000 SP1",
      "5.0": "2000",
      "4.0": "NT",
      "4.90": "ME",
    };
    return (
      b &&
        c &&
        /^Win/i.test(a) &&
        !/^Windows Phone /i.test(a) &&
        (e = e[/[\d.]+$/.exec(a)]) &&
        (a = "Windows " + e),
      (a = String(a)),
      b && c && (a = a.replace(RegExp(b, "i"), c)),
      (a = d(
        a
          .replace(/ ce$/i, " CE")
          .replace(/\bhpw/i, "web")
          .replace(/\bMacintosh\b/, "Mac OS")
          .replace(/_PowerPC\b/i, " OS")
          .replace(/\b(OS X) [^ \d]+/i, "$1")
          .replace(/\bMac (OS X)\b/, "$1")
          .replace(/\/(\d)/, " $1")
          .replace(/_/g, ".")
          .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
          .replace(/\bx86\.64\b/gi, "x86_64")
          .replace(/\b(Windows Phone) OS\b/, "$1")
          .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
          .split(" on ")[0]
      ))
    );
  }
  function c(a, b) {
    var c = -1,
      d = a ? a.length : 0;
    if ("number" == typeof d && d > -1 && d <= r) {
      for (; ++c < d; ) {
        b(a[c], c, a);
      }
    } else {
      e(a, b);
    }
  }
  function d(b) {
    return (b = j(b)), /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function e(a, b) {
    for (var c in a) {
      v.call(a, c) && b(a[c], c, a);
    }
  }
  function f(b) {
    return null == b ? a(b) : w.call(b).slice(8, -1);
  }
  function g(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return !(
      /^(?:boolean|number|string|undefined)$/.test(c) ||
      ("object" == c && !a[b])
    );
  }
  function h(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function i(a, b) {
    var d = null;
    return (
      c(a, function (c, e) {
        d = b(d, c, e, a);
      }),
      d
    );
  }
  function j(a) {
    return String(a).replace(/^ +| +$/g, "");
  }
  function k(a) {
    function c(b) {
      return i(b, function (b, c) {
        return (
          b ||
          (RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) &&
            (c.label || c))
        );
      });
    }
    function l(b) {
      return i(b, function (b, c, d) {
        return (
          b ||
          ((c[X] ||
            c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)] ||
            RegExp("\\b" + h(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
            d)
        );
      });
    }
    function o(b) {
      return i(b, function (b, c) {
        return (
          b ||
          (RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) &&
            (c.label || c))
        );
      });
    }
    function p(c) {
      return i(c, function (c, d) {
        var e = d.pattern || h(d);
        return (
          !c &&
            (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a)) &&
            (c = b(c, e, d.label || d)),
          c
        );
      });
    }
    function q(b) {
      return i(b, function (b, c) {
        var e = c.pattern || h(c);
        return (
          !b &&
            (b =
              RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) ||
              RegExp(
                "\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                "i"
              ).exec(a)) &&
            ((b = String(
              c.label && !RegExp(e, "i").test(c.label) ? c.label : b
            ).split("/"))[1] &&
              !/[\d.]+/.test(b[0]) &&
              (b[0] += " " + b[1]),
            (c = c.label || c),
            (b = d(
              b[0]
                .replace(RegExp(e, "i"), c)
                .replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ")
                .replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")
            ))),
          b
        );
      });
    }
    function r(b) {
      return i(b, function (b, c) {
        return (
          b ||
          (RegExp(
            c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
            "i"
          ).exec(a) || 0)[1] ||
          null
        );
      });
    }
    function u() {
      return this.description || "";
    }
    var v = m,
      x = a && "object" == typeof a && "String" != f(a);
    x && ((v = a), (a = null));
    var y = v.navigator || {},
      z = y.userAgent || "";
    a || (a = z);
    var A,
      B,
      C = x || t == n,
      D = x
        ? !!y.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
      E = "Object",
      F = x ? E : "ScriptBridgingProxyObject",
      G = x ? E : "Environment",
      H = x && v.java ? "JavaPackage" : f(v.java),
      I = x ? E : "RuntimeObject",
      J = /\bJava/.test(H) && v.java,
      K = J && f(v.environment) == G,
      L = J ? "a" : "ÃŽÂ±",
      M = J ? "b" : "ÃŽÂ²",
      N = v.document || {},
      O = v.operamini || v.opera,
      P = s.test((P = x && O ? O["[[Class]]"] : f(O))) ? P : (O = null),
      Q = a,
      R = [],
      S = null,
      T = a == z,
      U = T && O && "function" == typeof O.version && O.version(),
      V = c([
        { label: "EdgeHTML", pattern: "Edge" },
        "Trident",
        { label: "WebKit", pattern: "AppleWebKit" },
        "iCab",
        "Presto",
        "NetFront",
        "Tasman",
        "KHTML",
        "Gecko",
      ]),
      W = o([
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        { label: "Microsoft Edge", pattern: "Edge" },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        "SeaMonkey",
        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Sleipnir",
        "SlimBrowser",
        { label: "SRWare Iron", pattern: "Iron" },
        "Sunrise",
        "Swiftfox",
        "WebPositive",
        "Opera Mini",
        { label: "Opera Mini", pattern: "OPiOS" },
        "Opera",
        { label: "Opera", pattern: "OPR" },
        "Chrome",
        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
        { label: "Firefox Mobile", pattern: "FxiOS" },
        { label: "IE", pattern: "IEMobile" },
        { label: "IE", pattern: "MSIE" },
        "Safari",
      ]),
      X = q([
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation 3",
        "PlayStation 4",
        "PlayStation Vita",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom",
      ]),
      Y = l({
        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
        Amazon: { Kindle: 1, "Kindle Fire": 1 },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: { "Google TV": 1, Nexus: 1 },
        HP: { TouchPad: 1 },
        HTC: {},
        LG: {},
        Microsoft: { Xbox: 1, "Xbox One": 1 },
        Motorola: { Xoom: 1 },
        Nintendo: { "Wii U": 1, Wii: 1 },
        Nokia: { Lumia: 1 },
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1,
        },
        Sony: { "PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1 },
      }),
      Z = p([
        "Windows Phone ",
        "Android",
        "CentOS",
        { label: "Chrome OS", pattern: "CrOS" },
        "Debian",
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
        "Kubuntu",
        "Linux Mint",
        "OpenBSD",
        "Red Hat",
        "SuSE",
        "Ubuntu",
        "Xubuntu",
        "Cygwin",
        "Symbian OS",
        "hpwOS",
        "webOS ",
        "webOS",
        "Tablet OS",
        "Linux",
        "Mac OS X",
        "Macintosh",
        "Mac",
        "Windows 98;",
        "Windows ",
      ]);
    if (
      (V && (V = [V]),
      Y && !X && (X = q([Y])),
      (A = /\bGoogle TV\b/.exec(X)) && (X = A[0]),
      /\bSimulator\b/i.test(a) && (X = (X ? X + " " : "") + "Simulator"),
      "Opera Mini" == W &&
        /\bOPiOS\b/.test(a) &&
        R.push("running in Turbo/Uncompressed mode"),
      /^iP/.test(X)
        ? (W || (W = "Safari"),
          (Z =
            "iOS" +
            ((A = / OS ([\d_]+)/i.exec(a))
              ? " " + A[1].replace(/_/g, ".")
              : "")))
        : "Konqueror" != W || /buntu/i.test(Z)
        ? Y &&
          "Google" != Y &&
          ((/Chrome/.test(W) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(X))
          ? ((W = "Android Browser"),
            (Z = /\bAndroid\b/.test(Z) ? Z : "Android"))
          : "Silk" == W
          ? (/\bMobi/i.test(a) || ((Z = "Android"), R.unshift("desktop mode")),
            /Accelerated *= *true/i.test(a) && R.unshift("accelerated"))
          : "PaleMoon" == W && (A = /\bFirefox\/([\d.]+)\b/.exec(a))
          ? R.push("identifying as Firefox " + A[1])
          : "Firefox" == W && (A = /\b(Mobile|Tablet|TV)\b/i.exec(a))
          ? (Z || (Z = "Firefox OS"), X || (X = A[1]))
          : (W &&
              !(A =
                !/\bMinefield\b/i.test(a) &&
                /\b(?:Firefox|Safari)\b/.exec(W))) ||
            (W &&
              !X &&
              /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(A + "/") + 8)) &&
              (W = null),
            (A = X || Y || Z) &&
              (X ||
                Y ||
                /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z)) &&
              (W =
                /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z) ? Z : A) +
                " Browser"))
        : (Z = "Kubuntu"),
      U ||
        (U = r([
          "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))",
          "Version",
          h(W),
          "(?:Firefox|Minefield|NetFront)",
        ])),
      (A =
        ("iCab" == V && parseFloat(U) > 3 && "WebKit") ||
        (/\bOpera\b/.test(W) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(V) &&
          "WebKit") ||
        (!V && /\bMSIE\b/i.test(a) && ("Mac OS" == Z ? "Tasman" : "Trident")) ||
        ("WebKit" == V &&
          /\bPlayStation\b(?! Vita\b)/i.test(W) &&
          "NetFront")) && (V = [A]),
      "IE" == W && (A = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
        ? ((W += " Mobile"),
          (Z = "Windows Phone " + (/\+$/.test(A) ? A : A + ".x")),
          R.unshift("desktop mode"))
        : /\bWPDesktop\b/i.test(a)
        ? ((W = "IE Mobile"),
          (Z = "Windows Phone 8.x"),
          R.unshift("desktop mode"),
          U || (U = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
        : "IE" != W &&
          "Trident" == V &&
          (A = /\brv:([\d.]+)/.exec(a)) &&
          (W && R.push("identifying as " + W + (U ? " " + U : "")),
          (W = "IE"),
          (U = A[1])),
      T)
    ) {
      if (g(v, "global")) {
        if (
          (J &&
            ((A = J.lang.System),
            (Q = A.getProperty("os.arch")),
            (Z =
              Z ||
              A.getProperty("os.name") + " " + A.getProperty("os.version"))),
          C && g(v, "system") && (A = [v.system])[0])
        ) {
          Z || (Z = A[0].os || null);
          try {
            (A[1] = v.require("ringo/engine").version),
              (U = A[1].join(".")),
              (W = "RingoJS");
          } catch (a) {
            A[0].global.system == v.system && (W = "Narwhal");
          }
        } else {
          "object" == typeof v.process && (A = v.process)
            ? ((W = "Node.js"),
              (Q = A.arch),
              (Z = A.platform),
              (U = /[\d.]+/.exec(A.version)[0]))
            : K && (W = "Rhino");
        }
      } else {
        f((A = v.runtime)) == F
          ? ((W = "Adobe AIR"), (Z = A.flash.system.Capabilities.os))
          : f((A = v.phantom)) == I
          ? ((W = "PhantomJS"),
            (U =
              (A = A.version || null) &&
              A.major + "." + A.minor + "." + A.patch))
          : "number" == typeof N.documentMode &&
            (A = /\bTrident\/(\d+)/i.exec(a)) &&
            ((U = [U, N.documentMode]),
            (A = +A[1] + 4) != U[1] &&
              (R.push("IE " + U[1] + " mode"), V && (V[1] = ""), (U[1] = A)),
            (U = "IE" == W ? String(U[1].toFixed(1)) : U[0]));
      }
      Z = Z && d(Z);
    }
    U &&
      (A =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(U) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (T && y.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((S = /b/i.test(A) ? "beta" : "alpha"),
      (U =
        U.replace(RegExp(A + "\\+?$"), "") +
        ("beta" == S ? M : L) +
        (/\d+\+?/.exec(A) || ""))),
      "Fennec" == W || ("Firefox" == W && /\b(?:Android|Firefox OS)\b/.test(Z))
        ? (W = "Firefox Mobile")
        : "Maxthon" == W && U
        ? (U = U.replace(/\.[\d.]+/, ".x"))
        : /\bXbox\b/i.test(X)
        ? ((Z = null),
          "Xbox 360" == X && /\bIEMobile\b/.test(a) && R.unshift("mobile mode"))
        : (!/^(?:Chrome|IE|Opera)$/.test(W) &&
            (!W || X || /Browser|Mobi/.test(W))) ||
          ("Windows CE" != Z && !/Mobi/i.test(a))
        ? "IE" == W && T && null === v.external
          ? R.unshift("platform preview")
          : (/\bBlackBerry\b/.test(X) || /\bBB10\b/.test(a)) &&
            (A =
              (RegExp(X.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
                0)[1] || U)
          ? ((A = [A, /BB10/.test(a)]),
            (Z =
              (A[1] ? ((X = null), (Y = "BlackBerry")) : "Device Software") +
              " " +
              A[0]),
            (U = null))
          : this != e &&
            "Wii" != X &&
            ((T && O) ||
              (/Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(Z)) ||
              ("IE" == W &&
                ((Z && !/^Win/.test(Z) && U > 5.5) ||
                  (/\bWindows XP\b/.test(Z) && U > 8) ||
                  (8 == U && !/\bTrident\b/.test(a))))) &&
            !s.test((A = k.call(e, a.replace(s, "") + ";"))) &&
            A.name &&
            ((A = "ing as " + A.name + ((A = A.version) ? " " + A : "")),
            s.test(W)
              ? (/\bIE\b/.test(A) && "Mac OS" == Z && (Z = null),
                (A = "identify" + A))
              : ((A = "mask" + A),
                (W = P ? d(P.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(A) && (Z = null),
                T || (U = null)),
            (V = ["Presto"]),
            R.push(A))
        : (W += " Mobile"),
      (A = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) &&
        ((A = [parseFloat(A.replace(/\.(\d)$/, ".0$1")), A]),
        "Safari" == W && "+" == A[1].slice(-1)
          ? ((W = "WebKit Nightly"), (S = "alpha"), (U = A[1].slice(0, -1)))
          : (U != A[1] &&
              U != (A[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) ||
            (U = null),
        (A[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1]),
        537.36 == A[0] &&
          537.36 == A[2] &&
          parseFloat(A[1]) >= 28 &&
          "WebKit" == V &&
          (V = ["Blink"]),
        T && (D || A[1])
          ? (V && (V[1] = "like Chrome"),
            (A =
              A[1] ||
              ((A = A[0]),
              A < 530
                ? 1
                : A < 532
                ? 2
                : A < 532.05
                ? 3
                : A < 533
                ? 4
                : A < 534.03
                ? 5
                : A < 534.07
                ? 6
                : A < 534.1
                ? 7
                : A < 534.13
                ? 8
                : A < 534.16
                ? 9
                : A < 534.24
                ? 10
                : A < 534.3
                ? 11
                : A < 535.01
                ? 12
                : A < 535.02
                ? "13+"
                : A < 535.07
                ? 15
                : A < 535.11
                ? 16
                : A < 535.19
                ? 17
                : A < 536.05
                ? 18
                : A < 536.1
                ? 19
                : A < 537.01
                ? 20
                : A < 537.11
                ? "21+"
                : A < 537.13
                ? 23
                : A < 537.18
                ? 24
                : A < 537.24
                ? 25
                : A < 537.36
                ? 26
                : "Blink" != V
                ? "27"
                : "28")))
          : (V && (V[1] = "like Safari"),
            (A = A[0]),
            (A =
              A < 400
                ? 1
                : A < 500
                ? 2
                : A < 526
                ? 3
                : A < 533
                ? 4
                : A < 534
                ? "4+"
                : A < 535
                ? 5
                : A < 537
                ? 6
                : A < 538
                ? 7
                : A < 601
                ? 8
                : "8")),
        V &&
          (V[1] +=
            " " +
            (A += "number" == typeof A ? ".x" : /[.+]/.test(A) ? "" : "+")),
        "Safari" == W && (!U || parseInt(U) > 45) && (U = A)),
      "Opera" == W && (A = /\bzbov|zvav$/.exec(Z))
        ? ((W += " "),
          R.unshift("desktop mode"),
          "zvav" == A ? ((W += "Mini"), (U = null)) : (W += "Mobile"),
          (Z = Z.replace(RegExp(" *" + A + "$"), "")))
        : "Safari" == W &&
          /\bChrome\b/.exec(V && V[1]) &&
          (R.unshift("desktop mode"),
          (W = "Chrome Mobile"),
          (U = null),
          /\bOS X\b/.test(Z) ? ((Y = "Apple"), (Z = "iOS 4.3+")) : (Z = null)),
      U &&
        0 == U.indexOf((A = /[\d.]+$/.exec(Z))) &&
        a.indexOf("/" + A + "-") > -1 &&
        (Z = j(Z.replace(A, ""))),
      V &&
        !/\b(?:Avant|Nook)\b/.test(W) &&
        (/Browser|Lunascape|Maxthon/.test(W) ||
          ("Safari" != W && /^iOS/.test(Z) && /\bSafari\b/.test(V[1])) ||
          (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(
            W
          ) &&
            V[1])) &&
        (A = V[V.length - 1]) &&
        R.push(A),
      R.length && (R = ["(" + R.join("; ") + ")"]),
      Y && X && X.indexOf(Y) < 0 && R.push("on " + Y),
      X && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + X),
      Z &&
        ((A = / ([\d.+]+)$/.exec(Z) || (B = /^[a-z]+ ([\d.+]+) \//i.exec(Z))),
        (Z = {
          architecture: 32,
          family: A && !B ? Z.replace(A[0], "") : Z,
          version: A ? A[1] : null,
          toString: function () {
            var a = this.version;
            return (
              this.family +
              (a && !B ? " " + a : "") +
              (64 == this.architecture ? " 64-bit" : "")
            );
          },
        })),
      (A = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Q)) &&
        !/\bi686\b/i.test(Q) &&
        (Z &&
          ((Z.architecture = 64),
          (Z.family = Z.family.replace(RegExp(" *" + A), ""))),
        W &&
          (/\bWOW64\b/i.test(a) ||
            (T &&
              /\w(?:86|32)$/.test(y.cpuClass || y.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          R.unshift("32-bit")),
      a || (a = null);
    var $ = {};
    return (
      ($.description = a),
      ($.layout = V && V[0]),
      ($.manufacturer = Y),
      ($.name = W),
      ($.prerelease = S),
      ($.product = X),
      ($.ua = a),
      ($.version = W && U),
      ($.os = Z || {
        architecture: null,
        family: null,
        version: null,
        toString: function () {
          return "null";
        },
      }),
      ($.parse = k),
      ($.toString = u),
      $.version && R.unshift(U),
      $.name && R.unshift(W),
      Z &&
        W &&
        (Z != String(Z).split(" ")[0] || (Z != W.split(" ")[0] && !X)) &&
        R.push(X ? "(" + Z + ")" : "on " + Z),
      R.length && ($.description = R.join(" ")),
      $
    );
  }
  var l = { function: !0, object: !0 },
    m = (l[typeof window] && window) || this,
    n = m,
    o = l[typeof exports] && exports,
    p = l[typeof module] && module && !module.nodeType && module,
    q = o && p && "object" == typeof global && global;
  !q || (q.global !== q && q.window !== q && q.self !== q) || (m = q);
  var r = Math.pow(2, 53) - 1,
    s = /\bOpera/,
    t = this,
    u = Object.prototype,
    v = u.hasOwnProperty,
    w = u.toString;
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? define(function () {
        return k();
      })
    : o && p
    ? e(k(), function (a, b) {
        o[b] = a;
      })
    : (m.platform = k());
}.call(this));
