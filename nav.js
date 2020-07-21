window.onload = function () {

  // Evenement ajout
  let plus = document.getElementsByClassName("plus");
  [].forEach.call(plus, (el) => {
    el.addEventListener("click", function (e) {
      let parent_tab =  e.target.parentElement.parentElement.parentElement;
      let container = parent_tab.getElementsByClassName("container-instance")[0];

      container.innerHTML += container.innerHTML;
    })
  });

  // Prendre tous les noeuds apres le h2 et les mettre dans un container


  var myTabs = tabs({
    el: '#navigation',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });

  myTabs.init();

  // WTF ...
  myTabs.goToTab(1);
  myTabs.goToTab(0);
}
