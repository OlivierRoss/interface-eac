ENDPOINT_API = "api.echecaucrime.com/signalement";

window.onload = init;

function init () {

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

  // Afficher les containers
  [].forEach.call(document.querySelectorAll(".container-instance"), (container) => {
    container.classList.add("actif");
  });

  // Activer les items
  [].forEach.call(document.querySelectorAll(".item-instance"), (item) => {
    item.classList.add("actif");
  });
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

  let section = config.sections[id_section];
  let parser = new DOMParser();

  // Incrementer les instances
  ++section.nb_instances;

  // Creer la nouvelle instance
  let nouvelle_instance = ejs.render(modeles.tab_content, { section: section})

  // Extraire le container d'instance -- mal code ...
  doc = parser.parseFromString(nouvelle_instance, "text/html");
  nouvel_element = doc.body.getElementsByClassName("container-instance")[0];

  // Ajouter le nouvel element a la section
  let el_section = document.getElementById(id_section);
  el_section.getElementsByClassName("c-tab__content")[0].appendChild(nouvel_element);

  // Ajouter l'item de navigation
  if(section.multiples) {
    let nouvel_instance_item = ejs.render(modeles.item_instance, { section: section });

    doc = parser.parseFromString(nouvel_instance_item, "text/html");
    let nouvel_item = doc.body.getElementsByClassName("item-instance")[0];
    el_section.getElementsByClassName("liste-tab")[0].appendChild(nouvel_item);

    set_instance_active(nouvel_item);
  }
}

function set_instance_active (el) {

  // Activation de l'item
  [].forEach.call(el.parentNode.querySelectorAll(".item-instance"), (item) => { item.classList.remove("actif") });
  el.classList.add("actif");

  // Activation du container
  let id_instance = el.getAttribute("data-id-container-instance");
  let container_focus = document.getElementById(id_instance);

  [].forEach.call(container_focus.parentNode.querySelectorAll(".container-instance"), (container) => { container.classList.remove("actif"); })
  container_focus.classList.add("actif");
}

function envoyer () {
  let donnees = {};

  // Extraire les donnees
  [].forEach.call(document.querySelectorAll("input, textarea"), (el) => { donnees[el.id] = el.value; });

  // Envoyer au serveur
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { alert(this.responseText); }
  };
  xhttp.open("POST", ENDPOINT_API, true);
  xhttp.send(donnees);
}

// TODO afficher l'image
function readURL (el) { }
