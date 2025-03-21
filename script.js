document.getElementById("openSidebar").addEventListener("click", function (event) {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-100%";
    } else {
      sidebar.style.left = "0px";
    }
    event.stopPropagation();
  });
  
  document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && event.target.id !== "openSidebar") {
      sidebar.style.left = "-100%";
    }
  });
  
  document.getElementById("sidebar").addEventListener("click", function (event) {
    document.getElementById("sidebar").style.left = "-100%";
    event.stopPropagation();
  });
  
  const items = document.querySelectorAll('.item-sidebar');
  let activeItem = null;
  

  //sorteador de site
  function redirectToRandomSite() {
      const sites = [
          "https://www.youtube.com/watch?v=prMHpv3Wu8I&t=38s",
          "https://www.youtube.com/watch?v=N6P_3KsKEUc&t=860s",
          "http://www.republiquedesmangues.fr",
          "https://www.koalastothemax.com",
          "https://theuselessweb.com"
      ];

      const randomIndex = Math.floor(Math.random() * sites.length);
      const randomSite = sites[randomIndex];

      window.location.href = randomSite;
  }