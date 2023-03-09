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
  AOS.init({
    duration: 1000,
    offset: 450
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
  // https://webFardin.github.io

// https://github.com/webFardin

// https://codepen.io/webFardin

// https://t.me/webFardin

"use strict";

let audioTrack = document.createElement("audio");
audioTrack.preload = "metadata";
document.body.append(audioTrack);

let blurElement = document.getElementById("blurElement");

let themes = document.getElementById("themes");

let musicBox = document.getElementById("musicBox");

let trackItemsWrapper = document.getElementById("trackItemsWrapper");

let trackArtistName = document.getElementById("trackArtistName");
let trackAlbumName = document.getElementById("trackAlbumName");

let coverImage = document.getElementById("coverImage");

let playButton = document.getElementById("playButton");
let playButtonIcon = playButton.firstElementChild;
let pauseButtonIcon = playButton.lastElementChild;

let previousButton = document.getElementById("previousButton");
let nextButton = document.getElementById("nextButton");

let volumeWrapper = document.getElementById("volumeWrapper");
let volumeButton = document.getElementById("volumeButton");
let volumeNumber = document.getElementById("volumeNumber");

let wavesVolumeButton = document.getElementById("wavesVolumeButton");
let highVolumeSymbol = document.getElementById("highVolumeSymbol");
let mediumVolumeSymbol = document.getElementById("mediumVolumeSymbol");
let lowVolumeSymbol = document.getElementById("lowVolumeSymbol");
let volumeCross = document.getElementById("volumeCross");

let currentTrackTimeNumber = document.getElementById("currentTrackTimeNumber");
let currentTrackDuration = document.getElementById("currentTrackDuration");

let trackProgressBar = document.getElementById("trackProgressBar");
let trackLoading = document.getElementById("trackLoading");
let currentTrackTimeBar = document.getElementById("currentTrackTimeBar");

let musics = [
  {
    trackName: "Bhaj_Man_Radhe_Govinda",
    artist: "Achyut Gopi",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Bhaj_Man_Radhe_Govinda.mp3"
  },
  {
    trackName: "Govindam Adi Purusham",
    artist: "Brahma_Samhitha",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Brahma_Samhitha_Govindam%20Adi%20Purusham.mp3"
  },
  {
    trackName: "Maha_Mantra",
    artist: "Candrika",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Candrika_Maha_Mantra.mp3"
  },
  {
    trackName: "Damodar Ashtakam",
    artist: "Unknown",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Damodar%20Ashtakam%20with%20Lyrics%20and%20Meaning%20-%20ISKCON%20Temple%20Songs%20_%20Sri%20Damodarashtakam(MP3_128K).mp3"
  },

  {
    trackName: "Hare Krishna Hare Rama _Mahamantra",
    artist: "Unknown",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Hare%20Krishna%20Hare%20Rama%20_%20Mahamantra%20_%20Lofi%20Spiritual%20_%20Slowed%20_%20Reverb(MP3_320K).mp3"
  },
  {
    trackName: "Mahamantra",
    artist: "Unknown",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Hare%20Krishna%20Mahamantra(MP3_128K).mp3"
  },
  {
    trackName: "Jagannath Sloka",
    artist: "Unknown",
    coverImage: "https://i.postimg.cc/k4Ks3k2W/FB-IMG-15070308116375532.jpg",
    audioSource:
      "https://github.com/achyutsharan3267/iskconbace/raw/master/src/assets/kirtan/Jagannath%20Sloka%20(%E0%A6%9C%E0%A6%97%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%A5%20%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%95)%20_%20Sainik%20Dey%20_%20Avik%20Sur%20_%20SVF%20Devotional(MP3_128K).mp3"
  }
];

musics.forEach((item, index) => {
  trackItemsWrapper.innerHTML += `<button class="track-item" data-index="${index}">${
    index + 1
  }. ${item.trackName}</button>`;
});

trackItemsWrapper.firstElementChild.classList.add("active");

function informationUpdate(target) {
  target = target ? target : 0;
  coverImage.src = "";
  coverImage.src = musics[target].coverImage;
  audioTrack.src = musics[target].audioSource;
  trackArtistName.textContent = musics[target].artist;
  trackAlbumName.textContent = musics[target].album;
}

informationUpdate();

themes.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  let targetTheme = e.target.dataset.theme;

  let activeTheme = document.querySelector(".active-theme");
  activeTheme.classList.remove("active-theme");

  e.target.classList.add("active-theme");

  switch (targetTheme) {
    case "theme1":
      blurElement.style.visibility = "hidden";
      musicBox.style.border = "";
      musicBox.style.boxShadow = "";
      coverImage.style.background = "";
      trackProgressBar.style.background = "";
      currentTrackTimeBar.style.background = "";
      trackLoading.style.background = "";
      break;

    case "theme2":
      blurElement.style.visibility = "visible";
      musicBox.style.border = "1px solid #ffffff12";
      musicBox.style.boxShadow =
        "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
      blurElement.style.background =
        "linear-gradient(135deg, #dc143c, #009688)";
      coverImage.style.background = "#00968875";
      trackProgressBar.style.background = "#0fd5ca73";
      currentTrackTimeBar.style.background = "#0fd5ca";
      trackLoading.style.background = "#0fd5ca";
      break;

    case "theme3":
      blurElement.style.visibility = "visible";
      musicBox.style.border = "1px solid #ffffff12";
      musicBox.style.boxShadow =
        "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
      blurElement.style.background =
        "linear-gradient(135deg, #7f0096, #14abdc)";
      coverImage.style.background = "#288bcf75";
      trackProgressBar.style.background = "#0fd5ca73";
      currentTrackTimeBar.style.background = "#0fd5ca";
      trackLoading.style.background = "#0fd5ca";
      break;
  }
});

