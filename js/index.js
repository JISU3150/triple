$(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $("html, body").css({ overflowY: "hidden" });

  /*메인 바 자동 애니이션*/
  let mainCenter = document.querySelector(".center_wrap");
  let progressBar = document.querySelector(".progress_bar");
  let mainBar = document.querySelector(".bar_top");
  setInterval(function () {
    mainCenter.classList.add("on");
    progressBar.classList.add("on");
    setTimeout(function () {
      mainBar.classList.add("on");
    }, 1200);
  });

  /*con2 modal & scrollbar hover*/
  let card = document.querySelectorAll(".swiper-slide");
  let cardCount = document.querySelectorAll(".swiper-slide").length;
  let modal = document.querySelectorAll(".modal");
  let modalImg = document.querySelectorAll(".modal_img img");
  let modalText = document.querySelectorAll(".modal_text p");
  let con2Scroll = document.querySelector(".swiper-scrollbar");
  let scrollText = document.querySelector(".scroll_bar_alret>p");

  for (let i = 0; i < cardCount; i++) {
    card[i].addEventListener("click", function () {
      modal[i].style.display = "flex";
      isScrolling = true;
      setTimeout(function () {
        modalImg[i].classList.add("on");
        modalText[i].classList.add("on");
      }, 200);
    });

    modal[i].addEventListener("click", function () {
      isScrolling = false;
      modal[i].style.display = "none";
      modalImg[i].classList.remove("on");
      modalText[i].classList.remove("on");
    });
  }
  /*con2 modal 12pro 반응형*/
  let media = $(window).width();
  if (media < 391) {
    for (let i = 0; i < cardCount; i++) {
      card[i].addEventListener("click", function () {
        modal[i].style.display = "block";
        isScrolling = true;
        setTimeout(function () {
          modalImg[i].classList.add("on");
          modalText[i].classList.add("on");
        }, 200);
      });

      modal[i].addEventListener("click", function () {
        isScrolling = false;
        modal[i].style.display = "none";
        modalImg[i].classList.remove("on");
        modalText[i].classList.remove("on");
      });
    }
  }

  con2Scroll.addEventListener("mouseover", function () {
    scrollText.classList.add("on");
  });
  con2Scroll.addEventListener("mouseleave", function () {
    scrollText.classList.remove("on");
  });

  /*con4_box tab 클릭이벤트/tab 클릭시 아이콘 fade/tab 클릭시 이미지 fade*/
  let con4Tab = document.querySelectorAll(".tab_list li"),
    con4TabCount = document.querySelectorAll(".tab_list li").length,
    icon = document.querySelectorAll(".icon_slide li"),
    screen = document.querySelector(".screen_slide");

  for (let j = 0; j < con4TabCount; j++) {
    con4Tab[j].addEventListener("click", function () {
      this.classList.add("on");
      icon[j].style.opacity = 1;
      screen.style.right = `${j * 100}%`;
      for (let k = 0; k < con4TabCount; k++) {
        if (k !== j) {
          con4Tab[k].classList.remove("on");
          icon[k].style.opacity = 0;
        }
      }
    });
  }

  /*footer information click toggle/토글클릭시 정보슬라이드*/
  $(".info").click(function () {
    $(".bottom1").slideToggle(700);
    $(this).toggleClass("on");
  });

  /*스크롤 인터랙션 (휠이벤트)*/
  let num = 0;
  let xnum = 0;
  let idx = 0;
  let delta;
  let isScrolling = false;

  let traveler = 350;
  let review = 0;
  let plan = 150;

  const elMainCon = document.querySelectorAll(".con");

  const header = document.querySelector("header"),
    logoBlack = document.querySelector(".logo_b"),
    logoWhite = document.querySelector(".logo_w"),
    logB = document.querySelector(".log_b"),
    logW = document.querySelector(".log_w");

  const mainBorder = document.querySelector(".video_wrap"),
    con1Back = document.querySelector(".con1_back_wrap"),
    con1Graph = document.querySelector(".graph");

  const travelerCount = document.querySelector(".count1"),
    reviewCount = document.querySelector(".count2"),
    planCount = document.querySelector(".count3"),
    travelerBar = document.querySelector(".traveler_bar_top"),
    reviewBar = document.querySelector(".review_bar_top"),
    planBar = document.querySelector(".plan_bar_top"),
    travelImg = document.querySelector(".traveler_bar_wrap img"),
    reviewImg = document.querySelector(".review_bar_wrap img"),
    planImg = document.querySelector(".plan_bar_wrap img");

  const con2Back = document.querySelector(".con2_back_wrap"),
    con2Text = document.querySelector(".con2_text"),
    con2List = document.querySelector(".card_list"),
    scrollBar = document.querySelector(".swiper-scrollbar");

  const con3Text = document.querySelector(".con3_text"),
    con3Con = document.querySelector(".con3_card"),
    con3Slide = document.querySelector(".con3_card_list"),
    con3Bar = document.querySelector(".con3_bar_top");

  const con4Text = document.querySelector(".con4_text"),
    con4Box = document.querySelector(".con4_box");

  const con5Membership = document.querySelector(".membership"),
    con5Text = document.querySelector(".con5_text");

  function handleWheel(e) {
    delta = e.deltaY;

    if (!isScrolling) {
      isScrolling = true;

      requestAnimationFrame(() => {
        handleScroll(e);
        isScrolling = false;
      });
    }
  }

  function handleScroll(e) {
    if (delta > 0) {
      if (!(num === 28)) {
        num++;
        /*visual interaction*/
        if (num <= 7) {
          mainBorder.style.width = `${100 - num * 10}%`;
          mainBorder.style.height = `${100 - num * 10}%`;
          mainBorder.style.borderRadius = `${num}vw`;
        }
        if (num === 8) {
          mainBorder.style.opacity = "0";
        }
        /*con1 interaction*/
        if (num === 10) {
          con1Graph.classList.add("active");
          /*con1 그래프 숫자 카운트*/
          setTimeout(function () {
            let time = setInterval(function () {
              traveler += 10;
              if (traveler >= 790) {
                clearInterval(time);
              } else {
                travelerCount.innerHTML = traveler;
              }
            }, 50);
            let time2 = setInterval(function () {
              review += 5;
              if (review >= 115) {
                clearInterval(time2);
              } else {
                reviewCount.innerHTML = review;
              }
            }, 70);
            let time3 = setInterval(function () {
              plan += 10;
              if (plan >= 600) {
                clearInterval(time3);
              } else {
                planCount.innerHTML = plan;
              }
            }, 50);
            /*con1 그래프 바 자동 애니매이션*/
            travelerBar.classList.add("on");
            reviewBar.classList.add("on");
            planBar.classList.add("on");
            travelImg.classList.add("active");
            travelImg.addEventListener("mouseenter", function () {
              this.style.width = "11vw";
              this.style.transition = "0.5s";
            });
            travelImg.addEventListener("mouseleave", function () {
              this.style.width = "10vw";
              this.style.transition = "0.5s";
            });
            reviewImg.classList.add("active");
            reviewImg.addEventListener("mouseenter", function () {
              this.style.width = "10vw";
              this.style.transition = "0.5s";
            });
            reviewImg.addEventListener("mouseleave", function () {
              this.style.width = "9vw";
              this.style.transition = "0.5s";
            });
            planImg.classList.add("active");
            planImg.addEventListener("mouseenter", function () {
              this.style.width = "12vw";
              this.style.transition = "0.5s";
            });
            planImg.addEventListener("mouseleave", function () {
              this.style.width = "11vw";
              this.style.transition = "0.5s";
            });

            /*con1 tablet 반응형*/
            let media = $(window).width();
            if (media < 1141 && media >= 768) {
              travelImg.addEventListener("mouseenter", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
              travelImg.addEventListener("mouseleave", function () {
                this.style.width = "14vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseenter", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseleave", function () {
                this.style.width = "14vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseenter", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseleave", function () {
                this.style.width = "14vw";
                this.style.transition = "0.5s";
              });
            }

            /*con1 mobile 반응형*/
            if (media < 768) {
              travelerBar.classList.add("active");
              travelerBar.classList.remove("on");
              reviewBar.classList.add("active");
              reviewBar.classList.remove("on");
              planBar.classList.add("active");
              planBar.classList.remove("on");
              travelImg.addEventListener("mouseenter", function () {
                this.style.width = "11vw";
                this.style.transition = "0.5s";
              });
              travelImg.addEventListener("mouseleave", function () {
                this.style.width = "10vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseenter", function () {
                this.style.width = "11vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseleave", function () {
                this.style.width = "10vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseenter", function () {
                this.style.width = "11vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseleave", function () {
                this.style.width = "10vw";
                this.style.transition = "0.5s";
              });
            }

            /*con1 12pro 반응형*/
            if (media < 391) {
              travelImg.addEventListener("mouseenter", function () {
                this.style.width = "16vw";
                this.style.transition = "0.5s";
              });
              travelImg.addEventListener("mouseleave", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseenter", function () {
                this.style.width = "16vw";
                this.style.transition = "0.5s";
              });
              reviewImg.addEventListener("mouseleave", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseenter", function () {
                this.style.width = "16vw";
                this.style.transition = "0.5s";
              });
              planImg.addEventListener("mouseleave", function () {
                this.style.width = "15vw";
                this.style.transition = "0.5s";
              });
            }
          }, 300);
        }
        /*con2 interaction*/
        if (num === 12) {
          con2Text.classList.add("active");
        }
        if (num === 13) {
          scrollBar.classList.add("on");
          con2List.classList.add("show");
        }
        /*con3 interaction*/
        if (num === 15) {
          con3Con.classList.add("on");
        }
        if (num >= 16 && num <= 21) {
          xnum++;
          con3Slide.style.transform = `translateX(${-xnum * 8.3}%)`;
          con3Bar.style.width = ` ${20 + xnum * 14}%`;

          /*con3 tablet 반응형*/
          let media = $(window).width();
          if (media < 1141 && media >= 768) {
            con3Slide.style.transform = `translateX(${-xnum * 9.5}%)`;
          }
          /*con3 mobile 반응형*/
          if (media < 768) {
            con3Slide.style.transform = `translateX(${-xnum * 11.5}%)`;
          }
          /*con3 12pro 반응형*/
          if (media < 391) {
            con3Slide.style.transform = `translateX(${-xnum * 12.8}%)`;
          }
        }
        /*con4 interaction*/
        if (num === 23) {
          con4Text.classList.add("on");
        }
        if (num === 24) {
          con4Box.classList.add("on");
          con4Tab[0].classList.add("on");
        }
        /*con5 interaction*/
        if (num === 26) {
          con5Text.classList.add("on");
        }

        /*visual -> con1*/
        if (num === 9 && idx < elMainCon.length) {
          idx++;
          con1Back.classList.add("on");
          setTimeout(function () {
            header.style.display = "flex";
          }, 500);
        }
        /*con1 -> con2*/
        if (num === 11 && idx < elMainCon.length) {
          idx++;
          setTimeout(function () {
            con2Back.classList.add("on");
            logoBlack.style.display = "none";
            logoWhite.style.display = "block";
            logB.style.display = "none";
            logW.style.display = "block";
          }, 500);
        }
        /*con2 -> con3*/
        if (num === 14 && idx < elMainCon.length) {
          idx++;
          setTimeout(function () {
            logoBlack.style.display = "block";
            logoWhite.style.display = "none";
            logB.style.display = "block";
            logW.style.display = "none";
          }, 500);
          setTimeout(function () {
            con3Text.classList.add("on");
          }, 1000);
        }
        /*con3 -> con4*/
        if (num === 22 && idx < elMainCon.length) {
          idx++;
        }
        /*con4 -> con5*/
        if (num === 25 && idx < elMainCon.length) {
          idx++;
          header.style.display = "none";
          setTimeout(function () {
            con5Membership.classList.add("on");
          }, 700);
        }
        /*con5 -> footer*/
        if (num === 27) {
          idx++;
          e.preventDefault();
        }
      }
    } else if (delta < 0) {
      if (!(num === 0)) {
        num--;

        /*visual interaction*/
        if (num === 1) {
          mainBorder.style.borderRadius = `${num}vw`;
        }
        if (num < 7) {
          mainBorder.style.width = `${100 - num * 10}%`;
          mainBorder.style.height = `${100 - num * 10}%`;
        }
        if (num === 7) {
          mainBorder.style.opacity = "1";
        }

        /*con1 interaction wheelup*/
        if (num === 9) {
          con1Graph.classList.remove("active");
        }

        /*con2 interaction wheelup*/
        if (num === 11) {
          con2Text.classList.remove("active");
        }
        if (num === 12) {
          scrollBar.classList.remove("on");
          con2List.classList.remove("show");
        }

        /*con3 interaction wheelup*/
        if (num === 14) {
          con3Con.classList.remove("on");
        }
        if (num >= 15 && num <= 20) {
          xnum--;
          con3Slide.style.transform = `translateX(${-xnum * 8.3}%)`;
          con3Bar.style.width = ` ${20 + xnum * 14}%`;
        }

        /*con4 interaction wheelup*/
        if (num === 22) {
          con4Text.classList.remove("on");
        }
        if (num === 23) {
          con4Box.classList.remove("on");
          con4Tab[0].classList.remove("on");
        }

        /*con1 -> visual*/
        if (num === 8) {
          idx--;
          con1Back.classList.remove("on");
          setTimeout(function () {
            header.style.display = "none";
          }, 500);
        }

        /*con2 -> con1*/
        if (num === 10) {
          idx--;
          con2Back.classList.remove("on");
          logoBlack.style.display = "block";
          logoWhite.style.display = "none";
          logB.style.display = "block";
          logW.style.display = "none";
        }

        /*con3 -> con2*/
        if (num === 13) {
          idx--;
          con3Text.classList.remove("on");
          logoBlack.style.display = "none";
          logoWhite.style.display = "block";
          logB.style.display = "none";
          logW.style.display = "block";
        }

        /*con4 -> con3*/
        if (num === 21) {
          idx--;
        }

        /*con5 -> con4*/
        if (num === 24) {
          idx--;
          header.style.display = "flex";
          con5Membership.classList.remove("on");
        }

        /*footer -> con5*/
        if (num === 26) {
          idx--;
        } else if (num === 25) {
          /*con5 interaction wheelup*/
          con5Text.classList.remove("on");
        }
      }
    }

    let htmlBody = document.querySelector("html, body");

    let scrollHeight = window.innerHeight * idx;

    // 애니메이션 속성
    let animationOptions = {
      duration: 800,
      easing: "swing",
    };

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;

      let percentage = Math.min(progress / animationOptions.duration, 1);
      let ease = 0.5 - Math.cos(percentage * Math.PI) / 2;

      let newScrollTop =
        ease * (scrollHeight - startScrollTop) + startScrollTop;
      // console.log(startScrollTop);

      htmlBody.scrollTop = newScrollTop;

      if (progress < animationOptions.duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    // 애니메이션을 시작하기 전 초기 상태를 저장
    let startTime = null;

    let startScrollTop = htmlBody.scrollTop;

    requestAnimationFrame(animateScroll);
  }
  window.addEventListener("wheel", handleWheel, { passive: true });

  // 터치 이벤트 핸들러 추가

  let touchStartY = 0; // 터치 시작 지점
  let deltaY; // 터치의 delta
  let isTrackPad;

  function touchWheel(e) {
    deltaY = e.deltaY;

    if (!isTrackPad) {
      isTrackPad = true;

      requestAnimationFrame(() => {
        applyEffects(e);
        isTrackPad = false;
      });
    }
  }

  function applyEffects(e) {
    // 현재 터치 지점과 시작 지점의 차이 계산
    let deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 0) {
      if (!(num === 28)) {
        num++;
        console.log("함수탐");
        /*visual interaction*/
        if (num <= 7) {
          mainBorder.style.width = `${100 - num * 10}%`;
          mainBorder.style.height = `${100 - num * 10}%`;
          mainBorder.style.borderRadius = `${num}vw`;
        }
        if (num === 8) {
          mainBorder.style.opacity = "0";
        }
        /*con1 interaction*/
        if (num === 10) {
          con1Graph.classList.add("active");
          /*con1 그래프 숫자 카운트*/
          setTimeout(function () {
            let time = setInterval(function () {
              traveler += 10;
              if (traveler >= 790) {
                clearInterval(time);
              } else {
                travelerCount.innerHTML = traveler;
              }
            }, 50);
            let time2 = setInterval(function () {
              review += 5;
              if (review >= 115) {
                clearInterval(time2);
              } else {
                reviewCount.innerHTML = review;
              }
            }, 70);
            let time3 = setInterval(function () {
              plan += 10;
              if (plan >= 600) {
                clearInterval(time3);
              } else {
                planCount.innerHTML = plan;
              }
            }, 50);
            /*con1 그래프 바 자동 애니매이션*/
            travelerBar.classList.add("on");
            reviewBar.classList.add("on");
            planBar.classList.add("on");
            travelImg.classList.add("active");
            travelImg.addEventListener("mouseenter", function () {
              this.style.width = "11vw";
              this.style.transition = "0.5s";
            });
            travelImg.addEventListener("mouseleave", function () {
              this.style.width = "10vw";
              this.style.transition = "0.5s";
            });
            reviewImg.classList.add("active");
            reviewImg.addEventListener("mouseenter", function () {
              this.style.width = "10vw";
              this.style.transition = "0.5s";
            });
            reviewImg.addEventListener("mouseleave", function () {
              this.style.width = "9vw";
              this.style.transition = "0.5s";
            });
            planImg.classList.add("active");
            planImg.addEventListener("mouseenter", function () {
              this.style.width = "12vw";
              this.style.transition = "0.5s";
            });
            planImg.addEventListener("mouseleave", function () {
              this.style.width = "11vw";
              this.style.transition = "0.5s";
            });
          }, 300);
        }
        /*con2 interaction*/
        if (num === 12) {
          con2Text.classList.add("active");
        }
        if (num === 13) {
          scrollBar.classList.add("on");
          con2List.classList.add("show");
        }
        /*con3 interaction*/
        if (num === 15) {
          con3Con.classList.add("on");
        }
        if (num >= 16 && num <= 21) {
          xnum++;
          con3Slide.style.transform = `translateX(${-xnum * 8.3}%)`;
          con3Bar.style.width = ` ${20 + xnum * 14}%`;
        }
        /*con4 interaction*/
        if (num === 23) {
          con4Text.classList.add("on");
        }
        if (num === 24) {
          con4Box.classList.add("on");
          con4Tab[0].classList.add("on");
        }
        /*con5 interaction*/
        if (num === 26) {
          con5Text.classList.add("on");
        }

        /*visual -> con1*/
        if (num === 9 && idx < elMainCon.length) {
          idx++;
          con1Back.classList.add("on");
          setTimeout(function () {
            header.style.display = "flex";
          }, 500);
        }
        /*con1 -> con2*/
        if (num === 11 && idx < elMainCon.length) {
          idx++;
          setTimeout(function () {
            con2Back.classList.add("on");
            logoBlack.style.display = "none";
            logoWhite.style.display = "block";
            logB.style.display = "none";
            logW.style.display = "block";
          }, 500);
        }
        /*con2 -> con3*/
        if (num === 14 && idx < elMainCon.length) {
          idx++;
          setTimeout(function () {
            logoBlack.style.display = "block";
            logoWhite.style.display = "none";
            logB.style.display = "block";
            logW.style.display = "none";
          }, 500);
          setTimeout(function () {
            con3Text.classList.add("on");
          }, 1000);
        }
        /*con3 -> con4*/
        if (num === 22 && idx < elMainCon.length) {
          idx++;
        }
        /*con4 -> con5*/
        if (num === 25 && idx < elMainCon.length) {
          idx++;
          header.style.display = "none";
          setTimeout(function () {
            con5Membership.classList.add("on");
          }, 700);
        }
        /*con5 -> footer*/
        if (num === 27) {
          idx++;
          e.preventDefault();
        }
      }
    } else if (deltaY < 0) {
      if (!(num === 0)) {
        num--;
        /*visual interaction*/
        if (num === 1) {
          mainBorder.style.borderRadius = `${num}vw`;
        }
        if (num < 7) {
          mainBorder.style.width = `${100 - num * 10}%`;
          mainBorder.style.height = `${100 - num * 10}%`;
        }
        if (num === 7) {
          mainBorder.style.opacity = "1";
        }

        /*con1 interaction wheelup*/
        if (num === 9) {
          con1Graph.classList.remove("active");
        }

        /*con2 interaction wheelup*/
        if (num === 11) {
          con2Text.classList.remove("active");
        }
        if (num === 12) {
          scrollBar.classList.remove("on");
          con2List.classList.remove("show");
        }

        /*con3 interaction wheelup*/
        if (num === 14) {
          con3Con.classList.remove("on");
        }
        if (num >= 15 && num <= 20) {
          xnum--;
          con3Slide.style.transform = `translateX(${-xnum * 8.3}%)`;
          con3Bar.style.width = ` ${20 + xnum * 14}%`;
        }

        /*con4 interaction wheelup*/
        if (num === 22) {
          con4Text.classList.remove("on");
        }
        if (num === 23) {
          con4Box.classList.remove("on");
          con4Tab[0].classList.remove("on");
        }

        /*con1 -> visual*/
        if (num === 8) {
          idx--;
          con1Back.classList.remove("on");
          setTimeout(function () {
            header.style.display = "none";
          }, 500);
        }

        /*con2 -> con1*/
        if (num === 10) {
          idx--;
          con2Back.classList.remove("on");
          logoBlack.style.display = "block";
          logoWhite.style.display = "none";
          logB.style.display = "block";
          logW.style.display = "none";
        }

        /*con3 -> con2*/
        if (num === 13) {
          idx--;
          con3Text.classList.remove("on");
          logoBlack.style.display = "none";
          logoWhite.style.display = "block";
          logB.style.display = "none";
          logW.style.display = "block";
        }

        /*con4 -> con3*/
        if (num === 21) {
          idx--;
        }

        /*con5 -> con4*/
        if (num === 24) {
          idx--;
          header.style.display = "flex";
          con5Membership.classList.remove("on");
        }

        /*footer -> con5*/
        if (num === 26) {
          idx--;
        } else if (num === 25) {
          /*con5 interaction wheelup*/
          con5Text.classList.remove("on");
        }
      }
    }
  }
  window.addEventListener("touchmove", touchWheel, { passive: true });
});
