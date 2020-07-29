var modeles = {

  date_1colonne: `
<div class="question date_1colonne">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="date">
</div>
  `,
  num_1colonne: ` <div class="question num_1colonne">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="number">
</div> ` ,
  text_1colonne: `
<div class="question text_1colonne">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="text" placeholder="<%= question.placeholder %>">
</div>
  `,
  cases_et_texte: `
<div class="question cases_et_texte">
  <% question.options.forEach((option) => { %>
    <p>
    <input type="checkbox" id="<%= question.id + "-" + option.id  + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + "-" + option.id + (multiples ? "-" + section.nb_instances : "") %>" value="<%= option.id %>">
    <label for="<%= question.id + "-" + option.id + (multiples ? "-" + section.nb_instances : "") %>"><%= option.nom_commun + " (" + option.noms_rue + ")" %></label>
    </p>
  <% }) %>
</div>
  `,
  deroulant_1colonne: `
<div class="question deroulant_1colonne">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <select id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>">
    <% question.options.forEach((option) => { %>
        <option value="<%= option.toLowerCase() %>"><%= option %></option>
    <% }) %>
  </select>
</div>
  `,
  image_1colonne: `
<div class="question image_1colonne">
  <i class="fas fa-times-circle fa-2x" style="display: none;" onclick="delete_image(this);"></i> 
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" style="margin-right: auto; padding-left: 10px;"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="file" onchange="readURL(this);">
  <img id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>-display" src="#" style="display: none;">
</div>
  `,
  num_deroulant_2colonnes: `
<div class="question num_deroulant_2colonnes">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <div class="valeurs">
    <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="number">
    <select id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>-option" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>-option">
      <% question.options.forEach((option) => { %>
          <option value="<%= option.toLowerCase() %>"><%= option %></option>
      <% }) %>
    </select>
  </div>
</div>
  `,
  num_plusieurs_colonnes: `
<div class="question num_plusieurs_colonnes">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="text" placeholder="<%= question.placeholder %>">
</div>
  `,
  sous_section: `
<div class="sous-section">
  <h3><%= question.nom %></h3>
</div>
  `,
  tab_content: `
<div id="<%= section.id %>" class="c-tab">
  <div class="c-tab__content">
    <div class="entete-tab">
      <h2> <%= section.nom %> </h2>
      <% if (section.multiples) { %>
        <div class="liste-tab">
          <%- ejs.render(modeles.item_instance, { section: section }) %>
        </div>
        <div class="plus">
          <i class="fas fa-plus" onclick="instancier('<%= section.id %>')"></i>
        </div>
      <% } %>
    </div>
    <div class="container-instance">
      <p><%= section.description %></p>
      <% section.questions.forEach((question) => { %>
          <%- ejs.render(modeles[ question.affichage], { section: section, question: question, multiples: section.multiples }) %>
      <% }) %>
    </div>
  </div>
</div>
  `,
  textarea_1colonne: `
<div class="question textarea_1colonne">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <textarea id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" placeholder="<%= question.placeholder %>"></textarea>
</div>
  `,
  text_2colonnes: `
<div class="question text_2colonnes">
  <label for="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>"><%= question.nom %></label>
  <input id="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" name="<%= question.id + (multiples ? "-" + section.nb_instances : "") %>" type="text" placeholder="<%= question.placeholder %>">
</div>
  `,
  item_navigation: `
    <a href="#" class="c-tabs-nav__link">
      <i class="fas <%= section.icone %>"></i>
      <span><%= section.nom %></span>
    </a>
  `,
  item_instance: `
    <div class="item-instance">
      <i class="fas <%= section.icone %>"></i>
      <span class="numero-item-instance"><%= section.nb_instances %></span>
    </div>
  `
}
