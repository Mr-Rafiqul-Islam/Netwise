(function ($) {
  ("use strict");

  // Preloader js
	function preloader() {
		$('#preloader').delay(0).fadeOut();
	};

	$(window).on('load', function () {
		preloader();
	});
  // dynamic year for copyright
  document.getElementById("copyright_year").textContent = new Date().getFullYear();

  // Blog slider js
	$(".blog-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: `<i class="fa-solid arrows arrow-prev fa-arrow-left"></i>`,
		nextArrow: `<i class="fa-solid arrows arrow-next fa-arrow-right"></i>`,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});

  // Testimonial two slider js
	$(".testimonial-two-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
	});
  document.addEventListener("DOMContentLoaded", function () {
    // horizontal scroll
    let horizontalSection = document.querySelector('.horizontal-scroll');
    if (horizontalSection) {
      gsap.to('.horizontal-scroll', {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
          trigger: '.horizontal-scroll',
          start: 'top 40%',
          end: '+=2000px',
          pin: '.project-section-two',
          scrub: 1.4,
          invalidateOnRefresh: true
        }
      });
    }

    // Split text animation
		if ($(".split-text").length > 0) {
			let st = $(".split-text");
			if (st.length == 0) return;
			gsap.registerPlugin(SplitText);
			st.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "tp-split-line"
				});
				gsap.set(el, {
					perspective: 400
				});
				if ($(el).hasClass('right')) {
					gsap.set(el.split.chars, {
						opacity: 0,
						x: "50",
						ease: "Back.easeOut",
					});
				}
				if ($(el).hasClass('left')) {
					gsap.set(el.split.chars, {
						opacity: 0,
						x: "-50",
						ease: "circ.out",
					});
				}
				if ($(el).hasClass('up')) {
					gsap.set(el.split.chars, {
						opacity: 0,
						y: "80",
						ease: "circ.out",
					});
				}
				if ($(el).hasClass('down')) {
					gsap.set(el.split.chars, {
						opacity: 0,
						y: "-80",
						ease: "circ.out",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					scale: 1,
					opacity: 1,
					duration: 0.4,
					stagger: 0.02,
				});
			});
		};

		// Image reveal js
		let revealContainers = document.querySelectorAll(".reveal");
		revealContainers.forEach((container) => {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none"
				}
			});

			tl.set(container, {
				autoAlpha: 1
			});

			if (container.classList.contains('zoom-out')) {
				// Zoom-out effect
				tl.from(image, 1.5, {
					scale: 1.4,
					ease: Power2.out
				});
			} else if (container.classList.contains('left') || container.classList.contains('right')) {
				let xPercent = container.classList.contains('left') ? -100 : 100;
				tl.from(container, 1.5, {
					xPercent,
					ease: Power2.out
				});
				tl.from(image, 1.5, {
					xPercent: -xPercent,
					scale: 1,
					delay: -1.5,
					ease: Power2.out
				});
			}
		});

  });
  // fixed menu js
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 120) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // data background image js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // Magnific popup image js
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // Magnific popup Video js
  $(document).ready(function () {
    $(".popup-youtube").magnificPopup({
      disableOn: 200,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  });

  // Mobile menu js start
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(".sub-mobile-menu ul").not($(this).next("ul")).slideUp(300);
    $(".sub-mobile-menu a i")
      .not($(this).find("i"))
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this).next("ul").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  });

  /* Odometer Activeate js */
  $(document).ready(function () {
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Services slider js
  $(".services-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: '<i class="fa-solid arrow arrow-prev fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid arrow arrow-next fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".services-slider-two").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // testimonial slider js
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });

  // Team move and active js
  var team_item = gsap.utils.toArray(".team-card");
  let hover_img = gsap.utils.toArray(".hover-img");

  // Function to move the service image on mouse move
  function ServiceImageMove(event, item) {
    const contentBox = item.getBoundingClientRect();
    const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
    const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

    hover_img.forEach((img) => {
      gsap.to(img, {
        x: dx,
        y: dy,
      });
    });
  }

  // Add hover effect only for screens larger than 768px
  if (window.innerWidth > 767) {
    team_item.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        ServiceImageMove(event, item);
      });

      item.addEventListener("mouseleave", () => {
        hover_img.forEach((img) => {
          gsap.to(img, {
            x: 0,
            y: 0,
          });
        });
      });
    });

    // Add active team class on hover
    $(".team-card").hover(function () {
      $(".team-card").removeClass("active-team");
      $(this).addClass("active-team");
    });
  }
  // Back to top js
  let btn = $(".scroll-to-top");

  $(window).on("scroll", function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    }
  });
})(jQuery);
