/*
 * AllInOne Banner - Banner Rotator v3.3
 *
 * Copyright 2012-2013, LambertGroup
 *
 */
(function (f) {
    function J(a, b) {
        f(a.currentImg.attr("data-text-id")).css("display", "block");
        var c = f(a.currentImg.attr("data-text-id")).children(),
            g = 0;
        currentText_arr = [];
        c.each(function () {
            currentText_arr[g] = f(this);
            var e = currentText_arr[g].attr("data-initial-left"),
                c = currentText_arr[g].attr("data-initial-top");
            b.responsive && (e = parseInt(e / (b.origWidth / b.width), 10), c = parseInt(c / (b.origWidth / b.width), 10));
            currentText_arr[g].css({
                left: e + "px",
                top: c + "px",
                opacity: parseInt(currentText_arr[g].attr("data-fade-start"), 10) / 100
            });
            var l = currentText_arr[g];
            setTimeout(function () {
                b.responsive && (newCss = "", -1 != l.css("font-size").lastIndexOf("px") ? (fontSize = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != l.css("font-size").lastIndexOf("em") && (fontSize = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != l.css("line-height").lastIndexOf("px") ? (lineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != l.css("line-height").lastIndexOf("em") && (lineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), l.wrapInner('<div class="newFS" style="' + newCss + '" />'));
                var e = l.attr("data-final-left"),
                    c = l.attr("data-final-top");
                b.responsive && (e = parseInt(e / (b.origWidth / b.width), 10), c = parseInt(c / (b.origWidth / b.width), 10));
                var g = 1;
                !0 == a.isVideoPlaying && (g = 0);
                l.animate({
                    opacity: g,
                    left: e + "px",
                    top: c + "px"
                }, 1E3 * l.attr("data-duration"), function () {
                    !0 == a.isVideoPlaying && f(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                })
            }, 1E3 * currentText_arr[g].attr("data-delay"));
            g++
        })
    }

    function K(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }

    function L(a, b, c) {
        var g = E();
        f(".stripe", a).remove();
        f(".block", a).remove();
        F = u = Math.round(b.width / b.numberOfStripes);
        for (var e = !0, h = 0; h < b.numberOfStripes; h++) h == b.numberOfStripes - 1 && (F = a.width() - u * (b.numberOfStripes - 1)), !b.responsive || -1 == g || -1 != g && 9 <= g ? -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") ? e = !1 : a.append(f('<div class="stripe"></div>').css({
            opacity: "0",
            left: u * h + "px",
            width: F + "px",
            height: "0px",
            background: 'url("' + c.current_imgInside.attr("src") + '") ' + -1 * h * u + "px 0%"
        })) : e = !1, e || (mleft = -1 * u * h, a.append(f('<div class="stripe"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>').css({
            opacity: "0",
            left: u * h + "px",
            width: F + "px",
            height: "0px"
        })));
        b.responsive && e && (-1 == g || -1 != g && 9 <= g) && f(".stripe", a).css({
            "-webkit-background-size": b.width + "px " + b.height + "px",
            "-moz-background-size": b.width + "px " + b.height + "px",
            "-o-background-size": b.width + "px " + b.height + "px",
            "-ms-background-size": b.width + "px " + b.height + "px",
            "background-size": b.width + "px " + b.height + "px"
        })
    }

    function I(a, b, f, g, e) {
        var h = a.width(),
            l = a.height();
        a.css({
            width: "0",
            height: "0"
        });
        b == g.numberOfRows - 1 && f == g.numberOfColumns - 1 ? setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: l
            }, 1E3 * g.effectDuration / 3, "", function () {
                e.trigger("effectComplete")
            })
        }, m) : setTimeout(function () {
            a.animate({
                opacity: "1.0",
                width: h,
                height: l
            }, 1E3 * g.effectDuration / 3)
        }, m);
        m += G
    }

    function B(a, b, c, g, e, h, l, D) {
        var r = !0;
        if (!b.loop && c.current_img_no + a >= g || !b.loop && 0 > c.current_img_no + a) r = !1;
        if (r) {
            f(".newFS", h).contents().unwrap();
            b.showCircleTimer && (c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = b.behindCircleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), c.ctx.lineWidth = b.circleLineWidth + 2, c.ctx.strokeStyle = b.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = b.circleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 0, !1), c.ctx.lineWidth = b.circleLineWidth, c.ctx.strokeStyle = b.circleColor, c.ctx.stroke());
            f(c.currentImg.attr("data-text-id")).css("display", "none");
            f(l[c.current_img_no]).removeClass("bottomNavButtonON");
            b.randomizeImages && !c.bottomNavClicked ? (a = Math.floor(Math.random() * g), c.current_img_no = c.current_img_no === a ? Math.floor(Math.random() * g) : a) : c.current_img_no = c.current_img_no + a >= g ? 0 : 0 > c.current_img_no + a ? g - 1 : c.current_img_no + a;
            c.bottomNavClicked = !1;
            f(l[c.current_img_no]).addClass("bottomNavButtonON");
            c.currentImg = f(D[c.current_img_no]);
            c.current_imgInside = c.currentImg.find("img:first");
            c.currentImg.attr("data-transition") ? (e = c.currentImg.attr("data-transition"), "random" == e && (e = H[Math.floor(Math.random() * H.length)])) : e = "random" != b.defaultEffect ? b.defaultEffect : H[Math.floor(Math.random() * H.length)];
            c.effectIsRunning = !0;
            if ("fade" == e || "slideFromLeft" == e || "slideFromRight" == e || "slideFromTop" == e || "slideFromBottom" == e) L(h, b, c), g = f(".stripe:first", h), "fade" == e && (g.css({
                top: "0px",
                height: "100%",
                width: h.width() + "px"
            }), g.animate({
                opacity: "1.0"
            }, 2E3 * b.effectDuration, "", function () {
                h.trigger("effectComplete")
            })), "slideFromLeft" == e && (g.css({
                top: "0px",
                height: "100%",
                width: "0"
            }), g.animate({
                opacity: "1.0",
                width: h.width() + "px"
            }, 1E3 * b.effectDuration, "", function () {
                h.trigger("effectComplete")
            })), "slideFromRight" == e && (g.css({
                top: "0px",
                height: "100%",
                width: "0",
                left: h.width() + 5 + "px"
            }), g.animate({
                opacity: "1.0",
                left: "0",
                width: h.width() + "px"
            }, 1E3 * b.effectDuration, "", function () {
                h.trigger("effectComplete")
            })), "slideFromTop" == e && (g.css({
                top: "0px",
                height: "0",
                width: h.width() + "px"
            }), g.animate({
                opacity: "1.0",
                height: h.height() + "px"
            }, 1E3 * b.effectDuration, "", function () {
                h.trigger("effectComplete")
            })), "slideFromBottom" == e && (g.css({
                top: "0px",
                height: "0",
                width: h.width() + "px",
                top: h.height() + "px"
            }), g.animate({
                opacity: "1.0",
                top: 0,
                height: h.height() + "px"
            }, 1E3 * b.effectDuration, "", function () {
                h.trigger("effectComplete")
            }));
            0 <= e.indexOf("Stripes") && (L(h, b, c), g = 0 <= e.indexOf("Reverse") ? f(".stripe", h).myReverse() : f(".stripe", h), m = 100, i = 0, g.each(function () {
                var a = f(this);
                ("topBottomDroppingStripes" == e || "topBottomDroppingReverseStripes" == e) && a.css({
                    top: "0px"
                });
                ("bottomTopDroppingStripes" == e || "bottomTopDroppingReverseStripes" == e) && a.css({
                    bottom: "0px"
                });
                ("leftRightFadingStripes" == e || "leftRightFadingReverseStripes" == e) && a.css({
                    top: "0px",
                    height: "100%",
                    width: "0"
                });
                "asynchronousDroppingStripes" == e && (i % 2 ? a.css({
                    top: "0px"
                }) : a.css({
                    bottom: "0px"
                }));
                if ("leftRightFadingStripes" == e || "leftRightFadingReverseStripes" == e) {
                    var d = u;
                    if ("leftRightFadingStripes" == e && i == b.numberOfStripes - 1 || "leftRightFadingReverseStripes" == e && 0 == i) d = F;
                    i == b.numberOfStripes - 1 ? setTimeout(function () {
                        a.animate({
                            width: d + "px",
                            opacity: "1.0"
                        }, 800 * b.effectDuration, "", function () {
                            h.trigger("effectComplete")
                        })
                    }, m) : setTimeout(function () {
                        a.animate({
                            width: d + "px",
                            opacity: "1.0"
                        }, 800 * b.effectDuration)
                    }, m)
                } else i == b.numberOfStripes - 1 ? setTimeout(function () {
                    a.animate({
                        height: "100%",
                        opacity: "1.0"
                    }, 1E3 * b.effectDuration, "", function () {
                        h.trigger("effectComplete")
                    })
                }, m) : setTimeout(function () {
                    a.animate({
                        height: "100%",
                        opacity: "1.0"
                    }, 1E3 * b.effectDuration)
                }, m);
                m += M;
                i++
            }));
            if (0 <= e.indexOf("Blocks")) {
                g = E();
                f(".stripe", h).remove();
                f(".block", h).remove();
                l = Math.round(b.width / b.numberOfColumns);
                D = Math.round(b.height / b.numberOfRows);
                a = l;
                for (var r = D, k = 0, v = 0, x = !0, z = 0; z < b.numberOfRows; z++)
                    for (var y = 0; y < b.numberOfColumns; y++) k = l * y, v = D * z, a = y == b.numberOfColumns - 1 ? b.width - l * (b.numberOfColumns - 1) : l, r = z == b.numberOfRows - 1 ? b.height - D * (b.numberOfRows - 1) : D, !b.responsive || -1 == g || -1 != g && 9 <= g ? -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") ? x = !1 : h.append(f('<div class="block"></div>').css({
                        opacity: "0",
                        left: k + "px",
                        top: v + "px",
                        width: a + "px",
                        height: r + "px",
                        background: 'url("' + c.current_imgInside.attr("src") + '") -' + k + "px -" + v + "px"
                    })) : x = !1, x || (mleft = -1 * k, mtop = -1 * v, h.append(f('<div class="block"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + "px; margin-top:" + mtop + 'px;"></div>').css({
                        opacity: "0",
                        left: k + "px",
                        top: v + "px",
                        width: a + "px",
                        height: r + "px"
                    })));
                b.responsive && x && (-1 == g || -1 != g && 9 <= g) && f(".block", h).css({
                    "-webkit-background-size": b.width + "px " + b.height + "px",
                    "-moz-background-size": b.width + "px " + b.height + "px",
                    "-o-background-size": b.width + "px " + b.height + "px",
                    "-ms-background-size": b.width + "px " + b.height + "px",
                    "background-size": b.width + "px " + b.height + "px"
                });
                if (0 <= e.indexOf("Reverse")) var p = f(".block", h).myReverse();
                else if ("randomBlocks" == e) {
                    c = f(".block", h);
                    var d;
                    for (g = c.length; g; p = parseInt(Math.random() * g, 10), d = c[--g], c[g] = c[p], c[p] = d);
                    p = c
                } else p = f(".block", h);
                m = 100;
                if ("randomBlocks" == e) {
                    i = 0;
                    var s = b.numberOfRows * b.numberOfColumns;
                    p.each(function () {
                        var a = f(this),
                            d = a.width(),
                            e = a.height();
                        a.css({
                            width: "0",
                            height: "0"
                        });
                        i == s - 1 ? setTimeout(function () {
                            a.animate({
                                opacity: "1.0",
                                width: d,
                                height: e
                            }, 1E3 * b.effectDuration / 3, "", function () {
                                h.trigger("effectComplete")
                            })
                        }, m) : setTimeout(function () {
                            a.animate({
                                opacity: "1.0",
                                width: d,
                                height: e
                            }, 1E3 * b.effectDuration / 3)
                        }, m);
                        m += G;
                        i++
                    })
                } else {
                    var n = 0,
                        q = 0,
                        A = [];
                    A[n] = [];
                    p.each(function () {
                        A[n][q] = f(this);
                        q++;
                        q == b.numberOfColumns && (n++, q = 0, A[n] = [])
                    });
                    q = n = 0;
                    m = 100;
                    p = f(A[n][q]);
                    for (I(p, 0, 0, b, h) ; n < b.numberOfRows - 1 || q < b.numberOfColumns - 1;) {
                        n < b.numberOfRows - 1 && n++;
                        q < b.numberOfColumns - 1 && q++;
                        i = n;
                        q < n && b.numberOfRows > b.numberOfColumns && (i = n - q);
                        j = 0;
                        for (n < q && b.numberOfRows < b.numberOfColumns && (j = q - n) ; 0 <= i && j <= q;) p = f(A[i--][j++]), I(p, i, j, b, h)
                    }
                    m = b.numberOfRows < b.numberOfColumns ? m - (b.numberOfRows - 1) * G : m - (b.numberOfColumns - 1) * G;
                    limit_i = 0;
                    for (limit_j = q - n; limit_i < n && limit_j < q;) {
                        i = n + 1;
                        for (j = limit_j; i > limit_i && j < q;) i -= 1, j += 1, p = f(A[i][j]), I(p, i, j, b, h);
                        limit_i++;
                        limit_j++
                    }
                }
            }
        }
    }

    function E() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }
    var H = "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks randomBlocks".split(" "),
        u, F, m = 100,
        M = 50,
        G = 25,
        C = !1,
        t = navigator.userAgent.toLowerCase();
    f.fn.allinone_bannerRotator = function (a) {
        a = f.extend({}, f.fn.allinone_bannerRotator.defaults, a);
        return this.each(function () {
            var b = f(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = f(window).width(), responsiveHeight = f(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            a.enableTouchScreen && a.responsive && (a.width -= 1);
            b.css("display", "block");
            var c = f("<div></div>").addClass("allinone_bannerRotator").addClass(a.skin),
                g = f('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <canvas class="mycanvas"></canvas>');
            b.wrap(c);
            b.after(g);
            var e = b.parent(".allinone_bannerRotator"),
                h = f(".bannerControls", e),
                c = f('<div class="bottomNavLeft"></div>'),
                g = f('<div class="bottomNav"></div>'),
                l = f('<div class="bottomNavRight"></div>');
            b.after(c);
            b.after(g);
            b.after(l);
            a.showAllControllers || h.css("display", "none");
            var m = f(".leftNav", e),
                r = f(".rightNav", e);
            m.css("display", "none");
            r.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (m.css("display", "block"), r.css("display", "block"));
            var k = f(".bottomNav", e),
                v = f(".bottomNavLeft", e),
                x = f(".bottomNavRight", e),
                z;
            k.css("display", "block");
            v.css("display", "block");
            x.css("display", "block");
            k.css("top", a.height + "px");
            k.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            v.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            x.css({
                bottom: a.thumbsWrapperMarginBottom + "px",
                top: "auto"
            });
            a.showBottomNav || (k.css("display", "none"), v.css("display", "none"), x.css("display", "none"));
            a.showOnInitBottomNav || (k.css("left", "-5000px"), v.css("left", "-5000px"), x.css("left", "-5000px"));
            var c = E(),
                y = a.defaultEffect,
                p = 0,
                d = {
                    current_img_no: 0,
                    currentImg: 0,
                    current_imgInside: "",
                    bottomNavClicked: !1,
                    effectIsRunning: !1,
                    mouseOverBanner: !1,
                    rightVal: 0,
                    isAttractiveResp: !1,
                    timeoutID: "",
                    intervalID: "",
                    arcInitialTime: (new Date).getTime(),
                    timeElapsed: 0,
                    windowWidth: 0,
                    canvas: "",
                    ctx: "",
                    bannerRatio: a.origWidth / a.origHeight
                };
            d.canvas = f(".mycanvas", e)[0];
            d.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            d.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; -1 != c && 9 > c && (a.showCircleTimer = !1);
            a.showCircleTimer && (d.ctx = d.canvas.getContext("2d"));
            e.width(a.width);
            e.height(a.height);
            h.css("margin-top", parseInt((a.height - m.height()) / 2, 10) + "px");
            var s = b.find("ul:first").children(),
                n, q = 0,
                A = 0;
            s.each(function () {
                d.currentImg = f(this);
                d.currentImg.is("li") || (d.currentImg = d.currentImg.find("li:first"));
                d.currentImg.is("li") && (d.currentImg.css("display", "none"), p++, n = f('<div class="bottomNavButtonOFF" rel="' + (p - 1) + '"></div>'), k.append(n), q += parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + n.width(), A = parseInt((k.height() - parseInt(n.css("height").substring(0, n.css("height").length - 2))) / 2, 10), n.css("margin-top", A + "px"))
            });
            k.width(q);
            a.showOnInitBottomNav && (k.css("left", parseInt((e.width() - q) / 2, 10) + "px"), v.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px"), x.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + "px"));
            d.current_img_no = a.firstImg;
            a.firstImg > p && (d.current_img_no = p);
            0 > a.firstImg && (d.current_img_no = 0);
            a.randomizeImages && (d.current_img_no = Math.floor(Math.random() * p));
            d.currentImg = f(s[d.current_img_no]);
            d.current_imgInside = d.currentImg.find("img:first"); -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != c && 7 >= c ? e.append('<img id="curBgImgIos" src="' + d.current_imgInside.attr("src") + '" width="' + a.width + '" height="' + a.height + '">') : (e.css("background", 'url("' + d.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == c || -1 != c && 9 <= c ? e.css({
                "-webkit-background-size": a.width + "px " + a.height + "px",
                "-moz-background-size": a.width + "px " + a.height + "px",
                "-o-background-size": a.width + "px " + a.height + "px",
                "-ms-background-size": a.width + "px " + a.height + "px",
                "background-size": a.width + "px " + a.height + "px"
            }) : 8 == c && e.css({
                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
            })));
            a.enableTouchScreen && (c = Math.floor(1E5 * Math.random()), e.wrap('<div id="bannerRotatorParent_' + c + '" style="position:relative;" />'), f("#bannerRotatorParent_" + c).width(a.width + 1), f("#bannerRotatorParent_" + c).height(a.height), e.css({
                cursor: "url(" + a.absUrl + "/rotator/skins/hand.cur),url(" + a.absUrl + "/rotator/skins/hand.cur),move",
                left: "0px",
                position: "absolute"
            }), a.rightVal = parseInt(r.css("right").substring(0, r.css("right").length - 2), 10), "attractive" == a.skin && a.width100Proc && r.css("right", a.rightVal - 1 + "px"), e.mousedown(function () {
                0 > a.rightVal && !C && (r.css({
                    visibility: "hidden",
                    right: "0"
                }), ("attractive" == a.skin && a.width100Proc || "attractive" == a.skin && a.isAttractiveResp) && r.css("right", a.rightVal - 1 + "px"), m.css("visibility", "hidden"))
            }), e.mouseup(function () {
                C = !1;
                0 > a.rightVal && (r.css({
                    right: a.rightVal + "px",
                    visibility: "visible"
                }), ("attractive" == a.skin && a.width100Proc || "attractive" == a.skin && a.isAttractiveResp) && r.css("right", a.rightVal - 1 + "px"), m.css("visibility", "visible"))
            }), e.draggable({
                axis: "x",
                containment: "parent",
                start: function () {
                    origLeft = f(this).css("left")
                },
                stop: function () {
                    d.effectIsRunning || (finalLeft = f(this).css("left"), direction = 1, origLeft < finalLeft && (direction = -1), B(direction, a, d, p, y, e, w, s));
                    0 > a.rightVal && (r.css({
                        right: a.rightVal + "px",
                        visibility: "visible"
                    }), ("attractive" == a.skin && a.width100Proc || "attractive" == a.skin && a.isAttractiveResp) && r.css("right", a.rightVal - 1 + "px"), m.css("visibility", "visible"));
                    f(this).css("left", "0px")
                }
            }));
            J(d, a, b, h);
            e.bind("effectComplete", function () {
                var c = E();
                d.effectIsRunning = !1; -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != c && 7 >= c ? (f("#curBgImgIos", e).attr("src", d.current_imgInside.attr("src")), f("#curBgImgIos", e).width(a.width), f("#curBgImgIos", e).height(a.height)) : (e.css("background", 'url("' + d.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == c || -1 != c && 9 <= c ? e.css({
                    "-webkit-background-size": a.width + "px " + a.height + "px",
                    "-moz-background-size": a.width + "px " + a.height + "px",
                    "-o-background-size": a.width + "px " + a.height + "px",
                    "-ms-background-size": a.width + "px " + a.height + "px",
                    "background-size": a.width + "px " + a.height + "px"
                }) : 8 == c && e.css({
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
                })));
                d.arcInitialTime = (new Date).getTime();
                d.timeElapsed = 0;
                a.showCircleTimer && (clearInterval(d.intervalID), d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height), d.ctx.beginPath(), d.ctx.globalAlpha = a.behindCircleAlpha / 100, d.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 2 * Math.PI, !1), d.ctx.lineWidth = a.circleLineWidth + 2, d.ctx.strokeStyle = a.behindCircleColor, d.ctx.stroke(), d.ctx.beginPath(), d.ctx.globalAlpha = a.circleAlpha / 100, d.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), d.ctx.lineWidth = a.circleLineWidth, d.ctx.strokeStyle = a.circleColor, d.ctx.stroke(), d.intervalID = setInterval(function () {
                    K(d, a)
                }, 125));
                J(d, a, b, h);
                0 < a.autoPlay && (1 < p && !d.mouseOverBanner) && (clearTimeout(d.timeoutID), d.timeoutID = setTimeout(function () {
                    B(1, a, d, p, y, e, w, s)
                }, 1E3 * a.autoPlay))
            });
            e.mouseenter(function () {
                d.mouseOverBanner = !0;
                clearTimeout(d.timeoutID);
                nowx = (new Date).getTime();
                d.timeElapsed += nowx - d.arcInitialTime;
                a.autoHideNavArrows && a.showNavArrows && (m.css("display", "block"), r.css("display", "block"));
                a.autoHideBottomNav && a.showBottomNav && (k.css({
                    display: "block",
                    left: parseInt((e.width() - q) / 2, 10) + "px"
                }), v.css({
                    display: "block",
                    left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px"
                }), x.css({
                    display: "block",
                    left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + "px"
                }))
            });
            e.mouseleave(function () {
                d.mouseOverBanner = !1;
                nowx = (new Date).getTime();
                a.autoHideNavArrows && a.showNavArrows && (m.css("display", "none"), r.css("display", "none"));
                a.autoHideBottomNav && a.showBottomNav && (k.css("display", "none"), v.css("display", "none"), x.css("display", "none"));
                if (0 < a.autoPlay && 1 < p) {
                    clearTimeout(d.timeoutID);
                    d.arcInitialTime = (new Date).getTime();
                    var b = parseInt(1E3 * a.autoPlay - (d.timeElapsed + nowx - d.arcInitialTime), 10);
                    d.timeoutID = setTimeout(function () {
                        B(1, a, d, p, y, e, w, s)
                    }, b)
                }
            });
            e.click(function () {
                if (void 0 != f(s[d.current_img_no]).attr("data-link") && !d.effectIsRunning && "" != f(s[d.current_img_no]).attr("data-link")) {
                    var b = a.target;
                    void 0 != f(s[d.current_img_no]).attr("data-target") && "" != f(s[d.current_img_no]).attr("data-target") && (b = f(s[d.current_img_no]).attr("data-target"));
                    "_blank" == b ? window.open(f(s[d.current_img_no]).attr("data-link")) : window.location = f(s[d.current_img_no]).attr("data-link")
                }
            });
            m.mousedown(function () {
                C = !0;
                d.effectIsRunning || (clearTimeout(d.timeoutID), B(-1, a, d, p, y, e, w, s))
            });
            m.mouseup(function () {
                C = !1
            });
            r.mousedown(function () {
                C = !0;
                d.effectIsRunning || (clearTimeout(d.timeoutID), B(1, a, d, p, y, e, w, s))
            });
            r.mouseup(function () {
                C = !1
            });
            var u = !1;
            f(window).resize(function () {
                var c = E();
                doResizeNow = !0; -1 != navigator.userAgent.indexOf("Android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = f(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = f(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = f(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && f(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && f(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = !1), a.windowOrientationScreenSize_90 && (-90 == window.orientation && f(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = !1), 0 == d.windowWidth && (doResizeNow = !1, d.windowWidth = f(window).width())); -1 != c && (9 == c && 0 == d.windowWidth) && (doResizeNow = !1);
                d.windowWidth == f(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : d.windowWidth = f(window).width();
                a.responsive && doResizeNow && (!1 !== u && clearTimeout(u), u = setTimeout(function () {
                    var c = a,
                        g = p,
                        l = w,
                        q = n,
                        u = E();
                    c.enableTouchScreen ? (responsiveWidth = b.parent().parent().parent().width(), responsiveHeight = b.parent().parent().parent().height()) : (responsiveWidth = b.parent().parent().width(), responsiveHeight = b.parent().parent().height());
                    c.responsiveRelativeToBrowser && (responsiveWidth = f(window).width(), responsiveHeight = f(window).height());
                    c.width100Proc && (c.width = responsiveWidth);
                    c.height100Proc && (c.height = responsiveHeight);
                    "attractive" == c.skin && (c.isAttractiveResp = !1, r.css("right", c.rightVal + "px"));
                    if (c.origWidth != responsiveWidth || c.width100Proc) {
                        c.origWidth > responsiveWidth || c.width100Proc ? (c.width = responsiveWidth, c.isAttractiveResp = !0, "attractive" == c.skin && r.css("right", c.rightVal - 1 + "px")) : c.width100Proc || (c.width = c.origWidth);
                        c.height100Proc || (c.height = c.width / d.bannerRatio);
                        c.width = parseInt(c.width, 10);
                        c.height = parseInt(c.height, 10);
                        c.enableTouchScreen && c.responsive && (c.width -= 1);
                        e.width(c.width);
                        e.height(c.height); -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != u && 7 >= u ? (f("#curBgImgIos", e).attr("src", d.current_imgInside.attr("src")), f("#curBgImgIos", e).width(c.width), f("#curBgImgIos", e).height(c.height)) : -1 == u || -1 != u && 9 <= u ? e.css({
                            "-webkit-background-size": c.width + "px " + c.height + "px",
                            "-moz-background-size": c.width + "px " + c.height + "px",
                            "-o-background-size": c.width + "px " + c.height + "px",
                            "-ms-background-size": c.width + "px " + c.height + "px",
                            "background-size": c.width + "px " + c.height + "px"
                        }) : 8 == u && e.css({
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
                        });
                        c.enableTouchScreen && (e.parent().width(c.width + 1), e.parent().height(c.height));
                        h.css("margin-top", parseInt((c.height - m.height()) / 2, 10) + "px");
                        for (i = 0; i < g; i++) f(f(s[i]).attr("data-text-id")).css("width", b.width() + "px");
                        k.css("left", parseInt((e.width() - k.width()) / 2, 10) + "px");
                        v.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px");
                        x.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(q.css("padding-left").substring(0, q.css("padding-left").length - 2), 10) + "px");
                        clearTimeout(d.timeoutID);
                        B(1, c, d, g, y, e, l, s)
                    }
                }, 300))
            });
            var w = f(".bottomNavButtonOFF", e);
            w.mousedown(function () {
                C = !0;
                if (!d.effectIsRunning) {
                    var b = f(this).attr("rel");
                    f(w[d.current_img_no]).removeClass("bottomNavButtonON");
                    d.bottomNavClicked = !0;
                    d.current_img_no = b - 1;
                    B(1, a, d, p, y, e, w, s)
                }
            });
            w.mouseup(function () {
                C = !1
            });
            w.mouseenter(function () {
                var b = f(this),
                    c = b.attr("rel");
                a.showPreviewThumbs && (z = f('<div class="bottomOverThumb"></div>'), b.append(z), c = f(s[c]).attr("data-bottom-thumb"), z.html('<img src="' + c + '">'));
                b.addClass("bottomNavButtonON")
            });
            w.mouseleave(function () {
                var b = f(this),
                    c = b.attr("rel");
                a.showPreviewThumbs && z.remove();
                d.current_img_no != c && b.removeClass("bottomNavButtonON")
            });
            f(w[d.current_img_no]).addClass("bottomNavButtonON");
            0 < a.autoPlay && 1 < p && (a.showCircleTimer && (d.intervalID = setInterval(function () {
                K(d, a)
            }, 125)), d.timeoutID = setTimeout(function () {
                B(1, a, d, p, y, e, w, s)
            }, 1E3 * a.autoPlay))
        })
    };
    f.fn.myReverse = [].reverse;
    f.fn.allinone_bannerRotator.defaults = {
        skin: "classic",
        width: 960,
        height: 384,
        width100Proc: !1,
        height100Proc: !1,
        randomizeImages: !1,
        firstImg: 0,
        numberOfStripes: 20,
        numberOfRows: 5,
        numberOfColumns: 10,
        defaultEffect: "random",
        effectDuration: 0.5,
        autoPlay: 4,
        loop: !0,
        target: "_blank",
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        enableTouchScreen: !0,
        absUrl: "",
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        origWidth: 0,
        origHeight: 0,
        thumbsWrapperMarginBottom: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);