window.CONFIG = {
  suspects: {
    actuel: 1,
    max: 5
  },
  vehicules: {
    actuel: 1,
    max: 5
  },
  images: {
    actuel: 1,
    max: 5
  }
}

window.onload = function () {

  // Evenement ajout
  let plus = document.getElementsByClassName("plus");
  [].forEach.call(plus, (el) => {
    el.addEventListener("click", function (e) {
      let parent_tab =  e.target.parentElement.parentElement.parentElement;
      let container = parent_tab.getElementsByClassName("container-instance")[0];

      let id_section = parent_tab.parentElement.id;
      let config_section = window.CONFIG[id_section];

      // Verifier max
      if(config_section.actuel >= config_section.max) return;

      // Integrer la nouvelle section
      doubler_section(config_section.actuel, container);

      // Avancer le compteur
      config_section.actuel += 1;
    })
  });

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

function doubler_section (index, container) {

  // Copier
  let contenu = document.createElement("div");
  contenu.className = "container-instance";
  contenu.innerHTML = container.innerHTML;

  // Mettre a jour les ids
  contenu.innerHTML.replace(/(\w+-)(1)(")/gm, "$1" + index + "$3");
  let inputs = contenu.getElementsByTagName("input");
  let textareas = contenu.getElementsByTagName("textarea");
  let imgs = contenu.getElementsByTagName("img");

  // Reset les valeurs
  [].forEach.call(inputs, (el) => {
    el.value = "";
    el.style.display = "initial";
  });

  [].forEach.call(textareas, (el) => {
    el.innerHTML = "";
  });

  [].forEach.call(imgs, (el) => {
    el.src = "";
    el.style.display = "none";
  });

  container.parentElement.appendChild(contenu);
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      let image = input.nextElementSibling;
      image.src = e.target.result;

      toggle(input);
      toggle(image);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function toggle (element) {
  if(element.style.display == "none") {
    element.style.display = "initial";
  }
  else {
    element.style.display = "none";
  }
}
