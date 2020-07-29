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

  // Initialisation
  initialiser_instances();

  // Construire et afficher le formulaire
  construire_formulaire();

  // Activer la tabulation
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

function initialiser_instances () {
  for(var section in config.sections) {
    config.sections[section].nb_instances = 1;
  }
}

function construire_formulaire () {

  // Construire les elements
  let type_crime = construire_type_crime();
  let navigation = construire_navigation();
  let sections = construire_sections();

  // Ajouter les elements dans la page
  document.getElementById("container-type-crime").innerHTML = type_crime;
  document.getElementById("items-navigation").innerHTML = navigation;
  document.getElementById("navigation").innerHTML += sections.join("");
}

function construire_type_crime () {
  let section = config.sections.routing;
  let question = section.questions[0];

  return ejs.render(modeles[question.affichage], { question: question, multiples: section.multiples });
}

function construire_navigation () {
  let items_rendus = [];

  for(var section in config.sections) {
    if(section != "routing") {
      items_rendus.push(ejs.render(modeles.item_navigation, { section: config.sections[section] }));
    }
  }

  return items_rendus;
}

function construire_sections () {
  let sections_rendues = [];

  for(var section in config.sections) {
    if(section != "routing") {
      sections_rendues.push(ejs.render(modeles.tab_content, { section: config.sections[section] }));
    }
  }

  return sections_rendues;
}

function instancier (id_section) {

  // Incrementer les instances
  ++config.sections[id_section].nb_instances;

  // Creer la nouvelle instance
  let nouvelle_instance = ejs.render(modeles.tab_content, { section: config.sections[id_section] })

  // Extraire le container d'instance -- mal code ...
  parser = new DOMParser();
  doc = parser.parseFromString(nouvelle_instance, "text/html");
  nouvel_element = doc.body.getElementsByClassName("container-instance")[0];

  // Ajouter le nouvel element a la section
  document.getElementById(id_section).getElementsByClassName("c-tab__content")[0].appendChild(nouvel_element);
}

