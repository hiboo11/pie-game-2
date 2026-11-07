# PIE Challenge • Programme d'Innovation Entrepreneuriale
### Application Web Interactive & Responsive pour Synthèse Académique (Séances 1 à 4)

Conçue et développée pour une promotion de plus de 20 stagiaires (ex: Cité des Métiers et des Compétences / CMC / OFPPT / Universités). Cette application garantit une participation dynamique, équitable et captivante pendant la soutenance ou la présentation en classe.

---

## 🌟 Points Forts & Fonctionnalités Clés

### 1. 🎡 Système de Tirage au Sort Équitable (La Roue & Slot Suspense)
- **Roue de Fortune Royale 360° (Canvas)** :
  - Finition dorée luxueuse (effets de reflets métalliques, rivets champagne, aiguille indicatrice haute précision).
  - Physique de décélération fluide et réaliste avec bruits de cliquetis (*ratchet tick*) synchronisés à chaque passage de segment.
  - **Mode Défilement Flash (Slot Cinématique)** : Alternative instantanée pour varier le rythme de la séance.
- **Règle d'or anti-doublon** :
  - Chaque stagiaire tiré au sort est marqué comme ayant participé et temporairement retiré du pool de tirage.
  - La roue garantit que les **20+ membres de la classe** passent à tour de rôle sans exception.
  - Bouton de réinitialisation de tour pour relancer une nouvelle manche collective.

### 2. 📚 Banque de Questions Formative & Dynamique (25+ Défis PIE)
L'application intègre une base de données complète et variée structurée selon le programme officiel PIE (Séances 1 à 4) :
- **Thème 1 : À la Découverte des Entrepreneurs (Séances 1 & 2)**
  - Études de cas concrets : *Fadela (AMAZF)*, *Citron*, *MIRATTI*, *Youssef Ouechen (Sidi Moumen)*.
  - Point commun des entrepreneurs ordinaires : personnes orientées solutions, persévérance et valeurs.
  - Déconstruction des mythes du génie solitaire et du gros capital de départ.
- **Thème 2 : Pourquoi "ENTREPRENDRE" ? (Séance 4)**
  - La vision de *Richard Branson* et *Tony Hsieh (Zappos)* : résoudre un vrai problème client (l'argent n'est qu'une conséquence).
  - Les pièges fréquents : vouloir être patron juste pour donner des ordres ou devenir riche rapidement.
- **Thème 3 : L'Attitude de l'Entrepreneur & Résolution de Problèmes (Séance 3)**
  - Face au manque de ressources (*"Pas d'argent, pas de local, pas de matériel..."*) : logique de l'Effectuation (*"Comment faire autrement avec ce dont je dispose ?"*).
  - Reformulation constructive des blocages et statut de l'échec comme apprentissage (*feedback*).
- **Thème 4 : Le Challenge du Quotidien (Séance 4 - Synthèse CMC)**
  - **Défis Flash Chrono (60 secondes)** avec compte à rebours circulaire :
    - *File d'attente à la cantine / cafétéria* (3 solutions agiles & éthiques).
    - *Covoiturage et transport solidaire* des étudiants.
    - *Chasse au stage de fin d'études* proactive orientée valeur.
    - *Tri sélectif & propreté des ateliers* par le nudge et la gamification.
    - *Partage collaboratif de supports pédagogiques*.

### 3. 🎨 Design & Direction Artistique (Luxury Minimalist)
- **Palette chromatique prestigieuse** :
  - Background principal : *Dark Charcoal* ultra-profond (`#0B0B0C`, `#121214`).
  - Cartes et conteneurs : *Warm Beige* / Crème mat (`#F5F0EB`, `#EBE3D9`).
  - Accents et typographie : *Or / Champagne* (`#D4AF37`, `#FAF4E5`, `#C5A059`).
- **Moteur Sonore Web Audio API** : 100% synthétisé dans le navigateur (aucun fichier MP3 externe à charger, fonctionne hors-ligne, commutable à tout moment).
- **Optimisation Vidéoprojecteur & Grand Écran** : Bouton plein écran dédié, contrastes élevés et typographie *Plus Jakarta Sans* et *Cinzel* parfaitement lisibles au fond de la salle.

### 4. 📊 Tableau de Bord en Direct
- **Score Collectif de la Promotion** avec indicateur de maturité entrepreneuriale (*Incubateur Élite PIE*).
- **Historique chronologique en direct** : nom de l'étudiant, intitulé du défi, points attribués, heure de passage.
- **Classement / Podium** des stagiaires.
- **Explorateur de la Banque de Questions** accessible à l'animateur.
- **Fiche de Synthèse Pédagogique (Cheat-Sheet)** intégrée pour le présentateur.

---

## 🚀 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) (v18 ou supérieur)

### Lancement en mode Développement
```bash
npm run dev
```
L'application démarre sur `http://localhost:3000`.

### Construction & Aperçu Production
```bash
npm run build
npm run preview
```

---

## 👥 Personnalisation de la Liste des Stagiaires
- Cliquez sur l'icône **Stagiaires** dans l'en-tête pour :
  - Ajouter manuellement un étudiant.
  - Coller en une seule fois la liste complète des 20+ noms de votre classe (*Import groupé*).
  - Réinitialiser les statuts pour lancer un nouveau tour.
  - Rétablir la liste par défaut des 22 stagiaires pré-configurés.
