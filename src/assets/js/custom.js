function myFunction() {
  // remove all .active classes when clicked anywhere
  hide = true;
  $('body').on("click", function () {
    if (hide) $('.nav-item').removeClass('active');
    hide = true;
  });

  // add and remove .active
  $('body').on('click', '.nav-item', function () {

    var self = $(this);

    if (self.hasClass('active')) {
      $('.nav-item').removeClass('active');
      return false;
    }

    $('.nav-item').removeClass('active');

    self.toggleClass('active');
    hide = false;
  });

}


function TwakTo() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/63f530914247f20fefe1e35a/1gpqsbe7g';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}

function dark() {
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  })
}

function animation() {
  AOS.init({
    duration: 1000,
    offset: 250
  });
}


function animationparampara() {
  $(".department").click(function(){
    $(this).siblings().children('.sections').slideUp();
    $(this).children('.sections').slideToggle();
  });
}

function sks() {

  ! function (n, i, e, a) {
    n.navigation = function (t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 991,
          showDuration: 200,
          hideDuration: 200,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fade",
          submenuIndicator: !0,
          submenuIndicatorTrigger: !1,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          hiddenOnMobile: !1,
          offCanvasSide: "left",
          offCanvasCloseButton: !0,
          animationOnShow: "",
          animationOnHide: "",
          onInit: function () {},
          onLandscape: function () {},
          onPortrait: function () {},
          onShowOffCanvas: function () {},
          onHideOffCanvas: function () {}
        },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = "click.nav touchstart.nav",
        f = "mouseenter focusin",
        c = "mouseleave focusout";
      r.settings = {};
      n(t), t = t;
      n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"), r.init = function () {
        r.settings = n.extend({}, o, s), r.settings.offCanvasCloseButton && n(t).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>&#10005;</span>"), "right" == r.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), r.settings.hidden && (n(t).addClass("navigation-hidden"), r.settings.mobileBreakpoint = 99999), v(), r.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function (n) {
          n.stopPropagation(), n.preventDefault(), r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")
        }), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
          r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
        }), n(t).find(".nav-search-button, .nav-search-close-button").on("click touchstart keydown", function (i) {
          i.stopPropagation(), i.preventDefault();
          var e = i.keyCode || i.which;
          "click" === i.type || "touchstart" === i.type || "keydown" === i.type && 13 == e ? r.toggleSearch() : 9 == e && n(i.target).blur()
        }), n(t).find(".megamenu-tabs").length > 0 && w(), n(i).resize(function () {
          r.initNavigationMode(g()), C(), r.settings.hiddenOnMobile && m()
        }), r.initNavigationMode(g()), r.settings.hiddenOnMobile && m(), s !== a && r.callback("onInit")
      };
      var h = function () {
          n(t).find(".nav-submenu").hide(0), n(t).find("li").removeClass("focus")
        },
        v = function () {
          n(t).find("li").each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), r.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
          })
        },
        m = function () {
          n(t).hasClass("navigation-portrait") ? n(t).addClass("navigation-hidden") : n(t).removeClass("navigation-hidden")
        };
      r.showSubmenu = function (i, e) {
        g() > r.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").fadeOut(), "fade" == e ? n(i).children(".nav-submenu").stop(!0, !0).delay(r.settings.showDelayDuration).fadeIn(r.settings.showDuration).removeClass(r.settings.animationOnHide).addClass(r.settings.animationOnShow) : n(i).children(".nav-submenu").stop(!0, !0).delay(r.settings.showDelayDuration).slideDown(r.settings.showDuration).removeClass(r.settings.animationOnHide).addClass(r.settings.animationOnShow), n(i).addClass("focus")
      }, r.hideSubmenu = function (i, e) {
        "fade" == e ? n(i).find(".nav-submenu").stop(!0, !0).delay(r.settings.hideDelayDuration).fadeOut(r.settings.hideDuration).removeClass(r.settings.animationOnShow).addClass(r.settings.animationOnHide) : n(i).find(".nav-submenu").stop(!0, !0).delay(r.settings.hideDelayDuration).slideUp(r.settings.hideDuration).removeClass(r.settings.animationOnShow).addClass(r.settings.animationOnHide), n(i).removeClass("focus").find(".focus").removeClass("focus")
      };
      var p = function () {
        n("body").removeClass("no-scroll"), r.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function () {
          n(this).remove()
        })
      };
      r.showOffcanvas = function () {
        n("body").addClass("no-scroll"), r.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"), n(t).find(".nav-overlay-panel").css("background-color", r.settings.overlayColor).fadeIn(300).on("click touchstart", function (n) {
          r.hideOffcanvas()
        })), "left" == r.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
      }, r.hideOffcanvas = function () {
        n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
          n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
        }), p()
      }, r.toggleOffcanvas = function () {
        g() <= r.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")) : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
      }, r.toggleSearch = function () {
        "none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").fadeIn(200), n(t).find(".nav-search").find("input").focus()) : (n(t).find(".nav-search").find("form").fadeOut(200), n(t).find(".nav-search").find("input").blur())
      }, r.initNavigationMode = function (i) {
        r.settings.responsive ? (i <= r.settings.mobileBreakpoint && u > r.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), O(), s !== a && r.callback("onPortrait")), i > r.settings.mobileBreakpoint && d <= r.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), y(), p(), r.hideOffcanvas(), s !== a && r.callback("onLandscape")), u = i, d = i) : (n(t).addClass("navigation-landscape"), y(), s !== a && r.callback("onLandscape"))
      };
      var g = function () {
          return i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        },
        b = function () {
          n(t).find(".nav-menu").find("li, a").off(l).off(f).off(c)
        },
        C = function () {
          if (g() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0);
            n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
              n(this).parent().position().left + n(this).outerWidth() > i ? n(this).css("right", 0) : n(this).css("right", "auto")
            })
          }
        },
        w = function () {
          function i(i) {
            var e = n(i).children(".megamenu-tabs-nav").children("li"),
              a = n(i).children(".megamenu-tabs-pane");
            n(e).on("click.tabs touchstart.tabs", function (i) {
              i.stopPropagation(), i.preventDefault(), n(e).removeClass("active"), n(this).addClass("active"), n(a).hide(0).removeClass("active"), n(a[n(this).index()]).show(0).addClass("active")
            })
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++) i(e[a])
        },
        y = function () {
          b(), h(), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == r.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(l, function (e) {
            if (r.hideSubmenu(n(this).parent("li").siblings("li"), r.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(r.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
              if (e.stopPropagation(), e.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return r.showSubmenu(n(this).parent("li"), r.settings.effect), C(), !1;
              if (r.hideSubmenu(n(this).parent("li"), r.settings.effect), "_blank" === n(this).attr("target") || "blank" === n(this).attr("target")) i.open(n(this).attr("href"));
              else {
                if ("#" === n(this).attr("href") || "" === n(this).attr("href") || "javascript:void(0)" === n(this).attr("href")) return !1;
                i.location.href = n(this).attr("href")
              }
            }
          }) : n(t).find(".nav-menu").find("li").on(f, function () {
            r.showSubmenu(this, r.settings.effect), C()
          }).on(c, function () {
            r.hideSubmenu(this, r.settings.effect)
          }), r.settings.hideSubWhenGoOut && n("html").on("click.body touchstart.body", function (i) {
            0 === n(i.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".focus").removeClass("focus"), n(t).find(".nav-search").find("form").fadeOut())
          })
        },
        O = function () {
          b(), h(), r.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger ? n(t).find(".submenu-indicator").on(l, function (i) {
            return i.stopPropagation(), i.preventDefault(), r.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), r.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), r.showSubmenu(n(this).parent("a").parent("li"), "slide"), !1) : (n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void r.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
          }) : n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(l, function (e) {
            if (e.stopPropagation(), e.preventDefault(), r.hideSubmenu(n(this).parent("li").siblings("li"), r.settings.effect), r.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).siblings(".nav-submenu").css("display")) return n(this).children(".submenu-indicator").addClass("submenu-indicator-up"), n(this).parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), r.showSubmenu(n(this).parent("li"), "slide"), !1;
            if (n(this).parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), r.hideSubmenu(n(this).parent("li"), "slide"), "_blank" === n(this).attr("target") || "blank" === n(this).attr("target")) i.open(n(this).attr("href"));
            else {
              if ("#" === n(this).attr("href") || "" === n(this).attr("href") || "javascript:void(0)" === n(this).attr("href")) return !1;
              i.location.href = n(this).attr("href")
            }
          }))
        };
      r.callback = function (n) {
        s[n] !== a && s[n].call(t)
      }, r.init()
    }, n.fn.navigation = function (i) {
      return this.each(function () {
        if (a === n(this).data("navigation")) {
          var e = new n.navigation(this, i);
          n(this).data("navigation", e)
        }
      })
    }
  }(jQuery, window, document),
  function (n) {
    "use strict";
    n(window);
    n.fn.navigation && (n("#navigation1").navigation(), n("#always-hidden-nav").navigation({
      hidden: !0
    }))
  }(jQuery);
}

