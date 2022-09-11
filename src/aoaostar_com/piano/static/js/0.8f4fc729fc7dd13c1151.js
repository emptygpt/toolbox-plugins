webpackJsonp([0], {
    "+MLA": function (t, e, i) {
        var n = i("EqjI"), o = i("06OY").onFreeze;
        i("uqUo")("freeze", function (t) {
            return function (e) {
                return t && n(e) ? t(o(e)) : e
            }
        })
    }, "+OXj": function (t, e, i) {
        "use strict";
        var n = i("pFYg"), o = i.n(n), a = i("VSxz"), r = i("2uFj");
        e.a = {
            name: "AutoPlayScoreList", data: function () {
                return {ScoreNum: r.b, ScoreXml: r.c, ScoreMidi: r.d, playingItem: {name: ""}, currentView: "LIST"}
            }, mounted: function () {
                var t = this;
                a.a.$on(r.e.MUSIC_END, function () {
                    setTimeout(function () {
                        t.stopMusicPlayer()
                    }, 2e3)
                })
            }, methods: {
                clickScoreItem: function (t, e) {
                    t && t.name && t != this.playingItem && (this.playingItem && this.stopMusicPlayer(this.playingItem), t.playing = !0, this.playingItem = t, "numscore" === e ? a.a.$emit(r.e.AUTO_PLAY_NUM_SCORE, t.name) : "midi" === e ? (a.a.$emit(r.e.SHOW_GLOBAL_LOADING), a.a.$emit(r.e.AUTO_PLAY_MIDI, t.url)) : "musicxml" === e && (a.a.$emit(r.e.SHOW_GLOBAL_LOADING), $.ajax({
                        type: "GET",
                        url: t.url || "",
                        success: function (t) {
                            t && t && "object" == (void 0 === t ? "undefined" : o()(t)) && setTimeout(function () {
                                a.a.$emit(r.e.HIDE_GLOBAL_LOADING), a.a.$emit(r.e.AUTO_PLAY_XML_SCORE, t)
                            }, 200)
                        },
                        fail: function () {
                            alert("加载乐谱出错，请检查网络")
                        }
                    })))
                }, stopMusicPlayer: function (t) {
                    t = t || this.playingItem, t.playing = !1, this.currentView = "LIST", a.a.$emit(r.e.STOP_AUTO_PLAY, t), this.playingItem = {
                        name: "",
                        url: ""
                    }
                }
            }
        }
    }, "+ZRt": function (t, e, i) {
        "use strict";

        function n(t) {
            i("nql0")
        }

        var o = i("XYsL"), a = i("dW9l"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, "+tPU": function (t, e, i) {
        i("xGkn");
        for (var n = i("7KvD"), o = i("hJx8"), a = i("/bQp"), r = i("dSzd")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
            var u = s[l], c = n[u], f = c && c.prototype;
            f && !f[r] && o(f, r, u), a[u] = a.Array
        }
    }, "//Fk": function (t, e, i) {
        t.exports = {default: i("U5ju"), __esModule: !0}
    }, "//Im": function (t, e, i) {
        "use strict";
        i.d(e, "b", function () {
            return o
        });
        var n = STATIC_PATH + "/notes/";
        e.a = [{id: 1, name: "C2", keyCode: "49", key: "1", url: n + "a49.mp3", type: "white"}, {
            id: 2,
            name: "D2",
            keyCode: "50",
            key: "2",
            url: n + "a50.mp3",
            type: "white"
        }, {id: 3, name: "E2", keyCode: "51", key: "3", url: n + "a51.mp3", type: "white"}, {
            id: 4,
            name: "F2",
            keyCode: "52",
            key: "4",
            url: n + "a52.mp3",
            type: "white"
        }, {id: 5, name: "G2", keyCode: "53", key: "5", url: n + "a53.mp3", type: "white"}, {
            id: 6,
            name: "A2",
            keyCode: "54",
            key: "6",
            url: n + "a54.mp3",
            type: "white"
        }, {id: 7, name: "B2", keyCode: "55", key: "7", url: n + "a55.mp3", type: "white"}, {
            id: 8,
            name: "C3",
            keyCode: "56",
            key: "8",
            url: n + "a56.mp3",
            type: "white"
        }, {id: 9, name: "D3", keyCode: "57", key: "9", url: n + "a57.mp3", type: "white"}, {
            id: 10,
            name: "E3",
            keyCode: "48",
            key: "0",
            url: n + "a48.mp3",
            type: "white"
        }, {id: 26, name: "F3", keyCode: "81", key: "Q", url: n + "a81.mp3", type: "white"}, {
            id: 32,
            name: "G3",
            keyCode: "87",
            key: "W",
            url: n + "a87.mp3",
            type: "white"
        }, {id: 14, name: "A3", keyCode: "69", key: "E", url: n + "a69.mp3", type: "white"}, {
            id: 27,
            name: "B3",
            keyCode: "82",
            key: "R",
            url: n + "a82.mp3",
            type: "white"
        }, {id: 29, name: "C4", keyCode: "84", key: "T", url: n + "a84.mp3", type: "white"}, {
            id: 34,
            name: "D4",
            keyCode: "89",
            key: "Y",
            url: n + "a89.mp3",
            type: "white"
        }, {id: 30, name: "E4", keyCode: "85", key: "U", url: n + "a85.mp3", type: "white"}, {
            id: 18,
            name: "F4",
            keyCode: "73",
            key: "I",
            url: n + "a73.mp3",
            type: "white"
        }, {id: 24, name: "G4", keyCode: "79", key: "O", url: n + "a79.mp3", type: "white"}, {
            id: 25,
            name: "A4",
            keyCode: "80",
            key: "P",
            url: n + "a80.mp3",
            type: "white"
        }, {id: 10, name: "B4", keyCode: "65", key: "A", url: n + "a65.mp3", type: "white"}, {
            id: 28,
            name: "C5",
            keyCode: "83",
            key: "S",
            url: n + "a83.mp3",
            type: "white"
        }, {id: 13, name: "D5", keyCode: "68", key: "D", url: n + "a68.mp3", type: "white"}, {
            id: 15,
            name: "E5",
            keyCode: "70",
            key: "F",
            url: n + "a70.mp3",
            type: "white"
        }, {id: 16, name: "F5", keyCode: "71", key: "G", url: n + "a71.mp3", type: "white"}, {
            id: 17,
            name: "G5",
            keyCode: "72",
            key: "H",
            url: n + "a72.mp3",
            type: "white"
        }, {id: 19, name: "A5", keyCode: "74", key: "J", url: n + "a74.mp3", type: "white"}, {
            id: 20,
            name: "B5",
            keyCode: "75",
            key: "K",
            url: n + "a75.mp3",
            type: "white"
        }, {id: 21, name: "C6", keyCode: "76", key: "L", url: n + "a76.mp3", type: "white"}, {
            id: 35,
            name: "D6",
            keyCode: "90",
            key: "Z",
            url: n + "a90.mp3",
            type: "white"
        }, {id: 33, name: "E6", keyCode: "88", key: "X", url: n + "a88.mp3", type: "white"}, {
            id: 12,
            name: "F6",
            keyCode: "67",
            key: "C",
            url: n + "a67.mp3",
            type: "white"
        }, {id: 31, name: "G6", keyCode: "86", key: "V", url: n + "a86.mp3", type: "white"}, {
            id: 11,
            name: "A6",
            keyCode: "66",
            key: "B",
            url: n + "a66.mp3",
            type: "white"
        }, {id: 23, name: "B6", keyCode: "78", key: "N", url: n + "a78.mp3", type: "white"}, {
            id: 22,
            name: "C7",
            keyCode: "77",
            key: "M",
            url: n + "a77.mp3",
            type: "white"
        }, {id: 36, name: "C#2", keyCode: "b49", key: "⇧<br>+<br>1", url: n + "b49.mp3", type: "black"}, {
            id: 37,
            name: "D#2",
            keyCode: "b50",
            key: "⇧<br>+<br>2",
            url: n + "b50.mp3",
            type: "black"
        }, {id: 38, name: "F#2", keyCode: "b52", key: "⇧<br>+<br>4", url: n + "b52.mp3", type: "black"}, {
            id: 39,
            name: "G#2",
            keyCode: "b53",
            key: "⇧<br>+<br>5",
            url: n + "b53.mp3",
            type: "black"
        }, {id: 40, name: "A#2", keyCode: "b54", key: "⇧<br>+<br>6", url: n + "b54.mp3", type: "black"}, {
            id: 41,
            name: "C#3",
            keyCode: "b56",
            key: "⇧<br>+<br>8",
            url: n + "b56.mp3",
            type: "black"
        }, {id: 42, name: "D#3", keyCode: "b57", key: "⇧<br>+<br>9", url: n + "b57.mp3", type: "black"}, {
            id: 43,
            name: "F#3",
            keyCode: "b81",
            key: "⇧<br>+<br>Q",
            url: n + "b81.mp3",
            type: "black"
        }, {id: 44, name: "G#3", keyCode: "b87", key: "⇧<br>+<br>W", url: n + "b87.mp3", type: "black"}, {
            id: 45,
            name: "A#3",
            keyCode: "b69",
            key: "⇧<br>+<br>E",
            url: n + "b69.mp3",
            type: "black"
        }, {id: 46, name: "C#4", keyCode: "b84", key: "⇧<br>+<br>T", url: n + "b84.mp3", type: "black"}, {
            id: 47,
            name: "D#4",
            keyCode: "b89",
            key: "⇧<br>+<br>Y",
            url: n + "b89.mp3",
            type: "black"
        }, {id: 48, name: "F#4", keyCode: "b73", key: "⇧<br>+<br>I", url: n + "b73.mp3", type: "black"}, {
            id: 49,
            name: "G#4",
            keyCode: "b79",
            key: "⇧<br>+<br>O",
            url: n + "b79.mp3",
            type: "black"
        }, {id: 50, name: "A#4", keyCode: "b80", key: "⇧<br>+<br>P", url: n + "b80.mp3", type: "black"}, {
            id: 51,
            name: "C#5",
            keyCode: "b83",
            key: "⇧<br>+<br>S",
            url: n + "b83.mp3",
            type: "black"
        }, {id: 52, name: "D#5", keyCode: "b68", key: "⇧<br>+<br>D", url: n + "b68.mp3", type: "black"}, {
            id: 53,
            name: "F#5",
            keyCode: "b71",
            key: "⇧<br>+<br>G",
            url: n + "b71.mp3",
            type: "black"
        }, {id: 54, name: "G#5", keyCode: "b72", key: "⇧<br>+<br>H", url: n + "b72.mp3", type: "black"}, {
            id: 55,
            name: "A#5",
            keyCode: "b74",
            key: "⇧<br>+<br>J",
            url: n + "b74.mp3",
            type: "black"
        }, {id: 56, name: "C#6", keyCode: "b76", key: "⇧<br>+<br>L", url: n + "b76.mp3", type: "black"}, {
            id: 57,
            name: "D#6",
            keyCode: "b90",
            key: "⇧<br>+<br>Z",
            url: n + "b90.mp3",
            type: "black"
        }, {id: 58, name: "F#6", keyCode: "b67", key: "⇧<br>+<br>C", url: n + "b67.mp3", type: "black"}, {
            id: 59,
            name: "G#6",
            keyCode: "b86",
            key: "⇧<br>+<br>V",
            url: n + "b86.mp3",
            type: "black"
        }, {id: 60, name: "A#6", keyCode: "b66", key: "⇧<br>+<br>B", url: n + "b66.mp3", type: "black"}];
        var o = [{name: "C2", file: "a49.mp3"}, {name: "D2", file: "a50.mp3"}, {
            name: "E2",
            file: "a51.mp3"
        }, {name: "F2", file: "a52.mp3"}, {name: "G2", file: "a53.mp3"}, {name: "A2", file: "a54.mp3"}, {
            name: "B2",
            file: "a55.mp3"
        }, {name: "C3", file: "a56.mp3"}, {name: "D3", file: "a57.mp3"}, {name: "E3", file: "a48.mp3"}, {
            name: "F3",
            file: "a81.mp3"
        }, {name: "G3", file: "a87.mp3"}, {name: "A3", file: "a69.mp3"}, {name: "B3", file: "a82.mp3"}, {
            name: "C4",
            file: "a84.mp3"
        }, {name: "D4", file: "a89.mp3"}, {name: "E4", file: "a85.mp3"}, {name: "F4", file: "a73.mp3"}, {
            name: "G4",
            file: "a79.mp3"
        }, {name: "A4", file: "a80.mp3"}, {name: "B4", file: "a65.mp3"}, {name: "C5", file: "a83.mp3"}, {
            name: "D5",
            file: "a68.mp3"
        }, {name: "E5", file: "a70.mp3"}, {name: "F5", file: "a71.mp3"}, {name: "G5", file: "a72.mp3"}, {
            name: "A5",
            file: "a74.mp3"
        }, {name: "B5", file: "a75.mp3"}, {name: "C6", file: "a76.mp3"}, {name: "D6", file: "a90.mp3"}, {
            name: "E6",
            file: "a88.mp3"
        }, {name: "F6", file: "a67.mp3"}, {name: "G6", file: "a86.mp3"}, {name: "A6", file: "a66.mp3"}, {
            name: "B6",
            file: "a78.mp3"
        }, {name: "C7", file: "a77.mp3"}, {name: "C#2", file: "b49.mp3"}, {name: "D#2", file: "b50.mp3"}, {
            name: "F#2",
            file: "b52.mp3"
        }, {name: "G#2", file: "b53.mp3"}, {name: "A#2", file: "b54.mp3"}, {name: "C#3", file: "b56.mp3"}, {
            name: "D#3",
            file: "b57.mp3"
        }, {name: "F#3", file: "b81.mp3"}, {name: "G#3", file: "b87.mp3"}, {name: "A#3", file: "b69.mp3"}, {
            name: "C#4",
            file: "b84.mp3"
        }, {name: "D#4", file: "b89.mp3"}, {name: "F#4", file: "b73.mp3"}, {name: "G#4", file: "b79.mp3"}, {
            name: "A#4",
            file: "b80.mp3"
        }, {name: "C#5", file: "b83.mp3"}, {name: "D#5", file: "b68.mp3"}, {name: "F#5", file: "b71.mp3"}, {
            name: "G#5",
            file: "b72.mp3"
        }, {name: "A#5", file: "b74.mp3"}, {name: "C#6", file: "b76.mp3"}, {name: "D#6", file: "b90.mp3"}, {
            name: "F#6",
            file: "b67.mp3"
        }, {name: "G#6", file: "b86.mp3"}, {name: "A#6", file: "b66.mp3"}]
    }, "/U6I": function (t, e, i) {
        "use strict";
        var n = i("VSxz"), o = i("0xDb"), a = i("2uFj"), r = i("nVdG");
        i.n(r);
        e.a = {
            data: function () {
                return {currentMidiData: null, midiNotes: [], midiStop: !1}
            }, computed: {
                shouldShowNoteRain: function () {
                    return !window.isMobile
                }
            }, mounted: function () {
                var t = this;
                n.a.$on(a.e.PLAY_MIDI_NOTE, function (e) {
                    setTimeout(function () {
                        i.i(o.a)(e.name) && (t.playNote(e.name, "1n", e.velocity), $('[data-name="' + e.name + '"]').addClass("auto-key-active"), setTimeout(function () {
                            $('[data-name="' + e.name + '"]').removeClass("auto-key-active")
                        }, 900 * e.duration))
                    }, 0)
                })
            }, methods: {
                loadMidiAndPlay: function (t) {
                    var e = this;
                    r.Midi.fromUrl(t).then(function (t) {
                        e.currentMidiData = t, e.midiOffset = 0, e.playMidi()
                    })
                }, playMidi: function () {
                    var t = this;
                    this.currentMidiData && (console.info("current midi data", this.currentMidiData), this.midiStop = !1, this.midiNotes = [], this.currentMidiData.tracks.forEach(function (e, i) {
                        console.info("current track instrument", i, e.instrument.family, e.instrument.name), t.midiNotes = t.midiNotes.concat(e.notes)
                    }), this.startTime = +new Date, this.playLoop(), console.log(this.midiNotes.length), n.a.$emit(a.e.HIDE_GLOBAL_LOADING))
                }, playLoop: function () {
                    var t = this;
                    if (!this.midiStop) {
                        var e = this.midiNotes.filter(function (t) {
                            return !t.played
                        });
                        if (e.length <= 0) return void n.a.$emit(a.e.MUSIC_END);
                        var i = +new Date, o = i - this.startTime;
                        e.forEach(function (t) {
                            o >= 1e3 * t.time && !t.played && (t.played = !0, n.a.$emit(a.e.PLAY_MIDI_NOTE, t))
                        }), setTimeout(function () {
                            t.playLoop()
                        }, 30)
                    }
                }, stopMidiPlay: function () {
                    this.midiStop = !0, this.currentMidiData = null, this.midiNotes = []
                }
            }
        }
    }, "/bQp": function (t, e) {
        t.exports = {}
    }, "/n6Q": function (t, e, i) {
        i("zQR9"), i("+tPU"), t.exports = i("Kh4W").f("iterator")
    }, "06OY": function (t, e, i) {
        var n = i("3Eo+")("meta"), o = i("EqjI"), a = i("D2L2"), r = i("evD5").f, s = 0,
            l = Object.isExtensible || function () {
                return !0
            }, u = !i("S82l")(function () {
                return l(Object.preventExtensions({}))
            }), c = function (t) {
                r(t, n, {value: {i: "O" + ++s, w: {}}})
            }, f = function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!a(t, n)) {
                    if (!l(t)) return "F";
                    if (!e) return "E";
                    c(t)
                }
                return t[n].i
            }, d = function (t, e) {
                if (!a(t, n)) {
                    if (!l(t)) return !0;
                    if (!e) return !1;
                    c(t)
                }
                return t[n].w
            }, h = function (t) {
                return u && p.NEED && l(t) && !a(t, n) && c(t), t
            }, p = t.exports = {KEY: n, NEED: !1, fastKey: f, getWeak: d, onFreeze: h}
    }, "0Rnz": function (t, e, i) {
        "use strict";

        function n(t) {
            i("3jXb")
        }

        var o = i("Y6yI"), a = i("erkj"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, "0xDb": function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return o
        });
        var n = i("2uFj"), o = function (t) {
            return n.g.some(function (e) {
                return e.name == t
            })
        }
    }, "1H6C": function (t, e, i) {
        var n = function () {
                return this
            }() || Function("return this")(),
            o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
            a = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, t.exports = i("HhN8"), o) n.regeneratorRuntime = a; else try {
            delete n.regeneratorRuntime
        } catch (t) {
            n.regeneratorRuntime = void 0
        }
    }, "1kS7": function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, "2KxR": function (t, e) {
        t.exports = function (t, e, i, n) {
            if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
            return t
        }
    }, "2uFj": function (t, e, i) {
        "use strict";
        i.d(e, "g", function () {
            return d
        }), i.d(e, "h", function () {
            return h
        }), i.d(e, "i", function () {
            return p
        }), i.d(e, "f", function () {
            return m
        }), i.d(e, "b", function () {
            return y
        }), i.d(e, "c", function () {
            return g
        }), i.d(e, "d", function () {
            return _
        }), i.d(e, "a", function () {
            return v
        }), i.d(e, "e", function () {
            return b
        });
        var n = i("//Im"), o = i("PT5K"), a = i("b56o"), r = i("aOM9"), s = i("FwAT"), l = i("ja8J"), u = i("3KBG"),
            c = i("FNIq"), f = i("bqBI"), d = n.a, h = o.a, p = a.a, m = (r.a, s.a), y = l.a, g = u.a, _ = c.a, v = f.a,
            b = {
                SHOW_GLOBAL_LOADING: "SHOW_GLOBAL_LOADING",
                HIDE_GLOBAL_LOADING: "HIDE_GLOBAL_LOADING",
                CHANGE_WALLPAPER: "CHANGE_WALLPAPER",
                INSTRUMENT_LOADED: "INSTRUMENT_LOADED",
                AUTO_PLAY_NUM_SCORE: "AUTO_PLAY_NUM_SCORE",
                AUTO_PLAY_XML_SCORE: "AUTO_PLAY_XML_SCORE",
                AUTO_PLAY_MIDI: "AUTO_PLAY_MIDI",
                START_NOTE_RAIN: "START_NOTE_RAIN",
                PLAY_MIDI_NOTE: "PLAY_MIDI_NOTE",
                STOP_AUTO_PLAY: "STOP_AUTO_PLAY",
                MUSIC_END: "MUSIC_END"
            }
    }, "3Eo+": function (t, e) {
        var i = 0, n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    }, "3KBG": function (t, e, i) {
        "use strict";
        var n = [{name: "成都", url: STATIC_PATH + "/xmlscore/成都.json", degree: 5}, {
            name: "千与千寻 - Always With Me",
            url: STATIC_PATH + "/xmlscore/千与千寻.json",
            degree: 4
        }, {name: "后来", url: STATIC_PATH + "/xmlscore/后来.json", degree: 3}, {
            name: "告白气球",
            url: STATIC_PATH + "/xmlscore/告白气球.json",
            degree: 2
        }, {name: "蒲公英的约定", url: STATIC_PATH + "/xmlscore/蒲公英的约定.json", degree: 5}, {
            name: "时间煮雨",
            url: STATIC_PATH + "/xmlscore/时间煮雨.json",
            degree: 4
        }, {name: "下一个天亮", url: STATIC_PATH + "/xmlscore/下一个天亮.json", degree: 2}, {
            name: "海角七号 1945",
            url: STATIC_PATH + "/xmlscore/海角七号.json",
            degree: 3
        }];
        n.forEach(function (t) {
            t.playing = !1
        }), e.a = n
    }, "3YeD": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "LyricComponent",
                staticClass: "component-random-lyric"
            }, [i("div", {
                staticClass: "lyric",
                attrs: {id: "randomLyric"},
                on: {click: t.searchLyric}
            }, [t._v(t._s(t.randomLyric))])])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, "3fs2": function (t, e, i) {
        var n = i("RY/4"), o = i("dSzd")("iterator"), a = i("/bQp");
        t.exports = i("FeBl").getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || a[n(t)]
        }
    }, "3jXb": function (t, e, i) {
        var n = i("IISb");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("a301e842", n, !0, {})
    }, "3rLr": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("adPX"), o = new WeakMap, a = function () {
            function t(t, e) {
                if (this.number = 0, o.set(this, e), this.number = 0, t) {
                    var i = t.find(function (t) {
                        return "programChange" === t.type
                    });
                    i && (this.number = i.programNumber)
                }
            }

            return Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return this.percussion ? n.DrumKitByPatchID[this.number] : n.instrumentByPatchID[this.number]
                }, set: function (t) {
                    var e = n.instrumentByPatchID.indexOf(t);
                    -1 !== e && (this.number = e)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "family", {
                get: function () {
                    return this.percussion ? "drums" : n.InstrumentFamilyByID[Math.floor(this.number / 8)]
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "percussion", {
                get: function () {
                    return 9 === o.get(this).channel
                }, enumerable: !0, configurable: !0
            }), t.prototype.toJSON = function () {
                return {family: this.family, name: this.name, number: this.number}
            }, t.prototype.fromJSON = function (t) {
                this.number = t.number
            }, t
        }();
        e.Instrument = a
    }, "4mcu": function (t, e) {
        t.exports = function () {
        }
    }, "52gC": function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, "5JHN": function (t, e, i) {
        "use strict";

        function n(t) {
            i("uHpY")
        }

        var o = i("CRtL"), a = i("3YeD"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, "5QVw": function (t, e, i) {
        t.exports = {default: i("BwfY"), __esModule: !0}
    }, "7UMu": function (t, e, i) {
        var n = i("R9M2");
        t.exports = Array.isArray || function (t) {
            return "Array" == n(t)
        }
    }, "82Mu": function (t, e, i) {
        var n = i("7KvD"), o = i("L42u").set, a = n.MutationObserver || n.WebKitMutationObserver, r = n.process,
            s = n.Promise, l = "process" == i("R9M2")(r);
        t.exports = function () {
            var t, e, i, u = function () {
                var n, o;
                for (l && (n = r.domain) && n.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (n) {
                        throw t ? i() : e = void 0, n
                    }
                }
                e = void 0, n && n.enter()
            };
            if (l) i = function () {
                r.nextTick(u)
            }; else if (!a || n.navigator && n.navigator.standalone) if (s && s.resolve) {
                var c = s.resolve(void 0);
                i = function () {
                    c.then(u)
                }
            } else i = function () {
                o.call(n, u)
            }; else {
                var f = !0, d = document.createTextNode("");
                new a(u).observe(d, {characterData: !0}), i = function () {
                    d.data = f = !f
                }
            }
            return function (n) {
                var o = {fn: n, next: void 0};
                e && (e.next = o), t || (t = o, i()), e = o
            }
        }
    }, "880/": function (t, e, i) {
        t.exports = i("hJx8")
    }, "8CHm": function (t, e, i) {
        "use strict";

        function n(t, e, i) {
            void 0 === i && (i = "ticks");
            var n = 0, o = t.length, a = o;
            if (o > 0 && t[o - 1][i] <= e) return o - 1;
            for (; n < a;) {
                var r = Math.floor(n + (a - n) / 2), s = t[r], l = t[r + 1];
                if (s[i] === e) {
                    for (var u = r; u < t.length; u++) {
                        t[u][i] === e && (r = u)
                    }
                    return r
                }
                if (s[i] < e && l[i] > e) return r;
                s[i] > e ? a = r : s[i] < e && (n = r + 1)
            }
            return -1
        }

        function o(t, e, i) {
            if (void 0 === i && (i = "ticks"), t.length) {
                var o = n(t, e[i], i);
                t.splice(o + 1, 0, e)
            } else t.push(e)
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.search = n, e.insert = o
    }, "94VQ": function (t, e, i) {
        "use strict";
        var n = i("Yobk"), o = i("X8DO"), a = i("e6n0"), r = {};
        i("hJx8")(r, i("dSzd")("iterator"), function () {
            return this
        }), t.exports = function (t, e, i) {
            t.prototype = n(r, {next: o(1, i)}), a(t, e + " Iterator")
        }
    }, "9LSK": function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), a = i("//Fk"), r = i.n(a), s = i("exGp"), l = i.n(s), u = i("VSxz");
        e.a = {
            data: function () {
                return {lastNote: {noteName: ""}, xmlstop: !1, xmlPlayQueue: []}
            }, mounted: function () {
                var t = this;
                u.a.$on("xml-music-stop", function () {
                    t.xmlPlayQueue && t.xmlPlayQueue.length > 0 && (t.xmlPlayQueue.shift(), t.xmlPlayQueue[0] && t.playXMLScore(t.xmlPlayQueue[0]))
                }), setTimeout(function () {
                }, 1e3)
            }, methods: {
                addToPlayQueue: function (t) {
                    this.xmlPlayQueue.length <= 0 && this.playXMLScore(t), this.xmlPlayQueue.push(t)
                }, initXMLPlayState: function () {
                    this.xmlstop = !1, this.measures = [], this.measures_len = 0, this.lastNote = {noteName: ""}
                }, pauseXMLPlay: function () {
                    this.xmlstop = !0, $(".piano-key").removeClass("auto-key-active")
                }, playXMLScore: function (t) {
                    var e = this;
                    return l()(o.a.mark(function i() {
                        var n, a, s, l, c, f, d, h;
                        return o.a.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    e.initXMLPlayState(), e.measures = t.measures, e.measures_len = e.measures.length, n = 0;
                                case 4:
                                    if (!(n < e.measures_len)) {
                                        i.next = 19;
                                        break
                                    }
                                    a = e.measures[n], s = [];
                                    for (l in a) {
                                        c = a[l];
                                        for (f in c) d = c[f] || [], s.push(e.playNotesArr(d))
                                    }
                                    return h = r.a.all(s), i.next = 11, h;
                                case 11:
                                    if (!e.xmlstop) {
                                        i.next = 15;
                                        break
                                    }
                                    return h = null, u.a.$emit("xml-music-stop"), i.abrupt("break", 19);
                                case 15:
                                    n == e.measures_len - 1 && u.a.$emit("xml-music-stop");
                                case 16:
                                    n++, i.next = 4;
                                    break;
                                case 19:
                                case"end":
                                    return i.stop()
                            }
                        }, i, e)
                    }))()
                }, playNotesArr: function (t) {
                    var e = this;
                    return new r.a(function (i, n) {
                        function o() {
                            if (e.xmlstop && (clearInterval(u), u = null, i()), new Date - r >= s) {
                                l.forEach(function (t) {
                                    t && t.noteName && $('[data-name="' + t.noteName + '"]').removeClass("auto-key-active")
                                }), l = [];
                                var n = t[a];
                                if (!n || !n.duration) return;
                                var o = n.duration ? n.duration : 0;
                                if (s += o, n.rest) ; else if ("start" != n.tie && n.noteName == e.lastNote.noteName) ; else if (n && n.noteName) {
                                    for (var c = 0; c < e.Notes.length; c++) {
                                        var f = e.Notes[c];
                                        if (n.noteName == f.name) {
                                            e.playNote(n.noteName), $('[data-name="' + n.noteName + '"]').addClass("auto-key-active"), l.push(n), e.lastNote = n;
                                            break
                                        }
                                    }
                                    for (; t[a + 1] && t[a + 1].chord;) {
                                        var d = t[a + 1];
                                        e.playNote(d.noteName), $('[data-name="' + d.noteName + '"]').addClass("auto-key-active"), l.push(d), a++
                                    }
                                }
                                if (++a >= t.length) {
                                    clearInterval(u), u = null;
                                    var h = Math.floor(t[a - 1].duration || 0);
                                    setTimeout(function () {
                                        i(), l.forEach(function (t) {
                                            t && t.noteName && $('[data-name="' + t.noteName + '"]').removeClass("auto-key-active")
                                        })
                                    }, h)
                                }
                            }
                        }

                        var a = 0, r = new Date, s = 0, l = [], u = setInterval(function () {
                            o()
                        }, 17)
                    })
                }
            }
        }
    }, "9OEs": function (t, e, i) {
        "use strict";
        var n = i("2uFj");
        e.a = {
            data: function () {
                return {
                    ScoreNum: n.b,
                    playTimers: [],
                    StepMap: {
                        C: {
                            "1>>": "C2",
                            "2>>": "D2",
                            "3>>": "E2",
                            "4>>": "F2",
                            "5>>": "G2",
                            "6>>": "A2",
                            "7>>": "B2",
                            "1>": "C3",
                            "2>": "D3",
                            "3>": "E3",
                            "4>": "F3",
                            "5>": "G3",
                            "6>": "A3",
                            "7>": "B3",
                            1: "C4",
                            2: "D4",
                            3: "E4",
                            4: "F4",
                            5: "G4",
                            6: "A4",
                            7: "B4",
                            "1<": "C5",
                            "2<": "D5",
                            "3<": "E5",
                            "4<": "F5",
                            "5<": "G5",
                            "6<": "A5",
                            "7<": "B5",
                            "1<<": "C6",
                            "2<<": "D6",
                            "3<<": "E56",
                            "4<<": "F6",
                            "5<<": "G6",
                            "6<<": "A6",
                            "7<<": "B6"
                        },
                        D: {
                            "1>>": "D2",
                            "2>>": "E2",
                            "3>>": "F#2",
                            "4>>": "G2",
                            "5>>": "A2",
                            "6>>": "B2",
                            "7>>": "C#3",
                            "1>": "D3",
                            "2>": "E3",
                            "3>": "F#3",
                            "4>": "G3",
                            "5>": "A3",
                            "6>": "B3",
                            "7>": "C#4",
                            1: "D4",
                            2: "E4",
                            3: "F#4",
                            4: "G4",
                            5: "A4",
                            6: "B4",
                            7: "C#5",
                            "1<": "D5",
                            "2<": "E5",
                            "3<": "F#5",
                            "4<": "G5",
                            "5<": "A5",
                            "6<": "B5",
                            "7<": "C#6",
                            "1<<": "D6",
                            "2<<": "E6",
                            "3<<": "F#6",
                            "4<<": "G6",
                            "5<<": "A6",
                            "6<<": "B6",
                            "7<<": "C#7"
                        }
                    }
                }
            }, methods: {
                mapNum2NoteName: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = e.match(/[#b]*[0-7][\<\>]*/g)[0];
                    if (i && t && this.StepMap[t]) {
                        var n = this.StepMap[t];
                        if (n && n[i]) {
                            return n[i]
                        }
                    }
                    return ""
                }, getNoteDuration: function (t, e) {
                    var i = 1;
                    return t.match(/\([0-9.]*\)/g) && (i = t.match(/\([0-9.]*\)/g)[0].replace(/[\)\(]/g, "")), e * +i
                }, autoPlayNumberScore: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C", e = this,
                        i = arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 75;
                    $(".piano-key").removeClass("auto-key-active");
                    var o = 6e4 / n, a = new Date, r = 0, s = 0, l = void 0, u = function () {
                        if (new Date - a > s) {
                            l && $("[data-keyCode=" + l.keyCode + "]").removeClass("auto-key-active");
                            var n = i[r], u = e.mapNum2NoteName(t, n);
                            if (l = e.getNoteByName(u), l && $("[data-keyCode=" + l.keyCode + "]").addClass("auto-key-active"), e.playNote(u), s += e.getNoteDuration(n, o), ++r >= i.length) return setTimeout(function () {
                                $(".piano-key").removeClass("auto-key-active")
                            }, 1e3), void clearInterval(c)
                        }
                    }, c = setInterval(function () {
                        u()
                    }, 20);
                    this.playTimers.push(c)
                }, playScoreByName: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "天空之城", e = void 0;
                    for (var i in this.ScoreNum) {
                        var n = this.ScoreNum[i];
                        if (n.name == t) {
                            e = n;
                            break
                        }
                    }
                    if (e) {
                        this.pauseAutoPlay();
                        var o = e.step, a = e.speed;
                        this.StepMap[o] && (this.autoPlayNumberScore(o, e.mainTrack, a), e.backingTrack && this.autoPlayNumberScore(o, e.backingTrack, a))
                    }
                }, pauseAutoPlay: function () {
                    $(".piano-key").removeClass("auto-key-active"), this.playTimers.forEach(function (t) {
                        clearInterval(t), t = null
                    }), this.playTimers.splice(0)
                }
            }
        }
    }, Achj: function (t, e, i) {
        "use strict";
        var n = i("2uFj");
        e.a = {
            name: "ManualPlayScoreList", data: function () {
                return {scores: n.f, sectionTitle: "快速入门", showItem: {}, listShow: !0}
            }, mounted: function () {
                this.showItem = this.scores[0]
            }, methods: {
                clickScoreItem: function (t) {
                    t && (this.toggleListShow(), this.showItem = t, this.showItem.content = t.content.toUpperCase(), this.sectionTitle = t.name || "快速入门")
                }, toggleListShow: function () {
                    this.listShow = !this.listShow, this.listShow && (this.sectionTitle = "快速入门")
                }
            }
        }
    }, BwfY: function (t, e, i) {
        i("fWfb"), i("M6a0"), i("OYls"), i("QWe/"), t.exports = i("FeBl").Symbol
    }, C1HX: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("8CHm"), o = i("dh+D"), a = i("DgcQ"), r = i("KUTN"), s = i("3rLr"), l = i("DoIZ"), u = new WeakMap,
            c = function () {
                function t(t, e) {
                    var i = this;
                    if (this.name = "", this.notes = [], this.controlChanges = a.createControlChanges(), this.pitchBends = [], u.set(this, e), t) {
                        var n = t.find(function (t) {
                            return "trackName" === t.type
                        });
                        this.name = n ? n.text : ""
                    }
                    if (this.instrument = new s.Instrument(t, this), this.channel = 0, t) {
                        for (var o = t.filter(function (t) {
                            return "noteOn" === t.type
                        }), r = t.filter(function (t) {
                            return "noteOff" === t.type
                        }), l = this; o.length;) !function () {
                            var t = o.shift();
                            l.channel = t.channel;
                            var e = r.findIndex(function (e) {
                                return e.noteNumber === t.noteNumber && e.absoluteTime >= t.absoluteTime
                            });
                            if (-1 !== e) {
                                var i = r.splice(e, 1)[0];
                                l.addNote({
                                    durationTicks: i.absoluteTime - t.absoluteTime,
                                    midi: t.noteNumber,
                                    noteOffVelocity: i.velocity / 127,
                                    ticks: t.absoluteTime,
                                    velocity: t.velocity / 127
                                })
                            }
                        }();
                        t.filter(function (t) {
                            return "controller" === t.type
                        }).forEach(function (t) {
                            i.addCC({number: t.controllerType, ticks: t.absoluteTime, value: t.value / 127})
                        });
                        t.filter(function (t) {
                            return "pitchBend" === t.type
                        }).forEach(function (t) {
                            i.addPitchBend({ticks: t.absoluteTime, value: t.value / Math.pow(2, 13)})
                        });
                        var c = t.find(function (t) {
                            return "endOfTrack" === t.type
                        });
                        this.endOfTrackTicks = void 0 !== c ? c.absoluteTime : void 0
                    }
                }

                return t.prototype.addNote = function (t) {
                    var e = u.get(this), i = new l.Note({midi: 0, ticks: 0, velocity: 1}, {ticks: 0, velocity: 0}, e);
                    return Object.assign(i, t), n.insert(this.notes, i, "ticks"), this
                }, t.prototype.addCC = function (t) {
                    var e = u.get(this), i = new o.ControlChange({controllerType: t.number}, e);
                    return delete t.number, Object.assign(i, t), Array.isArray(this.controlChanges[i.number]) || (this.controlChanges[i.number] = []), n.insert(this.controlChanges[i.number], i, "ticks"), this
                }, t.prototype.addPitchBend = function (t) {
                    var e = u.get(this), i = new r.PitchBend({}, e);
                    return Object.assign(i, t), n.insert(this.pitchBends, i, "ticks"), this
                }, Object.defineProperty(t.prototype, "duration", {
                    get: function () {
                        if (!this.notes.length) return 0;
                        for (var t = this.notes[this.notes.length - 1].time + this.notes[this.notes.length - 1].duration, e = 0; e < this.notes.length - 1; e++) {
                            var i = this.notes[e].time + this.notes[e].duration;
                            t < i && (t = i)
                        }
                        return t
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "durationTicks", {
                    get: function () {
                        if (!this.notes.length) return 0;
                        for (var t = this.notes[this.notes.length - 1].ticks + this.notes[this.notes.length - 1].durationTicks, e = 0; e < this.notes.length - 1; e++) {
                            var i = this.notes[e].ticks + this.notes[e].durationTicks;
                            t < i && (t = i)
                        }
                        return t
                    }, enumerable: !0, configurable: !0
                }), t.prototype.fromJSON = function (t) {
                    var e = this;
                    this.name = t.name, this.channel = t.channel, this.instrument = new s.Instrument(void 0, this), this.instrument.fromJSON(t.instrument), void 0 !== t.endOfTrackTicks && (this.endOfTrackTicks = t.endOfTrackTicks);
                    for (var i in t.controlChanges) t.controlChanges[i] && t.controlChanges[i].forEach(function (t) {
                        e.addCC({number: t.number, ticks: t.ticks, value: t.value})
                    });
                    t.notes.forEach(function (t) {
                        e.addNote({durationTicks: t.durationTicks, midi: t.midi, ticks: t.ticks, velocity: t.velocity})
                    })
                }, t.prototype.toJSON = function () {
                    for (var t = {}, e = 0; e < 127; e++) this.controlChanges.hasOwnProperty(e) && (t[e] = this.controlChanges[e].map(function (t) {
                        return t.toJSON()
                    }));
                    var i = {
                        channel: this.channel, controlChanges: t, pitchBends: this.pitchBends.map(function (t) {
                            return t.toJSON()
                        }), instrument: this.instrument.toJSON(), name: this.name, notes: this.notes.map(function (t) {
                            return t.toJSON()
                        })
                    };
                    return void 0 !== this.endOfTrackTicks && (i.endOfTrackTicks = this.endOfTrackTicks), i
                }, t
            }();
        e.Track = c
    }, CRtL: function (t, e, i) {
        "use strict";
        var n = i("2uFj");
        e.a = {
            name: "RandomLyric", components: {}, mixins: [], props: [], data: function () {
                return {randomLyric: "", randomIndex: 0, lyricTimer: null}
            }, computed: {}, mounted: function () {
                clearInterval(this.lyricTimer), this.lyricTimer = null, this.setRandomLyric()
            }, beforeDestroy: function () {
                clearInterval(this.lyricTimer), this.lyricTimer = null
            }, watch: {}, methods: {
                setRandomLyric: function () {
                    var t = this;
                    if (!this.lyricTimer) {
                        this.randomIndex = Math.floor(Math.random() * n.h.length);
                        var e = function () {
                            $("#randomLyric").hide(), t.randomIndex < n.h.length - 1 ? ++t.randomIndex : t.randomIndex = 0, t.randomLyric = '"' + n.h[t.randomIndex] + '"', $("#randomLyric").fadeIn(1e3)
                        };
                        e(), this.lyricTimer = setInterval(function () {
                            e()
                        }, 7e3)
                    }
                }, searchLyric: function () {
                    var t = "https://music.163.com/#/search/m/?s=" + encodeURIComponent(n.h[this.randomIndex]);
                    window.open(t, "_blank")
                }
            }
        }
    }, CXw9: function (t, e, i) {
        "use strict";
        var n, o, a, r, s = i("O4g8"), l = i("7KvD"), u = i("+ZMJ"), c = i("RY/4"), f = i("kM2E"), d = i("EqjI"),
            h = i("lOnJ"), p = i("2KxR"), m = i("NWt+"), y = i("t8x9"), g = i("L42u").set, _ = i("82Mu")(),
            v = i("qARP"), b = i("dNDb"), S = i("iUbK"), T = i("fJUb"), w = l.TypeError, A = l.process,
            k = A && A.versions, O = k && k.v8 || "", x = l.Promise, P = "process" == c(A), F = function () {
            }, C = o = v.f, D = !!function () {
                try {
                    var t = x.resolve(1), e = (t.constructor = {})[i("dSzd")("species")] = function (t) {
                        t(F, F)
                    };
                    return (P || "function" == typeof PromiseRejectionEvent) && t.then(F) instanceof e && 0 !== O.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), E = function (t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e
            }, U = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var i = t._c;
                    _(function () {
                        for (var n = t._v, o = 1 == t._s, a = 0; i.length > a;) !function (e) {
                            var i, a, r, s = o ? e.ok : e.fail, l = e.resolve, u = e.reject, c = e.domain;
                            try {
                                s ? (o || (2 == t._h && R(t), t._h = 1), !0 === s ? i = n : (c && c.enter(), i = s(n), c && (c.exit(), r = !0)), i === e.promise ? u(w("Promise-chain cycle")) : (a = E(i)) ? a.call(i, l, u) : l(i)) : u(n)
                            } catch (t) {
                                c && !r && c.exit(), u(t)
                            }
                        }(i[a++]);
                        t._c = [], t._n = !1, e && !t._h && I(t)
                    })
                }
            }, I = function (t) {
                g.call(l, function () {
                    var e, i, n, o = t._v, a = M(t);
                    if (a && (e = b(function () {
                        P ? A.emit("unhandledRejection", o, t) : (i = l.onunhandledrejection) ? i({
                            promise: t,
                            reason: o
                        }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", o)
                    }), t._h = P || M(t) ? 2 : 1), t._a = void 0, a && e.e) throw e.v
                })
            }, M = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, R = function (t) {
                g.call(l, function () {
                    var e;
                    P ? A.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({promise: t, reason: t._v})
                })
            }, N = function (t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), U(e, !0))
            }, L = function (t) {
                var e, i = this;
                if (!i._d) {
                    i._d = !0, i = i._w || i;
                    try {
                        if (i === t) throw w("Promise can't be resolved itself");
                        (e = E(t)) ? _(function () {
                            var n = {_w: i, _d: !1};
                            try {
                                e.call(t, u(L, n, 1), u(N, n, 1))
                            } catch (t) {
                                N.call(n, t)
                            }
                        }) : (i._v = t, i._s = 1, U(i, !1))
                    } catch (t) {
                        N.call({_w: i, _d: !1}, t)
                    }
                }
            };
        D || (x = function (t) {
            p(this, x, "Promise", "_h"), h(t), n.call(this);
            try {
                t(u(L, this, 1), u(N, this, 1))
            } catch (t) {
                N.call(this, t)
            }
        }, n = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, n.prototype = i("xH/j")(x.prototype, {
            then: function (t, e) {
                var i = C(y(this, x));
                return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = P ? A.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && U(this, !1), i.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), a = function () {
            var t = new n;
            this.promise = t, this.resolve = u(L, t, 1), this.reject = u(N, t, 1)
        }, v.f = C = function (t) {
            return t === x || t === r ? new a(t) : o(t)
        }), f(f.G + f.W + f.F * !D, {Promise: x}), i("e6n0")(x, "Promise"), i("bRrM")("Promise"), r = i("FeBl").Promise, f(f.S + f.F * !D, "Promise", {
            reject: function (t) {
                var e = C(this);
                return (0, e.reject)(t), e.promise
            }
        }), f(f.S + f.F * (s || !D), "Promise", {
            resolve: function (t) {
                return T(s && this === r ? x : this, t)
            }
        }), f(f.S + f.F * !(D && i("dY0y")(function (t) {
            x.all(t).catch(F)
        })), "Promise", {
            all: function (t) {
                var e = this, i = C(e), n = i.resolve, o = i.reject, a = b(function () {
                    var i = [], a = 0, r = 1;
                    m(t, !1, function (t) {
                        var s = a++, l = !1;
                        i.push(void 0), r++, e.resolve(t).then(function (t) {
                            l || (l = !0, i[s] = t, --r || n(i))
                        }, o)
                    }), --r || n(i)
                });
                return a.e && o(a.v), i.promise
            }, race: function (t) {
                var e = this, i = C(e), n = i.reject, o = b(function () {
                    m(t, !1, function (t) {
                        e.resolve(t).then(i.resolve, n)
                    })
                });
                return o.e && n(o.v), i.promise
            }
        })
    }, Cdx3: function (t, e, i) {
        var n = i("sB3e"), o = i("lktj");
        i("uqUo")("keys", function () {
            return function (t) {
                return o(n(t))
            }
        })
    }, "CjT/": function (t, e, i) {
        "use strict";

        function n(t) {
            i("XAdE")
        }

        var o = i("+OXj"), a = i("LQpA"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, Dd8w: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i("woOf"), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = o.default || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
    }, DgcQ: function (t, e, i) {
        "use strict";

        function n() {
            return new Proxy({}, {
                get: function (t, e) {
                    return t[e] ? t[e] : o.controlChangeIds.hasOwnProperty(e) ? t[o.controlChangeIds[e]] : void 0
                }, set: function (t, e, i) {
                    return o.controlChangeIds.hasOwnProperty(e) ? t[o.controlChangeIds[e]] = i : t[e] = i, !0
                }
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i("dh+D");
        e.createControlChanges = n
    }, DoIZ: function (t, e, i) {
        "use strict";

        function n(t) {
            var e = Math.floor(t / 12) - 1;
            return o(t) + e.toString()
        }

        function o(t) {
            return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][t % 12]
        }

        function a(t) {
            return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].indexOf(t)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
            var t = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, e = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            };
            return function (i) {
                var n = t.exec(i), o = n[1], a = n[2];
                return e[o.toLowerCase()] + 12 * (parseInt(a, 10) + 1)
            }
        }(), s = new WeakMap, l = function () {
            function t(t, e, i) {
                s.set(this, i), this.midi = t.midi, this.velocity = t.velocity, this.noteOffVelocity = e.velocity, this.ticks = t.ticks, this.durationTicks = e.ticks - t.ticks
            }

            return Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return n(this.midi)
                }, set: function (t) {
                    this.midi = r(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "octave", {
                get: function () {
                    return Math.floor(this.midi / 12) - 1
                }, set: function (t) {
                    var e = t - this.octave;
                    this.midi += 12 * e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pitch", {
                get: function () {
                    return o(this.midi)
                }, set: function (t) {
                    this.midi = 12 * (this.octave + 1) + a(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "duration", {
                get: function () {
                    var t = s.get(this);
                    return t.ticksToSeconds(this.ticks + this.durationTicks) - t.ticksToSeconds(this.ticks)
                }, set: function (t) {
                    var e = s.get(this), i = e.secondsToTicks(this.time + t);
                    this.durationTicks = i - this.ticks
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "time", {
                get: function () {
                    return s.get(this).ticksToSeconds(this.ticks)
                }, set: function (t) {
                    var e = s.get(this);
                    this.ticks = e.secondsToTicks(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "bars", {
                get: function () {
                    return s.get(this).ticksToMeasures(this.ticks)
                }, enumerable: !0, configurable: !0
            }), t.prototype.toJSON = function () {
                return {
                    duration: this.duration,
                    durationTicks: this.durationTicks,
                    midi: this.midi,
                    name: this.name,
                    ticks: this.ticks,
                    time: this.time,
                    velocity: this.velocity
                }
            }, t
        }();
        e.Note = l
    }, EGZi: function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, EqBC: function (t, e, i) {
        "use strict";
        var n = i("kM2E"), o = i("FeBl"), a = i("7KvD"), r = i("t8x9"), s = i("fJUb");
        n(n.P + n.R, "Promise", {
            finally: function (t) {
                var e = r(this, o.Promise || a.Promise), i = "function" == typeof t;
                return this.then(i ? function (i) {
                    return s(e, t()).then(function () {
                        return i
                    })
                } : t, i ? function (i) {
                    return s(e, t()).then(function () {
                        throw i
                    })
                } : t)
            }
        })
    }, EswX: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "score-container component-manual-list"}, [i("div", {staticClass: "list-view"}, [i("p", {staticClass: "component-title"}, [i("span", {staticClass: "title"}, [t._v(t._s(t.sectionTitle))]), t._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.listShow,
                    expression: "listShow"
                }], staticClass: "degree"
            }, [t._v("困难度")])]), t._v(" "), i("ol", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.listShow,
                    expression: "listShow"
                }], staticClass: "list score-list"
            }, t._l(t.scores, function (e, n) {
                return i("li", {
                    key: n,
                    staticClass: "list-item score-item"
                }, [i("span", {staticClass: "num"}, [t._v(t._s(n + 1))]), t._v(" "), i("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (i) {
                            return t.clickScoreItem(e)
                        }
                    }
                }, [t._v(t._s(e.name))]), t._v(" "), i("span", {staticClass: "difficulty-degree"}, t._l(new Array(e.degree), function (t, e) {
                    return i("i", {key: e, staticClass: "icon-star"})
                }), 0)])
            }), 0), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.listShow,
                    expression: "!listShow"
                }], staticClass: "content-wrap"
            }, [i("div", {staticClass: "section"}, [i("a", {
                staticClass: "return-btn",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.toggleListShow()
                    }
                }
            }, [t._v("<< 返回列表")]), t._v(" "), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showItem.author,
                    expression: "showItem.author"
                }], staticClass: "author-info"
            }, [i("a", {
                attrs: {
                    target: "_blank",
                    href: t.showItem.authorLink || "javascript:;"
                }
            }, [t._v(" " + t._s(t.showItem.author))]), t._v("提供")])]), t._v(" "), i("p", {staticClass: "info"}, [t._v("在键盘上依次按以下键进行演奏，注意控制节奏。")]), t._v(" "), i("div", {
                staticClass: "score-item-content",
                domProps: {innerHTML: t._s(t.showItem.content || "")}
            }), t._v(" "), i("div", {
                staticClass: "score-item-lyrics",
                domProps: {innerHTML: t._s(t.showItem.lyrics || "")}
            })])])])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, EuRD: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC8VBMVEUAAADGxsbNzc3h4eHNzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3T09PV1dXNzc3Nzc3Nzc3Nzc3Nzc3Q0NDNzc3Nzc3Nzc3Ozs7S0tLNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3Nzc3Nzc3MzMzOzs7Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7MzMzNzc3Ozs7Nzc3Nzc1lcYLjVUQAAADLy8tkcIHPz89nc4RmcoPR0dHOzs7U1NRodIXT09NodYbW1tbhVERpdohhboBrdoZbaXxXZnrrV0bZ2dldan1kb39gaXlTY3hRYXbY2NhfbH9ZZ3vnVkTlVUToV0VeZHP5+Prd3uJWZXpVZHj7+vxXYW9SWWaOjo729vjKyspibHxOVmNJUFxHTVlVVFTh4ubIx8hZYnDz8vXn6Ovc3Ny+vr6co62Pl6Nzfo5teYmAf4BeZ3ZcZXQ+RVDr7O/S1Nm4u8O9vLyqqaqPj4+GhYZNX3RsbG0AJy3////9/P7e3t7Bxcu8wMeorbd7hJJ3dndWXmxCR1IpLjcmIyMBHCLO0NbHytCwtL2rsLmWnahga3tMU1/uWUY0O0XNTT8xNj/DSz4CDhcAAAbu7vHX2d7b29vFxcWlqrSip7GlpKWTmqWioaKXlpd/iZaTk5RbZHJDTFQ4P0rGSz0fKzeGMypqJR3h4eHDwsO1ucK2tra2tbaysrOvrq+Zn6pzcnNUXGlhYF9bWlk7Qk0rND68SDy3RjqqQDYuKyxCFQ2zt7+7ubqsq6yLk5+enp6IkJyKiotpaGhjYmNQVldOTExHRkXYUkPRUEK0Rzs9OzuYPDMiKS4LFygbHyd2KSAhHR1VAADg4ODLztR3gpGsRDmdPDMRIih+MCdbHxYcFxVPHBQ3FBEAABEABg/j5OjLysucnJyFjZk3TlCuQzilPzU2NDR4LiYVEBARCQZ2EwBBAAChoaGgoKGgn6A+VGwrOEEsAgC2iD4ZAAAAN3RSTlMAAvsE/fjw9Uce3BcKBtKshW4sJOtzYhMP4de9WVFNzsiUVTkztJ+Pd2pcQOfFp2e4f3vCwcC+0J0UfAAADRtJREFUaN69mndcU1cUx8lLGKIgyLAi4t6rO8/L2+8lZEEWBCkJQ0SGgLKXAxVR3LvWXUfV1rqr1rqqttZqWzus3Xvvvf7qfUla80aCSD89KCKE983vnHvPvfecG3RLplAoldLvKpUKRdB/ZArPo5QxYYPio+Oihg+MGhEdnxjWq8fNH3bRPM/o3u/ucWPDg6n0Q4fmT5s2/+1DaRTSZ0DPqMQYz2u6hlDCv91H3RkbTKWlczSNBAcj0OBnlZrSbuOQkLEjuymhSkWXZPRIGhbCcRSuRuBzBaZCEJqmOCa4Z2JviOmCo0b1ZdJpdUCjtWn9o3vcntN4RyUOwNMRJDCDl6TlInmMsvOMiH79cUYNER0bomKo8PF3dFIMfPGQO7WUWhCGgGrU+LTIMPiLnYmGIi5EKxTRsRxGPVwgpiMZve5lcMjoJIXWJgjEBGbEhTLQAZ02WsXRwyNuJf7QVcO0uDyiY4w6rS90WceMHkO1EHG7hqT37yamSBndB/iPeLKP+aVow4cIKVJGtwTI8EfAOcZrHKX2x0GYkNECioTROzIdkQOoaZzi6KM7906aNWnSpFl7dx5TMxROq5PlKVCLf0bEvVpEDkHRydNnzSn5Hvxr50uuzH5iMv+DZBlKeDd/YwzCe0KG1E2MesbelwD4bP++4rw8K8EW5uUVnd6/CYBXIYdRy1C0A+AY88MYqFVJGRT+bC0A14tPrtVpNARBoihJEBqNzrJ43RkAntw5lZOj3Kl0U6SQkVpagqCpJ+YA0PDoWo2GxDAM9Rr8kmR1FmsRAKdm4rjEZ0j6cB4iZcSE4LTYU9TDs38CSwpRloQAoWGo0ejC2HVQzQxc6jM8jKdIIH0ZlSTgx18CG+o0JHyixAjjmnd2EC2s5TQ4/xyOiygqLlwaFmVQNCdxFT4LgMUowRPkILsq5pUe0TnYsuug9ksJRTsQQkSMXiGUSsjAJy/iZQhUCCk1J7ZmV+wwYpYl4Op0MYWmkwTjGCKVQ9MRkY6pc0AxBmX4NQNqMu0qzd76bo5hCigRUxAuoXeQQgAJ04p1TL0KiuCA9W96Ww5KmB2ry7fssOvyZShpI0QOG0uJdEyeA6YQARCsaZfziC4HNdj3OHNXmXSLJRQaH9NbIKSfeFzhi6AONIAR+nZnwZaLpLnGiLXNW2CCWq6Ko8/dFaT0gdzDqAQQOK6KCRQLRCFR26Wm3NJLdgNmWsBTpoBaXDjAmPB/owJpg8Sp5BjYgJFoQMNyMsy2NRUFF00kASmr7IYl4DmhFER7d5DyZmJMQwTenPoiqCMC68iobq4yYTk1K+e16VHC1Ja7w2W5vmwGLoREdvdKUcA5gguFPA/yISMgxNxemtvUbra4VrWu0JOofmt5u74MzKFFUsKgFA9k/DREEJCjH29AOzJSX9PcWLAwg7Cvbm0zGcx7yp1GogHs5JIFo3hgkNciYNYSCFkEHmX9CMHc5qZgLdVNrSv1qH3VvIv2Gvv23IUmCzg1VaAFj4Wh96RfgcRk7tib6+UZML8TLKthPTmZNOhtzbkr9IRpZfYuh8HkbNTBnPwII3gal+SF3M0Jk85sYCVlGYTOUv8AtPpCjftdEGTLxdyVZkxTWqHDzJeym+0seOphwQjjenoh/TmBs2aAfaisaerXrf8cQNt8pqjMnXFIoqW5daHZdSL7SA5h2vqFBs0HT1C+EGoMzPj8TitWkFLwR0CZnLcIS/FycOHDbx9/6NyBT8Cm01bCHRlbU0G7xd60pRpzrGndbrKCWuHaFRrmhoSF4r7OSi65YSWkEKJ+KTi4MSUlMzU1KyXl5R/ABycJd3apbtxqNl8qWGAjNaUrjJb1y6bSAkp0kBJ+xAlWXfxh8JgcY/Fy8PSErIkTJ0xImTBxYmbWuU89CdTQ0pxbabZtrXAYjLsqM2BymekbFCRtWFAE/BjmO92TobemaDCpjuUXzqZO8LHUhw6Ck+53w5a22bH2SjjvjQ6UzQO1lAByPx95xb0QIpwkUiWWpeBsaoovJCX1oQvL6wg+wbRXW8gMOwnfCi/t9acgxHet58/6MeGcygfCPPU6Kxm7mmLw9IMeRkpmJnSYm3IW7ONHCGHOgJ9Y70t1Z1467Dsf6dDREDIkFlcJcuMZHSZikNa5H3kFZKVeezkr1YN78MNNeTyFJH3fT8ObMynBpB8EIaN9t1vJ1PFlDRoxBEbzXJb7wZkbP3zrrTdegfHn//MyKJa8ls0HuxnfoGhHQUiSIDlyv4EiadwbQEqm+7Hvgc8ee2EueM1NnJjyyf61pHiIlIFZAsj88RAyiKJ9Ib+DxYQ4m1jnvpEykffVRnD9OM48cx685xkF74MHxPOWRMEkX0jwoTgIiU9HfOO+G+RJIHWfv+YJwoHNz2qTk7kZcw96hvHjUgjKgueFSqIgZOT8YF/IJFAmhrAPgKcz3VH/+RsqmZf7wi8PZXkhGilkttYXMm34/wEZyLsrTeCuvR27i+mUu6bx7kpkVL6Bfw5CAgR++bMw8Ms6E/j5d0NIP1wwhH+VH8LXPDPjFbC5k0M4+FA0hIRBb3U8Gb/9ZzIeEEzGIrnJ+JXQXePl0spS37RCEt604s2OmQ9eu5aa6k0xP/BpRZzmGpYdF6aVfhDSLYGRT5AYC7/QO0hPgvzuZoJM8SbIc+C0KF9LEySNxw6GEMV96dJUzydVwuYgseqvM9xe3wDOPihO9Z9+INlwSFM9k9CN3wj33CZZtFCjiyQcJ6r0ju3ll838omGVWbQ2L5YKkSxa2rERPCSKUYmWX41jzY4Mwx/ORrOlunxFi4GPTdk/yy80fvl95dPN+ZAuhkiW3209IQKeTYKFG4lTm9bamrP3ZBgrCxbmOI7krslhvRuJj87B9T0rFa5aGw+CD2AilRhZuOG8cCNBjXBDesdSgp3wTPCosSp7lYl1lVagFsMXFTV60rMlmgv+OvD+xse/O3ABLG+wyjAwth7MFm2JYMnIfQISbu6mL1vP2poaYTFgV/Yqu74qe4ULdQdYY52ybxOAtunPdfUa+eNLkWhzx/VRejb1d0m2qYWOyoLVLtb4TsHXZuP23JUuC+tehnVY3QPQ6gp18icL0gKuirapQ73b1MGi0wnccBtszi01GNy4OTWk6UjuCp3JQEIKhhIsNEJaBPHORMmGm4n3Qnr0p2jR0aFef7lggavGVZnbBDe527NLq1r0pPDogMqFHZyaLNiq0KH8UctNiRMdgmYsW4rmLJh3wmawLcxtc5HGqorsle/CWRnYMOI0mCk8BGmHQYQHMiRUeC7l9gI4B5xb2s0Ge/O8d4iMjJq2gvIqo5ginYhPik6m6f14Id6ah/hgWgKs5svlpaie1+Lck6N37Gne04EU0nrjvOhgyvx7MIWTJZEWHbGP/rgUda3JbuIplVvKV+sd+hwYlMAQmSP2zWoBhA1gVELKbrDE0LK6tQk1G3LeXdHq3JFhIQI7SyMtFnB9YCH6JiQeFxfeakGRwb4621mdUwMTTEVBY5WDDcjIB1cmi8sewwXFKGWCtIDDU06UN66xk6zDXOmstLOBGSWHRQw8BAoRVHAYSUmNp+RcLm1doHOhhLElYNg1/kpRopJwOiKlLEHNZFt240K9SW/wz8BIcp0Mg4kUVSGVQUNCcImWWrDUStqqnAUVq6uNhD8EqlnbAK4clpQHuUF8RISUKK1KUujc/SPIJzNs253Z5av8hAQjyMU3wGxxzOHwhSd4haROP1amZHv0RbCh3mBzVK1caGPlVJCsdR/4fidOi3VQvsMX2s1aES2poU99/mOwvpAwukwoJi2CsGjhEgAWPUxJi8+0uz4kpYzi5MroRxe9CZbUFcI6/c38y39FajSFjxYDcIUvo0sbQlG8DtmGQLpM0wGnjtUCcOOx/DqdTsMSBEkS7obA2pPFS2EJfSZOQYSE0Vfpr+2gvFO2tcGpZzxSAsDm/esfyy/LsxbmlZ0s3rf/M9ja2PvMZEaugaKNFJSEhZQ7+vtp0uDJh3c/eerVj4HXfnq1ZM6k6dCZMOBSBtMnJkgZoKXVR+u/3YRPn/kVbDfBP7t3PkNzfttNVOjgwE2tXn0CNM4giPEYlOa3ccaFJnXUnouJ7GILkBkz+hYajfekdamZGd7rllqmPRn6ttuy6QO8E73jBjPCIbfDQCh8YI9bbmOPDteqO41RIdqQxFu+xKCAgRmHMwjdSRlM316CxNuxmKQB6Xhnri/QaeHxsNjY2Rsr0WMoRu2V0/FFjNCo7vDXOn/3pndcf/U2HFF1hFCnUQlRMbd1D4f3rjJxXOx8LjCDmhY8dOQdt3+jiH9rvUb2pTmOw2kEUUHXub3H/6tCEDVMMxQVOWJwRJduEyn4342IGT+uTyielsbg/LODg3kazqRto0LHDI2DN7A8iK5f7lIMHjGsb2SsmtKmvf32Ni2lDkm4b9xdYf/RFS/fp3QfnDRoVHx0dPyoQUmDu3l+1CWC1HERitu+Dfc3oyfNm/h5TTsAAAAASUVORK5CYII="
    }, FNIq: function (t, e, i) {
        "use strict";
        var n = [{name: "晴天", url: "晴天.mid", degree: 5}, {name: "等你下课", url: "等你下课.mid", degree: 3}];
        n.forEach(function (t) {
            t.url = STATIC_PATH + "/midi/" + t.url, t.playing = !1
        }), e.a = n
    }, FclF: function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), a = i("exGp"), r = i.n(a), s = (i("7+uW"), i("ZnLv")), l = (i.n(s), i("VSxz")),
            u = i("2uFj"), c = i("Y3FW"), f = (i("vYTo"), i("9OEs")), d = i("9LSK"), h = i("/U6I");
        e.a = {
            name: "Piano", mixins: [f.a, d.a, h.a], components: {}, data: function () {
                return {
                    DEV: !1,
                    pianoShow: !1,
                    bandImg: i("NeAu"),
                    enableBlackKey: !1,
                    showKeyName: !0,
                    showNoteName: !1,
                    Notes: u.g,
                    synth: null,
                    keydownTimer: null,
                    keyLock: !1,
                    lastKeyCode: "",
                    lastKeyTime: 0
                }
            }, mounted: function () {
                this.initPiano()
            }, beforeDestroy: function () {
                this.keydownTimer = null
            }, methods: {
                initPiano: function () {
                    var t = this;
                    return r()(o.a.mark(function e() {
                        return o.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    setTimeout(function () {
                                        t.computeEleSize(), t.pianoShow = !0
                                    }, 300), t.bindKeyBoradEvent(), t.setListener(), t.synth = c.a.load({instruments: "piano"}).toMaster();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                }, computeEleSize: function () {
                    var t = $(".piano-key-wrap").width() / 36, e = 7 * t, i = .7 * e;
                    $(".piano-key-wrap").height(e), $(".bkey").height(i)
                }, setListener: function () {
                    var t = this;
                    window.onresize = this.computeEleSize, window.onorientationchange = this.computeEleSize, l.a.$on(u.e.AUTO_PLAY_NUM_SCORE, function (e) {
                        t.playScoreByName(e)
                    }), l.a.$on(u.e.AUTO_PLAY_XML_SCORE, function (e) {
                        t.addToPlayQueue(e)
                    }), l.a.$on(u.e.AUTO_PLAY_MIDI, function (e) {
                        t.loadMidiAndPlay(e)
                    }), l.a.$on(u.e.STOP_AUTO_PLAY, function (e) {
                        t.pauseAutoPlay(e), t.pauseXMLPlay(), t.pauseXMLPlay(), t.stopMidiPlay()
                    })
                }, getNoteByKeyCode: function (t) {
                    for (var e = void 0, i = this.Notes.length || 0, n = 0; n < i; n++) {
                        var o = this.Notes[n];
                        if (o.keyCode == t) {
                            e = o;
                            break
                        }
                    }
                    return e
                }, getNoteByName: function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C4", e = void 0, i = this.Notes.length || 0, n = 0; n < i; n++) {
                        var o = this.Notes[n];
                        if (o.name == t) {
                            e = o;
                            break
                        }
                    }
                    return e
                }, bindKeyBoradEvent: function () {
                    var t = this;
                    document.addEventListener("keydown", function (e) {
                        var i = e.keyCode;
                        t.DEV && console.log("keydown", i), 16 == i && (t.enableBlackKey = !0), t.enableBlackKey && (i = "b" + i), i == t.lastKeyCode ? (t.keyLock || (t.playNoteByKeyCode(i), t.lastKeyCode = i, t.keyLock = !0), t.keydownTimer && (clearTimeout(t.keydownTimer), t.keydownTimer = null), t.keydownTimer = setTimeout(function () {
                            t.keyLock = !1
                        }, 120)) : (t.playNoteByKeyCode(i), t.lastKeyCode = i)
                    }, !1), document.addEventListener("keyup", function (e) {
                        16 == e.keyCode && (t.enableBlackKey = !1), $(".wkey").removeClass("wkey-active"), $(".bkey").removeClass("bkey-active")
                    }, !1)
                }, clickPianoKey: function (t, e) {
                    var i = this.getNoteByKeyCode(e);
                    i && this.playNote(i.name)
                }, playNoteByKeyCode: function (t) {
                    var e = this.getNoteByKeyCode(t);
                    if (e) {
                        this.playNote(e.name);
                        var i = e.type;
                        "white" == i ? $("[data-keyCode=" + e.keyCode + "]").addClass("wkey-active") : "black" == i && $("[data-keyCode=" + e.keyCode + "]").addClass("bkey-active")
                    }
                }, playNote: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C4",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1n";
                    if (this.synth) try {
                        this.synth.triggerAttackRelease(t, e)
                    } catch (t) {
                    }
                }
            }
        }
    }, FwAT: function (t, e, i) {
        "use strict";
        e.a = [{
            name: "祝你生日快乐",
            content: "oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d s<br>\n              oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d fs",
            degree: 1,
            lyrics: "Happy Birthday to You <br>\n            Happy Birthday to You<br>\n            Happy Birthday to You <br>\n            Happy Birthday to You <br>",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "小星星",
            content: "sshhjjh ggffdds <br/> hhggffd hhggffd <br/> sshhjjh ggffdds",
            degree: 1,
            lyrics: "Little Star <br>\n            Twinkle, twinkle, little star <br>\n            How I wonder what you are <br>\n            Up above the world so high <br>\n            Like a diamond in the sky <br>\n            When the blazing sun is gone",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "新年好",
            content: "ssso fffs sfhhgfd dfgg fdfs sfdo ads <br/> ssso fffs sfhhgfd dfgg fdfs sfdo ads",
            degree: 1,
            lyrics: "新年好呀，新年好呀<br>\n            祝贺大家新年好<br>\n            我们唱歌，我们跳舞<br>\n            祝贺大家新年好",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "因为爱情",
            content: "opsspsdfd spfdpfdsp passpfd fdd dff <br/>opsspsdfd spfdpfdsp passpfd spsfhd <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpjh <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpfd fdfs",
            degree: 3,
            lyrics: "",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "隐形的翅膀",
            content: "osf hf dsss spoo <br> osf hhh jh hdfd sdd <br> jhf hhhjh fdsdp <br> ops fd fs <br> fhl lk jhjl fds ss sl jh fd sdd <br> 停顿 <br> fhl lk jhjl fds ss sl jh fd ds s",
            degree: 2,
            lyrics: "",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "蒲公英的约定",
            content: " uio ooo pas ~ sadp ooo dsdf <br> sdff fgf df s ~ pasd ssp fg d <br> uo sf f gd dhas fghs sdf <br> uo sf f gd dhas fghs sd s <br> jh fds fgd jh as fghs sdf <br> uo sf f gd dhas fghs s d s",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "纸短情长",
            content: "o fffd fs ddds dh ~ ss spsp o dddf po <br>\n              gggf gs ddds dh ~ sssp sp o fddss <br>\n              ssd f ff fds a jh ~ hjkl ff lkl kfh <br>\n              hjlh j ~ jhg hf ds ~ ps fdds dh sd <br>\n              ssd ffdf fds hhfh ~ hjk llll lkjk jf h <br>\n              hjlh j jhg hf ds ~ ps fdds dsps",
            degree: 4,
            lyrics: "纸短情长 <br>\n    你陪我步入蝉夏 越过城市喧嚣 <br>\n    歌声在游走 你榴花般的双眸 <br>\n    不见你的温柔 丢失花间欢笑 <br>\n    岁月无法停留 流云的等候 <br>\n    我真的好想你 在每一个雨季 <br>\n    你选择遗忘的 是我最不舍的 <br>\n    纸短情长啊 道不尽太多涟漪 <br>\n    我的故事都是关于你呀 <br>\n    怎么会爱上了他 并决定跟他回家 <br>\n    放弃了我的所有我的一切无所谓 <br>\n    纸短情长啊 诉不完当时年少 <br>\n    我的故事还是关于你啊 <br>\n    我真的好想你 在每一个雨季 <br>\n    你选择遗忘的 是我最不舍的 <br>\n    纸短情长啊 道不尽太多涟漪 <br>\n    我的故事都是关于你呀 <br>\n    关于你呀 <br>\n    怎么会爱上了他 并决定跟他回家 <br>\n    放弃了我的所有我的一切无所谓 <br>\n    纸短情长啊 诉不完当时年少 <br>\n    我的故事还是关于你啊",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "同桌的你",
            content: "ooo oui o a ~ ppp pip o <br>\n              ooo oap i i ~ iii iuy t <br>\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as",
            degree: 1,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "晴天",
            content: "fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg dfgh js j kk <br>\n              fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg pasd fd s s<br>",
            degree: 2,
            lyrics: "晴天 ~ 周杰伦 <br>\n      刮风这天我试过握着你手 <br>\n      但偏偏雨渐渐大到我看你不见 <br>\n      还要多久我才能在你身边 <br>\n      等到放晴的那天也许我会比较好一点 <br>\n      从前从前有个人爱你很久 <br>\n      但偏偏风渐渐把距离吹得好远 <br>\n      好不容易又能再多爱一天 <br>\n      但故事的最后你好像还是说了拜拜",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "千与千寻主题曲",
            content: "fg hhhh hjhg ffff fgfd ss sapa as d dfdf d <br>\n              fg hhhh hjhg ffff fgfd ss sapa asos df d ddss <br>\n              sdfs h f dhd spf sa sapa asos dfg gfds d <br>\n              sdfs h f dhd spp aso o p a sdos dfd ddss",
            degree: 3,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "We Wish You A Merry Christmas",
            content: "o s sdsa ppp ~ d dfds aoo <br>\n              f fgfd s p ~ oo pdas <br>\n              s s sa a s a p o ~ d f d s h o <br>\n              oo pdas ~",
            degree: 1,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "明天你好",
            content: "fhhfdhh sffsaff pssp ossf gfdsd <br>\n              ssdfd hh as ~ ppasa ff op <br>\n              psgf fs d fd ofd ~ ssdfd hh as <br>\n              ppasa ff op psgf hs dfg fgfgh fd ~ <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs psdfd <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs fd s a s ~",
            degree: 4,
            lyrics: "明天你好 <br>\n    看昨天的我们 走远了<br>\n    在命运广场中央 等待<br>\n    那模糊的 肩膀<br>\n    越奔跑 越渺小<br>\n    曾经 并肩往前的 伙伴<br>\n    在举杯 祝福后都 走散<br>\n    只是那个 夜晚<br>\n    我深深 的都留藏在心坎<br>\n    长大以后 我只能奔跑<br>\n    我多害怕 黑暗中跌倒<br>\n    明天你好 含着泪微笑<br>\n    越美好 越害怕得到<br>\n    每一次哭 又笑着 奔跑<br>\n    一边失去 一边在寻找<br>\n    明天你好 声音多渺小<br>\n    却提醒我 勇敢是什么<br>\n    ...",
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "青花瓷",
            content: "hhfdfdsp dfdso dfdsp sd of<br>\n              sdfh hf f d s ds p sdf h<br>\n              dsps sps spspo dsps sps sfdss<br>\n              opff fdf fdfhf fff dddd dsfd<br>\n              dsps sps spspo opfh hfh hfdss<br>\n              dsd fdds d sp dssp s s s<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d sds d sd f hf<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d o fd ds~",
            degree: 4,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "一直很安静",
            content: "fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh df<br>\n              fhlk lh j h f~ fgfds s ass~<br>\n\n              fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh jf~<br>\n              fhlk l z x x~ fgfds s ass~",
            degree: 3,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "好好",
            content: "fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljs ddf gpsf f d ~<br>\n              停顿<br>\n              fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljl ll j xz~<br>\n              高潮<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl h~<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl z~<br>\n              hlz xhcx zlz lk lf vv bv jsgj jhh kl <br>\n              h cxzl  xz bn m mmmmm~",
            degree: 5,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "突然好想你(选段)",
            content: "W U UT YT R T~ T I IU IU I O Y<br>\n    T R T PP A D S A P OO P U<br>\n    T R T O OO I E R T<br>\n    W U UT YT R T~ T I IU IU I O Y<br>\n    T R T P~ P A DSAP O OPU<br>\n    T R T O OO IERT<br>\n    P A S F D<br>\n    S D O D S<br>\n    P A S F D S F<br>\n    P A S F D<br>\n    H D G FDFS<br>\n    P A S F D S S",
            degree: 2,
            lyrics: "\n      最怕空气突然安静<br>\n      最怕朋友突然的关心<br> \n      最怕回忆突然翻滚<br> \n      绞痛着不平息<br> \n      最怕突然听到你的消息<br> \n      想念如果会有声音<br> \n      不愿那是悲伤的哭泣<br> \n      事到如今<br> \n      终於让自已属於我自已<br> \n      只剩眼泪还骗不过自己<br> \n      突然好想你<br> \n      你会在哪里<br> \n      过的快乐或委屈<br> \n      突然好想你<br> \n      突然锋利的回忆<br> \n      突然模糊的眼睛",
            author: "YuetAu",
            authorLink: "https://yuetau.net/"
        }, {
            name: "送别",
            content: "O UOS P S O<br/>\n    O TYU YTY<br/>\n    O UOS AP S O<br/>\n    O YUI RT<br/>\n    PSS A PAS<br/>\n    PASPPOUTY<br/>\n    O UOS AP SO<br/>\n    O YUI RT",
            degree: 1,
            lyrics: "长亭外，古道边，<br/>\n    芳草碧连天。<br/>\n    晚风拂柳笛声残，<br/>\n    夕阳山外山。<br/>\n    天之涯，地之角，<br/>\n    知交半零落；<br/>\n    一壶浊酒尽余欢，<br/>\n    今宵别梦寒。<br/>\n    长亭外，古道边，<br/>\n    芳草碧连天。<br/>\n    问君此去几时还，<br/>\n    来时莫徘徊。<br/>\n    天之涯，地之角，<br/>\n    知交半零落；<br/>\n    人生难得是欢聚，<br/>\n    惟有别离多。",
            author: "Fake"
        }, {
            name: "天之大",
            content: "JH JLJH LZX ZLJL<br/>\n    JHJLZXZLZ<br/>    \n    JH JLJH LZX ZLJL<br/>    \n    JHJLZXZLL<br/>    \n    XVV XVBMB XXVZL<br/>    \n    XVV XVBMBXZ<br/>    \n    XVV XVBMB XXVZL<br/>    \n    JHJLZXZLL",
            degree: 1,
            lyrics: "妈妈 月光之下 静静的 我想你了<br/>\n    静静淌在血里的牵挂<br/>    \n    妈妈 你的怀抱 我一生 爱的襁褓<br/>    \n    有你晒过的衣服味道<br/>    \n    天之大 唯有你的爱 是完美无瑕<br/>    \n    天之大 记得你用心传话<br/>    \n    天之大 唯有你的爱 我交给了他<br/>    \n    让他的笑像极了 妈妈",
            author: "翾"
        }, {
            name: "天空之城",
            content: "PAS ASFA~ UP OPSO~ IUI UISU SSSA (^I) IAA <br/>\n\n    PAS ASFA~ UP OPSO~ YUI SA SD FS~ SAP AOP <br/>\n    \n    SDF DFHD OOS ASFF <br/>\n    \n    PAS ASD SOO~ GFDSF~ F J J H H FDS<br/>\n    \n    S DS DHF~ F J J H H FDS ~ S DS DAP",
            degree: 2,
            author: "ShawNa"
        }, {
            name: "小幸运",
            content: "uuo ossa apup~ ppa affa aouo<br/>\n              uuo ossa apup~ pa pa f d s<br>\n              uuo ossa apup~ ppa affa aouo<br>\n              uuo ossa asup~ pa pa f d s<br>\n              fdsa pppp pf d~ dsap ooou od s~<br>\n              sso ot u yp~ ppp sp sp ssss fd d~<br>\n              o fdsd fodf odf~ dd fgfda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ dsf ds f d s~<br>\n              fodf odf~ dd fghda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ fss f d s~",
            degree: 4,
            author: "棱镜jh",
            authorLink: "https://github.com/WarpPrism/AutoPiano"
        }, {
            name: "莫斯科郊外的晚上",
            content: "t(^y)o(^y)i ~ (^y)y oit <br>\n    (^y)o(^p)(^p)s(^p)(^o)o <br>\n    padso <br>\n    ytoi(^o) <br>\n    (^p)(^o)oi(^y) oit",
            degree: 2,
            lyrics: "《莫斯科郊外的晚上》<br/>\n    深夜花园里四处静悄悄<br/>\n    只有树叶在沙沙响<br/>\n    夜色多么好<br/>\n    令人心神往<br/>\n    多么迷人的晚上<br/>\n    我的心上人坐在我身旁<br/>\n    悄悄看着我不声响<br/>\n    我愿对你讲<br/>\n    不知怎样讲<br/>\n    多少话儿留在心上<br/>\n    长夜快过去天色蒙蒙亮<br/>\n    衷心祝福你好姑娘<br/>\n    但愿从今后<br/>\n    你我永不忘<br/>\n    莫斯科郊外的晚上",
            author: "LalalalavaZ"
        }, {
            name: "Lemon【Unnatural主题曲】",
            content: "SDF SP D A OU APOT OU<br/>\n    YUI S ASO IUI S APO<br/>\n    SD F SP D A OU A P OT O U<br/>\n    YUI O IO U O S F D DD SS<br/>\n    P AS AP OFF D FG FD SDO<br/>\n    I OP OI UOSS A AP AS<br/>\n    DFDS PS FH DS DFDS PS FH DS<br/>\n    DFDS PS FH JH HI KH FH D<br/>\n    DFDS PS FH DS SSDF GFDAS<br/>\n    SA PASD SOUO PDA SS<br/>\n    SA PASD SOSD FGD SS",
            degree: 3,
            author: "Fake"
        }, {
            name: "西海情歌",
            content: "\n    U OP SP D~ S DF FD DSP~ <br/>\n    U O PS D D D DS D DF FD DSP~ <br/>\n    U OP SP D~ DS S DF FD DSP~ <br/>\n    SS DF HHHF HJJH JJJHF HJLLLL LJJL JJJHF <br/>\n    HFDDDSP SDD DFHJJHF <br/>\n    SDHHHFHJJHJJJHF HJLLLLLJJLJJJHF <br/>\n    HFDDDSP SDD DFD S~ P~",
            degree: 2,
            author: "javacBT"
        }, {
            name: "绿色",
            content: "\n      fdfp ppph d dd <br/>\n      fdfooouoh f ff<br/>\n      fhfspss <br/>\n      fhfspsd <br/>\n      sdsgffddsdsg fdf",
            lyrics: "\n    若不是你突然闯进 我生活 <br/>\n\n    我怎会把死守的寂寞 放任了 <br/>\n    \n    爱我的话你都说 <br/>\n    \n    爱我的事你不做 <br/>\n    \n    我却把甜言蜜语当做你爱我的躯壳\n    ",
            degree: 1,
            author: "iPeng6"
        }, {
            name: "我的中国心",
            content: "e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              uouu uspp pspo tytyu <br/>\n              uspp psdf fdaop <br/>\n              e u yutre upouytyu <br/>\n              uop apo uy ttyu y u apop",
            degree: 2,
            author: "HesperusArcher",
            authorLink: "https://github.com/HesperusArcher",
            lyrics: "河山只在我梦萦 <br>\n             祖国已多年未亲近 <br>\n             可是不管怎样也改变不了 <br>\n             我的中国心 <br>\n             洋装虽然穿在身 <br>\n             我心依然是中国心 <br>\n             我的祖先早已把我的一切 <br>\n             烙上中国印 <br>\n             长江 长城 黄山 黄河 <br>\n             在我心中重千斤 <br>\n             无论何时 无论何地 <br>\n             心中一样亲 <br>\n             流在心里的血 <br>\n             澎湃着中华的声音 <br>\n             就算身在他乡也改变不了 <br>\n             我的中国心"
        }, {
            name: "伊莎贝拉之歌《约定的梦幻岛》OST",
            content: "\n    E(^T)YUPOIU TURYE <br/>\n    WEUIOUYAO UOPUOPUYEOU <br/>  \n    E(^T)YUPOIU TURYE <br/> \n    WEUIOUYAO UOPUOPUYEOU <br/> \n    (^T)YUPOIU TUOUP <br/>\n    PSAOUPFA OPASAPASDAF <br/> \n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS ERTYUEWE <br/>\n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS HSPFAODAAP",
            lyrics: "",
            degree: 3,
            author: "HikamaiC",
            authorLink: "https://github.com/Gu-Miao"
        }, {
            name: "cannon in D",
            content: "\n    [tf] [wd] [es] [0a] [qp] [8o] [qp] [wa] <br/>\n    [tsf] o [wad] o [eps] u [0oa] u [qip] t [8uo] t [qip] t [woa] y <br/>\n    [tus] a s [wa] [es] f [0h] j [qg] f d g [8f] d s a [qp] o i u [wy] u i <br/>\n    [tuo] o [wo] p o i [etu] u [0u] i u y [qt] E e E [8t] t [qt] E e t [wr] t y <br/>\n    [8wu] [5ry] [6et] [3r] [4e] [1w] [4e] [5t] r [18wtu]",
            lyrics: "",
            degree: 3,
            author: "iamjiangmioamiao",
            authorLink: ""
        }, {
            name: "遇见",
            content: "OU OY UYT TRERTRTYU </br> OU OD SAS TRERTRTYT </br> OPASASAPOPO TYUIUIOTYU </br> OPASASADSDSFO TYUIUIUYTRT </br> OPASASDSAPO TYUIUIOTTPO </br> OPASASDSDFO  TYUIUIOTTPO </br> OPASASDSDFO  TYUYUYOTYUT </br> OPASASPAOIO </br> UUUIOUWW YYYUIYWW </br> TTTYUYRT RERTR </br> EWEPO YIUYT </br> TREYYTEERT ",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "婚礼进行曲",
            content: "TIII TOUI TIAAPOIUIO TIII TOUI TIPSPIYOPIAPOYY UIOO APOYY UIOO TIII TOUI TIPSPIYOPIYOPII ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "童话",
            content: "OSASO OSASO OSAS SSPPOOSASO OFDDS OSASP PPSJH DDGGFF FFADSSAS SASG OHGFDDDGGFF FFLKJKL LDSJ JJHHHOHGFFGF FGF GFDSSFHJ JJHDDGF SFHJ JJHDDGFGFDS DFPPSSAS",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "菊花台",
            content: "UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO WUYYOUYYYTY </br>    UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO UYUOUYYT </br>    TYUUOP PFFDSPO POUYT ETYYTY </br>    TYUUOP PFDSSDS OOUASTYUYT ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "北京欢迎你",
            content: "FHFDFDFFDPS FD </br>DSPSDFHDFJHHDS </br> DSPSDFHDFJHHF </br> DFDSHJFPFDDS </br> FHLHJJH FF HH FH JL ZL HF D H F F </br> FH LH JL ZL HF HLJ FD FH XZ LL </br> ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "致爱丽斯",
            content: "FDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPASDFOGFDIFDSUDSAAUFFFFDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPSGFFDDGJHGFDSAPPOPASDDFGPSDASDFHDASDFHDAFFFFFD ",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "约定",
            content: "OSDFDSFDOO UPASAPSAUO POOIISUUDS </br>    DFGFFDSPD OSDFDSFDAO FPASAPSAUO </br>    POOIISDFS PASPSJHH DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFPSGFGHD DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFGPGFSDS ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "美丽的神话",
            content: "PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "有没有人告诉你",
            content: "UPPPPPPPPUIOI UOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAUSASA </br>    UPPPPPPPPUIOI YOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAAAPAP </br>    FJFFFFSPUUFD UHHHHHHHJKKF </br>    FJFFFFSPUUFD DDDDDUAAP ",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "好好恋爱",
            content: "UIOOOOOIUYYO AASASSSDFAAO </br>    TPPPUPSOOOOUT IIIUIOPPPSPO </br>    UIUUIOOOOUYTTS APOPO </br>    UTTPPOOOIU SSSSASDD </br>    OGFOOGDOGFGFGFDS SAPPFPFPOOFOFO </br>    GFGFSD OGFOOGHDOGFFFGFDF </br>    SAPPFPFPOOFOFDSP SDAPAPAFDSS",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "安静-周杰伦",
            content: "FFFFDSADDDS OFDSSSOFDSSD </br>    FFFFDSADDDS OFDSSSOFDSSDDFG </br>    GGGGFDSSSDD OHHHGFDDDFF </br>    PGFGFDSSASO FGFGFDSDH </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSGGFFDDS </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSSGFDSPSS",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "月亮代表我的心",
            content: "OSFHSAFH HJKLJH FDSSS FDSSS DFDSPDFD OSFHSAFH HJKLJH </br>    DSSS FDSSS DFDPASDS FHFDSHA PAPAPOF HFDSHA PASSSDFD OSFHSAFH HJKLJH </br>    FDSSS FDSSS DFDPASDS",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "卡农　(括号是一起按) ",
            content: "T-UOS W-YOA E-TUP 0-RYO </br>    Q-ETI 8-WTU Q-ETI W-RYO </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-RYO </br>    SAST (R 9 )OYU (0T)SAP (0A)FHJ </br>    (QG)FDG (F8)DSA (QP)OIU (WY)IUY </br>    (WT)YUI (WR)YOI (EU)POI (0O)IUY </br>    (QT)EPA (8S)APO (QI)UYP OPO </br>    (HU)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(UW)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (HY)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(WU)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-",
            degree: 5,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "不能说的秘密",
            content: "WTTT WRRR WTTT WYYY WTTT WRRR WTTT WYYY WIIII IUU IIIOUYTRRT </br>    WOOOO OII OOOOOIIUUY WIIII IUU IIIOUYTRRYT ETOPT OOOOOIIUUY </br>    TSASSOOOOIIU TSASSOOOODDS TSASAPTAPAPO TPOPOIIUIOPPO </br>    TSASSOOOOIIU TSASSOOOODDS TSASAP TAPAPO TPOPOIIUIOPPO TOTIU TTOTIUT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "往事难忘",
            content: "T TYU UIO POU OIUY IUYT </br>    T TYU UIO POU OIUY UYT </br>    OIUY WWIUYT OIUY IUYT </br>    T TYU UIO POU OIUY UYT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "梁祝",
            content: "OUYT YREW </br>    APAOPIUO YUOYUIUYT </br>    ORYETW ETW </br>    0WETY ETW </br>    OSPOUOY </br>    YUREWETY0TEWETW </br>    UORYETW 0W0WERYE </br>    WETYOUYUYTEW0T ETEW0WETW </br>    UOYUYTREW",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "大海",
            content: "EWTTTT WETTYT ETYYYY TEYYUY </br>    UOPPOP OUYUYTE WETTTTYT </br>    UOPPPPSPOOPO UYTTTTYU </br>    UYTTTTSPOOPO UOPSSPO </br>    UOPPPPSPOOPO UYTTTTOU </br>    UYTTTTYUOOUO UOP EUYTT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "虫儿飞",
            content: "UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UYO IUY OIUIOUY TEUY TEYT IUIUT TIUIUTYT",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "雪绒花",
            content: "0WY TWQ 000QWEW </br>    0WY TWQ 0WWERTT </br>    Y WWREW0WT </br>    ETYTRW </br>    0WY TWQ </br>    0WWERTT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "痴心绝对",
            content: "SDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPPGGFHS POPPPGGSSPD </br>    SSDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPGGFHS POPPPGGSSSAS",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "画心",
            content: "OUU YTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WE EUYTRWE WWEETREW90 00WERTWTYU </br>    OUU YTYTRTYRWE 0WEEUYTRWE 0WETREWE0 0WEERTWTYU OUU YTYTRTYRWE 0WEEUYTRWE </br>    OUU YTYTRTYRWE 0WEEUYTRWE OUUYTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WEEUYTRWE",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "蜗牛",
            content: "U UUIUYUYT TTI IYTTYU TTO OPOIUI RT WWU UIUYUT WWT TWTYUIO TSAA ASAPPAOTIOP PASDFO WEOI IOIUYTY WWT TWTYUIO TSAA ASAPPAO TIOP PASDFO WEOI IUYTTRT</br>    ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "神秘园",
            content: "UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP ASHJ JKHGH ASFG GHFDF ASHJ JKHGH HJGFG GHFDF UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "无赖",
            content: "TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIIOITY TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIUTYT TTWERTTYUTW WQQEWQW WEERUYYTRT TTEWER WWWUYTTYUTO UUOPPASOU UUOPPPIPAPOIOU UIUIOPOO WUYTTYUTO UUOPPASAU UUOPPPIPAPOUYT UIUIOPOOUYTT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "海阔天空",
            content: "FDS DFHHHHJH JKLLLLLLKJHJ </br>    JHH HFDS FGFDDFDD FDDDSSSS DSS </br>    JKLLLLLLKJHHHFDS </br>    LLLLZZZLZX XZL </br>    LLLLZZ HHXZL </br>    LLLLZZZZLKL </br>    JJKJKL LLZLZX XZXL",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "下一站天后",
            content: "FFFHD DHSSSFP GFGJF GHDDPSD FDFHHDFLKHHJ GFGHPSFDS </br>    FHKLKJHH FGHJGGFD DSDFHH FJFDSD PSFDDFH </br>    LKJKJ HHSFHH JJJGFD DDKH FFHS FFDDD JFH LKJKJHH SFHH JJJJLKJKLHHFHJHHGPAS",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "红河谷",
            content: "WTUUUUYUYT </br>    WTUTUOIUY </br>    OIUUYTYUOI </br>    EEWRTYUYT </br>    OTUUUYUYT </br>    WTUUUOIUY </br>    OIUUYTYUOII </br>    EEWRYUYT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "一千年以后",
            content: "STYUPO IUTUY STYUPAO UP AAASDSA SASFF</br>    APAO PPASDSDGFDDFS SASF APAOPS</br>    </br>    SSSDFGFSFD OSD FDSOD FDSAPUA</br>    </br>    SAPASDOFF FGFSDD OSD FDSOD DFDSAPDA</br>    </br>    SAPOPSODS FFGFD SDFDSDSODS",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "男儿当自强",
            content: "PSPSPOP</br>    PSPSOPD</br>    FSDH FDFS</br>    DFSDP</br>    SDPSO</br>    PSDSPO PSO</br>    PSPOP SDSPO</br>    PSOPD FHDFJ</br>    FJHGFHFDF</br>    FHJKJHF FHJKHJK</br>    JKJHFHJKJHFHD</br>    FDSDHGFHD</br>    DFHJFHFDS PDS</br>    PSDFA AFDAP</br>    PSPOP</br>    PSPOP</br>    FHDFJ</br>    ",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "回到过去 ",
            content: "TUUYYTRT </br> TRREEW0E </br> EWWTTUUY </br> YTTTREW </br> TUUYYTRYT </br> TRREEW0R </br> EWWW </br> WQ0WQ </br> TUUY </br> YYYTYUUY </br> WRTTRTPO </br> TYTUTTRWW </br> WTYTUTIIUY </br> WTYUU </br> UYUIIUUY </br> YTUUUYYTRT </br> TYTUUUU </br> TTOOUUU </br> TTYYTTTETETY </br> WTYRT",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "亲爱的那不是爱情 ",
            content: "SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSU </br> SAOSAAOFFGD </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSS </br> PSHGFDSS",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "哆啦A梦主题曲",
            content: "WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERTY </br> WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERYT </br> PPOIOPO </br> YUIYO </br> POIYAPOPOI </br> OPUYT",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "想唱就唱",
            content: "SASDSO UIIIOU </br>    SASDSO OPPPSA </br>    SASDFSOU SDSOU </br>    SASDFSOS GFDSF </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH JH </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "星语心愿",
            content: "JLKJHJF JHJLKLKJKL　　</br>    LZXXXXZ LKJKH JLKJHJ　　</br>    FHJXZLKL LKJJJJHHJF　　</br>    HHJXZLKLL LKJJHKJ",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "千千阙歌",
            content: "TTYU OPSAAAOU YYYUI PSFDDAOTTYU OPSAAAOU YYYUI PSFDDAOPOPOPAAPA DDDDASDFFFDDDSF AOPOPSDFFDF FDSD SPP OPSD FFDF FHJHFFFFDDSDSP FFGFDSD FF F DDSD SPSS",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "欢乐颂",
            content: "U U I O O I U Y T T Y U U Y YU U I O O I U Y T T Y U Y T T Y Y U T Y U I U T Y U I U Y T Y W U U I O O I U Y T T Y U Y T T ",
            degree: 1,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "会呼吸的痛",
            content: "HJLJXXJZ ZZLKLZXZHL LKJKLGGGLLZLHHH HCXZXX HJLJXXJZ ZZLKLZXZHLL LKJKLGGGLLZLHHH HJKLLKLL ",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "夜曲",
            content: "PA SSSSAFF JJJHGHSS</br>    GGGHFAFD DSASSA</br>    SSSSAFF JJJHGHSS</br>    GGG FDASP",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "暗香",
            content: "UIURTUP SAOU UIURTUP </br>    SAOF PPPSFOIPD DFGDFGF </br>    PDFGDFGP PFGHFGHP DFGPG </br>    HIDFDFGF </br>    UIURTUPSAOU </br>    UIURTUPSAOP ",
            degree: 3,
            author: "",
            authorLink: "",
            lyrics: ""
        }, {
            name: "美丽的神话 ",
            content: "PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ",
            degree: 2,
            author: "",
            authorLink: "",
            lyrics: ""
        }]
    }, HMrw: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, '.score-container.component-auto-list{width:40%;min-width:500px;padding-bottom:50%;font-size:14px;overflow:hidden;background:hsla(0,0%,100%,.6);border-radius:5px;border:1px solid #ddd;position:relative}.score-container.component-auto-list .list-view{width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-auto-list .component-title{margin:0 0 10px;font-size:18px;font-weight:700;line-height:26px;position:relative}.score-container.component-auto-list .component-title .title-img{display:inline-block;width:26px;vertical-align:middle}.score-container.component-auto-list .component-title .title{vertical-align:middle;margin-left:5px}.score-container.component-auto-list .component-title .degree{width:150px;float:right;text-align:left}.score-container.component-auto-list .list{width:100%;padding-left:25px;padding-bottom:10px;line-height:32px}.score-container.component-auto-list .list .list-item{height:32px;line-height:32px;list-style:none}.score-container.component-auto-list .list .list-item a{display:inline-block;min-width:120px;cursor:pointer}.score-container.component-auto-list .list .list-item .icon-pause{display:inline-block;-webkit-transform:scale(.6);transform:scale(.6);cursor:pointer}.score-container.component-auto-list .list .list-item .icon-pause:hover{opacity:.8}.score-container.component-auto-list .list .list-item a:hover{color:#1295db;text-decoration:underline}.score-container.component-auto-list .list .list-item .num{float:left;width:35px;height:32px;font-size:16px;margin-left:-35px;text-align:center;color:#ef496f}.score-container.component-auto-list .list .list-item .difficulty-degree{width:150px;float:right;text-align:left}.score-container.component-auto-list .list .list-item .difficulty-degree .icon-heartbeat{display:inline-block;-webkit-transform:scale(.7);transform:scale(.7);margin-left:-6px}.score-container.component-auto-list .player-view{font-size:16px;width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-auto-list .player-view .top-bar .return-btn{cursor:pointer;width:80px;height:32px;line-height:32px;font-size:14px;color:#1f6fb5}.score-container.component-auto-list .player-view .top-bar .return-btn:hover{text-decoration:underline;color:#1295db}.score-container.component-auto-list .player-view .top-bar h2{font-size:18px}.score-container.component-auto-list .player-view .cd-box{width:400px;margin:15% auto 10px;padding:10px;border-radius:15px;position:relative}.score-container.component-auto-list .player-view .cd-box .cd-reader-1{width:100px;height:10px;border-radius:5px;background:-webkit-gradient(linear,left top,right top,from(#333),color-stop(#aaa),to(#333));background:linear-gradient(90deg,#333,#aaa,#333);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(60deg);transform:rotate(60deg);position:absolute;top:10px;left:10px}.score-container.component-auto-list .player-view .cd-box .cd-reader-1:before{content:"";width:20px;height:20px;border-radius:50%;background:#888;position:absolute;top:-6px;left:-6px;border:2px solid #444}.score-container.component-auto-list .player-view .cd-box .cd-reader-2{width:80px;height:10px;border-radius:5px;background:-webkit-gradient(linear,left top,right top,from(#333),color-stop(#666),to(#888));background:linear-gradient(90deg,#333,#666,#888);-webkit-transform:rotate(20deg);transform:rotate(20deg);position:absolute;top:105px;left:50px;z-index:10}.score-container.component-auto-list .player-view .cd-box .cd{width:220px;height:220px;margin:0 auto;border-radius:50%;border:5px solid #ccc;background:-webkit-gradient(linear,left top,right top,from(#000),color-stop(#555),to(#000));background:linear-gradient(90deg,#000,#555,#000);position:relative}.score-container.component-auto-list .player-view .cd-box .cd .cd-inner{width:70px;height:70px;line-height:65px;border-radius:50%;border:3px solid #aaa;background:#cd3f11;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;text-align:center;color:#fff;font-size:12px}.score-container.component-auto-list .player-view .music-name{text-align:center;padding:15px 0 5px;font-size:20px;font-weight:700}.score-container.component-auto-list .player-view .difficulty-degree{text-align:center}.score-container.component-auto-list .player-view .difficulty-degree .icon-heartbeat{display:inline-block;-webkit-transform:scale(.7);transform:scale(.7);margin-left:-6px}.score-container.component-auto-list .player-view .control-bar{width:100%;text-align:center;padding:15px 0}.score-container.component-auto-list .player-view .control-bar .stop-btn{display:inline-block;width:70px;height:30px;line-height:30px;background:#ef496f;color:#fff;cursor:pointer}.score-container.component-auto-list .player-view .control-bar .stop-btn:hover{opacity:.8}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}', ""])
    }, HhN8: function (t, e) {
        !function (e) {
            "use strict";

            function i(t, e, i, n) {
                var a = e && e.prototype instanceof o ? e : o, r = Object.create(a.prototype), s = new h(n || []);
                return r._invoke = u(t, i, s), r
            }

            function n(t, e, i) {
                try {
                    return {type: "normal", arg: t.call(e, i)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function o() {
            }

            function a() {
            }

            function r() {
            }

            function s(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function l(t) {
                function e(i, o, a, r) {
                    var s = n(t[i], t, o);
                    if ("throw" !== s.type) {
                        var l = s.arg, u = l.value;
                        return u && "object" == typeof u && _.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                            e("next", t, a, r)
                        }, function (t) {
                            e("throw", t, a, r)
                        }) : Promise.resolve(u).then(function (t) {
                            l.value = t, a(l)
                        }, r)
                    }
                    r(s.arg)
                }

                function i(t, i) {
                    function n() {
                        return new Promise(function (n, o) {
                            e(t, i, n, o)
                        })
                    }

                    return o = o ? o.then(n, n) : n()
                }

                var o;
                this._invoke = i
            }

            function u(t, e, i) {
                var o = k;
                return function (a, r) {
                    if (o === x) throw new Error("Generator is already running");
                    if (o === P) {
                        if ("throw" === a) throw r;
                        return m()
                    }
                    for (i.method = a, i.arg = r; ;) {
                        var s = i.delegate;
                        if (s) {
                            var l = c(s, i);
                            if (l) {
                                if (l === F) continue;
                                return l
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                            if (o === k) throw o = P, i.arg;
                            i.dispatchException(i.arg)
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        o = x;
                        var u = n(t, e, i);
                        if ("normal" === u.type) {
                            if (o = i.done ? P : O, u.arg === F) continue;
                            return {value: u.arg, done: i.done}
                        }
                        "throw" === u.type && (o = P, i.method = "throw", i.arg = u.arg)
                    }
                }
            }

            function c(t, e) {
                var i = t.iterator[e.method];
                if (i === y) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = y, c(t, e), "throw" === e.method)) return F;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return F
                }
                var o = n(i, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, F;
                var a = o.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = y), e.delegate = null, F) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, F)
            }

            function f(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function d(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function h(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(f, this), this.reset(!0)
            }

            function p(t) {
                if (t) {
                    var e = t[b];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1, n = function e() {
                            for (; ++i < t.length;) if (_.call(t, i)) return e.value = t[i], e.done = !1, e;
                            return e.value = y, e.done = !0, e
                        };
                        return n.next = n
                    }
                }
                return {next: m}
            }

            function m() {
                return {value: y, done: !0}
            }

            var y, g = Object.prototype, _ = g.hasOwnProperty, v = "function" == typeof Symbol ? Symbol : {},
                b = v.iterator || "@@iterator", S = v.asyncIterator || "@@asyncIterator",
                T = v.toStringTag || "@@toStringTag", w = "object" == typeof t, A = e.regeneratorRuntime;
            if (A) return void (w && (t.exports = A));
            A = e.regeneratorRuntime = w ? t.exports : {}, A.wrap = i;
            var k = "suspendedStart", O = "suspendedYield", x = "executing", P = "completed", F = {}, C = {};
            C[b] = function () {
                return this
            };
            var D = Object.getPrototypeOf, E = D && D(D(p([])));
            E && E !== g && _.call(E, b) && (C = E);
            var U = r.prototype = o.prototype = Object.create(C);
            a.prototype = U.constructor = r, r.constructor = a, r[T] = a.displayName = "GeneratorFunction", A.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name))
            }, A.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r, T in t || (t[T] = "GeneratorFunction")), t.prototype = Object.create(U), t
            }, A.awrap = function (t) {
                return {__await: t}
            }, s(l.prototype), l.prototype[S] = function () {
                return this
            }, A.AsyncIterator = l, A.async = function (t, e, n, o) {
                var a = new l(i(t, e, n, o));
                return A.isGeneratorFunction(e) ? a : a.next().then(function (t) {
                    return t.done ? t.value : a.next()
                })
            }, s(U), U[T] = "Generator", U[b] = function () {
                return this
            }, U.toString = function () {
                return "[object Generator]"
            }, A.keys = function (t) {
                var e = [];
                for (var i in t) e.push(i);
                return e.reverse(), function i() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return i.value = n, i.done = !1, i
                    }
                    return i.done = !0, i
                }
            }, A.values = p, h.prototype = {
                constructor: h, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(d), !t) for (var e in this) "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = y)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0], e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    function e(e, n) {
                        return a.type = "throw", a.arg = t, i.next = e, n && (i.method = "next", i.arg = y), !!n
                    }

                    if (this.done) throw t;
                    for (var i = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n], a = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var r = _.call(o, "catchLoc"), s = _.call(o, "finallyLoc");
                            if (r && s) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (r) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var n = this.tryEntries[i];
                        if (n.tryLoc <= this.prev && _.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, F) : this.complete(a)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), F
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), d(i), F
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.tryLoc === t) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                d(i)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, i) {
                    return this.delegate = {
                        iterator: p(t),
                        resultName: e,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = y), F
                }
            }
        }(function () {
            return this
        }() || Function("return this")())
    }, HmLE: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, '.component-page-header{width:100%;height:60px;line-height:60px;margin:10px auto;padding:0 5%}.component-page-header .trade-mark{display:block;width:350px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;float:left}.component-page-header .trade-mark .icon-piano{display:block;-webkit-transform:scale(.7);transform:scale(.7);-webkit-transform-origin:50% 30%;transform-origin:50% 30%}.component-page-header .trade-mark .trade-mark-txt{font-size:28px;font-weight:500;color:#000;margin:0 0 0 10px}.component-page-header .trade-mark .trade-mark-txt .trade-mark-txt--en{font-style:italic;font-size:20px;color:#666;margin-left:7px}.component-page-header .menu{float:right;height:45px;line-height:45px;margin-top:5px}.component-page-header .menu .menu-item{display:inline-block;width:80px;margin:0 7px;text-align:center;position:relative;cursor:pointer}.component-page-header .menu .menu-item:before{height:1px;-webkit-transform:scaleX(1);transform:scaleX(1);background:#ccc}.component-page-header .menu .menu-item:after,.component-page-header .menu .menu-item:before{content:"";width:100%;position:absolute;left:0;bottom:0;-webkit-transition:.3s;transition:.3s}.component-page-header .menu .menu-item:after{height:5px;-webkit-transform:scaleX(0);transform:scaleX(0);background:#1295db}.component-page-header .menu .menu-item-active:after,.component-page-header .menu .menu-item:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}', ""])
    }, IISb: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, ".component-commodity-card{display:inline-block;width:100%;height:auto;font-size:14px;text-align:left;background:#fff}.component-commodity-card .pic-wrap{width:100%;padding:10px 20px;overflow:hidden}.component-commodity-card .pic-wrap .pic{width:100%}.component-commodity-card .card-section{padding:5px 8px}.component-commodity-card .commodity-name{display:block;width:100%;font-weight:700;text-overflow:ellipsis;overflow:hidden;word-break:break-all;white-space:nowrap}.component-commodity-card .commodity-name:hover{text-decoration:underline}.component-commodity-card .em{color:#ef496f;font-weight:700}.component-commodity-card .price{float:left}.component-commodity-card .price .price-info{font-size:12px;color:#888}.component-commodity-card .sale-count{float:right}.component-commodity-card .seller-name{font-size:12px;color:#888}.component-commodity-card .btn-wrap{text-align:center;padding:5px 0 15px}.component-commodity-card .link-btn{display:inline-block;width:100px;height:26px;line-height:26px;border-radius:13px;background:#ef496f;color:#fff;text-align:center;cursor:pointer}.component-commodity-card .link-btn:hover{opacity:.8}", ""])
    }, IRP5: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, ".component-commodity-list{width:100%;height:auto;margin:30px auto;padding:0;text-align:center;letter-spacing:-20px;background:hsla(0,0%,100%,.6);border-radius:5px;overflow:visible;white-space:nowrap;position:relative}.component-commodity-list .scroll-wrap{width:100%;padding:20px 0;overflow:scroll}.component-commodity-list .card-wrap{display:inline-block;width:20%;margin:0 2.5%;-webkit-box-shadow:1px 1px 10px 1px #ddd;box-shadow:1px 1px 10px 1px #ddd;border-radius:5px;overflow:hidden;letter-spacing:normal}.component-commodity-list .arrow{width:35px;height:35px;border-top:6px solid rgba(239,73,111,.5);border-right:6px solid rgba(239,73,111,.5);position:absolute;top:calc(50% - 17.5px);cursor:pointer}.component-commodity-list .arrow:hover{border-color:rgba(239,73,111,.8)}.component-commodity-list .left-arrow{left:-10px;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.component-commodity-list .right-arrow{right:-10px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}", ""])
    }, IVAj: function (t, e, i) {
        "use strict";

        function n(t) {
            if (!Array.isArray(t)) throw new TypeError("Expected value to be an array");
            return o(t)
        }

        function o(t) {
            return s(t, [])
        }

        function a(t, e) {
            if (!Array.isArray(t)) throw new TypeError("Expected value to be an array");
            return r(t, e)
        }

        function r(t, e) {
            if ("number" != typeof e) throw new TypeError("Expected the depth to be a number");
            return l(t, [], e)
        }

        function s(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                Array.isArray(n) ? s(n, e) : e.push(n)
            }
            return e
        }

        function l(t, e, i) {
            i--;
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                i > -1 && Array.isArray(o) ? l(o, e, i) : e.push(o)
            }
            return e
        }

        t.exports = n, t.exports.from = o, t.exports.depth = a, t.exports.fromDepth = r
    }, Ibhu: function (t, e, i) {
        var n = i("D2L2"), o = i("TcQ7"), a = i("vFc/")(!1), r = i("ax3d")("IE_PROTO");
        t.exports = function (t, e) {
            var i, s = o(t), l = 0, u = [];
            for (i in s) i != r && n(s, i) && u.push(i);
            for (; e.length > l;) n(s, i = e[l++]) && (~a(u, i) || u.push(i));
            return u
        }
    }, "Is+7": function (t, e) {
        function i(t, e) {
            if ("object" != typeof t) throw"Invalid MIDI data";
            e = e || {};
            var i, a = t.header || {}, s = t.tracks || [], l = s.length, u = new r;
            for (n(u, a, l), i = 0; i < l; i++) o(u, s[i], e);
            return u.buffer
        }

        function n(t, e, i) {
            var n = null == e.format ? 1 : e.format, o = 128;
            e.timeDivision ? o = e.timeDivision : e.ticksPerFrame && e.framesPerSecond ? o = -(255 & e.framesPerSecond) << 8 | 255 & e.ticksPerFrame : e.ticksPerBeat && (o = 32767 & e.ticksPerBeat);
            var a = new r;
            a.writeUInt16(n), a.writeUInt16(i), a.writeUInt16(o), t.writeChunk("MThd", a.buffer)
        }

        function o(t, e, i) {
            var n, o = new r, s = e.length, l = null;
            for (n = 0; n < s; n++) !1 !== i.running && (i.running || e[n].running) || (l = null), l = a(o, e[n], l, i.useByte9ForNoteOff);
            t.writeChunk("MTrk", o.buffer)
        }

        function a(t, e, i, n) {
            var o = e.type, a = e.deltaTime, r = e.text || "", s = e.data || [], l = null;
            switch (t.writeVarInt(a), o) {
                case"sequenceNumber":
                    t.writeUInt8(255), t.writeUInt8(0), t.writeVarInt(2), t.writeUInt16(e.number);
                    break;
                case"text":
                    t.writeUInt8(255), t.writeUInt8(1), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"copyrightNotice":
                    t.writeUInt8(255), t.writeUInt8(2), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"trackName":
                    t.writeUInt8(255), t.writeUInt8(3), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"instrumentName":
                    t.writeUInt8(255), t.writeUInt8(4), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"lyrics":
                    t.writeUInt8(255), t.writeUInt8(5), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"marker":
                    t.writeUInt8(255), t.writeUInt8(6), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"cuePoint":
                    t.writeUInt8(255), t.writeUInt8(7), t.writeVarInt(r.length), t.writeString(r);
                    break;
                case"channelPrefix":
                    t.writeUInt8(255), t.writeUInt8(32), t.writeVarInt(1), t.writeUInt8(e.channel);
                    break;
                case"portPrefix":
                    t.writeUInt8(255), t.writeUInt8(33), t.writeVarInt(1), t.writeUInt8(e.port);
                    break;
                case"endOfTrack":
                    t.writeUInt8(255), t.writeUInt8(47), t.writeVarInt(0);
                    break;
                case"setTempo":
                    t.writeUInt8(255), t.writeUInt8(81), t.writeVarInt(3), t.writeUInt24(e.microsecondsPerBeat);
                    break;
                case"smpteOffset":
                    t.writeUInt8(255), t.writeUInt8(84), t.writeVarInt(5);
                    var u = {24: 0, 25: 32, 29: 64, 30: 96}, c = 31 & e.hour | u[e.frameRate];
                    t.writeUInt8(c), t.writeUInt8(e.min), t.writeUInt8(e.sec), t.writeUInt8(e.frame), t.writeUInt8(e.subFrame);
                    break;
                case"timeSignature":
                    t.writeUInt8(255), t.writeUInt8(88), t.writeVarInt(4), t.writeUInt8(e.numerator);
                    var f = 255 & Math.floor(Math.log(e.denominator) / Math.LN2);
                    t.writeUInt8(f), t.writeUInt8(e.metronome), t.writeUInt8(e.thirtyseconds || 8);
                    break;
                case"keySignature":
                    t.writeUInt8(255), t.writeUInt8(89), t.writeVarInt(2), t.writeInt8(e.key), t.writeUInt8(e.scale);
                    break;
                case"sequencerSpecific":
                    t.writeUInt8(255), t.writeUInt8(127), t.writeVarInt(s.length), t.writeBytes(s);
                    break;
                case"unknownMeta":
                    null != e.metatypeByte && (t.writeUInt8(255), t.writeUInt8(e.metatypeByte), t.writeVarInt(s.length), t.writeBytes(s));
                    break;
                case"sysEx":
                    t.writeUInt8(240), t.writeVarInt(s.length), t.writeBytes(s);
                    break;
                case"endSysEx":
                    t.writeUInt8(247), t.writeVarInt(s.length), t.writeBytes(s);
                    break;
                case"noteOff":
                    l = (!1 !== n && e.byte9 || n && 0 == e.velocity ? 144 : 128) | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
                    break;
                case"noteOn":
                    l = 144 | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
                    break;
                case"noteAftertouch":
                    l = 160 | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.noteNumber), t.writeUInt8(e.amount);
                    break;
                case"controller":
                    l = 176 | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.controllerType), t.writeUInt8(e.value);
                    break;
                case"programChange":
                    l = 192 | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.programNumber);
                    break;
                case"channelAftertouch":
                    l = 208 | e.channel, l !== i && t.writeUInt8(l), t.writeUInt8(e.amount);
                    break;
                case"pitchBend":
                    l = 224 | e.channel, l !== i && t.writeUInt8(l);
                    var d = 8192 + e.value, h = 127 & d, p = d >> 7 & 127;
                    t.writeUInt8(h), t.writeUInt8(p);
                    break;
                default:
                    throw"Unrecognized event type: " + o
            }
            return l
        }

        function r() {
            this.buffer = []
        }

        r.prototype.writeUInt8 = function (t) {
            this.buffer.push(255 & t)
        }, r.prototype.writeInt8 = r.prototype.writeUInt8, r.prototype.writeUInt16 = function (t) {
            var e = t >> 8 & 255, i = 255 & t;
            this.writeUInt8(e), this.writeUInt8(i)
        }, r.prototype.writeInt16 = r.prototype.writeUInt16, r.prototype.writeUInt24 = function (t) {
            var e = t >> 16 & 255, i = t >> 8 & 255, n = 255 & t;
            this.writeUInt8(e), this.writeUInt8(i), this.writeUInt8(n)
        }, r.prototype.writeInt24 = r.prototype.writeUInt24, r.prototype.writeUInt32 = function (t) {
            var e = t >> 24 & 255, i = t >> 16 & 255, n = t >> 8 & 255, o = 255 & t;
            this.writeUInt8(e), this.writeUInt8(i), this.writeUInt8(n), this.writeUInt8(o)
        }, r.prototype.writeInt32 = r.prototype.writeUInt32, r.prototype.writeBytes = function (t) {
            this.buffer = this.buffer.concat(Array.prototype.slice.call(t, 0))
        }, r.prototype.writeString = function (t) {
            var e, i = t.length, n = [];
            for (e = 0; e < i; e++) n.push(t.codePointAt(e));
            this.writeBytes(n)
        }, r.prototype.writeVarInt = function (t) {
            if (t < 0) throw"Cannot write negative variable-length integer";
            if (t <= 127) this.writeUInt8(t); else {
                var e = t, i = [];
                for (i.push(127 & e), e >>= 7; e;) {
                    var n = 127 & e | 128;
                    i.push(n), e >>= 7
                }
                this.writeBytes(i.reverse())
            }
        }, r.prototype.writeChunk = function (t, e) {
            this.writeString(t), this.writeUInt32(e.length), this.writeBytes(e)
        }, t.exports = i
    }, "J1/g": function (t, e) {
        function i(t) {
            var e = new a(t), i = e.readChunk();
            if ("MThd" != i.id) throw"Bad MIDI file.  Expected 'MHdr', got: '" + i.id + "'";
            for (var r = n(i.data), s = [], l = 0; !e.eof() && l < r.numTracks; l++) {
                var u = e.readChunk();
                if ("MTrk" != u.id) throw"Bad MIDI file.  Expected 'MTrk', got: '" + u.id + "'";
                var c = o(u.data);
                s.push(c)
            }
            return {header: r, tracks: s}
        }

        function n(t) {
            var e = new a(t), i = e.readUInt16(), n = e.readUInt16(), o = {format: i, numTracks: n}, r = e.readUInt16();
            return 32768 & r ? (o.framesPerSecond = 256 - (r >> 8), o.ticksPerFrame = 255 & r) : o.ticksPerBeat = r, o
        }

        function o(t) {
            for (var e = new a(t), i = []; !e.eof();) {
                var n = function () {
                    var t = {};
                    t.deltaTime = e.readVarInt();
                    var i = e.readUInt8();
                    if (240 == (240 & i)) {
                        if (255 !== i) {
                            if (240 == i) {
                                t.type = "sysEx";
                                var n = e.readVarInt();
                                return t.data = e.readBytes(n), t
                            }
                            if (247 == i) {
                                t.type = "endSysEx";
                                var n = e.readVarInt();
                                return t.data = e.readBytes(n), t
                            }
                            throw"Unrecognised MIDI event type byte: " + i
                        }
                        t.meta = !0;
                        var a = e.readUInt8(), n = e.readVarInt();
                        switch (a) {
                            case 0:
                                if (t.type = "sequenceNumber", 2 !== n) throw"Expected length for sequenceNumber event is 2, got " + n;
                                return t.number = e.readUInt16(), t;
                            case 1:
                                return t.type = "text", t.text = e.readString(n), t;
                            case 2:
                                return t.type = "copyrightNotice", t.text = e.readString(n), t;
                            case 3:
                                return t.type = "trackName", t.text = e.readString(n), t;
                            case 4:
                                return t.type = "instrumentName", t.text = e.readString(n), t;
                            case 5:
                                return t.type = "lyrics", t.text = e.readString(n), t;
                            case 6:
                                return t.type = "marker", t.text = e.readString(n), t;
                            case 7:
                                return t.type = "cuePoint", t.text = e.readString(n), t;
                            case 32:
                                if (t.type = "channelPrefix", 1 != n) throw"Expected length for channelPrefix event is 1, got " + n;
                                return t.channel = e.readUInt8(), t;
                            case 33:
                                if (t.type = "portPrefix", 1 != n) throw"Expected length for portPrefix event is 1, got " + n;
                                return t.port = e.readUInt8(), t;
                            case 47:
                                if (t.type = "endOfTrack", 0 != n) throw"Expected length for endOfTrack event is 0, got " + n;
                                return t;
                            case 81:
                                if (t.type = "setTempo", 3 != n) throw"Expected length for setTempo event is 3, got " + n;
                                return t.microsecondsPerBeat = e.readUInt24(), t;
                            case 84:
                                if (t.type = "smpteOffset", 5 != n) throw"Expected length for smpteOffset event is 5, got " + n;
                                var r = e.readUInt8(), s = {0: 24, 32: 25, 64: 29, 96: 30};
                                return t.frameRate = s[96 & r], t.hour = 31 & r, t.min = e.readUInt8(), t.sec = e.readUInt8(), t.frame = e.readUInt8(), t.subFrame = e.readUInt8(), t;
                            case 88:
                                if (t.type = "timeSignature", 4 != n) throw"Expected length for timeSignature event is 4, got " + n;
                                return t.numerator = e.readUInt8(), t.denominator = 1 << e.readUInt8(), t.metronome = e.readUInt8(), t.thirtyseconds = e.readUInt8(), t;
                            case 89:
                                if (t.type = "keySignature", 2 != n) throw"Expected length for keySignature event is 2, got " + n;
                                return t.key = e.readInt8(), t.scale = e.readUInt8(), t;
                            case 127:
                                return t.type = "sequencerSpecific", t.data = e.readBytes(n), t;
                            default:
                                return t.type = "unknownMeta", t.data = e.readBytes(n), t.metatypeByte = a, t
                        }
                    } else {
                        var l;
                        if (0 == (128 & i)) {
                            if (null === o) throw"Running status byte encountered before status byte";
                            l = i, i = o, t.running = !0
                        } else l = e.readUInt8(), o = i;
                        var u = i >> 4;
                        switch (t.channel = 15 & i, u) {
                            case 8:
                                return t.type = "noteOff", t.noteNumber = l, t.velocity = e.readUInt8(), t;
                            case 9:
                                var c = e.readUInt8();
                                return t.type = 0 === c ? "noteOff" : "noteOn", t.noteNumber = l, t.velocity = c, 0 === c && (t.byte9 = !0), t;
                            case 10:
                                return t.type = "noteAftertouch", t.noteNumber = l, t.amount = e.readUInt8(), t;
                            case 11:
                                return t.type = "controller", t.controllerType = l, t.value = e.readUInt8(), t;
                            case 12:
                                return t.type = "programChange", t.programNumber = l, t;
                            case 13:
                                return t.type = "channelAftertouch", t.amount = l, t;
                            case 14:
                                return t.type = "pitchBend", t.value = l + (e.readUInt8() << 7) - 8192, t;
                            default:
                                throw"Unrecognised MIDI event type: " + u
                        }
                    }
                }();
                i.push(n)
            }
            return i;
            var o
        }

        function a(t) {
            this.buffer = t, this.bufferLen = this.buffer.length, this.pos = 0
        }

        a.prototype.eof = function () {
            return this.pos >= this.bufferLen
        }, a.prototype.readUInt8 = function () {
            var t = this.buffer[this.pos];
            return this.pos += 1, t
        }, a.prototype.readInt8 = function () {
            var t = this.readUInt8();
            return 128 & t ? t - 256 : t
        }, a.prototype.readUInt16 = function () {
            return (this.readUInt8() << 8) + this.readUInt8()
        }, a.prototype.readInt16 = function () {
            var t = this.readUInt16();
            return 32768 & t ? t - 65536 : t
        }, a.prototype.readUInt24 = function () {
            return (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
        }, a.prototype.readInt24 = function () {
            var t = this.readUInt24();
            return 8388608 & t ? t - 16777216 : t
        }, a.prototype.readUInt32 = function () {
            return (this.readUInt8() << 24) + (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
        }, a.prototype.readBytes = function (t) {
            var e = this.buffer.slice(this.pos, this.pos + t);
            return this.pos += t, e
        }, a.prototype.readString = function (t) {
            var e = this.readBytes(t);
            return String.fromCharCode.apply(null, e)
        }, a.prototype.readVarInt = function () {
            for (var t = 0; !this.eof();) {
                var e = this.readUInt8();
                if (!(128 & e)) return t + e;
                t += 127 & e, t <<= 7
            }
            return t
        }, a.prototype.readChunk = function () {
            var t = this.readString(4), e = this.readUInt32();
            return {id: t, length: e, data: this.readBytes(e)}
        }, t.exports = i
    }, KUTN: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = new WeakMap, o = function () {
            function t(t, e) {
                n.set(this, e), this.ticks = t.absoluteTime, this.value = t.value
            }

            return Object.defineProperty(t.prototype, "time", {
                get: function () {
                    return n.get(this).ticksToSeconds(this.ticks)
                }, set: function (t) {
                    var e = n.get(this);
                    this.ticks = e.secondsToTicks(t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.toJSON = function () {
                return {ticks: this.ticks, time: this.time, value: this.value}
            }, t
        }();
        e.PitchBend = o
    }, Kh4W: function (t, e, i) {
        e.f = i("dSzd")
    }, Kh5d: function (t, e, i) {
        var n = i("sB3e"), o = i("PzxK");
        i("uqUo")("getPrototypeOf", function () {
            return function (t) {
                return o(n(t))
            }
        })
    }, L42u: function (t, e, i) {
        var n, o, a, r = i("+ZMJ"), s = i("knuC"), l = i("RPLV"), u = i("ON07"), c = i("7KvD"), f = c.process,
            d = c.setImmediate, h = c.clearImmediate, p = c.MessageChannel, m = c.Dispatch, y = 0, g = {},
            _ = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e()
                }
            }, v = function (t) {
                _.call(t.data)
            };
        d && h || (d = function (t) {
            for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
            return g[++y] = function () {
                s("function" == typeof t ? t : Function(t), e)
            }, n(y), y
        }, h = function (t) {
            delete g[t]
        }, "process" == i("R9M2")(f) ? n = function (t) {
            f.nextTick(r(_, t, 1))
        } : m && m.now ? n = function (t) {
            m.now(r(_, t, 1))
        } : p ? (o = new p, a = o.port2, o.port1.onmessage = v, n = r(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (n = function (t) {
            c.postMessage(t + "", "*")
        }, c.addEventListener("message", v, !1)) : n = "onreadystatechange" in u("script") ? function (t) {
            l.appendChild(u("script")).onreadystatechange = function () {
                l.removeChild(this), _.call(t)
            }
        } : function (t) {
            setTimeout(r(_, t, 1), 0)
        }), t.exports = {set: d, clear: h}
    }, LAuN: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABiCAMAAACRZYZ7AAAC+lBMVEUAAADT1djq6+zU1ti5vcIqUIIlSn0tVYS8wMS8wMUvU4TZ290pT4ErUIJsgqO7v8MUTYMpT4IqUIIqUILJzM3R0dpLaZIrUIK9wsbs7O28wcUoT4IrUYMkRH0nUIO9wcW9wcUqT4Lq6+wpUILp6uu9wsbs7e6/wsfr7Ozq6+y8wcW9wcYpT4K9wsYoT4G1ur7q6+wAKHUqUILt7u/r7O29wsW8wMTp6uwpT4Lr6+y+wsbp6uy7v8W8wMXp6eopUILp6uvp6+u9wcTp6+snT4Gcpbfu7+/o7OzS19wpT4K9wcQAO3nY2tyeqbuOma3s7u4oToEAAFhtgaAyVIQUT4Tb3d82V4UANnrEyMuttcGBk6tabJF+iKMADm/p6uv////n6er+/v6h0v6j1P/r7O3q6+zt7e78/f6l1v/u7+/m6OkAQnwsVIgAPnrx8vHw8PCm2P8uVIUAQ34iSn2n2f8qUobh4+a6vsIcSn8lTIAuUoPCxck3VoU0VIMpTYAfR3wAN3nz9PXd4eUxU4QaRXoANHj5+/z19vfY3eK9wcUAOnvj5urDyMwyVogBRX83XY33+PouV4svT4Cxusm/w8e8wMS7v8MAPn0VQXfP0tVSeadAZpU5WYgQRHvv8fTAyNO1vswASIEIRHybzPfFzdnLz9KTobd+j6onSXuYyPTf4+jFyc2lscOGla5geJxFa5sXSH4fQnfV2uHR1t7X2t3J0NrHy86tt8d3iqdyhaRlfJ5acpdUbpUzWoskUIQOSYAAMHeez/uGtN/O09tfiLUeU4gDTIQAIHLr7vPU19q4wM2qs8J/i6RPbpcfToIAO3ip2//n6/CUxPC9xdGircCJmbFrf6A7YJAAKXWOvOjZ3uaBrtrEy9WPnrYLPncTPXSRwOzc3uB8qNS4wtFpk79lj7tDY48EN3LJzdF4pNB0n8uptceeqbxagq9LcqFAW4fIzM+ap7yKuONvmsaWpLuapLdLZI1/k68AEW+r1v20wNBtlsNslL+ZqcAUuoz/AAAAXnRSTlMAAvsF/f4OCPzafA7HcP74/vS/rRcK/qIxvIhFOh4U/ejap5liRTYi4czBrWJcT/318bZrT0/y7u7Vz4CAai3rxLKShSrGiiMdzXb52NWjmo496+rp6NHDvrqugm9sQn89ewAAEgRJREFUaN61mgVcG2cUwCEkG6wrsK3t1lknlXXWbmvn7u4uIcDdESEJJBCFJEQIEoK7u1uRQtHiMmAtXkptdVttvv1+e98lkIY1+3VsfRBCjtz98+R7733vsPtPYm93/43w879dwyz/wKB5/0eKgwVmk+Gr8b578RTEcLhp89NPP7NmGVzFFkOp1fgvngKn3XSfvNRgMNTf8aYDvLwkY2/KoT2+pC6LY9g/7XLGkYok7sy9N8GBhW94kOablJLr04Uoi9XjxfpQF3mtiL0/n+pYf8cCCry69TpfbUox09Oz64gvWGxRkAdKHalH9W5IRAmOhicdFrzjtju9lZXFPh4enp6HkkAX+0UwljjJqfXBbu4khU2Nlz+DVLG3BPXD3tLJnT4engD5AyA3Xr0IyJpSx9AgYJikn1p6r52Dg4P9fOAt9ZZJz/khBvMQmOsyF4u9vRXkZjk12cyAJx5Vfsc68urLly1bstze7qo7I46c9yEZB/doLm9B2ls9IblPThUhgAkSVRr66ANrV7901wsrn1+/8oW7Xv3StaiymAmmYp6H4EKMy1FiyZrNy8jfLBC227wE51NXfbKR7xWs1wcFBemD9dskyuPIWD4HtLLLY8Cyu9fFcZXLk2ssB1+UU/dbNNHLxXI2izIn2G5VzGSxp6cHszhS2nIDXOIyMA88WhovFofK4252mI/gemq+BcKiJhgY9HnBxnOEXUwEOZQU8dnl+WONPI4al5xsoK46+iYEDnls3aPx4nA3d3A9PLzOiBOSMQsFa2rTdjDBWPsiY3qcHkFJ57a7b/tHFloS+VHu7sH91NBHYWWbKC8edYkjTJp49VPjQ0X4PANX/yShFQPE78BeTmEGb/1au9s+jb72dtsUsExoQmkwaZZkl+Q35yDr7jA4xquDooL1xFFqKLXfwmAQuyOUlblM8HtXdfZWHpvHeu/rtwL8r73KFgXMc7NhgwjsDt90x9L7QHfT4TWPhq6C3JhfKhbHi5OBMQ9hZbUqU7aDR3JPayPzCDBj1BPvPpTmjSi2IPflb8CBAMJfJX9yyRxk2dul4oR4MVUMIQF6XAw50Vbd5YFiKzV9xRbkKzZ/4ysPpZG62IC8WLoh3KQJw9Fg0gQerz3BEyUb4uND40qTwR+XgvgUR6Y3h+AMOIIR2CsP2bQYHHwmLgFSIZJkl/ybzYy19+gpOMbev3+/iE0Awwqy1dWsSSWpCYOf2cnC+e+Axa4HyiUhy5ziqMlB7u5REESr1sAB0O7Ze4IoOJ1Bx0DgaQFk4CKf7CbYWGZPcw3BQBR/m5TNhjhqfH5yKNUx/2kT43VgmC4IMn9xs7CxvDRTdG0/Vd2zlYWHRGolJAUsZoMC8oyjIR5iSC5/ETyCisl6PTCshEHHMRafh4TPZ/9U5Q/p0cPv2N6wH3lsfGBYltNcw6ITtilk7loVGrrKabM5C90VRVmAwAmMUVc2W/7tt9+Wj58dbZJop2Exftch5DaW4HRWVpsmvbmTIB57960A7+tR/TK51joL2y/b/MA6BzuTsR7hU6wRDFZ4/1iTrE3A4QhAsodlMu1xgDB3phb11PEZdCJWEJgOFgta+dVwxDUmxsvwbH+pemJy+kYWxVoN1u6GbI5EIeS29/7yS6+OI6TJlCkoQfp1FbVvJRhA2SoIzGmuowS/+o2JAT1A9N86JXsQM+4FvTWDKDnrygkQcNqaZrM6Q0Lqto4PSaTSyGIEmaEJh0QYHVGMAVOz8NtauATJ8A2wVZTh4KYgawarxlmVxs2eOLEjystcwoJ3VEikx/ygMG6fVHAzMQYK9hO6RhFO4T0Pl0AMb5rKFgUi6wkrjzD4oy3pgbqGPBPA3cuLTEDf9xad8gRhHlRWOWMEUHB6bC0Lwp2/2m45YgjTynUWygLIamtFwKUyyfBAFMo67oBA4u7lpu4J9J4GVZg7W2m08U4CLVkWDgyK/nnEiIgR1LldmArwRmXz75D1fCtbDXb/NLJCDTUFvkEHk3h5BZeH7T2OGgnPg3s1qh8KB0RsFoEjIfSbPvgoggYMN7ezvRqg/D1bbqJgFzNiwwIqnHeADmSR7CtR71KrSzKQvRJjUnN9YD1OD8sCJMa2yPLRTnV4eHjJlrwP29KquuvIE05wgHLVgghzsFqHDCIvO5BbEeVmQmwZHApr750K69k2uLvPa5sxaYaJ3AINtywnXchpd50oLCxsGDJKaO0rQkxpPRMgUDGtGyNI8BmUeQYmqpBUDfW5BSPErnL/KaWSI+BwtdopQXNBo0Ra6YGiuMM/pqqgUWPkatNHOFyuksOJLMswfa7v22WIYX/xely+7qrVwRSGxVhnVYGtJeAOKAS/uXJjBC3bvgWp6A5LV4bRZDTtMbL1ShFy/3TbETve1N0jEPS0NJ7oc0N6ACMs0PsNa8aym+91crqjloHPG6uuJyAsCxjQrozpNBLXgrwSPo/PU48ONvSoqmga7entKIpnlNLDqP3fUdOZl9e5JRhFOnz9nQEl3eloaWhcnPjMXBnEGT9zBROmxv4CxNhEHcbCUabH+bySmthtRolmz4Hv0IJMVRi/vzj2AAIvsoBhbSuoXGdcHA1ycQL1jNle2BZXjSCPVOR73Q/d5eEE3Vxb2HQ6C2NnNg+j0gWU49WJheh9XkgAgR59BbqA6IVZ/+Z8l3pcH8SWJ4hrMQZprbM5kgovpHpJhGykMBwzw/mD4zgOHF5nGi3pHIrifa0x3ruAAu81P3ZkTY5A8C5gLHeKi88w7aqoyWaXTLTpvif1n1VJtqkxlDrgBzYmaC/HYXGzWYWC6kMQX1Agi7izUW5zElV3ckWvIuK6pQsKit3roQkGd+QuXhy1no2j+K35SZFIBxu47TIGdu9GaQlTAwobV/2gKmRA+0BkDiuic1HtOjaiGW5uvBCbl5f3258NTa0qaaTshpetGcgljgly03ZHbobws7qVFRnIhVm9xnKCZDhX7CIY+LgOKKAUzmiWCGdQSzwdqZDlCIwcJAJjeo7O9eEHLQiLuZ6MWzVnrnzSubwyo6oAeV2/Tdk6gBRhNOo4EyEEHZtFFDZQLnCFp3zQTiglSRYp4HI4OTkcTlh3Y+bTFoSV4+tdDIwoL5YhIWE/xkCQk4m9sUiRjGjJT2ocxfSgMZA7EYIxiAKgNLAxojOsqNITrfpDQm5B7e6ssoKCsoHOEJHbI3YOl97tHnURx8cnxFPzcZMmP3J/yUTRn5Fd1UwegurHDZinhDWoWSGpwshpiC+fYwrOz9BrkEIQlOCnbDRfNznVy+MSwFhsC2Q3gvBVkibyEE7HtnICudtCCAarICynKYQoaeBID/gBpIMmaRLhDHPbQQl+yQpinVbukNejtLJAEyOCgJthpUC/gCgYUJrULDZ2sl15HBY9c5+v8LAIm8tHFK+nwFy2NsDLHmOZEKRPOHM+qfpJBGt8LLUWLmum0HFAsnmxU9XnUWbJjZC2AMTcolG8HrGzRYEG4DEWg2GG8MuydRdQdAUNKdN2E/iYquowUIg5i4FxANJe/YcZEmGGYKL+5P7Pn1lne9t1D58gMJPwBrrTnYMAEjzOzS7j07OyAyWTNaBLrEBDUpC2oMnv1prg/XFUMbU0/44HbLjlaruVfSH9WWOzZ0+Mdu7PPCyM7kP22t3LKWex+QNGE4WI5QTmVJB7H/xHnXCBT/LFaB+9gSo33GyjJb7ti/FuLmpFocJlD6VppkpQWglJVDRvIdj80WyZJLKTxcBijQrVKPSNmLpCS5tB0TVDk1SEQ3RgteJQar4IF52hhsZttlAsiJfvvjORE6MQIikqKtIqNCMnUKbJcNYmDvDYDF5mtkzY0kkwiNjhLIysaomK1Fy0GM8Lc35m4wycbYAkjtJwcO0Gw5Pg5IWMpY9Ht8QkSSdPnzp08GBXZWqklFa1zR3VoEFdTjl8TtClRyPrroHr1+I4GIvdmK7s8vEAyKki3VYMqZYgrveCuPdC05iFgzjowa/39lUcST04U8w0yfadx3ylmnCkyq40RU8NgaIp01VXEYLyPdlnnORoWveRM4PJmMRkFhyupYprzUWldkPoA3YO1jPLx6NpSakHdvr5ec6JD/NUUeIYWRkbBNwCFvSIQGlUsximdc0f4ETsOU/29seTJBW7gI33U8X7zZD9GwzPIIiFsZTmK5Qez/VB0z6POWF27BVMRKH4yuNoXAtCcBbBxskCCTiMlZk6WX0aNnVofxqjGuMzQLf9VHEynIBaj2Sxy2YEsTD8fbWT55hMEuHjh8THkzw5EdIXuLFJKONEzh4NIfgsBhKCry5zlZ5O3YcSvc+xvcMrtpAVRxSaEM8mKzCdHMPZWzMqdyIt4AyfnR0zMzMd0x7fMf3OJ3ELSVUye9NkUq5q6MesOgyaIrxzsCJMoxjeB2sEtlvRMg5SBARPFsMUBk5hyB2tFgowZNrTuaZZn0dHV2qrVCv1b0k52OE5HRmo20XmryGlTCaMkeoSDzdCe9d4WCcJTIo85/Prr3DWKaWkGTaOJIQtFzu6GPKPOlLrnZbbWTGSTAxAnJZqY2KEUqEwpkhJizxUqeCOk51U1lRAS0pqUnWMQpCYmCigxeyN6NoJ/eOvvzJ/3xNgzCTMaR4XGeKOxolD60ut5tVgK2ifmKjf9Di0R0jzNkYPDQ2tyG5PVyiKFDRZNjn16oMJ17niAwcr048kVVfvPZL6+7QfOgeaiCNpuguYZUyV8fZ9To863fu01eT9fggs0iHM7adgviu98cmQLSDJsYUtOQJJoIY7i2LF7WRiUYrnd8zi6Y4Dx4/NnNvpA2og+55PTdU1sC8auLFW2627ad3yBUX+QRiHR+7zYeamAOPaW+026QkkGFsdW3hYRZMcJqc74b5S4TRY1M8PFqqPHxnroPvBPYHREyILg8JbaR6YWS92RBG27NsODP/30Z/u0lMgQ2A4hrFqCtIC28vI5vDnHOEhuDQZgugnAk6n7ElTkX3fvKDdL4gFYaF4aysR4xo7ch//GIvCHxjE6IDilQkUzeROa0t7TKUHEwgmEKiz84/oIo2qUXQRgxL1qp2tGzq3gC5aYJinBatZ+IC3DigQLeoKRW8dWepTpbIDHts9mX5gMc/tuR1dkUmBnNaT7IsZQc8vsVURr7a75XFvYJhf2YPBGtoDwsowVPzOCtJ/DkYbjrGpACGsngMd5zoO/J4SrVTGSMKc8wj8IgZr41oyk9jS5TlvM+Oq66+BKdEOZy6ioJb4B0V2H6pddVMBNGkRhO+RI3urixTDVaqKrHBTtrREFsmwTVlqZlwb7b8U5l0kZRBRnKu4v5EbiEmpxr/NaBQkgmS3/tA4KuLjFzEo9KBHbNjKUrTmFPGmAeU1oHBIClbGySlEkOBvR9rKYi/MlhfCOOrkqJoO0ykrhv4p5NPLkqsfBso1MB/sm4CmdIyB9RurmrxQavlRNTUQxOLz0VyNBXNJhLAw8KCnLvv2mf0c5fUndjiPhJVjmHqFMm0XcsoJzkgBwyxWANLnxCO2GbYpS1b2NZbTcTy8IWc4D0G+z+YUQqm/lFCCNm4ibfWvKQ6vqjPQ0Hd2pI3c3Oa1pjuLsEsh6MHr19pi2KbcQFLsNq0PIij0syrBVgSpa02fKMEugeBRXlpCxu7iKMufekyPFYxkZ5k0qdr2NwiFEsRauRbyxGJul5IUGIs+e9djP3NdM1H2Gm1LbwjHFyL065HH7Rd3w/QGb//rXkYfcM2KKlN0bRVwx9m45fp0gh/Ee371EhNikRTag2RS/kDa1kQ2kidV7YMYxSx4hp6/8YmXnl1ustRiKVfdavrt+oiRMvI2YAM3rMYN3ZyLinLXb7xn5VPgCkBY1Fg8a6lvTPcOZK0tPYEf3wc3GuE243svrd70mnnQ+58BUAQepKX1ZpF9Z2zv5A129g5Llix3MP15ETrYKmcB3AY92XqlKnzvB6rp+g4OoMP/xojIGYJqAl9Z7RF3Xm1n9Z8Z/xujKjKcbOz7WhTeSy0Z8H9lcLxLSIZbOTfiDbDV/y7QXkhWhJsYY6pAWDb2/z/k1ud8pYd3kcPF38ICo9+/Egx7oESk96Ax8qhRFn391QhyJSiPRwi7Q9wyjTTLzPKKUDgrylqFLddeCYbFYr40Hc10h/pKydWgi2/AlWNYdLnSDHJJPvyfGX8BoxjtwOPqk94AAAAASUVORK5CYII="
    }, LKZe: function (t, e, i) {
        var n = i("NpIQ"), o = i("X8DO"), a = i("TcQ7"), r = i("MmMw"), s = i("D2L2"), l = i("SfB7"),
            u = Object.getOwnPropertyDescriptor;
        e.f = i("+E39") ? u : function (t, e) {
            if (t = a(t), e = r(e, !0), l) try {
                return u(t, e)
            } catch (t) {
            }
            if (s(t, e)) return o(!n.f.call(t, e), t[e])
        }
    }, LQpA: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "score-container component-auto-list"}, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "LIST" == t.currentView,
                    expression: "currentView=='LIST'"
                }], staticClass: "list-view"
            }, [t._m(0), t._v(" "), i("ol", {staticClass: "list score-list"}, t._l(t.ScoreNum, function (e, n) {
                return i("li", {
                    key: n,
                    staticClass: "list-item score-item"
                }, [i("span", {staticClass: "num"}, [t._v(t._s(n + 1))]), t._v(" "), i("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (i) {
                            return t.clickScoreItem(e, "numscore")
                        }
                    }
                }, [t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), i("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.playing,
                        expression: "item.playing"
                    }], staticClass: "pause icon-pause", on: {
                        click: function (i) {
                            return t.stopMusicPlayer(e)
                        }
                    }
                }), t._v(" "), i("span", {staticClass: "difficulty-degree"}, t._l(new Array(e.degree), function (t, e) {
                    return i("i", {key: e, staticClass: "icon-heartbeat"})
                }), 0)])
            }), 0), t._v(" "), t._m(1), t._v(" "), i("ol", {staticClass: "list score-list"}, t._l(t.ScoreMidi, function (e, n) {
                return i("li", {
                    key: n,
                    staticClass: "list-item score-item"
                }, [i("span", {staticClass: "num"}, [t._v(t._s(n + 1))]), t._v(" "), i("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (i) {
                            return t.clickScoreItem(e, "midi")
                        }
                    }
                }, [t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), i("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.playing,
                        expression: "item.playing"
                    }], staticClass: "pause icon-pause", on: {
                        click: function (i) {
                            return t.stopMusicPlayer(e)
                        }
                    }
                }), t._v(" "), i("span", {staticClass: "difficulty-degree"}, t._l(new Array(e.degree), function (t, e) {
                    return i("i", {key: e, staticClass: "icon-heartbeat"})
                }), 0)])
            }), 0), t._v(" "), t._m(2), t._v(" "), i("ol", {staticClass: "list score-list"}, t._l(t.ScoreXml, function (e, n) {
                return i("li", {
                    key: n,
                    staticClass: "list-item score-item"
                }, [i("span", {staticClass: "num"}, [t._v(t._s(n + 1))]), t._v(" "), i("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (i) {
                            return t.clickScoreItem(e, "musicxml")
                        }
                    }
                }, [t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), i("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.playing,
                        expression: "item.playing"
                    }], staticClass: "pause icon-pause", on: {
                        click: function (i) {
                            return t.stopMusicPlayer(e)
                        }
                    }
                }), t._v(" "), i("span", {staticClass: "difficulty-degree"}, t._l(new Array(e.degree), function (t, e) {
                    return i("i", {key: e, staticClass: "icon-heartbeat"})
                }), 0)])
            }), 0)]), t._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "PLAYER" == t.currentView,
                    expression: "currentView=='PLAYER'"
                }], staticClass: "player-view"
            }, [t._m(3), t._v(" "), t._m(4), t._v(" "), i("h2", {staticClass: "music-name"}, [t._v(t._s(t.playingItem.name))]), t._v(" "), i("div", {staticClass: "difficulty-degree"}, t._l(new Array(t.playingItem.degree), function (t, e) {
                return i("i", {key: e, staticClass: "icon-heartbeat"})
            }), 0), t._v(" "), i("div", {staticClass: "control-bar"}, [i("a", {
                staticClass: "stop-btn",
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.stopMusicPlayer()
                    }
                }
            }, [t._v("停止")])])])])
        }, o = [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("p", {staticClass: "component-title"}, [n("img", {
                staticClass: "title-img",
                attrs: {src: i("EuRD"), alt: ""}
            }), t._v(" "), n("span", {staticClass: "title"}, [t._v("演奏示例")]), t._v(" "), n("span", {staticClass: "degree"}, [t._v("热度")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("p", {staticClass: "component-title"}, [n("img", {
                staticClass: "title-img",
                attrs: {src: i("z2su"), alt: ""}
            }), t._v(" "), n("span", {staticClass: "title"}, [t._v("Midi实验室")])])
        }, function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("p", {staticClass: "component-title"}, [n("img", {
                staticClass: "title-img",
                attrs: {src: i("LAuN"), alt: ""}
            }), t._v(" "), n("span", {staticClass: "title"}, [t._v("MusicXML实验室"), n("span", {staticStyle: {"font-size": "12px"}}, [t._v(" beta")])])])
        }, function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "top-bar"}, [i("h2", [t._v("AutoPiano正在播放...")])])
        }, function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "cd-box"}, [i("div", {staticClass: "cd-reader-1"}), t._v(" "), i("div", {staticClass: "cd-reader-2"}), t._v(" "), i("div", {staticClass: "cd"}, [i("div", {staticClass: "cd-inner"}, [t._v("AutoPiano")])])])
        }], a = {render: n, staticRenderFns: o};
        e.a = a
    }, M6a0: function (t, e) {
    }, MU5D: function (t, e, i) {
        var n = i("R9M2");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    }, Mhyx: function (t, e, i) {
        var n = i("/bQp"), o = i("dSzd")("iterator"), a = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (n.Array === t || a[o] === t)
        }
    }, "NWt+": function (t, e, i) {
        var n = i("+ZMJ"), o = i("msXi"), a = i("Mhyx"), r = i("77Pl"), s = i("QRG4"), l = i("3fs2"), u = {}, c = {},
            e = t.exports = function (t, e, i, f, d) {
                var h, p, m, y, g = d ? function () {
                    return t
                } : l(t), _ = n(i, f, e ? 2 : 1), v = 0;
                if ("function" != typeof g) throw TypeError(t + " is not iterable!");
                if (a(g)) {
                    for (h = s(t.length); h > v; v++) if ((y = e ? _(r(p = t[v])[0], p[1]) : _(t[v])) === u || y === c) return y
                } else for (m = g.call(t); !(p = m.next()).done;) if ((y = o(m, _, p.value, e)) === u || y === c) return y
            };
        e.BREAK = u, e.RETURN = c
    }, NeAu: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAA9BAMAAAAqpSomAAAAMFBMVEUAAAD///8gICB/f38/Pz+/v7+fn5/f399eXl7r6+uMjIxXV1e3t7fPz8+bm5tzc3N0mYyLAAAEjUlEQVRYw+1Xy5LSQBS9Nh0mZZWlGeSxzBgFl+HhyDI45VDlijAwuuQ16FIYX8vM4KALN36Cn+DSjVX+med2EgyRLDK4cMGtoh803eee++qGdrKTnexkJxvkaNo3k9YeHvb7/fHlP8GRZ41sJ3Ft/ATd/eUJbS/6iSnOE9bKJ2YIOebWcrYBOjfpwtu89nQSYTciytjbmO6dSdm7CYxG0VnGERPaQs4cEs+dzWzfrM9ri22A2jY+881r8SDY87YAyvSgenFzhD9QB1tn/cBmYpLWS5FzxSma6mZKQtnuuIG48BGOaZQKRwyN8xVWBWpnEyhV+OuyAnmlvGZTOj9dFD4f5sK4Y7XdBC/11Om+Hbmpg1yq7CmY0DSoCFcYawmUsuylwEMazwfQMg3Sga0giILNIonSMdvO/IM0ZY+mQZr6zAbcjtkwCZSoCy3CWFsSoTA+dGZp4mEfTWAWzWZKCeVBQhcr4rKXtKzJYho32RT6WLzg3kgomVnnD6VMB/Wq7JFWSIGUdcIaRhUeuiXaLBp+E45bJlW9Edy0nwJJC604UBGuGV7yD0NKsoSIhWrSsK+BRIM2Uxrmkn8ozTADbWrNNc5Eug7S4ZxtaQyi0TLrRsxsrkY5rHiaeWzY10L6xCdV82vlJzqT4bH6e4e0PMlZsUdpJFRVTvkQo7NGKToLq6l0MRjuY1kW090SXnBtZzmmimYSJcS/oxi5EzSwW3IlpuSE5K6joTEiWWsdGud1J0pxioxavq9xBSsGLFNJx6dEGkisZe1VPl5O8M57pWjMoFF6aQZlD0huLmpWN+nFF43Q1MG3RL9+gJgmewEReh2Rtv9q09QBEvEmZkit4+Gc0L7fEMm6wUutAq+PG3voZd2GXz0+7eVbJw6w+mLi3xZlyQdcgEkFH/2QKT3NO5m/kVrsTp1T4NMH0ocwREO+1j35mlOgR/F0dgur6DXVbbrgeMiAjro3mkM0DxDMOsVFqHi4KmI9b9IeDGGZlW6NKrAGe9qLpdHMMEN2vZ6i5pZ852hAzJbRyBlq7n2CqDNDqRge9g/nWAedagf2F7MFFyhqF5EIMetpVWM1Hqq1U8SDVQUlRqwNS0TfARvYwjXsdUpNaNLK+U/Dj1DEpnaBlP3j5tYelFYxOwEnKAgz/MR+NtkzHXrf/trFvnsKwgjCMqwjonWXxNcBZnO66RArB4I/mHnNillvxVF+oDKgNOiT+Yb9j3OkewdQ9wsf2WwSy3OMg40+Jkx1K89haIqautQQgvovprTwYm7thkCn/Ag7fYKAskauQw+rA5jDHVDmgPcFAO2VXrOewsPFUcX6VYks/56u2nRZZEoUl7ZPSvZVLx8Zxf5E5Eh6bxFKlCdhH3iRm6IbFvIPqt/r0Ges65WB9FQI0QlZ9wB4RH+J6F+iOTr1AeHMNyaJO9QQ+9LmB1OTbpBoUihlVfCOZhN/esOxnBtQ5MBsEKnXVEe36Q5ZHm2AeoT/xY1wtqfeD/W6SWP+boyBXm9G/0af9Z+/HTuht1AUMq8apNVVVvBWbFvUPdrJTnayk/9OfgPpX7vwWLh13gAAAABJRU5ErkJggg=="
    }, NpIQ: function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, O4R0: function (t, e, i) {
        i("+MLA"), t.exports = i("FeBl").Object.freeze
    }, O4g8: function (t, e) {
        t.exports = !0
    }, "OY+1": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "page-pc"}, [i("div", {
                staticClass: "app-bg",
                style: t.appBgStyle
            }), t._v(" "), i("div", {staticClass: "app-content"}, [i("PageHeader"), t._v(" "), i("RandomLyric"), t._v(" "), i("Piano"), t._v(" "), i("div", {staticClass: "score-section responsive-section-a"}, [i("ManualPlayScoreList"), t._v(" "), i("AutoPlayScoreList")], 1), t._v(" "), i("div", {
                staticClass: "right-drawer",
                class: {show: t.rightDrawerShow}
            }, [i("div", {
                staticClass: "trigger",
                on: {click: t.toggleRightDrawer}
            }, [t._v("歌曲列表")]), t._v(" "), i("div", {
                staticClass: "close",
                on: {click: t.hideRightDrawer}
            }, [t._v("X")]), t._v(" "), i("ManualPlayScoreList")], 1), t._v(" "), i("div", {
                staticClass: "blank-page-pc",
                staticStyle: {height: "200px"}
            }), t._v(" "), i("PageFooter")], 1)])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, OYls: function (t, e, i) {
        i("crlp")("asyncIterator")
    }, PT5K: function (t, e, i) {
        "use strict";
        var n = ["长亭外，古道边，芳草碧连天，晚风拂柳笛声残，夕阳山外山...", "你可知Macau，不是我真姓...", "what time will you be here now? it's a quater past seven now...", "君の前前前世から仆は, 君を探しはじめたよ", "你会不会忽然的出现，在街角的咖啡店", "时间它总说谎，我从不曾失去那些肩膀。", "不怕要多少时间多少代价，青春是我的筹码。", "如果还有梦就追，至少不会遗憾后悔", "Believe me I can fly  I'm singing in the sky", "我相信十年后的八月 我们还能再相遇 你最后一直在心底呼喊著『谢谢你』", "长大后 世界像一张网 网住我们的翅膀", "有了你开心D 乜都称心满意 咸鱼白菜也好好味", "Now please don't go Most nights I hardly sleep when I'm alone ", "我依然爱你 就是唯一的退路 我依然珍惜 时时刻刻的幸福", "只会傻傻的看着天上的星星 你就是那么的纯静", "我的眼睛望向窗外 幻想我对你的表白", "让蜡烛代替所有灯 让音乐代替话语声 此时无声胜有声", "当你觉得外面的世界很精彩 我会在这里衷心的祝福你", "苦海翻起爱恨 在世间难逃避命运", "不管按怎过按怎变 按怎的人 永远的永远我是彼个人", "Rage your dream 風も　光満ちてゆく Rage your dream 忘れないでいて ", "我喜欢 入学时我们稚气的脸庞 我喜欢 毕业季上写满留言的墙", "如今这里荒草丛生 没有了鲜花 好在曾经拥有你们的春秋和冬夏", "白云山高 珠江水长 吾校矗立 蔚为国光", "突然好想你 突然锋利的回忆 突然模糊的眼睛", "我站在你左侧，却像隔着银河", "多少人曾爱慕你年轻时的容颜，可知谁愿承受岁月无情的变迁。", "往事不要再提，人生已多风雨", "天空海阔你与我，可会变", "一生何求,常判断放弃与拥有", "让我再看你一眼 星空和黑夜 西去而旋转的飞鸟", "但是每一天，当我在左转，你便行向右，终不会遇见", "回忆这理想不够理想 沿途逛世间一趟只有向上", "模糊的迷恋你一场就当风雨下潮涨", "如蝴蝶破茧吹过春风 我展翅 可不可得到认同", "剪影的你轮廓太好看 凝住眼泪才敢细看", "山顶一起俯瞰过 这花花世界灯火处处", "彼此之间即使各有车票 失散于凡嚣 灰风的初吻 至少感动 一两秒", "静待紫色天空 闪出清风 有降雪跳动", "你未忘 我未忘 犹胜伴在旁", "冷雨狂风历尽，人格更光耀，披荆斩棘汉子心里磊落永不折腰", "你是空气但是好闻胜过了空气，你是阳光但是却能照进半夜里", "我心如月拂过长夜未有声 久照长门流光只影向一人", "所谓的彩虹，不过就是光，只要心还透明，就能折射希望", "本来就一无所有，才会幻想它是白鸽，飞到渴望的尽头，坠落到无名的山丘", "我若是游子，你便是人间", "我把美梦放冰箱 长大再拿行不行", "天空好想下雨 我好想住你隔壁", "许多年前 你有一双清澈的双眼 奔跑起来 像是一道春天的闪电", "乱世慷慨我行歌，千万人中有相和", "将心愿种在出发之前，我们说好走多远也不改变", "春烟柳绿，不如望你。叹这天下谁人不识君", "时间是星星的眼睛 望穿我的困惑", "确认过眼神，我遇上对的人", "如果全世界都对你恶语相加，我就对你说上一世情话", "走在地安门外，没有人不动真情", "我未入过繁华之境 未听过喧嚣的声音", "问君此去几时还，来时莫徘徊。", "乘着风游荡在蓝天边 一片云掉落在我面前", "那些你很冒险的梦，我陪你去疯。", "风筝有风 海豚有海 而你有我", "沿路旅途如歌变幻 在游览，还给大地昨天的喜怒和烦忧", "天雨粟，鬼夜哭，思念漫太古", "永远自由自我，永远高唱我歌，走遍千里", "檐下窗棂斜映枝丫 与你席地对坐饮茶", "情深深雨蒙蒙 多少楼台烟雨中 记得当初你侬我侬 车如流水马如龙"];
        e.a = n
    }, PnkT: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, ".page-pc{min-width:1280px;padding:1px;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;overflow-x:scroll}.page-pc,.page-pc .app-bg{width:100%;height:100%;position:absolute;top:0;left:0}.page-pc .app-bg{z-index:-100;opacity:.5;background-size:cover;background-repeat:no-repeat;-webkit-transition:all .5s linear;transition:all .5s linear}.page-pc .app-content{width:100%;height:100%;overflow-y:scroll;position:relative}.page-pc .app-content .piano-scroll-wrap{overflow:hidden}.page-pc .app-content .score-section{width:100%;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.page-pc .app-content .section-title{margin:30px auto 20px;font-size:28px;font-weight:500;color:#333}.page-pc .app-content .right-drawer{width:500px;height:100%;position:fixed;top:0;right:-500px;z-index:100;border-left:1px solid #ccc;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.page-pc .app-content .right-drawer .trigger{width:30px;height:86px;font-size:16px;padding-top:7px;top:50%;left:-32px}.page-pc .app-content .right-drawer .close,.page-pc .app-content .right-drawer .trigger{text-align:center;position:absolute;background:#ef496f;color:#fff;cursor:pointer;z-index:101}.page-pc .app-content .right-drawer .close{width:20px;height:20px;line-height:20px;top:10px;right:15px}.page-pc .app-content .right-drawer .component-manual-list{width:100%;height:100%;background:hsla(0,0%,100%,.9);border-radius:0;border:none}.page-pc .app-content .right-drawer.show{right:0}", ""])
    }, PzxK: function (t, e, i) {
        var n = i("D2L2"), o = i("sB3e"), a = i("ax3d")("IE_PROTO"), r = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
        }
    }, QRG4: function (t, e, i) {
        var n = i("UuGF"), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0
        }
    }, "QWe/": function (t, e, i) {
        i("crlp")("observable")
    }, R4wc: function (t, e, i) {
        var n = i("kM2E");
        n(n.S + n.F, "Object", {assign: i("To3L")})
    }, R9M2: function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1)
        }
    }, RPLV: function (t, e, i) {
        var n = i("7KvD").document;
        t.exports = n && n.documentElement
    }, RPVc: function (t, e, i) {
        e.parseMidi = i("J1/g"), e.writeMidi = i("Is+7")
    }, "RY/4": function (t, e, i) {
        var n = i("R9M2"), o = i("dSzd")("toStringTag"), a = "Arguments" == n(function () {
            return arguments
        }()), r = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = r(e = Object(t), o)) ? i : a ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }, Rrel: function (t, e, i) {
        var n = i("TcQ7"), o = i("n0T6").f, a = {}.toString,
            r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return r.slice()
                }
            };
        t.exports.f = function (t) {
            return r && "[object Window]" == a.call(t) ? s(t) : o(n(t))
        }
    }, TVmP: function (t, e, i) {
        "use strict";

        function n(t) {
            i("s4sV")
        }

        var o = i("UthT"), a = i("bjqT"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, TcQ7: function (t, e, i) {
        var n = i("MU5D"), o = i("52gC");
        t.exports = function (t) {
            return n(o(t))
        }
    }, To3L: function (t, e, i) {
        "use strict";
        var n = i("+E39"), o = i("lktj"), a = i("1kS7"), r = i("NpIQ"), s = i("sB3e"), l = i("MU5D"), u = Object.assign;
        t.exports = !u || i("S82l")(function () {
            var t = {}, e = {}, i = Symbol(), n = "abcdefghijklmnopqrst";
            return t[i] = 7, n.split("").forEach(function (t) {
                e[t] = t
            }), 7 != u({}, t)[i] || Object.keys(u({}, e)).join("") != n
        }) ? function (t, e) {
            for (var i = s(t), u = arguments.length, c = 1, f = a.f, d = r.f; u > c;) for (var h, p = l(arguments[c++]), m = f ? o(p).concat(f(p)) : o(p), y = m.length, g = 0; y > g;) h = m[g++], n && !d.call(p, h) || (i[h] = p[h]);
            return i
        } : u
    }, U5ju: function (t, e, i) {
        i("M6a0"), i("zQR9"), i("+tPU"), i("CXw9"), i("EqBC"), i("jKW+"), t.exports = i("FeBl").Promise
    }, UthT: function (t, e, i) {
        "use strict";
        e.a = {
            name: "PageFooter", data: function () {
                return {supportShow: !1, payType: "WXPAY", aliPaySrc: i("WyC5"), wxPaySrc: i("uTwv")}
            }, mounted: function () {
            }, methods: {
                togglePayType: function (t) {
                    this.payType = t
                }, toggleSupportShow: function () {
                    this.supportShow = !this.supportShow
                }
            }
        }
    }, UuGF: function (t, e) {
        var i = Math.ceil, n = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    }, V3tA: function (t, e, i) {
        i("R4wc"), t.exports = i("FeBl").Object.assign
    }, VN1t: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "listWrap",
                staticClass: "component-commodity-list responsive-section-a"
            }, [i("div", {
                staticClass: "arrow left-arrow", on: {
                    click: function (e) {
                        return t.scrollList("left")
                    }
                }
            }), t._v(" "), i("div", {ref: "scroll", staticClass: "scroll-wrap"}, t._l(t.ValidGoods, function (t, e) {
                return i("div", {key: e, staticClass: "card-wrap"}, [i("CommodityCard", {attrs: {product: t}})], 1)
            }), 0), t._v(" "), i("div", {
                staticClass: "arrow right-arrow", on: {
                    click: function (e) {
                        return t.scrollList("right")
                    }
                }
            })])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, VSxz: function (t, e, i) {
        "use strict";
        var n = i("7+uW"), o = new n.a;
        e.a = o
    }, WyC5: function (t, e, i) {
        t.exports = i.p + "static/img/aliqr.7bf1e6c.png"
    }, XAdE: function (t, e, i) {
        var n = i("HMrw");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("946ebe3a", n, !0, {})
    }, XYsL: function (t, e, i) {
        "use strict";
        var n = i("Dd8w"), o = i.n(n), a = i("VSxz"), r = i("NYxO"), s = i("2uFj");
        e.a = {
            name: "PageHeader", components: {}, mixins: [], props: [], data: function () {
                return {wallpaperLoading: !1}
            }, computed: {}, mounted: function () {
                var t = this;
                a.a.$on(s.e.CHANGE_WALLPAPER, function () {
                    t.setRandomWallPaper()
                })
            }, watch: {}, methods: o()({}, i.i(r.c)(["$setWallpaper"]), {
                emitChangeWallPaper: function () {
                    this.wallpaperLoading || a.a.$emit(s.e.CHANGE_WALLPAPER)
                }, setRandomWallPaper: function () {
                    var t = this;
                    this.wallpaperLoading = !0;
                    var e = s.i.length, i = "";
                    do {
                        var n = Math.floor(Math.random() * e);
                        i = s.i[n]
                    } while (!i || i == this.$currentWallpaper);
                    var o = new Image;
                    o.src = i, o.onload = function () {
                        t.wallpaperLoading = !1, t.$setWallpaper(i), o = null
                    }
                }
            })
        }
    }, Xc4G: function (t, e, i) {
        var n = i("lktj"), o = i("1kS7"), a = i("NpIQ");
        t.exports = function (t) {
            var e = n(t), i = o.f;
            if (i) for (var r, s = i(t), l = a.f, u = 0; s.length > u;) l.call(t, r = s[u++]) && e.push(r);
            return e
        }
    }, Xxa5: function (t, e, i) {
        t.exports = i("1H6C")
    }, Y3FW: function (t, e, i) {
        "use strict";
        var n = i("fZjL"), o = i.n(n), a = i("ZnLv"), r = i.n(a), s = i("//Im"), l = function (t) {
            var e = "";
            return s.b.forEach(function (i) {
                i.name == t && (e = i.file)
            }), e
        }, u = {
            minify: !1,
            ext: ".[mp3|ogg]",
            baseUrl: STATIC_PATH + "/samples/",
            list: ["bass-electric", "bassoon", "cello", "clarinet", "contrabass", "flute", "french-horn", "guitar-acoustic", "guitar-electric", "guitar-nylon", "harmonium", "harp", "organ", "piano", "saxophone", "trombone", "trumpet", "tuba", "violin", "xylophone"],
            onload: null,
            setExt: function (t) {
                var e;
                for (e = 0; e <= this.list.length - 1; e++) for (var i in this[this.list[e]]) this[this.list[e]][i] = this[this.list[e]][i].replace(this.ext, t);
                return this.ext = t, console.log("sample extensions set to " + this.ext)
            },
            load: function (t) {
                var e, i, n;
                if (e = t || {}, e.instruments = e.instruments || this.list, e.baseUrl = e.baseUrl || this.baseUrl, e.onload = e.onload || this.onload, e.ext && (e.ext != this.ext && this.setExt(e.ext), e.ext = this.ext), i = {}, Array.isArray(e.instruments)) {
                    for (n = 0; n <= e.instruments.length - 1; n++) {
                        var a = this[e.instruments[n]];
                        if (!0 === this.minify || !0 === e.minify) {
                            var s = 1;
                            o()(a).length >= 17 && (s = 2), o()(a).length >= 33 && (s = 4), o()(a).length >= 49 && (s = 6);
                            var l = o()(a).filter(function (t, e) {
                                return e % s != 0
                            });
                            l.forEach(function (t) {
                                delete a[t]
                            })
                        }
                        i[e.instruments[n]] = new r.a.Sampler(a, {
                            baseUrl: e.baseUrl + e.instruments[n] + "/",
                            onload: e.onload
                        })
                    }
                    return i
                }
                return a = this[e.instruments], !0 !== this.minify && !0 !== e.minify || (s = 1, o()(a).length >= 17 && (s = 2), o()(a).length >= 33 && (s = 4), o()(a).length >= 49 && (s = 6), l = o()(a).filter(function (t, e) {
                    return e % s != 0
                }), l.forEach(function (t) {
                    delete a[t]
                })), new r.a.Sampler(a, {baseUrl: e.baseUrl + e.instruments + "/", onload: e.onload})
            },
            "bass-electric": {
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                "A#4": "As4.[mp3|ogg]",
                "A#5": "As5.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                "C#5": "Cs5.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                E5: "E5.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                G5: "G5.[mp3|ogg]"
            },
            bassoon: {
                A3: "A3.[mp3|ogg]",
                C2: "C2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                G1: "G1.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                A1: "A1.[mp3|ogg]",
                A2: "A2.[mp3|ogg]"
            },
            cello: {
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "G#3": "Gs3.[mp3|ogg]",
                "G#4": "Gs4.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                "A#4": "As4.[mp3|ogg]",
                B2: "B2.[mp3|ogg]",
                B3: "B3.[mp3|ogg]",
                B4: "B4.[mp3|ogg]",
                C2: "C2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                E2: "E2.[mp3|ogg]"
            },
            clarinet: {
                D3: "D3.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                D5: "D5.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                "F#5": "Fs5.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                "A#4": "As4.[mp3|ogg]",
                D2: "D2.[mp3|ogg]"
            },
            contrabass: {
                C1: "C1.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]",
                D1: "D1.[mp3|ogg]",
                E1: "E1.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                "F#0": "Fs0.[mp3|ogg]",
                "F#1": "Fs1.[mp3|ogg]",
                G0: "G0.[mp3|ogg]",
                "G#1": "Gs1.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                A1: "A1.[mp3|ogg]",
                "A#0": "As0.[mp3|ogg]",
                B2: "B2.[mp3|ogg]"
            },
            flute: {
                A5: "A5.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                E5: "E5.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]"
            },
            "french-horn": {
                D2: "D2.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                G1: "G1.[mp3|ogg]",
                A0: "A0.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                C1: "C1.[mp3|ogg]",
                C3: "C3.[mp3|ogg]"
            },
            "guitar-acoustic": {
                F3: "F3.[mp3|ogg]",
                "F#1": "Fs1.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                G1: "G1.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                "G#1": "Gs1.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "G#3": "Gs3.[mp3|ogg]",
                A1: "A1.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                "A#1": "As1.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                B1: "B1.[mp3|ogg]",
                B2: "B2.[mp3|ogg]",
                B3: "B3.[mp3|ogg]",
                C2: "C2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                D1: "D1.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                E1: "E1.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                F1: "F1.[mp3|ogg]",
                F2: "F2.[mp3|ogg]"
            },
            "guitar-electric": {
                "D#3": "Ds3.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                "D#5": "Ds5.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                "F#5": "Fs5.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                A5: "A5.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]"
            },
            "guitar-nylon": {
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                "F#5": "Fs5.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G5: "G3.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "G#4": "Gs4.[mp3|ogg]",
                "G#5": "Gs5.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                A5: "A5.[mp3|ogg]",
                "A#5": "As5.[mp3|ogg]",
                B1: "B1.[mp3|ogg]",
                B2: "B2.[mp3|ogg]",
                B3: "B3.[mp3|ogg]",
                B4: "B4.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                "C#5": "Cs5.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                D5: "D5.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                E5: "E5.[mp3|ogg]"
            },
            harmonium: {
                C2: "C2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                "C#5": "Cs5.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                D5: "D5.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "G#3": "Gs3.[mp3|ogg]",
                "G#4": "Gs4.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                "A#4": "As4.[mp3|ogg]"
            },
            harp: {
                C5: "C5.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                D6: "D6.[mp3|ogg]",
                D7: "D7.[mp3|ogg]",
                E1: "E1.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E5: "E5.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                F6: "F6.[mp3|ogg]",
                F7: "F7.[mp3|ogg]",
                G1: "G1.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G5: "G5.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                A6: "A6.[mp3|ogg]",
                B1: "B1.[mp3|ogg]",
                B3: "B3.[mp3|ogg]",
                B5: "B5.[mp3|ogg]",
                B6: "B6.[mp3|ogg]",
                C3: "C3.[mp3|ogg]"
            },
            organ: {
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                "D#5": "Ds5.[mp3|ogg]",
                "F#1": "Fs1.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                "F#5": "Fs5.[mp3|ogg]",
                A1: "A1.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                A5: "A5.[mp3|ogg]",
                C1: "C1.[mp3|ogg]",
                C2: "C2.[mp3|ogg]"
            },
            piano: {
                A2: l("A2"),
                A3: l("A3"),
                A4: l("A4"),
                A5: l("A5"),
                A6: l("A6"),
                "A#3": l("A#3"),
                "A#4": l("A#4"),
                "A#5": l("A#5"),
                "A#6": l("A#6"),
                B2: l("B2"),
                B3: l("B3"),
                B4: l("B4"),
                B5: l("B5"),
                B6: l("B6"),
                C2: l("C2"),
                C3: l("C3"),
                C4: l("C4"),
                C5: l("C5"),
                C6: l("C6"),
                C7: l("C7"),
                "C#2": l("C#2"),
                "C#3": l("C#3"),
                "C#4": l("C#4"),
                "C#5": l("C#5"),
                "C#6": l("C#6"),
                D0: l("D0"),
                D1: l("D1"),
                D2: l("D2"),
                D3: l("D3"),
                D4: l("D4"),
                D5: l("D5"),
                D6: l("D6"),
                "D#2": l("D#2"),
                "D#3": l("D#3"),
                "D#4": l("D#4"),
                "D#5": l("D#5"),
                "D#6": l("D#6"),
                E2: l("E2"),
                E3: l("E3"),
                E4: l("E4"),
                E5: l("E5"),
                E6: l("E6"),
                F2: l("F2"),
                F3: l("F3"),
                F4: l("F4"),
                F5: l("F5"),
                F6: l("F6"),
                "F#2": l("F#2"),
                "F#3": l("F#3"),
                "F#4": l("F#4"),
                "F#5": l("F#5"),
                "F#6": l("F#6"),
                G2: l("G2"),
                G3: l("G3"),
                G4: l("G4"),
                G5: l("G5"),
                G6: l("G6"),
                "G#2": l("G#2"),
                "G#3": l("G#3"),
                "G#4": l("G#4"),
                "G#5": l("G#5"),
                "G#6": l("G#6")
            },
            saxophone: {
                "D#4": "Ds4.[mp3|ogg]",
                E2: "E2.[mp3|ogg]",
                E3: "E3.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                G2: "G2.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "G#3": "Gs3.[mp3|ogg]",
                "G#4": "Gs4.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                B2: "B2.[mp3|ogg]",
                B3: "B3.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                "C#2": "Cs2.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                "C#4": "Cs4.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]"
            },
            trombone: {
                "A#2": "As2.[mp3|ogg]",
                C2: "C2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                "C#1": "Cs1.[mp3|ogg]",
                "C#3": "Cs3.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                F1: "F1.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                "G#1": "Gs1.[mp3|ogg]",
                "G#2": "Gs2.[mp3|ogg]",
                "A#0": "As0.[mp3|ogg]",
                "A#1": "As1.[mp3|ogg]"
            },
            trumpet: {
                C5: "C5.[mp3|ogg]",
                D4: "D4.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                F3: "F3.[mp3|ogg]",
                F4: "F4.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                "A#3": "As3.[mp3|ogg]",
                C3: "C3.[mp3|ogg]"
            },
            tuba: {
                "A#1": "As1.[mp3|ogg]",
                "A#2": "As2.[mp3|ogg]",
                D2: "D2.[mp3|ogg]",
                D3: "D3.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                F0: "F0.[mp3|ogg]",
                F1: "F1.[mp3|ogg]",
                F2: "F2.[mp3|ogg]",
                "A#0": "As0.[mp3|ogg]"
            },
            violin: {
                A3: "A3.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                A5: "A5.[mp3|ogg]",
                A6: "A6.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]",
                C7: "C7.[mp3|ogg]",
                E4: "E4.[mp3|ogg]",
                E5: "E5.[mp3|ogg]",
                E6: "E6.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                G5: "G5.[mp3|ogg]",
                G6: "G6.[mp3|ogg]"
            },
            xylophone: {
                C7: "C7.[mp3|ogg]",
                G3: "G3.[mp3|ogg]",
                G4: "G4.[mp3|ogg]",
                G5: "G5.[mp3|ogg]",
                G6: "G6.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]"
            }
        };
        e.a = u
    }, Y6yI: function (t, e, i) {
        "use strict";
        e.a = {
            name: "CommodityCard", components: {}, mixins: [], props: ["product"], data: function () {
                return {}
            }, computed: {}, watch: {}, mounted: function () {
            }, methods: {}
        }
    }, Yobk: function (t, e, i) {
        var n = i("77Pl"), o = i("qio6"), a = i("xnc9"), r = i("ax3d")("IE_PROTO"), s = function () {
        }, l = function () {
            var t, e = i("ON07")("iframe"), n = a.length;
            for (e.style.display = "none", i("RPLV").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[a[n]];
            return l()
        };
        t.exports = Object.create || function (t, e) {
            var i;
            return null !== t ? (s.prototype = n(t), i = new s, s.prototype = null, i[r] = t) : i = l(), void 0 === e ? i : o(i, e)
        }
    }, Z2zZ: function (t, e, i) {
        "use strict";

        function n(t) {
            i("kuyN")
        }

        var o = i("Achj"), a = i("EswX"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, ZnLv: function (t, e, i) {
        !function (e, i) {
            t.exports = i()
        }("undefined" != typeof self && self, function () {
            return function (t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                }

                var i = {};
                return e.m = t, e.c = i, e.d = function (t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
                }, e.r = function (t) {
                    Object.defineProperty(t, "__esModule", {value: !0})
                }, e.n = function (t) {
                    var i = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e(e.s = 148)
            }([function (t, e, i) {
                "use strict";
                i.r(e), function (t) {
                    var n = i(93), o = function () {
                        if (!(this instanceof o)) throw new Error("constructor needs to be called with the 'new' keyword")
                    };
                    /**
                     *  Tone.js
                     *  @author Yotam Mann
                     *  @license http://opensource.org/licenses/MIT MIT License
                     *  @copyright 2014-2019 Yotam Mann
                     */
                    o.prototype.toString = function () {
                        for (var t in o) {
                            var e = t[0].match(/^[A-Z]$/), i = o[t] === this.constructor;
                            if (o.isFunction(o[t]) && e && i) return t
                        }
                        return "Tone"
                    }, o.prototype.dispose = function () {
                        return this
                    }, o.prototype.set = function (t, e) {
                        if (o.isString(t)) {
                            var i = {};
                            i[t] = e, t = i
                        }
                        t:for (var n in t) {
                            e = t[n];
                            var a = this;
                            if (-1 !== n.indexOf(".")) {
                                for (var r = n.split("."), s = 0; s < r.length - 1; s++) if ((a = a[r[s]]) instanceof o) {
                                    r.splice(0, s + 1);
                                    var l = r.join(".");
                                    a.set(l, e);
                                    continue t
                                }
                                n = r[r.length - 1]
                            }
                            var u = a[n];
                            o.isUndef(u) || (o.Signal && u instanceof o.Signal || o.Param && u instanceof o.Param ? u.value !== e && (u.value = e) : u instanceof AudioParam ? u.value !== e && (u.value = e) : o.TimeBase && u instanceof o.TimeBase ? a[n] = e : u instanceof o ? u.set(e) : u !== e && (a[n] = e))
                        }
                        return this
                    }, o.prototype.get = function (t) {
                        o.isUndef(t) ? t = this._collectDefaults(this.constructor) : o.isString(t) && (t = [t]);
                        for (var e = {}, i = 0; i < t.length; i++) {
                            var n = t[i], a = this, r = e;
                            if (-1 !== n.indexOf(".")) {
                                for (var s = n.split("."), l = 0; l < s.length - 1; l++) {
                                    var u = s[l];
                                    r[u] = r[u] || {}, r = r[u], a = a[u]
                                }
                                n = s[s.length - 1]
                            }
                            var c = a[n];
                            o.isObject(t[n]) ? r[n] = c.get() : o.Signal && c instanceof o.Signal ? r[n] = c.value : o.Param && c instanceof o.Param ? r[n] = c.value : c instanceof AudioParam ? r[n] = c.value : c instanceof o ? r[n] = c.get() : !o.isFunction(c) && o.isDefined(c) && (r[n] = c)
                        }
                        return e
                    }, o.prototype._collectDefaults = function (t) {
                        var e = [];
                        if (o.isDefined(t.defaults) && (e = Object.keys(t.defaults)), o.isDefined(t._super)) for (var i = this._collectDefaults(t._super), n = 0; n < i.length; n++) -1 === e.indexOf(i[n]) && e.push(i[n]);
                        return e
                    }, o.defaults = function (t, e, i) {
                        var n = {};
                        if (1 === t.length && o.isObject(t[0])) n = t[0]; else for (var a = 0; a < e.length; a++) n[e[a]] = t[a];
                        return o.isDefined(i.defaults) ? o.defaultArg(n, i.defaults) : o.isObject(i) ? o.defaultArg(n, i) : n
                    }, o.defaultArg = function (t, e) {
                        if (o.isObject(t) && o.isObject(e)) {
                            var i = {};
                            for (var n in t) i[n] = o.defaultArg(e[n], t[n]);
                            for (var a in e) i[a] = o.defaultArg(t[a], e[a]);
                            return i
                        }
                        return o.isUndef(t) ? e : t
                    }, o.prototype.log = function () {
                        if (this.debug || this.toString() === o.global.TONE_DEBUG_CLASS) {
                            var t = Array.from(arguments);
                            t.unshift(this.toString() + ":"), console.log.apply(void 0, t)
                        }
                    }, o.prototype.assert = function (t, e) {
                        if (!t) throw new Error(e)
                    }, o.connectSeries = function () {
                        for (var t = arguments[0], e = 1; e < arguments.length; e++) {
                            var i = arguments[e];
                            o.connect(t, i), t = i
                        }
                        return o
                    }, o.connect = function (t, e, i, n) {
                        for (; o.isDefined(e.input);) o.isArray(e.input) ? (n = o.defaultArg(n, 0), e = e.input[n], n = 0) : e.input && (e = e.input);
                        return e instanceof AudioParam ? t.connect(e, i) : e instanceof AudioNode && t.connect(e, i, n), o
                    }, o.disconnect = function (t, e, i, n) {
                        if (e) {
                            for (var a = !1; !a;) o.isArray(e.input) ? (o.isDefined(n) ? o.disconnect(t, e.input[n], i) : e.input.forEach(function (e) {
                                try {
                                    o.disconnect(t, e, i)
                                } catch (t) {
                                }
                            }), a = !0) : e.input ? e = e.input : a = !0;
                            e instanceof AudioParam ? t.disconnect(e, i) : e instanceof AudioNode && t.disconnect(e, i, n)
                        } else t.disconnect();
                        return o
                    }, o.isUndef = function (t) {
                        return void 0 === t
                    }, o.isDefined = function (t) {
                        return !o.isUndef(t)
                    }, o.isFunction = function (t) {
                        return "function" == typeof t
                    }, o.isNumber = function (t) {
                        return "number" == typeof t
                    }, o.isObject = function (t) {
                        return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
                    }, o.isBoolean = function (t) {
                        return "boolean" == typeof t
                    }, o.isArray = function (t) {
                        return Array.isArray(t)
                    }, o.isString = function (t) {
                        return "string" == typeof t
                    }, o.isNote = function (t) {
                        return o.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
                    }, o.noOp = function () {
                    }, o.prototype._readOnly = function (t) {
                        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._readOnly(t[e]); else Object.defineProperty(this, t, {
                            writable: !1,
                            enumerable: !0
                        })
                    }, o.prototype._writable = function (t) {
                        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._writable(t[e]); else Object.defineProperty(this, t, {writable: !0})
                    }, o.State = {
                        Started: "started",
                        Stopped: "stopped",
                        Paused: "paused"
                    }, o.global = o.isUndef(t) ? window : t, o.equalPowerScale = function (t) {
                        var e = .5 * Math.PI;
                        return Math.sin(t * e)
                    }, o.dbToGain = function (t) {
                        return Math.pow(10, t / 20)
                    }, o.gainToDb = function (t) {
                        return Math.log(t) / Math.LN10 * 20
                    }, o.intervalToFrequencyRatio = function (t) {
                        return Math.pow(2, t / 12)
                    }, o.prototype.now = function () {
                        return o.context.now()
                    }, o.now = function () {
                        return o.context.now()
                    }, o.prototype.immediate = function () {
                        return o.context.currentTime
                    }, o.immediate = function () {
                        return o.context.currentTime
                    }, o.extend = function (t, e) {
                        function i() {
                        }

                        o.isUndef(e) && (e = o), i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t, t._super = e
                    }, o._audioContext = null, o.start = function () {
                        return o.context.resume()
                    }, Object.defineProperty(o, "context", {
                        get: function () {
                            return o._audioContext
                        }, set: function (t) {
                            t.isContext ? o._audioContext = t : o._audioContext = new o.Context(t), o.Context.emit("init", o._audioContext)
                        }
                    }), Object.defineProperty(o.prototype, "context", {
                        get: function () {
                            return o.context
                        }
                    }), o.setContext = function (t) {
                        o.context = t
                    }, Object.defineProperty(o.prototype, "blockTime", {
                        get: function () {
                            return 128 / this.context.sampleRate
                        }
                    }), Object.defineProperty(o.prototype, "sampleTime", {
                        get: function () {
                            return 1 / this.context.sampleRate
                        }
                    }), Object.defineProperty(o, "supported", {
                        get: function () {
                            var t = o.global.hasOwnProperty("AudioContext") || o.global.hasOwnProperty("webkitAudioContext"),
                                e = o.global.hasOwnProperty("Promise");
                            return t && e
                        }
                    }), Object.defineProperty(o, "initialized", {
                        get: function () {
                            return Boolean(o.context)
                        }
                    }), o.getContext = function (t) {
                        if (o.initialized) t(o.context); else {
                            var e = function () {
                                t(o.context), o.Context.off("init", e)
                            };
                            o.Context.on("init", e)
                        }
                        return o
                    }, o.version = n.a, e.default = o
                }.call(this, i(147))
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                if (i(20), n.default.supported) {
                    var o = new OfflineAudioContext(2, 1, 44100), a = o.createGain(), r = o.createGain();
                    if (a.connect(r) !== r) {
                        var s = AudioNode.prototype.connect;
                        AudioNode.prototype.connect = function () {
                            return s.apply(this, arguments), arguments[0]
                        }
                    }
                }
                n.default.AudioNode = function () {
                    n.default.call(this);
                    var t = n.default.defaults(arguments, ["context"], {context: n.default.context});
                    this._context = t.context
                }, n.default.extend(n.default.AudioNode), Object.defineProperty(n.default.AudioNode.prototype, "context", {
                    get: function () {
                        return this._context
                    }
                }), n.default.AudioNode.prototype.createInsOuts = function (t, e) {
                    1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)), 1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e))
                }, Object.defineProperty(n.default.AudioNode.prototype, "channelCount", {
                    get: function () {
                        return this.output.channelCount
                    }, set: function (t) {
                        return this.output.channelCount = t
                    }
                }), Object.defineProperty(n.default.AudioNode.prototype, "channelCountMode", {
                    get: function () {
                        return this.output.channelCountMode
                    }, set: function (t) {
                        return this.output.channelCountMode = t
                    }
                }), Object.defineProperty(n.default.AudioNode.prototype, "channelInterpretation", {
                    get: function () {
                        return this.output.channelInterpretation
                    }, set: function (t) {
                        return this.output.channelInterpretation = t
                    }
                }), Object.defineProperty(n.default.AudioNode.prototype, "numberOfInputs", {
                    get: function () {
                        return this.input ? n.default.isArray(this.input) ? this.input.length : 1 : 0
                    }
                }), Object.defineProperty(n.default.AudioNode.prototype, "numberOfOutputs", {
                    get: function () {
                        return this.output ? n.default.isArray(this.output) ? this.output.length : 1 : 0
                    }
                }), n.default.AudioNode.prototype.connect = function (t, e, i) {
                    return n.default.isArray(this.output) ? (e = n.default.defaultArg(e, 0), this.output[e].connect(t, 0, i)) : n.default.connect(this.output, t, e, i), this
                }, n.default.AudioNode.prototype.disconnect = function (t, e, i) {
                    return n.default.isArray(this.output) ? (e = n.default.defaultArg(e, 0), this.output[e].disconnect(t, 0, i)) : n.default.disconnect(this.output, t, e, i), this
                }, n.default.AudioNode.prototype.chain = function () {
                    var t = Array.from(arguments);
                    return t.unshift(this), n.default.connectSeries.apply(void 0, t), this
                }, n.default.AudioNode.prototype.fan = function () {
                    for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
                    return this
                }, n.default.AudioNode.prototype.dispose = function () {
                    return n.default.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), n.default.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this._context = null, this
                }, e.default = n.default.AudioNode
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                if (i(4), i(14), i(30), i(44), i(20), i(3), n.default.supported && !n.default.global.AudioContext.prototype.createConstantSource) {
                    var o = function (t) {
                        this.context = t;
                        for (var e = t.createBuffer(1, 128, t.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) i[n] = 1;
                        this._bufferSource = t.createBufferSource(), this._bufferSource.channelCount = 1, this._bufferSource.channelCountMode = "explicit", this._bufferSource.buffer = e, this._bufferSource.loop = !0;
                        var o = this._output = t.createGain();
                        this.offset = o.gain, this._bufferSource.connect(o)
                    };
                    o.prototype.start = function (t) {
                        return this._bufferSource.start(t), this
                    }, o.prototype.stop = function (t) {
                        return this._bufferSource.stop(t), this
                    }, o.prototype.connect = function () {
                        return this._output.connect.apply(this._output, arguments), this
                    }, o.prototype.disconnect = function () {
                        return this._output.disconnect.apply(this._output, arguments), this
                    }, AudioContext.prototype.createConstantSource = function () {
                        return new o(this)
                    }, n.default.Context.prototype.createConstantSource = function () {
                        return new o(this)
                    }
                }
                n.default.Signal = function () {
                    var t = n.default.defaults(arguments, ["value", "units"], n.default.Signal);
                    n.default.Param.call(this, t), this._constantSource = this.context.createConstantSource(), this._constantSource.start(0), this._param = this._constantSource.offset, this.value = t.value, this.output = this._constantSource, this.input = this._param = this.output.offset
                }, n.default.extend(n.default.Signal, n.default.Param), n.default.Signal.defaults = {
                    value: 0,
                    units: n.default.Type.Default,
                    convert: !0
                }, n.default.Signal.prototype.connect = n.default.SignalBase.prototype.connect, n.default.Signal.prototype.disconnect = n.default.SignalBase.prototype.disconnect, n.default.Signal.prototype.getValueAtTime = function (t) {
                    return this._param.getValueAtTime ? this._param.getValueAtTime(t) : n.default.Param.prototype.getValueAtTime.call(this, t)
                }, n.default.Signal.prototype.dispose = function () {
                    return n.default.Param.prototype.dispose.call(this), this._constantSource.stop(), this._constantSource.disconnect(), this._constantSource = null, this
                }, e.default = n.default.Signal
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(14), i(4), i(1), n.default.Gain = function () {
                    var t = n.default.defaults(arguments, ["gain", "units"], n.default.Gain);
                    n.default.AudioNode.call(this, t), this.input = this.output = this._gainNode = this.context.createGain(), this.gain = new n.default.Param({
                        param: this._gainNode.gain,
                        units: t.units,
                        value: t.gain,
                        convert: t.convert
                    }), this._readOnly("gain")
                }, n.default.extend(n.default.Gain, n.default.AudioNode), n.default.Gain.defaults = {
                    gain: 1,
                    convert: !0
                }, n.default.Gain.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this._gainNode.disconnect(), this._gainNode = null, this._writable("gain"), this.gain.dispose(), this.gain = null
                }, e.default = n.default.Gain
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(63), i(46), i(45), i(20), n.default.Type = {
                    Default: "number",
                    Time: "time",
                    Frequency: "frequency",
                    TransportTime: "transportTime",
                    Ticks: "ticks",
                    NormalRange: "normalRange",
                    AudioRange: "audioRange",
                    Decibels: "db",
                    Interval: "interval",
                    BPM: "bpm",
                    Positive: "positive",
                    Gain: "gain",
                    Cents: "cents",
                    Degrees: "degrees",
                    MIDI: "midi",
                    BarsBeatsSixteenths: "barsBeatsSixteenths",
                    Samples: "samples",
                    Hertz: "hertz",
                    Note: "note",
                    Milliseconds: "milliseconds",
                    Seconds: "seconds",
                    Notation: "notation"
                }, n.default.prototype.toSeconds = function (t) {
                    return n.default.isNumber(t) ? t : n.default.isUndef(t) ? this.now() : n.default.isString(t) || n.default.isObject(t) ? new n.default.Time(t).toSeconds() : t instanceof n.default.TimeBase ? t.toSeconds() : void 0
                }, n.default.prototype.toFrequency = function (t) {
                    return n.default.isNumber(t) ? t : n.default.isString(t) || n.default.isUndef(t) || n.default.isObject(t) ? new n.default.Frequency(t).valueOf() : t instanceof n.default.TimeBase ? t.toFrequency() : void 0
                }, n.default.prototype.toTicks = function (t) {
                    return n.default.isNumber(t) || n.default.isString(t) || n.default.isObject(t) ? new n.default.TransportTime(t).toTicks() : n.default.isUndef(t) ? n.default.Transport.ticks : t instanceof n.default.TimeBase ? t.toTicks() : void 0
                }, e.default = n.default
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(14), i(3), i(30), n.default.Multiply = function (t) {
                    n.default.Signal.call(this), this.createInsOuts(2, 0), this._mult = this.input[0] = this.output = new n.default.Gain, this._param = this.input[1] = this.output.gain, this.value = n.default.defaultArg(t, 0)
                }, n.default.extend(n.default.Multiply, n.default.Signal), n.default.Multiply.prototype.dispose = function () {
                    return n.default.Signal.prototype.dispose.call(this), this._mult.dispose(), this._mult = null, this._param = null, this
                }, e.default = n.default.Multiply
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(16), i(27), i(40), i(4), i(34), i(2), i(1), n.default.Source = function (t) {
                    t = n.default.defaultArg(t, n.default.Source.defaults), n.default.AudioNode.call(this), this._volume = this.output = new n.default.Volume(t.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._state = new n.default.TimelineState(n.default.State.Stopped), this._state.memory = 100, this._synced = !1, this._scheduled = [], this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = t.mute
                }, n.default.extend(n.default.Source, n.default.AudioNode), n.default.Source.defaults = {
                    volume: 0,
                    mute: !1
                }, Object.defineProperty(n.default.Source.prototype, "state", {
                    get: function () {
                        return this._synced ? n.default.Transport.state === n.default.State.Started ? this._state.getValueAtTime(n.default.Transport.seconds) : n.default.State.Stopped : this._state.getValueAtTime(this.now())
                    }
                }), Object.defineProperty(n.default.Source.prototype, "mute", {
                    get: function () {
                        return this._volume.mute
                    }, set: function (t) {
                        this._volume.mute = t
                    }
                }), n.default.Source.prototype._start = n.default.noOp, n.default.Source.prototype.restart = n.default.noOp, n.default.Source.prototype._stop = n.default.noOp, n.default.Source.prototype.start = function (t, e, i) {
                    if (n.default.isUndef(t) && this._synced ? t = n.default.Transport.seconds : (t = this.toSeconds(t), this._synced || (t = Math.max(t, this.context.currentTime))), this._state.getValueAtTime(t) === n.default.State.Started) this._state.cancel(t), this._state.setStateAtTime(n.default.State.Started, t), this.restart(t, e, i); else if (this._state.setStateAtTime(n.default.State.Started, t), this._synced) {
                        var o = this._state.get(t);
                        o.offset = n.default.defaultArg(e, 0), o.duration = i;
                        var a = n.default.Transport.schedule(function (t) {
                            this._start(t, e, i)
                        }.bind(this), t);
                        this._scheduled.push(a), n.default.Transport.state === n.default.State.Started && this._syncedStart(this.now(), n.default.Transport.seconds)
                    } else this._start.apply(this, arguments);
                    return this
                }, n.default.Source.prototype.stop = function (t) {
                    if (n.default.isUndef(t) && this._synced ? t = n.default.Transport.seconds : (t = this.toSeconds(t), t = Math.max(t, this.context.currentTime)), this._synced) {
                        var e = n.default.Transport.schedule(this._stop.bind(this), t);
                        this._scheduled.push(e)
                    } else this._stop.apply(this, arguments);
                    return this._state.cancel(t), this._state.setStateAtTime(n.default.State.Stopped, t), this
                }, n.default.Source.prototype.sync = function () {
                    return this._synced = !0, this._syncedStart = function (t, e) {
                        if (e > 0) {
                            var i = this._state.get(e);
                            if (i && i.state === n.default.State.Started && i.time !== e) {
                                var o, a = e - this.toSeconds(i.time);
                                i.duration && (o = this.toSeconds(i.duration) - a), this._start(t, this.toSeconds(i.offset) + a, o)
                            }
                        }
                    }.bind(this), this._syncedStop = function (t) {
                        var e = n.default.Transport.getSecondsAtTime(Math.max(t - this.sampleTime, 0));
                        this._state.getValueAtTime(e) === n.default.State.Started && this._stop(t)
                    }.bind(this), n.default.Transport.on("start loopStart", this._syncedStart), n.default.Transport.on("stop pause loopEnd", this._syncedStop), this
                }, n.default.Source.prototype.unsync = function () {
                    this._synced && (n.default.Transport.off("stop pause loopEnd", this._syncedStop), n.default.Transport.off("start loopStart", this._syncedStart)), this._synced = !1;
                    for (var t = 0; t < this._scheduled.length; t++) {
                        var e = this._scheduled[t];
                        n.default.Transport.clear(e)
                    }
                    return this._scheduled = [], this._state.cancel(0), this
                }, n.default.Source.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this.unsync(), this._scheduled = null, this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this._state.dispose(), this._state = null
                }, e.default = n.default.Source
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                if (i(30), i(44), n.default.supported && !n.default.global.AudioContext.prototype._native_createWaveShaper) {
                    var o = navigator.userAgent.toLowerCase();
                    if (o.includes("safari") && !o.includes("chrome")) {
                        var a = function (t) {
                            for (var e in this._internalNode = this.input = this.output = t._native_createWaveShaper(), this._curve = null, this._internalNode) this._defineProperty(this._internalNode, e)
                        };
                        Object.defineProperty(a.prototype, "curve", {
                            get: function () {
                                return this._curve
                            }, set: function (t) {
                                this._curve = t;
                                var e = new Float32Array(t.length + 1);
                                e.set(t, 1), e[0] = t[0], this._internalNode.curve = e
                            }
                        }), a.prototype._defineProperty = function (t, e) {
                            n.default.isUndef(this[e]) && Object.defineProperty(this, e, {
                                get: function () {
                                    return "function" == typeof t[e] ? t[e].bind(t) : t[e]
                                }, set: function (i) {
                                    t[e] = i
                                }
                            })
                        }, n.default.global.AudioContext.prototype._native_createWaveShaper = n.default.global.AudioContext.prototype.createWaveShaper, n.default.global.AudioContext.prototype.createWaveShaper = function () {
                            return new a(this)
                        }
                    }
                }
                n.default.WaveShaper = function (t, e) {
                    n.default.SignalBase.call(this), this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(t) ? this.curve = t : isFinite(t) || n.default.isUndef(t) ? this._curve = new Float32Array(n.default.defaultArg(t, 1024)) : n.default.isFunction(t) && (this._curve = new Float32Array(n.default.defaultArg(e, 1024)), this.setMap(t))
                }, n.default.extend(n.default.WaveShaper, n.default.SignalBase), n.default.WaveShaper.prototype.setMap = function (t) {
                    for (var e = new Array(this._curve.length), i = 0, n = this._curve.length; i < n; i++) {
                        var o = i / (n - 1) * 2 - 1;
                        e[i] = t(o, i)
                    }
                    return this.curve = e, this
                }, Object.defineProperty(n.default.WaveShaper.prototype, "curve", {
                    get: function () {
                        return this._shaper.curve
                    }, set: function (t) {
                        this._curve = new Float32Array(t), this._shaper.curve = this._curve
                    }
                }), Object.defineProperty(n.default.WaveShaper.prototype, "oversample", {
                    get: function () {
                        return this._shaper.oversample
                    }, set: function (t) {
                        if (!["none", "2x", "4x"].includes(t)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                        this._shaper.oversample = t
                    }
                }), n.default.WaveShaper.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this
                }, e.default = n.default.WaveShaper
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(23), i(1), n.default.Effect = function () {
                    var t = n.default.defaults(arguments, ["wet"], n.default.Effect);
                    n.default.AudioNode.call(this), this.createInsOuts(1, 1), this._dryWet = new n.default.CrossFade(t.wet), this.wet = this._dryWet.fade, this.effectSend = new n.default.Gain, this.effectReturn = new n.default.Gain, n.default.connect(this.input, this._dryWet.a), n.default.connect(this.input, this.effectSend), this.effectReturn.connect(this._dryWet.b), this._dryWet.connect(this.output), this._readOnly(["wet"])
                }, n.default.extend(n.default.Effect, n.default.AudioNode), n.default.Effect.defaults = {wet: 1}, n.default.Effect.prototype.connectEffect = function (t) {
                    return this.effectSend.chain(t, this.effectReturn), this
                }, n.default.Effect.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this.effectSend.dispose(), this.effectSend = null, this.effectReturn.dispose(), this.effectReturn = null, this._writable(["wet"]), this.wet = null, this
                }, e.default = n.default.Effect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(1), n.default.Filter = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type", "rolloff"], n.default.Filter);
                    n.default.AudioNode.call(this), this.createInsOuts(1, 1), this._filters = [], this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.detune = new n.default.Signal(0, n.default.Type.Cents), this.gain = new n.default.Signal({
                        value: t.gain,
                        convert: !0,
                        type: n.default.Type.Decibels
                    }), this.Q = new n.default.Signal(t.Q), this._type = t.type, this._rolloff = t.rolloff, this.rolloff = t.rolloff, this._readOnly(["detune", "frequency", "gain", "Q"])
                }, n.default.extend(n.default.Filter, n.default.AudioNode), n.default.Filter.defaults = {
                    type: "lowpass",
                    frequency: 350,
                    rolloff: -12,
                    Q: 1,
                    gain: 0
                }, Object.defineProperty(n.default.Filter.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        if (-1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t)) throw new TypeError("Tone.Filter: invalid type " + t);
                        this._type = t;
                        for (var e = 0; e < this._filters.length; e++) this._filters[e].type = t
                    }
                }), Object.defineProperty(n.default.Filter.prototype, "rolloff", {
                    get: function () {
                        return this._rolloff
                    }, set: function (t) {
                        t = parseInt(t, 10);
                        var e = [-12, -24, -48, -96].indexOf(t);
                        if (-1 === e) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
                        e += 1, this._rolloff = t, this.input.disconnect();
                        for (var i = 0; i < this._filters.length; i++) this._filters[i].disconnect(), this._filters[i] = null;
                        this._filters = new Array(e);
                        for (var o = 0; o < e; o++) {
                            var a = this.context.createBiquadFilter();
                            a.type = this._type, this.frequency.connect(a.frequency), this.detune.connect(a.detune), this.Q.connect(a.Q), this.gain.connect(a.gain), this._filters[o] = a
                        }
                        var r = [this.input].concat(this._filters).concat([this.output]);
                        n.default.connectSeries.apply(n.default, r)
                    }
                }), n.default.Filter.prototype.getFrequencyResponse = function (t) {
                    t = n.default.defaultArg(t, 128);
                    for (var e = new Float32Array(t).map(function () {
                        return 1
                    }), i = new Float32Array(t), o = 0; o < t; o++) {
                        var a = 19980 * Math.pow(o / t, 2) + 20;
                        i[o] = a
                    }
                    var r = new Float32Array(t), s = new Float32Array(t);
                    return this._filters.forEach(function () {
                        var t = this.context.createBiquadFilter();
                        t.type = this._type, t.Q.value = this.Q.value, t.frequency.value = this.frequency.value, t.gain.value = this.gain.value, t.getFrequencyResponse(i, r, s), r.forEach(function (t, i) {
                            e[i] *= t
                        })
                    }.bind(this)), e
                }, n.default.Filter.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this);
                    for (var t = 0; t < this._filters.length; t++) this._filters[t].disconnect(), this._filters[t] = null;
                    return this._filters = null, this._writable(["detune", "frequency", "gain", "Q"]), this.frequency.dispose(), this.Q.dispose(), this.frequency = null, this.Q = null, this.detune.dispose(), this.detune = null, this.gain.dispose(), this.gain = null, this
                }, e.default = n.default.Filter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(1), n.default.Merge = function (t) {
                    t = n.default.defaultArg(t, 2), n.default.AudioNode.call(this), this.createInsOuts(t, 0), this._merger = this.output = this.context.createChannelMerger(t);
                    for (var e = 0; e < t; e++) this.input[e] = new n.default.Gain, this.input[e].connect(this._merger, 0, e), this.input[e].channelCount = 1, this.input[e].channelCountMode = "explicit";
                    this.left = this.input[0], this.right = this.input[1]
                }, n.default.extend(n.default.Merge, n.default.AudioNode), n.default.Merge.prototype.dispose = function () {
                    return this.input.forEach(function (t) {
                        t.dispose()
                    }), n.default.AudioNode.prototype.dispose.call(this), this.left = null, this.right = null, this._merger.disconnect(), this._merger = null, this
                }, e.default = n.default.Merge
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(35), i(4), n.default.supported && (AudioBuffer.prototype.copyToChannel || (AudioBuffer.prototype.copyToChannel = function (t, e, i) {
                    var n = this.getChannelData(e);
                    i = i || 0;
                    for (var o = 0; o < n.length; o++) n[o + i] = t[o]
                }, AudioBuffer.prototype.copyFromChannel = function (t, e, i) {
                    var n = this.getChannelData(e);
                    i = i || 0;
                    for (var o = 0; o < t.length; o++) t[o] = n[o + i]
                })), n.default.Buffer = function () {
                    var t = n.default.defaults(arguments, ["url", "onload", "onerror"], n.default.Buffer);
                    n.default.call(this), this._buffer = null, this._reversed = t.reverse, this._xhr = null, this.onload = n.default.noOp, t.url instanceof AudioBuffer || t.url instanceof n.default.Buffer ? (this.set(t.url), this.loaded || (this.onload = t.onload)) : n.default.isString(t.url) && this.load(t.url).then(t.onload).catch(t.onerror)
                }, n.default.extend(n.default.Buffer), n.default.Buffer.defaults = {
                    url: void 0,
                    reverse: !1,
                    onload: n.default.noOp,
                    onerror: n.default.noOp
                }, n.default.Buffer.prototype.set = function (t) {
                    return t instanceof n.default.Buffer ? t.loaded ? this._buffer = t.get() : t.onload = function () {
                        this.set(t), this.onload(this)
                    }.bind(this) : this._buffer = t, this._reversed && this._reverse(), this
                }, n.default.Buffer.prototype.get = function () {
                    return this._buffer
                }, n.default.Buffer.prototype.load = function (t, e, i) {
                    return new Promise(function (o, a) {
                        this._xhr = n.default.Buffer.load(t, function (t) {
                            this._xhr = null, this.set(t), o(this), this.onload(this), e && e(this)
                        }.bind(this), function (t) {
                            this._xhr = null, a(t), i && i(t)
                        }.bind(this))
                    }.bind(this))
                }, n.default.Buffer.prototype.dispose = function () {
                    return n.default.prototype.dispose.call(this), this._buffer = null, this._xhr && (n.default.Buffer._removeFromDownloadQueue(this._xhr), this._xhr.abort(), this._xhr = null), this
                }, Object.defineProperty(n.default.Buffer.prototype, "loaded", {
                    get: function () {
                        return this.length > 0
                    }
                }), Object.defineProperty(n.default.Buffer.prototype, "duration", {
                    get: function () {
                        return this._buffer ? this._buffer.duration : 0
                    }
                }), Object.defineProperty(n.default.Buffer.prototype, "length", {
                    get: function () {
                        return this._buffer ? this._buffer.length : 0
                    }
                }), Object.defineProperty(n.default.Buffer.prototype, "numberOfChannels", {
                    get: function () {
                        return this._buffer ? this._buffer.numberOfChannels : 0
                    }
                }), n.default.Buffer.prototype.fromArray = function (t) {
                    var e = t[0].length > 0, i = e ? t.length : 1, n = e ? t[0].length : t.length,
                        o = this.context.createBuffer(i, n, this.context.sampleRate);
                    e || 1 !== i || (t = [t]);
                    for (var a = 0; a < i; a++) o.copyToChannel(t[a], a);
                    return this._buffer = o, this
                }, n.default.Buffer.prototype.toMono = function (t) {
                    if (n.default.isNumber(t)) this.fromArray(this.toArray(t)); else {
                        for (var e = new Float32Array(this.length), i = this.numberOfChannels, o = 0; o < i; o++) for (var a = this.toArray(o), r = 0; r < a.length; r++) e[r] += a[r];
                        e = e.map(function (t) {
                            return t / i
                        }), this.fromArray(e)
                    }
                    return this
                }, n.default.Buffer.prototype.toArray = function (t) {
                    if (n.default.isNumber(t)) return this.getChannelData(t);
                    if (1 === this.numberOfChannels) return this.toArray(0);
                    for (var e = [], i = 0; i < this.numberOfChannels; i++) e[i] = this.getChannelData(i);
                    return e
                }, n.default.Buffer.prototype.getChannelData = function (t) {
                    return this._buffer.getChannelData(t)
                }, n.default.Buffer.prototype.slice = function (t, e) {
                    e = n.default.defaultArg(e, this.duration);
                    for (var i = Math.floor(this.context.sampleRate * this.toSeconds(t)), o = Math.floor(this.context.sampleRate * this.toSeconds(e)), a = [], r = 0; r < this.numberOfChannels; r++) a[r] = this.toArray(r).slice(i, o);
                    return (new n.default.Buffer).fromArray(a)
                }, n.default.Buffer.prototype._reverse = function () {
                    if (this.loaded) for (var t = 0; t < this.numberOfChannels; t++) Array.prototype.reverse.call(this.getChannelData(t));
                    return this
                }, Object.defineProperty(n.default.Buffer.prototype, "reverse", {
                    get: function () {
                        return this._reversed
                    }, set: function (t) {
                        this._reversed !== t && (this._reversed = t, this._reverse())
                    }
                }), n.default.Emitter.mixin(n.default.Buffer), n.default.Buffer._downloadQueue = [], n.default.Buffer.baseUrl = "", n.default.Buffer.fromArray = function (t) {
                    return (new n.default.Buffer).fromArray(t)
                }, n.default.Buffer.fromUrl = function (t) {
                    var e = new n.default.Buffer;
                    return e.load(t).then(function () {
                        return e
                    })
                }, n.default.Buffer._removeFromDownloadQueue = function (t) {
                    var e = n.default.Buffer._downloadQueue.indexOf(t);
                    -1 !== e && n.default.Buffer._downloadQueue.splice(e, 1)
                }, n.default.Buffer.load = function (t, e, i) {
                    function o(t) {
                        if (n.default.Buffer._removeFromDownloadQueue(c), n.default.Buffer.emit("error", t), !i) throw t;
                        i(t)
                    }

                    function a() {
                        for (var t = 0, e = 0; e < n.default.Buffer._downloadQueue.length; e++) t += n.default.Buffer._downloadQueue[e].progress;
                        n.default.Buffer.emit("progress", t / n.default.Buffer._downloadQueue.length)
                    }

                    e = n.default.defaultArg(e, n.default.noOp);
                    var r = t.match(/\[(.+\|?)+\]$/);
                    if (r) {
                        for (var s = r[1].split("|"), l = s[0], u = 0; u < s.length; u++) if (n.default.Buffer.supportsType(s[u])) {
                            l = s[u];
                            break
                        }
                        t = t.replace(r[0], l)
                    }
                    var c = new XMLHttpRequest;
                    return c.open("GET", n.default.Buffer.baseUrl + t, !0), c.responseType = "arraybuffer", c.progress = 0, n.default.Buffer._downloadQueue.push(c), c.addEventListener("load", function () {
                        200 === c.status ? n.default.context.decodeAudioData(c.response).then(function (t) {
                            c.progress = 1, a(), e(t), n.default.Buffer._removeFromDownloadQueue(c), 0 === n.default.Buffer._downloadQueue.length && n.default.Buffer.emit("load")
                        }).catch(function () {
                            n.default.Buffer._removeFromDownloadQueue(c), o("Tone.Buffer: could not decode audio data: " + t)
                        }) : o("Tone.Buffer: could not locate file: " + t)
                    }), c.addEventListener("error", o), c.addEventListener("progress", function (t) {
                        t.lengthComputable && (c.progress = t.loaded / t.total * .95, a())
                    }), c.send(), c
                }, n.default.Buffer.cancelDownloads = function () {
                    return n.default.Buffer._downloadQueue.slice().forEach(function (t) {
                        n.default.Buffer._removeFromDownloadQueue(t), t.abort()
                    }), n.default.Buffer
                }, n.default.Buffer.supportsType = function (t) {
                    var e = t.split(".");
                    return e = e[e.length - 1], "" !== document.createElement("audio").canPlayType("audio/" + e)
                }, n.default.loaded = function () {
                    function t() {
                        n.default.Buffer.off("load", e), n.default.Buffer.off("error", i)
                    }

                    var e, i;
                    return new Promise(function (t, o) {
                        e = function () {
                            t()
                        }, i = function () {
                            o()
                        }, n.default.Buffer.on("load", e), n.default.Buffer.on("error", i)
                    }).then(t).catch(function (e) {
                        throw t(), new Error(e)
                    })
                }, e.default = n.default.Buffer
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(17), i(26), i(1), i(2), i(22), i(4), i(28), n.default.LFO = function () {
                    var t = n.default.defaults(arguments, ["frequency", "min", "max"], n.default.LFO);
                    n.default.AudioNode.call(this), this._oscillator = new n.default.Oscillator({
                        frequency: t.frequency,
                        type: t.type
                    }), this.frequency = this._oscillator.frequency, this.amplitude = this._oscillator.volume, this.amplitude.units = n.default.Type.NormalRange, this.amplitude.value = t.amplitude, this._stoppedSignal = new n.default.Signal(0, n.default.Type.AudioRange), this._zeros = new n.default.Zero, this._stoppedValue = 0, this._a2g = new n.default.AudioToGain, this._scaler = this.output = new n.default.Scale(t.min, t.max), this._units = n.default.Type.Default, this.units = t.units, this._oscillator.chain(this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), this._readOnly(["amplitude", "frequency"]), this.phase = t.phase
                }, n.default.extend(n.default.LFO, n.default.AudioNode), n.default.LFO.defaults = {
                    type: "sine",
                    min: 0,
                    max: 1,
                    phase: 0,
                    frequency: "4n",
                    amplitude: 1,
                    units: n.default.Type.Default
                }, n.default.LFO.prototype.start = function (t) {
                    return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(0, t), this._oscillator.start(t), this
                }, n.default.LFO.prototype.stop = function (t) {
                    return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(this._stoppedValue, t), this._oscillator.stop(t), this
                }, n.default.LFO.prototype.sync = function () {
                    return this._oscillator.sync(), this._oscillator.syncFrequency(), this
                }, n.default.LFO.prototype.unsync = function () {
                    return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this
                }, Object.defineProperty(n.default.LFO.prototype, "min", {
                    get: function () {
                        return this._toUnits(this._scaler.min)
                    }, set: function (t) {
                        t = this._fromUnits(t), this._scaler.min = t
                    }
                }), Object.defineProperty(n.default.LFO.prototype, "max", {
                    get: function () {
                        return this._toUnits(this._scaler.max)
                    }, set: function (t) {
                        t = this._fromUnits(t), this._scaler.max = t
                    }
                }), Object.defineProperty(n.default.LFO.prototype, "type", {
                    get: function () {
                        return this._oscillator.type
                    }, set: function (t) {
                        this._oscillator.type = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue
                    }
                }), Object.defineProperty(n.default.LFO.prototype, "phase", {
                    get: function () {
                        return this._oscillator.phase
                    }, set: function (t) {
                        this._oscillator.phase = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue
                    }
                }), Object.defineProperty(n.default.LFO.prototype, "units", {
                    get: function () {
                        return this._units
                    }, set: function (t) {
                        var e = this.min, i = this.max;
                        this._units = t, this.min = e, this.max = i
                    }
                }), Object.defineProperty(n.default.LFO.prototype, "state", {
                    get: function () {
                        return this._oscillator.state
                    }
                }), n.default.LFO.prototype.connect = function (t) {
                    return t.constructor !== n.default.Signal && t.constructor !== n.default.Param || (this.convert = t.convert, this.units = t.units), n.default.SignalBase.prototype.connect.apply(this, arguments), this
                }, n.default.LFO.prototype._fromUnits = n.default.Param.prototype._fromUnits, n.default.LFO.prototype._toUnits = n.default.Param.prototype._toUnits, n.default.LFO.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["amplitude", "frequency"]), this._oscillator.dispose(), this._oscillator = null, this._stoppedSignal.dispose(), this._stoppedSignal = null, this._zeros.dispose(), this._zeros = null, this._scaler.dispose(), this._scaler = null, this._a2g.dispose(), this._a2g = null, this.frequency = null, this.amplitude = null, this
                }, e.default = n.default.LFO
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(29), i(90), i(2), i(3), n.default.Subtract = function (t) {
                    n.default.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.output = new n.default.Gain, this._neg = new n.default.Negate, this._param = this.input[1] = new n.default.Signal(t), this._param.chain(this._neg, this._sum)
                }, n.default.extend(n.default.Subtract, n.default.Signal), n.default.Subtract.prototype.dispose = function () {
                    return n.default.Signal.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this
                }, e.default = n.default.Subtract
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(4), i(1), i(24), n.default.Param = function () {
                    var t = n.default.defaults(arguments, ["param", "units", "convert"], n.default.Param);
                    n.default.AudioNode.call(this, t), this._param = this.input = t.param, this.units = t.units, this.convert = t.convert, this.overridden = !1, this._events = new n.default.Timeline(1e3), n.default.isDefined(t.value) && this._param && this.setValueAtTime(t.value, 0)
                }, n.default.extend(n.default.Param, n.default.AudioNode), n.default.Param.defaults = {
                    units: n.default.Type.Default,
                    convert: !0,
                    param: void 0
                }, Object.defineProperty(n.default.Param.prototype, "value", {
                    get: function () {
                        var t = this.now();
                        return this._toUnits(this.getValueAtTime(t))
                    }, set: function (t) {
                        this._initialValue = this._fromUnits(t), this.cancelScheduledValues(this.now()), this.setValueAtTime(t, this.now())
                    }
                }), Object.defineProperty(n.default.Param.prototype, "minValue", {
                    get: function () {
                        return this.units === n.default.Type.Time || this.units === n.default.Type.Frequency || this.units === n.default.Type.NormalRange || this.units === n.default.Type.Positive || this.units === n.default.Type.BPM ? 0 : this.units === n.default.Type.AudioRange ? -1 : this.units === n.default.Type.Decibels ? -1 / 0 : this._param.minValue
                    }
                }), Object.defineProperty(n.default.Param.prototype, "maxValue", {
                    get: function () {
                        return this.units === n.default.Type.NormalRange || this.units === n.default.Type.AudioRange ? 1 : this._param.maxValue
                    }
                }), n.default.Param.prototype._fromUnits = function (t) {
                    if (!this.convert && !n.default.isUndef(this.convert) || this.overridden) return t;
                    switch (this.units) {
                        case n.default.Type.Time:
                            return this.toSeconds(t);
                        case n.default.Type.Frequency:
                            return this.toFrequency(t);
                        case n.default.Type.Decibels:
                            return n.default.dbToGain(t);
                        case n.default.Type.NormalRange:
                            return Math.min(Math.max(t, 0), 1);
                        case n.default.Type.AudioRange:
                            return Math.min(Math.max(t, -1), 1);
                        case n.default.Type.Positive:
                            return Math.max(t, 0);
                        default:
                            return t
                    }
                }, n.default.Param.prototype._toUnits = function (t) {
                    if (!this.convert && !n.default.isUndef(this.convert)) return t;
                    switch (this.units) {
                        case n.default.Type.Decibels:
                            return n.default.gainToDb(t);
                        default:
                            return t
                    }
                }, n.default.Param.prototype._minOutput = 1e-5, n.default.Param.AutomationType = {
                    Linear: "linearRampToValueAtTime",
                    Exponential: "exponentialRampToValueAtTime",
                    Target: "setTargetAtTime",
                    SetValue: "setValueAtTime",
                    Cancel: "cancelScheduledValues"
                }, n.default.Param.prototype.setValueAtTime = function (t, e) {
                    return e = this.toSeconds(e), t = this._fromUnits(t), this._events.add({
                        type: n.default.Param.AutomationType.SetValue,
                        value: t,
                        time: e
                    }), this.log(n.default.Param.AutomationType.SetValue, t, e), this._param.setValueAtTime(t, e), this
                }, n.default.Param.prototype.getValueAtTime = function (t) {
                    t = this.toSeconds(t);
                    var e = this._events.getAfter(t), i = this._events.get(t),
                        o = n.default.defaultArg(this._initialValue, this._param.defaultValue), a = o;
                    if (null === i) a = o; else if (i.type === n.default.Param.AutomationType.Target) {
                        var r, s = this._events.getBefore(i.time);
                        r = null === s ? o : s.value, a = this._exponentialApproach(i.time, r, i.value, i.constant, t)
                    } else a = null === e ? i.value : e.type === n.default.Param.AutomationType.Linear ? this._linearInterpolate(i.time, i.value, e.time, e.value, t) : e.type === n.default.Param.AutomationType.Exponential ? this._exponentialInterpolate(i.time, i.value, e.time, e.value, t) : i.value;
                    return a
                }, n.default.Param.prototype.setRampPoint = function (t) {
                    t = this.toSeconds(t);
                    var e = this.getValueAtTime(t);
                    return this.cancelAndHoldAtTime(t), 0 === e && (e = this._minOutput), this.setValueAtTime(this._toUnits(e), t), this
                }, n.default.Param.prototype.linearRampToValueAtTime = function (t, e) {
                    return t = this._fromUnits(t), e = this.toSeconds(e), this._events.add({
                        type: n.default.Param.AutomationType.Linear,
                        value: t,
                        time: e
                    }), this.log(n.default.Param.AutomationType.Linear, t, e), this._param.linearRampToValueAtTime(t, e), this
                }, n.default.Param.prototype.exponentialRampToValueAtTime = function (t, e) {
                    return t = this._fromUnits(t), t = Math.max(this._minOutput, t), e = this.toSeconds(e), this._events.add({
                        type: n.default.Param.AutomationType.Exponential,
                        time: e,
                        value: t
                    }), this.log(n.default.Param.AutomationType.Exponential, t, e), this._param.exponentialRampToValueAtTime(t, e), this
                }, n.default.Param.prototype.exponentialRampTo = function (t, e, i) {
                    return i = this.toSeconds(i), this.setRampPoint(i), this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)), this
                }, n.default.Param.prototype.linearRampTo = function (t, e, i) {
                    return i = this.toSeconds(i), this.setRampPoint(i), this.linearRampToValueAtTime(t, i + this.toSeconds(e)), this
                }, n.default.Param.prototype.targetRampTo = function (t, e, i) {
                    return i = this.toSeconds(i), this.setRampPoint(i), this.exponentialApproachValueAtTime(t, i, e), this
                }, n.default.Param.prototype.exponentialApproachValueAtTime = function (t, e, i) {
                    var n = Math.log(this.toSeconds(i) + 1) / Math.log(200);
                    return e = this.toSeconds(e), this.setTargetAtTime(t, e, n), this.cancelAndHoldAtTime(e + .9 * i), this.linearRampToValueAtTime(t, e + i), this
                }, n.default.Param.prototype.setTargetAtTime = function (t, e, i) {
                    if (t = this._fromUnits(t), i <= 0) throw new Error("timeConstant must be greater than 0");
                    return e = this.toSeconds(e), this._events.add({
                        type: n.default.Param.AutomationType.Target,
                        value: t,
                        time: e,
                        constant: i
                    }), this.log(n.default.Param.AutomationType.Target, t, e, i), this._param.setTargetAtTime(t, e, i), this
                }, n.default.Param.prototype.setValueCurveAtTime = function (t, e, i, o) {
                    o = n.default.defaultArg(o, 1), i = this.toSeconds(i), e = this.toSeconds(e), this.setValueAtTime(t[0] * o, e);
                    for (var a = i / (t.length - 1), r = 1; r < t.length; r++) this.linearRampToValueAtTime(t[r] * o, e + r * a);
                    return this
                }, n.default.Param.prototype.cancelScheduledValues = function (t) {
                    return t = this.toSeconds(t), this._events.cancel(t), this._param.cancelScheduledValues(t), this.log(n.default.Param.AutomationType.Cancel, t), this
                }, n.default.Param.prototype.cancelAndHoldAtTime = function (t) {
                    t = this.toSeconds(t);
                    var e = this.getValueAtTime(t);
                    this.log("cancelAndHoldAtTime", t, "value=" + e), this._param.cancelScheduledValues(t);
                    var i = this._events.get(t), o = this._events.getAfter(t);
                    return i && i.time === t ? o ? this._events.cancel(o.time) : this._events.cancel(t + this.sampleTime) : o && (this._events.cancel(o.time), o.type === n.default.Param.AutomationType.Linear ? this.linearRampToValueAtTime(e, t) : o.type === n.default.Param.AutomationType.Exponential && this.exponentialRampToValueAtTime(e, t)), this._events.add({
                        type: n.default.Param.AutomationType.SetValue,
                        value: e,
                        time: t
                    }), this._param.setValueAtTime(e, t), this
                }, n.default.Param.prototype.rampTo = function (t, e, i) {
                    return e = n.default.defaultArg(e, .1), this.units === n.default.Type.Frequency || this.units === n.default.Type.BPM || this.units === n.default.Type.Decibels ? this.exponentialRampTo(t, e, i) : this.linearRampTo(t, e, i), this
                }, n.default.Param.prototype._exponentialApproach = function (t, e, i, n, o) {
                    return i + (e - i) * Math.exp(-(o - t) / n)
                }, n.default.Param.prototype._linearInterpolate = function (t, e, i, n, o) {
                    return e + (o - t) / (i - t) * (n - e)
                }, n.default.Param.prototype._exponentialInterpolate = function (t, e, i, n, o) {
                    return e * Math.pow(n / e, (o - t) / (i - t))
                }, n.default.Param.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._param = null, this._events = null, this
                }, e.default = n.default.Param
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(19), i(10), i(23), n.default.StereoEffect = function () {
                    n.default.AudioNode.call(this);
                    var t = n.default.defaults(arguments, ["wet"], n.default.Effect);
                    this.createInsOuts(1, 1), this._dryWet = new n.default.CrossFade(t.wet), this.wet = this._dryWet.fade, this._split = new n.default.Split, this.effectSendL = this._split.left, this.effectSendR = this._split.right, this._merge = new n.default.Merge, this.effectReturnL = this._merge.left, this.effectReturnR = this._merge.right, n.default.connect(this.input, this._split), n.default.connect(this.input, this._dryWet, 0, 0), this._merge.connect(this._dryWet, 0, 1), this._dryWet.connect(this.output), this._readOnly(["wet"])
                }, n.default.extend(n.default.StereoEffect, n.default.Effect), n.default.StereoEffect.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this._split.dispose(), this._split = null, this._merge.dispose(), this._merge = null, this.effectSendL = null, this.effectSendR = null, this.effectReturnL = null, this.effectReturnR = null, this._writable(["wet"]), this.wet = null, this
                }, e.default = n.default.StereoEffect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(83), i(4), i(24), i(35), i(3), i(81), i(80), i(56), n.default.Transport = function () {
                    n.default.Emitter.call(this), n.default.getContext(function () {
                        this.loop = !1, this._loopStart = 0, this._loopEnd = 0, this._ppq = o.defaults.PPQ, this._clock = new n.default.Clock({
                            callback: this._processTick.bind(this),
                            frequency: 0
                        }), this._bindClockEvents(), this.bpm = this._clock.frequency, this.bpm._toUnits = this._toUnits.bind(this), this.bpm._fromUnits = this._fromUnits.bind(this), this.bpm.units = n.default.Type.BPM, this.bpm.value = o.defaults.bpm, this._readOnly("bpm"), this._timeSignature = o.defaults.timeSignature, this._scheduledEvents = {}, this._timeline = new n.default.Timeline, this._repeatedEvents = new n.default.IntervalTimeline, this._syncedSignals = [], this._swingTicks = o.defaults.PPQ / 2, this._swingAmount = 0, this.context.transport = this
                    }.bind(this))
                }, n.default.extend(n.default.Transport, n.default.Emitter), n.default.Transport.defaults = {
                    bpm: 120,
                    swing: 0,
                    swingSubdivision: "8n",
                    timeSignature: 4,
                    loopStart: 0,
                    loopEnd: "4m",
                    PPQ: 192
                }, n.default.Transport.prototype.isTransport = !0, n.default.Transport.prototype._processTick = function (t, e) {
                    if (this._swingAmount > 0 && e % this._ppq != 0 && e % (2 * this._swingTicks) != 0) {
                        var i = e % (2 * this._swingTicks) / (2 * this._swingTicks),
                            o = Math.sin(i * Math.PI) * this._swingAmount;
                        t += n.default.Ticks(2 * this._swingTicks / 3).toSeconds() * o
                    }
                    this.loop && e >= this._loopEnd && (this.emit("loopEnd", t), this._clock.setTicksAtTime(this._loopStart, t), e = this._loopStart, this.emit("loopStart", t, this._clock.getSecondsAtTime(t)), this.emit("loop", t)), this._timeline.forEachAtTime(e, function (e) {
                        e.invoke(t)
                    })
                }, n.default.Transport.prototype.schedule = function (t, e) {
                    var i = new n.default.TransportEvent(this, {time: n.default.TransportTime(e), callback: t});
                    return this._addEvent(i, this._timeline)
                }, n.default.Transport.prototype.scheduleRepeat = function (t, e, i, o) {
                    var a = new n.default.TransportRepeatEvent(this, {
                        callback: t,
                        interval: n.default.Time(e),
                        time: n.default.TransportTime(i),
                        duration: n.default.Time(n.default.defaultArg(o, 1 / 0))
                    });
                    return this._addEvent(a, this._repeatedEvents)
                }, n.default.Transport.prototype.scheduleOnce = function (t, e) {
                    var i = new n.default.TransportEvent(this, {
                        time: n.default.TransportTime(e),
                        callback: t,
                        once: !0
                    });
                    return this._addEvent(i, this._timeline)
                }, n.default.Transport.prototype.clear = function (t) {
                    if (this._scheduledEvents.hasOwnProperty(t)) {
                        var e = this._scheduledEvents[t.toString()];
                        e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()]
                    }
                    return this
                }, n.default.Transport.prototype._addEvent = function (t, e) {
                    return this._scheduledEvents[t.id.toString()] = {event: t, timeline: e}, e.add(t), t.id
                }, n.default.Transport.prototype.cancel = function (t) {
                    return t = n.default.defaultArg(t, 0), t = this.toTicks(t), this._timeline.forEachFrom(t, function (t) {
                        this.clear(t.id)
                    }.bind(this)), this._repeatedEvents.forEachFrom(t, function (t) {
                        this.clear(t.id)
                    }.bind(this)), this
                }, n.default.Transport.prototype._bindClockEvents = function () {
                    this._clock.on("start", function (t, e) {
                        e = n.default.Ticks(e).toSeconds(), this.emit("start", t, e)
                    }.bind(this)), this._clock.on("stop", function (t) {
                        this.emit("stop", t)
                    }.bind(this)), this._clock.on("pause", function (t) {
                        this.emit("pause", t)
                    }.bind(this))
                }, Object.defineProperty(n.default.Transport.prototype, "state", {
                    get: function () {
                        return this._clock.getStateAtTime(this.now())
                    }
                }), n.default.Transport.prototype.start = function (t, e) {
                    return n.default.isDefined(e) && (e = this.toTicks(e)), this._clock.start(t, e), this
                }, n.default.Transport.prototype.stop = function (t) {
                    return this._clock.stop(t), this
                }, n.default.Transport.prototype.pause = function (t) {
                    return this._clock.pause(t), this
                }, n.default.Transport.prototype.toggle = function (t) {
                    return t = this.toSeconds(t), this._clock.getStateAtTime(t) !== n.default.State.Started ? this.start(t) : this.stop(t), this
                }, Object.defineProperty(n.default.Transport.prototype, "timeSignature", {
                    get: function () {
                        return this._timeSignature
                    }, set: function (t) {
                        n.default.isArray(t) && (t = t[0] / t[1] * 4), this._timeSignature = t
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "loopStart", {
                    get: function () {
                        return n.default.Ticks(this._loopStart).toSeconds()
                    }, set: function (t) {
                        this._loopStart = this.toTicks(t)
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "loopEnd", {
                    get: function () {
                        return n.default.Ticks(this._loopEnd).toSeconds()
                    }, set: function (t) {
                        this._loopEnd = this.toTicks(t)
                    }
                }), n.default.Transport.prototype.setLoopPoints = function (t, e) {
                    return this.loopStart = t, this.loopEnd = e, this
                }, Object.defineProperty(n.default.Transport.prototype, "swing", {
                    get: function () {
                        return this._swingAmount
                    }, set: function (t) {
                        this._swingAmount = t
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "swingSubdivision", {
                    get: function () {
                        return n.default.Ticks(this._swingTicks).toNotation()
                    }, set: function (t) {
                        this._swingTicks = this.toTicks(t)
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "position", {
                    get: function () {
                        var t = this.now(), e = this._clock.getTicksAtTime(t);
                        return n.default.Ticks(e).toBarsBeatsSixteenths()
                    }, set: function (t) {
                        var e = this.toTicks(t);
                        this.ticks = e
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "seconds", {
                    get: function () {
                        return this._clock.seconds
                    }, set: function (t) {
                        var e = this.now(), i = this.bpm.timeToTicks(t, e);
                        this.ticks = i
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "progress", {
                    get: function () {
                        if (this.loop) {
                            var t = this.now();
                            return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
                        }
                        return 0
                    }
                }), Object.defineProperty(n.default.Transport.prototype, "ticks", {
                    get: function () {
                        return this._clock.ticks
                    }, set: function (t) {
                        if (this._clock.ticks !== t) {
                            var e = this.now();
                            this.state === n.default.State.Started ? (this.emit("stop", e), this._clock.setTicksAtTime(t, e), this.emit("start", e, this.seconds)) : this._clock.setTicksAtTime(t, e)
                        }
                    }
                }), n.default.Transport.prototype.getTicksAtTime = function (t) {
                    return Math.round(this._clock.getTicksAtTime(t))
                }, n.default.Transport.prototype.getSecondsAtTime = function (t) {
                    return this._clock.getSecondsAtTime(t)
                }, Object.defineProperty(n.default.Transport.prototype, "PPQ", {
                    get: function () {
                        return this._ppq
                    }, set: function (t) {
                        var e = this.bpm.value;
                        this._ppq = t, this.bpm.value = e
                    }
                }), n.default.Transport.prototype._fromUnits = function (t) {
                    return 1 / (60 / t / this.PPQ)
                }, n.default.Transport.prototype._toUnits = function (t) {
                    return t / this.PPQ * 60
                }, n.default.Transport.prototype.nextSubdivision = function (t) {
                    if (t = this.toTicks(t), this.state !== n.default.State.Started) return 0;
                    var e = this.now(), i = t - this.getTicksAtTime(e) % t;
                    return this._clock.nextTickTime(i, e)
                }, n.default.Transport.prototype.syncSignal = function (t, e) {
                    if (!e) {
                        var i = this.now();
                        e = 0 !== t.getValueAtTime(i) ? t.getValueAtTime(i) / this.bpm.getValueAtTime(i) : 0
                    }
                    var o = new n.default.Gain(e);
                    return this.bpm.chain(o, t._param), this._syncedSignals.push({
                        ratio: o,
                        signal: t,
                        initial: t.value
                    }), t.value = 0, this
                }, n.default.Transport.prototype.unsyncSignal = function (t) {
                    for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
                        var i = this._syncedSignals[e];
                        i.signal === t && (i.ratio.dispose(), i.signal.value = i.initial, this._syncedSignals.splice(e, 1))
                    }
                    return this
                }, n.default.Transport.prototype.dispose = function () {
                    return n.default.Emitter.prototype.dispose.call(this), this._clock.dispose(), this._clock = null, this._writable("bpm"), this.bpm = null, this._timeline.dispose(), this._timeline = null, this._repeatedEvents.dispose(), this._repeatedEvents = null, this
                };
                var o = n.default.Transport;
                n.default.Transport = new o, n.default.Context.on("init", function (t) {
                    t.transport && t.transport.isTransport ? n.default.Transport = t.transport : n.default.Transport = new o
                }), n.default.Context.on("close", function (t) {
                    t.transport && t.transport.isTransport && t.transport.dispose()
                }), e.default = n.default.Transport
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(6), i(16), i(64), n.default.Oscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type"], n.default.Oscillator);
                    n.default.Source.call(this, t), this._oscillator = null, this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this._wave = null, this._partials = t.partials, this._partialCount = t.partialCount, this._phase = t.phase, this._type = t.type, t.partialCount && t.type !== n.default.Oscillator.Type.Custom && (this._type = this.baseType + t.partialCount.toString()), this.phase = this._phase, this._readOnly(["frequency", "detune"])
                }, n.default.extend(n.default.Oscillator, n.default.Source), n.default.Oscillator.defaults = {
                    type: "sine",
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    partials: [],
                    partialCount: 0
                }, n.default.Oscillator.Type = {
                    Sine: "sine",
                    Triangle: "triangle",
                    Sawtooth: "sawtooth",
                    Square: "square",
                    Custom: "custom"
                }, n.default.Oscillator.prototype._start = function (t) {
                    this.log("start", t);
                    var e = new n.default.OscillatorNode;
                    this._oscillator = e, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), t = this.toSeconds(t), this._oscillator.start(t)
                }, n.default.Oscillator.prototype._stop = function (t) {
                    return this.log("stop", t), this._oscillator && (t = this.toSeconds(t), this._oscillator.stop(t)), this
                }, n.default.Oscillator.prototype.restart = function (t) {
                    return this._oscillator && this._oscillator.cancelStop(), this._state.cancel(this.toSeconds(t)), this
                }, n.default.Oscillator.prototype.syncFrequency = function () {
                    return n.default.Transport.syncSignal(this.frequency), this
                }, n.default.Oscillator.prototype.unsyncFrequency = function () {
                    return n.default.Transport.unsyncSignal(this.frequency), this
                }, Object.defineProperty(n.default.Oscillator.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        var e = [n.default.Oscillator.Type.Sine, n.default.Oscillator.Type.Square, n.default.Oscillator.Type.Triangle, n.default.Oscillator.Type.Sawtooth].includes(t);
                        if (0 === this._phase && e) this._wave = null, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t); else {
                            var i = this._getRealImaginary(t, this._phase),
                                o = this.context.createPeriodicWave(i[0], i[1]);
                            this._wave = o, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave)
                        }
                        this._type = t
                    }
                }), Object.defineProperty(n.default.Oscillator.prototype, "baseType", {
                    get: function () {
                        return this._type.replace(this.partialCount, "")
                    }, set: function (t) {
                        this.partialCount && this._type !== n.default.Oscillator.Type.Custom && t !== n.default.Oscillator.Type.Custom ? this.type = t + this.partialCount : this.type = t
                    }
                }), Object.defineProperty(n.default.Oscillator.prototype, "partialCount", {
                    get: function () {
                        return this._partialCount
                    }, set: function (t) {
                        var e = this._type, i = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                        i && (e = i[1]), this._type !== n.default.Oscillator.Type.Custom && (this.type = 0 === t ? e : e + t.toString())
                    }
                }), n.default.Oscillator.prototype.get = function () {
                    var t = n.default.prototype.get.apply(this, arguments);
                    return t.type !== n.default.Oscillator.Type.Custom && delete t.partials, t
                }, n.default.Oscillator.prototype._getRealImaginary = function (t, e) {
                    var i = 2048, o = new Float32Array(i), a = new Float32Array(i), r = 1;
                    if (t === n.default.Oscillator.Type.Custom) r = this._partials.length + 1, this._partialCount = this._partials.length, i = r; else {
                        var s = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                        s ? (r = parseInt(s[2]) + 1, this._partialCount = parseInt(s[2]), t = s[1], i = r = Math.max(r, 2)) : this._partialCount = 0, this._partials = []
                    }
                    for (var l = 1; l < i; ++l) {
                        var u, c = 2 / (l * Math.PI);
                        switch (t) {
                            case n.default.Oscillator.Type.Sine:
                                u = l <= r ? 1 : 0, this._partials[l - 1] = u;
                                break;
                            case n.default.Oscillator.Type.Square:
                                u = 1 & l ? 2 * c : 0, this._partials[l - 1] = u;
                                break;
                            case n.default.Oscillator.Type.Sawtooth:
                                u = c * (1 & l ? 1 : -1), this._partials[l - 1] = u;
                                break;
                            case n.default.Oscillator.Type.Triangle:
                                u = 1 & l ? c * c * 2 * (l - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[l - 1] = u;
                                break;
                            case n.default.Oscillator.Type.Custom:
                                u = this._partials[l - 1];
                                break;
                            default:
                                throw new TypeError("Tone.Oscillator: invalid type: " + t)
                        }
                        0 !== u ? (o[l] = -u * Math.sin(e * l), a[l] = u * Math.cos(e * l)) : (o[l] = 0, a[l] = 0)
                    }
                    return [o, a]
                }, n.default.Oscillator.prototype._inverseFFT = function (t, e, i) {
                    for (var n = 0, o = t.length, a = 0; a < o; a++) n += t[a] * Math.cos(a * i) + e[a] * Math.sin(a * i);
                    return n
                }, n.default.Oscillator.prototype._getInitialValue = function () {
                    for (var t = this._getRealImaginary(this._type, 0), e = t[0], i = t[1], n = 0, o = 2 * Math.PI, a = 0; a < 8; a++) n = Math.max(this._inverseFFT(e, i, a / 8 * o), n);
                    return -this._inverseFFT(e, i, this._phase) / n
                }, Object.defineProperty(n.default.Oscillator.prototype, "partials", {
                    get: function () {
                        return this._partials
                    }, set: function (t) {
                        this._partials = t, this.type = n.default.Oscillator.Type.Custom
                    }
                }), Object.defineProperty(n.default.Oscillator.prototype, "phase", {
                    get: function () {
                        return this._phase * (180 / Math.PI)
                    }, set: function (t) {
                        this._phase = t * Math.PI / 180, this.type = this._type
                    }
                }), n.default.Oscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), null !== this._oscillator && (this._oscillator.dispose(), this._oscillator = null), this._wave = null, this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._partials = null, this
                }, e.default = n.default.Oscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(14), i(1), n.default.Delay = function () {
                    var t = n.default.defaults(arguments, ["delayTime", "maxDelay"], n.default.Delay);
                    n.default.AudioNode.call(this, t), this._maxDelay = Math.max(this.toSeconds(t.maxDelay), this.toSeconds(t.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(this._maxDelay), this.delayTime = new n.default.Param({
                        param: this._delayNode.delayTime,
                        units: n.default.Type.Time,
                        value: t.delayTime
                    }), this._readOnly("delayTime")
                }, n.default.extend(n.default.Delay, n.default.AudioNode), n.default.Delay.defaults = {
                    maxDelay: 1,
                    delayTime: 0
                }, Object.defineProperty(n.default.Delay.prototype, "maxDelay", {
                    get: function () {
                        return this._maxDelay
                    }
                }), n.default.Delay.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._delayNode.disconnect(), this._delayNode = null, this._writable("delayTime"), this.delayTime = null, this
                }, e.default = n.default.Delay
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(3), i(1), n.default.Split = function (t) {
                    t = n.default.defaultArg(t, 2), n.default.AudioNode.call(this), this.createInsOuts(0, t), this._splitter = this.input = this.context.createChannelSplitter(t);
                    for (var e = 0; e < t; e++) this.output[e] = new n.default.Gain, n.default.connect(this._splitter, this.output[e], e, 0), this.output[e].channelCount = 1, this.output[e].channelCountMode = "explicit";
                    this.left = this.output[0], this.right = this.output[1]
                }, n.default.extend(n.default.Split, n.default.AudioNode), n.default.Split.prototype.dispose = function () {
                    return this.output.forEach(function (t) {
                        t.dispose()
                    }), n.default.AudioNode.prototype.dispose.call(this), this._splitter.disconnect(), this.left = null, this.right = null, this._splitter = null, this
                }, e.default = n.default.Split
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0),
                    o = (i(35), i(24), i(44), ["baseLatency", "destination", "currentTime", "sampleRate", "listener", "state"]),
                    a = ["suspend", "close", "resume", "getOutputTimestamp", "createMediaElementSource", "createMediaStreamSource", "createMediaStreamDestination", "createBuffer", "decodeAudioData", "createBufferSource", "createConstantSource", "createGain", "createDelay", "createBiquadFilter", "createIIRFilter", "createWaveShaper", "createPanner", "createConvolver", "createDynamicsCompressor", "createAnalyser", "createScriptProcessor", "createStereoPanner", "createOscillator", "createPeriodicWave", "createChannelSplitter", "createChannelMerger", "audioWorklet"];
                n.default.Context = function () {
                    n.default.Emitter.call(this);
                    var t = n.default.defaults(arguments, ["context"], n.default.Context);
                    if (!t.context && (t.context = new n.default.global.AudioContext, !t.context)) throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
                    for (this._context = t.context; this._context.rawContext;) this._context = this._context.rawContext;
                    o.forEach(function (t) {
                        this._defineProperty(this._context, t)
                    }.bind(this)), a.forEach(function (t) {
                        this._defineMethod(this._context, t)
                    }.bind(this)), this._latencyHint = t.latencyHint, this._constants = {}, this.lookAhead = t.lookAhead, this._computedUpdateInterval = 0, this._ticker = new r(this.emit.bind(this, "tick"), t.clockSource, t.updateInterval), this._timeouts = new n.default.Timeline, this._timeoutIds = 0, this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = function (t) {
                        this.emit("statechange", t)
                    }.bind(this)
                }, n.default.extend(n.default.Context, n.default.Emitter), n.default.Emitter.mixin(n.default.Context), n.default.Context.defaults = {
                    clockSource: "worker",
                    latencyHint: "interactive",
                    lookAhead: .1,
                    updateInterval: .03
                }, n.default.Context.prototype.isContext = !0, n.default.Context.prototype._defineProperty = function (t, e) {
                    n.default.isUndef(this[e]) && Object.defineProperty(this, e, {
                        get: function () {
                            return t[e]
                        }, set: function (i) {
                            t[e] = i
                        }
                    })
                }, n.default.Context.prototype._defineMethod = function (t, e) {
                    n.default.isUndef(this[e]) && Object.defineProperty(this, e, {
                        get: function () {
                            return t[e].bind(t)
                        }
                    })
                }, n.default.Context.prototype.now = function () {
                    return this._context.currentTime + this.lookAhead
                }, Object.defineProperty(n.default.Context.prototype, "destination", {
                    get: function () {
                        return this.master ? this.master : this._context.destination
                    }
                }), n.default.Context.prototype.resume = function () {
                    return "suspended" === this._context.state && this._context instanceof AudioContext ? this._context.resume() : Promise.resolve()
                }, n.default.Context.prototype.close = function () {
                    var t = Promise.resolve();
                    return this !== n.default.global.TONE_AUDIO_CONTEXT && (t = this.rawContext.close()), t.then(function () {
                        n.default.Context.emit("close", this)
                    }.bind(this))
                }, n.default.Context.prototype.getConstant = function (t) {
                    if (this._constants[t]) return this._constants[t];
                    for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) i[n] = t;
                    var o = this._context.createBufferSource();
                    return o.channelCount = 1, o.channelCountMode = "explicit", o.buffer = e, o.loop = !0, o.start(0), this._constants[t] = o, o
                }, n.default.Context.prototype._timeoutLoop = function () {
                    for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t;) this._timeouts.shift().callback()
                }, n.default.Context.prototype.setTimeout = function (t, e) {
                    this._timeoutIds++;
                    var i = this.now();
                    return this._timeouts.add({callback: t, time: i + e, id: this._timeoutIds}), this._timeoutIds
                }, n.default.Context.prototype.clearTimeout = function (t) {
                    return this._timeouts.forEach(function (e) {
                        e.id === t && this.remove(e)
                    }), this
                }, Object.defineProperty(n.default.Context.prototype, "updateInterval", {
                    get: function () {
                        return this._ticker.updateInterval
                    }, set: function (t) {
                        this._ticker.updateInterval = t
                    }
                }), Object.defineProperty(n.default.Context.prototype, "rawContext", {
                    get: function () {
                        return this._context
                    }
                }), Object.defineProperty(n.default.Context.prototype, "clockSource", {
                    get: function () {
                        return this._ticker.type
                    }, set: function (t) {
                        this._ticker.type = t
                    }
                }), Object.defineProperty(n.default.Context.prototype, "latencyHint", {
                    get: function () {
                        return this._latencyHint
                    }, set: function (t) {
                        var e = t;
                        if (this._latencyHint = t, n.default.isString(t)) switch (t) {
                            case"interactive":
                                e = .1, this._context.latencyHint = t;
                                break;
                            case"playback":
                                e = .8, this._context.latencyHint = t;
                                break;
                            case"balanced":
                                e = .25, this._context.latencyHint = t;
                                break;
                            case"fastest":
                                this._context.latencyHint = "interactive", e = .01
                        }
                        this.lookAhead = e, this.updateInterval = e / 3
                    }
                }), n.default.Context.prototype.dispose = function () {
                    return this.close().then(function () {
                        for (var t in n.default.Emitter.prototype.dispose.call(this), this._ticker.dispose(), this._ticker = null, this._timeouts.dispose(), this._timeouts = null, this._constants) this._constants[t].disconnect();
                        this._constants = null
                    }.bind(this))
                };
                var r = function (t, e, i) {
                    this._type = e, this._updateInterval = i, this._callback = n.default.defaultArg(t, n.default.noOp), this._createClock()
                };
                if (r.Type = {
                    Worker: "worker",
                    Timeout: "timeout",
                    Offline: "offline"
                }, r.prototype._createWorker = function () {
                    n.default.global.URL = n.default.global.URL || n.default.global.webkitURL;
                    var t = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),
                        e = URL.createObjectURL(t), i = new Worker(e);
                    i.onmessage = this._callback.bind(this), this._worker = i
                }, r.prototype._createTimeout = function () {
                    this._timeout = setTimeout(function () {
                        this._createTimeout(), this._callback()
                    }.bind(this), 1e3 * this._updateInterval)
                }, r.prototype._createClock = function () {
                    if (this._type === r.Type.Worker) try {
                        this._createWorker()
                    } catch (t) {
                        this._type = r.Type.Timeout, this._createClock()
                    } else this._type === r.Type.Timeout && this._createTimeout()
                }, Object.defineProperty(r.prototype, "updateInterval", {
                    get: function () {
                        return this._updateInterval
                    }, set: function (t) {
                        this._updateInterval = Math.max(t, 128 / 44100), this._type === r.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1))
                    }
                }), Object.defineProperty(r.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        this._disposeClock(), this._type = t, this._createClock()
                    }
                }), r.prototype._disposeClock = function () {
                    this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._worker && (this._worker.terminate(), this._worker.onmessage = null, this._worker = null)
                }, r.prototype.dispose = function () {
                    this._disposeClock(), this._callback = null
                }, n.default.supported && !n.default.initialized) {
                    if (n.default.global.TONE_AUDIO_CONTEXT || (n.default.global.TONE_AUDIO_CONTEXT = new n.default.Context), n.default.context = n.default.global.TONE_AUDIO_CONTEXT, !n.default.global.TONE_SILENCE_LOGGING) {
                        var s = "v";
                        "dev" === n.default.version && (s = "");
                        var l = " * Tone.js " + s + n.default.version + " * ";
                        console.log("%c" + l, "background: #000; color: #fff")
                    }
                } else n.default.supported || n.default.global.TONE_SILENCE_LOGGING || console.warn("This browser does not support Tone.js");
                e.default = n.default.Context
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(4), i(40), n.default.Instrument = function (t) {
                    t = n.default.defaultArg(t, n.default.Instrument.defaults), n.default.AudioNode.call(this), this._volume = this.output = new n.default.Volume(t.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._scheduledEvents = []
                }, n.default.extend(n.default.Instrument, n.default.AudioNode), n.default.Instrument.defaults = {volume: 0}, n.default.Instrument.prototype.triggerAttack = n.default.noOp, n.default.Instrument.prototype.triggerRelease = n.default.noOp, n.default.Instrument.prototype.sync = function () {
                    return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this
                }, n.default.Instrument.prototype._syncMethod = function (t, e) {
                    var i = this["_original_" + t] = this[t];
                    this[t] = function () {
                        var t = Array.prototype.slice.call(arguments), o = t[e],
                            a = n.default.Transport.schedule(function (n) {
                                t[e] = n, i.apply(this, t)
                            }.bind(this), o);
                        this._scheduledEvents.push(a)
                    }.bind(this)
                }, n.default.Instrument.prototype.unsync = function () {
                    return this._scheduledEvents.forEach(function (t) {
                        n.default.Transport.clear(t)
                    }), this._scheduledEvents = [], this._original_triggerAttack && (this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this
                }, n.default.Instrument.prototype.triggerAttackRelease = function (t, e, i, n) {
                    return i = this.toSeconds(i), e = this.toSeconds(e), this.triggerAttack(t, i, n), this.triggerRelease(i + e), this
                }, n.default.Instrument.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable(["volume"]), this.volume = null, this.unsync(), this._scheduledEvents = null, this
                }, e.default = n.default.Instrument
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), i(2), n.default.AudioToGain = function () {
                    n.default.SignalBase.call(this), this._norm = this.input = this.output = new n.default.WaveShaper(function (t) {
                        return (t + 1) / 2
                    })
                }, n.default.extend(n.default.AudioToGain, n.default.SignalBase), n.default.AudioToGain.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
                }, e.default = n.default.AudioToGain
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(13), i(89), i(3), i(1), n.default.CrossFade = function (t) {
                    n.default.AudioNode.call(this), this.createInsOuts(2, 1), this.a = this.input[0] = new n.default.Gain, this.b = this.input[1] = new n.default.Gain, this.fade = new n.default.Signal(n.default.defaultArg(t, .5), n.default.Type.NormalRange), this._equalPowerA = new n.default.EqualPowerGain, this._equalPowerB = new n.default.EqualPowerGain, this._one = this.context.getConstant(1), this._invert = new n.default.Subtract, this.a.connect(this.output), this.b.connect(this.output), this.fade.chain(this._equalPowerB, this.b.gain), n.default.connect(this._one, this._invert, 0, 0), this.fade.connect(this._invert, 0, 1), this._invert.chain(this._equalPowerA, this.a.gain), this._readOnly("fade")
                }, n.default.extend(n.default.CrossFade, n.default.AudioNode), n.default.CrossFade.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this._one = null, this.a.dispose(), this.a = null, this.b.dispose(), this.b = null, this
                }, e.default = n.default.CrossFade
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                n.default.Timeline = function () {
                    var t = n.default.defaults(arguments, ["memory"], n.default.Timeline);
                    n.default.call(this), this._timeline = [], this.memory = t.memory
                }, n.default.extend(n.default.Timeline), n.default.Timeline.defaults = {memory: 1 / 0}, Object.defineProperty(n.default.Timeline.prototype, "length", {
                    get: function () {
                        return this._timeline.length
                    }
                }), n.default.Timeline.prototype.add = function (t) {
                    if (n.default.isUndef(t.time)) throw new Error("Tone.Timeline: events must have a time attribute");
                    t.time = t.time.valueOf();
                    var e = this._search(t.time);
                    if (this._timeline.splice(e + 1, 0, t), this.length > this.memory) {
                        var i = this.length - this.memory;
                        this._timeline.splice(0, i)
                    }
                    return this
                }, n.default.Timeline.prototype.remove = function (t) {
                    var e = this._timeline.indexOf(t);
                    return -1 !== e && this._timeline.splice(e, 1), this
                }, n.default.Timeline.prototype.get = function (t, e) {
                    e = n.default.defaultArg(e, "time");
                    var i = this._search(t, e);
                    return -1 !== i ? this._timeline[i] : null
                }, n.default.Timeline.prototype.peek = function () {
                    return this._timeline[0]
                }, n.default.Timeline.prototype.shift = function () {
                    return this._timeline.shift()
                }, n.default.Timeline.prototype.getAfter = function (t, e) {
                    e = n.default.defaultArg(e, "time");
                    var i = this._search(t, e);
                    return i + 1 < this._timeline.length ? this._timeline[i + 1] : null
                }, n.default.Timeline.prototype.getBefore = function (t, e) {
                    e = n.default.defaultArg(e, "time");
                    var i = this._timeline.length;
                    if (i > 0 && this._timeline[i - 1][e] < t) return this._timeline[i - 1];
                    var o = this._search(t, e);
                    return o - 1 >= 0 ? this._timeline[o - 1] : null
                }, n.default.Timeline.prototype.cancel = function (t) {
                    if (this._timeline.length > 1) {
                        var e = this._search(t);
                        if (e >= 0) if (this._timeline[e].time === t) {
                            for (var i = e; i >= 0 && this._timeline[i].time === t; i--) e = i;
                            this._timeline = this._timeline.slice(0, e)
                        } else this._timeline = this._timeline.slice(0, e + 1); else this._timeline = []
                    } else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
                    return this
                }, n.default.Timeline.prototype.cancelBefore = function (t) {
                    var e = this._search(t);
                    return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this
                }, n.default.Timeline.prototype.previousEvent = function (t) {
                    var e = this._timeline.indexOf(t);
                    return e > 0 ? this._timeline[e - 1] : null
                }, n.default.Timeline.prototype._search = function (t, e) {
                    if (0 === this._timeline.length) return -1;
                    e = n.default.defaultArg(e, "time");
                    var i = 0, o = this._timeline.length, a = o;
                    if (o > 0 && this._timeline[o - 1][e] <= t) return o - 1;
                    for (; i < a;) {
                        var r = Math.floor(i + (a - i) / 2), s = this._timeline[r], l = this._timeline[r + 1];
                        if (s[e] === t) {
                            for (var u = r; u < this._timeline.length; u++) this._timeline[u][e] === t && (r = u);
                            return r
                        }
                        if (s[e] < t && l[e] > t) return r;
                        s[e] > t ? a = r : i = r + 1
                    }
                    return -1
                }, n.default.Timeline.prototype._iterate = function (t, e, i) {
                    e = n.default.defaultArg(e, 0), i = n.default.defaultArg(i, this._timeline.length - 1), this._timeline.slice(e, i + 1).forEach(function (e) {
                        t.call(this, e)
                    }.bind(this))
                }, n.default.Timeline.prototype.forEach = function (t) {
                    return this._iterate(t), this
                }, n.default.Timeline.prototype.forEachBefore = function (t, e) {
                    var i = this._search(t);
                    return -1 !== i && this._iterate(e, 0, i), this
                }, n.default.Timeline.prototype.forEachAfter = function (t, e) {
                    var i = this._search(t);
                    return this._iterate(e, i + 1), this
                }, n.default.Timeline.prototype.forEachBetween = function (t, e, i) {
                    var n = this._search(t), o = this._search(e);
                    return -1 !== n && -1 !== o ? (this._timeline[n].time !== t && (n += 1), this._timeline[o].time === e && (o -= 1), this._iterate(i, n, o)) : -1 === n && this._iterate(i, 0, o), this
                }, n.default.Timeline.prototype.forEachFrom = function (t, e) {
                    for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t;) i--;
                    return this._iterate(e, i + 1), this
                }, n.default.Timeline.prototype.forEachAtTime = function (t, e) {
                    var i = this._search(t);
                    return -1 !== i && this._iterate(function (i) {
                        i.time === t && e.call(this, i)
                    }, 0, i), this
                }, n.default.Timeline.prototype.dispose = function () {
                    return n.default.prototype.dispose.call(this), this._timeline = null, this
                }, e.default = n.default.Timeline
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(21), i(2), n.default.Monophonic = function (t) {
                    t = n.default.defaultArg(t, n.default.Monophonic.defaults), n.default.Instrument.call(this, t), this.portamento = t.portamento
                }, n.default.extend(n.default.Monophonic, n.default.Instrument), n.default.Monophonic.defaults = {portamento: 0}, n.default.Monophonic.prototype.triggerAttack = function (t, e, i) {
                    return this.log("triggerAttack", t, e, i), e = this.toSeconds(e), this._triggerEnvelopeAttack(e, i), this.setNote(t, e), this
                }, n.default.Monophonic.prototype.triggerRelease = function (t) {
                    return this.log("triggerRelease", t), t = this.toSeconds(t), this._triggerEnvelopeRelease(t), this
                }, n.default.Monophonic.prototype._triggerEnvelopeAttack = function () {
                }, n.default.Monophonic.prototype._triggerEnvelopeRelease = function () {
                }, n.default.Monophonic.prototype.getLevelAtTime = function (t) {
                    return t = this.toSeconds(t), this.envelope.getValueAtTime(t)
                }, n.default.Monophonic.prototype.setNote = function (t, e) {
                    if (e = this.toSeconds(e), this.portamento > 0 && this.getLevelAtTime(e) > .05) {
                        var i = this.toSeconds(this.portamento);
                        this.frequency.exponentialRampTo(t, i, e)
                    } else this.frequency.setValueAtTime(t, e);
                    return this
                }, e.default = n.default.Monophonic
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(29), i(5), i(2), n.default.Scale = function (t, e) {
                    n.default.SignalBase.call(this), this._outputMin = n.default.defaultArg(t, 0), this._outputMax = n.default.defaultArg(e, 1), this._scale = this.input = new n.default.Multiply(1), this._add = this.output = new n.default.Add(0), this._scale.connect(this._add), this._setRange()
                }, n.default.extend(n.default.Scale, n.default.SignalBase), Object.defineProperty(n.default.Scale.prototype, "min", {
                    get: function () {
                        return this._outputMin
                    }, set: function (t) {
                        this._outputMin = t, this._setRange()
                    }
                }), Object.defineProperty(n.default.Scale.prototype, "max", {
                    get: function () {
                        return this._outputMax
                    }, set: function (t) {
                        this._outputMax = t, this._setRange()
                    }
                }), n.default.Scale.prototype._setRange = function () {
                    this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin
                }, n.default.Scale.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this
                }, e.default = n.default.Scale
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(3), i(1), n.default.Volume = function () {
                    var t = n.default.defaults(arguments, ["volume"], n.default.Volume);
                    n.default.AudioNode.call(this, t), this.output = this.input = new n.default.Gain(t.volume, n.default.Type.Decibels), this._unmutedVolume = t.volume, this.volume = this.output.gain, this._readOnly("volume"), this.mute = t.mute
                }, n.default.extend(n.default.Volume, n.default.AudioNode), n.default.Volume.defaults = {
                    volume: 0,
                    mute: !1
                }, Object.defineProperty(n.default.Volume.prototype, "mute", {
                    get: function () {
                        return this.volume.value === -1 / 0
                    }, set: function (t) {
                        !this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
                    }
                }), n.default.Volume.prototype.dispose = function () {
                    return this.input.dispose(), n.default.AudioNode.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), this.volume = null, this
                }, e.default = n.default.Volume
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(3), i(30), n.default.Zero = function () {
                    n.default.SignalBase.call(this), this._gain = this.input = this.output = new n.default.Gain, n.default.connect(this.context.getConstant(0), this._gain)
                }, n.default.extend(n.default.Zero, n.default.SignalBase), n.default.Zero.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._gain.dispose(), this._gain = null, this
                }, e.default = n.default.Zero
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(3), n.default.Add = function (t) {
                    n.default.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.input[1] = this.output = new n.default.Gain, this._param = this.input[1] = new n.default.Signal(t), this._param.connect(this._sum)
                }, n.default.extend(n.default.Add, n.default.Signal), n.default.Add.prototype.dispose = function () {
                    return n.default.Signal.prototype.dispose.call(this), this._sum.dispose(), this._sum = null, this
                }, e.default = n.default.Add
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(1), n.default.SignalBase = function () {
                    n.default.AudioNode.call(this)
                }, n.default.extend(n.default.SignalBase, n.default.AudioNode), n.default.SignalBase.prototype.connect = function (t, e, i) {
                    return n.default.Signal && n.default.Signal === t.constructor || n.default.Param && n.default.Param === t.constructor ? (t._param.cancelScheduledValues(0), t._param.setValueAtTime(0, 0), t.overridden = !0) : t instanceof AudioParam && (t.cancelScheduledValues(0), t.setValueAtTime(0, 0)), n.default.AudioNode.prototype.connect.call(this, t, e, i), this
                }, e.default = n.default.SignalBase
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(47), i(3), n.default.AmplitudeEnvelope = function () {
                    n.default.Envelope.apply(this, arguments), this.input = this.output = new n.default.Gain, this._sig.connect(this.output.gain)
                }, n.default.extend(n.default.AmplitudeEnvelope, n.default.Envelope), n.default.AmplitudeEnvelope.prototype.dispose = function () {
                    return n.default.Envelope.prototype.dispose.call(this), this
                }, e.default = n.default.AmplitudeEnvelope
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(11), i(6), i(3), i(1), n.default.BufferSource = function () {
                    var t = n.default.defaults(arguments, ["buffer", "onload"], n.default.BufferSource);
                    n.default.AudioNode.call(this, t), this.onended = t.onended, this._startTime = -1, this._sourceStarted = !1, this._sourceStopped = !1, this._stopTime = -1, this._gainNode = this.output = new n.default.Gain(0), this._source = this.context.createBufferSource(), n.default.connect(this._source, this._gainNode), this._source.onended = this._onended.bind(this), this._buffer = new n.default.Buffer(t.buffer, t.onload), this.playbackRate = new n.default.Param({
                        param: this._source.playbackRate,
                        units: n.default.Type.Positive,
                        value: t.playbackRate
                    }), this.fadeIn = t.fadeIn, this.fadeOut = t.fadeOut, this.curve = t.curve, this._onendedTimeout = -1, this.loop = t.loop, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd
                }, n.default.extend(n.default.BufferSource, n.default.AudioNode), n.default.BufferSource.defaults = {
                    onended: n.default.noOp,
                    onload: n.default.noOp,
                    loop: !1,
                    loopStart: 0,
                    loopEnd: 0,
                    fadeIn: 0,
                    fadeOut: 0,
                    curve: "linear",
                    playbackRate: 1
                }, Object.defineProperty(n.default.BufferSource.prototype, "state", {
                    get: function () {
                        return this.getStateAtTime(this.now())
                    }
                }), n.default.BufferSource.prototype.getStateAtTime = function (t) {
                    return t = this.toSeconds(t), -1 !== this._startTime && this._startTime <= t && (-1 === this._stopTime || t < this._stopTime) && !this._sourceStopped ? n.default.State.Started : n.default.State.Stopped
                }, n.default.BufferSource.prototype.start = function (t, e, i, o) {
                    this.log("start", t, e, i, o), this.assert(-1 === this._startTime, "can only be started once"), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), t = this.toSeconds(t), e = this.loop ? n.default.defaultArg(e, this.loopStart) : n.default.defaultArg(e, 0), e = this.toSeconds(e), e = Math.max(e, 0), o = n.default.defaultArg(o, 1);
                    var a = this.toSeconds(this.fadeIn);
                    if (a > 0 ? (this._gainNode.gain.setValueAtTime(0, t), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(o, t + a) : this._gainNode.gain.exponentialApproachValueAtTime(o, t, a)) : this._gainNode.gain.setValueAtTime(o, t), this._startTime = t, n.default.isDefined(i)) {
                        var r = this.toSeconds(i);
                        r = Math.max(r, 0), this.stop(t + r)
                    }
                    if (this.loop) {
                        var s = this.loopEnd || this.buffer.duration, l = this.loopStart;
                        e >= s && (e = (e - l) % (s - l) + l)
                    }
                    return this._source.buffer = this.buffer.get(), this._source.loopEnd = this.loopEnd || this.buffer.duration, e < this.buffer.duration && (this._sourceStarted = !0, this._source.start(t, e)), this
                }, n.default.BufferSource.prototype.stop = function (t) {
                    this.log("stop", t), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), t = this.toSeconds(t), -1 !== this._stopTime && this.cancelStop();
                    var e = this.toSeconds(this.fadeOut);
                    return this._stopTime = t + e, e > 0 ? "linear" === this.curve ? this._gainNode.gain.linearRampTo(0, e, t) : this._gainNode.gain.targetRampTo(0, e, t) : (this._gainNode.gain.cancelAndHoldAtTime(t), this._gainNode.gain.setValueAtTime(0, t)), n.default.context.clearTimeout(this._onendedTimeout), this._onendedTimeout = n.default.context.setTimeout(this._onended.bind(this), this._stopTime - this.now()), this
                }, n.default.BufferSource.prototype.cancelStop = function () {
                    if (-1 !== this._startTime && !this._sourceStopped) {
                        var t = this.toSeconds(this.fadeIn);
                        this._gainNode.gain.cancelScheduledValues(this._startTime + t + this.sampleTime), this.context.clearTimeout(this._onendedTimeout), this._stopTime = -1
                    }
                    return this
                }, n.default.BufferSource.prototype._onended = function () {
                    if (!this._sourceStopped) {
                        this._sourceStopped = !0;
                        var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
                        this._sourceStarted && -1 !== this._stopTime && this._source.stop(this._stopTime + t), this.onended(this), setTimeout(function () {
                            this._source && (this._source.disconnect(), this._gainNode.disconnect())
                        }.bind(this), 1e3 * t + 100)
                    }
                }, Object.defineProperty(n.default.BufferSource.prototype, "loopStart", {
                    get: function () {
                        return this._source.loopStart
                    }, set: function (t) {
                        this._source.loopStart = this.toSeconds(t)
                    }
                }), Object.defineProperty(n.default.BufferSource.prototype, "loopEnd", {
                    get: function () {
                        return this._source.loopEnd
                    }, set: function (t) {
                        this._source.loopEnd = this.toSeconds(t)
                    }
                }), Object.defineProperty(n.default.BufferSource.prototype, "buffer", {
                    get: function () {
                        return this._buffer
                    }, set: function (t) {
                        this._buffer.set(t)
                    }
                }), Object.defineProperty(n.default.BufferSource.prototype, "loop", {
                    get: function () {
                        return this._source.loop
                    }, set: function (t) {
                        this._source.loop = t, this.cancelStop()
                    }
                }), n.default.BufferSource.prototype.dispose = function () {
                    return this._wasDisposed || (this._wasDisposed = !0, n.default.AudioNode.prototype.dispose.call(this), this.onended = null, this._source.onended = null, this._source.disconnect(), this._source = null, this._gainNode.dispose(), this._gainNode = null, this._buffer.dispose(), this._buffer = null, this._startTime = -1, this.playbackRate = null, n.default.context.clearTimeout(this._onendedTimeout)), this
                }, e.default = n.default.BufferSource
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(2), i(5), i(3), n.default.FeedbackEffect = function () {
                    var t = n.default.defaults(arguments, ["feedback"], n.default.FeedbackEffect);
                    n.default.Effect.call(this, t), this._feedbackGain = new n.default.Gain(t.feedback, n.default.Type.NormalRange), this.feedback = this._feedbackGain.gain, this.effectReturn.chain(this._feedbackGain, this.effectSend), this._readOnly(["feedback"])
                }, n.default.extend(n.default.FeedbackEffect, n.default.Effect), n.default.FeedbackEffect.defaults = {feedback: .125}, n.default.FeedbackEffect.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._writable(["feedback"]), this._feedbackGain.dispose(), this._feedbackGain = null, this.feedback = null, this
                }, e.default = n.default.FeedbackEffect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(24), i(4), n.default.TimelineState = function (t) {
                    n.default.Timeline.call(this), this._initial = t
                }, n.default.extend(n.default.TimelineState, n.default.Timeline), n.default.TimelineState.prototype.getValueAtTime = function (t) {
                    var e = this.get(t);
                    return null !== e ? e.state : this._initial
                }, n.default.TimelineState.prototype.setStateAtTime = function (t, e) {
                    return this.add({state: t, time: e}), this
                }, n.default.TimelineState.prototype.getLastState = function (t, e) {
                    e = this.toSeconds(e);
                    for (var i = this._search(e); i >= 0; i--) {
                        var n = this._timeline[i];
                        if (n.state === t) return n
                    }
                }, n.default.TimelineState.prototype.getNextState = function (t, e) {
                    e = this.toSeconds(e);
                    var i = this._search(e);
                    if (-1 !== i) for (var n = i; n < this._timeline.length; n++) {
                        var o = this._timeline[n];
                        if (o.state === t) return o
                    }
                }, e.default = n.default.TimelineState
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                n.default.Emitter = function () {
                    n.default.call(this), this._events = {}
                }, n.default.extend(n.default.Emitter), n.default.Emitter.prototype.on = function (t, e) {
                    for (var i = t.split(/\W+/), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this._events.hasOwnProperty(o) || (this._events[o] = []), this._events[o].push(e)
                    }
                    return this
                }, n.default.Emitter.prototype.once = function (t, e) {
                    var i = function () {
                        e.apply(this, arguments), this.off(t, i)
                    }.bind(this);
                    return this.on(t, i), this
                }, n.default.Emitter.prototype.off = function (t, e) {
                    for (var i = t.split(/\W+/), o = 0; o < i.length; o++) if (t = i[o], this._events.hasOwnProperty(t)) if (n.default.isUndef(e)) this._events[t] = []; else for (var a = this._events[t], r = 0; r < a.length; r++) a[r] === e && a.splice(r, 1);
                    return this
                }, n.default.Emitter.prototype.emit = function (t) {
                    if (this._events) {
                        var e = Array.apply(null, arguments).slice(1);
                        if (this._events.hasOwnProperty(t)) for (var i = this._events[t].slice(0), n = 0, o = i.length; n < o; n++) i[n].apply(this, e)
                    }
                    return this
                }, n.default.Emitter.mixin = function (t) {
                    var e = ["on", "once", "off", "emit"];
                    t._events = {};
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i], a = n.default.Emitter.prototype[o];
                        t[o] = a
                    }
                    return n.default.Emitter
                }, n.default.Emitter.prototype.dispose = function () {
                    return n.default.prototype.dispose.call(this), this._events = null, this
                }, e.default = n.default.Emitter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(1), i(44), n.default.supported && (AnalyserNode.prototype.getFloatTimeDomainData || (AnalyserNode.prototype.getFloatTimeDomainData = function (t) {
                    var e = new Uint8Array(t.length);
                    this.getByteTimeDomainData(e);
                    for (var i = 0; i < e.length; i++) t[i] = (e[i] - 128) / 128
                })), n.default.Analyser = function () {
                    var t = n.default.defaults(arguments, ["type", "size"], n.default.Analyser);
                    n.default.AudioNode.call(this), this._analyser = this.input = this.output = this.context.createAnalyser(), this._type = t.type, this._buffer = null, this.size = t.size, this.type = t.type
                }, n.default.extend(n.default.Analyser, n.default.AudioNode), n.default.Analyser.defaults = {
                    size: 1024,
                    type: "fft",
                    smoothing: .8
                }, n.default.Analyser.Type = {
                    Waveform: "waveform",
                    FFT: "fft"
                }, n.default.Analyser.prototype.getValue = function () {
                    return this._type === n.default.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === n.default.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer), this._buffer
                }, Object.defineProperty(n.default.Analyser.prototype, "size", {
                    get: function () {
                        return this._analyser.frequencyBinCount
                    }, set: function (t) {
                        this._analyser.fftSize = 2 * t, this._buffer = new Float32Array(t)
                    }
                }), Object.defineProperty(n.default.Analyser.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        if (t !== n.default.Analyser.Type.Waveform && t !== n.default.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + t);
                        this._type = t
                    }
                }), Object.defineProperty(n.default.Analyser.prototype, "smoothing", {
                    get: function () {
                        return this._analyser.smoothingTimeConstant
                    }, set: function (t) {
                        this._analyser.smoothingTimeConstant = t
                    }
                }), n.default.Analyser.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this._analyser.disconnect(), this._analyser = null, this._buffer = null
                }, e.default = n.default.Analyser
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(17), i(50), i(69), i(49), i(68), i(67), n.default.OmniOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type"], n.default.OmniOscillator);
                    n.default.Source.call(this, t), this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this._sourceType = void 0, this._oscillator = null, this.type = t.type, this._readOnly(["frequency", "detune"]), this.set(t)
                }, n.default.extend(n.default.OmniOscillator, n.default.Source), n.default.OmniOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    type: "sine",
                    phase: 0
                };
                var o = "PulseOscillator", a = "PWMOscillator", r = "FMOscillator", s = "AMOscillator",
                    l = "FatOscillator";
                n.default.OmniOscillator.prototype._start = function (t) {
                    this._oscillator.start(t)
                }, n.default.OmniOscillator.prototype._stop = function (t) {
                    this._oscillator.stop(t)
                }, n.default.OmniOscillator.prototype.restart = function (t) {
                    this._oscillator.restart(t)
                }, Object.defineProperty(n.default.OmniOscillator.prototype, "type", {
                    get: function () {
                        var t = "";
                        return this._sourceType === r ? t = "fm" : this._sourceType === s ? t = "am" : this._sourceType === l && (t = "fat"), t + this._oscillator.type
                    }, set: function (t) {
                        "fm" === t.substr(0, 2) ? (this._createNewOscillator(r), this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator(s), this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator(l), this._oscillator.type = t.substr(3)) : "pwm" === t ? this._createNewOscillator(a) : "pulse" === t ? this._createNewOscillator(o) : (this._createNewOscillator("Oscillator"), this._oscillator.type = t)
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "partials", {
                    get: function () {
                        return this._oscillator.partials
                    }, set: function (t) {
                        this._oscillator.partials = t
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "partialCount", {
                    get: function () {
                        return this._oscillator.partialCount
                    }, set: function (t) {
                        this._oscillator.partialCount = t
                    }
                }), n.default.OmniOscillator.prototype.set = function (t, e) {
                    return "type" === t ? this.type = e : n.default.isObject(t) && t.hasOwnProperty("type") && (this.type = t.type), n.default.prototype.set.apply(this, arguments), this
                }, n.default.OmniOscillator.prototype.get = function (t) {
                    var e = this._oscillator.get(t);
                    return e.type = this.type, e
                }, n.default.OmniOscillator.prototype._createNewOscillator = function (t) {
                    if (t !== this._sourceType) {
                        this._sourceType = t;
                        var e = n.default[t], i = this.now();
                        if (null !== this._oscillator) {
                            var o = this._oscillator;
                            o.stop(i), this.context.setTimeout(function () {
                                o.dispose(), o = null
                            }, this.blockTime)
                        }
                        this._oscillator = new e, this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this.state === n.default.State.Started && this._oscillator.start(i)
                    }
                }, Object.defineProperty(n.default.OmniOscillator.prototype, "phase", {
                    get: function () {
                        return this._oscillator.phase
                    }, set: function (t) {
                        this._oscillator.phase = t
                    }
                });
                var u = {
                    PulseOscillator: "pulse",
                    PWMOscillator: "pwm",
                    Oscillator: "oscillator",
                    FMOscillator: "fm",
                    AMOscillator: "am",
                    FatOscillator: "fat"
                };
                Object.defineProperty(n.default.OmniOscillator.prototype, "sourceType", {
                    get: function () {
                        return u[this._sourceType]
                    }, set: function (t) {
                        var e = "sine";
                        "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), t === u.FMOscillator ? this.type = "fm" + e : t === u.AMOscillator ? this.type = "am" + e : t === u.FatOscillator ? this.type = "fat" + e : t === u.Oscillator ? this.type = e : t === u.PulseOscillator ? this.type = "pulse" : t === u.PWMOscillator && (this.type = "pwm")
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "baseType", {
                    get: function () {
                        return this._oscillator.baseType
                    }, set: function (t) {
                        this.sourceType !== u.PulseOscillator && this.sourceType !== u.PWMOscillator && (this._oscillator.baseType = t)
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "width", {
                    get: function () {
                        return this._sourceType === o ? this._oscillator.width : void 0
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "count", {
                    get: function () {
                        return this._sourceType === l ? this._oscillator.count : void 0
                    }, set: function (t) {
                        this._sourceType === l && (this._oscillator.count = t)
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "spread", {
                    get: function () {
                        return this._sourceType === l ? this._oscillator.spread : void 0
                    }, set: function (t) {
                        this._sourceType === l && (this._oscillator.spread = t)
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "modulationType", {
                    get: function () {
                        return this._sourceType === r || this._sourceType === s ? this._oscillator.modulationType : void 0
                    }, set: function (t) {
                        this._sourceType !== r && this._sourceType !== s || (this._oscillator.modulationType = t)
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "modulationIndex", {
                    get: function () {
                        return this._sourceType === r ? this._oscillator.modulationIndex : void 0
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "harmonicity", {
                    get: function () {
                        return this._sourceType === r || this._sourceType === s ? this._oscillator.harmonicity : void 0
                    }
                }), Object.defineProperty(n.default.OmniOscillator.prototype, "modulationFrequency", {
                    get: function () {
                        return this._sourceType === a ? this._oscillator.modulationFrequency : void 0
                    }
                }), n.default.OmniOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.detune.dispose(), this.detune = null, this.frequency.dispose(), this.frequency = null, this._oscillator.dispose(), this._oscillator = null, this._sourceType = null, this
                }, e.default = n.default.OmniOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(31), i(37), i(25), n.default.Synth = function (t) {
                    t = n.default.defaultArg(t, n.default.Synth.defaults), n.default.Monophonic.call(this, t), this.oscillator = new n.default.OmniOscillator(t.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new n.default.AmplitudeEnvelope(t.envelope), this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "frequency", "detune", "envelope"])
                }, n.default.extend(n.default.Synth, n.default.Monophonic), n.default.Synth.defaults = {
                    oscillator: {type: "triangle"},
                    envelope: {attack: .005, decay: .1, sustain: .3, release: 1}
                }, n.default.Synth.prototype._triggerEnvelopeAttack = function (t, e) {
                    return this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)), this
                }, n.default.Synth.prototype._triggerEnvelopeRelease = function (t) {
                    return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.toSeconds(this.envelope.release)), this
                }, n.default.Synth.prototype.dispose = function () {
                    return n.default.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.frequency = null, this.detune = null, this
                }, e.default = n.default.Synth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(11), i(32), n.default.Noise = function () {
                    var t = n.default.defaults(arguments, ["type"], n.default.Noise);
                    n.default.Source.call(this, t), this._source = null, this._type = t.type, this._playbackRate = t.playbackRate
                }, n.default.extend(n.default.Noise, n.default.Source), n.default.Noise.defaults = {
                    type: "white",
                    playbackRate: 1
                }, Object.defineProperty(n.default.Noise.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        if (this._type !== t) {
                            if (!(t in o)) throw new TypeError("Tone.Noise: invalid type: " + t);
                            if (this._type = t, this.state === n.default.State.Started) {
                                var e = this.now();
                                this._stop(e), this._start(e)
                            }
                        }
                    }
                }), Object.defineProperty(n.default.Noise.prototype, "playbackRate", {
                    get: function () {
                        return this._playbackRate
                    }, set: function (t) {
                        this._playbackRate = t, this._source && (this._source.playbackRate.value = t)
                    }
                }), n.default.Noise.prototype._start = function (t) {
                    var e = o[this._type];
                    this._source = new n.default.BufferSource(e).connect(this.output), this._source.loop = !0, this._source.playbackRate.value = this._playbackRate, this._source.start(this.toSeconds(t), Math.random() * (e.duration - .001))
                }, n.default.Noise.prototype._stop = function (t) {
                    this._source && (this._source.stop(this.toSeconds(t)), this._source = null)
                }, n.default.Noise.prototype.restart = function (t) {
                    return this._stop(t), this._start(t), this
                }, n.default.Noise.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer = null, this
                };
                var o = {}, a = {};
                Object.defineProperty(o, "pink", {
                    get: function () {
                        if (!a.pink) {
                            for (var t = [], e = 0; e < 2; e++) {
                                var i, o, r, s, l, u, c, f = new Float32Array(220500);
                                t[e] = f, i = o = r = s = l = u = c = 0;
                                for (var d = 0; d < 220500; d++) {
                                    var h = 2 * Math.random() - 1;
                                    i = .99886 * i + .0555179 * h, o = .99332 * o + .0750759 * h, r = .969 * r + .153852 * h, s = .8665 * s + .3104856 * h, l = .55 * l + .5329522 * h, u = -.7616 * u - .016898 * h, f[d] = i + o + r + s + l + u + c + .5362 * h, f[d] *= .11, c = .115926 * h
                                }
                            }
                            a.pink = (new n.default.Buffer).fromArray(t)
                        }
                        return a.pink
                    }
                }), Object.defineProperty(o, "brown", {
                    get: function () {
                        if (!a.brown) {
                            for (var t = [], e = 0; e < 2; e++) {
                                var i = new Float32Array(220500);
                                t[e] = i;
                                for (var o = 0, r = 0; r < 220500; r++) {
                                    var s = 2 * Math.random() - 1;
                                    i[r] = (o + .02 * s) / 1.02, o = i[r], i[r] *= 3.5
                                }
                            }
                            a.brown = (new n.default.Buffer).fromArray(t)
                        }
                        return a.brown
                    }
                }), Object.defineProperty(o, "white", {
                    get: function () {
                        if (!a.white) {
                            for (var t = [], e = 0; e < 2; e++) {
                                var i = new Float32Array(220500);
                                t[e] = i;
                                for (var o = 0; o < 220500; o++) i[o] = 2 * Math.random() - 1
                            }
                            a.white = (new n.default.Buffer).fromArray(t)
                        }
                        return a.white
                    }
                }), e.default = n.default.Noise
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(27), i(20), i(1), n.default.Master = function () {
                    n.default.AudioNode.call(this), n.default.getContext(function () {
                        this.createInsOuts(1, 0), this._volume = this.output = new n.default.Volume, this.volume = this._volume.volume, this._readOnly("volume"), n.default.connectSeries(this.input, this.output, this.context.destination), this.context.master = this
                    }.bind(this))
                }, n.default.extend(n.default.Master, n.default.AudioNode), n.default.Master.defaults = {
                    volume: 0,
                    mute: !1
                }, n.default.Master.prototype.isMaster = !0, Object.defineProperty(n.default.Master.prototype, "mute", {
                    get: function () {
                        return this._volume.mute
                    }, set: function (t) {
                        this._volume.mute = t
                    }
                }), n.default.Master.prototype.chain = function () {
                    this.input.disconnect();
                    var t = Array.from(arguments);
                    t.unshift(this.input), t.push(this.output), n.default.connectSeries.apply(void 0, t)
                }, n.default.Master.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null
                }, n.default.AudioNode.prototype.toMaster = function () {
                    return this.connect(this.context.master), this
                };
                var o = n.default.Master;
                n.default.Master = new o, n.default.Context.on("init", function (t) {
                    t.master && t.master.isMaster ? n.default.Master = t.master : n.default.Master = new o
                }), n.default.Context.on("close", function (t) {
                    t.master && t.master.isMaster && t.master.dispose()
                }), e.default = n.default.Master
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(86), i(47), n.default.FrequencyEnvelope = function () {
                    var t = n.default.defaults(arguments, ["attack", "decay", "sustain", "release"], n.default.Envelope);
                    t = n.default.defaultArg(t, n.default.FrequencyEnvelope.defaults), n.default.ScaledEnvelope.call(this, t), this._octaves = t.octaves, this.baseFrequency = t.baseFrequency, this.octaves = t.octaves, this.exponent = t.exponent
                }, n.default.extend(n.default.FrequencyEnvelope, n.default.Envelope), n.default.FrequencyEnvelope.defaults = {
                    baseFrequency: 200,
                    octaves: 4,
                    exponent: 1
                }, Object.defineProperty(n.default.FrequencyEnvelope.prototype, "baseFrequency", {
                    get: function () {
                        return this._scale.min
                    }, set: function (t) {
                        this._scale.min = this.toFrequency(t), this.octaves = this._octaves
                    }
                }), Object.defineProperty(n.default.FrequencyEnvelope.prototype, "octaves", {
                    get: function () {
                        return this._octaves
                    }, set: function (t) {
                        this._octaves = t, this._scale.max = this.baseFrequency * Math.pow(2, t)
                    }
                }), Object.defineProperty(n.default.FrequencyEnvelope.prototype, "exponent", {
                    get: function () {
                        return this._exp.value
                    }, set: function (t) {
                        this._exp.value = t
                    }
                }), n.default.FrequencyEnvelope.prototype.dispose = function () {
                    return n.default.ScaledEnvelope.prototype.dispose.call(this), this
                }, e.default = n.default.FrequencyEnvelope
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(26), i(61), n.default.ScaleExp = function (t, e, i) {
                    n.default.SignalBase.call(this), this._scale = this.output = new n.default.Scale(t, e), this._exp = this.input = new n.default.Pow(n.default.defaultArg(i, 2)), this._exp.connect(this._scale)
                }, n.default.extend(n.default.ScaleExp, n.default.SignalBase), Object.defineProperty(n.default.ScaleExp.prototype, "exponent", {
                    get: function () {
                        return this._exp.value
                    }, set: function (t) {
                        this._exp.value = t
                    }
                }), Object.defineProperty(n.default.ScaleExp.prototype, "min", {
                    get: function () {
                        return this._scale.min
                    }, set: function (t) {
                        this._scale.min = t
                    }
                }), Object.defineProperty(n.default.ScaleExp.prototype, "max", {
                    get: function () {
                        return this._scale.max
                    }, set: function (t) {
                        this._scale.max = t
                    }
                }), n.default.ScaleExp.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
                }, e.default = n.default.ScaleExp
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(14), i(1), n.default.Compressor = function () {
                    var t = n.default.defaults(arguments, ["threshold", "ratio"], n.default.Compressor);
                    n.default.AudioNode.call(this), this._compressor = this.input = this.output = this.context.createDynamicsCompressor(), this.threshold = new n.default.Param({
                        param: this._compressor.threshold,
                        units: n.default.Type.Decibels,
                        convert: !1
                    }), this.attack = new n.default.Param(this._compressor.attack, n.default.Type.Time), this.release = new n.default.Param(this._compressor.release, n.default.Type.Time), this.knee = new n.default.Param({
                        param: this._compressor.knee,
                        units: n.default.Type.Decibels,
                        convert: !1
                    }), this.ratio = new n.default.Param({
                        param: this._compressor.ratio,
                        convert: !1
                    }), this._readOnly(["knee", "release", "attack", "ratio", "threshold"]), this.set(t)
                }, n.default.extend(n.default.Compressor, n.default.AudioNode), n.default.Compressor.defaults = {
                    ratio: 12,
                    threshold: -24,
                    release: .25,
                    attack: .003,
                    knee: 30
                }, n.default.Compressor.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["knee", "release", "attack", "ratio", "threshold"]), this._compressor.disconnect(), this._compressor = null, this.attack.dispose(), this.attack = null, this.release.dispose(), this.release = null, this.threshold.dispose(), this.threshold = null, this.ratio.dispose(), this.ratio = null, this.knee.dispose(), this.knee = null, this
                }, e.default = n.default.Compressor
            }, function (t, e, i) {
                "use strict";
                var n = i(0);
                if (i(92), n.default.supported) {
                    !n.default.global.hasOwnProperty("AudioContext") && n.default.global.hasOwnProperty("webkitAudioContext") && (n.default.global.AudioContext = n.default.global.webkitAudioContext), AudioContext.prototype.close || (AudioContext.prototype.close = function () {
                        return n.default.isFunction(this.suspend) && this.suspend(), Promise.resolve()
                    }), AudioContext.prototype.resume || (AudioContext.prototype.resume = function () {
                        var t = this.createBuffer(1, 1, this.sampleRate), e = this.createBufferSource();
                        return e.buffer = t, e.connect(this.destination), e.start(0), Promise.resolve()
                    }), !AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), !AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode);
                    var o = !1, a = new OfflineAudioContext(1, 1, 44100),
                        r = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
                    try {
                        var s = a.decodeAudioData(r);
                        s && n.default.isFunction(s.then) && (o = !0)
                    } catch (t) {
                        o = !1
                    }
                    o || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData, AudioContext.prototype.decodeAudioData = function (t) {
                        return new Promise(function (e, i) {
                            this._native_decodeAudioData(t, e, i)
                        }.bind(this))
                    })
                }
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(63), n.default.TransportTime = function (t, e) {
                    if (!(this instanceof n.default.TransportTime)) return new n.default.TransportTime(t, e);
                    n.default.Time.call(this, t, e)
                }, n.default.extend(n.default.TransportTime, n.default.Time), n.default.TransportTime.prototype._now = function () {
                    return n.default.Transport.seconds
                }, e.default = n.default.TransportTime
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(62), n.default.Frequency = function (t, e) {
                    if (!(this instanceof n.default.Frequency)) return new n.default.Frequency(t, e);
                    n.default.TimeBase.call(this, t, e)
                }, n.default.extend(n.default.Frequency, n.default.TimeBase), n.default.Frequency.prototype._expressions = Object.assign({}, n.default.TimeBase.prototype._expressions, {
                    midi: {
                        regexp: /^(\d+(?:\.\d+)?midi)/,
                        method: function (t) {
                            return "midi" === this._defaultUnits ? t : n.default.Frequency.mtof(t)
                        }
                    }, note: {
                        regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, method: function (t, e) {
                            var i = o[t.toLowerCase()] + 12 * (parseInt(e) + 1);
                            return "midi" === this._defaultUnits ? i : n.default.Frequency.mtof(i)
                        }
                    }, tr: {
                        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/, method: function (t, e, i) {
                            var n = 1;
                            return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))), i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)), n
                        }
                    }
                }), n.default.Frequency.prototype.transpose = function (t) {
                    return new this.constructor(this.valueOf() * n.default.intervalToFrequencyRatio(t))
                }, n.default.Frequency.prototype.harmonize = function (t) {
                    return t.map(function (t) {
                        return this.transpose(t)
                    }.bind(this))
                }, n.default.Frequency.prototype.toMidi = function () {
                    return n.default.Frequency.ftom(this.valueOf())
                }, n.default.Frequency.prototype.toNote = function () {
                    var t = this.toFrequency(), e = Math.log2(t / n.default.Frequency.A4), i = Math.round(12 * e) + 57,
                        o = Math.floor(i / 12);
                    return o < 0 && (i += -12 * o), a[i % 12] + o.toString()
                }, n.default.Frequency.prototype.toSeconds = function () {
                    return 1 / n.default.TimeBase.prototype.toSeconds.call(this)
                }, n.default.Frequency.prototype.toFrequency = function () {
                    return n.default.TimeBase.prototype.toFrequency.call(this)
                }, n.default.Frequency.prototype.toTicks = function () {
                    var t = this._beatsToUnits(1), e = this.valueOf() / t;
                    return Math.floor(e * n.default.Transport.PPQ)
                }, n.default.Frequency.prototype._noArg = function () {
                    return 0
                }, n.default.Frequency.prototype._frequencyToUnits = function (t) {
                    return t
                }, n.default.Frequency.prototype._ticksToUnits = function (t) {
                    return 1 / (60 * t / (n.default.Transport.bpm.value * n.default.Transport.PPQ))
                }, n.default.Frequency.prototype._beatsToUnits = function (t) {
                    return 1 / n.default.TimeBase.prototype._beatsToUnits.call(this, t)
                }, n.default.Frequency.prototype._secondsToUnits = function (t) {
                    return 1 / t
                }, n.default.Frequency.prototype._defaultUnits = "hz";
                var o = {
                    cbb: -2,
                    cb: -1,
                    c: 0,
                    "c#": 1,
                    cx: 2,
                    dbb: 0,
                    db: 1,
                    d: 2,
                    "d#": 3,
                    dx: 4,
                    ebb: 2,
                    eb: 3,
                    e: 4,
                    "e#": 5,
                    ex: 6,
                    fbb: 3,
                    fb: 4,
                    f: 5,
                    "f#": 6,
                    fx: 7,
                    gbb: 5,
                    gb: 6,
                    g: 7,
                    "g#": 8,
                    gx: 9,
                    abb: 7,
                    ab: 8,
                    a: 9,
                    "a#": 10,
                    ax: 11,
                    bbb: 9,
                    bb: 10,
                    b: 11,
                    "b#": 12,
                    bx: 13
                }, a = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
                n.default.Frequency.A4 = 440, n.default.Frequency.mtof = function (t) {
                    return n.default.Frequency.A4 * Math.pow(2, (t - 69) / 12)
                }, n.default.Frequency.ftom = function (t) {
                    return 69 + Math.round(12 * Math.log2(t / n.default.Frequency.A4))
                }, e.default = n.default.Frequency
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(61), i(4), i(1), n.default.Envelope = function () {
                    var t = n.default.defaults(arguments, ["attack", "decay", "sustain", "release"], n.default.Envelope);
                    n.default.AudioNode.call(this), this.attack = t.attack, this.decay = t.decay, this.sustain = t.sustain, this.release = t.release, this._attackCurve = "linear", this._releaseCurve = "exponential", this._sig = this.output = new n.default.Signal(0), this.attackCurve = t.attackCurve, this.releaseCurve = t.releaseCurve, this.decayCurve = t.decayCurve
                }, n.default.extend(n.default.Envelope, n.default.AudioNode), n.default.Envelope.defaults = {
                    attack: .01,
                    decay: .1,
                    sustain: .5,
                    release: 1,
                    attackCurve: "linear",
                    decayCurve: "exponential",
                    releaseCurve: "exponential"
                }, Object.defineProperty(n.default.Envelope.prototype, "value", {
                    get: function () {
                        return this.getValueAtTime(this.now())
                    }
                }), n.default.Envelope.prototype._getCurve = function (t, e) {
                    if (n.default.isString(t)) return t;
                    if (n.default.isArray(t)) for (var i in n.default.Envelope.Type) if (n.default.Envelope.Type[i][e] === t) return i
                }, n.default.Envelope.prototype._setCurve = function (t, e, i) {
                    if (n.default.Envelope.Type.hasOwnProperty(i)) {
                        var o = n.default.Envelope.Type[i];
                        n.default.isObject(o) ? this[t] = o[e] : this[t] = o
                    } else {
                        if (!n.default.isArray(i)) throw new Error("Tone.Envelope: invalid curve: " + i);
                        this[t] = i
                    }
                }, Object.defineProperty(n.default.Envelope.prototype, "attackCurve", {
                    get: function () {
                        return this._getCurve(this._attackCurve, "In")
                    }, set: function (t) {
                        this._setCurve("_attackCurve", "In", t)
                    }
                }), Object.defineProperty(n.default.Envelope.prototype, "releaseCurve", {
                    get: function () {
                        return this._getCurve(this._releaseCurve, "Out")
                    }, set: function (t) {
                        this._setCurve("_releaseCurve", "Out", t)
                    }
                }), Object.defineProperty(n.default.Envelope.prototype, "decayCurve", {
                    get: function () {
                        return this._decayCurve
                    }, set: function (t) {
                        if (!["linear", "exponential"].includes(t)) throw new Error("Tone.Envelope: invalid curve: " + t);
                        this._decayCurve = t
                    }
                }), n.default.Envelope.prototype.triggerAttack = function (t, e) {
                    this.log("triggerAttack", t, e), t = this.toSeconds(t);
                    var i = this.toSeconds(this.attack), o = this.toSeconds(this.decay);
                    e = n.default.defaultArg(e, 1);
                    var a = this.getValueAtTime(t);
                    if (a > 0 && (i = (1 - a) / (1 / i)), 0 === i) this._sig.setValueAtTime(e, t); else if ("linear" === this._attackCurve) this._sig.linearRampTo(e, i, t); else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e, i, t); else if (i > 0) {
                        this._sig.cancelAndHoldAtTime(t);
                        for (var r = this._attackCurve, s = 1; s < r.length; s++) if (r[s - 1] <= a && a <= r[s]) {
                            (r = this._attackCurve.slice(s))[0] = a;
                            break
                        }
                        this._sig.setValueCurveAtTime(r, t, i, e)
                    }
                    if (o) {
                        var l = e * this.sustain, u = t + i;
                        this.log("decay", u), "linear" === this._decayCurve ? this._sig.linearRampTo(l, o, u + this.sampleTime) : "exponential" === this._decayCurve && this._sig.exponentialApproachValueAtTime(l, u, o)
                    }
                    return this
                }, n.default.Envelope.prototype.triggerRelease = function (t) {
                    this.log("triggerRelease", t), t = this.toSeconds(t);
                    var e = this.getValueAtTime(t);
                    if (e > 0) {
                        var i = this.toSeconds(this.release);
                        if ("linear" === this._releaseCurve) this._sig.linearRampTo(0, i, t); else if ("exponential" === this._releaseCurve) this._sig.targetRampTo(0, i, t); else {
                            var o = this._releaseCurve;
                            n.default.isArray(o) && (this._sig.cancelAndHoldAtTime(t), this._sig.setValueCurveAtTime(o, t, i, e))
                        }
                    }
                    return this
                }, n.default.Envelope.prototype.getValueAtTime = function (t) {
                    return this._sig.getValueAtTime(t)
                }, n.default.Envelope.prototype.triggerAttackRelease = function (t, e, i) {
                    return e = this.toSeconds(e), this.triggerAttack(e, i), this.triggerRelease(e + this.toSeconds(t)), this
                }, n.default.Envelope.prototype.cancel = function (t) {
                    return this._sig.cancelScheduledValues(t), this
                }, n.default.Envelope.prototype.connect = n.default.SignalBase.prototype.connect, function () {
                    function t(t) {
                        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = 1 - t[i];
                        return e
                    }

                    var e, i, o = [];
                    for (e = 0; e < 128; e++) o[e] = Math.sin(e / 127 * (Math.PI / 2));
                    var a = [];
                    for (e = 0; e < 127; e++) {
                        i = e / 127;
                        var r = Math.sin(i * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                        a[e] = r / 10 + .83 * i
                    }
                    a[127] = 1;
                    var s = [];
                    for (e = 0; e < 128; e++) s[e] = Math.ceil(e / 127 * 5) / 5;
                    var l = [];
                    for (e = 0; e < 128; e++) i = e / 127, l[e] = .5 * (1 - Math.cos(Math.PI * i));
                    var u, c = [];
                    for (e = 0; e < 128; e++) {
                        i = e / 127;
                        var f = 4 * Math.pow(i, 3) + .2, d = Math.cos(f * Math.PI * 2 * i);
                        c[e] = Math.abs(d * (1 - i))
                    }
                    n.default.Envelope.Type = {
                        linear: "linear",
                        exponential: "exponential",
                        bounce: {In: t(c), Out: c},
                        cosine: {In: o, Out: (u = o, u.slice(0).reverse())},
                        step: {In: s, Out: t(s)},
                        ripple: {In: a, Out: t(a)},
                        sine: {In: l, Out: t(l)}
                    }
                }(), n.default.Envelope.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._sig.dispose(), this._sig = null, this._attackCurve = null, this._releaseCurve = null, this
                }, e.default = n.default.Envelope
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                if (i(23), i(10), i(19), i(7), i(28), i(3), i(2), i(20), n.default.supported && !n.default.global.AudioContext.prototype.createStereoPanner) {
                    var o = function (t) {
                        this.context = t, this.pan = new n.default.Signal(0, n.default.Type.AudioRange);
                        var e = new n.default.WaveShaper(function (t) {
                            return n.default.equalPowerScale((t + 1) / 2)
                        }, 4096), i = new n.default.WaveShaper(function (t) {
                            return n.default.equalPowerScale(1 - (t + 1) / 2)
                        }, 4096), o = new n.default.Gain, a = new n.default.Gain, r = this.input = new n.default.Split;
                        r._splitter.channelCountMode = "explicit", (new n.default.Zero).fan(e, i);
                        var s = this.output = new n.default.Merge;
                        r.left.chain(o, s.left), r.right.chain(a, s.right), this.pan.chain(i, o.gain), this.pan.chain(e, a.gain)
                    };
                    o.prototype.disconnect = function () {
                        this.output.disconnect.apply(this.output, arguments)
                    }, o.prototype.connect = function () {
                        this.output.connect.apply(this.output, arguments)
                    }, AudioContext.prototype.createStereoPanner = function () {
                        return new o(this)
                    }, n.default.Context.prototype.createStereoPanner = function () {
                        return new o(this)
                    }
                }
                i(22), i(1), n.default.Panner = function () {
                    var t = n.default.defaults(arguments, ["pan"], n.default.Panner);
                    n.default.AudioNode.call(this), this._panner = this.input = this.output = this.context.createStereoPanner(), this.pan = this._panner.pan, this.pan.value = t.pan, this._readOnly("pan")
                }, n.default.extend(n.default.Panner, n.default.AudioNode), n.default.Panner.defaults = {pan: 0}, n.default.Panner.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable("pan"), this._panner.disconnect(), this._panner = null, this.pan = null, this
                }, e.default = n.default.Panner
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(17), i(5), i(3), n.default.FMOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type", "modulationType"], n.default.FMOscillator);
                    n.default.Source.call(this, t), this._carrier = new n.default.Oscillator(t.frequency, t.type), this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.detune = this._carrier.detune, this.detune.value = t.detune, this.modulationIndex = new n.default.Multiply(t.modulationIndex), this.modulationIndex.units = n.default.Type.Positive, this._modulator = new n.default.Oscillator(t.frequency, t.modulationType), this.harmonicity = new n.default.Multiply(t.harmonicity), this.harmonicity.units = n.default.Type.Positive, this._modulationNode = new n.default.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), this.phase = t.phase, this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"])
                }, n.default.extend(n.default.FMOscillator, n.default.Source), n.default.FMOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    type: "sine",
                    modulationIndex: 2,
                    modulationType: "square",
                    harmonicity: 1
                }, n.default.FMOscillator.prototype._start = function (t) {
                    this._modulator.start(t), this._carrier.start(t)
                }, n.default.FMOscillator.prototype._stop = function (t) {
                    this._modulator.stop(t), this._carrier.stop(t)
                }, n.default.FMOscillator.prototype.restart = function (t) {
                    this._modulator.restart(t), this._carrier.restart(t)
                }, Object.defineProperty(n.default.FMOscillator.prototype, "type", {
                    get: function () {
                        return this._carrier.type
                    }, set: function (t) {
                        this._carrier.type = t
                    }
                }), Object.defineProperty(n.default.FMOscillator.prototype, "baseType", {
                    get: function () {
                        return this._carrier.baseType
                    }, set: function (t) {
                        this._carrier.baseType = t
                    }
                }), Object.defineProperty(n.default.FMOscillator.prototype, "partialCount", {
                    get: function () {
                        return this._carrier.partialCount
                    }, set: function (t) {
                        this._carrier.partialCount = t
                    }
                }), Object.defineProperty(n.default.FMOscillator.prototype, "modulationType", {
                    get: function () {
                        return this._modulator.type
                    }, set: function (t) {
                        this._modulator.type = t
                    }
                }), Object.defineProperty(n.default.FMOscillator.prototype, "phase", {
                    get: function () {
                        return this._carrier.phase
                    }, set: function (t) {
                        this._carrier.phase = t, this._modulator.phase = t
                    }
                }), Object.defineProperty(n.default.FMOscillator.prototype, "partials", {
                    get: function () {
                        return this._carrier.partials
                    }, set: function (t) {
                        this._carrier.partials = t
                    }
                }), n.default.FMOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]), this.frequency.dispose(), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this.modulationIndex.dispose(), this.modulationIndex = null, this
                }, e.default = n.default.FMOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(17), i(2), i(7), i(3), n.default.PulseOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "width"], n.default.Oscillator);
                    n.default.Source.call(this, t), this.width = new n.default.Signal(t.width, n.default.Type.NormalRange), this._widthGate = new n.default.Gain(0), this._sawtooth = new n.default.Oscillator({
                        frequency: t.frequency,
                        detune: t.detune,
                        type: "sawtooth",
                        phase: t.phase
                    }), this.frequency = this._sawtooth.frequency, this.detune = this._sawtooth.detune, this._thresh = new n.default.WaveShaper(function (t) {
                        return t < 0 ? -1 : 1
                    }), this._sawtooth.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), this._readOnly(["width", "frequency", "detune"])
                }, n.default.extend(n.default.PulseOscillator, n.default.Source), n.default.PulseOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    width: .2
                }, n.default.PulseOscillator.prototype._start = function (t) {
                    t = this.toSeconds(t), this._sawtooth.start(t), this._widthGate.gain.setValueAtTime(1, t)
                }, n.default.PulseOscillator.prototype._stop = function (t) {
                    t = this.toSeconds(t), this._sawtooth.stop(t), this._widthGate.gain.setValueAtTime(0, t)
                }, n.default.PulseOscillator.prototype.restart = function (t) {
                    this._sawtooth.restart(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(1, t)
                }, Object.defineProperty(n.default.PulseOscillator.prototype, "phase", {
                    get: function () {
                        return this._sawtooth.phase
                    }, set: function (t) {
                        this._sawtooth.phase = t
                    }
                }), Object.defineProperty(n.default.PulseOscillator.prototype, "type", {
                    get: function () {
                        return "pulse"
                    }
                }), Object.defineProperty(n.default.PulseOscillator.prototype, "baseType", {
                    get: function () {
                        return "pulse"
                    }
                }), Object.defineProperty(n.default.PulseOscillator.prototype, "partials", {
                    get: function () {
                        return []
                    }
                }), n.default.PulseOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._sawtooth.dispose(), this._sawtooth = null, this._writable(["width", "frequency", "detune"]), this.width.dispose(), this.width = null, this._widthGate.dispose(), this._widthGate = null, this._thresh.dispose(), this._thresh = null, this.frequency = null, this.detune = null, this
                }, e.default = n.default.PulseOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(16), i(4), i(34), n.default.Event = function () {
                    var t = n.default.defaults(arguments, ["callback", "value"], n.default.Event);
                    n.default.call(this), this._loop = t.loop, this.callback = t.callback, this.value = t.value, this._loopStart = this.toTicks(t.loopStart), this._loopEnd = this.toTicks(t.loopEnd), this._state = new n.default.TimelineState(n.default.State.Stopped), this._playbackRate = 1, this._startOffset = 0, this._probability = t.probability, this._humanize = t.humanize, this.mute = t.mute, this.playbackRate = t.playbackRate
                }, n.default.extend(n.default.Event), n.default.Event.defaults = {
                    callback: n.default.noOp,
                    loop: !1,
                    loopEnd: "1m",
                    loopStart: 0,
                    playbackRate: 1,
                    value: null,
                    probability: 1,
                    mute: !1,
                    humanize: !1
                }, n.default.Event.prototype._rescheduleEvents = function (t) {
                    return t = n.default.defaultArg(t, -1), this._state.forEachFrom(t, function (t) {
                        var e;
                        if (t.state === n.default.State.Started) {
                            n.default.isDefined(t.id) && n.default.Transport.clear(t.id);
                            var i = t.time + Math.round(this.startOffset / this._playbackRate);
                            if (!0 === this._loop || n.default.isNumber(this._loop) && this._loop > 1) {
                                e = 1 / 0, n.default.isNumber(this._loop) && (e = this._loop * this._getLoopDuration());
                                var o = this._state.getAfter(i);
                                null !== o && (e = Math.min(e, o.time - i)), e !== 1 / 0 && (this._state.setStateAtTime(n.default.State.Stopped, i + e + 1), e = n.default.Ticks(e));
                                var a = n.default.Ticks(this._getLoopDuration());
                                t.id = n.default.Transport.scheduleRepeat(this._tick.bind(this), a, n.default.Ticks(i), e)
                            } else t.id = n.default.Transport.schedule(this._tick.bind(this), n.default.Ticks(i))
                        }
                    }.bind(this)), this
                }, Object.defineProperty(n.default.Event.prototype, "state", {
                    get: function () {
                        return this._state.getValueAtTime(n.default.Transport.ticks)
                    }
                }), Object.defineProperty(n.default.Event.prototype, "startOffset", {
                    get: function () {
                        return this._startOffset
                    }, set: function (t) {
                        this._startOffset = t
                    }
                }), Object.defineProperty(n.default.Event.prototype, "probability", {
                    get: function () {
                        return this._probability
                    }, set: function (t) {
                        this._probability = t
                    }
                }), Object.defineProperty(n.default.Event.prototype, "humanize", {
                    get: function () {
                        return this._humanize
                    }, set: function (t) {
                        this._humanize = t
                    }
                }), n.default.Event.prototype.start = function (t) {
                    return t = this.toTicks(t), this._state.getValueAtTime(t) === n.default.State.Stopped && (this._state.add({
                        state: n.default.State.Started,
                        time: t,
                        id: void 0
                    }), this._rescheduleEvents(t)), this
                }, n.default.Event.prototype.stop = function (t) {
                    if (this.cancel(t), t = this.toTicks(t), this._state.getValueAtTime(t) === n.default.State.Started) {
                        this._state.setStateAtTime(n.default.State.Stopped, t);
                        var e = this._state.getBefore(t), i = t;
                        null !== e && (i = e.time), this._rescheduleEvents(i)
                    }
                    return this
                }, n.default.Event.prototype.cancel = function (t) {
                    return t = n.default.defaultArg(t, -1 / 0), t = this.toTicks(t), this._state.forEachFrom(t, function (t) {
                        n.default.Transport.clear(t.id)
                    }), this._state.cancel(t), this
                }, n.default.Event.prototype._tick = function (t) {
                    var e = n.default.Transport.getTicksAtTime(t);
                    if (!this.mute && this._state.getValueAtTime(e) === n.default.State.Started) {
                        if (this.probability < 1 && Math.random() > this.probability) return;
                        if (this.humanize) {
                            var i = .02;
                            n.default.isBoolean(this.humanize) || (i = this.toSeconds(this.humanize)), t += (2 * Math.random() - 1) * i
                        }
                        this.callback(t, this.value)
                    }
                }, n.default.Event.prototype._getLoopDuration = function () {
                    return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
                }, Object.defineProperty(n.default.Event.prototype, "loop", {
                    get: function () {
                        return this._loop
                    }, set: function (t) {
                        this._loop = t, this._rescheduleEvents()
                    }
                }), Object.defineProperty(n.default.Event.prototype, "playbackRate", {
                    get: function () {
                        return this._playbackRate
                    }, set: function (t) {
                        this._playbackRate = t, this._rescheduleEvents()
                    }
                }), Object.defineProperty(n.default.Event.prototype, "loopEnd", {
                    get: function () {
                        return n.default.Ticks(this._loopEnd).toSeconds()
                    }, set: function (t) {
                        this._loopEnd = this.toTicks(t), this._loop && this._rescheduleEvents()
                    }
                }), Object.defineProperty(n.default.Event.prototype, "loopStart", {
                    get: function () {
                        return n.default.Ticks(this._loopStart).toSeconds()
                    }, set: function (t) {
                        this._loopStart = this.toTicks(t), this._loop && this._rescheduleEvents()
                    }
                }), Object.defineProperty(n.default.Event.prototype, "progress", {
                    get: function () {
                        if (this._loop) {
                            var t = n.default.Transport.ticks, e = this._state.get(t);
                            if (null !== e && e.state === n.default.State.Started) {
                                var i = this._getLoopDuration();
                                return (t - e.time) % i / i
                            }
                            return 0
                        }
                        return 0
                    }
                }), n.default.Event.prototype.dispose = function () {
                    this.cancel(), this._state.dispose(), this._state = null, this.callback = null, this.value = null
                }, e.default = n.default.Event
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(13), i(29), i(10), i(3), i(1), n.default.MidSideMerge = function () {
                    n.default.AudioNode.call(this), this.createInsOuts(2, 0), this.mid = this.input[0] = new n.default.Gain, this._left = new n.default.Add, this._timesTwoLeft = new n.default.Multiply(Math.SQRT1_2), this.side = this.input[1] = new n.default.Gain, this._right = new n.default.Subtract, this._timesTwoRight = new n.default.Multiply(Math.SQRT1_2), this._merge = this.output = new n.default.Merge, this.mid.connect(this._left, 0, 0), this.side.connect(this._left, 0, 1), this.mid.connect(this._right, 0, 0), this.side.connect(this._right, 0, 1), this._left.connect(this._timesTwoLeft), this._right.connect(this._timesTwoRight), this._timesTwoLeft.connect(this._merge, 0, 0), this._timesTwoRight.connect(this._merge, 0, 1)
                }, n.default.extend(n.default.MidSideMerge, n.default.AudioNode), n.default.MidSideMerge.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._left.dispose(), this._left = null, this._timesTwoLeft.dispose(), this._timesTwoLeft = null, this._right.dispose(), this._right = null, this._timesTwoRight.dispose(), this._timesTwoRight = null, this._merge.dispose(), this._merge = null, this
                }, e.default = n.default.MidSideMerge
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(29), i(13), i(2), i(19), i(1), n.default.MidSideSplit = function () {
                    n.default.AudioNode.call(this), this.createInsOuts(0, 2), this._split = this.input = new n.default.Split, this._midAdd = new n.default.Add, this.mid = this.output[0] = new n.default.Multiply(Math.SQRT1_2), this._sideSubtract = new n.default.Subtract, this.side = this.output[1] = new n.default.Multiply(Math.SQRT1_2), this._split.connect(this._midAdd, 0, 0), this._split.connect(this._midAdd, 1, 1), this._split.connect(this._sideSubtract, 0, 0), this._split.connect(this._sideSubtract, 1, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side)
                }, n.default.extend(n.default.MidSideSplit, n.default.AudioNode), n.default.MidSideSplit.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midAdd.dispose(), this._midAdd = null, this._sideSubtract.dispose(), this._sideSubtract = null, this._split.dispose(), this._split = null, this
                }, e.default = n.default.MidSideSplit
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(9), i(1), i(59), n.default.LowpassCombFilter = function () {
                    var t = n.default.defaults(arguments, ["delayTime", "resonance", "dampening"], n.default.LowpassCombFilter);
                    n.default.AudioNode.call(this), this._combFilter = this.output = new n.default.FeedbackCombFilter(t.delayTime, t.resonance), this.delayTime = this._combFilter.delayTime, this._lowpass = this.input = new n.default.Filter({
                        frequency: t.dampening,
                        type: "lowpass",
                        Q: 0,
                        rolloff: -12
                    }), this.dampening = this._lowpass.frequency, this.resonance = this._combFilter.resonance, this._lowpass.connect(this._combFilter), this._readOnly(["dampening", "resonance", "delayTime"])
                }, n.default.extend(n.default.LowpassCombFilter, n.default.AudioNode), n.default.LowpassCombFilter.defaults = {
                    delayTime: .1,
                    resonance: .5,
                    dampening: 3e3
                }, n.default.LowpassCombFilter.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["dampening", "resonance", "delayTime"]), this._combFilter.dispose(), this._combFilter = null, this.resonance = null, this.delayTime = null, this._lowpass.dispose(), this._lowpass = null, this.dampening = null, this
                }, e.default = n.default.LowpassCombFilter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(45), n.default.Ticks = function (t, e) {
                    if (!(this instanceof n.default.Ticks)) return new n.default.Ticks(t, e);
                    n.default.TransportTime.call(this, t, e)
                }, n.default.extend(n.default.Ticks, n.default.TransportTime), n.default.Ticks.prototype._defaultUnits = "i", n.default.Ticks.prototype._now = function () {
                    return n.default.Transport.ticks
                }, n.default.Ticks.prototype._beatsToUnits = function (t) {
                    return this._getPPQ() * t
                }, n.default.Ticks.prototype._secondsToUnits = function (t) {
                    return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
                }, n.default.Ticks.prototype._ticksToUnits = function (t) {
                    return t
                }, n.default.Ticks.prototype.toTicks = function () {
                    return this.valueOf()
                }, n.default.Ticks.prototype.toSeconds = function () {
                    return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
                }, e.default = n.default.Ticks
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(55), n.default.TransportEvent = function (t, e) {
                    e = n.default.defaultArg(e, n.default.TransportEvent.defaults), n.default.call(this), this.Transport = t, this.id = n.default.TransportEvent._eventId++, this.time = n.default.Ticks(e.time), this.callback = e.callback, this._once = e.once
                }, n.default.extend(n.default.TransportEvent), n.default.TransportEvent.defaults = {
                    once: !1,
                    callback: n.default.noOp
                }, n.default.TransportEvent._eventId = 0, n.default.TransportEvent.prototype.invoke = function (t) {
                    this.callback && (this.callback(t), this._once && this.Transport && this.Transport.clear(this.id))
                }, n.default.TransportEvent.prototype.dispose = function () {
                    return n.default.prototype.dispose.call(this), this.Transport = null, this.callback = null, this.time = null, this
                }, e.default = n.default.TransportEvent
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(82), i(34), i(24), i(14), n.default.TickSource = function () {
                    var t = n.default.defaults(arguments, ["frequency"], n.default.TickSource);
                    this.frequency = new n.default.TickSignal(t.frequency), this._readOnly("frequency"), this._state = new n.default.TimelineState(n.default.State.Stopped), this._state.setStateAtTime(n.default.State.Stopped, 0), this._tickOffset = new n.default.Timeline, this.setTicksAtTime(0, 0)
                }, n.default.extend(n.default.TickSource), n.default.TickSource.defaults = {frequency: 1}, Object.defineProperty(n.default.TickSource.prototype, "state", {
                    get: function () {
                        return this._state.getValueAtTime(this.now())
                    }
                }), n.default.TickSource.prototype.start = function (t, e) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t) !== n.default.State.Started && (this._state.setStateAtTime(n.default.State.Started, t), n.default.isDefined(e) && this.setTicksAtTime(e, t)), this
                }, n.default.TickSource.prototype.stop = function (t) {
                    if (t = this.toSeconds(t), this._state.getValueAtTime(t) === n.default.State.Stopped) {
                        var e = this._state.get(t);
                        e.time > 0 && (this._tickOffset.cancel(e.time), this._state.cancel(e.time))
                    }
                    return this._state.cancel(t), this._state.setStateAtTime(n.default.State.Stopped, t), this.setTicksAtTime(0, t), this
                }, n.default.TickSource.prototype.pause = function (t) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t) === n.default.State.Started && this._state.setStateAtTime(n.default.State.Paused, t), this
                }, n.default.TickSource.prototype.cancel = function (t) {
                    return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this
                }, n.default.TickSource.prototype.getTicksAtTime = function (t) {
                    t = this.toSeconds(t);
                    var e = this._state.getLastState(n.default.State.Stopped, t),
                        i = {state: n.default.State.Paused, time: t};
                    this._state.add(i);
                    var o = e, a = 0;
                    return this._state.forEachBetween(e.time, t + this.sampleTime, function (t) {
                        var e = o.time, i = this._tickOffset.get(t.time);
                        i.time >= o.time && (a = i.ticks, e = i.time), o.state === n.default.State.Started && t.state !== n.default.State.Started && (a += this.frequency.getTicksAtTime(t.time) - this.frequency.getTicksAtTime(e)), o = t
                    }.bind(this)), this._state.remove(i), a
                }, Object.defineProperty(n.default.TickSource.prototype, "ticks", {
                    get: function () {
                        return this.getTicksAtTime(this.now())
                    }, set: function (t) {
                        this.setTicksAtTime(t, this.now())
                    }
                }), Object.defineProperty(n.default.TickSource.prototype, "seconds", {
                    get: function () {
                        return this.getSecondsAtTime(this.now())
                    }, set: function (t) {
                        var e = this.now(), i = this.frequency.timeToTicks(t, e);
                        this.setTicksAtTime(i, e)
                    }
                }), n.default.TickSource.prototype.getSecondsAtTime = function (t) {
                    t = this.toSeconds(t);
                    var e = this._state.getLastState(n.default.State.Stopped, t),
                        i = {state: n.default.State.Paused, time: t};
                    this._state.add(i);
                    var o = e, a = 0;
                    return this._state.forEachBetween(e.time, t + this.sampleTime, function (t) {
                        var e = o.time, i = this._tickOffset.get(t.time);
                        i.time >= o.time && (a = i.seconds, e = i.time), o.state === n.default.State.Started && t.state !== n.default.State.Started && (a += t.time - e), o = t
                    }.bind(this)), this._state.remove(i), a
                }, n.default.TickSource.prototype.setTicksAtTime = function (t, e) {
                    return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
                        time: e,
                        ticks: t,
                        seconds: this.frequency.getDurationOfTicks(t, e)
                    }), this
                }, n.default.TickSource.prototype.getStateAtTime = function (t) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t)
                }, n.default.TickSource.prototype.getTimeOfTick = function (t, e) {
                    e = n.default.defaultArg(e, this.now());
                    var i = this._tickOffset.get(e), o = this._state.get(e), a = Math.max(i.time, o.time),
                        r = this.frequency.getTicksAtTime(a) + t - i.ticks;
                    return this.frequency.getTimeOfTick(r)
                }, n.default.TickSource.prototype.forEachTickBetween = function (t, e, i) {
                    var o = this._state.get(t);
                    if (this._state.forEachBetween(t, e, function (e) {
                        o.state === n.default.State.Started && e.state !== n.default.State.Started && this.forEachTickBetween(Math.max(o.time, t), e.time - this.sampleTime, i), o = e
                    }.bind(this)), t = Math.max(o.time, t), o.state === n.default.State.Started && this._state) {
                        var a = this.frequency.getTicksAtTime(t), r = (a - this.frequency.getTicksAtTime(o.time)) % 1;
                        0 !== r && (r = 1 - r);
                        for (var s = this.frequency.getTimeOfTick(a + r), l = null; s < e && this._state;) {
                            try {
                                i(s, Math.round(this.getTicksAtTime(s)))
                            } catch (t) {
                                l = t;
                                break
                            }
                            this._state && (s += this.frequency.getDurationOfTicks(1, s))
                        }
                    }
                    if (l) throw l;
                    return this
                }, n.default.TickSource.prototype.dispose = function () {
                    return n.default.Param.prototype.dispose.call(this), this._state.dispose(), this._state = null, this._tickOffset.dispose(), this._tickOffset = null, this._writable("frequency"), this.frequency.dispose(), this.frequency = null, this
                }, e.default = n.default.TickSource
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(87), i(13), i(2), i(4), i(18), i(1), n.default.Follower = function () {
                    var t = n.default.defaults(arguments, ["smoothing"], n.default.Follower);
                    n.default.AudioNode.call(this), this.createInsOuts(1, 1), this._abs = new n.default.Abs, this._filter = this.context.createBiquadFilter(), this._filter.type = "lowpass", this._filter.frequency.value = 0, this._filter.Q.value = 0, this._sub = new n.default.Subtract, this._delay = new n.default.Delay(this.blockTime), this._smoothing = t.smoothing, n.default.connect(this.input, this._delay), n.default.connect(this.input, this._sub, 0, 1), this._sub.chain(this._abs, this._filter, this.output), this.smoothing = t.smoothing
                }, n.default.extend(n.default.Follower, n.default.AudioNode), n.default.Follower.defaults = {smoothing: .05}, Object.defineProperty(n.default.Follower.prototype, "smoothing", {
                    get: function () {
                        return this._smoothing
                    }, set: function (t) {
                        this._smoothing = t, this._filter.frequency.value = .5 * n.default.Time(t).toFrequency()
                    }
                }), n.default.Follower.prototype.connect = n.default.SignalBase.prototype.connect, n.default.Follower.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._filter.disconnect(), this._filter = null, this._delay.dispose(), this._delay = null, this._sub.disconnect(), this._sub = null, this._abs.dispose(), this._abs = null, this
                }, e.default = n.default.Follower
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(42), i(2), i(14), i(18), i(3), i(1), n.default.FeedbackCombFilter = function () {
                    var t = n.default.defaults(arguments, ["delayTime", "resonance"], n.default.FeedbackCombFilter);
                    n.default.AudioNode.call(this), this._delay = this.input = this.output = new n.default.Delay(t.delayTime), this.delayTime = this._delay.delayTime, this._feedback = new n.default.Gain(t.resonance, n.default.Type.NormalRange), this.resonance = this._feedback.gain, this._delay.chain(this._feedback, this._delay), this._readOnly(["resonance", "delayTime"])
                }, n.default.extend(n.default.FeedbackCombFilter, n.default.AudioNode), n.default.FeedbackCombFilter.defaults = {
                    delayTime: .1,
                    resonance: .5
                }, n.default.FeedbackCombFilter.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["resonance", "delayTime"]), this._delay.dispose(), this._delay = null, this.delayTime = null, this._feedback.dispose(), this._feedback = null, this.resonance = null, this
                }, e.default = n.default.FeedbackCombFilter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(9), i(2), i(3), i(1), n.default.MultibandSplit = function () {
                    var t = n.default.defaults(arguments, ["lowFrequency", "highFrequency"], n.default.MultibandSplit);
                    n.default.AudioNode.call(this), this.input = new n.default.Gain, this.output = new Array(3), this.low = this.output[0] = new n.default.Filter(0, "lowpass"), this._lowMidFilter = new n.default.Filter(0, "highpass"), this.mid = this.output[1] = new n.default.Filter(0, "lowpass"), this.high = this.output[2] = new n.default.Filter(0, "highpass"), this.lowFrequency = new n.default.Signal(t.lowFrequency, n.default.Type.Frequency), this.highFrequency = new n.default.Signal(t.highFrequency, n.default.Type.Frequency), this.Q = new n.default.Signal(t.Q), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.connect(this.low.frequency), this.lowFrequency.connect(this._lowMidFilter.frequency), this.highFrequency.connect(this.mid.frequency), this.highFrequency.connect(this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
                }, n.default.extend(n.default.MultibandSplit, n.default.AudioNode), n.default.MultibandSplit.defaults = {
                    lowFrequency: 400,
                    highFrequency: 2500,
                    Q: 1
                }, n.default.MultibandSplit.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.low = null, this._lowMidFilter.dispose(), this._lowMidFilter = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.lowFrequency.dispose(), this.lowFrequency = null, this.highFrequency.dispose(), this.highFrequency = null, this.Q.dispose(), this.Q = null, this
                }, e.default = n.default.MultibandSplit
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), n.default.Pow = function (t) {
                    n.default.SignalBase.call(this), this._exp = n.default.defaultArg(t, 1), this._expScaler = this.input = this.output = new n.default.WaveShaper(this._expFunc(this._exp), 8192)
                }, n.default.extend(n.default.Pow, n.default.SignalBase), Object.defineProperty(n.default.Pow.prototype, "value", {
                    get: function () {
                        return this._exp
                    }, set: function (t) {
                        this._exp = t, this._expScaler.setMap(this._expFunc(this._exp))
                    }
                }), n.default.Pow.prototype._expFunc = function (t) {
                    return function (e) {
                        return Math.pow(Math.abs(e), t)
                    }
                }, n.default.Pow.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this
                }, e.default = n.default.Pow
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                n.default.TimeBase = function (t, e) {
                    if (!(this instanceof n.default.TimeBase)) return new n.default.TimeBase(t, e);
                    if (this._val = t, this._units = e, n.default.isUndef(this._units) && n.default.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0)) this._val = parseFloat(this._val), this._units = this._defaultUnits; else if (t && t.constructor === this.constructor) this._val = t._val, this._units = t._units; else if (t instanceof n.default.TimeBase) switch (this._defaultUnits) {
                        case"s":
                            this._val = t.toSeconds();
                            break;
                        case"i":
                            this._val = t.toTicks();
                            break;
                        case"hz":
                            this._val = t.toFrequency();
                            break;
                        case"midi":
                            this._val = t.toMidi();
                            break;
                        default:
                            throw new Error("Unrecognized default units " + this._defaultUnits)
                    }
                }, n.default.extend(n.default.TimeBase), n.default.TimeBase.prototype._expressions = {
                    n: {
                        regexp: /^(\d+)n(\.?)$/i, method: function (t, e) {
                            t = parseInt(t);
                            var i = "." === e ? 1.5 : 1;
                            return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * i : this._beatsToUnits(4 / t) * i
                        }
                    }, t: {
                        regexp: /^(\d+)t$/i, method: function (t) {
                            return t = parseInt(t), this._beatsToUnits(8 / (3 * parseInt(t)))
                        }
                    }, m: {
                        regexp: /^(\d+)m$/i, method: function (t) {
                            return this._beatsToUnits(parseInt(t) * this._getTimeSignature())
                        }
                    }, i: {
                        regexp: /^(\d+)i$/i, method: function (t) {
                            return this._ticksToUnits(parseInt(t))
                        }
                    }, hz: {
                        regexp: /^(\d+(?:\.\d+)?)hz$/i, method: function (t) {
                            return this._frequencyToUnits(parseFloat(t))
                        }
                    }, tr: {
                        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/, method: function (t, e, i) {
                            var n = 0;
                            return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))), i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)), n
                        }
                    }, s: {
                        regexp: /^(\d+(?:\.\d+)?)s$/, method: function (t) {
                            return this._secondsToUnits(parseFloat(t))
                        }
                    }, samples: {
                        regexp: /^(\d+)samples$/, method: function (t) {
                            return parseInt(t) / this.context.sampleRate
                        }
                    }, default: {
                        regexp: /^(\d+(?:\.\d+)?)$/, method: function (t) {
                            return this._expressions[this._defaultUnits].method.call(this, t)
                        }
                    }
                }, n.default.TimeBase.prototype._defaultUnits = "s", n.default.TimeBase.prototype._getBpm = function () {
                    return n.default.Transport ? n.default.Transport.bpm.value : 120
                }, n.default.TimeBase.prototype._getTimeSignature = function () {
                    return n.default.Transport ? n.default.Transport.timeSignature : 4
                }, n.default.TimeBase.prototype._getPPQ = function () {
                    return n.default.Transport ? n.default.Transport.PPQ : 192
                }, n.default.TimeBase.prototype._now = function () {
                    return this.now()
                }, n.default.TimeBase.prototype._frequencyToUnits = function (t) {
                    return 1 / t
                }, n.default.TimeBase.prototype._beatsToUnits = function (t) {
                    return 60 / this._getBpm() * t
                }, n.default.TimeBase.prototype._secondsToUnits = function (t) {
                    return t
                }, n.default.TimeBase.prototype._ticksToUnits = function (t) {
                    return t * (this._beatsToUnits(1) / this._getPPQ())
                }, n.default.TimeBase.prototype._noArg = function () {
                    return this._now()
                }, n.default.TimeBase.prototype.valueOf = function () {
                    if (n.default.isUndef(this._val)) return this._noArg();
                    if (n.default.isString(this._val) && n.default.isUndef(this._units)) {
                        for (var t in this._expressions) if (this._expressions[t].regexp.test(this._val.trim())) {
                            this._units = t;
                            break
                        }
                    } else if (n.default.isObject(this._val)) {
                        var e = 0;
                        for (var i in this._val) {
                            var o = this._val[i];
                            e += new this.constructor(i).valueOf() * o
                        }
                        return e
                    }
                    if (n.default.isDefined(this._units)) {
                        var a = this._expressions[this._units], r = this._val.toString().trim().match(a.regexp);
                        return r ? a.method.apply(this, r.slice(1)) : a.method.call(this, parseFloat(this._val))
                    }
                    return this._val
                }, n.default.TimeBase.prototype.toSeconds = function () {
                    return this.valueOf()
                }, n.default.TimeBase.prototype.toFrequency = function () {
                    return 1 / this.toSeconds()
                }, n.default.TimeBase.prototype.toSamples = function () {
                    return this.toSeconds() * this.context.sampleRate
                }, n.default.TimeBase.prototype.toMilliseconds = function () {
                    return 1e3 * this.toSeconds()
                }, n.default.TimeBase.prototype.dispose = function () {
                    this._val = null, this._units = null
                }, e.default = n.default.TimeBase
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(62), i(46), n.default.Time = function (t, e) {
                    if (!(this instanceof n.default.Time)) return new n.default.Time(t, e);
                    n.default.TimeBase.call(this, t, e)
                }, n.default.extend(n.default.Time, n.default.TimeBase), n.default.Time.prototype._expressions = Object.assign({}, n.default.TimeBase.prototype._expressions, {
                    quantize: {
                        regexp: /^@(.+)/,
                        method: function (t) {
                            if (n.default.Transport) {
                                var e = new this.constructor(t);
                                return this._secondsToUnits(n.default.Transport.nextSubdivision(e))
                            }
                            return 0
                        }
                    }, now: {
                        regexp: /^\+(.+)/, method: function (t) {
                            return this._now() + new this.constructor(t)
                        }
                    }
                }), n.default.Time.prototype.quantize = function (t, e) {
                    e = n.default.defaultArg(e, 1);
                    var i = new this.constructor(t), o = this.valueOf();
                    return o + (Math.round(o / i) * i - o) * e
                }, n.default.Time.prototype.toNotation = function () {
                    for (var t = this.toSeconds(), e = ["1m"], i = 1; i < 8; i++) {
                        var o = Math.pow(2, i);
                        e.push(o + "n."), e.push(o + "n"), e.push(o + "t")
                    }
                    e.push("0");
                    var a = e[0], r = n.default.Time(e[0]).toSeconds();
                    return e.forEach(function (e) {
                        var i = n.default.Time(e).toSeconds();
                        Math.abs(i - t) < Math.abs(r - t) && (a = e, r = i)
                    }), a
                }, n.default.Time.prototype.toBarsBeatsSixteenths = function () {
                    var t = this._beatsToUnits(1), e = this.valueOf() / t;
                    e = parseFloat(e.toFixed(4));
                    var i = Math.floor(e / this._getTimeSignature()), n = e % 1 * 4;
                    return e = Math.floor(e) % this._getTimeSignature(), (n = n.toString()).length > 3 && (n = parseFloat(parseFloat(n).toFixed(3))), [i, e, n].join(":")
                }, n.default.Time.prototype.toTicks = function () {
                    var t = this._beatsToUnits(1), e = this.valueOf() / t;
                    return Math.round(e * this._getPPQ())
                }, n.default.Time.prototype.toSeconds = function () {
                    return this.valueOf()
                }, n.default.Time.prototype.toMidi = function () {
                    return n.default.Frequency.ftom(this.toFrequency())
                }, e.default = n.default.Time
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(11), i(6), i(3), i(1), n.default.supported && (OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable)), n.default.OscillatorNode = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type"], n.default.OscillatorNode);
                    n.default.AudioNode.call(this, t), this.onended = t.onended, this._startTime = -1, this._stopTime = -1, this._gainNode = this.output = new n.default.Gain(0), this._oscillator = this.context.createOscillator(), n.default.connect(this._oscillator, this._gainNode), this.type = t.type, this.frequency = new n.default.Param({
                        param: this._oscillator.frequency,
                        units: n.default.Type.Frequency,
                        value: t.frequency
                    }), this.detune = new n.default.Param({
                        param: this._oscillator.detune,
                        units: n.default.Type.Cents,
                        value: t.detune
                    }), this._gain = 1
                }, n.default.extend(n.default.OscillatorNode, n.default.AudioNode), n.default.OscillatorNode.defaults = {
                    frequency: 440,
                    detune: 0,
                    type: "sine",
                    onended: n.default.noOp
                }, Object.defineProperty(n.default.OscillatorNode.prototype, "state", {
                    get: function () {
                        return this.getStateAtTime(this.now())
                    }
                }), n.default.OscillatorNode.prototype.getStateAtTime = function (t) {
                    return t = this.toSeconds(t), -1 !== this._startTime && t >= this._startTime && (-1 === this._stopTime || t <= this._stopTime) ? n.default.State.Started : n.default.State.Stopped
                }, n.default.OscillatorNode.prototype.start = function (t) {
                    if (this.log("start", t), -1 !== this._startTime) throw new Error("cannot call OscillatorNode.start more than once");
                    return this._startTime = this.toSeconds(t), this._startTime = Math.max(this._startTime, this.context.currentTime), this._oscillator.start(this._startTime), this._gainNode.gain.setValueAtTime(1, this._startTime), this
                }, n.default.OscillatorNode.prototype.setPeriodicWave = function (t) {
                    return this._oscillator.setPeriodicWave(t), this
                }, n.default.OscillatorNode.prototype.stop = function (t) {
                    return this.log("stop", t), this.assert(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop(), this._stopTime = this.toSeconds(t), this._stopTime = Math.max(this._stopTime, this.context.currentTime), this._stopTime > this._startTime ? (this._gainNode.gain.setValueAtTime(0, this._stopTime), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(function () {
                        this._oscillator.stop(this.now()), this.onended(), setTimeout(function () {
                            this._oscillator && (this._oscillator.disconnect(), this._gainNode.disconnect())
                        }.bind(this), 100)
                    }.bind(this), this._stopTime - this.context.currentTime)) : this._gainNode.gain.cancelScheduledValues(this._startTime), this
                }, n.default.OscillatorNode.prototype.cancelStop = function () {
                    return -1 !== this._startTime && (this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1), this
                }, Object.defineProperty(n.default.OscillatorNode.prototype, "type", {
                    get: function () {
                        return this._oscillator.type
                    }, set: function (t) {
                        this._oscillator.type = t
                    }
                }), n.default.OscillatorNode.prototype.dispose = function () {
                    return this._wasDisposed || (this._wasDisposed = !0, this.context.clearTimeout(this._timeout), n.default.AudioNode.prototype.dispose.call(this), this.onended = null, this._oscillator.disconnect(), this._oscillator = null, this._gainNode.dispose(), this._gainNode = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null), this
                }, e.default = n.default.OscillatorNode
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(11), i(6), i(57), i(32), n.default.Player = function (t) {
                    var e;
                    t instanceof n.default.Buffer && t.loaded ? (t = t.get(), e = n.default.Player.defaults) : e = n.default.defaults(arguments, ["url", "onload"], n.default.Player), n.default.Source.call(this, e), this.autostart = e.autostart, this._buffer = new n.default.Buffer({
                        url: e.url,
                        onload: this._onload.bind(this, e.onload),
                        reverse: e.reverse
                    }), t instanceof AudioBuffer && this._buffer.set(t), this._loop = e.loop, this._loopStart = e.loopStart, this._loopEnd = e.loopEnd, this._playbackRate = e.playbackRate, this._activeSources = [], this.fadeIn = e.fadeIn, this.fadeOut = e.fadeOut
                }, n.default.extend(n.default.Player, n.default.Source), n.default.Player.defaults = {
                    onload: n.default.noOp,
                    playbackRate: 1,
                    loop: !1,
                    autostart: !1,
                    loopStart: 0,
                    loopEnd: 0,
                    reverse: !1,
                    fadeIn: 0,
                    fadeOut: 0
                }, n.default.Player.prototype.load = function (t, e) {
                    return this._buffer.load(t, this._onload.bind(this, e))
                }, n.default.Player.prototype._onload = function (t) {
                    (t = n.default.defaultArg(t, n.default.noOp))(this), this.autostart && this.start()
                }, n.default.Player.prototype._onSourceEnd = function (t) {
                    var e = this._activeSources.indexOf(t);
                    this._activeSources.splice(e, 1), 0 !== this._activeSources.length || this._synced || this._state.setStateAtTime(n.default.State.Stopped, n.default.now())
                }, n.default.Player.prototype._start = function (t, e, i) {
                    e = this._loop ? n.default.defaultArg(e, this._loopStart) : n.default.defaultArg(e, 0), e = this.toSeconds(e), this._synced && (e *= this._playbackRate);
                    var o = n.default.defaultArg(i, Math.max(this._buffer.duration - e, 0));
                    o = this.toSeconds(o), o /= this._playbackRate, t = this.toSeconds(t);
                    var a = new n.default.BufferSource({
                        buffer: this._buffer,
                        loop: this._loop,
                        loopStart: this._loopStart,
                        loopEnd: this._loopEnd,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut
                    }).connect(this.output);
                    return this._loop || this._synced || this._state.setStateAtTime(n.default.State.Stopped, t + o), this._activeSources.push(a), this._loop && n.default.isUndef(i) ? a.start(t, e) : a.start(t, e, o - this.toSeconds(this.fadeOut)), this
                }, n.default.Player.prototype._stop = function (t) {
                    return t = this.toSeconds(t), this._activeSources.forEach(function (e) {
                        e.stop(t)
                    }), this
                }, n.default.Player.prototype.restart = function (t, e, i) {
                    return this._stop(t), this._start(t, e, i), this
                }, n.default.Player.prototype.seek = function (t, e) {
                    return e = this.toSeconds(e), this._state.getValueAtTime(e) === n.default.State.Started && (t = this.toSeconds(t), this._stop(e), this._start(e, t)), this
                }, n.default.Player.prototype.setLoopPoints = function (t, e) {
                    return this.loopStart = t, this.loopEnd = e, this
                }, Object.defineProperty(n.default.Player.prototype, "loopStart", {
                    get: function () {
                        return this._loopStart
                    }, set: function (t) {
                        this._loopStart = t, this._activeSources.forEach(function (e) {
                            e.loopStart = t
                        })
                    }
                }), Object.defineProperty(n.default.Player.prototype, "loopEnd", {
                    get: function () {
                        return this._loopEnd
                    }, set: function (t) {
                        this._loopEnd = t, this._activeSources.forEach(function (e) {
                            e.loopEnd = t
                        })
                    }
                }), Object.defineProperty(n.default.Player.prototype, "buffer", {
                    get: function () {
                        return this._buffer
                    }, set: function (t) {
                        this._buffer.set(t)
                    }
                }), Object.defineProperty(n.default.Player.prototype, "loop", {
                    get: function () {
                        return this._loop
                    }, set: function (t) {
                        if (this._loop !== t && (this._loop = t, this._activeSources.forEach(function (e) {
                            e.loop = t
                        }), t)) {
                            var e = this._state.getNextState(n.default.State.Stopped, this.now());
                            e && this._state.cancel(e.time)
                        }
                    }
                }), Object.defineProperty(n.default.Player.prototype, "playbackRate", {
                    get: function () {
                        return this._playbackRate
                    }, set: function (t) {
                        this._playbackRate = t;
                        var e = this.now(), i = this._state.getNextState(n.default.State.Stopped, e);
                        i && this._state.cancel(i.time), this._activeSources.forEach(function (i) {
                            i.cancelStop(), i.playbackRate.setValueAtTime(t, e)
                        })
                    }
                }), Object.defineProperty(n.default.Player.prototype, "reverse", {
                    get: function () {
                        return this._buffer.reverse
                    }, set: function (t) {
                        this._buffer.reverse = t
                    }
                }), Object.defineProperty(n.default.Player.prototype, "loaded", {
                    get: function () {
                        return this._buffer.loaded
                    }
                }), n.default.Player.prototype.dispose = function () {
                    return this._activeSources.forEach(function (t) {
                        t.dispose()
                    }), this._activeSources = null, n.default.Source.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this
                }, e.default = n.default.Player
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(31), i(41), i(37), i(2), i(9), i(25), n.default.MonoSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.MonoSynth.defaults), n.default.Monophonic.call(this, t), this.oscillator = new n.default.OmniOscillator(t.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new n.default.Filter(t.filter), this.filter.frequency.value = 5e3, this.filterEnvelope = new n.default.FrequencyEnvelope(t.filterEnvelope), this.envelope = new n.default.AmplitudeEnvelope(t.envelope), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
                }, n.default.extend(n.default.MonoSynth, n.default.Monophonic), n.default.MonoSynth.defaults = {
                    frequency: "C4",
                    detune: 0,
                    oscillator: {type: "square"},
                    filter: {Q: 6, type: "lowpass", rolloff: -24},
                    envelope: {attack: .005, decay: .1, sustain: .9, release: 1},
                    filterEnvelope: {
                        attack: .06,
                        decay: .2,
                        sustain: .5,
                        release: 2,
                        baseFrequency: 200,
                        octaves: 7,
                        exponent: 2
                    }
                }, n.default.MonoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                    return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay), this
                }, n.default.MonoSynth.prototype._triggerEnvelopeRelease = function (t) {
                    return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this
                }, n.default.MonoSynth.prototype.dispose = function () {
                    return n.default.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this.frequency = null, this.detune = null, this
                }, e.default = n.default.MonoSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(17), i(5), i(3), n.default.FatOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type", "spread"], n.default.FatOscillator);
                    n.default.Source.call(this, t), this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this._oscillators = [], this._spread = t.spread, this._type = t.type, this._phase = t.phase, this._partials = t.partials, this._partialCount = t.partialCount, this.count = t.count, this._readOnly(["frequency", "detune"])
                }, n.default.extend(n.default.FatOscillator, n.default.Source), n.default.FatOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    spread: 20,
                    count: 3,
                    type: "sawtooth",
                    partials: [],
                    partialCount: 0
                }, n.default.FatOscillator.prototype._start = function (t) {
                    t = this.toSeconds(t), this._forEach(function (e) {
                        e.start(t)
                    })
                }, n.default.FatOscillator.prototype._stop = function (t) {
                    t = this.toSeconds(t), this._forEach(function (e) {
                        e.stop(t)
                    })
                }, n.default.FatOscillator.prototype.restart = function (t) {
                    t = this.toSeconds(t), this._forEach(function (e) {
                        e.restart(t)
                    })
                }, n.default.FatOscillator.prototype._forEach = function (t) {
                    for (var e = 0; e < this._oscillators.length; e++) t.call(this, this._oscillators[e], e)
                }, Object.defineProperty(n.default.FatOscillator.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        this._type = t, this._forEach(function (e) {
                            e.type = t
                        })
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "spread", {
                    get: function () {
                        return this._spread
                    }, set: function (t) {
                        if (this._spread = t, this._oscillators.length > 1) {
                            var e = -t / 2, i = t / (this._oscillators.length - 1);
                            this._forEach(function (t, n) {
                                t.detune.value = e + i * n
                            })
                        }
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "count", {
                    get: function () {
                        return this._oscillators.length
                    }, set: function (t) {
                        if (t = Math.max(t, 1), this._oscillators.length !== t) {
                            this._forEach(function (t) {
                                t.dispose()
                            }), this._oscillators = [];
                            for (var e = 0; e < t; e++) {
                                var i = new n.default.Oscillator;
                                this.type === n.default.Oscillator.Type.Custom ? i.partials = this._partials : i.type = this._type, i.partialCount = this._partialCount, i.phase = this._phase + e / t * 360, i.volume.value = -6 - 1.1 * t, this.frequency.connect(i.frequency), this.detune.connect(i.detune), i.connect(this.output), this._oscillators[e] = i
                            }
                            this.spread = this._spread, this.state === n.default.State.Started && this._forEach(function (t) {
                                t.start()
                            })
                        }
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "phase", {
                    get: function () {
                        return this._phase
                    }, set: function (t) {
                        this._phase = t, this._forEach(function (e) {
                            e.phase = t
                        })
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "baseType", {
                    get: function () {
                        return this._oscillators[0].baseType
                    }, set: function (t) {
                        this._forEach(function (e) {
                            e.baseType = t
                        }), this._type = this._oscillators[0].type
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "partials", {
                    get: function () {
                        return this._oscillators[0].partials
                    }, set: function (t) {
                        this._partials = t, this._type = n.default.Oscillator.Type.Custom, this._forEach(function (e) {
                            e.partials = t
                        })
                    }
                }), Object.defineProperty(n.default.FatOscillator.prototype, "partialCount", {
                    get: function () {
                        return this._oscillators[0].partialCount
                    }, set: function (t) {
                        this._partialCount = t, this._forEach(function (e) {
                            e.partialCount = t
                        }), this._type = this._oscillators[0].type
                    }
                }), n.default.FatOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._forEach(function (t) {
                        t.dispose()
                    }), this._oscillators = null, this._partials = null, this
                }, e.default = n.default.FatOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(17), i(5), i(3), i(22), n.default.AMOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "type", "modulationType"], n.default.AMOscillator);
                    n.default.Source.call(this, t), this._carrier = new n.default.Oscillator(t.frequency, t.type), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this.detune.value = t.detune, this._modulator = new n.default.Oscillator(t.frequency, t.modulationType), this._modulationScale = new n.default.AudioToGain, this.harmonicity = new n.default.Multiply(t.harmonicity), this.harmonicity.units = n.default.Type.Positive, this._modulationNode = new n.default.Gain(0), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.connect(this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this.phase = t.phase, this._readOnly(["frequency", "detune", "harmonicity"])
                }, n.default.extend(n.default.AMOscillator, n.default.Oscillator), n.default.AMOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    type: "sine",
                    modulationType: "square",
                    harmonicity: 1
                }, n.default.AMOscillator.prototype._start = function (t) {
                    this._modulator.start(t), this._carrier.start(t)
                }, n.default.AMOscillator.prototype._stop = function (t) {
                    this._modulator.stop(t), this._carrier.stop(t)
                }, n.default.AMOscillator.prototype.restart = function (t) {
                    this._modulator.restart(t), this._carrier.restart(t)
                }, Object.defineProperty(n.default.AMOscillator.prototype, "type", {
                    get: function () {
                        return this._carrier.type
                    }, set: function (t) {
                        this._carrier.type = t
                    }
                }), Object.defineProperty(n.default.AMOscillator.prototype, "baseType", {
                    get: function () {
                        return this._carrier.baseType
                    }, set: function (t) {
                        this._carrier.baseType = t
                    }
                }), Object.defineProperty(n.default.AMOscillator.prototype, "partialCount", {
                    get: function () {
                        return this._carrier.partialCount
                    }, set: function (t) {
                        this._carrier.partialCount = t
                    }
                }), Object.defineProperty(n.default.AMOscillator.prototype, "modulationType", {
                    get: function () {
                        return this._modulator.type
                    }, set: function (t) {
                        this._modulator.type = t
                    }
                }), Object.defineProperty(n.default.AMOscillator.prototype, "phase", {
                    get: function () {
                        return this._carrier.phase
                    }, set: function (t) {
                        this._carrier.phase = t, this._modulator.phase = t
                    }
                }), Object.defineProperty(n.default.AMOscillator.prototype, "partials", {
                    get: function () {
                        return this._carrier.partials
                    }, set: function (t) {
                        this._carrier.partials = t
                    }
                }), n.default.AMOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._writable(["frequency", "detune", "harmonicity"]), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this._modulationScale.dispose(), this._modulationScale = null, this
                }, e.default = n.default.AMOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(50), i(17), i(5), n.default.PWMOscillator = function () {
                    var t = n.default.defaults(arguments, ["frequency", "modulationFrequency"], n.default.PWMOscillator);
                    n.default.Source.call(this, t), this._pulse = new n.default.PulseOscillator(t.modulationFrequency), this._pulse._sawtooth.type = "sine", this._modulator = new n.default.Oscillator({
                        frequency: t.frequency,
                        detune: t.detune,
                        phase: t.phase
                    }), this._scale = new n.default.Multiply(2), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this.modulationFrequency = this._pulse.frequency, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), this._readOnly(["modulationFrequency", "frequency", "detune"])
                }, n.default.extend(n.default.PWMOscillator, n.default.Source), n.default.PWMOscillator.defaults = {
                    frequency: 440,
                    detune: 0,
                    phase: 0,
                    modulationFrequency: .4
                }, n.default.PWMOscillator.prototype._start = function (t) {
                    t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t)
                }, n.default.PWMOscillator.prototype._stop = function (t) {
                    t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t)
                }, n.default.PWMOscillator.prototype.restart = function (t) {
                    this._modulator.restart(t), this._pulse.restart(t)
                }, Object.defineProperty(n.default.PWMOscillator.prototype, "type", {
                    get: function () {
                        return "pwm"
                    }
                }), Object.defineProperty(n.default.PWMOscillator.prototype, "baseType", {
                    get: function () {
                        return "pwm"
                    }
                }), Object.defineProperty(n.default.PWMOscillator.prototype, "partials", {
                    get: function () {
                        return []
                    }
                }), Object.defineProperty(n.default.PWMOscillator.prototype, "phase", {
                    get: function () {
                        return this._modulator.phase
                    }, set: function (t) {
                        this._modulator.phase = t
                    }
                }), n.default.PWMOscillator.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this._pulse.dispose(), this._pulse = null, this._scale.dispose(), this._scale = null, this._modulator.dispose(), this._modulator = null, this._writable(["modulationFrequency", "frequency", "detune"]), this.frequency = null, this.detune = null, this.modulationFrequency = null, this
                }, e.default = n.default.PWMOscillator
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(51), i(4), i(16), n.default.Part = function () {
                    var t = n.default.defaults(arguments, ["callback", "events"], n.default.Part);
                    n.default.Event.call(this, t), this._events = [];
                    for (var e = 0; e < t.events.length; e++) Array.isArray(t.events[e]) ? this.add(t.events[e][0], t.events[e][1]) : this.add(t.events[e])
                }, n.default.extend(n.default.Part, n.default.Event), n.default.Part.defaults = {
                    callback: n.default.noOp,
                    loop: !1,
                    loopEnd: "1m",
                    loopStart: 0,
                    playbackRate: 1,
                    probability: 1,
                    humanize: !1,
                    mute: !1,
                    events: []
                }, n.default.Part.prototype.start = function (t, e) {
                    var i = this.toTicks(t);
                    return this._state.getValueAtTime(i) !== n.default.State.Started && (e = this._loop ? n.default.defaultArg(e, this._loopStart) : n.default.defaultArg(e, 0), e = this.toTicks(e), this._state.add({
                        state: n.default.State.Started,
                        time: i,
                        offset: e
                    }), this._forEach(function (t) {
                        this._startNote(t, i, e)
                    })), this
                }, n.default.Part.prototype._startNote = function (t, e, i) {
                    e -= i, this._loop ? t.startOffset >= this._loopStart && t.startOffset < this._loopEnd ? (t.startOffset < i && (e += this._getLoopDuration()), t.start(n.default.Ticks(e))) : t.startOffset < this._loopStart && t.startOffset >= i && (t.loop = !1, t.start(n.default.Ticks(e))) : t.startOffset >= i && t.start(n.default.Ticks(e))
                }, Object.defineProperty(n.default.Part.prototype, "startOffset", {
                    get: function () {
                        return this._startOffset
                    }, set: function (t) {
                        this._startOffset = t, this._forEach(function (t) {
                            t.startOffset += this._startOffset
                        })
                    }
                }), n.default.Part.prototype.stop = function (t) {
                    var e = this.toTicks(t);
                    return this._state.cancel(e), this._state.setStateAtTime(n.default.State.Stopped, e), this._forEach(function (e) {
                        e.stop(t)
                    }), this
                }, n.default.Part.prototype.at = function (t, e) {
                    t = n.default.TransportTime(t);
                    for (var i = n.default.Ticks(1).toSeconds(), o = 0; o < this._events.length; o++) {
                        var a = this._events[o];
                        if (Math.abs(t.toTicks() - a.startOffset) < i) return n.default.isDefined(e) && (a.value = e), a
                    }
                    return n.default.isDefined(e) ? (this.add(t, e), this._events[this._events.length - 1]) : null
                }, n.default.Part.prototype.add = function (t, e) {
                    var i;
                    return t.hasOwnProperty("time") && (t = (e = t).time), t = this.toTicks(t), e instanceof n.default.Event ? (i = e).callback = this._tick.bind(this) : i = new n.default.Event({
                        callback: this._tick.bind(this),
                        value: e
                    }), i.startOffset = t, i.set({
                        loopEnd: this.loopEnd,
                        loopStart: this.loopStart,
                        loop: this.loop,
                        humanize: this.humanize,
                        playbackRate: this.playbackRate,
                        probability: this.probability
                    }), this._events.push(i), this._restartEvent(i), this
                }, n.default.Part.prototype._restartEvent = function (t) {
                    this._state.forEach(function (e) {
                        e.state === n.default.State.Started ? this._startNote(t, e.time, e.offset) : t.stop(n.default.Ticks(e.time))
                    }.bind(this))
                }, n.default.Part.prototype.remove = function (t, e) {
                    t.hasOwnProperty("time") && (t = (e = t).time), t = this.toTicks(t);
                    for (var i = this._events.length - 1; i >= 0; i--) {
                        var o = this._events[i];
                        o.startOffset === t && (n.default.isUndef(e) || n.default.isDefined(e) && o.value === e) && (this._events.splice(i, 1), o.dispose())
                    }
                    return this
                }, n.default.Part.prototype.removeAll = function () {
                    return this._forEach(function (t) {
                        t.dispose()
                    }), this._events = [], this
                }, n.default.Part.prototype.cancel = function (t) {
                    return this._forEach(function (e) {
                        e.cancel(t)
                    }), this._state.cancel(this.toTicks(t)), this
                }, n.default.Part.prototype._forEach = function (t, e) {
                    if (this._events) {
                        e = n.default.defaultArg(e, this);
                        for (var i = this._events.length - 1; i >= 0; i--) {
                            var o = this._events[i];
                            o instanceof n.default.Part ? o._forEach(t, e) : t.call(e, o)
                        }
                    }
                    return this
                }, n.default.Part.prototype._setAll = function (t, e) {
                    this._forEach(function (i) {
                        i[t] = e
                    })
                }, n.default.Part.prototype._tick = function (t, e) {
                    this.mute || this.callback(t, e)
                }, n.default.Part.prototype._testLoopBoundries = function (t) {
                    this._loop && (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd) ? t.cancel(0) : t.state === n.default.State.Stopped && this._restartEvent(t)
                }, Object.defineProperty(n.default.Part.prototype, "probability", {
                    get: function () {
                        return this._probability
                    }, set: function (t) {
                        this._probability = t, this._setAll("probability", t)
                    }
                }), Object.defineProperty(n.default.Part.prototype, "humanize", {
                    get: function () {
                        return this._humanize
                    }, set: function (t) {
                        this._humanize = t, this._setAll("humanize", t)
                    }
                }), Object.defineProperty(n.default.Part.prototype, "loop", {
                    get: function () {
                        return this._loop
                    }, set: function (t) {
                        this._loop = t, this._forEach(function (e) {
                            e._loopStart = this._loopStart, e._loopEnd = this._loopEnd, e.loop = t, this._testLoopBoundries(e)
                        })
                    }
                }), Object.defineProperty(n.default.Part.prototype, "loopEnd", {
                    get: function () {
                        return n.default.Ticks(this._loopEnd).toSeconds()
                    }, set: function (t) {
                        this._loopEnd = this.toTicks(t), this._loop && this._forEach(function (e) {
                            e.loopEnd = t, this._testLoopBoundries(e)
                        })
                    }
                }), Object.defineProperty(n.default.Part.prototype, "loopStart", {
                    get: function () {
                        return n.default.Ticks(this._loopStart).toSeconds()
                    }, set: function (t) {
                        this._loopStart = this.toTicks(t), this._loop && this._forEach(function (t) {
                            t.loopStart = this.loopStart, this._testLoopBoundries(t)
                        })
                    }
                }), Object.defineProperty(n.default.Part.prototype, "playbackRate", {
                    get: function () {
                        return this._playbackRate
                    }, set: function (t) {
                        this._playbackRate = t, this._setAll("playbackRate", t)
                    }
                }), Object.defineProperty(n.default.Part.prototype, "length", {
                    get: function () {
                        return this._events.length
                    }
                }), n.default.Part.prototype.dispose = function () {
                    return n.default.Event.prototype.dispose.call(this), this.removeAll(), this.callback = null, this._events = null, this
                }, e.default = n.default.Part
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(51), n.default.Loop = function () {
                    var t = n.default.defaults(arguments, ["callback", "interval"], n.default.Loop);
                    n.default.call(this), this._event = new n.default.Event({
                        callback: this._tick.bind(this),
                        loop: !0,
                        loopEnd: t.interval,
                        playbackRate: t.playbackRate,
                        probability: t.probability
                    }), this.callback = t.callback, this.iterations = t.iterations
                }, n.default.extend(n.default.Loop), n.default.Loop.defaults = {
                    interval: "4n",
                    callback: n.default.noOp,
                    playbackRate: 1,
                    iterations: 1 / 0,
                    probability: !0,
                    mute: !1
                }, n.default.Loop.prototype.start = function (t) {
                    return this._event.start(t), this
                }, n.default.Loop.prototype.stop = function (t) {
                    return this._event.stop(t), this
                }, n.default.Loop.prototype.cancel = function (t) {
                    return this._event.cancel(t), this
                }, n.default.Loop.prototype._tick = function (t) {
                    this.callback(t)
                }, Object.defineProperty(n.default.Loop.prototype, "state", {
                    get: function () {
                        return this._event.state
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "progress", {
                    get: function () {
                        return this._event.progress
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "interval", {
                    get: function () {
                        return this._event.loopEnd
                    }, set: function (t) {
                        this._event.loopEnd = t
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "playbackRate", {
                    get: function () {
                        return this._event.playbackRate
                    }, set: function (t) {
                        this._event.playbackRate = t
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "humanize", {
                    get: function () {
                        return this._event.humanize
                    }, set: function (t) {
                        this._event.humanize = t
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "probability", {
                    get: function () {
                        return this._event.probability
                    }, set: function (t) {
                        this._event.probability = t
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "mute", {
                    get: function () {
                        return this._event.mute
                    }, set: function (t) {
                        this._event.mute = t
                    }
                }), Object.defineProperty(n.default.Loop.prototype, "iterations", {
                    get: function () {
                        return !0 === this._event.loop ? 1 / 0 : this._event.loop
                    }, set: function (t) {
                        this._event.loop = t === 1 / 0 || t
                    }
                }), n.default.Loop.prototype.dispose = function () {
                    this._event.dispose(), this._event = null, this.callback = null
                }, e.default = n.default.Loop
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(15), i(33), n.default.StereoXFeedbackEffect = function () {
                    var t = n.default.defaults(arguments, ["feedback"], n.default.FeedbackEffect);
                    n.default.StereoEffect.call(this, t), this.feedback = new n.default.Signal(t.feedback, n.default.Type.NormalRange), this._feedbackLR = new n.default.Gain, this._feedbackRL = new n.default.Gain, this.effectReturnL.chain(this._feedbackLR, this.effectSendR), this.effectReturnR.chain(this._feedbackRL, this.effectSendL), this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain), this._readOnly(["feedback"])
                }, n.default.extend(n.default.StereoXFeedbackEffect, n.default.StereoEffect), n.default.StereoXFeedbackEffect.prototype.dispose = function () {
                    return n.default.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackLR.dispose(), this._feedbackLR = null, this._feedbackRL.dispose(), this._feedbackRL = null, this
                }, e.default = n.default.StereoXFeedbackEffect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(53), i(52), n.default.MidSideEffect = function () {
                    n.default.Effect.apply(this, arguments), this._midSideSplit = new n.default.MidSideSplit, this._midSideMerge = new n.default.MidSideMerge, this.midSend = this._midSideSplit.mid, this.sideSend = this._midSideSplit.side, this.midReturn = this._midSideMerge.mid, this.sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn)
                }, n.default.extend(n.default.MidSideEffect, n.default.Effect), n.default.MidSideEffect.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this.midSend = null, this.sideSend = null, this.midReturn = null, this.sideReturn = null, this
                }, e.default = n.default.MidSideEffect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(11), i(8), n.default.Convolver = function () {
                    var t = n.default.defaults(arguments, ["url", "onload"], n.default.Convolver);
                    n.default.Effect.call(this, t), this._convolver = this.context.createConvolver(), this._buffer = new n.default.Buffer(t.url, function (e) {
                        this.buffer = e.get(), t.onload()
                    }.bind(this)), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = t.normalize, this.connectEffect(this._convolver)
                }, n.default.extend(n.default.Convolver, n.default.Effect), n.default.Convolver.defaults = {
                    onload: n.default.noOp,
                    normalize: !0
                }, Object.defineProperty(n.default.Convolver.prototype, "buffer", {
                    get: function () {
                        return this._buffer.length ? this._buffer : null
                    }, set: function (t) {
                        this._buffer.set(t), this._convolver.buffer && (this.effectSend.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.connectEffect(this._convolver)), this._convolver.buffer = this._buffer.get()
                    }
                }), Object.defineProperty(n.default.Convolver.prototype, "normalize", {
                    get: function () {
                        return this._convolver.normalize
                    }, set: function (t) {
                        this._convolver.normalize = t
                    }
                }), n.default.Convolver.prototype.load = function (t, e) {
                    return this._buffer.load(t, function (t) {
                        this.buffer = t, e && e()
                    }.bind(this))
                }, n.default.Convolver.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this._convolver.disconnect(), this._convolver = null, this
                }, e.default = n.default.Convolver
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), i(5), i(13), n.default.Modulo = function (t) {
                    n.default.SignalBase.call(this), this.createInsOuts(1, 0), this._shaper = new n.default.WaveShaper(Math.pow(2, 16)), this._multiply = new n.default.Multiply, this._subtract = this.output = new n.default.Subtract, this._modSignal = new n.default.Signal(t), n.default.connect(this.input, this._shaper), n.default.connect(this.input, this._subtract), this._modSignal.connect(this._multiply, 0, 0), this._shaper.connect(this._multiply, 0, 1), this._multiply.connect(this._subtract, 0, 1), this._setWaveShaper(t)
                }, n.default.extend(n.default.Modulo, n.default.SignalBase), n.default.Modulo.prototype._setWaveShaper = function (t) {
                    this._shaper.setMap(function (e) {
                        return Math.floor((e + 1e-4) / t)
                    })
                }, Object.defineProperty(n.default.Modulo.prototype, "value", {
                    get: function () {
                        return this._modSignal.value
                    }, set: function (t) {
                        this._modSignal.value = t, this._setWaveShaper(t)
                    }
                }), n.default.Modulo.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this
                }, e.default = n.default.Modulo
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(20), i(92), n.default.OfflineContext = function (t, e, i) {
                    var o = new OfflineAudioContext(t, e * i, i);
                    n.default.Context.call(this, {
                        context: o,
                        clockSource: "offline",
                        lookAhead: 0,
                        updateInterval: 128 / i
                    }), this._duration = e, this._currentTime = 0
                }, n.default.extend(n.default.OfflineContext, n.default.Context), n.default.OfflineContext.prototype.now = function () {
                    return this._currentTime
                }, n.default.OfflineContext.prototype.resume = function () {
                    return Promise.resolve()
                }, n.default.OfflineContext.prototype.render = function () {
                    for (; this._duration - this._currentTime >= 0;) this.emit("tick"), this._currentTime += .005;
                    return this._context.startRendering()
                }, n.default.OfflineContext.prototype.close = function () {
                    return this._context = null, Promise.resolve()
                }, e.default = n.default.OfflineContext
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(16), i(11), i(76), i(40), n.default.Offline = function (t, e) {
                    var i = n.default.context.sampleRate, o = n.default.context,
                        a = new n.default.OfflineContext(2, e, i);
                    n.default.context = a;
                    var r = t(n.default.Transport), s = null;
                    return s = r && n.default.isFunction(r.then) ? r.then(function () {
                        return a.render()
                    }) : a.render(), n.default.context = o, s.then(function (t) {
                        return new n.default.Buffer(t)
                    })
                }, e.default = n.default.Offline
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(11), n.default.Buffers = function (t) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift();
                    var i = n.default.defaults(e, ["onload", "baseUrl"], n.default.Buffers);
                    for (var o in n.default.call(this), this._buffers = {}, this.baseUrl = i.baseUrl, this._loadingCount = 0, t) this._loadingCount++, this.add(o, t[o], this._bufferLoaded.bind(this, i.onload))
                }, n.default.extend(n.default.Buffers), n.default.Buffers.defaults = {
                    onload: n.default.noOp,
                    baseUrl: ""
                }, n.default.Buffers.prototype.has = function (t) {
                    return this._buffers.hasOwnProperty(t)
                }, n.default.Buffers.prototype.get = function (t) {
                    if (this.has(t)) return this._buffers[t];
                    throw new Error("Tone.Buffers: no buffer named " + t)
                }, n.default.Buffers.prototype._bufferLoaded = function (t) {
                    0 === --this._loadingCount && t && t(this)
                }, Object.defineProperty(n.default.Buffers.prototype, "loaded", {
                    get: function () {
                        var t = !0;
                        for (var e in this._buffers) {
                            var i = this.get(e);
                            t = t && i.loaded
                        }
                        return t
                    }
                }), n.default.Buffers.prototype.add = function (t, e, i) {
                    return i = n.default.defaultArg(i, n.default.noOp), e instanceof n.default.Buffer ? (this._buffers[t] = e, i(this)) : e instanceof AudioBuffer ? (this._buffers[t] = new n.default.Buffer(e), i(this)) : n.default.isString(e) && (this._buffers[t] = new n.default.Buffer(this.baseUrl + e, i)), this
                }, n.default.Buffers.prototype.dispose = function () {
                    for (var t in n.default.prototype.dispose.call(this), this._buffers) this._buffers[t].dispose();
                    return this._buffers = null, this
                }, e.default = n.default.Buffers
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                n.default.CtrlPattern = function () {
                    var t = n.default.defaults(arguments, ["values", "type"], n.default.CtrlPattern);
                    n.default.call(this), this.values = t.values, this.index = 0, this._type = null, this._shuffled = null, this._direction = null, this.type = t.type
                }, n.default.extend(n.default.CtrlPattern), n.default.CtrlPattern.Type = {
                    Up: "up",
                    Down: "down",
                    UpDown: "upDown",
                    DownUp: "downUp",
                    AlternateUp: "alternateUp",
                    AlternateDown: "alternateDown",
                    Random: "random",
                    RandomWalk: "randomWalk",
                    RandomOnce: "randomOnce"
                }, n.default.CtrlPattern.defaults = {
                    type: n.default.CtrlPattern.Type.Up,
                    values: []
                }, Object.defineProperty(n.default.CtrlPattern.prototype, "value", {
                    get: function () {
                        if (0 !== this.values.length) {
                            if (1 === this.values.length) return this.values[0];
                            this.index = Math.min(this.index, this.values.length - 1);
                            var t = this.values[this.index];
                            return this.type === n.default.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), t = this.values[this._shuffled[this.index]]), t
                        }
                    }
                }), Object.defineProperty(n.default.CtrlPattern.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        this._type = t, this._shuffled = null, this._type === n.default.CtrlPattern.Type.Up || this._type === n.default.CtrlPattern.Type.UpDown || this._type === n.default.CtrlPattern.Type.RandomOnce || this._type === n.default.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== n.default.CtrlPattern.Type.Down && this._type !== n.default.CtrlPattern.Type.DownUp && this._type !== n.default.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1), this._type === n.default.CtrlPattern.Type.UpDown || this._type === n.default.CtrlPattern.Type.AlternateUp ? this._direction = n.default.CtrlPattern.Type.Up : this._type !== n.default.CtrlPattern.Type.DownUp && this._type !== n.default.CtrlPattern.Type.AlternateDown || (this._direction = n.default.CtrlPattern.Type.Down), this._type === n.default.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === n.default.CtrlPattern.Type.Random && (this.index = Math.floor(Math.random() * this.values.length))
                    }
                }), n.default.CtrlPattern.prototype.next = function () {
                    var t = this.type;
                    return t === n.default.CtrlPattern.Type.Up ? ++this.index >= this.values.length && (this.index = 0) : t === n.default.CtrlPattern.Type.Down ? --this.index < 0 && (this.index = this.values.length - 1) : t === n.default.CtrlPattern.Type.UpDown || t === n.default.CtrlPattern.Type.DownUp ? (this._direction === n.default.CtrlPattern.Type.Up ? this.index++ : this.index--, this.index < 0 ? (this.index = 1, this._direction = n.default.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2, this._direction = n.default.CtrlPattern.Type.Down)) : t === n.default.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : t === n.default.CtrlPattern.Type.RandomWalk ? Math.random() < .5 ? (this.index--, this.index = Math.max(this.index, 0)) : (this.index++, this.index = Math.min(this.index, this.values.length - 1)) : t === n.default.CtrlPattern.Type.RandomOnce ? ++this.index >= this.values.length && (this.index = 0, this._shuffleValues()) : t === n.default.CtrlPattern.Type.AlternateUp ? (this._direction === n.default.CtrlPattern.Type.Up ? (this.index += 2, this._direction = n.default.CtrlPattern.Type.Down) : (this.index -= 1, this._direction = n.default.CtrlPattern.Type.Up), this.index >= this.values.length && (this.index = 0, this._direction = n.default.CtrlPattern.Type.Up)) : t === n.default.CtrlPattern.Type.AlternateDown && (this._direction === n.default.CtrlPattern.Type.Up ? (this.index += 1, this._direction = n.default.CtrlPattern.Type.Down) : (this.index -= 2, this._direction = n.default.CtrlPattern.Type.Up), this.index < 0 && (this.index = this.values.length - 1, this._direction = n.default.CtrlPattern.Type.Down)), this.value
                }, n.default.CtrlPattern.prototype._shuffleValues = function () {
                    var t = [];
                    this._shuffled = [];
                    for (var e = 0; e < this.values.length; e++) t[e] = e;
                    for (; t.length > 0;) {
                        var i = t.splice(Math.floor(t.length * Math.random()), 1);
                        this._shuffled.push(i[0])
                    }
                }, n.default.CtrlPattern.prototype.dispose = function () {
                    this._shuffled = null, this.values = null
                }, e.default = n.default.CtrlPattern
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(56), i(55), n.default.TransportRepeatEvent = function (t, e) {
                    n.default.TransportEvent.call(this, t, e), e = n.default.defaultArg(e, n.default.TransportRepeatEvent.defaults), this.duration = n.default.Ticks(e.duration), this._interval = n.default.Ticks(e.interval), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this), this.Transport.on("start loopStart", this._boundRestart), this._restart()
                }, n.default.extend(n.default.TransportRepeatEvent, n.default.TransportEvent), n.default.TransportRepeatEvent.defaults = {
                    duration: 1 / 0,
                    interval: 1
                }, n.default.TransportRepeatEvent.prototype.invoke = function (t) {
                    this._createEvents(t), n.default.TransportEvent.prototype.invoke.call(this, t)
                }, n.default.TransportRepeatEvent.prototype._createEvents = function (t) {
                    var e = this.Transport.getTicksAtTime(t);
                    e >= this.time && e >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), n.default.Ticks(this._nextTick)))
                }, n.default.TransportRepeatEvent.prototype._restart = function (t) {
                    this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this._nextTick = this.time;
                    var e = this.Transport.getTicksAtTime(t);
                    e > this.time && (this._nextTick = this.time + Math.ceil((e - this.time) / this._interval) * this._interval), this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), n.default.Ticks(this._nextTick)), this._nextTick += this._interval, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), n.default.Ticks(this._nextTick))
                }, n.default.TransportRepeatEvent.prototype.dispose = function () {
                    return this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this.Transport.off("start loopStart", this._boundRestart), this._boundCreateEvents = null, n.default.TransportEvent.prototype.dispose.call(this), this.duration = null, this._interval = null, this
                }, e.default = n.default.TransportRepeatEvent
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(4), n.default.IntervalTimeline = function () {
                    n.default.call(this), this._root = null, this._length = 0
                }, n.default.extend(n.default.IntervalTimeline), n.default.IntervalTimeline.prototype.add = function (t) {
                    if (n.default.isUndef(t.time) || n.default.isUndef(t.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
                    t.time = t.time.valueOf();
                    var e = new o(t.time, t.time + t.duration, t);
                    for (null === this._root ? this._root = e : this._root.insert(e), this._length++; null !== e;) e.updateHeight(), e.updateMax(), this._rebalance(e), e = e.parent;
                    return this
                }, n.default.IntervalTimeline.prototype.remove = function (t) {
                    if (null !== this._root) {
                        var e = [];
                        this._root.search(t.time, e);
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            if (n.event === t) {
                                this._removeNode(n), this._length--;
                                break
                            }
                        }
                    }
                    return this
                }, Object.defineProperty(n.default.IntervalTimeline.prototype, "length", {
                    get: function () {
                        return this._length
                    }
                }), n.default.IntervalTimeline.prototype.cancel = function (t) {
                    return this.forEachFrom(t, function (t) {
                        this.remove(t)
                    }.bind(this)), this
                }, n.default.IntervalTimeline.prototype._setRoot = function (t) {
                    this._root = t, null !== this._root && (this._root.parent = null)
                }, n.default.IntervalTimeline.prototype._replaceNodeInParent = function (t, e) {
                    null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e)
                }, n.default.IntervalTimeline.prototype._removeNode = function (t) {
                    if (null === t.left && null === t.right) this._replaceNodeInParent(t, null); else if (null === t.right) this._replaceNodeInParent(t, t.left); else if (null === t.left) this._replaceNodeInParent(t, t.right); else {
                        var e, i;
                        if (t.getBalance() > 0) if (null === t.left.right) (e = t.left).right = t.right, i = e; else {
                            for (e = t.left.right; null !== e.right;) e = e.right;
                            e.parent.right = e.left, i = e.parent, e.left = t.left, e.right = t.right
                        } else if (null === t.right.left) (e = t.right).left = t.left, i = e; else {
                            for (e = t.right.left; null !== e.left;) e = e.left;
                            e.parent.left = e.right, i = e.parent, e.left = t.left, e.right = t.right
                        }
                        null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), this._rebalance(i)
                    }
                    t.dispose()
                }, n.default.IntervalTimeline.prototype._rotateLeft = function (t) {
                    var e = t.parent, i = t.isLeftChild(), n = t.right;
                    t.right = n.left, n.left = t, null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
                }, n.default.IntervalTimeline.prototype._rotateRight = function (t) {
                    var e = t.parent, i = t.isLeftChild(), n = t.left;
                    t.left = n.right, n.right = t, null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
                }, n.default.IntervalTimeline.prototype._rebalance = function (t) {
                    var e = t.getBalance();
                    e > 1 ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
                }, n.default.IntervalTimeline.prototype.get = function (t) {
                    if (null !== this._root) {
                        var e = [];
                        if (this._root.search(t, e), e.length > 0) {
                            for (var i = e[0], n = 1; n < e.length; n++) e[n].low > i.low && (i = e[n]);
                            return i.event
                        }
                    }
                    return null
                }, n.default.IntervalTimeline.prototype.forEach = function (t) {
                    if (null !== this._root) {
                        var e = [];
                        this._root.traverse(function (t) {
                            e.push(t)
                        });
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i].event;
                            n && t(n)
                        }
                    }
                    return this
                }, n.default.IntervalTimeline.prototype.forEachAtTime = function (t, e) {
                    if (null !== this._root) {
                        var i = [];
                        this._root.search(t, i);
                        for (var n = i.length - 1; n >= 0; n--) {
                            var o = i[n].event;
                            o && e(o)
                        }
                    }
                    return this
                }, n.default.IntervalTimeline.prototype.forEachFrom = function (t, e) {
                    if (null !== this._root) {
                        var i = [];
                        this._root.searchAfter(t, i);
                        for (var n = i.length - 1; n >= 0; n--) e(i[n].event)
                    }
                    return this
                }, n.default.IntervalTimeline.prototype.dispose = function () {
                    var t = [];
                    null !== this._root && this._root.traverse(function (e) {
                        t.push(e)
                    });
                    for (var e = 0; e < t.length; e++) t[e].dispose();
                    return t = null, this._root = null, this
                };
                var o = function (t, e, i) {
                    this.event = i, this.low = t, this.high = e, this.max = this.high, this._left = null, this._right = null, this.parent = null, this.height = 0
                };
                o.prototype.insert = function (t) {
                    t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
                }, o.prototype.search = function (t, e) {
                    t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e))
                }, o.prototype.searchAfter = function (t, e) {
                    this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e)
                }, o.prototype.traverse = function (t) {
                    t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t)
                }, o.prototype.updateHeight = function () {
                    null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
                }, o.prototype.updateMax = function () {
                    this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max))
                }, o.prototype.getBalance = function () {
                    var t = 0;
                    return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t
                }, o.prototype.isLeftChild = function () {
                    return null !== this.parent && this.parent.left === this
                }, Object.defineProperty(o.prototype, "left", {
                    get: function () {
                        return this._left
                    }, set: function (t) {
                        this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
                    }
                }), Object.defineProperty(o.prototype, "right", {
                    get: function () {
                        return this._right
                    }, set: function (t) {
                        this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
                    }
                }), o.prototype.dispose = function () {
                    this.parent = null, this._left = null, this._right = null, this.event = null
                }, e.default = n.default.IntervalTimeline
            }, function (t, e, i) {
                "use strict";

                function n(t) {
                    return function (e, i) {
                        i = this.toSeconds(i), t.apply(this, arguments);
                        var n = this._events.get(i), o = this._events.previousEvent(n),
                            a = this._getTicksUntilEvent(o, i);
                        return n.ticks = Math.max(a, 0), this
                    }
                }

                i.r(e);
                var o = i(0);
                i(2), o.default.TickSignal = function (t) {
                    t = o.default.defaultArg(t, 1), o.default.Signal.call(this, {
                        units: o.default.Type.Ticks,
                        value: t
                    }), this._events.memory = 1 / 0, this.cancelScheduledValues(0), this._events.add({
                        type: o.default.Param.AutomationType.SetValue,
                        time: 0,
                        value: t
                    })
                }, o.default.extend(o.default.TickSignal, o.default.Signal), o.default.TickSignal.prototype.setValueAtTime = n(o.default.Signal.prototype.setValueAtTime), o.default.TickSignal.prototype.linearRampToValueAtTime = n(o.default.Signal.prototype.linearRampToValueAtTime), o.default.TickSignal.prototype.setTargetAtTime = function (t, e, i) {
                    e = this.toSeconds(e), this.setRampPoint(e), t = this._fromUnits(t);
                    for (var n = this._events.get(e), o = Math.round(Math.max(1 / i, 1)), a = 0; a <= o; a++) {
                        var r = i * a + e, s = this._exponentialApproach(n.time, n.value, t, i, r);
                        this.linearRampToValueAtTime(this._toUnits(s), r)
                    }
                    return this
                }, o.default.TickSignal.prototype.exponentialRampToValueAtTime = function (t, e) {
                    e = this.toSeconds(e), t = this._fromUnits(t);
                    for (var i = this._events.get(e), n = Math.round(Math.max(10 * (e - i.time), 1)), o = (e - i.time) / n, a = 0; a <= n; a++) {
                        var r = o * a + i.time, s = this._exponentialInterpolate(i.time, i.value, e, t, r);
                        this.linearRampToValueAtTime(this._toUnits(s), r)
                    }
                    return this
                }, o.default.TickSignal.prototype._getTicksUntilEvent = function (t, e) {
                    if (null === t) t = {ticks: 0, time: 0}; else if (o.default.isUndef(t.ticks)) {
                        var i = this._events.previousEvent(t);
                        t.ticks = this._getTicksUntilEvent(i, t.time)
                    }
                    var n = this.getValueAtTime(t.time), a = this.getValueAtTime(e);
                    return this._events.get(e).time === e && this._events.get(e).type === o.default.Param.AutomationType.SetValue && (a = this.getValueAtTime(e - this.sampleTime)), .5 * (e - t.time) * (n + a) + t.ticks
                }, o.default.TickSignal.prototype.getTicksAtTime = function (t) {
                    t = this.toSeconds(t);
                    var e = this._events.get(t);
                    return Math.max(this._getTicksUntilEvent(e, t), 0)
                }, o.default.TickSignal.prototype.getDurationOfTicks = function (t, e) {
                    e = this.toSeconds(e);
                    var i = this.getTicksAtTime(e);
                    return this.getTimeOfTick(i + t) - e
                }, o.default.TickSignal.prototype.getTimeOfTick = function (t) {
                    var e = this._events.get(t, "ticks"), i = this._events.getAfter(t, "ticks");
                    if (e && e.ticks === t) return e.time;
                    if (e && i && i.type === o.default.Param.AutomationType.Linear && e.value !== i.value) {
                        var n = this.getValueAtTime(e.time), a = (this.getValueAtTime(i.time) - n) / (i.time - e.time),
                            r = Math.sqrt(Math.pow(n, 2) - 2 * a * (e.ticks - t)), s = (-n + r) / a;
                        return (s > 0 ? s : (-n - r) / a) + e.time
                    }
                    return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue
                }, o.default.TickSignal.prototype.ticksToTime = function (t, e) {
                    return e = this.toSeconds(e), new o.default.Time(this.getDurationOfTicks(t, e))
                }, o.default.TickSignal.prototype.timeToTicks = function (t, e) {
                    e = this.toSeconds(e), t = this.toSeconds(t);
                    var i = this.getTicksAtTime(e), n = this.getTicksAtTime(e + t);
                    return new o.default.Ticks(n - i)
                }, e.default = o.default.TickSignal
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(57), i(34), i(35), i(20), n.default.Clock = function () {
                    var t = n.default.defaults(arguments, ["callback", "frequency"], n.default.Clock);
                    n.default.Emitter.call(this), this.callback = t.callback, this._nextTick = 0, this._tickSource = new n.default.TickSource(t.frequency), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, this._readOnly("frequency"), this._state = new n.default.TimelineState(n.default.State.Stopped), this._state.setStateAtTime(n.default.State.Stopped, 0), this._boundLoop = this._loop.bind(this), this.context.on("tick", this._boundLoop)
                }, n.default.extend(n.default.Clock, n.default.Emitter), n.default.Clock.defaults = {
                    callback: n.default.noOp,
                    frequency: 1
                }, Object.defineProperty(n.default.Clock.prototype, "state", {
                    get: function () {
                        return this._state.getValueAtTime(this.now())
                    }
                }), n.default.Clock.prototype.start = function (t, e) {
                    return this.context.resume(), t = this.toSeconds(t), this._state.getValueAtTime(t) !== n.default.State.Started && (this._state.setStateAtTime(n.default.State.Started, t), this._tickSource.start(t, e), t < this._lastUpdate && this.emit("start", t, e)), this
                }, n.default.Clock.prototype.stop = function (t) {
                    return t = this.toSeconds(t), this._state.cancel(t), this._state.setStateAtTime(n.default.State.Stopped, t), this._tickSource.stop(t), t < this._lastUpdate && this.emit("stop", t), this
                }, n.default.Clock.prototype.pause = function (t) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t) === n.default.State.Started && (this._state.setStateAtTime(n.default.State.Paused, t), this._tickSource.pause(t), t < this._lastUpdate && this.emit("pause", t)), this
                }, Object.defineProperty(n.default.Clock.prototype, "ticks", {
                    get: function () {
                        return Math.ceil(this.getTicksAtTime(this.now()))
                    }, set: function (t) {
                        this._tickSource.ticks = t
                    }
                }), Object.defineProperty(n.default.Clock.prototype, "seconds", {
                    get: function () {
                        return this._tickSource.seconds
                    }, set: function (t) {
                        this._tickSource.seconds = t
                    }
                }), n.default.Clock.prototype.getSecondsAtTime = function (t) {
                    return this._tickSource.getSecondsAtTime(t)
                }, n.default.Clock.prototype.setTicksAtTime = function (t, e) {
                    return this._tickSource.setTicksAtTime(t, e), this
                }, n.default.Clock.prototype.getTicksAtTime = function (t) {
                    return this._tickSource.getTicksAtTime(t)
                }, n.default.Clock.prototype.nextTickTime = function (t, e) {
                    e = this.toSeconds(e);
                    var i = this.getTicksAtTime(e);
                    return this._tickSource.getTimeOfTick(i + t, e)
                }, n.default.Clock.prototype._loop = function () {
                    var t = this._lastUpdate, e = this.now();
                    this._lastUpdate = e, t !== e && (this._state.forEachBetween(t, e, function (t) {
                        switch (t.state) {
                            case n.default.State.Started:
                                var e = this._tickSource.getTicksAtTime(t.time);
                                this.emit("start", t.time, e);
                                break;
                            case n.default.State.Stopped:
                                0 !== t.time && this.emit("stop", t.time);
                                break;
                            case n.default.State.Paused:
                                this.emit("pause", t.time)
                        }
                    }.bind(this)), this._tickSource.forEachTickBetween(t, e, function (t, e) {
                        this.callback(t, e)
                    }.bind(this)))
                }, n.default.Clock.prototype.getStateAtTime = function (t) {
                    return t = this.toSeconds(t), this._state.getValueAtTime(t)
                }, n.default.Clock.prototype.dispose = function () {
                    n.default.Emitter.prototype.dispose.call(this), this.context.off("tick", this._boundLoop), this._writable("frequency"), this._tickSource.dispose(), this._tickSource = null, this.frequency = null, this._boundLoop = null, this._nextTick = 1 / 0, this.callback = null, this._state.dispose(), this._state = null
                }, e.default = n.default.Clock
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(2), i(5), i(7), n.default.GreaterThanZero = function () {
                    n.default.SignalBase.call(this), this._thresh = this.output = new n.default.WaveShaper(function (t) {
                        return t <= 0 ? 0 : 1
                    }, 127), this._scale = this.input = new n.default.Multiply(1e4), this._scale.connect(this._thresh)
                }, n.default.extend(n.default.GreaterThanZero, n.default.SignalBase), n.default.GreaterThanZero.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this
                }, e.default = n.default.GreaterThanZero
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(84), i(13), i(2), n.default.GreaterThan = function (t) {
                    n.default.Signal.call(this), this.createInsOuts(2, 0), this._param = this.input[0] = new n.default.Subtract(t), this.input[1] = this._param.input[1], this._gtz = this.output = new n.default.GreaterThanZero, this._param.connect(this._gtz)
                }, n.default.extend(n.default.GreaterThan, n.default.Signal), n.default.GreaterThan.prototype.dispose = function () {
                    return n.default.Signal.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this
                }, e.default = n.default.GreaterThan
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(47), i(26), n.default.ScaledEnvelope = function () {
                    var t = n.default.defaults(arguments, ["attack", "decay", "sustain", "release"], n.default.Envelope);
                    n.default.Envelope.call(this, t), t = n.default.defaultArg(t, n.default.ScaledEnvelope.defaults), this._exp = this.output = new n.default.Pow(t.exponent), this._scale = this.output = new n.default.Scale(t.min, t.max), this._sig.chain(this._exp, this._scale)
                }, n.default.extend(n.default.ScaledEnvelope, n.default.Envelope), n.default.ScaledEnvelope.defaults = {
                    min: 0,
                    max: 1,
                    exponent: 1
                }, Object.defineProperty(n.default.ScaledEnvelope.prototype, "min", {
                    get: function () {
                        return this._scale.min
                    }, set: function (t) {
                        this._scale.min = t
                    }
                }), Object.defineProperty(n.default.ScaledEnvelope.prototype, "max", {
                    get: function () {
                        return this._scale.max
                    }, set: function (t) {
                        this._scale.max = t
                    }
                }), Object.defineProperty(n.default.ScaledEnvelope.prototype, "exponent", {
                    get: function () {
                        return this._exp.value
                    }, set: function (t) {
                        this._exp.value = t
                    }
                }), n.default.ScaledEnvelope.prototype.dispose = function () {
                    return n.default.Envelope.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
                }, e.default = n.default.ScaledEnvelope
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), i(30), n.default.Abs = function () {
                    n.default.SignalBase.call(this), this._abs = this.input = this.output = new n.default.WaveShaper(function (t) {
                        return Math.abs(t) < .001 ? 0 : Math.abs(t)
                    }, 1024)
                }, n.default.extend(n.default.Abs, n.default.SignalBase), n.default.Abs.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._abs.dispose(), this._abs = null, this
                }, e.default = n.default.Abs
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(3), i(1), n.default.Solo = function () {
                    var t = n.default.defaults(arguments, ["solo"], n.default.Solo);
                    n.default.AudioNode.call(this), this.input = this.output = new n.default.Gain, this._soloBind = this._soloed.bind(this), this.context.on("solo", this._soloBind), this.solo = t.solo
                }, n.default.extend(n.default.Solo, n.default.AudioNode), n.default.Solo.defaults = {solo: !1}, Object.defineProperty(n.default.Solo.prototype, "solo", {
                    get: function () {
                        return this._isSoloed()
                    }, set: function (t) {
                        t ? this._addSolo() : this._removeSolo(), this.context.emit("solo", this)
                    }
                }), Object.defineProperty(n.default.Solo.prototype, "muted", {
                    get: function () {
                        return 0 === this.input.gain.value
                    }
                }), n.default.Solo.prototype._addSolo = function () {
                    n.default.isArray(this.context._currentSolo) || (this.context._currentSolo = []), this._isSoloed() || this.context._currentSolo.push(this)
                }, n.default.Solo.prototype._removeSolo = function () {
                    if (this._isSoloed()) {
                        var t = this.context._currentSolo.indexOf(this);
                        this.context._currentSolo.splice(t, 1)
                    }
                }, n.default.Solo.prototype._isSoloed = function () {
                    return !!n.default.isArray(this.context._currentSolo) && 0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this)
                }, n.default.Solo.prototype._noSolos = function () {
                    return !n.default.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length
                }, n.default.Solo.prototype._soloed = function () {
                    this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
                }, n.default.Solo.prototype.dispose = function () {
                    return this.context.off("solo", this._soloBind), this._removeSolo(), this._soloBind = null, n.default.AudioNode.prototype.dispose.call(this), this
                }, e.default = n.default.Solo
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), n.default.EqualPowerGain = function () {
                    n.default.SignalBase.call(this), this._eqPower = this.input = this.output = new n.default.WaveShaper(function (t) {
                        return Math.abs(t) < .001 ? 0 : n.default.equalPowerScale(t)
                    }.bind(this), 4096)
                }, n.default.extend(n.default.EqualPowerGain, n.default.SignalBase), n.default.EqualPowerGain.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this
                }, e.default = n.default.EqualPowerGain
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(5), i(2), n.default.Negate = function () {
                    n.default.SignalBase.call(this), this._multiply = this.input = this.output = new n.default.Multiply(-1)
                }, n.default.extend(n.default.Negate, n.default.SignalBase), n.default.Negate.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this
                }, e.default = n.default.Negate
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(48), i(27), i(1), n.default.PanVol = function () {
                    var t = n.default.defaults(arguments, ["pan", "volume"], n.default.PanVol);
                    n.default.AudioNode.call(this), this._panner = this.input = new n.default.Panner(t.pan), this.pan = this._panner.pan, this._volume = this.output = new n.default.Volume(t.volume), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t.mute, this._readOnly(["pan", "volume"])
                }, n.default.extend(n.default.PanVol, n.default.AudioNode), n.default.PanVol.defaults = {
                    pan: 0,
                    volume: 0,
                    mute: !1
                }, Object.defineProperty(n.default.PanVol.prototype, "mute", {
                    get: function () {
                        return this._volume.mute
                    }, set: function (t) {
                        this._volume.mute = t
                    }
                }), n.default.PanVol.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panner.dispose(), this._panner = null, this.pan = null, this._volume.dispose(), this._volume = null, this.volume = null, this
                }, e.default = n.default.PanVol
            }, function (t, e, i) {
                "use strict";
                var n = i(0);
                if (n.default.supported) {
                    !n.default.global.hasOwnProperty("OfflineAudioContext") && n.default.global.hasOwnProperty("webkitOfflineAudioContext") && (n.default.global.OfflineAudioContext = n.default.global.webkitOfflineAudioContext);
                    var o = new OfflineAudioContext(1, 1, 44100).startRendering();
                    o && n.default.isFunction(o.then) || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering, OfflineAudioContext.prototype.startRendering = function () {
                        return new Promise(function (t) {
                            this.oncomplete = function (e) {
                                t(e.renderedBuffer)
                            }, this._native_startRendering()
                        }.bind(this))
                    })
                }
            }, function (t, e, i) {
                "use strict";
                e.a = "13.8.34"
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(46), n.default.Midi = function (t, e) {
                    if (!(this instanceof n.default.Midi)) return new n.default.Midi(t, e);
                    n.default.Frequency.call(this, t, e)
                }, n.default.extend(n.default.Midi, n.default.Frequency), n.default.Midi.prototype._defaultUnits = "midi", n.default.Midi.prototype._frequencyToUnits = function (t) {
                    return n.default.Frequency.ftom(n.default.Frequency.prototype._frequencyToUnits.call(this, t))
                }, n.default.Midi.prototype._ticksToUnits = function (t) {
                    return n.default.Frequency.ftom(n.default.Frequency.prototype._ticksToUnits.call(this, t))
                }, n.default.Midi.prototype._beatsToUnits = function (t) {
                    return n.default.Frequency.ftom(n.default.Frequency.prototype._beatsToUnits.call(this, t))
                }, n.default.Midi.prototype._secondsToUnits = function (t) {
                    return n.default.Frequency.ftom(n.default.Frequency.prototype._secondsToUnits.call(this, t))
                }, n.default.Midi.prototype.toMidi = function () {
                    return this.valueOf()
                }, n.default.Midi.prototype.toFrequency = function () {
                    return n.default.Frequency.mtof(this.toMidi())
                }, n.default.Midi.prototype.transpose = function (t) {
                    return new this.constructor(this.toMidi() + t)
                }, e.default = n.default.Midi
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(27), i(1), n.default.UserMedia = function () {
                    var t = n.default.defaults(arguments, ["volume"], n.default.UserMedia);
                    n.default.AudioNode.call(this), this._mediaStream = null, this._stream = null, this._device = null, this._volume = this.output = new n.default.Volume(t.volume), this.volume = this._volume.volume, this._readOnly("volume"), this.mute = t.mute
                }, n.default.extend(n.default.UserMedia, n.default.AudioNode), n.default.UserMedia.defaults = {
                    volume: 0,
                    mute: !1
                }, n.default.UserMedia.prototype.open = function (t) {
                    return this.state === n.default.State.Started && this.close(), n.default.UserMedia.enumerateDevices().then(function (e) {
                        var i;
                        if (n.default.isNumber(t)) i = e[t]; else if (!(i = e.find(function (e) {
                            return e.label === t || e.deviceId === t
                        })) && e.length > 0) i = e[0]; else if (!i && n.default.isDefined(t)) throw new Error("Tone.UserMedia: no matching device: " + t);
                        this._device = i;
                        var o = {
                            audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                            }
                        };
                        return i && (o.audio.deviceId = i.deviceId), navigator.mediaDevices.getUserMedia(o).then(function (t) {
                            return this._stream || (this._stream = t, this._mediaStream = this.context.createMediaStreamSource(t), n.default.connect(this._mediaStream, this.output)), this
                        }.bind(this))
                    }.bind(this))
                }, n.default.UserMedia.prototype.close = function () {
                    return this._stream && (this._stream.getAudioTracks().forEach(function (t) {
                        t.stop()
                    }), this._stream = null, this._mediaStream.disconnect(), this._mediaStream = null), this._device = null, this
                }, n.default.UserMedia.enumerateDevices = function () {
                    return navigator.mediaDevices.enumerateDevices().then(function (t) {
                        return t.filter(function (t) {
                            return "audioinput" === t.kind
                        })
                    })
                }, Object.defineProperty(n.default.UserMedia.prototype, "state", {
                    get: function () {
                        return this._stream && this._stream.active ? n.default.State.Started : n.default.State.Stopped
                    }
                }), Object.defineProperty(n.default.UserMedia.prototype, "deviceId", {
                    get: function () {
                        return this._device ? this._device.deviceId : null
                    }
                }), Object.defineProperty(n.default.UserMedia.prototype, "groupId", {
                    get: function () {
                        return this._device ? this._device.groupId : null
                    }
                }), Object.defineProperty(n.default.UserMedia.prototype, "label", {
                    get: function () {
                        return this._device ? this._device.label : null
                    }
                }), Object.defineProperty(n.default.UserMedia.prototype, "mute", {
                    get: function () {
                        return this._volume.mute
                    }, set: function (t) {
                        this._volume.mute = t
                    }
                }), n.default.UserMedia.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this.close(), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this
                }, Object.defineProperty(n.default.UserMedia, "supported", {
                    get: function () {
                        return n.default.isDefined(navigator.mediaDevices) && n.default.isFunction(navigator.mediaDevices.getUserMedia)
                    }
                }), e.default = n.default.UserMedia
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(65), i(27), i(1), n.default.Players = function (t) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift();
                    var i = n.default.defaults(e, ["onload"], n.default.Players);
                    for (var o in n.default.AudioNode.call(this, i), this._volume = this.output = new n.default.Volume(i.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = i.mute, this._players = {}, this._loadingCount = 0, this._fadeIn = i.fadeIn, this._fadeOut = i.fadeOut, t) this._loadingCount++, this.add(o, t[o], this._bufferLoaded.bind(this, i.onload))
                }, n.default.extend(n.default.Players, n.default.AudioNode), n.default.Players.defaults = {
                    volume: 0,
                    mute: !1,
                    onload: n.default.noOp,
                    fadeIn: 0,
                    fadeOut: 0
                }, n.default.Players.prototype._bufferLoaded = function (t) {
                    0 === --this._loadingCount && t && t(this)
                }, Object.defineProperty(n.default.Players.prototype, "mute", {
                    get: function () {
                        return this._volume.mute
                    }, set: function (t) {
                        this._volume.mute = t
                    }
                }), Object.defineProperty(n.default.Players.prototype, "fadeIn", {
                    get: function () {
                        return this._fadeIn
                    }, set: function (t) {
                        this._fadeIn = t, this._forEach(function (e) {
                            e.fadeIn = t
                        })
                    }
                }), Object.defineProperty(n.default.Players.prototype, "fadeOut", {
                    get: function () {
                        return this._fadeOut
                    }, set: function (t) {
                        this._fadeOut = t, this._forEach(function (e) {
                            e.fadeOut = t
                        })
                    }
                }), Object.defineProperty(n.default.Players.prototype, "state", {
                    get: function () {
                        var t = !1;
                        return this._forEach(function (e) {
                            t = t || e.state === n.default.State.Started
                        }), t ? n.default.State.Started : n.default.State.Stopped
                    }
                }), n.default.Players.prototype.has = function (t) {
                    return this._players.hasOwnProperty(t)
                }, n.default.Players.prototype.get = function (t) {
                    if (this.has(t)) return this._players[t];
                    throw new Error("Tone.Players: no player named " + t)
                }, n.default.Players.prototype._forEach = function (t) {
                    for (var e in this._players) t(this._players[e], e);
                    return this
                }, Object.defineProperty(n.default.Players.prototype, "loaded", {
                    get: function () {
                        var t = !0;
                        return this._forEach(function (e) {
                            t = t && e.loaded
                        }), t
                    }
                }), n.default.Players.prototype.add = function (t, e, i) {
                    return this._players[t] = new n.default.Player(e, i).connect(this.output), this._players[t].fadeIn = this._fadeIn, this._players[t].fadeOut = this._fadeOut, this
                }, n.default.Players.prototype.stopAll = function (t) {
                    this._forEach(function (e) {
                        e.stop(t)
                    })
                }, n.default.Players.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable("volume"), this.volume = null, this.output = null, this._forEach(function (t) {
                        t.dispose()
                    }), this._players = null, this
                }, e.default = n.default.Players
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(6), i(11), i(32), n.default.GrainPlayer = function () {
                    var t = n.default.defaults(arguments, ["url", "onload"], n.default.GrainPlayer);
                    n.default.Source.call(this, t), this.buffer = new n.default.Buffer(t.url, t.onload.bind(void 0, this)), this._clock = new n.default.Clock(this._tick.bind(this), t.grainSize), this._loopStart = 0, this._loopEnd = 0, this._activeSources = [], this._playbackRate = t.playbackRate, this._grainSize = t.grainSize, this._overlap = t.overlap, this.detune = t.detune, this.overlap = t.overlap, this.loop = t.loop, this.playbackRate = t.playbackRate, this.grainSize = t.grainSize, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this.reverse = t.reverse, this._clock.on("stop", this._onstop.bind(this))
                }, n.default.extend(n.default.GrainPlayer, n.default.Source), n.default.GrainPlayer.defaults = {
                    onload: n.default.noOp,
                    overlap: .1,
                    grainSize: .2,
                    playbackRate: 1,
                    detune: 0,
                    loop: !1,
                    loopStart: 0,
                    loopEnd: 0,
                    reverse: !1
                }, n.default.GrainPlayer.prototype._start = function (t, e, i) {
                    e = n.default.defaultArg(e, 0), e = this.toSeconds(e), t = this.toSeconds(t), this._offset = e, this._clock.start(t), i && this.stop(t + this.toSeconds(i))
                }, n.default.GrainPlayer.prototype._stop = function (t) {
                    this._clock.stop(t)
                }, n.default.GrainPlayer.prototype._onstop = function (t) {
                    this._activeSources.forEach(function (e) {
                        e.fadeOut = 0, e.stop(t)
                    })
                }, n.default.GrainPlayer.prototype._tick = function (t) {
                    if (!this.loop && this._offset > this.buffer.duration) this.stop(t); else {
                        var e = this._offset < this._overlap ? 0 : this._overlap, i = new n.default.BufferSource({
                            buffer: this.buffer,
                            fadeIn: e,
                            fadeOut: this._overlap,
                            loop: this.loop,
                            loopStart: this._loopStart,
                            loopEnd: this._loopEnd,
                            playbackRate: n.default.intervalToFrequencyRatio(this.detune / 100)
                        }).connect(this.output);
                        i.start(t, this._offset), this._offset += this.grainSize, i.stop(t + this.grainSize / this.playbackRate), this._activeSources.push(i), i.onended = function () {
                            var t = this._activeSources.indexOf(i);
                            -1 !== t && this._activeSources.splice(t, 1)
                        }.bind(this)
                    }
                }, Object.defineProperty(n.default.GrainPlayer.prototype, "playbackRate", {
                    get: function () {
                        return this._playbackRate
                    }, set: function (t) {
                        this._playbackRate = t, this.grainSize = this._grainSize
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "loopStart", {
                    get: function () {
                        return this._loopStart
                    }, set: function (t) {
                        this._loopStart = this.toSeconds(t)
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "loopEnd", {
                    get: function () {
                        return this._loopEnd
                    }, set: function (t) {
                        this._loopEnd = this.toSeconds(t)
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "reverse", {
                    get: function () {
                        return this.buffer.reverse
                    }, set: function (t) {
                        this.buffer.reverse = t
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "grainSize", {
                    get: function () {
                        return this._grainSize
                    }, set: function (t) {
                        this._grainSize = this.toSeconds(t), this._clock.frequency.value = this._playbackRate / this._grainSize
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "overlap", {
                    get: function () {
                        return this._overlap
                    }, set: function (t) {
                        this._overlap = this.toSeconds(t)
                    }
                }), Object.defineProperty(n.default.GrainPlayer.prototype, "loaded", {
                    get: function () {
                        return this.buffer.loaded
                    }
                }), n.default.GrainPlayer.prototype.dispose = function () {
                    return n.default.Source.prototype.dispose.call(this), this.buffer.dispose(), this.buffer = null, this._clock.dispose(), this._clock = null, this._activeSources.forEach(function (t) {
                        t.dispose()
                    }), this._activeSources = null, this
                }, e.default = n.default.GrainPlayer
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(16), i(2), i(45), n.default.TransportTimelineSignal = function () {
                    n.default.Signal.apply(this, arguments), this.output = this._outputSig = new n.default.Signal(this._initialValue), this._lastVal = this.value, this._synced = n.default.Transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._bindAnchorValue = this._anchorValue.bind(this), n.default.Transport.on("start stop pause", this._bindAnchorValue), this._events.memory = 1 / 0
                }, n.default.extend(n.default.TransportTimelineSignal, n.default.Signal), n.default.TransportTimelineSignal.prototype._onTick = function (t) {
                    var e = this.getValueAtTime(n.default.Transport.seconds);
                    this._lastVal !== e && (this._lastVal = e, this._outputSig.linearRampToValueAtTime(e, t))
                }, n.default.TransportTimelineSignal.prototype._anchorValue = function (t) {
                    var e = this.getValueAtTime(n.default.Transport.seconds);
                    return this._lastVal = e, this._outputSig.cancelScheduledValues(t), this._outputSig.setValueAtTime(e, t), this
                }, n.default.TransportTimelineSignal.prototype.getValueAtTime = function (t) {
                    return t = n.default.TransportTime(t), n.default.Signal.prototype.getValueAtTime.call(this, t)
                }, n.default.TransportTimelineSignal.prototype.setValueAtTime = function (t, e) {
                    return e = n.default.TransportTime(e), n.default.Signal.prototype.setValueAtTime.call(this, t, e), this
                }, n.default.TransportTimelineSignal.prototype.linearRampToValueAtTime = function (t, e) {
                    return e = n.default.TransportTime(e), n.default.Signal.prototype.linearRampToValueAtTime.call(this, t, e), this
                }, n.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function (t, e) {
                    return e = n.default.TransportTime(e), n.default.Signal.prototype.exponentialRampToValueAtTime.call(this, t, e), this
                }, n.default.TransportTimelineSignal.prototype.setTargetAtTime = function (t, e, i) {
                    return e = n.default.TransportTime(e), n.default.Signal.prototype.setTargetAtTime.call(this, t, e, i), this
                }, n.default.TransportTimelineSignal.prototype.cancelScheduledValues = function (t) {
                    return t = n.default.TransportTime(t), n.default.Signal.prototype.cancelScheduledValues.call(this, t), this
                }, n.default.TransportTimelineSignal.prototype.setValueCurveAtTime = function (t, e, i, o) {
                    return e = n.default.TransportTime(e), i = n.default.TransportTime(i), n.default.Signal.prototype.setValueCurveAtTime.call(this, t, e, i, o), this
                }, n.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function (t) {
                    return n.default.Signal.prototype.cancelAndHoldAtTime.call(this, n.default.TransportTime(t))
                }, n.default.TransportTimelineSignal.prototype.dispose = function () {
                    n.default.Transport.clear(this._synced), n.default.Transport.off("start stop pause", this._syncedCallback), this._events.cancel(0), n.default.Signal.prototype.dispose.call(this), this._outputSig.dispose(), this._outputSig = null
                }, e.default = n.default.TransportTimelineSignal
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(29), i(5), n.default.Normalize = function (t, e) {
                    n.default.SignalBase.call(this), this._inputMin = n.default.defaultArg(t, 0), this._inputMax = n.default.defaultArg(e, 1), this._sub = this.input = new n.default.Add(0), this._div = this.output = new n.default.Multiply(1), this._sub.connect(this._div), this._setRange()
                }, n.default.extend(n.default.Normalize, n.default.SignalBase), Object.defineProperty(n.default.Normalize.prototype, "min", {
                    get: function () {
                        return this._inputMin
                    }, set: function (t) {
                        this._inputMin = t, this._setRange()
                    }
                }), Object.defineProperty(n.default.Normalize.prototype, "max", {
                    get: function () {
                        return this._inputMax
                    }, set: function (t) {
                        this._inputMax = t, this._setRange()
                    }
                }), n.default.Normalize.prototype._setRange = function () {
                    this._sub.value = -this._inputMin, this._div.value = 1 / (this._inputMax - this._inputMin)
                }, n.default.Normalize.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._sub.dispose(), this._sub = null, this._div.dispose(), this._div = null, this
                }, e.default = n.default.Normalize
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(7), i(2), n.default.GainToAudio = function () {
                    n.default.SignalBase.call(this), this._norm = this.input = this.output = new n.default.WaveShaper(function (t) {
                        return 2 * Math.abs(t) - 1
                    })
                }, n.default.extend(n.default.GainToAudio, n.default.SignalBase), n.default.GainToAudio.prototype.dispose = function () {
                    return n.default.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
                }, e.default = n.default.GainToAudio
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(21), i(78), i(32), n.default.Sampler = function (t) {
                    var e = Array.prototype.slice.call(arguments);
                    e.shift();
                    var i = n.default.defaults(e, ["onload", "baseUrl"], n.default.Sampler);
                    n.default.Instrument.call(this, i);
                    var o = {};
                    for (var a in t) if (n.default.isNote(a)) o[n.default.Frequency(a).toMidi()] = t[a]; else {
                        if (isNaN(parseFloat(a))) throw new Error("Tone.Sampler: url keys must be the note's pitch");
                        o[a] = t[a]
                    }
                    this._buffers = new n.default.Buffers(o, i.onload, i.baseUrl), this._activeSources = {}, this.attack = i.attack, this.release = i.release, this.curve = i.curve
                }, n.default.extend(n.default.Sampler, n.default.Instrument), n.default.Sampler.defaults = {
                    attack: 0,
                    release: .1,
                    onload: n.default.noOp,
                    baseUrl: "",
                    curve: "exponential"
                }, n.default.Sampler.prototype._findClosest = function (t) {
                    for (var e = 0; e < 96;) {
                        if (this._buffers.has(t + e)) return -e;
                        if (this._buffers.has(t - e)) return e;
                        e++
                    }
                    throw new Error("No available buffers for note: " + t)
                }, n.default.Sampler.prototype.triggerAttack = function (t, e, i) {
                    this.log("triggerAttack", t, e, i), Array.isArray(t) || (t = [t]);
                    for (var o = 0; o < t.length; o++) {
                        var a = n.default.Frequency(t[o]).toMidi(), r = this._findClosest(a), s = a - r,
                            l = this._buffers.get(s), u = n.default.intervalToFrequencyRatio(r),
                            c = new n.default.BufferSource({
                                buffer: l,
                                playbackRate: u,
                                fadeIn: this.attack,
                                fadeOut: this.release,
                                curve: this.curve
                            }).connect(this.output);
                        c.start(e, 0, l.duration / u, i), n.default.isArray(this._activeSources[a]) || (this._activeSources[a] = []), this._activeSources[a].push(c), c.onended = function () {
                            if (this._activeSources && this._activeSources[a]) {
                                var t = this._activeSources[a].indexOf(c);
                                -1 !== t && this._activeSources[a].splice(t, 1)
                            }
                        }.bind(this)
                    }
                    return this
                }, n.default.Sampler.prototype.triggerRelease = function (t, e) {
                    this.log("triggerRelease", t, e), Array.isArray(t) || (t = [t]);
                    for (var i = 0; i < t.length; i++) {
                        var o = n.default.Frequency(t[i]).toMidi();
                        this._activeSources[o] && this._activeSources[o].length && (e = this.toSeconds(e), this._activeSources[o].forEach(function (t) {
                            t.stop(e)
                        }), this._activeSources[o] = [])
                    }
                    return this
                }, n.default.Sampler.prototype.releaseAll = function (t) {
                    for (var e in t = this.toSeconds(t), this._activeSources) for (var i = this._activeSources[e]; i.length;) i.shift().stop(t);
                    return this
                }, n.default.Sampler.prototype.sync = function () {
                    return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this
                }, n.default.Sampler.prototype.triggerAttackRelease = function (t, e, i, o) {
                    if (i = this.toSeconds(i), this.triggerAttack(t, i, o), n.default.isArray(e) && n.default.isArray(t)) for (var a = 0; a < t.length; a++) {
                        var r = e[Math.min(a, e.length - 1)];
                        this.triggerRelease(t[a], i + this.toSeconds(r))
                    } else this.triggerRelease(t, i + this.toSeconds(e));
                    return this
                }, n.default.Sampler.prototype.add = function (t, e, i) {
                    if (n.default.isNote(t)) {
                        var o = n.default.Frequency(t).toMidi();
                        this._buffers.add(o, e, i)
                    } else {
                        if (isNaN(parseFloat(t))) throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + t);
                        this._buffers.add(t, e, i)
                    }
                }, Object.defineProperty(n.default.Sampler.prototype, "loaded", {
                    get: function () {
                        return this._buffers.loaded
                    }
                }), n.default.Sampler.prototype.dispose = function () {
                    for (var t in n.default.Instrument.prototype.dispose.call(this), this._buffers.dispose(), this._buffers = null, this._activeSources) this._activeSources[t].forEach(function (t) {
                        t.dispose()
                    });
                    return this._activeSources = null, this
                }, e.default = n.default.Sampler
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(38), i(6), n.default.PolySynth = function () {
                    var t = n.default.defaults(arguments, ["polyphony", "voice"], n.default.PolySynth);
                    n.default.Instrument.call(this, t), (t = n.default.defaultArg(t, n.default.Instrument.defaults)).polyphony = Math.min(n.default.PolySynth.MAX_POLYPHONY, t.polyphony), this.voices = new Array(t.polyphony), this.assert(t.polyphony > 0, "polyphony must be greater than 0"), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this._readOnly("detune");
                    for (var e = 0; e < t.polyphony; e++) {
                        var i = new t.voice(arguments[2], arguments[3]);
                        if (!(i instanceof n.default.Monophonic)) throw new Error("Synth constructor must be instance of Tone.Monophonic");
                        this.voices[e] = i, i.index = e, i.connect(this.output), i.hasOwnProperty("detune") && this.detune.connect(i.detune)
                    }
                }, n.default.extend(n.default.PolySynth, n.default.Instrument), n.default.PolySynth.defaults = {
                    polyphony: 4,
                    volume: 0,
                    detune: 0,
                    voice: n.default.Synth
                }, n.default.PolySynth.prototype._getClosestVoice = function (t, e) {
                    return this.voices.find(function (i) {
                        if (Math.abs(i.frequency.getValueAtTime(t) - n.default.Frequency(e)) < 1e-4 && i.getLevelAtTime(t) > 1e-5) return i
                    }) || this.voices.slice().sort(function (e, i) {
                        var n = e.getLevelAtTime(t + this.blockTime), o = i.getLevelAtTime(t + this.blockTime);
                        return n < 1e-5 && (n = 0), o < 1e-5 && (o = 0), n - o
                    }.bind(this))[0]
                }, n.default.PolySynth.prototype.triggerAttack = function (t, e, i) {
                    return Array.isArray(t) || (t = [t]), e = this.toSeconds(e), t.forEach(function (t) {
                        var n = this._getClosestVoice(e, t);
                        n.triggerAttack(t, e, i), this.log("triggerAttack", n.index, t)
                    }.bind(this)), this
                }, n.default.PolySynth.prototype.triggerRelease = function (t, e) {
                    return Array.isArray(t) || (t = [t]), e = this.toSeconds(e), t.forEach(function (t) {
                        var i = this._getClosestVoice(e, t);
                        this.log("triggerRelease", i.index, t), i.triggerRelease(e)
                    }.bind(this)), this
                }, n.default.PolySynth.prototype.triggerAttackRelease = function (t, e, i, o) {
                    if (i = this.toSeconds(i), this.triggerAttack(t, i, o), n.default.isArray(e) && n.default.isArray(t)) for (var a = 0; a < t.length; a++) {
                        var r = e[Math.min(a, e.length - 1)];
                        this.triggerRelease(t[a], i + this.toSeconds(r))
                    } else this.triggerRelease(t, i + this.toSeconds(e));
                    return this
                }, n.default.PolySynth.prototype.sync = function () {
                    return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this
                }, n.default.PolySynth.prototype.set = function (t, e, i) {
                    for (var n = 0; n < this.voices.length; n++) this.voices[n].set(t, e, i);
                    return this
                }, n.default.PolySynth.prototype.get = function (t) {
                    return this.voices[0].get(t)
                }, n.default.PolySynth.prototype.releaseAll = function (t) {
                    return t = this.toSeconds(t), this.voices.forEach(function (e) {
                        e.triggerRelease(t)
                    }), this
                }, n.default.PolySynth.prototype.dispose = function () {
                    return n.default.Instrument.prototype.dispose.call(this), this.voices.forEach(function (t) {
                        t.dispose()
                    }), this._writable("detune"), this.detune.dispose(), this.detune = null, this.voices = null, this
                }, n.default.PolySynth.MAX_POLYPHONY = 20, e.default = n.default.PolySynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(21), i(39), i(54), n.default.PluckSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.PluckSynth.defaults), n.default.Instrument.call(this, t), this._noise = new n.default.Noise("pink"), this.attackNoise = t.attackNoise, this._lfcf = new n.default.LowpassCombFilter({
                        resonance: t.resonance,
                        dampening: t.dampening
                    }), this.resonance = this._lfcf.resonance, this.dampening = this._lfcf.dampening, this._noise.connect(this._lfcf), this._lfcf.connect(this.output), this._readOnly(["resonance", "dampening"])
                }, n.default.extend(n.default.PluckSynth, n.default.Instrument), n.default.PluckSynth.defaults = {
                    attackNoise: 1,
                    dampening: 4e3,
                    resonance: .7
                }, n.default.PluckSynth.prototype.triggerAttack = function (t, e) {
                    t = this.toFrequency(t), e = this.toSeconds(e);
                    var i = 1 / t;
                    return this._lfcf.delayTime.setValueAtTime(i, e), this._noise.start(e), this._noise.stop(e + i * this.attackNoise), this
                }, n.default.PluckSynth.prototype.dispose = function () {
                    return n.default.Instrument.prototype.dispose.call(this), this._noise.dispose(), this._lfcf.dispose(), this._noise = null, this._lfcf = null, this._writable(["resonance", "dampening"]), this.dampening = null, this.resonance = null, this
                }, e.default = n.default.PluckSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(31), i(41), i(39), i(2), i(9), i(21), n.default.NoiseSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.NoiseSynth.defaults), n.default.Instrument.call(this, t), this.noise = new n.default.Noise(t.noise), this.envelope = new n.default.AmplitudeEnvelope(t.envelope), this.noise.chain(this.envelope, this.output), this._readOnly(["noise", "envelope"])
                }, n.default.extend(n.default.NoiseSynth, n.default.Instrument), n.default.NoiseSynth.defaults = {
                    noise: {type: "white"},
                    envelope: {attack: .005, decay: .1, sustain: 0}
                }, n.default.NoiseSynth.prototype.triggerAttack = function (t, e) {
                    return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.noise.start(t), 0 === this.envelope.sustain && this.noise.stop(t + this.envelope.attack + this.envelope.decay), this
                }, n.default.NoiseSynth.prototype.triggerRelease = function (t) {
                    return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.noise.stop(t + this.envelope.release), this
                }, n.default.NoiseSynth.prototype.sync = function () {
                    return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this
                }, n.default.NoiseSynth.prototype.triggerAttackRelease = function (t, e, i) {
                    return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, i), this.triggerRelease(e + t), this
                }, n.default.NoiseSynth.prototype.dispose = function () {
                    return n.default.Instrument.prototype.dispose.call(this), this._writable(["noise", "envelope"]), this.noise.dispose(), this.noise = null, this.envelope.dispose(), this.envelope = null, this
                }, e.default = n.default.NoiseSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0),
                    o = (i(21), i(49), i(9), i(41), i(31), i(3), i(26), i(5), [1, 1.483, 1.932, 2.546, 2.63, 3.897]);
                n.default.MetalSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.MetalSynth.defaults), n.default.Instrument.call(this, t), this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this._oscillators = [], this._freqMultipliers = [], this._amplitue = new n.default.Gain(0).connect(this.output), this._highpass = new n.default.Filter({
                        type: "highpass",
                        Q: -3.0102999566398125
                    }).connect(this._amplitue), this._octaves = t.octaves, this._filterFreqScaler = new n.default.Scale(t.resonance, 7e3), this.envelope = new n.default.Envelope({
                        attack: t.envelope.attack,
                        attackCurve: "linear",
                        decay: t.envelope.decay,
                        sustain: 0,
                        release: t.envelope.release
                    }).chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitue.gain);
                    for (var e = 0; e < o.length; e++) {
                        var i = new n.default.FMOscillator({
                            type: "square",
                            modulationType: "square",
                            harmonicity: t.harmonicity,
                            modulationIndex: t.modulationIndex
                        });
                        i.connect(this._highpass), this._oscillators[e] = i;
                        var a = new n.default.Multiply(o[e]);
                        this._freqMultipliers[e] = a, this.frequency.chain(a, i.frequency)
                    }
                    this.octaves = t.octaves
                }, n.default.extend(n.default.MetalSynth, n.default.Instrument), n.default.MetalSynth.defaults = {
                    frequency: 200,
                    envelope: {attack: .001, decay: 1.4, release: .2},
                    harmonicity: 5.1,
                    modulationIndex: 32,
                    resonance: 4e3,
                    octaves: 1.5
                }, n.default.MetalSynth.prototype.triggerAttack = function (t, e) {
                    return t = this.toSeconds(t), e = n.default.defaultArg(e, 1), this.envelope.triggerAttack(t, e), this._oscillators.forEach(function (e) {
                        e.start(t)
                    }), 0 === this.envelope.sustain && this._oscillators.forEach(function (e) {
                        e.stop(t + this.envelope.attack + this.envelope.decay)
                    }.bind(this)), this
                }, n.default.MetalSynth.prototype.triggerRelease = function (t) {
                    return t = this.toSeconds(t), this.envelope.triggerRelease(t), this._oscillators.forEach(function (e) {
                        e.stop(t + this.envelope.release)
                    }.bind(this)), this
                }, n.default.MetalSynth.prototype.sync = function () {
                    return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this
                }, n.default.MetalSynth.prototype.triggerAttackRelease = function (t, e, i) {
                    return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, i), this.triggerRelease(e + t), this
                }, Object.defineProperty(n.default.MetalSynth.prototype, "modulationIndex", {
                    get: function () {
                        return this._oscillators[0].modulationIndex.value
                    }, set: function (t) {
                        for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].modulationIndex.value = t
                    }
                }), Object.defineProperty(n.default.MetalSynth.prototype, "harmonicity", {
                    get: function () {
                        return this._oscillators[0].harmonicity.value
                    }, set: function (t) {
                        for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].harmonicity.value = t
                    }
                }), Object.defineProperty(n.default.MetalSynth.prototype, "resonance", {
                    get: function () {
                        return this._filterFreqScaler.min
                    }, set: function (t) {
                        this._filterFreqScaler.min = t, this.octaves = this._octaves
                    }
                }), Object.defineProperty(n.default.MetalSynth.prototype, "octaves", {
                    get: function () {
                        return this._octaves
                    }, set: function (t) {
                        this._octaves = t, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t)
                    }
                }), n.default.MetalSynth.prototype.dispose = function () {
                    n.default.Instrument.prototype.dispose.call(this);
                    for (var t = 0; t < this._oscillators.length; t++) this._oscillators[t].dispose(), this._freqMultipliers[t].dispose();
                    this._oscillators = null, this._freqMultipliers = null, this.frequency.dispose(), this.frequency = null, this._filterFreqScaler.dispose(), this._filterFreqScaler = null, this._amplitue.dispose(), this._amplitue = null, this.envelope.dispose(), this.envelope = null, this._highpass.dispose(), this._highpass = null
                }, e.default = n.default.MetalSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(37), i(21), i(31), n.default.MembraneSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.MembraneSynth.defaults), n.default.Instrument.call(this, t), this.oscillator = new n.default.OmniOscillator(t.oscillator), this.envelope = new n.default.AmplitudeEnvelope(t.envelope), this.octaves = t.octaves, this.pitchDecay = t.pitchDecay, this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "envelope"])
                }, n.default.extend(n.default.MembraneSynth, n.default.Instrument), n.default.MembraneSynth.defaults = {
                    pitchDecay: .05,
                    octaves: 10,
                    oscillator: {type: "sine"},
                    envelope: {attack: .001, decay: .4, sustain: .01, release: 1.4, attackCurve: "exponential"}
                }, n.default.MembraneSynth.prototype.triggerAttack = function (t, e, i) {
                    e = this.toSeconds(e);
                    var n = (t = this.toFrequency(t)) * this.octaves;
                    return this.oscillator.frequency.setValueAtTime(n, e), this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e, i), this.oscillator.start(e), 0 === this.envelope.sustain && this.oscillator.stop(e + this.envelope.attack + this.envelope.decay), this
                }, n.default.MembraneSynth.prototype.triggerRelease = function (t) {
                    return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this
                }, n.default.MembraneSynth.prototype.dispose = function () {
                    return n.default.Instrument.prototype.dispose.call(this), this._writable(["oscillator", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this
                }, e.default = n.default.MembraneSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(38), i(2), i(5), i(25), n.default.FMSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.FMSynth.defaults), n.default.Monophonic.call(this, t), this._carrier = new n.default.Synth(t.carrier), this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope.set(t.envelope), this._modulator = new n.default.Synth(t.modulator), this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(t.modulation), this.modulationEnvelope = this._modulator.envelope.set(t.modulationEnvelope), this.frequency = new n.default.Signal(440, n.default.Type.Frequency), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this.harmonicity = new n.default.Multiply(t.harmonicity), this.harmonicity.units = n.default.Type.Positive, this.modulationIndex = new n.default.Multiply(t.modulationIndex), this.modulationIndex.units = n.default.Type.Positive, this._modulationNode = new n.default.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
                }, n.default.extend(n.default.FMSynth, n.default.Monophonic), n.default.FMSynth.defaults = {
                    harmonicity: 3,
                    modulationIndex: 10,
                    detune: 0,
                    oscillator: {type: "sine"},
                    envelope: {attack: .01, decay: .01, sustain: 1, release: .5},
                    modulation: {type: "square"},
                    modulationEnvelope: {attack: .5, decay: 0, sustain: 1, release: .5}
                }, n.default.FMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                    return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this
                }, n.default.FMSynth.prototype._triggerEnvelopeRelease = function (t) {
                    return t = this.toSeconds(t), this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this
                }, n.default.FMSynth.prototype.dispose = function () {
                    return n.default.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this
                }, e.default = n.default.FMSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(66), i(12), i(2), i(5), i(25), i(14), n.default.DuoSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.DuoSynth.defaults), n.default.Monophonic.call(this, t), this.voice0 = new n.default.MonoSynth(t.voice0), this.voice0.volume.value = -10, this.voice1 = new n.default.MonoSynth(t.voice1), this.voice1.volume.value = -10, this._vibrato = new n.default.LFO(t.vibratoRate, -50, 50), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new n.default.Gain(t.vibratoAmount, n.default.Type.Positive), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new n.default.Signal(440, n.default.Type.Frequency), this.harmonicity = new n.default.Multiply(t.harmonicity), this.harmonicity.units = n.default.Type.Positive, this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
                }, n.default.extend(n.default.DuoSynth, n.default.Monophonic), n.default.DuoSynth.defaults = {
                    vibratoAmount: .5,
                    vibratoRate: 5,
                    harmonicity: 1.5,
                    voice0: {
                        volume: -10,
                        portamento: 0,
                        oscillator: {type: "sine"},
                        filterEnvelope: {attack: .01, decay: 0, sustain: 1, release: .5},
                        envelope: {attack: .01, decay: 0, sustain: 1, release: .5}
                    },
                    voice1: {
                        volume: -10,
                        portamento: 0,
                        oscillator: {type: "sine"},
                        filterEnvelope: {attack: .01, decay: 0, sustain: 1, release: .5},
                        envelope: {attack: .01, decay: 0, sustain: 1, release: .5}
                    }
                }, n.default.DuoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                    return t = this.toSeconds(t), this.voice0._triggerEnvelopeAttack(t, e), this.voice1._triggerEnvelopeAttack(t, e), this
                }, n.default.DuoSynth.prototype._triggerEnvelopeRelease = function (t) {
                    return this.voice0._triggerEnvelopeRelease(t), this.voice1._triggerEnvelopeRelease(t), this
                }, n.default.DuoSynth.prototype.getLevelAtTime = function (t) {
                    return (this.voice0.getLevelAtTime(t) + this.voice1.getLevelAtTime(t)) / 2
                }, n.default.DuoSynth.prototype.dispose = function () {
                    return n.default.Monophonic.prototype.dispose.call(this), this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]), this.voice0.dispose(), this.voice0 = null, this.voice1.dispose(), this.voice1 = null, this.frequency.dispose(), this.frequency = null, this._vibratoGain.dispose(), this._vibratoGain = null, this._vibrato = null, this.harmonicity.dispose(), this.harmonicity = null, this.vibratoAmount.dispose(), this.vibratoAmount = null, this.vibratoRate = null, this
                }, e.default = n.default.DuoSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(38), i(2), i(5), i(25), i(22), i(3), n.default.AMSynth = function (t) {
                    t = n.default.defaultArg(t, n.default.AMSynth.defaults), n.default.Monophonic.call(this, t), this._carrier = new n.default.Synth, this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator.set(t.oscillator), this.envelope = this._carrier.envelope.set(t.envelope), this._modulator = new n.default.Synth, this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(t.modulation), this.modulationEnvelope = this._modulator.envelope.set(t.modulationEnvelope), this.frequency = new n.default.Signal(440, n.default.Type.Frequency), this.detune = new n.default.Signal(t.detune, n.default.Type.Cents), this.harmonicity = new n.default.Multiply(t.harmonicity), this.harmonicity.units = n.default.Type.Positive, this._modulationScale = new n.default.AudioToGain, this._modulationNode = new n.default.Gain, this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
                }, n.default.extend(n.default.AMSynth, n.default.Monophonic), n.default.AMSynth.defaults = {
                    harmonicity: 3,
                    detune: 0,
                    oscillator: {type: "sine"},
                    envelope: {attack: .01, decay: .01, sustain: 1, release: .5},
                    modulation: {type: "square"},
                    modulationEnvelope: {attack: .5, decay: 0, sustain: 1, release: .5}
                }, n.default.AMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
                    return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this
                }, n.default.AMSynth.prototype._triggerEnvelopeRelease = function (t) {
                    return this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this
                }, n.default.AMSynth.prototype.dispose = function () {
                    return n.default.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this
                }, e.default = n.default.AMSynth
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(70), i(16), n.default.Sequence = function () {
                    var t = n.default.defaults(arguments, ["callback", "events", "subdivision"], n.default.Sequence),
                        e = t.events;
                    if (delete t.events, n.default.Part.call(this, t), this._subdivision = this.toTicks(t.subdivision), n.default.isUndef(t.loopEnd) && n.default.isDefined(e) && (this._loopEnd = e.length * this._subdivision), this._loop = !0, n.default.isDefined(e)) for (var i = 0; i < e.length; i++) this.add(i, e[i])
                }, n.default.extend(n.default.Sequence, n.default.Part), n.default.Sequence.defaults = {subdivision: "4n"}, Object.defineProperty(n.default.Sequence.prototype, "subdivision", {
                    get: function () {
                        return n.default.Ticks(this._subdivision).toSeconds()
                    }
                }), n.default.Sequence.prototype.at = function (t, e) {
                    return n.default.isArray(e) && this.remove(t), n.default.Part.prototype.at.call(this, this._indexTime(t), e)
                }, n.default.Sequence.prototype.add = function (t, e) {
                    if (null === e) return this;
                    if (n.default.isArray(e)) {
                        var i = Math.round(this._subdivision / e.length);
                        e = new n.default.Sequence(this._tick.bind(this), e, n.default.Ticks(i))
                    }
                    return n.default.Part.prototype.add.call(this, this._indexTime(t), e), this
                }, n.default.Sequence.prototype.remove = function (t, e) {
                    return n.default.Part.prototype.remove.call(this, this._indexTime(t), e), this
                }, n.default.Sequence.prototype._indexTime = function (t) {
                    return t instanceof n.default.TransportTime ? t : n.default.Ticks(t * this._subdivision + this.startOffset).toSeconds()
                }, n.default.Sequence.prototype.dispose = function () {
                    return n.default.Part.prototype.dispose.call(this), this
                }, e.default = n.default.Sequence
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(71), i(79), n.default.Pattern = function () {
                    var t = n.default.defaults(arguments, ["callback", "values", "pattern"], n.default.Pattern);
                    n.default.Loop.call(this, t), this._pattern = new n.default.CtrlPattern({
                        values: t.values,
                        type: t.pattern,
                        index: t.index
                    })
                }, n.default.extend(n.default.Pattern, n.default.Loop), n.default.Pattern.defaults = {
                    pattern: n.default.CtrlPattern.Type.Up,
                    callback: n.default.noOp,
                    values: []
                }, n.default.Pattern.prototype._tick = function (t) {
                    this.callback(t, this._pattern.value), this._pattern.next()
                }, Object.defineProperty(n.default.Pattern.prototype, "index", {
                    get: function () {
                        return this._pattern.index
                    }, set: function (t) {
                        this._pattern.index = t
                    }
                }), Object.defineProperty(n.default.Pattern.prototype, "values", {
                    get: function () {
                        return this._pattern.values
                    }, set: function (t) {
                        this._pattern.values = t
                    }
                }), Object.defineProperty(n.default.Pattern.prototype, "value", {
                    get: function () {
                        return this._pattern.value
                    }
                }), Object.defineProperty(n.default.Pattern.prototype, "pattern", {
                    get: function () {
                        return this._pattern.type
                    }, set: function (t) {
                        this._pattern.type = t
                    }
                }), n.default.Pattern.prototype.dispose = function () {
                    n.default.Loop.prototype.dispose.call(this), this._pattern.dispose(), this._pattern = null
                }, e.default = n.default.Pattern
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(18), i(12), n.default.Vibrato = function () {
                    var t = n.default.defaults(arguments, ["frequency", "depth"], n.default.Vibrato);
                    n.default.Effect.call(this, t), this._delayNode = new n.default.Delay(0, t.maxDelay), this._lfo = new n.default.LFO({
                        type: t.type,
                        min: 0,
                        max: t.maxDelay,
                        frequency: t.frequency,
                        phase: -90
                    }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = t.depth, this._readOnly(["frequency", "depth"]), this.effectSend.chain(this._delayNode, this.effectReturn)
                }, n.default.extend(n.default.Vibrato, n.default.Effect), n.default.Vibrato.defaults = {
                    maxDelay: .005,
                    frequency: 5,
                    depth: .1,
                    type: "sine"
                }, Object.defineProperty(n.default.Vibrato.prototype, "type", {
                    get: function () {
                        return this._lfo.type
                    }, set: function (t) {
                        this._lfo.type = t
                    }
                }), n.default.Vibrato.prototype.dispose = function () {
                    n.default.Effect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._lfo.dispose(), this._lfo = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null
                }, e.default = n.default.Vibrato
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(12), i(15), n.default.Tremolo = function () {
                    var t = n.default.defaults(arguments, ["frequency", "depth"], n.default.Tremolo);
                    n.default.StereoEffect.call(this, t), this._lfoL = new n.default.LFO({
                        phase: t.spread,
                        min: 1,
                        max: 0
                    }), this._lfoR = new n.default.LFO({
                        phase: t.spread,
                        min: 1,
                        max: 0
                    }), this._amplitudeL = new n.default.Gain, this._amplitudeR = new n.default.Gain, this.frequency = new n.default.Signal(t.frequency, n.default.Type.Frequency), this.depth = new n.default.Signal(t.depth, n.default.Type.NormalRange), this._readOnly(["frequency", "depth"]), this.effectSendL.chain(this._amplitudeL, this.effectReturnL), this.effectSendR.chain(this._amplitudeR, this.effectReturnR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.type = t.type, this.spread = t.spread
                }, n.default.extend(n.default.Tremolo, n.default.StereoEffect), n.default.Tremolo.defaults = {
                    frequency: 10,
                    type: "sine",
                    depth: .5,
                    spread: 180
                }, n.default.Tremolo.prototype.start = function (t) {
                    return this._lfoL.start(t), this._lfoR.start(t), this
                }, n.default.Tremolo.prototype.stop = function (t) {
                    return this._lfoL.stop(t), this._lfoR.stop(t), this
                }, n.default.Tremolo.prototype.sync = function (t) {
                    return this._lfoL.sync(t), this._lfoR.sync(t), n.default.Transport.syncSignal(this.frequency), this
                }, n.default.Tremolo.prototype.unsync = function () {
                    return this._lfoL.unsync(), this._lfoR.unsync(), n.default.Transport.unsyncSignal(this.frequency), this
                }, Object.defineProperty(n.default.Tremolo.prototype, "type", {
                    get: function () {
                        return this._lfoL.type
                    }, set: function (t) {
                        this._lfoL.type = t, this._lfoR.type = t
                    }
                }), Object.defineProperty(n.default.Tremolo.prototype, "spread", {
                    get: function () {
                        return this._lfoR.phase - this._lfoL.phase
                    }, set: function (t) {
                        this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90
                    }
                }), n.default.Tremolo.prototype.dispose = function () {
                    return n.default.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "depth"]), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._amplitudeL.dispose(), this._amplitudeL = null, this._amplitudeR.dispose(), this._amplitudeR = null, this.frequency = null, this.depth = null, this
                }, e.default = n.default.Tremolo
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(73), i(2), i(5), i(13), n.default.StereoWidener = function () {
                    var t = n.default.defaults(arguments, ["width"], n.default.StereoWidener);
                    n.default.MidSideEffect.call(this, t), this.width = new n.default.Signal(t.width, n.default.Type.NormalRange), this._readOnly(["width"]), this._twoTimesWidthMid = new n.default.Multiply(2), this._twoTimesWidthSide = new n.default.Multiply(2), this._midMult = new n.default.Multiply, this._twoTimesWidthMid.connect(this._midMult, 0, 1), this.midSend.chain(this._midMult, this.midReturn), this._oneMinusWidth = new n.default.Subtract, this._oneMinusWidth.connect(this._twoTimesWidthMid), n.default.connect(this.context.getConstant(1), this._oneMinusWidth, 0, 0), this.width.connect(this._oneMinusWidth, 0, 1), this._sideMult = new n.default.Multiply, this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult, 0, 1), this.sideSend.chain(this._sideMult, this.sideReturn)
                }, n.default.extend(n.default.StereoWidener, n.default.MidSideEffect), n.default.StereoWidener.defaults = {width: .5}, n.default.StereoWidener.prototype.dispose = function () {
                    return n.default.MidSideEffect.prototype.dispose.call(this), this._writable(["width"]), this.width.dispose(), this.width = null, this._midMult.dispose(), this._midMult = null, this._sideMult.dispose(), this._sideMult = null, this._twoTimesWidthMid.dispose(), this._twoTimesWidthMid = null, this._twoTimesWidthSide.dispose(), this._twoTimesWidthSide = null, this._oneMinusWidth.dispose(), this._oneMinusWidth = null, this
                }, e.default = n.default.StereoWidener
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(15), i(33), i(3), n.default.StereoFeedbackEffect = function () {
                    var t = n.default.defaults(arguments, ["feedback"], n.default.FeedbackEffect);
                    n.default.StereoEffect.call(this, t), this.feedback = new n.default.Signal(t.feedback, n.default.Type.NormalRange), this._feedbackL = new n.default.Gain, this._feedbackR = new n.default.Gain, this.effectReturnL.chain(this._feedbackL, this.effectSendL), this.effectReturnR.chain(this._feedbackR, this.effectSendR), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), this._readOnly(["feedback"])
                }, n.default.extend(n.default.StereoFeedbackEffect, n.default.StereoEffect), n.default.StereoFeedbackEffect.prototype.dispose = function () {
                    return n.default.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackL.dispose(), this._feedbackL = null, this._feedbackR.dispose(), this._feedbackR = null, this
                }, e.default = n.default.StereoFeedbackEffect
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(77), i(9), i(10), i(39), i(3), i(74), n.default.Reverb = function () {
                    var t = n.default.defaults(arguments, ["decay"], n.default.Reverb);
                    n.default.Effect.call(this, t), this._convolver = this.context.createConvolver(), this.decay = t.decay, this.preDelay = t.preDelay, this.connectEffect(this._convolver)
                }, n.default.extend(n.default.Reverb, n.default.Effect), n.default.Reverb.defaults = {
                    decay: 1.5,
                    preDelay: .01
                }, n.default.Reverb.prototype.generate = function () {
                    return n.default.Offline(function () {
                        var t = new n.default.Noise, e = new n.default.Noise, i = new n.default.Merge;
                        t.connect(i.left), e.connect(i.right);
                        var o = (new n.default.Gain).toMaster();
                        i.connect(o), t.start(0), e.start(0), o.gain.setValueAtTime(0, 0), o.gain.setValueAtTime(1, this.preDelay), o.gain.exponentialApproachValueAtTime(0, this.preDelay, this.decay + this.preDelay)
                    }.bind(this), this.decay + this.preDelay).then(function (t) {
                        return this._convolver.buffer = t.get(), this
                    }.bind(this))
                }, n.default.Reverb.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this
                }, e.default = n.default.Reverb
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(12), i(23), i(2), i(33), i(18), n.default.PitchShift = function () {
                    var t = n.default.defaults(arguments, ["pitch"], n.default.PitchShift);
                    n.default.FeedbackEffect.call(this, t), this._frequency = new n.default.Signal(0), this._delayA = new n.default.Delay(0, 1), this._lfoA = new n.default.LFO({
                        min: 0,
                        max: .1,
                        type: "sawtooth"
                    }).connect(this._delayA.delayTime), this._delayB = new n.default.Delay(0, 1), this._lfoB = new n.default.LFO({
                        min: 0,
                        max: .1,
                        type: "sawtooth",
                        phase: 180
                    }).connect(this._delayB.delayTime), this._crossFade = new n.default.CrossFade, this._crossFadeLFO = new n.default.LFO({
                        min: 0,
                        max: 1,
                        type: "triangle",
                        phase: 90
                    }).connect(this._crossFade.fade), this._feedbackDelay = new n.default.Delay(t.delayTime), this.delayTime = this._feedbackDelay.delayTime, this._readOnly("delayTime"), this._pitch = t.pitch, this._windowSize = t.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                    var e = this.now();
                    this._lfoA.start(e), this._lfoB.start(e), this._crossFadeLFO.start(e), this.windowSize = this._windowSize
                }, n.default.extend(n.default.PitchShift, n.default.FeedbackEffect), n.default.PitchShift.defaults = {
                    pitch: 0,
                    windowSize: .1,
                    delayTime: 0,
                    feedback: 0
                }, Object.defineProperty(n.default.PitchShift.prototype, "pitch", {
                    get: function () {
                        return this._pitch
                    }, set: function (t) {
                        this._pitch = t;
                        var e = 0;
                        t < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, e = n.default.intervalToFrequencyRatio(t - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, e = n.default.intervalToFrequencyRatio(t) - 1), this._frequency.value = e * (1.2 / this._windowSize)
                    }
                }), Object.defineProperty(n.default.PitchShift.prototype, "windowSize", {
                    get: function () {
                        return this._windowSize
                    }, set: function (t) {
                        this._windowSize = this.toSeconds(t), this.pitch = this._pitch
                    }
                }), n.default.PitchShift.prototype.dispose = function () {
                    return n.default.FeedbackEffect.prototype.dispose.call(this), this._frequency.dispose(), this._frequency = null, this._delayA.disconnect(), this._delayA = null, this._delayB.disconnect(), this._delayB = null, this._lfoA.dispose(), this._lfoA = null, this._lfoB.dispose(), this._lfoB = null, this._crossFade.dispose(), this._crossFade = null, this._crossFadeLFO.dispose(), this._crossFadeLFO = null, this._writable("delayTime"), this._feedbackDelay.dispose(), this._feedbackDelay = null, this.delayTime = null, this
                }, e.default = n.default.PitchShift
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(72), i(2), i(18), n.default.PingPongDelay = function () {
                    var t = n.default.defaults(arguments, ["delayTime", "feedback"], n.default.PingPongDelay);
                    n.default.StereoXFeedbackEffect.call(this, t), this._leftDelay = new n.default.Delay(0, t.maxDelayTime), this._rightDelay = new n.default.Delay(0, t.maxDelayTime), this._rightPreDelay = new n.default.Delay(0, t.maxDelayTime), this.delayTime = new n.default.Signal(t.delayTime, n.default.Type.Time), this.effectSendL.chain(this._leftDelay, this.effectReturnL), this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackLR.disconnect(), this._feedbackLR.connect(this._rightDelay), this._readOnly(["delayTime"])
                }, n.default.extend(n.default.PingPongDelay, n.default.StereoXFeedbackEffect), n.default.PingPongDelay.defaults = {
                    delayTime: .25,
                    maxDelayTime: 1
                }, n.default.PingPongDelay.prototype.dispose = function () {
                    return n.default.StereoXFeedbackEffect.prototype.dispose.call(this), this._leftDelay.dispose(), this._leftDelay = null, this._rightDelay.dispose(), this._rightDelay = null, this._rightPreDelay.dispose(), this._rightPreDelay = null, this._writable(["delayTime"]), this.delayTime.dispose(), this.delayTime = null, this
                }, e.default = n.default.PingPongDelay
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(12), i(9), i(15), n.default.Phaser = function () {
                    var t = n.default.defaults(arguments, ["frequency", "octaves", "baseFrequency"], n.default.Phaser);
                    n.default.StereoEffect.call(this, t), this._lfoL = new n.default.LFO(t.frequency, 0, 1), this._lfoR = new n.default.LFO(t.frequency, 0, 1), this._lfoR.phase = 180, this._baseFrequency = t.baseFrequency, this._octaves = t.octaves, this.Q = new n.default.Signal(t.Q, n.default.Type.Positive), this._filtersL = this._makeFilters(t.stages, this._lfoL, this.Q), this._filtersR = this._makeFilters(t.stages, this._lfoR, this.Q), this.frequency = this._lfoL.frequency, this.frequency.value = t.frequency, this.effectSendL.connect(this._filtersL[0]), this.effectSendR.connect(this._filtersR[0]), n.default.connect(this._filtersL[t.stages - 1], this.effectReturnL), n.default.connect(this._filtersR[t.stages - 1], this.effectReturnR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = t.baseFrequency, this.octaves = t.octaves, this._lfoL.start(), this._lfoR.start(), this._readOnly(["frequency", "Q"])
                }, n.default.extend(n.default.Phaser, n.default.StereoEffect), n.default.Phaser.defaults = {
                    frequency: .5,
                    octaves: 3,
                    stages: 10,
                    Q: 10,
                    baseFrequency: 350
                }, n.default.Phaser.prototype._makeFilters = function (t, e, i) {
                    for (var o = new Array(t), a = 0; a < t; a++) {
                        var r = this.context.createBiquadFilter();
                        r.type = "allpass", i.connect(r.Q), e.connect(r.frequency), o[a] = r
                    }
                    return n.default.connectSeries.apply(n.default, o), o
                }, Object.defineProperty(n.default.Phaser.prototype, "octaves", {
                    get: function () {
                        return this._octaves
                    }, set: function (t) {
                        this._octaves = t;
                        var e = this._baseFrequency * Math.pow(2, t);
                        this._lfoL.max = e, this._lfoR.max = e
                    }
                }), Object.defineProperty(n.default.Phaser.prototype, "baseFrequency", {
                    get: function () {
                        return this._baseFrequency
                    }, set: function (t) {
                        this._baseFrequency = t, this._lfoL.min = t, this._lfoR.min = t, this.octaves = this._octaves
                    }
                }), n.default.Phaser.prototype.dispose = function () {
                    n.default.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "Q"]), this.Q.dispose(), this.Q = null, this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null;
                    for (var t = 0; t < this._filtersL.length; t++) this._filtersL[t].disconnect(), this._filtersL[t] = null;
                    this._filtersL = null;
                    for (var e = 0; e < this._filtersR.length; e++) this._filtersR[e].disconnect(), this._filtersR[e] = null;
                    return this._filtersR = null, this.frequency = null, this
                }, e.default = n.default.Phaser
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0), o = (i(59), i(15), i(26), [.06748, .06404, .08212, .09004]), a = [.773, .802, .753, .733],
                    r = [347, 113, 37];
                n.default.JCReverb = function () {
                    var t = n.default.defaults(arguments, ["roomSize"], n.default.JCReverb);
                    n.default.StereoEffect.call(this, t), this.roomSize = new n.default.Signal(t.roomSize, n.default.Type.NormalRange), this._scaleRoomSize = new n.default.Scale(-.733, .197), this._allpassFilters = [], this._feedbackCombFilters = [];
                    for (var e = 0; e < r.length; e++) {
                        var i = this.context.createBiquadFilter();
                        i.type = "allpass", i.frequency.value = r[e], this._allpassFilters.push(i)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var l = new n.default.FeedbackCombFilter(o[s], .1);
                        this._scaleRoomSize.connect(l.resonance), l.resonance.value = a[s], n.default.connect(this._allpassFilters[this._allpassFilters.length - 1], l), s < o.length / 2 ? l.connect(this.effectReturnL) : l.connect(this.effectReturnR), this._feedbackCombFilters.push(l)
                    }
                    this.roomSize.connect(this._scaleRoomSize), n.default.connectSeries.apply(n.default, this._allpassFilters), this.effectSendL.connect(this._allpassFilters[0]), this.effectSendR.connect(this._allpassFilters[0]), this._readOnly(["roomSize"])
                }, n.default.extend(n.default.JCReverb, n.default.StereoEffect), n.default.JCReverb.defaults = {roomSize: .5}, n.default.JCReverb.prototype.dispose = function () {
                    n.default.StereoEffect.prototype.dispose.call(this);
                    for (var t = 0; t < this._allpassFilters.length; t++) this._allpassFilters[t].disconnect(), this._allpassFilters[t] = null;
                    this._allpassFilters = null;
                    for (var e = 0; e < this._feedbackCombFilters.length; e++) this._feedbackCombFilters[e].dispose(), this._feedbackCombFilters[e] = null;
                    return this._feedbackCombFilters = null, this._writable(["roomSize"]), this.roomSize.dispose(), this.roomSize = null, this._scaleRoomSize.dispose(), this._scaleRoomSize = null, this
                }, e.default = n.default.JCReverb
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0),
                    o = (i(54), i(15), i(2), i(19), i(10), i(42), [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100]),
                    a = [225, 556, 441, 341];
                n.default.Freeverb = function () {
                    var t = n.default.defaults(arguments, ["roomSize", "dampening"], n.default.Freeverb);
                    n.default.StereoEffect.call(this, t), this.roomSize = new n.default.Signal(t.roomSize, n.default.Type.NormalRange), this.dampening = new n.default.Signal(t.dampening, n.default.Type.Frequency), this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                    for (var e = 0; e < a.length; e++) {
                        var i = this.context.createBiquadFilter();
                        i.type = "allpass", i.frequency.value = a[e], this._allpassFiltersL.push(i)
                    }
                    for (var r = 0; r < a.length; r++) {
                        var s = this.context.createBiquadFilter();
                        s.type = "allpass", s.frequency.value = a[r], this._allpassFiltersR.push(s)
                    }
                    for (var l = 0; l < o.length; l++) {
                        var u = new n.default.LowpassCombFilter(o[l]);
                        l < o.length / 2 ? this.effectSendL.chain(u, this._allpassFiltersL[0]) : this.effectSendR.chain(u, this._allpassFiltersR[0]), this.roomSize.connect(u.resonance), this.dampening.connect(u.dampening), this._combFilters.push(u)
                    }
                    n.default.connectSeries.apply(n.default, this._allpassFiltersL), n.default.connectSeries.apply(n.default, this._allpassFiltersR), n.default.connect(this._allpassFiltersL[this._allpassFiltersL.length - 1], this.effectReturnL), n.default.connect(this._allpassFiltersR[this._allpassFiltersR.length - 1], this.effectReturnR), this._readOnly(["roomSize", "dampening"])
                }, n.default.extend(n.default.Freeverb, n.default.StereoEffect), n.default.Freeverb.defaults = {
                    roomSize: .7,
                    dampening: 3e3
                }, n.default.Freeverb.prototype.dispose = function () {
                    n.default.StereoEffect.prototype.dispose.call(this);
                    for (var t = 0; t < this._allpassFiltersL.length; t++) this._allpassFiltersL[t].disconnect(), this._allpassFiltersL[t] = null;
                    this._allpassFiltersL = null;
                    for (var e = 0; e < this._allpassFiltersR.length; e++) this._allpassFiltersR[e].disconnect(), this._allpassFiltersR[e] = null;
                    this._allpassFiltersR = null;
                    for (var i = 0; i < this._combFilters.length; i++) this._combFilters[i].dispose(), this._combFilters[i] = null;
                    return this._combFilters = null, this._writable(["roomSize", "dampening"]), this.roomSize.dispose(), this.roomSize = null, this.dampening.dispose(), this.dampening = null, this
                }, e.default = n.default.Freeverb
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(33), i(2), i(18), n.default.FeedbackDelay = function () {
                    var t = n.default.defaults(arguments, ["delayTime", "feedback"], n.default.FeedbackDelay);
                    n.default.FeedbackEffect.call(this, t), this._delayNode = new n.default.Delay(t.delayTime, t.maxDelay), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), this._readOnly(["delayTime"])
                }, n.default.extend(n.default.FeedbackDelay, n.default.FeedbackEffect), n.default.FeedbackDelay.defaults = {
                    delayTime: .25,
                    maxDelay: 1
                }, n.default.FeedbackDelay.prototype.dispose = function () {
                    return n.default.FeedbackEffect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._writable(["delayTime"]), this.delayTime = null, this
                }, e.default = n.default.FeedbackDelay
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(7), n.default.Distortion = function () {
                    var t = n.default.defaults(arguments, ["distortion"], n.default.Distortion);
                    n.default.Effect.call(this, t), this._shaper = new n.default.WaveShaper(4096), this._distortion = t.distortion, this.connectEffect(this._shaper), this.distortion = t.distortion, this.oversample = t.oversample
                }, n.default.extend(n.default.Distortion, n.default.Effect), n.default.Distortion.defaults = {
                    distortion: .4,
                    oversample: "none"
                }, Object.defineProperty(n.default.Distortion.prototype, "distortion", {
                    get: function () {
                        return this._distortion
                    }, set: function (t) {
                        this._distortion = t;
                        var e = 100 * t, i = Math.PI / 180;
                        this._shaper.setMap(function (t) {
                            return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * i / (Math.PI + e * Math.abs(t))
                        })
                    }
                }), Object.defineProperty(n.default.Distortion.prototype, "oversample", {
                    get: function () {
                        return this._shaper.oversample
                    }, set: function (t) {
                        this._shaper.oversample = t
                    }
                }), n.default.Distortion.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
                }, e.default = n.default.Distortion
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(12), i(15), i(18), n.default.Chorus = function () {
                    var t = n.default.defaults(arguments, ["frequency", "delayTime", "depth"], n.default.Chorus);
                    n.default.StereoEffect.call(this, t), this._depth = t.depth, this._delayTime = t.delayTime / 1e3, this._lfoL = new n.default.LFO({
                        frequency: t.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new n.default.LFO({
                        frequency: t.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._delayNodeL = new n.default.Delay, this._delayNodeR = new n.default.Delay, this.frequency = this._lfoL.frequency, this.effectSendL.chain(this._delayNodeL, this.effectReturnL), this.effectSendR.chain(this._delayNodeR, this.effectReturnR), this.effectSendL.connect(this.effectReturnL), this.effectSendR.connect(this.effectReturnR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this._lfoL.start(), this._lfoR.start(), this._lfoL.frequency.connect(this._lfoR.frequency), this.depth = this._depth, this.frequency.value = t.frequency, this.type = t.type, this._readOnly(["frequency"]), this.spread = t.spread
                }, n.default.extend(n.default.Chorus, n.default.StereoEffect), n.default.Chorus.defaults = {
                    frequency: 1.5,
                    delayTime: 3.5,
                    depth: .7,
                    type: "sine",
                    spread: 180
                }, Object.defineProperty(n.default.Chorus.prototype, "depth", {
                    get: function () {
                        return this._depth
                    }, set: function (t) {
                        this._depth = t;
                        var e = this._delayTime * t;
                        this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e
                    }
                }), Object.defineProperty(n.default.Chorus.prototype, "delayTime", {
                    get: function () {
                        return 1e3 * this._delayTime
                    }, set: function (t) {
                        this._delayTime = t / 1e3, this.depth = this._depth
                    }
                }), Object.defineProperty(n.default.Chorus.prototype, "type", {
                    get: function () {
                        return this._lfoL.type
                    }, set: function (t) {
                        this._lfoL.type = t, this._lfoR.type = t
                    }
                }), Object.defineProperty(n.default.Chorus.prototype, "spread", {
                    get: function () {
                        return this._lfoR.phase - this._lfoL.phase
                    }, set: function (t) {
                        this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90
                    }
                }), n.default.Chorus.prototype.dispose = function () {
                    return n.default.StereoEffect.prototype.dispose.call(this), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._delayNodeL.dispose(), this._delayNodeL = null, this._delayNodeR.dispose(), this._delayNodeR = null, this._writable("frequency"), this.frequency = null, this
                }, e.default = n.default.Chorus
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(7), n.default.Chebyshev = function () {
                    var t = n.default.defaults(arguments, ["order"], n.default.Chebyshev);
                    n.default.Effect.call(this, t), this._shaper = new n.default.WaveShaper(4096), this._order = t.order, this.connectEffect(this._shaper), this.order = t.order, this.oversample = t.oversample
                }, n.default.extend(n.default.Chebyshev, n.default.Effect), n.default.Chebyshev.defaults = {
                    order: 1,
                    oversample: "none"
                }, n.default.Chebyshev.prototype._getCoefficient = function (t, e, i) {
                    return i.hasOwnProperty(e) ? i[e] : (i[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i), i[e])
                }, Object.defineProperty(n.default.Chebyshev.prototype, "order", {
                    get: function () {
                        return this._order
                    }, set: function (t) {
                        this._order = t;
                        for (var e = new Array(4096), i = e.length, n = 0; n < i; ++n) {
                            var o = 2 * n / i - 1;
                            e[n] = 0 === o ? 0 : this._getCoefficient(o, t, {})
                        }
                        this._shaper.curve = e
                    }
                }), Object.defineProperty(n.default.Chebyshev.prototype, "oversample", {
                    get: function () {
                        return this._shaper.oversample
                    }, set: function (t) {
                        this._shaper.oversample = t
                    }
                }), n.default.Chebyshev.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
                }, e.default = n.default.Chebyshev
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(13), i(75), n.default.BitCrusher = function () {
                    var t = n.default.defaults(arguments, ["bits"], n.default.BitCrusher);
                    n.default.Effect.call(this, t);
                    var e = 1 / Math.pow(2, t.bits - 1);
                    this._subtract = new n.default.Subtract, this._modulo = new n.default.Modulo(e), this._bits = t.bits, this.effectSend.fan(this._subtract, this._modulo), this._modulo.connect(this._subtract, 0, 1), this._subtract.connect(this.effectReturn)
                }, n.default.extend(n.default.BitCrusher, n.default.Effect), n.default.BitCrusher.defaults = {bits: 4}, Object.defineProperty(n.default.BitCrusher.prototype, "bits", {
                    get: function () {
                        return this._bits
                    }, set: function (t) {
                        this._bits = t;
                        var e = 1 / Math.pow(2, t - 1);
                        this._modulo.value = e
                    }
                }), n.default.BitCrusher.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._subtract.dispose(), this._subtract = null, this._modulo.dispose(), this._modulo = null, this
                }, e.default = n.default.BitCrusher
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(58), i(42), i(8), i(9), n.default.AutoWah = function () {
                    var t = n.default.defaults(arguments, ["baseFrequency", "octaves", "sensitivity"], n.default.AutoWah);
                    n.default.Effect.call(this, t), this.follower = new n.default.Follower(t.follower), this._sweepRange = new n.default.ScaleExp(0, 1, .5), this._baseFrequency = t.baseFrequency, this._octaves = t.octaves, this._inputBoost = new n.default.Gain, this._bandpass = new n.default.Filter({
                        rolloff: -48,
                        frequency: 0,
                        Q: t.Q
                    }), this._peaking = new n.default.Filter(0, "peaking"), this._peaking.gain.value = t.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = t.sensitivity, this._readOnly(["gain", "Q"])
                }, n.default.extend(n.default.AutoWah, n.default.Effect), n.default.AutoWah.defaults = {
                    baseFrequency: 100,
                    octaves: 6,
                    sensitivity: 0,
                    Q: 2,
                    gain: 2,
                    follower: {attack: .3, release: .5}
                }, Object.defineProperty(n.default.AutoWah.prototype, "octaves", {
                    get: function () {
                        return this._octaves
                    }, set: function (t) {
                        this._octaves = t, this._setSweepRange()
                    }
                }), Object.defineProperty(n.default.AutoWah.prototype, "baseFrequency", {
                    get: function () {
                        return this._baseFrequency
                    }, set: function (t) {
                        this._baseFrequency = t, this._setSweepRange()
                    }
                }), Object.defineProperty(n.default.AutoWah.prototype, "sensitivity", {
                    get: function () {
                        return n.default.gainToDb(1 / this._inputBoost.gain.value)
                    }, set: function (t) {
                        this._inputBoost.gain.value = 1 / n.default.dbToGain(t)
                    }
                }), n.default.AutoWah.prototype._setSweepRange = function () {
                    this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
                }, n.default.AutoWah.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this.follower.dispose(), this.follower = null, this._sweepRange.dispose(), this._sweepRange = null, this._bandpass.dispose(), this._bandpass = null, this._peaking.dispose(), this._peaking = null, this._inputBoost.dispose(), this._inputBoost = null, this._writable(["gain", "Q"]), this.gain = null, this.Q = null, this
                }, e.default = n.default.AutoWah
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(12), i(48), n.default.AutoPanner = function () {
                    var t = n.default.defaults(arguments, ["frequency"], n.default.AutoPanner);
                    n.default.Effect.call(this, t), this._lfo = new n.default.LFO({
                        frequency: t.frequency,
                        amplitude: t.depth,
                        min: -1,
                        max: 1
                    }), this.depth = this._lfo.amplitude, this._panner = new n.default.Panner, this.frequency = this._lfo.frequency, this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this.type = t.type, this._readOnly(["depth", "frequency"])
                }, n.default.extend(n.default.AutoPanner, n.default.Effect), n.default.AutoPanner.defaults = {
                    frequency: 1,
                    type: "sine",
                    depth: 1
                }, n.default.AutoPanner.prototype.start = function (t) {
                    return this._lfo.start(t), this
                }, n.default.AutoPanner.prototype.stop = function (t) {
                    return this._lfo.stop(t), this
                }, n.default.AutoPanner.prototype.sync = function (t) {
                    return this._lfo.sync(t), this
                }, n.default.AutoPanner.prototype.unsync = function () {
                    return this._lfo.unsync(), this
                }, Object.defineProperty(n.default.AutoPanner.prototype, "type", {
                    get: function () {
                        return this._lfo.type
                    }, set: function (t) {
                        this._lfo.type = t
                    }
                }), n.default.AutoPanner.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this._panner.dispose(), this._panner = null, this._writable(["depth", "frequency"]), this.frequency = null, this.depth = null, this
                }, e.default = n.default.AutoPanner
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(8), i(12), i(9), n.default.AutoFilter = function () {
                    var t = n.default.defaults(arguments, ["frequency", "baseFrequency", "octaves"], n.default.AutoFilter);
                    n.default.Effect.call(this, t), this._lfo = new n.default.LFO({
                        frequency: t.frequency,
                        amplitude: t.depth
                    }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.filter = new n.default.Filter(t.filter), this._octaves = 0, this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.type = t.type, this._readOnly(["frequency", "depth"]), this.octaves = t.octaves, this.baseFrequency = t.baseFrequency
                }, n.default.extend(n.default.AutoFilter, n.default.Effect), n.default.AutoFilter.defaults = {
                    frequency: 1,
                    type: "sine",
                    depth: 1,
                    baseFrequency: 200,
                    octaves: 2.6,
                    filter: {type: "lowpass", rolloff: -12, Q: 1}
                }, n.default.AutoFilter.prototype.start = function (t) {
                    return this._lfo.start(t), this
                }, n.default.AutoFilter.prototype.stop = function (t) {
                    return this._lfo.stop(t), this
                }, n.default.AutoFilter.prototype.sync = function (t) {
                    return this._lfo.sync(t), this
                }, n.default.AutoFilter.prototype.unsync = function () {
                    return this._lfo.unsync(), this
                }, Object.defineProperty(n.default.AutoFilter.prototype, "type", {
                    get: function () {
                        return this._lfo.type
                    }, set: function (t) {
                        this._lfo.type = t
                    }
                }), Object.defineProperty(n.default.AutoFilter.prototype, "baseFrequency", {
                    get: function () {
                        return this._lfo.min
                    }, set: function (t) {
                        this._lfo.min = this.toFrequency(t), this.octaves = this._octaves
                    }
                }), Object.defineProperty(n.default.AutoFilter.prototype, "octaves", {
                    get: function () {
                        return this._octaves
                    }, set: function (t) {
                        this._octaves = t, this._lfo.max = this.baseFrequency * Math.pow(2, t)
                    }
                }), n.default.AutoFilter.prototype.dispose = function () {
                    return n.default.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this.filter.dispose(), this.filter = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null, this
                }, e.default = n.default.AutoFilter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(23), i(10), i(19), i(2), i(22), i(28), n.default.Listener = function () {
                    n.default.call(this), this._orientation = [0, 0, 0, 0, 0, 0], this._position = [0, 0, 0], n.default.getContext(function () {
                        this.set(o.defaults)
                    }.bind(this))
                }, n.default.extend(n.default.Listener), n.default.Listener.defaults = {
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    forwardX: 0,
                    forwardY: 0,
                    forwardZ: 1,
                    upX: 0,
                    upY: 1,
                    upZ: 0
                }, n.default.Listener.prototype.isListener = !0, n.default.Listener.prototype._rampTimeConstant = .01, n.default.Listener.prototype.setPosition = function (t, e, i) {
                    if (this.context.rawContext.listener.positionX) {
                        var n = this.now();
                        this.context.rawContext.listener.positionX.setTargetAtTime(t, n, this._rampTimeConstant), this.context.rawContext.listener.positionY.setTargetAtTime(e, n, this._rampTimeConstant), this.context.rawContext.listener.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
                    } else this.context.rawContext.listener.setPosition(t, e, i);
                    return this._position = Array.prototype.slice.call(arguments), this
                }, n.default.Listener.prototype.setOrientation = function (t, e, i, n, o, a) {
                    if (this.context.rawContext.listener.forwardX) {
                        var r = this.now();
                        this.context.rawContext.listener.forwardX.setTargetAtTime(t, r, this._rampTimeConstant), this.context.rawContext.listener.forwardY.setTargetAtTime(e, r, this._rampTimeConstant), this.context.rawContext.listener.forwardZ.setTargetAtTime(i, r, this._rampTimeConstant), this.context.rawContext.listener.upX.setTargetAtTime(n, r, this._rampTimeConstant), this.context.rawContext.listener.upY.setTargetAtTime(o, r, this._rampTimeConstant), this.context.rawContext.listener.upZ.setTargetAtTime(a, r, this._rampTimeConstant)
                    } else this.context.rawContext.listener.setOrientation(t, e, i, n, o, a);
                    return this._orientation = Array.prototype.slice.call(arguments), this
                }, Object.defineProperty(n.default.Listener.prototype, "positionX", {
                    set: function (t) {
                        this._position[0] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[0]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "positionY", {
                    set: function (t) {
                        this._position[1] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[1]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "positionZ", {
                    set: function (t) {
                        this._position[2] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[2]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "forwardX", {
                    set: function (t) {
                        this._orientation[0] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[0]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "forwardY", {
                    set: function (t) {
                        this._orientation[1] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[1]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "forwardZ", {
                    set: function (t) {
                        this._orientation[2] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[2]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "upX", {
                    set: function (t) {
                        this._orientation[3] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[3]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "upY", {
                    set: function (t) {
                        this._orientation[4] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[4]
                    }
                }), Object.defineProperty(n.default.Listener.prototype, "upZ", {
                    set: function (t) {
                        this._orientation[5] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[5]
                    }
                }), n.default.Listener.prototype.dispose = function () {
                    return this._orientation = null, this._position = null, this
                };
                var o = n.default.Listener;
                n.default.Listener = new o, n.default.Context.on("init", function (t) {
                    t.listener && t.listener.isListener ? n.default.Listener = t.listener : n.default.Listener = new o
                }), e.default = n.default.Listener
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(24), n.default.Draw = function () {
                    n.default.call(this), this._events = new n.default.Timeline, this.expiration = .25, this.anticipation = .008, this._boundDrawLoop = this._drawLoop.bind(this)
                }, n.default.extend(n.default.Draw), n.default.Draw.prototype.schedule = function (t, e) {
                    return this._events.add({
                        callback: t,
                        time: this.toSeconds(e)
                    }), 1 === this._events.length && requestAnimationFrame(this._boundDrawLoop), this
                }, n.default.Draw.prototype.cancel = function (t) {
                    return this._events.cancel(this.toSeconds(t)), this
                }, n.default.Draw.prototype._drawLoop = function () {
                    for (var t = n.default.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= t;) {
                        var e = this._events.shift();
                        t - e.time <= this.expiration && e.callback()
                    }
                    this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop)
                }, n.default.Draw = new n.default.Draw, e.default = n.default.Draw
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0), o = (i(3), {});
                n.default.prototype.send = function (t, e) {
                    o.hasOwnProperty(t) || (o[t] = this.context.createGain()), e = n.default.defaultArg(e, 0);
                    var i = new n.default.Gain(e, n.default.Type.Decibels);
                    return this.connect(i), i.connect(o[t]), i
                }, n.default.prototype.receive = function (t, e) {
                    return o.hasOwnProperty(t) || (o[t] = this.context.createGain()), n.default.connect(o[t], this, 0, e), this
                }, n.default.Context.on("init", function (t) {
                    t.buses ? o = t.buses : (o = {}, t.buses = o)
                }), e.default = n.default
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(4), n.default.CtrlRandom = function () {
                    var t = n.default.defaults(arguments, ["min", "max"], n.default.CtrlRandom);
                    n.default.call(this), this.min = t.min, this.max = t.max, this.integer = t.integer
                }, n.default.extend(n.default.CtrlRandom), n.default.CtrlRandom.defaults = {
                    min: 0,
                    max: 1,
                    integer: !1
                }, Object.defineProperty(n.default.CtrlRandom.prototype, "value", {
                    get: function () {
                        var t = this.toSeconds(this.min), e = this.toSeconds(this.max), i = Math.random(),
                            n = i * t + (1 - i) * e;
                        return this.integer && (n = Math.floor(n)), n
                    }
                }), e.default = n.default.CtrlRandom
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                n.default.CtrlMarkov = function (t, e) {
                    n.default.call(this), this.values = n.default.defaultArg(t, {}), this.value = n.default.defaultArg(e, Object.keys(this.values)[0])
                }, n.default.extend(n.default.CtrlMarkov), n.default.CtrlMarkov.prototype.next = function () {
                    if (this.values.hasOwnProperty(this.value)) {
                        var t = this.values[this.value];
                        if (n.default.isArray(t)) for (var e = this._getProbDistribution(t), i = Math.random(), o = 0, a = 0; a < e.length; a++) {
                            var r = e[a];
                            if (i > o && i < o + r) {
                                var s = t[a];
                                n.default.isObject(s) ? this.value = s.value : this.value = s
                            }
                            o += r
                        } else this.value = t
                    }
                    return this.value
                }, n.default.CtrlMarkov.prototype._getProbDistribution = function (t) {
                    for (var e = [], i = 0, o = !1, a = 0; a < t.length; a++) {
                        var r = t[a];
                        n.default.isObject(r) ? (o = !0, e[a] = r.probability) : e[a] = 1 / t.length, i += e[a]
                    }
                    if (o) for (var s = 0; s < e.length; s++) e[s] = e[s] / i;
                    return e
                }, n.default.CtrlMarkov.prototype.dispose = function () {
                    this.values = null
                }, e.default = n.default.CtrlMarkov
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(4), n.default.CtrlInterpolate = function () {
                    var t = n.default.defaults(arguments, ["values", "index"], n.default.CtrlInterpolate);
                    n.default.call(this), this.values = t.values, this.index = t.index
                }, n.default.extend(n.default.CtrlInterpolate), n.default.CtrlInterpolate.defaults = {
                    index: 0,
                    values: []
                }, Object.defineProperty(n.default.CtrlInterpolate.prototype, "value", {
                    get: function () {
                        var t = this.index;
                        t = Math.min(t, this.values.length - 1);
                        var e = Math.floor(t), i = this.values[e], n = this.values[Math.ceil(t)];
                        return this._interpolate(t - e, i, n)
                    }
                }), n.default.CtrlInterpolate.prototype._interpolate = function (t, e, i) {
                    if (n.default.isArray(e)) {
                        for (var o = [], a = 0; a < e.length; a++) o[a] = this._interpolate(t, e[a], i[a]);
                        return o
                    }
                    if (n.default.isObject(e)) {
                        var r = {};
                        for (var s in e) r[s] = this._interpolate(t, e[s], i[s]);
                        return r
                    }
                    return (1 - t) * (e = this._toNumber(e)) + t * (i = this._toNumber(i))
                }, n.default.CtrlInterpolate.prototype._toNumber = function (t) {
                    return n.default.isNumber(t) ? t : this.toSeconds(t)
                }, n.default.CtrlInterpolate.prototype.dispose = function () {
                    this.values = null
                }, e.default = n.default.CtrlInterpolate
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(36), i(1), n.default.Waveform = function () {
                    var t = n.default.defaults(arguments, ["size"], n.default.Waveform);
                    t.type = n.default.Analyser.Type.Waveform, n.default.AudioNode.call(this), this._analyser = this.input = this.output = new n.default.Analyser(t)
                }, n.default.extend(n.default.Waveform, n.default.AudioNode), n.default.Waveform.defaults = {size: 1024}, n.default.Waveform.prototype.getValue = function () {
                    return this._analyser.getValue()
                }, Object.defineProperty(n.default.Waveform.prototype, "size", {
                    get: function () {
                        return this._analyser.size
                    }, set: function (t) {
                        this._analyser.size = t
                    }
                }), n.default.Waveform.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null
                }, e.default = n.default.Waveform
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(23), i(10), i(19), i(2), i(22), i(28), i(1), n.default.Panner3D = function () {
                    var t = n.default.defaults(arguments, ["positionX", "positionY", "positionZ"], n.default.Panner3D);
                    n.default.AudioNode.call(this), this._panner = this.input = this.output = this.context.createPanner(), this._panner.panningModel = t.panningModel, this._panner.maxDistance = t.maxDistance, this._panner.distanceModel = t.distanceModel, this._panner.coneOuterGain = t.coneOuterGain, this._panner.coneOuterAngle = t.coneOuterAngle, this._panner.coneInnerAngle = t.coneInnerAngle, this._panner.refDistance = t.refDistance, this._panner.rolloffFactor = t.rolloffFactor, this._orientation = [t.orientationX, t.orientationY, t.orientationZ], this._position = [t.positionX, t.positionY, t.positionZ], this.orientationX = t.orientationX, this.orientationY = t.orientationY, this.orientationZ = t.orientationZ, this.positionX = t.positionX, this.positionY = t.positionY, this.positionZ = t.positionZ
                }, n.default.extend(n.default.Panner3D, n.default.AudioNode), n.default.Panner3D.defaults = {
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    orientationX: 0,
                    orientationY: 0,
                    orientationZ: 0,
                    panningModel: "equalpower",
                    maxDistance: 1e4,
                    distanceModel: "inverse",
                    coneOuterGain: 0,
                    coneOuterAngle: 360,
                    coneInnerAngle: 360,
                    refDistance: 1,
                    rolloffFactor: 1
                }, n.default.Panner3D.prototype._rampTimeConstant = .01, n.default.Panner3D.prototype.setPosition = function (t, e, i) {
                    if (this._panner.positionX) {
                        var n = this.now();
                        this._panner.positionX.setTargetAtTime(t, n, this._rampTimeConstant), this._panner.positionY.setTargetAtTime(e, n, this._rampTimeConstant), this._panner.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
                    } else this._panner.setPosition(t, e, i);
                    return this._position = Array.prototype.slice.call(arguments), this
                }, n.default.Panner3D.prototype.setOrientation = function (t, e, i) {
                    if (this._panner.orientationX) {
                        var n = this.now();
                        this._panner.orientationX.setTargetAtTime(t, n, this._rampTimeConstant), this._panner.orientationY.setTargetAtTime(e, n, this._rampTimeConstant), this._panner.orientationZ.setTargetAtTime(i, n, this._rampTimeConstant)
                    } else this._panner.setOrientation(t, e, i);
                    return this._orientation = Array.prototype.slice.call(arguments), this
                }, Object.defineProperty(n.default.Panner3D.prototype, "positionX", {
                    set: function (t) {
                        this._position[0] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[0]
                    }
                }), Object.defineProperty(n.default.Panner3D.prototype, "positionY", {
                    set: function (t) {
                        this._position[1] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[1]
                    }
                }), Object.defineProperty(n.default.Panner3D.prototype, "positionZ", {
                    set: function (t) {
                        this._position[2] = t, this.setPosition.apply(this, this._position)
                    }, get: function () {
                        return this._position[2]
                    }
                }), Object.defineProperty(n.default.Panner3D.prototype, "orientationX", {
                    set: function (t) {
                        this._orientation[0] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[0]
                    }
                }), Object.defineProperty(n.default.Panner3D.prototype, "orientationY", {
                    set: function (t) {
                        this._orientation[1] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[1]
                    }
                }), Object.defineProperty(n.default.Panner3D.prototype, "orientationZ", {
                    set: function (t) {
                        this._orientation[2] = t, this.setOrientation.apply(this, this._orientation)
                    }, get: function () {
                        return this._orientation[2]
                    }
                }), n.default.Panner3D._aliasProperty = function (t) {
                    Object.defineProperty(n.default.Panner3D.prototype, t, {
                        set: function (e) {
                            this._panner[t] = e
                        }, get: function () {
                            return this._panner[t]
                        }
                    })
                }, n.default.Panner3D._aliasProperty("panningModel"), n.default.Panner3D._aliasProperty("refDistance"), n.default.Panner3D._aliasProperty("rolloffFactor"), n.default.Panner3D._aliasProperty("distanceModel"), n.default.Panner3D._aliasProperty("coneInnerAngle"), n.default.Panner3D._aliasProperty("coneOuterAngle"), n.default.Panner3D._aliasProperty("coneOuterGain"), n.default.Panner3D._aliasProperty("maxDistance"), n.default.Panner3D.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._panner.disconnect(), this._panner = null, this._orientation = null, this._position = null, this
                }, e.default = n.default.Panner3D
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(60), i(43), i(1), n.default.MultibandCompressor = function (t) {
                    n.default.AudioNode.call(this), t = n.default.defaultArg(arguments, n.default.MultibandCompressor.defaults), this._splitter = this.input = new n.default.MultibandSplit({
                        lowFrequency: t.lowFrequency,
                        highFrequency: t.highFrequency
                    }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new n.default.Gain, this.low = new n.default.Compressor(t.low), this.mid = new n.default.Compressor(t.mid), this.high = new n.default.Compressor(t.high), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
                }, n.default.extend(n.default.MultibandCompressor, n.default.AudioNode), n.default.MultibandCompressor.defaults = {
                    low: n.default.Compressor.defaults,
                    mid: n.default.Compressor.defaults,
                    high: n.default.Compressor.defaults,
                    lowFrequency: 250,
                    highFrequency: 2e3
                }, n.default.MultibandCompressor.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._splitter.dispose(), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this._splitter = null, this.low = null, this.mid = null, this.high = null, this.lowFrequency = null, this.highFrequency = null, this
                }, e.default = n.default.MultibandCompressor
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(10), i(1), n.default.Mono = function () {
                    n.default.AudioNode.call(this), this.createInsOuts(1, 0), this._merge = this.output = new n.default.Merge, n.default.connect(this.input, this._merge, 0, 0), n.default.connect(this.input, this._merge, 0, 1)
                }, n.default.extend(n.default.Mono, n.default.AudioNode), n.default.Mono.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._merge.dispose(), this._merge = null, this
                }, e.default = n.default.Mono
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(53), i(52), i(43), i(1), n.default.MidSideCompressor = function (t) {
                    n.default.AudioNode.call(this), t = n.default.defaultArg(t, n.default.MidSideCompressor.defaults), this._midSideSplit = this.input = new n.default.MidSideSplit, this._midSideMerge = this.output = new n.default.MidSideMerge, this.mid = new n.default.Compressor(t.mid), this.side = new n.default.Compressor(t.side), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), this._readOnly(["mid", "side"])
                }, n.default.extend(n.default.MidSideCompressor, n.default.AudioNode), n.default.MidSideCompressor.defaults = {
                    mid: {
                        ratio: 3,
                        threshold: -24,
                        release: .03,
                        attack: .02,
                        knee: 16
                    }, side: {ratio: 6, threshold: -30, release: .25, attack: .03, knee: 10}
                }, n.default.MidSideCompressor.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["mid", "side"]), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this
                }, e.default = n.default.MidSideCompressor
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(36), i(1), n.default.Meter = function () {
                    var t = n.default.defaults(arguments, ["smoothing"], n.default.Meter);
                    n.default.AudioNode.call(this), this.smoothing = t.smoothing, this._rms = 0, this.input = this.output = this._analyser = new n.default.Analyser("waveform", 256)
                }, n.default.extend(n.default.Meter, n.default.AudioNode), n.default.Meter.defaults = {smoothing: .8}, n.default.Meter.prototype.getLevel = function () {
                    for (var t = this._analyser.getValue(), e = 0, i = 0; i < t.length; i++) {
                        var o = t[i];
                        e += o * o
                    }
                    var a = Math.sqrt(e / t.length);
                    return this._rms = Math.max(a, this._rms * this.smoothing), n.default.gainToDb(this._rms)
                }, n.default.Meter.prototype.getValue = function () {
                    return this._analyser.getValue()[0]
                }, n.default.Meter.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null, this
                }, e.default = n.default.Meter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(43), i(1), n.default.Limiter = function () {
                    var t = n.default.defaults(arguments, ["threshold"], n.default.Limiter);
                    n.default.AudioNode.call(this), this._compressor = this.input = this.output = new n.default.Compressor({
                        attack: .001,
                        decay: .001,
                        threshold: t.threshold
                    }), this.threshold = this._compressor.threshold, this._readOnly("threshold")
                }, n.default.extend(n.default.Limiter, n.default.AudioNode), n.default.Limiter.defaults = {threshold: -12}, n.default.Limiter.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._compressor.dispose(), this._compressor = null, this._writable("threshold"), this.threshold = null, this
                }, e.default = n.default.Limiter
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(58), i(85), i(1), n.default.Gate = function () {
                    var t = n.default.defaults(arguments, ["threshold", "smoothing"], n.default.Gate);
                    n.default.AudioNode.call(this), this.createInsOuts(1, 1), this._follower = new n.default.Follower(t.smoothing), this._gt = new n.default.GreaterThan(n.default.dbToGain(t.threshold)), n.default.connect(this.input, this.output), n.default.connectSeries(this.input, this._follower, this._gt, this.output.gain)
                }, n.default.extend(n.default.Gate, n.default.AudioNode), n.default.Gate.defaults = {
                    smoothing: .1,
                    threshold: -40
                }, Object.defineProperty(n.default.Gate.prototype, "threshold", {
                    get: function () {
                        return n.default.gainToDb(this._gt.value)
                    }, set: function (t) {
                        this._gt.value = n.default.dbToGain(t)
                    }
                }), Object.defineProperty(n.default.Gate.prototype, "smoothing", {
                    get: function () {
                        return this._follower.smoothing
                    }, set: function (t) {
                        this._follower.smoothing = t
                    }
                }), n.default.Gate.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), this._follower = null, this._gt = null, this
                }, e.default = n.default.Gate
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(36), i(1), n.default.FFT = function () {
                    var t = n.default.defaults(arguments, ["size"], n.default.FFT);
                    t.type = n.default.Analyser.Type.FFT, n.default.AudioNode.call(this), this._analyser = this.input = this.output = new n.default.Analyser(t)
                }, n.default.extend(n.default.FFT, n.default.AudioNode), n.default.FFT.defaults = {size: 1024}, n.default.FFT.prototype.getValue = function () {
                    return this._analyser.getValue()
                }, Object.defineProperty(n.default.FFT.prototype, "size", {
                    get: function () {
                        return this._analyser.size
                    }, set: function (t) {
                        this._analyser.size = t
                    }
                }), n.default.FFT.prototype.dispose = function () {
                    n.default.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null
                }, e.default = n.default.FFT
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(60), i(3), i(1), n.default.EQ3 = function () {
                    var t = n.default.defaults(arguments, ["low", "mid", "high"], n.default.EQ3);
                    n.default.AudioNode.call(this), this.output = new n.default.Gain, this._multibandSplit = this.input = new n.default.MultibandSplit({
                        lowFrequency: t.lowFrequency,
                        highFrequency: t.highFrequency
                    }), this._lowGain = new n.default.Gain(t.low, n.default.Type.Decibels), this._midGain = new n.default.Gain(t.mid, n.default.Type.Decibels), this._highGain = new n.default.Gain(t.high, n.default.Type.Decibels), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"])
                }, n.default.extend(n.default.EQ3, n.default.AudioNode), n.default.EQ3.defaults = {
                    low: 0,
                    mid: 0,
                    high: 0,
                    lowFrequency: 400,
                    highFrequency: 2500
                }, n.default.EQ3.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]), this._multibandSplit.dispose(), this._multibandSplit = null, this.lowFrequency = null, this.highFrequency = null, this._lowGain.dispose(), this._lowGain = null, this._midGain.dispose(), this._midGain = null, this._highGain.dispose(), this._highGain = null, this.low = null, this.mid = null, this.high = null, this.Q = null, this
                }, e.default = n.default.EQ3
            }, function (t, e, i) {
                "use strict";
                i.r(e);
                var n = i(0);
                i(91), i(88), i(1), n.default.Channel = function () {
                    var t = n.default.defaults(arguments, ["volume", "pan"], n.default.PanVol);
                    n.default.AudioNode.call(this, t), this._solo = this.input = new n.default.Solo(t.solo), this._panVol = this.output = new n.default.PanVol({
                        pan: t.pan,
                        volume: t.volume,
                        mute: t.mute
                    }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), this._readOnly(["pan", "volume"])
                }, n.default.extend(n.default.Channel, n.default.AudioNode), n.default.Channel.defaults = {
                    pan: 0,
                    volume: 0,
                    mute: !1,
                    solo: !1
                }, Object.defineProperty(n.default.Channel.prototype, "solo", {
                    get: function () {
                        return this._solo.solo
                    }, set: function (t) {
                        this._solo.solo = t
                    }
                }), Object.defineProperty(n.default.Channel.prototype, "muted", {
                    get: function () {
                        return this._solo.muted || this.mute
                    }
                }), Object.defineProperty(n.default.Channel.prototype, "mute", {
                    get: function () {
                        return this._panVol.mute
                    }, set: function (t) {
                        this._panVol.mute = t
                    }
                }), n.default.Channel.prototype.dispose = function () {
                    return n.default.AudioNode.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panVol.dispose(), this._panVol = null, this.pan = null, this.volume = null, this._solo.dispose(), this._solo = null, this
                }, e.default = n.default.Channel
            }, function (t, e) {
                var i;
                i = function () {
                    return this
                }();
                try {
                    i = i || Function("return this")() || (0, eval)("this")
                } catch (t) {
                    "object" == typeof window && (i = window)
                }
                t.exports = i
            }, function (t, e, i) {
                i(31), i(36), i(146), i(43), i(23), i(47), i(145), i(59), i(144), i(9), i(58), i(41), i(143), i(12), i(142), i(54), i(10), i(141), i(140), i(52), i(53), i(139), i(138), i(60), i(48), i(137), i(91), i(86), i(88), i(19), i(27), i(136), i(135), i(134), i(79), i(133), i(1), i(11), i(78), i(132), i(83), i(20), i(18), i(131), i(35), i(3), i(81), i(130), i(40), i(77), i(76), i(14), i(24), i(34), i(16), i(56), i(80), i(129), i(128), i(127), i(126), i(125), i(124), i(74), i(123), i(8), i(122), i(33), i(121), i(120), i(73), i(119), i(118), i(117), i(116), i(15), i(115), i(114), i(72), i(113), i(112), i(51), i(71), i(70), i(111), i(110), i(109), i(108), i(107), i(21), i(106), i(105), i(25), i(66), i(104), i(103), i(102), i(101), i(38), i(87), i(29),i(22),i(89),i(100),i(85),i(84),i(75),i(5),i(90),i(99),i(61),i(26),i(42),i(2),i(30),i(13),i(82),i(98),i(7),i(28),i(68),i(32),i(67),i(49),i(97),i(39),i(37),i(17),i(64),i(65),i(96),i(50),i(69),i(6),i(57),i(95),i(46),i(94),i(55),i(63),i(62),i(45),i(4),t.exports = i(0).default
            }])
        })
    }, Zx67: function (t, e, i) {
        t.exports = {default: i("fS6E"), __esModule: !0}
    }, Zzip: function (t, e, i) {
        t.exports = {default: i("/n6Q"), __esModule: !0}
    }, aC9z: function (t, e, i) {
        "use strict";

        function n(t, e) {
            return [{
                absoluteTime: t.ticks,
                channel: e,
                deltaTime: 0,
                noteNumber: t.midi,
                type: "noteOn",
                velocity: Math.floor(127 * t.velocity)
            }, {
                absoluteTime: t.ticks + t.durationTicks,
                channel: e,
                deltaTime: 0,
                noteNumber: t.midi,
                type: "noteOff",
                velocity: Math.floor(127 * t.noteOffVelocity)
            }]
        }

        function o(t) {
            return b.default(t.notes.map(function (e) {
                return n(e, t.channel)
            }))
        }

        function a(t, e) {
            return {
                absoluteTime: t.ticks,
                channel: e,
                controllerType: t.number,
                deltaTime: 0,
                type: "controller",
                value: Math.floor(127 * t.value)
            }
        }

        function r(t) {
            for (var e = [], i = 0; i < 127; i++) t.controlChanges.hasOwnProperty(i) && t.controlChanges[i].forEach(function (i) {
                e.push(a(i, t.channel))
            });
            return e
        }

        function s(t, e) {
            return {absoluteTime: t.ticks, channel: e, deltaTime: 0, type: "pitchBend", value: t.value}
        }

        function l(t) {
            var e = [];
            return t.pitchBends.forEach(function (i) {
                e.push(s(i, t.channel))
            }), e
        }

        function u(t) {
            return {
                absoluteTime: 0,
                channel: t.channel,
                deltaTime: 0,
                programNumber: t.instrument.number,
                type: "programChange"
            }
        }

        function c(t) {
            return {absoluteTime: 0, deltaTime: 0, meta: !0, text: t, type: "trackName"}
        }

        function f(t) {
            return {
                absoluteTime: t.ticks,
                deltaTime: 0,
                meta: !0,
                microsecondsPerBeat: Math.floor(6e7 / t.bpm),
                type: "setTempo"
            }
        }

        function d(t) {
            return {
                absoluteTime: t.ticks,
                deltaTime: 0,
                denominator: t.timeSignature[1],
                meta: !0,
                metronome: 24,
                numerator: t.timeSignature[0],
                thirtyseconds: 8,
                type: "timeSignature"
            }
        }

        function h(t) {
            var e = v.keySignatureKeys.indexOf(t.key);
            return {
                absoluteTime: t.ticks,
                deltaTime: 0,
                key: e + 7,
                meta: !0,
                scale: "major" === t.scale ? 0 : 1,
                type: "keySignature"
            }
        }

        function p(t) {
            return {absoluteTime: t.ticks, deltaTime: 0, meta: !0, text: t.text, type: t.type}
        }

        function m(t) {
            var e = {
                header: {format: 1, numTracks: t.tracks.length + 1, ticksPerBeat: t.header.ppq},
                tracks: y([y([{
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: !0,
                    text: t.header.name,
                    type: "trackName"
                }], t.header.keySignatures.map(function (t) {
                    return h(t)
                }), t.header.meta.map(function (t) {
                    return p(t)
                }), t.header.tempos.map(function (t) {
                    return f(t)
                }), t.header.timeSignatures.map(function (t) {
                    return d(t)
                }))], t.tracks.map(function (t) {
                    return y([c(t.name), u(t)], o(t), r(t), l(t))
                }))
            };
            return e.tracks = e.tracks.map(function (t) {
                t = t.sort(function (t, e) {
                    return t.absoluteTime - e.absoluteTime
                });
                var e = 0;
                return t.forEach(function (t) {
                    t.deltaTime = t.absoluteTime - e, e = t.absoluteTime, delete t.absoluteTime
                }), t.push({deltaTime: 0, meta: !0, type: "endOfTrack"}), t
            }), new Uint8Array(_.writeMidi(e))
        }

        var y = this && this.__spreadArrays || function () {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
            for (var n = Array(t), o = 0, e = 0; e < i; e++) for (var a = arguments[e], r = 0, s = a.length; r < s; r++, o++) n[o] = a[r];
            return n
        }, g = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0});
        var _ = i("RPVc"), v = i("aG7E"), b = g(i("IVAj"));
        e.encode = m
    }, aG7E: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("8CHm"), o = new WeakMap;
        e.keySignatureKeys = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"];
        var a = function () {
            function t(t) {
                var i = this;
                this.tempos = [], this.timeSignatures = [], this.keySignatures = [], this.meta = [], this.name = "", o.set(this, 480), t && (o.set(this, t.header.ticksPerBeat), t.tracks.forEach(function (t) {
                    return t.forEach(function (t) {
                        t.meta && ("timeSignature" === t.type ? i.timeSignatures.push({
                            ticks: t.absoluteTime,
                            timeSignature: [t.numerator, t.denominator]
                        }) : "setTempo" === t.type ? i.tempos.push({
                            bpm: 6e7 / t.microsecondsPerBeat,
                            ticks: t.absoluteTime
                        }) : "keySignature" === t.type && i.keySignatures.push({
                            key: e.keySignatureKeys[t.key + 7],
                            scale: 0 === t.scale ? "major" : "minor",
                            ticks: t.absoluteTime
                        }))
                    })
                }), t.tracks[0].forEach(function (t) {
                    t.meta && ("trackName" === t.type ? i.name = t.text : "text" !== t.type && "cuePoint" !== t.type && "marker" !== t.type && "lyrics" !== t.type || i.meta.push({
                        text: t.text,
                        ticks: t.absoluteTime,
                        type: t.type
                    }))
                }), this.update())
            }

            return t.prototype.update = function () {
                var t = this, e = 0, i = 0;
                this.tempos.sort(function (t, e) {
                    return t.ticks - e.ticks
                }), this.tempos.forEach(function (n, o) {
                    var a = o > 0 ? t.tempos[o - 1].bpm : t.tempos[0].bpm, r = n.ticks / t.ppq - i, s = 60 / a * r;
                    n.time = s + e, e = n.time, i += r
                }), this.timeSignatures.sort(function (t, e) {
                    return t.ticks - e.ticks
                }), this.timeSignatures.forEach(function (e, i) {
                    var n = i > 0 ? t.timeSignatures[i - 1] : t.timeSignatures[0], o = (e.ticks - n.ticks) / t.ppq,
                        a = o / n.timeSignature[0] / (n.timeSignature[1] / 4);
                    n.measures = n.measures || 0, e.measures = a + n.measures
                })
            }, t.prototype.ticksToSeconds = function (t) {
                var e = n.search(this.tempos, t);
                if (-1 !== e) {
                    var i = this.tempos[e], o = i.time, a = (t - i.ticks) / this.ppq;
                    return o + 60 / i.bpm * a
                }
                return t / this.ppq * .5
            }, t.prototype.ticksToMeasures = function (t) {
                var e = n.search(this.timeSignatures, t);
                if (-1 !== e) {
                    var i = this.timeSignatures[e], o = (t - i.ticks) / this.ppq;
                    return i.measures + o / (i.timeSignature[0] / i.timeSignature[1]) / 4
                }
                return t / this.ppq / 4
            }, Object.defineProperty(t.prototype, "ppq", {
                get: function () {
                    return o.get(this)
                }, enumerable: !0, configurable: !0
            }), t.prototype.secondsToTicks = function (t) {
                var e = n.search(this.tempos, t, "time");
                if (-1 !== e) {
                    var i = this.tempos[e], o = i.time, a = t - o, r = a / (60 / i.bpm);
                    return Math.round(i.ticks + r * this.ppq)
                }
                var s = t / .5;
                return Math.round(s * this.ppq)
            }, t.prototype.toJSON = function () {
                return {
                    keySignatures: this.keySignatures,
                    meta: this.meta,
                    name: this.name,
                    ppq: this.ppq,
                    tempos: this.tempos.map(function (t) {
                        return {bpm: t.bpm, ticks: t.ticks}
                    }),
                    timeSignatures: this.timeSignatures
                }
            }, t.prototype.fromJSON = function (t) {
                this.name = t.name, this.tempos = t.tempos.map(function (t) {
                    return Object.assign({}, t)
                }), this.timeSignatures = t.timeSignatures.map(function (t) {
                    return Object.assign({}, t)
                }), this.keySignatures = t.keySignatures.map(function (t) {
                    return Object.assign({}, t)
                }), this.meta = t.meta.map(function (t) {
                    return Object.assign({}, t)
                }), o.set(this, t.ppq), this.update()
            }, t.prototype.setTempo = function (t) {
                this.tempos = [{bpm: t, ticks: 0}], this.update()
            }, t
        }();
        e.Header = a
    }, aOM9: function (t, e, i) {
        "use strict";
        var n = [{title: "自由钢琴 - AutoPiano", desc: "自由钢琴 让你听见内心的声音", url: "http://www.autopiano.cn"}, {
            title: "网易云音乐",
            desc: "音乐的力量 music.163.com",
            url: "https://music.163.com/"
        }, {
            title: "阮一峰的网络日志",
            desc: "http://www.ruanyifeng.com/blog/",
            url: "http://www.ruanyifeng.com/blog/"
        }, {title: "空缺中...", desc: "waiting for you", url: "javascript:;"}];
        e.a = n
    }, adPX: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.instrumentByPatchID = ["acoustic grand piano", "bright acoustic piano", "electric grand piano", "honky-tonk piano", "electric piano 1", "electric piano 2", "harpsichord", "clavi", "celesta", "glockenspiel", "music box", "vibraphone", "marimba", "xylophone", "tubular bells", "dulcimer", "drawbar organ", "percussive organ", "rock organ", "church organ", "reed organ", "accordion", "harmonica", "tango accordion", "acoustic guitar (nylon)", "acoustic guitar (steel)", "electric guitar (jazz)", "electric guitar (clean)", "electric guitar (muted)", "overdriven guitar", "distortion guitar", "guitar harmonics", "acoustic bass", "electric bass (finger)", "electric bass (pick)", "fretless bass", "slap bass 1", "slap bass 2", "synth bass 1", "synth bass 2", "violin", "viola", "cello", "contrabass", "tremolo strings", "pizzicato strings", "orchestral harp", "timpani", "string ensemble 1", "string ensemble 2", "synthstrings 1", "synthstrings 2", "choir aahs", "voice oohs", "synth voice", "orchestra hit", "trumpet", "trombone", "tuba", "muted trumpet", "french horn", "brass section", "synthbrass 1", "synthbrass 2", "soprano sax", "alto sax", "tenor sax", "baritone sax", "oboe", "english horn", "bassoon", "clarinet", "piccolo", "flute", "recorder", "pan flute", "blown bottle", "shakuhachi", "whistle", "ocarina", "lead 1 (square)", "lead 2 (sawtooth)", "lead 3 (calliope)", "lead 4 (chiff)", "lead 5 (charang)", "lead 6 (voice)", "lead 7 (fifths)", "lead 8 (bass + lead)", "pad 1 (new age)", "pad 2 (warm)", "pad 3 (polysynth)", "pad 4 (choir)", "pad 5 (bowed)", "pad 6 (metallic)", "pad 7 (halo)", "pad 8 (sweep)", "fx 1 (rain)", "fx 2 (soundtrack)", "fx 3 (crystal)", "fx 4 (atmosphere)", "fx 5 (brightness)", "fx 6 (goblins)", "fx 7 (echoes)", "fx 8 (sci-fi)", "sitar", "banjo", "shamisen", "koto", "kalimba", "bag pipe", "fiddle", "shanai", "tinkle bell", "agogo", "steel drums", "woodblock", "taiko drum", "melodic tom", "synth drum", "reverse cymbal", "guitar fret noise", "breath noise", "seashore", "bird tweet", "telephone ring", "helicopter", "applause", "gunshot"], e.InstrumentFamilyByID = ["piano", "chromatic percussion", "organ", "guitar", "bass", "strings", "ensemble", "brass", "reed", "pipe", "synth lead", "synth pad", "synth effects", "world", "percussive", "sound effects"], e.DrumKitByPatchID = {
            0: "standard kit",
            8: "room kit",
            16: "power kit",
            24: "electronic kit",
            25: "tr-808 kit",
            32: "jazz kit",
            40: "brush kit",
            48: "orchestra kit",
            56: "sound fx kit"
        }
    }, ax3d: function (t, e, i) {
        var n = i("e8AB")("keys"), o = i("3Eo+");
        t.exports = function (t) {
            return n[t] || (n[t] = o(t))
        }
    }, b56o: function (t, e, i) {
        "use strict";
        var n = ["bg_default.jpg", "bg_eiffel.jpg", "bg_girl.jpg"];
        n = n.map(function (t) {
            return STATIC_PATH + "/images/" + t
        }), e.a = n
    }, bRrM: function (t, e, i) {
        "use strict";
        var n = i("7KvD"), o = i("FeBl"), a = i("evD5"), r = i("+E39"), s = i("dSzd")("species");
        t.exports = function (t) {
            var e = "function" == typeof o[t] ? o[t] : n[t];
            r && e && !e[s] && a.f(e, s, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, bjqT: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "component-page-footer clearfix"}, [i("ul", {staticClass: "footer-ul left-section"}, [i("li", {staticClass: "footer-item"}, [i("a", {
                attrs: {
                    target: "_blank",
                    href: "https://github.com/AutoPiano/AutoPiano"
                }
            }, [i("span", {staticStyle: {"font-weight": "bold"}}, [t._v("Github")]), t._v(" © " + t._s((new Date).getFullYear()))])])])])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, bqBI: function (t, e, i) {
        "use strict";
        var n = [{
            esite: "jd",
            name: "简谱钢琴即兴伴奏教程",
            price: "￥26.7",
            salePerMonth: 132,
            seller: "湖南文艺出版社",
            pic: "5b3b338fNad1559cd.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtYFAcXBFIZWR0yEgdQGlwdBBo3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUCFwZSE10dMnZfHlkMZVdHZCZTAlN2VkcBSARvWlQLWStaJQITBlUdWBMDEgVlK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRBRYEXBpeEgUQA1wrXBULIkwMRR9OWktXC0AOJTIiBGUraxUyETcXdQlGVUIOVRJYRwcSD1AcD0YLRVNQHF0XABdTVExeQAYWN1caWhEL",
            valid: !1
        }, {
            esite: "jd",
            name: "钢琴即兴弹奏流行歌曲100首（简谱版）",
            price: "￥31.10",
            salePerMonth: 57,
            seller: "化学工业出版社",
            pic: "5d4808c716acb007.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtYFAcXBFIZWR0yEgRRGFgdBxY3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBFgRWE14RMhdaEX0ZS2lLZU8BHXdpFGIeUDlLUWILWStaJQITBlUdWBMDEgVlK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRBRYFURteHAsSBFMrXBULIkwMRR9OWktXC0AOJTIiBGUraxUyETcXdVlCUUZXBh5eQQAUBVAYXUdRFABWHgsSUBZSBRJdEQVFN1caWhEL",
            valid: !1
        }, {
            esite: "jd",
            name: "拿起就会！流行钢琴曲超精选",
            price: "￥33.8",
            salePerMonth: 147,
            seller: "湖南文艺出版社",
            pic: "bc56ea5a17a35998.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtYFAcXBFIZWR0yEgRQHlITBRc3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBFwJcHVwQMm9HKxs4SloWZQNlIF1QVV4HQyZjGEQLWStaJQITBlUdWBMDEgVlK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRBRYFURtdEAobBVMrXBULIkwMRR9OWktXC0AOJTIiBGUraxUyETcXdV0XBBNTAk8OQQISBlAdX0ULQldcSFoUChIGVhkIHAFHN1caWhEL",
            valid: !0
        }, {
            esite: "jd",
            name: "卡西欧(CASIO)电子琴 CTK-2500",
            price: "￥699",
            salePerMonth: 684,
            seller: "卡西欧京东自营旗舰店",
            pic: "b8b5a95542c993d2.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyFwJWEl0TBCJDCkMFSjJLQhBaGR4cDF8QTwcKXg1cAAQJS14MQQVYDwtFSlMTBAtHR0pZChUdRUFGfwAXXhABGwFTHWtpZHIGNnguQ2BvUzZZQVFcZ2IKbVhlDh43VCtbFAMSAVYdWhUAIjdVHGtXbMa7xcLPm9WPkYCT%2BsGqi9Leho%2Bjtcq2%2FszgsdW3iGUaaxUGFQNWHV8TCxEEVhprEgIbNx5CBVFZSl4FRQBAMiI3VitrJQIiBGVZNRRRFAYFGlgTARMDUx4OEgFBBAYSXkIEFAVTH1MRBhFSZRlaFAYb",
            valid: !0
        }, {
            esite: "jd",
            name: "卡西欧(CASIO)专业级电子琴 CT-X5000",
            price: "￥3198",
            salePerMonth: 527,
            seller: "卡西欧京东自营旗舰店",
            pic: "28026c18dc573bd5.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyEgZUGloWARsGVR1eJUZNXwtEa0xHV0YXEEULWldTCQQHCllHGAdFBwtEQkQBBRxNVlQYBUkeTVxNCRNLGEF6RwtVGloUAxEEXBpbEwciT1EBGkBmVn41GkFeY2xmNF4jRnxQd1kXaxQyEgZUG10WBBMHVytrFQUiRTvP54XbhomChs3AirPT%2FYKOnp%2FGseLD6r7VqaOCvtQlAyIHURxfFgQbAFATXRQAIgBVEmteW0xDDkMCRVxJUmUraxYyIjdVK1glQHxVURlaEAVFUgYbCUEHR1IBEloWUUcBAhhZQgYTBwUdXiUAEwZREg%3D%3D",
            valid: !1
        }, {
            esite: "jd",
            name: "卡西欧(CASIO)电钢琴 PX-160BK",
            price: "￥3268",
            salePerMonth: 535,
            seller: "卡西欧京东自营旗舰店",
            pic: "2817ecd689819de3.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyEgBSHVIUBSJDCkMFSjJLQhBaGR4cDF8QTwcKXg1cAAQJS14MQQVYDwtFSlMTBAtHR0pZChUdRUFGfwAXWxIFFA5UHGtceGdyNlsaFGFAdRdEX1UCTgIJSz5lDh43VCtbFAMSAVYdWhUAIjdVHGtXbMa7xcLPm9WPkYCT%2BsGqi9Leho%2Bjtcq2%2FszgsdW3iGUaaxUGFQNXH1kXCxEEUR5rEgIbNx5CBVFZSl4FRQBAMiI3VitrJQIiBGVZNRZRQQQGHAgXBUACUh5fFVYaUgAdC0ZXElNVTlsQBkcHZRlaFAYb",
            coupon: "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyEgBSHVIUBSJDCkMFSjJLQhBaGR4cDFwNRA1CVk0YDk5ER1xOGQ1eD0kdS0IJRlVXWFYLVRxcEwsTAEJbV2F7emAhUltRdRNwIngSdRYRcCJyCXZiS39QeBNta2tkKR0tbFdgcxxOH2IAamQiGisQdmtSJ285dkBmfgNLL3ZhV3ExbAZAe0wBM3kzd2VlDxRjIm1rZXQiRSxsakJ%2BJQ9ZYBYQcmUcBxYCUFwTaT5PQlpjLmZSCwdxeTZdVxkyEzdVGloVBBEBVBtZJTISAGVZNcG%2Bgt7BlYyIlMeP9M%2FzjNeZmoGt7M2zudDuv4ywjSIGZRtfEgYQA1cZUhYBFQ9lHFscMlleC18ATVtCWQ5OayUyETdlK1sWMhE3F3VYRlERVFJIWRJQFwBQH1tBCkdSU0sIQAJGBwAbXhFXEjdXGloRCw%3D%3D",
            valid: !0
        }, {
            esite: "jd",
            name: "德国布鲁诺高端立式钢琴UP122",
            price: "￥12989",
            salePerMonth: 396,
            seller: "BRUNO布鲁诺京东自营旗舰店",
            pic: "3c59fe8440c05e15.jpg",
            link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprEwoWBFwSWyVGTV8LRGtMR1dGFxBFC1pXUwkEBwpZRxgHRQcLREJEAQUcTVZUGAVJHk1cTQkTSxhBekcLUxNfFgsbB2VJAhxqFQcCEz5SdG9dI0k8HEISV1J7VxkyEzdVGloVBBEBVBtZJTISAGVNNRUDEwZVGlwcARE3VCtbEQUWBFwaWhIKFQRTK1wVCyJMDEUfTlpLVwtADiUyIgRlK2sVMhE3F3VSHQFCD1xJC0FVRldQGQhCChNUVB0MFwoVB1dPDxcLETdXGloRCw%3D%3D",
            valid: !0
        }];
        e.a = n
    }, crlp: function (t, e, i) {
        var n = i("7KvD"), o = i("FeBl"), a = i("O4g8"), r = i("Kh4W"), s = i("evD5").f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = a ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {value: r.f(t)})
        }
    }, dNDb: function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, dSzd: function (t, e, i) {
        var n = i("e8AB")("wks"), o = i("3Eo+"), a = i("7KvD").Symbol, r = "function" == typeof a;
        (t.exports = function (t) {
            return n[t] || (n[t] = r && a[t] || (r ? a : o)("Symbol." + t))
        }).store = n
    }, dUU9: function (t, e, i) {
        "use strict";

        function n(t) {
            i("jNx3")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i("uLa1"), a = i("OY+1"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.default = l.exports
    }, dW9l: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "PageHeaderComponent",
                staticClass: "component-page-header clearfix"
            }, [t._m(0), t._v(" "), i("div", {staticClass: "menu"}, [i("router-link", {
                staticClass: "menu-item",
                attrs: {to: {path: "/"}, "active-class": "menu-item-active", exact: ""}
            }, [t._v("首页")]), t._v(" "), i("a", {
                staticClass: "menu-item", on: {
                    click: function (e) {
                        return e.stopPropagation(), t.emitChangeWallPaper.apply(null, arguments)
                    }
                }
            }, [t._v("更换壁纸")])], 1)])
        }, o = [function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("a", {
                staticClass: "trade-mark",
                attrs: {target: "_blank", href: "./"}
            }, [i("i", {staticClass: "icon-piano"}), t._v(" "), i("h1", {staticClass: "trade-mark-txt"}, [t._v("自由钢琴"), i("span", {staticClass: "trade-mark-txt--en"}, [t._v("在线演奏")])])])
        }], a = {render: n, staticRenderFns: o};
        e.a = a
    }, dY0y: function (t, e, i) {
        var n = i("dSzd")("iterator"), o = !1;
        try {
            var a = [7][n]();
            a.return = function () {
                o = !0
            }, Array.from(a, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var i = !1;
            try {
                var a = [7], r = a[n]();
                r.next = function () {
                    return {done: i = !0}
                }, a[n] = function () {
                    return r
                }, t(a)
            } catch (t) {
            }
            return i
        }
    }, "dh+D": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.controlChangeNames = {
            1: "modulationWheel",
            2: "breath",
            4: "footController",
            5: "portamentoTime",
            7: "volume",
            8: "balance",
            10: "pan",
            64: "sustain",
            65: "portamentoTime",
            66: "sostenuto",
            67: "softPedal",
            68: "legatoFootswitch",
            84: "portamentoControl"
        }, e.controlChangeIds = Object.keys(e.controlChangeNames).reduce(function (t, i) {
            return t[e.controlChangeNames[i]] = i, t
        }, {});
        var n = new WeakMap, o = new WeakMap, a = function () {
            function t(t, e) {
                n.set(this, e), o.set(this, t.controllerType), this.ticks = t.absoluteTime, this.value = t.value
            }

            return Object.defineProperty(t.prototype, "number", {
                get: function () {
                    return o.get(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return e.controlChangeNames[this.number] ? e.controlChangeNames[this.number] : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "time", {
                get: function () {
                    return n.get(this).ticksToSeconds(this.ticks)
                }, set: function (t) {
                    var e = n.get(this);
                    this.ticks = e.secondsToTicks(t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.toJSON = function () {
                return {number: this.number, ticks: this.ticks, time: this.time, value: this.value}
            }, t
        }();
        e.ControlChange = a
    }, e6n0: function (t, e, i) {
        var n = i("evD5").f, o = i("D2L2"), a = i("dSzd")("toStringTag");
        t.exports = function (t, e, i) {
            t && !o(t = i ? t : t.prototype, a) && n(t, a, {configurable: !0, value: e})
        }
    }, e8AB: function (t, e, i) {
        var n = i("FeBl"), o = i("7KvD"), a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: n.version,
            mode: i("O4g8") ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, erkj: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "component-commodity-card"}, [i("div", {staticClass: "pic-wrap"}, [i("img", {
                staticClass: "pic",
                attrs: {src: STATIC_PATH + "/goodsImgs/" + t.product.pic, alt: t.product.name}
            })]), t._v(" "), i("a", {
                staticClass: "card-section commodity-name",
                attrs: {href: t.product.link, target: "_blank"}
            }, [t._v(t._s(t.product.name))]), t._v(" "), i("div", {staticClass: "card-section clearfix"}, [i("div", {staticClass: "price"}, [i("span", {staticClass: "em"}, [t._v(t._s(t.product.price))]), t._v(" "), i("span", {staticClass: "price-info"}, [t._v("(仅供参考)")])]), t._v(" "), i("div", {staticClass: "sale-count"}, [t._v("月销 "), i("span", {staticClass: "em"}, [t._v(t._s(t.product.salePerMonth))])])]), t._v(" "), i("div", {staticClass: "card-section seller-name"}, [t._v(t._s(t.product.seller))]), t._v(" "), i("div", {staticClass: "card-section btn-wrap"}, [i("a", {
                staticClass: "link-btn",
                attrs: {href: t.product.link, target: "_blank"}
            }, [t._v("去京东购买")])])])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, exGp: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i("//Fk"), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n);
        e.default = function (t) {
            return function () {
                var e = t.apply(this, arguments);
                return new o.default(function (t, i) {
                    function n(a, r) {
                        try {
                            var s = e[a](r), l = s.value
                        } catch (t) {
                            return void i(t)
                        }
                        if (!s.done) return o.default.resolve(l).then(function (t) {
                            n("next", t)
                        }, function (t) {
                            n("throw", t)
                        });
                        t(l)
                    }

                    return n("next")
                })
            }
        }
    }, fJUb: function (t, e, i) {
        var n = i("77Pl"), o = i("EqjI"), a = i("qARP");
        t.exports = function (t, e) {
            if (n(t), o(e) && e.constructor === t) return e;
            var i = a.f(t);
            return (0, i.resolve)(e), i.promise
        }
    }, fS6E: function (t, e, i) {
        i("Kh5d"), t.exports = i("FeBl").Object.getPrototypeOf
    }, fWfb: function (t, e, i) {
        "use strict";
        var n = i("7KvD"), o = i("D2L2"), a = i("+E39"), r = i("kM2E"), s = i("880/"), l = i("06OY").KEY, u = i("S82l"),
            c = i("e8AB"), f = i("e6n0"), d = i("3Eo+"), h = i("dSzd"), p = i("Kh4W"), m = i("crlp"), y = i("Xc4G"),
            g = i("7UMu"), _ = i("77Pl"), v = i("EqjI"), b = i("sB3e"), S = i("TcQ7"), T = i("MmMw"), w = i("X8DO"),
            A = i("Yobk"), k = i("Rrel"), O = i("LKZe"), x = i("1kS7"), P = i("evD5"), F = i("lktj"), C = O.f, D = P.f,
            E = k.f, U = n.Symbol, I = n.JSON, M = I && I.stringify, R = h("_hidden"), N = h("toPrimitive"),
            L = {}.propertyIsEnumerable, G = c("symbol-registry"), j = c("symbols"), B = c("op-symbols"),
            q = Object.prototype, Y = "function" == typeof U && !!x.f, H = n.QObject,
            V = !H || !H.prototype || !H.prototype.findChild, W = a && u(function () {
                return 7 != A(D({}, "a", {
                    get: function () {
                        return D(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, e, i) {
                var n = C(q, e);
                n && delete q[e], D(t, e, i), n && t !== q && D(q, e, n)
            } : D, J = function (t) {
                var e = j[t] = A(U.prototype);
                return e._k = t, e
            }, Q = Y && "symbol" == typeof U.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof U
            }, z = function (t, e, i) {
                return t === q && z(B, e, i), _(t), e = T(e, !0), _(i), o(j, e) ? (i.enumerable ? (o(t, R) && t[R][e] && (t[R][e] = !1), i = A(i, {enumerable: w(0, !1)})) : (o(t, R) || D(t, R, w(1, {})), t[R][e] = !0), W(t, e, i)) : D(t, e, i)
            }, K = function (t, e) {
                _(t);
                for (var i, n = y(e = S(e)), o = 0, a = n.length; a > o;) z(t, i = n[o++], e[i]);
                return t
            }, Z = function (t, e) {
                return void 0 === e ? A(t) : K(A(t), e)
            }, X = function (t) {
                var e = L.call(this, t = T(t, !0));
                return !(this === q && o(j, t) && !o(B, t)) && (!(e || !o(this, t) || !o(j, t) || o(this, R) && this[R][t]) || e)
            }, $ = function (t, e) {
                if (t = S(t), e = T(e, !0), t !== q || !o(j, e) || o(B, e)) {
                    var i = C(t, e);
                    return !i || !o(j, e) || o(t, R) && t[R][e] || (i.enumerable = !0), i
                }
            }, tt = function (t) {
                for (var e, i = E(S(t)), n = [], a = 0; i.length > a;) o(j, e = i[a++]) || e == R || e == l || n.push(e);
                return n
            }, et = function (t) {
                for (var e, i = t === q, n = E(i ? B : S(t)), a = [], r = 0; n.length > r;) !o(j, e = n[r++]) || i && !o(q, e) || a.push(j[e]);
                return a
            };
        Y || (U = function () {
            if (this instanceof U) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function (i) {
                this === q && e.call(B, i), o(this, R) && o(this[R], t) && (this[R][t] = !1), W(this, t, w(1, i))
            };
            return a && V && W(q, t, {configurable: !0, set: e}), J(t)
        }, s(U.prototype, "toString", function () {
            return this._k
        }), O.f = $, P.f = z, i("n0T6").f = k.f = tt, i("NpIQ").f = X, x.f = et, a && !i("O4g8") && s(q, "propertyIsEnumerable", X, !0), p.f = function (t) {
            return J(h(t))
        }), r(r.G + r.W + r.F * !Y, {Symbol: U});
        for (var it = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; it.length > nt;) h(it[nt++]);
        for (var ot = F(h.store), at = 0; ot.length > at;) m(ot[at++]);
        r(r.S + r.F * !Y, "Symbol", {
            for: function (t) {
                return o(G, t += "") ? G[t] : G[t] = U(t)
            }, keyFor: function (t) {
                if (!Q(t)) throw TypeError(t + " is not a symbol!");
                for (var e in G) if (G[e] === t) return e
            }, useSetter: function () {
                V = !0
            }, useSimple: function () {
                V = !1
            }
        }), r(r.S + r.F * !Y, "Object", {
            create: Z,
            defineProperty: z,
            defineProperties: K,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: tt,
            getOwnPropertySymbols: et
        });
        var rt = u(function () {
            x.f(1)
        });
        r(r.S + r.F * rt, "Object", {
            getOwnPropertySymbols: function (t) {
                return x.f(b(t))
            }
        }), I && r(r.S + r.F * (!Y || u(function () {
            var t = U();
            return "[null]" != M([t]) || "{}" != M({a: t}) || "{}" != M(Object(t))
        })), "JSON", {
            stringify: function (t) {
                for (var e, i, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
                if (i = e = n[1], (v(e) || void 0 !== t) && !Q(t)) return g(e) || (e = function (t, e) {
                    if ("function" == typeof i && (e = i.call(this, t, e)), !Q(e)) return e
                }), n[1] = e, M.apply(I, n)
            }
        }), U.prototype[N] || i("hJx8")(U.prototype, N, U.prototype.valueOf), f(U, "Symbol"), f(Math, "Math", !0), f(n.JSON, "JSON", !0)
    }, fZjL: function (t, e, i) {
        t.exports = {default: i("jFbC"), __esModule: !0}
    }, fkB2: function (t, e, i) {
        var n = i("UuGF"), o = Math.max, a = Math.min;
        t.exports = function (t, e) {
            return t = n(t), t < 0 ? o(t + e, 0) : a(t, e)
        }
    }, gsBj: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, ".component-random-lyric{width:100%;min-height:40px;padding:5px 0;margin:0 auto;text-align:center}.component-random-lyric .lyric{display:inline;line-height:30px;font-size:18px;font-style:italic;color:#1f6fb5;cursor:pointer;text-shadow:2px 2px 8px #fff}.component-random-lyric .lyric:hover{color:#1295db}", ""])
    }, h65t: function (t, e, i) {
        var n = i("UuGF"), o = i("52gC");
        t.exports = function (t) {
            return function (e, i) {
                var a, r, s = String(o(e)), l = n(i), u = s.length;
                return l < 0 || l >= u ? t ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === u || (r = s.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? s.charAt(l) : a : t ? s.slice(l, l + 2) : r - 56320 + (a - 55296 << 10) + 65536)
            }
        }
    }, iUbK: function (t, e, i) {
        var n = i("7KvD"), o = n.navigator;
        t.exports = o && o.userAgent || ""
    }, jFbC: function (t, e, i) {
        i("Cdx3"), t.exports = i("FeBl").Object.keys
    }, "jKW+": function (t, e, i) {
        "use strict";
        var n = i("kM2E"), o = i("qARP"), a = i("dNDb");
        n(n.S, "Promise", {
            try: function (t) {
                var e = o.f(this), i = a(t);
                return (i.e ? e.reject : e.resolve)(i.v), e.promise
            }
        })
    }, jNx3: function (t, e, i) {
        var n = i("PnkT");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("5ae08bba", n, !0, {})
    }, ja8J: function (t, e, i) {
        "use strict";
        var n = [{
            name: "小星星",
            step: "C",
            speed: "100",
            degree: 4,
            playing: !1,
            mainTrack: ["1(1)", " 1(1)", " 5(1)", " 5(1)", " 6(1)", " 6(1)", " 5(2)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(1)", " 2(1)", " 1(2)", " 5(1)", " 5(1)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(2)", " 5(1)", " 5(1)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(2)", " 1(1)", " 1(1)", " 5(1)", " 5(1)", " 6(1)", " 6(1)", " 5(2)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(1)", " 2(1)", " 1(2)", "1<(1)", "1<(1)", "5<(1)", "5<(1)", "6<(1)", "6<(1)", "5<(2)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(1)", "2<(1)", "1<(2)", "5<(1)", "5<(1)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(2)", "5<(1)", "5<(1)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(2)", "1<(1)", "1<(1)", "5<(1)", "5<(1)", "6<(1)", "6<(1)", "5<(2)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(1)", "2<(1)", "1<(2)"],
            backingTrack: ["1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "7>>(0.5)", "5>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", " 1(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", " 1(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "7>>(0.5)", "5>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "7>(0.75)", "5(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "1(0.75)", "4(0.25)", "6(0.5)", "1<(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "5>(0.75)", "7>(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "1(0.75)", "4(0.25)", "6(0.5)", "1<(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "5>(0.75)", "7>(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "7>(0.75)", "5(0.25)", "2(0.5)", "5(0.5)", "1>(2)"]
        }, {
            name: "童话镇",
            step: "C",
            speed: "80",
            degree: 2,
            playing: !1,
            mainTrack: ["0(0.5)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(2)", "0(0.5)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(0.75)", "5(0.5)", "3(1)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(2)", "0(0.5)", "7(0.25)", "1<(0.25)", "2<(1)", "0(0.5)", "1<(0.5)", "7(1)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "2<(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "7(0.25)", "3(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "5<(1.25)", "0(0.5)", "3<(0.25)", "3<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.5)", "1<(0.25)", "7(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "2<(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "7(0.25)", "3(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "5<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.5)", "3<(0.25)", "4<(0.25)", "4<(0.5)", "3<(0.75)", "0(0.25)", "3<(0.25)", "3<(0.25)", "6<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "4<(0.5)", "6<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "3<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.25)", "2<(0.25)", "4<(0.5)", "3<(0.75)", "0(0.25)", "3<(0.25)", "3<(0.25)", "6<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "4<(0.5)", "6<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "2<(0.5)", "2<(0.5)", "2<(0.5)", "1<(0.5)", "7(1)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "1<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "6(0.5)", "5(0.5)", "3(1)", "0(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.5)", "6(0.5)", "1<(0.5)", "1<(0.5)", "5<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "6(0.5)", "7(1)", "0(0.5)", "3<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "6<(0.25)", "5<(0.5)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "3<(0.5)", "0(0.5)", "2<(0.25)", "3<(0.25)", "4<(0.5)", "3<(0.5)", "2<(0.5).", "6(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.5)", "1<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "7(0.5)", "7(0.25)", "7(0.25)", "7(0.5)", "6(0.5)", "7(0.75)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "1<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "6(0.5)", "5(0.5)", "3(1)", "0(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.5)", "6(0.5)", "1<(0.5)", "1<(0.5)", "5<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "0(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "6(0.25)", "0(0.25)", "7(1)", "3<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "6<(0.25)", "5<(0.5)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "3<(0.5)", "0(0.5)", "2<(0.25)", "3<(0.25)", "4<(0.5)", "3<(0.5)", "2<(0.5).", "6(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.5)", "1<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "7(0.5)", "7(0.25)", "7(0.25)", "7(0.5)", "6(0.5)", "7(0.75)", "5(0.5)", "7(0.5)", "6(1)", "1<(0.5)", "2<(0.5)", "3<(1)", "0(0.5)", "3<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "3<(0.25)", "5<(0.25)", "5<(0.25)", "3<(0.25)", "2<(0.25)", "5<(0.25)", "3<(0.25)", "5<(0.25)", "3<(1)", "0(0.5)", "4<(0.75)", "3<(0.25)", "2<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(1)", "7(0.75)", "6(0.25)", "7(0.5)", "1<(0.5)", "7(2)"]
        }, {
            name: "Cannon in D (D大调卡农)",
            step: "D",
            speed: "75",
            degree: 5,
            playing: !1,
            mainTrack: ["0(0.5)", "3(0.5)", "5(0.5)", "1<(0.5)", "0(0.5)", "2(0.5)", "5(0.5)", "7(0.5)", "0(0.5)", "1(0.5)", "3(0.5)", "6(0.5)", "0(0.5)", "7>(0.5)", "3(0.5)", "5(0.5)", "0(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "0(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "0(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "0(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "3<(2)", "2<(2)", "1<(2)", "7(2)", "6(2)", "5(2)", "6(2)", "7(2)", "1<(2)", "7(2)", "6(2)", "5(2)", "4(2)", "3(2)", "4(2)", "2(2)", "1<(0.5)", "7(0.5)", "1<(0.5)", "1(0.5)", "7>(0.5)", "5(0.5)", "2(0.5)", "3(0.5)", "1(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "1(0.5)", "2(0.5)", "3(0.5)", "4(0.5)", "5(0.5)", "2(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "1(0.5)", "6>(0.5)", "6(0.5)", "7(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "6(0.5)", "5(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(1)", "3<(1)", "2<(2)", "0(1)", "1<(1)", "3<(2)", "1<(1.5)", "1<(0.5)", "0(1)", "0(1)", "1<(1)", "4<(1)", "2<(1)", "5<(1)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "5(0.25)", "4(0.25)", "5(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "4(0.5)", "3(0.25)", "2(0.25)", "3(0.25)", "2(0.25)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.25)", "1<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "5(0.25)", "4(0.25)", "5(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "4(0.5)", "3(0.25)", "2(0.25)", "3(0.25)", "2(0.25)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.25)", "1<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "2<(0.25)", "1<(0.25)", "7(0.25)", "1<(0.5)", "6(0.25)", "7(0.25)", "1<(0.5)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "3(0.25)", "2(0.25)", "3(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "6(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.25)", "4(0.25)", "5(0.25)", "4(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "6(0.5)", "1<(0.25)", "7(0.25)", "1<(0.5)", "7(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "6(0.25)", "7(0.25)", "3<(0.5)", "3(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "2<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "3(0.5)", "1(0.5)", "6(0.5)", "5(0.5)", "5>(0.5)", "4>(0.5)", "5>(0.5)", "6>(0.5)", "6(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "5>(0.5)", "4>(0.5)", "5>(0.5)", "6>(0.5)", "6(0.5)", "5(0.5)", "6(0.5)", "7(0.5)", "7>(0.5)", "6>(0.5)", "7>(0.5)", "3(0.5)", "1<(0.25)", "7(0.25)", "1<(0.5)", "3(0.5)", "5(0.5)", "5(0.25)", "6(0.25)", "7(0.5)", "5(0.5)", "3(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "1<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "7(0.5)", "6(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.5)", "1<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "3<(0.5)", "4<(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "6(0.5)", "5(1)", "5(0.5)", "4(0.5)", "3(1.5)", "3<(0.5)", "3<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(1.5)", "1<(0.5)", "1<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(2)", "1<(2)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "5(1.5)", "5(0.5)", "5(1.5)", "5<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "4<(0.5)", "3<(1.5)", "3<(0.5)", "3<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "5(1.5)", "5(0.5)", "4(1)", "1<(1)", "7(1.5)", "7(0.5)", "1<(1)", "1(1)", "7>(1)", "7(1)", "6(1)", "6>(1)", "5>(1)", "5(1)", "4(1)", "4<(1)", "3<(1)", "3(1)", "2(1)", "6(1)", "2(1)", "2<(1)", "3<(1)", "3(1)", "2(1)", "2<(1)", "1<(1)", "1(1)", "7>(1)", "7(1)", "6(1)", "6<(1)", "5<(1)", "5(1)", "4(1)", "1<(0.5)", "2<(0.5)", "6(1)", "7(1)", "1<(4)"],
            backingTrack: ["1(2)", "5>(2)", "6>(2)", "3>(2)", "4>(2)", "1>(2)", "4>(2)", "5>(2)", "1(0.5)", "3(0.5)", "5(0.5)", "1<(0.5)", "5>(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "6>(0.5)", "1(0.5)", "3(0.5)", "6(0.5)", "3>(0.5)", "5>(0.5)", "7>(0.5)", "3(0.5)", "4>(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "4>(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "5>(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "0(1)", "0(1)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1(4)"]
        }, {
            name: "天空之城",
            step: "D",
            speed: "95",
            degree: 5,
            playing: !1,
            mainTrack: ["6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(1)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "4(0.5)", "3(0.5)", "4(1.5)", "3(0.5)", "4(1)", "1<(1)", "3(2)", "0(0.5)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "7(1.5)", "3(0.5)", "4(1)", "7(1)", "7(2)", "0(1)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(0.5)", "3(0.5)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "3(1)", "4(1)", "1<(0.5)", "7(1.5)", "1<(1)", "2<(1)", "3<(0.5)", "1<(2.5)", "1<(0.5)", "7(0.5)", "6(1)", "7(1)", "5(1)", "6(3)", "1<(0.5)", "2<(0.5)", "3<(1.5)", "2<(0.5)", "3<(1)", "5<(1)", "2<(2)", "0(1)", "5(0.5)", "5(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "3<(3)", "0(1)", "6(0.5)", "7(0.5)", "1<(1)", "7(0.5)", "1<(0.5)", "2<(1)", "1<(1.5)", "5(0.5)", "5(2)", "4<(1)", "3<(1)", "2<(1)", "1<(1)", "3<(4)", "3<(3)", "3<(1)", "6<(2)", "5<(2)", "3<(1)", "2<(0.5)", "1<(2.5)", "2<(1)", "1<(0.5)", "2<(1.5)", "5<(1)", "3<(3)", "3<(1)", "6<(2)", "5<(2)", "3<(1)", "2<(0.5)", "1<(2.5)", "2<(1)", "1<(0.5)", "2<(1.5)", "7(1)", "6(3)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(1)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "4(0.5)", "3(0.5)", "4(1.5)", "3(0.5)", "4(1)", "1<(1)", "3(2)", "0(0.5)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "7(1.5)", "3(0.5)", "4(1)", "7(1)", "7(2)", "0(1)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(0.5)", "3(0.5)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "3(1)", "4(1)", "1<(0.5)", "7(1.5)", "1<(1)", "2<(1)", "3<(0.5)", "1<(2.5)", "1<(0.5)", "7(0.5)", "6(1)", "7(1)", "5(1)", "6(4)"],
            backingTrack: ["0(1)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "1>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "3>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "3>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "7>>(0.5)", "4>(0.5)", "7>(0.5)", "2>(0.5)", "4>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "4>>(0.5)", "1>(0.5)", "4>>(0.5)", "1>(0.5)", "3>>(0.5)", "7>>(0.5)", "3>>(0.5)", "7>>(0.5)", "6>>(4)"]
        }];
        e.a = n
    }, knuC: function (t, e) {
        t.exports = function (t, e, i) {
            var n = void 0 === i;
            switch (e.length) {
                case 0:
                    return n ? t() : t.call(i);
                case 1:
                    return n ? t(e[0]) : t.call(i, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
            }
            return t.apply(i, e)
        }
    }, kuyN: function (t, e, i) {
        var n = i("wZa5");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("74f2e29e", n, !0, {})
    }, "l+yi": function (t, e, i) {
        var n = i("IRP5");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("f50aa70c", n, !0, {})
    }, lktj: function (t, e, i) {
        var n = i("Ibhu"), o = i("xnc9");
        t.exports = Object.keys || function (t) {
            return n(t, o)
        }
    }, mAdO: function (t, e, i) {
        "use strict";
        var n = i("0Rnz"), o = i("2uFj");
        e.a = {
            name: "CommodityList", components: {CommodityCard: n.a}, mixins: [], props: [], data: function () {
                return {AllGoods: o.a}
            }, computed: {
                ValidGoods: function () {
                    return this.AllGoods.filter(function (t) {
                        return t.valid
                    })
                }
            }, watch: {}, mounted: function () {
                this.fetchRemoteData()
            }, methods: {
                fetchRemoteData: function () {
                    var t = this;
                    $.ajax({
                        type: "GET", url: STATIC_PATH + "/data/goods.json", success: function (e) {
                            e && e.length > 0 && (t.AllGoods = e)
                        }
                    })
                }, scrollList: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left";
                    this.scrollList.timer && clearTimeout(this.scrollList.timer), this.scrollList.timer = setTimeout(function () {
                        var i = t.$refs.listWrap, n = t.$refs.scroll, o = n.scrollLeft || 0, a = 0,
                            r = i.offsetWidth / 4;
                        "left" == e ? a = -r : "right" == e && (a = r), $(n).animate({scrollLeft: o + a}, 100)
                    }, 200)
                }
            }
        }
    }, msXi: function (t, e, i) {
        var n = i("77Pl");
        t.exports = function (t, e, i, o) {
            try {
                return o ? e(n(i)[0], i[1]) : e(i)
            } catch (e) {
                var a = t.return;
                throw void 0 !== a && n(a.call(t)), e
            }
        }
    }, n0T6: function (t, e, i) {
        var n = i("Ibhu"), o = i("xnc9").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return n(t, o)
        }
    }, nVdG: function (t, e, i) {
        "use strict";

        function n(t) {
            for (var e = [], i = 0; i < t.length; i++) for (var n = e.length, o = new Map, a = Array(16).fill(0), r = 0, s = t[i]; r < s.length; r++) {
                var l = s[r], u = n, c = l.channel;
                if (void 0 !== c) {
                    "programChange" === l.type && (a[c] = l.programNumber);
                    var f = a[c], d = f + " " + c;
                    o.has(d) ? u = o.get(d) : (u = n + o.size, o.set(d, u))
                }
                e[u] || e.push([]), e[u].push(l)
            }
            return e
        }

        var o = this && this.__awaiter || function (t, e, i, n) {
            function o(t) {
                return t instanceof i ? t : new i(function (e) {
                    e(t)
                })
            }

            return new (i || (i = Promise))(function (i, a) {
                function r(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function s(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function l(t) {
                    t.done ? i(t.value) : o(t.value).then(r, s)
                }

                l((n = n.apply(t, e || [])).next())
            })
        }, a = this && this.__generator || function (t, e) {
            function i(t) {
                return function (e) {
                    return n([t, e])
                }
            }

            function n(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; l;) try {
                    if (o = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                    switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return l.label++, {value: i[1], done: !1};
                        case 5:
                            l.label++, a = i[1], i = [0];
                            continue;
                        case 7:
                            i = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (r = l.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                l.label = i[1];
                                break
                            }
                            if (6 === i[0] && l.label < r[1]) {
                                l.label = r[1], r = i;
                                break
                            }
                            if (r && l.label < r[2]) {
                                l.label = r[2], l.ops.push(i);
                                break
                            }
                            r[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    i = e.call(t, l)
                } catch (t) {
                    i = [6, t], a = 0
                } finally {
                    o = r = 0
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0}
            }

            var o, a, r, s, l = {
                label: 0, sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                }, trys: [], ops: []
            };
            return s = {
                next: i(0),
                throw: i(1),
                return: i(2)
            }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                return this
            }), s
        };
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i("RPVc"), s = i("aC9z"), l = i("aG7E"), u = i("C1HX"), c = function () {
            function t(t) {
                var e = this, i = null;
                t && (t instanceof ArrayBuffer && (t = new Uint8Array(t)), i = r.parseMidi(t), i.tracks.forEach(function (t) {
                    var e = 0;
                    t.forEach(function (t) {
                        e += t.deltaTime, t.absoluteTime = e
                    })
                }), i.tracks = n(i.tracks)), this.header = new l.Header(i), this.tracks = [], t && (this.tracks = i.tracks.map(function (t) {
                    return new u.Track(t, e.header)
                }), 1 === i.header.format && 0 === this.tracks[0].duration && this.tracks.shift())
            }

            return t.fromUrl = function (e) {
                return o(this, void 0, void 0, function () {
                    var i, n;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, fetch(e)];
                            case 1:
                                return i = o.sent(), i.ok ? [4, i.arrayBuffer()] : [3, 3];
                            case 2:
                                return n = o.sent(), [2, new t(n)];
                            case 3:
                                throw new Error("could not load " + e)
                        }
                    })
                })
            }, Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return this.header.name
                }, set: function (t) {
                    this.header.name = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "duration", {
                get: function () {
                    var t = this.tracks.map(function (t) {
                        return t.duration
                    });
                    return Math.max.apply(Math, t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "durationTicks", {
                get: function () {
                    var t = this.tracks.map(function (t) {
                        return t.durationTicks
                    });
                    return Math.max.apply(Math, t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.addTrack = function () {
                var t = new u.Track(void 0, this.header);
                return this.tracks.push(t), t
            }, t.prototype.toArray = function () {
                return s.encode(this)
            }, t.prototype.toJSON = function () {
                return {
                    header: this.header.toJSON(), tracks: this.tracks.map(function (t) {
                        return t.toJSON()
                    })
                }
            }, t.prototype.fromJSON = function (t) {
                var e = this;
                this.header = new l.Header, this.header.fromJSON(t.header), this.tracks = t.tracks.map(function (t) {
                    var i = new u.Track(void 0, e.header);
                    return i.fromJSON(t), i
                })
            }, t.prototype.clone = function () {
                var e = new t;
                return e.fromJSON(this.toJSON()), e
            }, t
        }();
        e.Midi = c;
        var f = i("C1HX");
        e.Track = f.Track;
        var d = i("aG7E");
        e.Header = d.Header
    }, nql0: function (t, e, i) {
        var n = i("HmLE");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("1169b603", n, !0, {})
    }, pFYg: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var o = i("Zzip"), a = n(o), r = i("5QVw"), s = n(r),
            l = "function" == typeof s.default && "symbol" == typeof a.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof s.default && "symbol" === l(a.default) ? function (t) {
            return void 0 === t ? "undefined" : l(t)
        } : function (t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : l(t)
        }
    }, pOB4: function (t, e, i) {
        "use strict";

        function n(t) {
            i("l+yi")
        }

        var o = i("mAdO"), a = i("VN1t"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, q00e: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, '.component-autopiano{width:100%;position:relative;color:#000}.component-autopiano #audioEffectCanvas{display:none}.component-autopiano .piano-scroll-wrap{width:100%;overflow:scroll}.component-autopiano .piano-wrap.visible{opacity:1}.component-autopiano .piano-wrap{width:90%;margin:20px auto;-webkit-box-shadow:5px 5px 20px 5px #888;box-shadow:5px 5px 20px 5px #888;border-radius:5px;position:relative;overflow:hidden;opacity:0}.component-autopiano .piano-wrap .piano-band{width:100%;height:40px;line-height:40px;background:#000;-webkit-box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);border-width:3px 2px 2px;border-style:solid;border-color:#555 #222 #111 #777;position:relative}.component-autopiano .piano-wrap .piano-band .piano-band-img{width:130px;height:100%;position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.component-autopiano .piano-wrap .piano-band .piano-tip{position:absolute;top:50%;right:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#fff;font-size:14px}.component-autopiano .piano-wrap .piano-key-wrap{width:100%;background:#373737;overflow:hidden;position:relative}.component-autopiano .piano-wrap .piano-key-wrap .piano-key:hover{cursor:pointer}.component-autopiano .piano-wrap .piano-key-wrap .wkey{display:inline-block;width:2.775%;height:100%;margin:0 auto;background:#fff;background:linear-gradient(-30deg,#f5f5f5,#fff);border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 1px 0 0 #fff,inset -1px 0 0 #fff,0 4px 3px rgba(0,0,0,.7);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 1px 0 0 #fff,inset -1px 0 0 #fff,0 4px 3px rgba(0,0,0,.7);border-radius:0 0 5px 5px;position:relative}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:-1%;height:99%;background:#efefef}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;left:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip{width:100%;color:#373737;text-align:center;font-size:14px;position:absolute;bottom:5%}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .keyname{margin-bottom:5px}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .notename{color:#1295db;font-weight:700}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:-1%;height:99%;background:#efefef}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;left:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey{display:inline-block;width:10%;height:70%;background:linear-gradient(-20deg,#333,#000,#333);border-width:1px 2px 7px;border-style:solid;border-color:#666 #222 #111 #555;border-radius:0 0 2px 2px;-webkit-box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);position:absolute;top:0;overflow:hidden}.component-autopiano .piano-wrap .piano-key-wrap .bkey:active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000}.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip{width:100%;color:#fff;position:absolute;left:0;bottom:5%;font-size:14px;overflow:hidden}.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip .keyname{width:100%;text-align:center}.component-autopiano .piano-wrap .piano-key-wrap .bkey-active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:0;height:100%;background:#facc94!important}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;top:0;left:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;left:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey.auto-key-active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;background:#facc94!important}.component-autopiano .piano-wrap .piano-key-wrap .bkey:first-child{left:9%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(2){left:23%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(3){left:50%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(4){left:65%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(5){left:79%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap{width:20%;height:0;position:absolute;top:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap1{left:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap2{left:19.5%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap3{left:39%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap4{left:58.3%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap5{left:77.7%}.component-autopiano .piano-options{width:90%;height:50px;margin:10px auto 15px;padding:0;position:relative}.component-autopiano .piano-options .option-item-wrap{position:absolute;right:1%}.component-autopiano .piano-options .option-item{display:inline-block;height:50px;line-height:50px;margin:0 15px}.component-autopiano .piano-options .option-item .label>input{display:none}.component-autopiano .piano-options .option-item .label i{display:inline-block;margin-left:5px;padding:2px;width:40px;height:20px;border-radius:13px;vertical-align:middle;-webkit-transition:.25s .09s;transition:.25s .09s;position:relative;background:#d8d9db;-webkit-box-sizing:initial;box-sizing:initial}.component-autopiano .piano-options .option-item .label i:after{content:" ";display:block;width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;left:2px;-webkit-transition:.25s;transition:.25s}.component-autopiano .piano-options .option-item .label>input:checked+i{background:#07e26d}.component-autopiano .piano-options .option-item .label>input:checked+i:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.component-autopiano .piano-options .option-item .label:hover{cursor:pointer}', ""])
    }, qARP: function (t, e, i) {
        "use strict";

        function n(t) {
            var e, i;
            this.promise = new t(function (t, n) {
                if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
                e = t, i = n
            }), this.resolve = o(e), this.reject = o(i)
        }

        var o = i("lOnJ");
        t.exports.f = function (t) {
            return new n(t)
        }
    }, qio6: function (t, e, i) {
        var n = i("evD5"), o = i("77Pl"), a = i("lktj");
        t.exports = i("+E39") ? Object.defineProperties : function (t, e) {
            o(t);
            for (var i, r = a(e), s = r.length, l = 0; s > l;) n.f(t, i = r[l++], e[i]);
            return t
        }
    }, r307: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "PianoComponent",
                staticClass: "component-autopiano"
            }, [i("div", {staticClass: "piano-scroll-wrap"}, [i("div", {
                staticClass: "piano-wrap responsive-section-a",
                class: {visible: t.pianoShow}
            }, [i("div", {staticClass: "piano-band"}, [i("img", {
                staticClass: "piano-band-img",
                attrs: {src: t.bandImg, alt: ""}
            }), t._v(" "), i("div", {staticClass: "piano-tip"}, [t._v("⇧ 代表 shift 键")])]), t._v(" "), i("div", {staticClass: "piano-key-wrap"}, [t._l(t.Notes, function (e) {
                return "white" == e.type ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key wkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname"
                }, [t._v(t._s(e.key))]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showNoteName,
                        expression: "showNoteName"
                    }], staticClass: "notename"
                }, [t._v(t._s(e.name))])])]) : t._e()
            }), t._v(" "), i("div", {staticClass: "bkey-wrap bkey-wrap1"}, t._l(t.Notes, function (e) {
                return "black" == e.type && e.id >= 36 && e.id <= 40 ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key bkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname", domProps: {innerHTML: t._s(e.key)}
                })])]) : t._e()
            }), 0), t._v(" "), i("div", {staticClass: "bkey-wrap bkey-wrap2"}, t._l(t.Notes, function (e) {
                return "black" == e.type && e.id >= 41 && e.id <= 45 ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key bkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname", domProps: {innerHTML: t._s(e.key)}
                })])]) : t._e()
            }), 0), t._v(" "), i("div", {staticClass: "bkey-wrap bkey-wrap3"}, t._l(t.Notes, function (e) {
                return "black" == e.type && e.id >= 46 && e.id <= 50 ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key bkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname", domProps: {innerHTML: t._s(e.key)}
                })])]) : t._e()
            }), 0), t._v(" "), i("div", {staticClass: "bkey-wrap bkey-wrap4"}, t._l(t.Notes, function (e) {
                return "black" == e.type && e.id >= 51 && e.id <= 55 ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key bkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname", domProps: {innerHTML: t._s(e.key)}
                })])]) : t._e()
            }), 0), t._v(" "), i("div", {staticClass: "bkey-wrap bkey-wrap5"}, t._l(t.Notes, function (e) {
                return "black" == e.type && e.id >= 56 && e.id <= 60 ? i("div", {
                    key: e.keyCode,
                    staticClass: "piano-key bkey",
                    attrs: {"data-keyCode": e.keyCode, "data-name": e.name},
                    on: {
                        click: function (i) {
                            return i.stopPropagation(), t.clickPianoKey(i, e.keyCode)
                        }
                    }
                }, [i("div", {staticClass: "keytip"}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showKeyName,
                        expression: "showKeyName"
                    }], staticClass: "keyname", domProps: {innerHTML: t._s(e.key)}
                })])]) : t._e()
            }), 0)], 2)])]), t._v(" "), i("div", {staticClass: "piano-options responsive-section-a"}, [i("div", {staticClass: "option-item-wrap"}, [i("div", {staticClass: "option-item"}, [i("label", {staticClass: "label"}, [t._v("\n          显示按键提示\n          "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.showKeyName,
                    expression: "showKeyName"
                }],
                attrs: {type: "checkbox", id: "keyname"},
                domProps: {checked: Array.isArray(t.showKeyName) ? t._i(t.showKeyName, null) > -1 : t.showKeyName},
                on: {
                    change: function (e) {
                        var i = t.showKeyName, n = e.target, o = !!n.checked;
                        if (Array.isArray(i)) {
                            var a = t._i(i, null);
                            n.checked ? a < 0 && (t.showKeyName = i.concat([null])) : a > -1 && (t.showKeyName = i.slice(0, a).concat(i.slice(a + 1)))
                        } else t.showKeyName = o
                    }
                }
            }), t._v(" "), i("i")])]), t._v(" "), i("div", {staticClass: "option-item"}, [i("label", {staticClass: "label"}, [t._v("\n          显示音名\n          "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.showNoteName,
                    expression: "showNoteName"
                }],
                attrs: {type: "checkbox", id: "notename"},
                domProps: {checked: Array.isArray(t.showNoteName) ? t._i(t.showNoteName, null) > -1 : t.showNoteName},
                on: {
                    change: function (e) {
                        var i = t.showNoteName, n = e.target, o = !!n.checked;
                        if (Array.isArray(i)) {
                            var a = t._i(i, null);
                            n.checked ? a < 0 && (t.showNoteName = i.concat([null])) : a > -1 && (t.showNoteName = i.slice(0, a).concat(i.slice(a + 1)))
                        } else t.showNoteName = o
                    }
                }
            }), t._v(" "), i("i")])])])]), t._v(" "), i("canvas", {
                ref: "audioEffectCanvas",
                attrs: {id: "audioEffectCanvas"}
            }, [t._v("您的浏览器不支持"), i("pre", [t._v("Canvas")]), t._v("。请升级到最新版的chrome、firefox、edge等浏览器。")])])
        }, o = [], a = {render: n, staticRenderFns: o};
        e.a = a
    }, s4sV: function (t, e, i) {
        var n = i("sT9f");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("90aeb414", n, !0, {})
    }, sB3e: function (t, e, i) {
        var n = i("52gC");
        t.exports = function (t) {
            return Object(n(t))
        }
    }, sT9f: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, '.component-page-footer{width:100%;min-width:1280px;height:40px;line-height:40px;background:hsla(0,0%,100%,.8);border-top:1px solid #ccc;position:fixed;bottom:0;text-align:center}.component-page-footer .footer-ul{width:auto;height:100%}.component-page-footer .footer-ul .footer-item{display:inline;list-style:none;position:relative}.component-page-footer .footer-ul .footer-item a:hover{color:#fff;background:#1295db}.component-page-footer .footer-ul .footer-item a.em{color:#ef496f}.component-page-footer .footer-ul .footer-item a.em:hover{color:#fff;background:#ef496f}.component-page-footer .footer-ul.left-section{float:left;margin-left:5%}.component-page-footer .footer-ul.right-section{float:right;margin-right:5%}.component-page-footer .popup-container{width:200px;height:260px;position:absolute;top:-285px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:200;background:#fff;-webkit-box-shadow:1px 1px 10px 1px #ddd;box-shadow:1px 1px 10px 1px #ddd}.component-page-footer .popup-container:after{content:"";width:20px;height:20px;position:absolute;left:50%;bottom:-10px;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);z-index:150;background:#fff}.component-page-footer .popup-container .tab-wrap{width:100%;height:60px}.component-page-footer .popup-container .tab-wrap .tab{width:50%;height:100%;float:left;cursor:pointer}.component-page-footer .popup-container .tab-wrap .tab.active-tab{border-bottom:5px solid #1295db}.component-page-footer .popup-container .tab-wrap .tab .icon{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 0;transform-origin:50% 0;margin-top:14px}.component-page-footer .popup-container .qrcode-wrap{width:100%;padding:12px 18px}.component-page-footer .popup-container .qrcode-wrap .money{width:100%;height:14px;line-height:14px;font-size:14px;margin:0}.component-page-footer .popup-container .qrcode-wrap .qrcode{width:100%}', ""])
    }, t8x9: function (t, e, i) {
        var n = i("77Pl"), o = i("lOnJ"), a = i("dSzd")("species");
        t.exports = function (t, e) {
            var i, r = n(t).constructor;
            return void 0 === r || void 0 == (i = n(r)[a]) ? e : o(i)
        }
    }, u2KI: function (t, e, i) {
        t.exports = {default: i("O4R0"), __esModule: !0}
    }, uHpY: function (t, e, i) {
        var n = i("gsBj");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("2a5c5ec6", n, !0, {})
    }, uLa1: function (t, e, i) {
        "use strict";
        var n = i("Dd8w"), o = i.n(n), a = (i("VSxz"), i("+ZRt")), r = i("TVmP"), s = i("5JHN"), l = i("vlkY"),
            u = i("Z2zZ"), c = i("CjT/"), f = i("pOB4"), d = i("NYxO");
        i("2uFj");
        e.a = {
            name: "AutoPianoPC",
            components: {
                PageHeader: a.a,
                PageFooter: r.a,
                RandomLyric: s.a,
                Piano: l.a,
                ManualPlayScoreList: u.a,
                AutoPlayScoreList: c.a,
                CommodityList: f.a
            },
            data: function () {
                return {percent: 0, rightDrawerShow: !1}
            },
            computed: o()({}, i.i(d.b)(["$currentWallpaper"]), {
                appBgStyle: function () {
                    return "background-image: url(" + this.$currentWallpaper + ");"
                }
            }),
            mounted: function () {
            },
            methods: {
                toggleRightDrawer: function () {
                    this.rightDrawerShow = !this.rightDrawerShow
                }, hideRightDrawer: function () {
                    this.rightDrawerShow = !1
                }
            }
        }
    }, uTwv: function (t, e, i) {
        t.exports = i.p + "static/img/wxqr.543cb70.png"
    }, uqUo: function (t, e, i) {
        var n = i("kM2E"), o = i("FeBl"), a = i("S82l");
        t.exports = function (t, e) {
            var i = (o.Object || {})[t] || Object[t], r = {};
            r[t] = e(i), n(n.S + n.F * a(function () {
                i(1)
            }), "Object", r)
        }
    }, "vFc/": function (t, e, i) {
        var n = i("TcQ7"), o = i("QRG4"), a = i("fkB2");
        t.exports = function (t) {
            return function (e, i, r) {
                var s, l = n(e), u = o(l.length), c = a(r, u);
                if (t && i != i) {
                    for (; u > c;) if ((s = l[c++]) != s) return !0
                } else for (; u > c; c++) if ((t || c in l) && l[c] === i) return t || c || 0;
                return !t && -1
            }
        }
    }, "vIB/": function (t, e, i) {
        "use strict";
        var n = i("O4g8"), o = i("kM2E"), a = i("880/"), r = i("hJx8"), s = i("/bQp"), l = i("94VQ"), u = i("e6n0"),
            c = i("PzxK"), f = i("dSzd")("iterator"), d = !([].keys && "next" in [].keys()), h = function () {
                return this
            };
        t.exports = function (t, e, i, p, m, y, g) {
            l(i, e, p);
            var _, v, b, S = function (t) {
                    if (!d && t in k) return k[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new i(this, t)
                            }
                    }
                    return function () {
                        return new i(this, t)
                    }
                }, T = e + " Iterator", w = "values" == m, A = !1, k = t.prototype,
                O = k[f] || k["@@iterator"] || m && k[m], x = O || S(m), P = m ? w ? S("entries") : x : void 0,
                F = "Array" == e ? k.entries || O : O;
            if (F && (b = c(F.call(new t))) !== Object.prototype && b.next && (u(b, T, !0), n || "function" == typeof b[f] || r(b, f, h)), w && O && "values" !== O.name && (A = !0, x = function () {
                return O.call(this)
            }), n && !g || !d && !A && k[f] || r(k, f, x), s[e] = x, s[T] = h, m) if (_ = {
                values: w ? x : S("values"),
                keys: y ? x : S("keys"),
                entries: P
            }, g) for (v in _) v in k || a(k, v, _[v]); else o(o.P + o.F * (d || A), e, _);
            return _
        }
    }, vYTo: function (t, e, i) {
        "use strict";

        function n(t, e) {
            t.hasOwnProperty("className") ? t.className = e : t.setAttribute("class", e)
        }

        function o(t, e) {
            return new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className)
        }

        function a(t, e) {
            if (t.classList) {
                e.split(" ").map(function (e) {
                    return t.classList.add(e)
                })
            } else {
                var i = " " + (t.getAttribute("class") || "") + " ";
                i.indexOf(" " + e + " ") < 0 && n(t, (i + e).trim())
            }
        }

        function r(t, e) {
            if (t.classList) t.classList.remove(e); else {
                for (var i = " " + (t.getAttribute("class") || "") + " ", o = " " + e + " "; i.indexOf(o) >= 0;) i = i.replace(o, " ");
                n(t, i.trim())
            }
            t.className || t.removeAttribute("class")
        }

        function s(t) {
            return (s = "function" == typeof k.a && "symbol" === w()(S.a) ? function (t) {
                return void 0 === t ? "undefined" : w()(t)
            } : function (t) {
                return t && "function" == typeof k.a && t.constructor === k.a && t !== k.a.prototype ? "symbol" : void 0 === t ? "undefined" : w()(t)
            })(t)
        }

        function l(t, e, i) {
            function n(e) {
                var i = y, n = g;
                return y = g = void 0, T = e, v = t.apply(n, i)
            }

            function o(t, e) {
                return O ? requestAnimationFrame(t) : setTimeout(t, e)
            }

            function a(t) {
                if (O) return cancelAnimationFrame(t);
                clearTimeout(t)
            }

            function r(t) {
                return T = t, b = o(c, e), w ? n(t) : v
            }

            function l(t) {
                var i = t - S, n = t - T, o = e - i;
                return A ? Math.min(o, _ - n) : o
            }

            function u(t) {
                var i = t - S, n = t - T;
                return void 0 === S || i >= e || i < 0 || A && n >= _
            }

            function c() {
                var t = Date.now();
                if (u(t)) return f(t);
                b = o(c, l(t))
            }

            function f(t) {
                return b = void 0, k && y ? n(t) : (y = g = void 0, v)
            }

            function d() {
                void 0 !== b && a(b), T = 0, y = S = g = b = void 0
            }

            function h() {
                return void 0 === b ? v : f(Date.now())
            }

            function p() {
                return void 0 !== b
            }

            function m() {
                for (var t = Date.now(), i = u(t), a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
                if (y = s, g = this, S = t, i) {
                    if (void 0 === b) return r(S);
                    if (A) return b = o(c, e), n(S)
                }
                return void 0 === b && (b = o(c, e)), v
            }

            var y, g, _, v, b, S, T = 0, w = !1, A = !1, k = !0,
                O = !e && 0 !== e && "function" == typeof requestAnimationFrame;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return e = +e || 0, "object" === s(i) && (w = !!i.leading, A = "maxWait" in i, _ = A ? Math.max(+i.maxWait || 0, e) : _, k = "trailing" in i ? !!i.trailing : k), m.cancel = d, m.flush = h, m.pending = p, m
        }

        function u(t, e, i) {
            var n = !0, o = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return "object" === s(i) && (n = "leading" in i ? !!i.leading : n, o = "trailing" in i ? !!i.trailing : o), l(t, e, {
                leading: n,
                maxWait: e,
                trailing: o
            })
        }

        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            return new x.a(function (n, o) {
                "function" != typeof t && o(new Error(t + " is not a function"));
                var a = +new Date + e(function e() {
                    if (t()) n(t()); else {
                        if (+new Date < a) return setTimeout(e, i);
                        o(new Error("timed out for " + fn + ": " + arguments))
                    }
                })()
            })
        }

        function f() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = void 0, n = t;
            return function () {
                return n && (i = n.apply(e || this, arguments), n = void 0), i
            }
        }

        function d(t) {
            return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)
        }

        function h(t) {
            return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)
        }

        function p(t) {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)
        }

        function m(t) {
            return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(t)
        }

        var y = i("woOf"), g = i.n(y), _ = i("Zx67"), v = i.n(_), b = i("Zzip"), S = i.n(b), T = i("pFYg"), w = i.n(T),
            A = i("5QVw"), k = i.n(A), O = i("//Fk"), x = i.n(O), P = i("fZjL"), F = i.n(P), C = i("u2KI"), D = i.n(C),
            E = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "green";
                t = toString(t) || "", console.log("%c" + t, "font-weight: bold; color: ".concat(e))
            }, U = D()({chalkPrint: E}), I = function () {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
            }, M = function (t, e) {
                return Math.floor(t + Math.random() * (e - t))
            }, R = function (t) {
                for (var e = "abcdefghijklmnopqrstuvwxyz0123456789", i = "", n = 0; n < t; n++) i += e.charAt(Math.round(Math.random() * e.length));
                return i
            }, N = D()({randomColor: I, randomInt: M, randomString: R}), L = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
            }, G = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (L(e)) {
                    if (e.length <= 1) return e;
                    for (var n = Math.floor(e.length / 2), o = e.splice(n, 1)[0], a = [], r = [], s = 0; s < e.length; s++) i && o.hasOwnProperty(i) ? e[s][i] < o[i] ? a.push(e[s]) : r.push(e[s]) : e[s] < o ? a.push(e[s]) : r.push(e[s]);
                    return t(a, i).concat([o], t(r, i))
                }
                return E("[quickSortArr] argument is not Array.", "red"), []
            }, j = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (L(t)) {
                    if (t.length <= 1) return t;
                    for (var e = [], i = {}, n = 0; n < t.length; n++) {
                        var o = t[n], a = !1;
                        F()(i).forEach(function (t) {
                            if (o === i[t]) return void (a = !0)
                        }), a || (i[n] = o, e.push(o))
                    }
                    return e
                }
                return E("[uniqueArr] argument is not Array.", "red"), []
            }, B = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!L(t)) return E("[shuffleArr] argument is not Array.", "red"), [];
                for (var e = t.slice(), i = 0, n = e.length; i < n; i++) {
                    var o = M(0, i), a = e[i];
                    e[i] = e[o], e[o] = a
                }
                return e
            }, q = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 ? arguments[1] : void 0;
                if (!L(t)) return E("[binarySearchArr] argument is not Array.", "red"), -1;
                t = G(t);
                for (var i, n = 0, o = t.length - 1; n < o;) {
                    var a = Math.floor((n + o) / 2);
                    if (t[a] === e) return i = a;
                    t[a] < e ? n = a + 1 : t[a] > e && (o = a)
                }
                return i
            }, Y = D()({isArr: L, quickSortArr: G, uniqueArr: j, shuffleArr: B, binarySearchArr: q}), H = function () {
                window && window.document && [].forEach.call($$("*"), function (t) {
                    t.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
                })
            }, V = function (t) {
                return "★★★★★☆☆☆☆☆".slice(5 - t, 10 - t)
            }, W = function () {
                return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" == t ? e : 3 & e | 8).toString(16)
                }).toUpperCase()
            }, J = function (t) {
                return !/^.?$|^(..+?)\1+$/.test("1".repeat(t))
            }, Q = function (t) {
                return new x.a(function (e) {
                    setTimeout(e, t)
                })
            }, z = D()({$outlineAnything: H, $getRate: V, $uuid: W, $isPrime: J, $sleep: Q}), K = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy.MM.dd hh:mm:ss";
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && (i *= 1e3);
                var i = new Date(t), n = {
                    M: i.getMonth() + 1,
                    d: i.getDate(),
                    h: i.getHours(),
                    m: i.getMinutes(),
                    s: i.getSeconds(),
                    S: i.getMilliseconds(),
                    q: Math.floor((i.getMonth() + 3) / 3)
                };
                return e = e.replace(/([yMdhmsSq])+/g, function (t, e) {
                    var o = n[e];
                    return void 0 !== o ? (t.length > 1 && (o = "0" + o, o = o.substr(o.length - 2)), o) : "y" === e ? (i.getFullYear() + "").substr(4 - t.length) : t
                })
            }, Z = function (t) {
                (!t || "number" != typeof t && "string" != typeof t) && (t = +new Date);
                var e = new Date(t);
                return {
                    year: e.getFullYear(),
                    month: e.getMonth() + 1,
                    day: e.getDate(),
                    hour: e.getHours(),
                    minute: e.getMinutes(),
                    second: e.getSeconds(),
                    millsecond: e.getMilliseconds(),
                    quarter: Math.floor((e.getMonth() + 3) / 3)
                }
            }, X = D()({formatDate: K, getDateObj: Z}), $ = D()({setClass: n, hasClass: o, addClass: a, removeClass: r}),
            tt = D()({debounce: l, throttle: u, poll: c, once: f}), et = function (t) {
                if ("object" != s(t) || "[object Object]" != Object.prototype.toString.call(t)) return !1;
                if (null === v()(t)) return !0;
                for (var e = t; null !== v()(e);) e = v()(e);
                return v()(t) === e
            }, it = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!et(t)) return !1;
                for (var e in t) return !1;
                return !0
            }, nt = function t() {
                var e, i, n, o, a, r, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                for ("boolean" == typeof l && (f = l, l = arguments[u] || {}, u++), "object" !== s(l) && "function" != typeof l && (l = {}), u === c && (l = this, u--); u < c; u++) if (null != (e = arguments[u])) for (i in e) n = l[i], o = e[i], l !== o && (a = L(o), f && o && (et(o) || a) ? (a ? (a = !1, r = n && L(n) ? n : []) : r = n && et(n) ? n : {}, l[i] = t(f, r, o)) : void 0 !== o && (l[i] = o));
                return l
            }, ot = function (t) {
                if (!t) return "";
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    if (n instanceof Array) for (var o = 0; o < n.length; ++o) e.push(encodeURIComponent(i + "[" + o + "]") + "=" + encodeURIComponent(n[o])); else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]))
                }
                return e.join("&")
            }, at = D()({isPlainObj: et, isEmptyObj: it, extend: nt, stringfyQueryString: ot}), rt = function () {
                var t = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
                    e = ("navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase(), "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "");
                return /iphone/i.test(t) || /ipad/i.test(t) || /ipod/i.test(t) ? "ios" : /android/i.test(t) ? "android" : /win/i.test(e) && /phone/i.test(t) ? "windowsPhone" : /mac/i.test(e) ? "MacOSX" : /win/i.test(e) ? "windows" : /linux/i.test(e) ? "linux" : void 0
            }, st = function () {
                var t, e = {}, i = navigator.userAgent.toLowerCase();
                return (t = i.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = t[1] : (t = i.match(/msie ([\d\.]+)/)) ? e.ie = t[1] : (t = i.match(/edge\/([\d\.]+)/)) ? e.edge = t[1] : (t = i.match(/firefox\/([\d\.]+)/)) ? e.firefox = t[1] : (t = i.match(/(?:opera|opr).([\d\.]+)/)) ? e.opera = t[1] : (t = i.match(/chrome\/([\d\.]+)/)) ? e.chrome = t[1] : (t = i.match(/version\/([\d\.]+).*safari/)) && (e.safari = t[1]), e.ie ? "IE: " + e.ie : e.edge ? "EDGE: " + e.edge : e.firefox ? "Firefox: " + e.firefox : e.chrome ? "Chrome: " + e.chrome : e.opera ? "Opera: " + e.opera : e.safari ? "Safari: " + e.safari : "unknown"
            }, lt = function () {
                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            }, ut = D()({getOS: rt, getBrowser: st, isWeixin: lt}),
            ct = D()({isEmail: d, isIdCard: h, isPhoneNum: p, isUrl: m}), ft = function (t, e, i, n, o, a) {
                if (!t || !e) return !1;
                var r = encodeURIComponent(t) + "=" + encodeURIComponent(e);
                if (i) {
                    var s = new Date;
                    s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3), r += "; expires=" + s.toGMTString()
                }
                return n && (r += "; path=" + n), o && (r += "; domain=" + o), a && (r += "; secure"), document.cookie = r, !0
            }, dt = function (t) {
                if (!t) return "";
                var e = encodeURIComponent(t) + "=", i = document.cookie.indexOf(e), n = null;
                if (i > -1) {
                    var o = document.cookie.indexOf(";", i);
                    -1 == o && (o = document.cookie.length), n = document.cookie.substring(i + e.length, o)
                }
                return n
            }, ht = function (t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!t) return !1;
                var o = encodeURIComponent(t) + "=" + encodeURIComponent(""), a = new Date;
                return a.setTime(a.getTime() + 0), o += "; expires=" + a.toGMTString(), e && (o += "; path=" + e), i && (o += "; domain=" + i), n && (o += "; secure"), document.cookie = o, !0
            }, pt = D()({setCookie: ft, getCookie: dt, removeCookie: ht}), mt = function (t, e) {
                var i = t.length, n = t.substr(0, e);
                return e < i ? n + "..." : n
            }, yt = function (t) {
                t = parseFloat(t);
                var e = ["角", "分"], i = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
                    n = [["元", "万", "亿"], ["", "拾", "佰", "仟"]], o = t < 0 ? "欠" : "";
                t = Math.abs(t);
                for (var a = "", r = 0; r < e.length; r++) a += (i[Math.floor(10 * t * Math.pow(10, r)) % 10] + e[r]).replace(/零./, "");
                a = a || "整", t = Math.floor(t);
                for (var r = 0; r < n[0].length && t > 0; r++) {
                    for (var s = "", l = 0; l < n[1].length && t > 0; l++) s = i[t % 10] + n[1][l] + s, t = Math.floor(t / 10);
                    a = s.replace(/(零.)*零$/, "").replace(/^$/, "零") + n[0][r] + a
                }
                return o + a.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
            }, gt = function (t) {
                function e(t) {
                    return i[t] || t
                }

                var i = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "'": "&#39;"}, n = /[&<>'"]/g;
                return void 0 === t ? "" : String(t).replace(n, e)
            }, _t = function (t) {
                t = null == t ? window.location.href : t;
                var e = t.substring(t.lastIndexOf("?") + 1);
                if (!e) return {};
                for (; "&" == e[e.length - 1];) e = e.slice(0, e.length - 1);
                return JSON.parse('{"' + decodeURIComponent(e).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
            }, vt = function (t) {
                return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, e) {
                    return String.fromCharCode("0x" + e)
                }))
            }, bt = function (t) {
                return decodeURIComponent(atob(t).split("").map(function (t) {
                    return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
                }).join(""))
            }, St = D()({
                cutString: mt,
                upcaseMoney: yt,
                replaceXSS: gt,
                parseQueryString: _t,
                b64EncodeUnicode: vt,
                b64DecodeUnicode: bt
            });
        g()({}, Y, z, X, $, tt, at, ut, U, N, ct, pt, St)
    }, vlkY: function (t, e, i) {
        "use strict";

        function n(t) {
            i("yQQg")
        }

        var o = i("FclF"), a = i("r307"), r = i("VU/8"), s = n, l = r(o.a, a.a, !1, s, null, null);
        e.a = l.exports
    }, wZa5: function (t, e, i) {
        e = t.exports = i("FZ+f")(!1), e.push([t.i, ".score-container.component-manual-list{width:40%;min-width:500px;padding-bottom:50%;font-size:14px;overflow:hidden;background:hsla(0,0%,100%,.6);border-radius:5px;border:1px solid #ddd;position:relative}.score-container.component-manual-list .list-view{width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-manual-list .component-title{margin:0 0 10px;font-size:18px;font-weight:700;position:relative}.score-container.component-manual-list .component-title a.join{color:#ef496f;font-size:14px;margin-left:5px;text-decoration:underline}.score-container.component-manual-list .component-title a.join:hover{opacity:.8}.score-container.component-manual-list .component-title .degree{width:150px;float:right;text-align:left}.score-container.component-manual-list .list{width:100%;padding-left:25px;padding-bottom:10px;line-height:32px}.score-container.component-manual-list .list .list-item{height:32px;line-height:32px;list-style:none}.score-container.component-manual-list .list .list-item a{display:inline-block;min-width:120px;cursor:pointer}.score-container.component-manual-list .list .list-item a:hover{color:#1295db;text-decoration:underline}.score-container.component-manual-list .list .list-item .num{float:left;width:35px;height:32px;font-size:16px;margin-left:-35px;text-align:center;color:#ef496f}.score-container.component-manual-list .list .list-item .difficulty-degree{width:150px;float:right;text-align:left}.score-container.component-manual-list .list .list-item .difficulty-degree .icon-star{display:inline-block;-webkit-transform:scale(.7);transform:scale(.7);margin-left:-6px}.score-container.component-manual-list .content-wrap{width:100%}.score-container.component-manual-list .content-wrap .info{font-size:14px;margin:5px 0;height:28px;line-height:28px;text-align:center;background:#1295db;color:#fff;border-radius:2px}.score-container.component-manual-list .content-wrap .return-btn{cursor:pointer;width:80px;height:32px;line-height:32px;color:#1f6fb5}.score-container.component-manual-list .content-wrap .return-btn:hover{text-decoration:underline;color:#1295db}.score-container.component-manual-list .content-wrap .author-info{float:right;line-height:32px}.score-container.component-manual-list .content-wrap .author-info a{color:#1f6fb5;margin-right:7px}.score-container.component-manual-list .content-wrap .score-item-content{word-wrap:break-word;font-size:16px;letter-spacing:0;line-height:26px}.score-container.component-manual-list .content-wrap .score-item-lyrics{word-wrap:break-word;font-style:italic;margin-top:20px;line-height:26px}", ""])
    }, woOf: function (t, e, i) {
        t.exports = {default: i("V3tA"), __esModule: !0}
    }, xGkn: function (t, e, i) {
        "use strict";
        var n = i("4mcu"), o = i("EGZi"), a = i("/bQp"), r = i("TcQ7");
        t.exports = i("vIB/")(Array, "Array", function (t, e) {
            this._t = r(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, i) : "values" == e ? o(0, t[i]) : o(0, [i, t[i]])
        }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
    }, "xH/j": function (t, e, i) {
        var n = i("hJx8");
        t.exports = function (t, e, i) {
            for (var o in e) i && t[o] ? t[o] = e[o] : n(t, o, e[o]);
            return t
        }
    }, xnc9: function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, yQQg: function (t, e, i) {
        var n = i("q00e");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("1b745703", n, !0, {})
    }, z2su: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMOUlEQVR4Xu2de1BU1x3H78preRQEAvIy8oiCk6KitXbU+mhNNBOtiSl0pn844iN2JglCm8mo9ZGSFEyb1mKTGTNGm5IZ6oT4SDWJxnQKW9ZkcSogo4KK0LjIQ2HZDSAosp3jsJu7lwt7zrnPPfz4yxl/5/X7fu45957z+501cBL+Amc8/ZzBj9tr4AxzJFQDRWk94ORaOM6QO9BwpoK2CgNtQVTOmLGymTNwyVLqgLLSPODknD2DV7+IpK1FGgAzVzppG4Zy8nlg4OpZah2pCz6aAQAA+VSUUJNuAOg0HZAwDCiK64HYJXkepgAArucYsQMAGBGSdhgAAK3nGCkHADAiJO0wAABazzFSDgBgREjaYQAAtJ5jpBwAwIiQtMMAAGg9x0g5AIARIWmHAQDQeo6RcgAAI0LSDgMAoPUcI+UAAEaEpB0GAEDrOUbKAQCMCEk7DACA1nMKl7tQ33ztiWmxcZHhoeFKNgUAKOldyrrn5ey13Gq3LeA4zl5atKVl1eLM2ZRVeS0GAHh1kboGZ6rq69bvPOQWPCo8tK7hdDEAoK4M2rUGAIz4fqIGhQoBQO5Q0hewBGj3sIu2LAbAk2mJVcdLXp6lxAshAOADALi66O83yRoeGnI3Piai90ezUodfzF6WlpIUkyhlCACAFO8pUFZsBhivmajwsNrPDxbE0IIAACggopQqSQEYactuKdvdSwMBMwA0W++0Ls99q7d/8H66FAHULBsSFNhYc+x38fy1XQQAh7//pG+HhobHnerRTNBwuog4s5oZAJ7bdsB0vubGEjUFlKOtNctmVx4u3LTUVddYn4HN1k5rY0vH3cs3rL1XmtqGPjdfmi6EwlK2u5V0FgAA5FBRQh24AIg18fhTv7k2MPhghuv/Nq77sWlffjbRQ8AMAOgJWZr7Vj/fIRJ0UaUo2uX7qmxXcmR4aIS3GUCsQ5v2HK48VVHnnj2EMOEMghkAcAbrCzYkO4FCAJLioqovfvT6D0nGCQCQeEsFWxIALtQ3Nz770n73S++EXgJU0EaVJkgAQB0q/afZUvTeKeOiuTNsh9/YuIy0kzADkHpMYXtSAKR2hxkAbI4+x7pt71xqu2MPk+oUtcpnpMXbT5a84n6JQ+3iAFD6yfnqokOnA/n9RNvDNOcFzAAgfCFSS0Sp7QjXbRwAYpfk2TmOc385wGcgx3HLNxSbL99sWyRVELXL0+wDCJ9aV5+fTI03//uDHUQ+YGYGGHkjjuc4TtEYOjkB8fef1Gou3elMSYpNItkHGGPX0/HpuwVt8zNTiLbCmQGA58BaOUVSsq5VizNH7d3jLAGoT66tYVf/xOrC6TtzAOAMWs82uADINQYAQC5PylQPADDiSCXj4GTSiroadHRd8MejN6ovNaUNPRx2r/9T4yItU+MfGzhfc939aQhRwQRu3rG/3HTiXzWavwSGhgQM/j7v50axeH7Ux8Mn/oN9YicGAEoaee3PH3Xy9zye/2mWo7iA7CQQuZaZJWD7X8pNR47jO5aAK2pT4fk8TcyCGAAJy/Ot/JkD9gE4jpub83q1tb2b6CSMWlnMgqVFW+pcswBlqBcnBgDsA4gIcKaqvnb9zkPEIVGYWhKbGYMCrtUdK5ziOusXAup0Oh0hod+7GB4RGW8MDk6/19dbe/dOh2F4+KFHFpAYABmrd9R1O/pGZQuVFm2pJf0cZGYJcH0bv1duarrT7dD0tweWzk8PXrNsTgY/0EPo6IjJ0ebJUdGjdu2s/7tZ/fDhkHsmG+slEAFffvZCDxp3TFS4YWv2kjT+hhIusUwBgDtote3Epv9pqe5ILo/u9HR3me09XW4w4CtAbbUUaA/t2i345Zvuzz3URNK0NIefn9+oL5b221bT4EC/+ysBAFBAEC2qTPhJfis/infSJL/ahKnJqXwI+vv66jrbrckGg8F90kcT5UMyPlgCSLwlwVbsuNrpdNr9AwIa/P0DBgYHB+I4p3PUQY6lbJeVZm3H7SoAgOspiXY2R5999gt7OkiilmmifEm7CQCQekyCPTqyXrutJMxblg9qguZsn6ZrAACN1ySUQTPB89v+Wn+l6fZisWpQjMC+/Gzr+p8tQlfEKP4HACjuYvEGEAinKmobKi803nNZ/CpneTxpQIfU7gMAUj3o4+UnJADoNG1tXkkIOlBZmDW9UhiZ6+OaEnV/QgIg3Jf/9N2Ca/MzU8S35ojc6XvGExIA4WEK/9TO9ySU1mMAgOM4pXfbpEmkbGkAgOM4dPmS+cPfGkgvV1BWGnVqBwB4fkZXthiDAu8tnjvdHhMZZli34gdxrL8bAABeHjQ0O+zLz7m9fu1CXUUbyTU/AACYnty+8Rnzrzc8Q5R2hVm1pmbMAICyg1ds/sPVW+22DFfiJJrSC19eZxc+vSIhVQ6clDKxz0WUqbvnneMRGt9OZp8aF9nw5fuvzSS9TZQZAMaJuLV3mg54ZNKKfQamJ0+JRrdwucKszn19OUF4cid2QDNWpq4Wj/XCrCdMJ0vysEPOUR+ZAWC87GBhkgnuPoBIqLkHTGg/P331jlFp2lqIj9qkOUFkBoCxsoPXLJ1TIbw6BRcAsSdECNOm3UcqTlXWEl/NIjck6BTxk5JtvaSHScwA4HIoAqHL3vvohG3BrNQUfmSuy0YKAGLvAWgmsFy62Sy3qLj1RUeEBZMK76qbOQBwnEYCgODcwNF4utgpBhVOu3q0AQDQTVu8DB6hSGhG2frG33vu2r6NfPOVdTa1AjXUggUA8AKAWkJo1Q5TAGze87fKqovX3W/lKEv34O4NkcLtXJwlQFiXVgLhtou2r98vzPW4cQynLDMAjJMdjLUPwE/l1mOmMY6YNKeazAAg5z6Ar145N6H3AcbKDhZzirclwBdvHEMzBGQHj/yoAn+6FEuX9gYAKi+8hQtnCtbSJj15ymM0GUTMLAEkzscBgKQ+X7YFAOAz0IPfgatnDbRAUxdEDRpnrvS41EHqLWEoJ/9geUVPQ1NbRLejd47rN/fQZUr/+MwyhX98C0Gh30nu8wDw4gKwU6vEAEDn/Kb/fpe1Q/tUqFVuybz0YJqoJaaWACR+1gt720iDM4QAIPFf/dNRnwsBo4laYgqAeTl7LbfabdhPvuvpFAIA+wB085am7wAo3evZl/Z7ZPcYOENrRGRUc2Bg0KMfkbDbbfbBgXujtktZmQHefvUXFtLDKmZmAOFTi8RPnJYa5ufn5xGxY7d1VfXYujxSs8XeAc59deXG0c++ttI9C+qXyl45fzLpFXGol8wAIMz3Cw4OrYyNTxQ9HPnm5vVWJ+d0/xQrfAUw8BUgPAsIMoaY4hKSRAMkW5oa7fyLmAAABgAQnuChC5jiEh/vMBqDPd4Lbltbqh7cv++xBDSeLrazFOVDsgAxswSI3cWHHBEQGFgVGBDwEP27r79/1E1cNL+2SeJgvdsyAwByNMXnm8NStstBc4iid2Fx+8cUAGjQBL8e5igt2nKT5s0Z17m+YMccAMjp2/d/XHnkhClrrHQvdP3qh8UvGmlDqX1BWNw+MgkAGjz/Fq6axm+Cw0OND9KSYoe0uIkLVwwt7JgFQAtn+mKbAIBOVfvy/JWmzXuPDJEebEkdjs8fB0t1gF7Kp6/ZWWGz96qecwgA6IQA4dSsRrfQ5tlgwxeTadvS9DSQttN6LacFAJxzOHeg4dwHtD4BAGg9J1JOCMDWp6JNK74fJvk3EQs/bu+rvzU4+qobieKjIQAACgJQnp9ct3pe+KhfCiNpsvhkh7nwWIci4gMAJEpg2ApnAKkAKC0+AIAhKomJnACoIT4AQKIuhq1cAKglPgCAISqJiRwAqCk+AECiLoatVADUFh8AwBCVxEQKAFqIDwCQqIthSwuAVuIDABiikpjQAKCl+AAAiboYtqQAaC0+AIAhKokJCQB6EB8AIFEXwxYXAL2IDwBgiEpiggOAnsQHAEjUxbD1BoDexAcAMEQlMRkPAD2KDwCQqIthOxYAehUfAMAQlcREDID6W/d6lTzPJ+mfmC0EhEj1IK+8EIDMqUFmpSJ55Oo2ACCXJ0UubhCtWoYwLhm7DCFhcjrTa1CozsSHdwA51fc2A+hQfNkBkNmf7FSnU/EBADUQ07H4kgEIyni6h39vjxr+9Kk2dC6+ZACMGauWcQYnykqZ5lPCKNxZlK5l4Jz5UjJ2FO6iu/r/A1UudgitMdyAAAAAAElFTkSuQmCC"
    }, zQR9: function (t, e, i) {
        "use strict";
        var n = i("h65t")(!0);
        i("vIB/")(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {value: void 0, done: !0} : (t = n(e, i), this._i += t.length, {value: t, done: !1})
        })
    }
});