trackItemsWrapper.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  let activeAudio = document.querySelector(".active");
  activeAudio.classList.remove("active");
  e.target.classList.add("active");

  let targetIndex = e.target.dataset.index;

  informationUpdate(targetIndex);
});

audioTrack.addEventListener("waiting", waitingEvent);

function waitingEvent() {
  trackLoading.classList.add("track-loading");
}

audioTrack.addEventListener("canplay", (e) => {
  trackLoading.classList.remove("track-loading");
  audioTrack.removeEventListener("waiting", waitingEvent);
});

let firstPlay = true;
audioTrack.addEventListener("loadstart", (e) => {
  audioTrack.addEventListener("waiting", waitingEvent);
  currentTrackTimeBar.style.width = 0;
  if (!firstPlay) {
    audioTrack.play();
  }
  firstPlay = false;
});

let requestAnimationTimeArgument = performance.now();

requestAnimationFrame(function currentTimeUpdater(
  requestAnimationTimeArgument
) {
  let currentTime = audioTrack.currentTime;

  let currentMinute = Math.trunc(currentTime / 60);
  let currentSeconds = Math.trunc(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  currentTrackTimeNumber.textContent = `${currentMinute}:${currentSeconds}`;

  currentTrackTimeBar.style.width =
    (currentTime / audioTrack.duration) * 100 + "%";

  requestAnimationFrame(currentTimeUpdater);
});

audioTrack.addEventListener("canplay", canPlayEvent);

audioTrack.addEventListener("durationchange", canPlayEvent);

function canPlayEvent(e) {
  let totalTime = audioTrack.duration;

  let totalMinute = Math.trunc(totalTime / 60);
  let totalSeconds = Math.trunc(totalTime % 60);

  if (totalSeconds < 10) {
    totalSeconds = "0" + totalSeconds;
  }

  currentTrackDuration.textContent = `${totalMinute}:${totalSeconds}`;
}

trackProgressBar.addEventListener("pointerdown", (e) => {
  audioTrack.currentTime =
    ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
    100;
  trackProgressBar.addEventListener("pointermove", trackProgressBarPointerMove);
  function trackProgressBarPointerMove(e) {
    audioTrack.currentTime =
      ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
      100;
  }
  document.addEventListener("pointerup", (e) => {
    trackProgressBar.removeEventListener(
      "pointermove",
      trackProgressBarPointerMove
    );
  });
});

trackProgressBar.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    audioTrack.currentTime += 5;
  }
  if (e.deltaY > 0) {
    audioTrack.currentTime -= 5;
  }
});

playButton.addEventListener("click", (e) => {
  if (audioTrack.paused) {
    audioTrack.play();
  } else {
    audioTrack.pause();
  }
});

previousButton.addEventListener("click", (e) => {
  let activeAudio = document.querySelector(".active");

  let trackItems = document.querySelectorAll(".track-item");

  let activeIndex =
    +activeAudio.dataset.index == 0
      ? trackItems.length
      : +activeAudio.dataset.index;

  let targetIndex = +activeIndex - 1;

  activeAudio.classList.remove("active");
  trackItems[targetIndex].classList.add("active");

  informationUpdate(targetIndex);
});