function music() {
  // Designed by: Mauricio Bucardo
// Original image: https://dribbble.com/shots/6957353-Music-Player-Widget
"use strict";
// add elemnts
const bgBody = ["#e5e7e9", "#ff4545", "#f8ded3", "#ffc382", "#f5eda6", "#ffcbdc", "#dcf3f3"];
const body = document.body;
const player = document.querySelector(".player");
const playerHeader = player.querySelector(".player__header");
const playerControls = player.querySelector(".player__controls");
const playerPlayList = player.querySelectorAll(".player__song");
const playerSongs = player.querySelectorAll(".audio");
const playButton = player.querySelector(".play");
const nextButton = player.querySelector(".next");
const backButton = player.querySelector(".back");
const playlistButton = player.querySelector(".playlist");
const slider = player.querySelector(".slider");
const sliderContext = player.querySelector(".slider__context");
const sliderName = sliderContext.querySelector(".slider__name");
const sliderTitle = sliderContext.querySelector(".slider__title");
const sliderContent = slider.querySelector(".slider__content");
const sliderContentLength = playerPlayList.length - 1;
const sliderWidth = 100;
let left = 0;
let count = 0;
let song = playerSongs[count];
let isPlay = false;
const pauseIcon = playButton.querySelector("img[alt = 'pause-icon']");
const playIcon = playButton.querySelector("img[alt = 'play-icon']");
const progres = player.querySelector(".progres");
const progresFilled = progres.querySelector(".progres__filled");
let isMove = false;
// creat functions
function openPlayer() {
playerHeader.classList.add("open-header");
playerControls.classList.add("move");
slider.classList.add("open-slider");
}
function closePlayer() {
playerHeader.classList.remove("open-header");
playerControls.classList.remove("move");
slider.classList.remove("open-slider");
}
function next(index) {
count = index || count;
if (count == sliderContentLength) {
count = count;
return;
}
left = (count + 1) * sliderWidth;
left = Math.min(left, (sliderContentLength) * sliderWidth);
sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
count++;
run();
}
function back(index) {
count = index || count;
if (count == 0) {
count = count;
return;
}
left = (count - 1) * sliderWidth;
left = Math.max(0, left);
sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
count--;
run();
}
function changeSliderContext() {
sliderContext.style.animationName = "opacity";
sliderName.textContent = playerPlayList[count].querySelector(".player__title").textContent;
sliderTitle.textContent = playerPlayList[count].querySelector(".player__song-name").textContent;
if (sliderName.textContent.length > 16) {
const textWrap = document.createElement("span");
textWrap.className = "text-wrap";
textWrap.innerHTML = sliderName.textContent + " " + sliderName.textContent;
sliderName.innerHTML = "";
sliderName.append(textWrap);
}
if (sliderTitle.textContent.length >= 18) {
const textWrap = document.createElement("span");
textWrap.className = "text-wrap";
textWrap.innerHTML = sliderTitle.textContent + " " + sliderTitle.textContent;
sliderTitle.innerHTML = "";
sliderTitle.append(textWrap);
}
}
function changeBgBody() {
body.style.backgroundColor = bgBody[count];
}
function selectSong() {
song = playerSongs[count];
for (const item of playerSongs) {
if (item != song) {
item.pause();
item.currentTime = 0;
}
}
if (isPlay) song.play();
}
function run() {
changeSliderContext();
changeBgBody();
selectSong();
}
function playSong() {
if (song.paused) {
song.play();
playIcon.style.display = "none";
pauseIcon.style.display = "block";
}else{
song.pause();
isPlay = false;
playIcon.style.display = "";
pauseIcon.style.display = "";
}
}
function progresUpdate() {
const progresFilledWidth = (this.currentTime / this.duration) * 100 + "%";
progresFilled.style.width = progresFilledWidth;
if (isPlay && this.duration == this.currentTime) {
next();
}
if (count == sliderContentLength && song.currentTime == song.duration) {
playIcon.style.display = "block";
pauseIcon.style.display = "";
isPlay = false;
}
}
function scurb(e) {
// If we use e.offsetX, we have trouble setting the song time, when the mousemove is running
const currentTime = ( (e.clientX - progres.getBoundingClientRect().left) / progres.offsetWidth ) * song.duration;
song.currentTime = currentTime;
}
function durationSongs() {
let min = parseInt(this.duration / 60);
if (min < 10) min = "0" + min;
let sec = parseInt(this.duration % 60);
if (sec < 10) sec = "0" + sec;
const playerSongTime = `${min}:${sec}`;
this.closest(".player__song").querySelector(".player__song-time").append(playerSongTime);
}
changeSliderContext();
// add events
sliderContext.addEventListener("click", openPlayer);
sliderContext.addEventListener("animationend", () => sliderContext.style.animationName ='');
playlistButton.addEventListener("click", closePlayer);
nextButton.addEventListener("click", () => {
next(0)
});
backButton.addEventListener("click", () => {
back(0)
});
playButton.addEventListener("click", () => {
isPlay = true;
playSong();
});
playerSongs.forEach(song => {
song.addEventListener("loadeddata" , durationSongs);
song.addEventListener("timeupdate" , progresUpdate);
});
progres.addEventListener("pointerdown", (e) => {
scurb(e);
isMove = true;
});
document.addEventListener("pointermove", (e) => {
if (isMove) {
scurb(e);
song.muted = true;
}
});
document.addEventListener("pointerup", () => {
isMove = false;
song.muted = false;
});
playerPlayList.forEach((item, index) => {
item.addEventListener("click", function() {
if (index > count) {
next(index - 1);
return;
}
if (index < count) {
back(index + 1);
return;
}
});
});
}
