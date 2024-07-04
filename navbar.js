function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  var navItems1 = document.getElementById("nav-items1");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    navItems1.style.visibility = "visible";
  } else {
    navItems1.style.visibility = "collapse";
  }
});

function darkmode() {
  var navbar = document.getElementById("navbar");
  var computedStyle = window.getComputedStyle(navbar);
  var bgColor = computedStyle.backgroundColor;

  if (bgColor === "rgb(0, 0, 0)" || bgColor === "#000" || bgColor === "black") {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("logo").src = "logo-light.png";
    document.getElementById("home").style.backgroundColor = "white";
    document.getElementById("home").style.color = "black";
    document.getElementById("home-img").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("about").style.backgroundColor = "white";
    document.getElementById("about").style.color = "black";
    document.getElementById("about-img").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("project").style.backgroundColor = "white";
    document.getElementById("project").style.color = "black";
    document.getElementById("project-title-1").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("project-title-2").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("project-title-3").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("project-title-4").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("contact").style.backgroundColor = "white";
    document.getElementById("contact").style.color = "black";
    document.getElementById("mail").style.boxShadow =
      "0 12px 16px 0 black,0 17px 50px 0 black";
    document.getElementById("home-icon").setAttribute("stroke", "black");
    document.getElementById("about-icon").setAttribute("stroke", "black");
    document.getElementById("project-icon").setAttribute("stroke", "black");
    document.getElementById("contact-icon").setAttribute("stroke", "black");
    document.getElementById("github-icon").setAttribute("stroke", "black");
    document.getElementById("g-icon").setAttribute("fill", "black");
    document.getElementById("linkedin-icon").setAttribute("stroke", "black");
    document.getElementById("linkedin-icon2").setAttribute("stroke", "black");
    document.getElementById("l-icon").setAttribute("fill", "black");
    document.getElementById("instagram-icon").setAttribute("stroke", "black");
    document.getElementById("i-icon").setAttribute("fill", "black");
    document.getElementById("moon-icon").setAttribute("stroke", "black");
    // Side bar mode toggle
    document.getElementById("home-icon-side").setAttribute("stroke", "black");
    document.getElementById("about-icon-side").setAttribute("stroke", "black");
    document
      .getElementById("project-icon-side")
      .setAttribute("stroke", "black");
    document
      .getElementById("contact-icon-side")
      .setAttribute("stroke", "black");
    document.getElementById("github-icon-side").setAttribute("stroke", "black");
    document.getElementById("g-icon-side").setAttribute("fill", "black");
    document
      .getElementById("linkedin-icon-side")
      .setAttribute("stroke", "black");
    document
      .getElementById("linkedin-icon2-side")
      .setAttribute("stroke", "black");
    document.getElementById("l-icon-side").setAttribute("fill", "black");
    document
      .getElementById("instagram-icon-side")
      .setAttribute("stroke", "black");
    document.getElementById("i-icon-side").setAttribute("fill", "black");
    document.getElementById("moon-icon-side").setAttribute("stroke", "black");
  } else {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("logo").src = "logo-dark.png";
    document.getElementById("home").style.backgroundColor = "black";
    document.getElementById("home").style.color = "white";
    document.getElementById("home-img").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("about").style.backgroundColor = "black";
    document.getElementById("about").style.color = "white";
    document.getElementById("about-img").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("project").style.backgroundColor = "black";
    document.getElementById("project").style.color = "white";
    document.getElementById("project-title-1").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("project-title-2").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("project-title-3").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("project-title-4").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("contact").style.backgroundColor = "black";
    document.getElementById("contact").style.color = "white";
    document.getElementById("mail").style.boxShadow =
      "0 12px 16px 0 white,0 17px 50px 0 white";
    document.getElementById("home-icon").setAttribute("stroke", "white");
    document.getElementById("about-icon").setAttribute("stroke", "white");
    document.getElementById("project-icon").setAttribute("stroke", "white");
    document.getElementById("contact-icon").setAttribute("stroke", "white");
    document.getElementById("github-icon").setAttribute("stroke", "white");
    document.getElementById("g-icon").setAttribute("fill", "white");
    document.getElementById("linkedin-icon").setAttribute("stroke", "white");
    document.getElementById("linkedin-icon2").setAttribute("stroke", "white");
    document.getElementById("l-icon").setAttribute("fill", "white");
    document.getElementById("instagram-icon").setAttribute("stroke", "white");
    document.getElementById("i-icon").setAttribute("fill", "white");
    document.getElementById("moon-icon").setAttribute("stroke", "white");
    // Side bar mode toggle
    document.getElementById("home-icon-side").setAttribute("stroke", "white");
    document.getElementById("about-icon-side").setAttribute("stroke", "white");
    document
      .getElementById("project-icon-side")
      .setAttribute("stroke", "white");
    document
      .getElementById("contact-icon-side")
      .setAttribute("stroke", "white");
    document.getElementById("github-icon-side").setAttribute("stroke", "white");
    document.getElementById("g-icon-side").setAttribute("fill", "white");
    document
      .getElementById("linkedin-icon-side")
      .setAttribute("stroke", "white");
    document
      .getElementById("linkedin-icon2-side")
      .setAttribute("stroke", "white");
    document.getElementById("l-icon-side").setAttribute("fill", "white");
    document
      .getElementById("instagram-icon-side")
      .setAttribute("stroke", "white");
    document.getElementById("i-icon-side").setAttribute("fill", "white");
    document.getElementById("moon-icon-side").setAttribute("stroke", "white");
  }
}
