var config = {
  "titre": "Signalement",
  "sections": {
    "routing": {
      "multiples": false,
      "questions": [
        {
          "affichage": "deroulant_1colonne",
          "id": "type_crime",
          "nom": "Quel type de crime voulez-vous dénoncer?",
          "options": [
            "-----",
            "Actions indécentes (Exhibitonnisme)",
            "Agression armée",
            "Agression sexuelle",
            "Appel à la bombe",
            "Appel harassant",
            "Armes à feu",
            "Atroupement illégal",
            "Autres lois fédérales",
            "Blanchiment d’argent",
            "Braconnage",
            "Bris de condition",
            "C.S.R.",
            "Cannabis-possession",
            "Cannabis-production",
            "Cannabis-trafic",
            "Comportements / Activités suspects",
            "Conduite avec capacités affaiblies",
            "Conduite dangereuse / Excès de vitesse",
            "Conduite sans permis",
            "Contrebande d’alcool",
            "Contrebande de tabac",
            "Corruption",
            "Crime haineux",
            "Crime technologique",
            "Cruauté envers un animal",
            "Délit de fuite",
            "Disparition",
            "Droits d'auteur",
            "Enfants maltraités / négligés",
            "Enlèvement / Séquestration / Extorsion",
            "Évasion",
            "Exploitation sexuelle des enfants",
            "Explosifs",
            "Extrémisme",
            "Faux documents",
            "Fraudes diverses",
            "Fugue",
            "Gangstérisme",
            "Harcèlement criminel",
            "Incendie criminel",
            "Information du public",
            "Intimidation",
            "Introduction par effraction (vol)",
            "Invasion de domicile",
            "Investissement pyramidal",
            "Leurre d'enfant",
            "Liberté illégale",
            "Médicaments-trafic",
            "Méfait",
            "Menaces",
            "Meurtre",
            "Monnaie contrefaite",
            "Odomètres reculés",
            "Personne recherchée",
            "Personnes illégales",
            "Phonebuster",
            "Prêt usuraire",
            "Profanation de cadavre",
            "Prostitution / Maison de débauche",
            "Proxénétisme / Sollicitation",
            "R.A.C.J.",
            "Recel",
            "Stupéfiants-possession",
            "Stupéfiants-production",
            "Stupéfiants-trafic",
            "Supposition de personne",
            "Tentative d'agression sexuelle",
            "Tentative de fraude",
            "Tentative de meurtre",
            "Tentative de meurtre ou conspiration",
            "Tentative de vol",
            "Tentative d'enlèvement",
            "Terrorisme",
            "Traite de personnes",
            "Voie de fait",
            "Vol",
            "Vol d'identité",
            "Vol qualifié"
          ]
        }
      ]
    },
    "crime": {
      "id": "crime",
      "nom": "Crime",
      "description": "Donnez-nous de l'information",
      "multiples": false,
      "questions": [
        {
          "affichage": "date_1colonne",
          "id": "date_crime",
          "nom": "Date du crime"
        },
        {
          "affichage": "text_1colonne",
          "id": "lieu_crime",
          "nom": "Lieu du crime"
        },
        {
          "affichage": "textarea_1colonne",
          "id": "description_crime",
          "nom": "Description du crime",
          "placeholder": "Donnez-nous le plus d'information possible"
        }
      ]
    },
    "suspects": {
      "id": "suspects",
      "nom": "Suspects",
      "description": "Qui a commis le crime?",
      "multiples": true,
      "questions": [
        {
          "affichage": "sous_section",
          "nom": "Description du suspect"
        },
        {
          "affichage": "text_1colonne",
          "id": "nom_complet",
          "nom": "Nom complet"
        },
        {
          "affichage": "text_1colonne",
          "id": "taille",
          "nom": "Taille"
        },
        {
          "affichage": "num_deroulant_2colonnes",
          "id": "poids",
          "nom": "Poids",
          "options": [
            "Livres (lbs)",
            "Kilos (Kg)"
          ]
        },
        {
          "affichage": "deroulant_1colonne",
          "id": "couleur_yeux",
          "nom": "Couleur des yeux",
          "options": [
            "-------",
            "Verts",
            "Bleus",
            "Rouges"
          ]
        },
        {
          "affichage": "deroulant_1colonne",
          "id": "couleur_cheveux",
          "nom": "Couleur des cheveux",
          "options": [
            "-------",
            "Verts",
            "Gris",
            "Rouges"
          ]
        },
        {
          "affichage": "num_1colonne",
          "id": "age",
          "nom": "Âge"
        },
        {
          "affichage": "deroulant_1colonne",
          "id": "sexe",
          "nom": "Sexe",
          "options": [
            "-------",
            "Homme",
            "Femme",
            "Autre"
          ]
        },
        {
          "affichage": "text_1colonne",
          "id": "marques_distinctives",
          "nom": "Marques distinctives et tattouages"
        },
        {
          "affichage": "text_1colonne",
          "id": "armes",
          "nom": "Armes"
        },
        {
          "affichage": "text_1colonne",
          "id": "animaux",
          "nom": "Animaux"
        },
        {
          "affichage": "text_1colonne",
          "id": "affiliation",
          "nom": "Affiliation",
          "placeholder": "Ex: Motards, Mafia, Gang de rue"
        },
        {
          "affichage": "textarea_1colonne",
          "id": "autres_details",
          "nom": "Autres détails importants"
        },
        {
          "affichage": "sous_section",
          "nom": "Adresse"
        },
        {
          "affichage": "num_1colonne",
          "id": "numero_porte",
          "nom": "Numéro de porte"
        },
        {
          "affichage": "text_1colonne",
          "id": "rue",
          "nom": "Rue"
        },
        {
          "affichage": "num_1colonne",
          "id": "appartement",
          "nom": "Numéro d'appartement"
        },
        {
          "affichage": "text_1colonne",
          "id": "ville",
          "nom": "Ville"
        },
        {
          "affichage": "text_2colonnes",
          "id": "telephone",
          "nom": "Téléphone"
        },
        {
          "affichage": "text_2colonnes",
          "id": "cellulaire",
          "nom": "Cellulaire"
        },
        {
          "affichage": "textarea_1colonne",
          "id": "international",
          "nom": "Si le suspect est à l'extérieur du Canada, où et quand rentrera-t-il au pays?"
        },
        {
          "affichage": "textarea_1colonne",
          "id": "lien_autres_suspects",
          "nom": "Lien avec les autres suspects"
        }
      ]
    },
    "vehicules": {
      "id": "vehicules",
      "nom": "Véhicules",
      "multiples": true,
      "questions": [
        {
          "affichage": "text_1colonne",
          "id": "marque_vehicule",
          "nom": "Marque du véhicule"
        },
        {
          "affichage": "text_1colonne",
          "id": "modele_vehicule",
          "nom": "Modèle du véhicule"
        },
        {
          "affichage": "deroulant_1colonne",
          "id": "couleur_vehicule",
          "nom": "Couleur du véhicule",
          "options": [
            "-------",
            "Vert",
            "Blanc",
            "Plusieurs couleurs"
          ]
        },
        {
          "affichage": "num_1colonne",
          "id": "annee_vehicule",
          "nom": "Année du véhicule"
        },
        {
          "affichage": "text_1colonne",
          "id": "numero_plaque",
          "nom": "Numéro de plaque"
        }
      ]
    },
    "drogues": {
      "id": "drogues",
      "nom": "Drogues",
      "multiples": false,
      "questions": [
        {
          "affichage": "cases_et_texte",
          "id": "drogues",
          "options": [
            {
              "id": "cannabis",
              "nom_commun": "Plant de cannabis",
              "noms_rue": "Pote, Marijuana, Marihuana, herbe, ganja, dope, etc."
            },
            {
              "id": "cocotte",
              "nom_commun": "Cocotte de cannabis",
              "noms_rue": "Pote, Marijuana, Marihuana, herbe, buds, fleurs, ganja, dope, etc."
            },
            {
              "id": "bouture",
              "nom_commun": "Bouture de cannabis",
              "noms_rue": "Clône, bébé, etc."
            },
            {
              "id": "graines",
              "nom_commun": "Graines de cannabis",
              "noms_rue": "Graines, semences, seeds, etc."
            },
            {
              "id": "vrac",
              "nom_commun": "Vrac de cannabis",
              "noms_rue": "Feuille, résidus, garbag, etc."
            },
            {
              "id": "hashich",
              "nom_commun": "Haschish / Huile de cannabis",
              "noms_rue": "Hasch, huile, bite, brun, shit, etc."
            },
            {
              "id": "salvia",
              "nom_commun": "Salvia",
              "noms_rue": "Feuilles"
            },
            {
              "id": "cannabis_synthetique",
              "nom_commun": "Cannabis synthétique",
              "noms_rue": "Marijuana synthétique, etc."
            },
            {
              "id": "ketamine",
              "nom_commun": "Ketamine",
              "noms_rue": "Spécial K, Vitamine K, Ket, Ketty, etc."
            },
            {
              "id": "pcp",
              "nom_commun": "PCP",
              "noms_rue": "Angel dust, Mescaline, etc."
            },
            {
              "id": "nexus",
              "nom_commun": "Nexus",
              "noms_rue": "Peanut, Nex, etc."
            },
            {
              "id": "champignons",
              "nom_commun": "Champignons magiques",
              "noms_rue": "Psilocybine, mush, champignons, shrooms, etc."
            },
            {
              "id": "lsd",
              "nom_commun": "LSD",
              "noms_rue": "Buvard, acide, stamp, etc."
            },
            {
              "id": "mescaline",
              "nom_commun": "Mescaline",
              "noms_rue": "Peyote, cactus, mess, PCP, horse, etc."
            },
            {
              "id": "piperazine",
              "nom_commun": "Pipérazine",
              "noms_rue": "BCP, TFMPP"
            },
            {
              "id": "ghb",
              "nom_commun": "GHB",
              "noms_rue": "GBL, GH, drogue du viol, jus, ecstacy liquide, etc."
            },
            {
              "id": "heroine",
              "nom_commun": "Héroïne",
              "noms_rue": "Smack, héro, horse, came, point, lol, etc."
            },
            {
              "id": "opium",
              "nom_commun": "Opium",
              "noms_rue": "Poppy, opi, etc."
            },
            {
              "id": "cocaine",
              "nom_commun": "Cocaïne",
              "noms_rue": "Coke, poudre, neige, flake, snow flake, C, etc."
            },
            {
              "id": "crack",
              "nom_commun": "Cocaïne base - crack",
              "noms_rue": "Crack, roche, freebase, etc."
            },
            {
              "id": "methamphetamine_comprime",
              "nom_commun": "Méthamphétamine - comprimé",
              "noms_rue": "Meth, speed, peanut, pilules, vitesse, etc."
            },
            {
              "id": "methamphetamine_cristaux",
              "nom_commun": "Méthamphétamine - cristaux",
              "noms_rue": "Meth, crystal, ice, glass, tina, etc."
            },
            {
              "id": "mephedrine",
              "nom_commun": "Méphédrone",
              "noms_rue": "MDPV, sels de bain, cocaïne synthétique, plastique, methylone, etc."
            },
            {
              "id": "amphetamine",
              "nom_commun": "Amphétamine",
              "noms_rue": "Speed, peanut, etc."
            },
            {
              "id": "khat",
              "nom_commun": "Khat",
              "noms_rue": "Qat, catha, gat, kat, plant, bundle, etc."
            },
            {
              "id": "ecstasy",
              "nom_commun": "Ecstasy",
              "noms_rue": "MDMA, MDA, MDEA, E, X, XTC, etc."
            },
            {
              "id": "triazolam",
              "nom_commun": "Triazolam",
              "noms_rue": "Halcion, etc."
            },
            {
              "id": "diazepam",
              "nom_commun": "Diazepam",
              "noms_rue": "Valium, etc."
            },
            {
              "id": "steroides",
              "nom_commun": "Stéroïdes anabolisants",
              "noms_rue": "Stéroïdes, etc."
            },
            {
              "id": "viagra",
              "nom_commun": "Viagra / Cialis",
              "noms_rue": "Sildénafil, Tadalafil, etc."
            },
            {
              "id": "methylphénidate",
              "nom_commun": "Méthylphénidate",
              "noms_rue": "Ritalin, Concerta, etc."
            },
            {
              "id": "morphine",
              "nom_commun": "Morphine",
              "noms_rue": "Analgésiques opioïdes, Indéral, hydromorphone, etc."
            },
            {
              "id": "oxycodone",
              "nom_commun": "Oxycodone",
              "noms_rue": "Oxycotin, oxy, oxy.ir, supeudol, etc."
            },
            {
              "id": "oxycodone_acetaminophene",
              "nom_commun": "Oxycodone avec acétaminophène",
              "noms_rue": "Percocet, Endocet, Percodan, etc."
            },
            {
              "id": "hydromorphone",
              "nom_commun": "Hydromorphone",
              "noms_rue": "Dilaudid, hydromorphone contin, etc."
            }
          ]
        },
        {
          "affichage": "text_1colonne",
          "id": "autres_drogues",
          "nom": "Autres drogues"
        }
      ]
    }, 
    "images": {
      "id": "images",
      "nom": "Images",
      "multiples": true,
      "questions": [
        {
          "affichage": "image_1colonne",
          "id": "image",
          "nom": "Image"
        },
        {
          "affichage": "text_1colonne",
          "id": "description_image",
          "nom": "Description de l'image (si nécessaire)"
        }
      ]
    }
  }
}
