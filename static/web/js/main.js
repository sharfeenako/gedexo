! function(e) {
    "use strict";
    if (e.exists = function(t) { return e(t).length > 0 }, e(window).on("load", function() { e(window).trigger("scroll"), e(window).trigger("resize"), e(".cs_preloader_in").fadeOut(), e(".cs_preloader").delay(150).fadeOut("slow") }), e(function() {
            var t, s, o, r;
            e(window).trigger("resize"), e(".cs_nav").append('<span class="cs_munu_toggle"><span></span></span>'), e(".menu-item-has-children").append('<span class="cs_munu_dropdown_toggle"></span>'), e(".cs_munu_toggle").on("click", function() { e(this).toggleClass("cs_toggle_active").siblings(".cs_nav_list").slideToggle() }), e(".cs_munu_dropdown_toggle").on("click", function() { e(this).toggleClass("active").siblings("ul").slideToggle(), e(this).parent().toggleClass("active") }), e(".menu-item-has-black-section").append('<span class="cs_munu_dropdown_toggle_1"></span>'), e(".cs_munu_dropdown_toggle_1").on("click", function() { e(this).toggleClass("active").siblings("ul").slideToggle(), e(this).parent().toggleClass("active") }), e(".cs_mode_btn").on("click", function() { e(this).toggleClass("active"), e("body").toggleClass("cs_dark") }), e(".cs_icon_btn").on("click", function() { e(".cs_side_header").addClass("active") }), e(".cs_close, .cs_side_header_overlay").on("click", function() { e(".cs_side_header").removeClass("active") }), e(".cs_animo_links > li > a").each(function() {
                    let t = e(this).html().split("").join("</span><span>");
                    e(this).html(`<span class="cs_animo_text"><span>${t}</span></span>`)
                }), t = e(window), s = 0, r = (o = e(".cs_sticky_header")).outerHeight() + 30, t.scroll(function() {
                    var e = t.scrollTop();
                    e >= r ? o.addClass("cs_gescout_sticky") : (o.removeClass("cs_gescout_sticky"), o.removeClass("cs_gescout_show")), o.hasClass("cs_gescout_sticky") && (e < s ? o.addClass("cs_gescout_show") : o.removeClass("cs_gescout_show")), s = e
                }), e("[data-src]").each(function() {
                    var t = e(this).attr("data-src");
                    e(this).css({ "background-image": "url(" + t + ")" })
                }), e.exists(".cs_slider_1") && new Swiper(".cs_slider_1", { loop: !0, speed: 1e3, autoplay: !1, pagination: { el: ".cs_pagination", clickable: !0 } }), e.exists(".cs_slider_2") && new Swiper(".cs_slider_2", { loop: !0, speed: 1e3, autoplay: !1, pagination: { el: ".cs_pagination", type: "fraction" }, navigation: { nextEl: ".cs_swiper_button_next", prevEl: ".cs_swiper_button_prev" } }), e.exists(".cs_slider_3") && new Swiper(".cs_slider_3", { loop: !0, speed: 1e3, autoplay: !1, slidesPerView: "auto", spaceBetween: 30, pagination: { el: ".cs_pagination", clickable: !0 } }), e.exists(".cs_slider_4") && new Swiper(".cs_slider_4", { loop: !0, speed: 1e3, autoplay: !0, pagination: { el: ".cs_pagination", clickable: !0 } }), e.exists(".cs_slider_5") && new Swiper(".cs_slider_5", { loop: !0, speed: 1e3, autoplay: !1, slidesPerView: "auto", centeredStartd: !0, spaceBetween: 30, pagination: { el: ".cs_pagination", clickable: !0 } }), e.exists(".cs_slider_6") && new Swiper(".cs_slider_6", { loop: !0, speed: 1e3, autoplay: !1, slidesPerView: "auto", centeredStartd: !0, spaceBetween: 30, pagination: { el: ".cs_pagination", clickable: !0 } }), e.exists(".cs_horizontal_scrolls") && new Swiper(".cs_horizontal_scrolls", { loop: !0, speed: 1e3, autoplay: !1, slidesPerView: "auto", centeredStartd: !0, pagination: { el: ".cs_pagination", clickable: !0 } }),
                function t() {
                    if (e.exists(".cs_isotop_items_details")) {
                        var s = e(".cs_isotop_items_details").isotope({});
                        e(".cs_isotop_item_menu").on("click", "li", function() {
                            var t = e(this).attr("data-filter");
                            s.isotope({ filter: t })
                        })
                    }
                    if (e.exists(".cs_creative_protfolio_details")) {
                        var o = e(".cs_creative_protfolio_details").isotope({});
                        e(".cs_creative_protfolio_menu").on("click", "li", function() {
                            var t = e(this).attr("data-filter");
                            o.isotope({ filter: t })
                        })
                    }
                }(), e(document).on("click", ".cs_video_open", function(t) {
                    t.preventDefault();
                    var s = e(this).attr("href");
                    s = s.split("?v=")[1].trim(), e(".cs_video_popup_container iframe").attr("src", `https://www.youtube.com/embed/${s}`), e(".cs_video_popup").addClass("active")
                }), e(".cs_video_popup_close, .cs_video_popup_layer").on("click", function(t) { e(".cs_video_popup").removeClass("active"), e("html").removeClass("overflow-hidden"), e(".cs_video_popup_container iframe").attr("src", "about:blank"), t.preventDefault() }), e(".cs_hover_tab").on("mouseenter", function() { e(this).addClass("active").siblings().removeClass("active") }), e.exists("#animated-thumbnails-gallery") && lightGallery(document.getElementById("animated-thumbnails-gallery"), { animateThumb: !1, zoomFromOrigin: !1, allowMediaOverlap: !0, toggleThumb: !0 }), e(".cs_scrollup").on("click", function(t) { t.preventDefault(), e("html,body").animate({ scrollTop: 0 }, 0) }), e.exists(".cs_fullscreen_swiper_slider") && new Swiper(".cs_fullscreen_swiper_slider", { direction: "vertical", mousewheel: !0, loop: !0, speed: 1e3, pagination: { el: ".cs_swiper_pagination", clickable: !0 }, navigation: { nextEl: ".cs_swiper_button_next", prevEl: ".cs_swiper_button_prev" } })
        }), e(window).on("scroll", function() { e(window).scrollTop() >= 350 ? e(".cs_scrollup").addClass("cs_scrollup_show") : e(".cs_scrollup").removeClass("cs_scrollup_show") }), e(".cs_accordeon .cs_accordion_body").hide().prev().on("click", function() { e(this).parents(".cs_accordeon").find(".cs_accordion_body").not(this).slideUp().prev().removeClass("active cs_icon"), e(this).next().not(":visible").slideDown().prev().addClass("active cs_icon") }), e.exists(".cs_hero_btn")) {
        e(".cs_hero_btn").on("mouseenter", function(t) {
            var s = t.pageX - e(this).offset().left,
                o = t.pageY - e(this).offset().top;
            e(this).find("span").css({ top: o, left: s })
        }), e(".cs_hero_btn").on("mouseout", function(t) {
            var s = t.pageX - e(this).offset().left,
                o = t.pageY - e(this).offset().top;
            e(this).find("span").css({ top: o, left: s })
        });
        let t = gsap.utils.toArray(".cs_round_btn_wrap");
        if (t.length > 0) var s = gsap.utils.toArray(".cs_round_btn_wrap");
        else var s = gsap.utils.toArray("#cs_round_btn_wrap");
        let o = gsap.utils.toArray(".cs_hero_btn");
        s.forEach((t, s) => {
            e(t).on("mousemove", function(r) {
                var a, i, n, c, l, p, g;
                a = r, c = 80, i = a, n = o[s], l = e(t), p = i.pageX - l.offset().left, g = i.pageY - l.offset().top, gsap.to(n, .5, { x: (p - l.width() / 2) / l.width() * c, y: (g - l.height() / 2) / l.height() * c, ease: Power2.easeOut })
            }), e(t).on("mouseleave", function(e) { gsap.to(o[s], .5, { x: 0, y: 0, ease: Power2.easeOut }) })
        })
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin), gsap.config({ nullTargetWarn: !1 }), document.addEventListener("mousemove", function e(t) { try { gsap.timeline({ defaults: { x: t.clientX, y: t.clientY } }).to(".cs_cursor_1", { ease: "power2.out" }).to(".cs_cursor_2", { ease: "power2.out" }, "-=0.4") } catch (s) { console.log(s) } });
    let r = gsap.timeline({}),
        a = document.querySelector(".cs_hero .anim_banner_text_left"),
        i = document.querySelector(".cs_hero .anim_banner_text_right"),
        n = document.querySelector(".cs_hero .anim_subtext"),
        c = new SplitText(a, { type: "chars,words" }),
        l = new SplitText(i, { type: "chars,words" }),
        p = new SplitText(n, { type: "chars words" });
    r.from(c.chars, { duration: 1.2, x: 100, autoAlpha: 0, stagger: .2 }), r.from(l.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: .1 }, "-=1"), r.from(p.words, { duration: 2, x: 50, autoAlpha: 0, stagger: .05 }, "-=1");
    gsap.utils.toArray(".anim_text_writting").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", scrub: !1, markers: !1, toggleActions: "play none none none" } }),
            s = new SplitText(e, { type: "chars, words" });
        t.from(s.chars, { duration: .5, x: 100, autoAlpha: 0, stagger: .1 }, "-=1")
    });
    gsap.utils.toArray(".anim_word_writting").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", scrub: !1, markers: !1, toggleActions: "play none none none" } }),
            s = new SplitText(e, { type: "words" });
        t.from(s.words, { duration: 2, x: 100, autoAlpha: 0, stagger: .5 }, "-=1")
    });
    gsap.utils.toArray(".anim_heading_title").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 20%", scrub: !1, markers: !1, toggleActions: "play none none none" } }),
            s = new SplitText(e, { type: "words, lines" });
        gsap.set(e, { perspective: 400 }), s.split({ type: "lines" }), t.from(s.lines, { duration: 1, delay: .3, opacity: 0, rotationX: -80, force3D: !0, transformOrigin: "top center -50", stagger: .1 })
    });
    gsap.utils.toArray(".cs_btn_anim").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 20%", scrub: !1, markers: !1, toggleActions: "play push none none" } });
        gsap.set(e, { opacity: 0, x: 100 }), t.to(e, { duration: 1, delay: .8, opacity: 1, x: -0 })
    });
    gsap.utils.toArray(".anim_text").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", duration: 2, end: "bottom 60%", scrub: !1, markers: !1, toggleActions: "play none none none" } }),
            s = new SplitText(e, { type: "lines" });
        gsap.set(e, { perspective: 400 }), s.split({ type: "lines" }), t.from(s.lines, { duration: 1, delay: .5, opacity: 0, rotationX: -80, force3D: !0, transformOrigin: "top center -50", stagger: .1 })
    });
    let g = gsap.utils.toArray(".anim_blog");
    gsap.set(g, { opacity: 0, y: -100, x: -100 }), g && g.forEach((e, t) => { gsap.to(e, { scrollTrigger: { trigger: e, start: "top center+=200", markers: !1 }, opacity: 1, x: -0, y: -0, ease: "power2.out", duration: 2, stagger: .5 }) });
    gsap.utils.toArray(".cs_startup_agency.cs_card").forEach(e => { gsap.set(e, { opacity: 0, x: 100 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top center+=200", markers: !1 }, opacity: 1, x: -0, ease: "power2.out", duration: 2, stagger: { each: .4 } }) });
    let $ = gsap.utils.toArray(".anim_text_upanddowns"),
        d = new SplitText($, { type: "chars" });
    gsap.timeline({ scrollTrigger: { trigger: $, start: "top 90%", end: "bottom 60%", scrub: !1, markers: !1, toggleActions: "play none none none" } }).from(d.chars, { duration: 2, opacity: 0, delay: .5, scale: 1.2, stagger: .5, y: 50, rotationX: 100, transformOrigin: "0% 30% -30", ease: "elastic", stagger: .05 });
    gsap.utils.toArray(".anim_div_ShowZoom").forEach(e => { gsap.set(e, { opacity: 0, scale: 0 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", markers: !1 }, opacity: 1, scale: 1, delay: .5, ease: "power3.out", duration: 1, stagger: .5 }) });
    gsap.utils.toArray(".anim_div_ShowLeftSide").forEach(e => { gsap.set(e, { opacity: 0, x: -100 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", markers: !1 }, opacity: 1, x: -0, ease: "power2.out", duration: 2, stagger: .5 }) });
    gsap.utils.toArray(".anim_div_ShowRightSide").forEach(e => { gsap.set(e, { opacity: 0, x: 100 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", markers: !1 }, opacity: 1, x: -0, ease: "power2.out", duration: 2, stagger: .5 }) });
    gsap.utils.toArray(".anim_div_ShowDowns").forEach(e => { gsap.set(e, { opacity: 0, y: 100 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", markers: !1 }, opacity: 1, y: -0, ease: "power2.out", duration: 2, stagger: .5 }) });
    gsap.utils.toArray(".anim_div_ShowUps").forEach(e => { gsap.set(e, { opacity: 0, y: -100 }), gsap.to(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", markers: !1 }, opacity: 1, y: -0, ease: "power2.out", duration: 2, stagger: .5 }) });
    let u = gsap.utils.toArray(".cs_funfact.cs_style1"),
        m = gsap.utils.toArray(".amin_auto_count");
    u && (m.forEach(e => { gsap.from(e, { scrollTrigger: { trigger: e, start: "top center+=200", markers: !1 }, delay: 2, innerText: 0, duration: 3, snap: { innerText: 1 } }) }), gsap.from(u, { scrollTrigger: { trigger: u, start: "top center+=200", markers: !1 }, duration: 2, scale: .5, opacity: 0, delay: .5, stagger: .2, ease: "elastic", force3D: !0 }));
    gsap.utils.toArray(".anim_text_popup").forEach(e => {
        let t = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 90%", end: "bottom 60%", toggleActions: "play none none none" } }),
            s = new SplitText(e, { type: "words" }),
            o = s.words.length;
        gsap.delayedCall(.05, function() { for (var e = 0; e < o; e++) t.from(s.words[e], 1, { force3D: !0, scale: Math.random() > .5 ? 0 : 2, opacity: 0 }, Math.random()) })
    })
}(jQuery);