window.onload = function () {
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