nextButton.addEventListener("click", (e) => {
  let activeAudio = document.querySelector(".active");

  let trackItems = document.querySelectorAll(".track-item");

  let activeIndex =
    +activeAudio.dataset.index == trackItems.length - 1
      ? -1
      : +activeAudio.dataset.index;

  let targetIndex = +activeIndex + 1;

  activeAudio.classList.remove("active");
  trackItems[targetIndex].classList.add("active");

  informationUpdate(targetIndex);
});

audioTrack.addEventListener("play", (e) => {
  playButtonIcon.style.opacity = 0;
  pauseButtonIcon.style.opacity = 1;
  if (wasPlaying) {
    wasPlaying = false;
  }
});

// prevent from nested animations
let firstTimeAnimation = true;
audioTrack.addEventListener("playing", (e) => {
  if (firstTimeAnimation) {
    blurElement.animate(
      { filter: "blur(30px)" },
      {
        duration: 5000,
        easing: "ease-in-out",
        direction: "alternate",
        iterations: Infinity
      }
    );
    firstTimeAnimation = false;
  }
});

audioTrack.addEventListener("pause", (e) => {
  playButtonIcon.style.opacity = 1;
  pauseButtonIcon.style.opacity = 0;

  blurElement.animate(
    { filter: "blur(10px)" },
    {
      duration: 1000,
      easing: "linear",
      fill: "forwards"
    }
  );

  firstTimeAnimation = true;
});

volumeWrapper.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    switch (true) {
      case e.deltaY < 0:
        audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
        break;

      case e.deltaY > 0:
        audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
        break;
    }
    volumeNumberUpdate();
  },
  { passive: false }
);

function volumeNumberUpdate() {
  // trunc is just for (0.55 * 100)!
  volumeNumber.textContent = Math.trunc(audioTrack.volume * 100);
}

let wasPlaying;
audioTrack.addEventListener("volumechange", (e) => {
  let currentVolume = audioTrack.volume;
  switch (true) {
    case 0.66 < currentVolume:
      highVolumeSymbol.style.fill = "white";
      mediumVolumeSymbol.style.fill = "white";
      lowVolumeSymbol.style.fill = "white";
      wavesVolumeButton.style.opacity = 1;
      volumeCross.style.opacity = 0;
      if (wasPlaying) {
        audioTrack.play();
        wasPlaying = false;
      }
      break;

    case 0.33 < currentVolume && currentVolume < 0.66:
      highVolumeSymbol.style.fill = "#808080";
      mediumVolumeSymbol.style.fill = "white";
      lowVolumeSymbol.style.fill = "white";
      wavesVolumeButton.style.opacity = 1;
      volumeCross.style.opacity = 0;
      if (wasPlaying) {
        audioTrack.play();
        wasPlaying = false;
      }
      break;

    case 0 < currentVolume && currentVolume < 0.33:
      highVolumeSymbol.style.fill = "#808080";
      mediumVolumeSymbol.style.fill = "#808080";
      lowVolumeSymbol.style.fill = "white";
      wavesVolumeButton.style.opacity = 1;
      volumeCross.style.opacity = 0;
      if (wasPlaying) {
        audioTrack.play();
        wasPlaying = false;
      }
      break;

    case currentVolume == 0:
      wavesVolumeButton.style.opacity = 0;
      volumeCross.style.opacity = 1;
      if (!audioTrack.paused) {
        wasPlaying = true;
        audioTrack.pause();
      }
      break;
  }

  volumeNumberUpdate();
});

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
      break;

    case "ArrowUp":
      audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
      break;

    case "ArrowLeft":
      audioTrack.currentTime -= 5;
      break;

    case "ArrowRight":
      audioTrack.currentTime += 5;
      break;

    case "Space":
      if (audioTrack.paused) {
        audioTrack.play();
      } else {
        audioTrack.pause();
      }
      break;
  }

  if (e.code == "ArrowDown" || e.code == "ArrowUp") {
    volumeButton.style.opacity = 0;
    volumeNumber.style.opacity = 1;

    document.addEventListener("keyup", (e) => {
      let volumeChangeAnimation = setTimeout(() => {
        volumeButton.style.opacity = 1;
        volumeNumber.style.opacity = 0;
      }, 600);

      document.addEventListener("keydown", (e) => {
        if (e.code == "ArrowDown" || e.code == "ArrowUp") {
          clearTimeout(volumeChangeAnimation);
        }
      });
    });
  }
});

coverImage.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  let coverImageBigSize = coverImage.cloneNode();
  coverImageBigSize.className = "cover-image-big-size";
  coverImageBigSize.removeAttribute("id");
  document.body.append(coverImageBigSize);

  document.addEventListener("pointerup", (e) => {
    coverImageBigSize.remove();
  });
});

}
