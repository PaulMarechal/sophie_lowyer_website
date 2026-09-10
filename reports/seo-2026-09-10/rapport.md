# Audit SEO et navigation agentique — 10 septembre 2026

Les **40 pages** de la version corrigée obtiennent **100/100 en SEO et 3/3 en navigation agentique**, sur ordinateur et sur mobile. Les changements sont présents dans le projet local ; ils ne sont pas encore publiés.

## Périmètre et méthode

- Version de production locale, compilée avec `npm run build` et servie par `next start` sur `http://127.0.0.1:3100`.
- Lighthouse 13.4.1, Chrome 152.0.7977.83. Les 40 routes sont extraites du sitemap : 20 françaises et 20 anglaises.
- 80 mesures finales : 40 sur ordinateur (1 350 × 940, sans ralentissement simulé) et 40 sur mobile (réglages Lighthouse mobiles par défaut).
- Navigation agentique : arbre d’accessibilité, stabilité de la mise en page et validité de `llms.txt`. Les audits WebMCP sont non applicables dans le navigateur utilisé et ne sont pas comptés comme réussis.
- Vérification complémentaire du HTML produit : titre principal et contenu principal uniques, langue, description, canonical, hreflang, JSON-LD, liens et ancres internes.
- Les 40 pages sont accessibles depuis l’accueil ; 1 053 occurrences de liens internes ont été contrôlées. Le fichier `llms.txt` référence les 40 pages.
- Les mesures interrompues par l’outil ont été relancées séquentiellement sur la même version. Aucun échec ni erreur de mesure ne subsiste dans les résultats finaux.

## Origine des scores de la capture

La capture montre un aperçu Vercel protégé. Son en-tête HTTP contient `X-Robots-Tag: noindex`. Ce blocage d’indexation explique le score SEO réduit sur ce type d’URL ; la protection a été conservée. [Documentation Vercel](https://vercel.com/docs/headers/response-headers).

Le 2/3 agentique était reproductible en local et sur la page OQTF publique : `llms.txt` contenait des URL brutes, sans liens Markdown reconnus par Lighthouse. Les liens ont été corrigés et complétés. Les pages de conseil de discipline, jusque-là seulement reliées entre elles par le sélecteur de langue, disposent maintenant de liens dans le pied de page.

## État observé du domaine public

- `https://www.sophiemarechal-avocat.fr/avocat-oqtf-paris` : SEO 100/100, navigation agentique 2/3 avant publication du correctif.
- `https://www.sophiemarechal-avocat.fr/avocat-carte-talent-carte-resident-paris` : HTTP 404 lors de la vérification ; elle ne peut pas obtenir un score valide dans cet état.
- Le sitemap public observé comporte 13 routes, contre 40 dans la version locale. Les résultats ci-dessous s’appliquent à la version corrigée et doivent être confirmés sur le domaine public après sa publication.

## Résultats par page

| Page | SEO ordinateur | Agentique ordinateur | SEO mobile | Agentique mobile |
| --- | ---: | ---: | ---: | ---: |
| `/` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/a-propos` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocat-carte-talent-carte-resident-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocat-conseil-discipline-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocat-naturalisation-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocat-oqtf-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocat-refus-permis-construire-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocate-droit-des-etrangers-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocate-droit-public-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/avocate-droit-urbanisme-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/competences` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/confidentialite` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/contact` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/droit-de-la-fonction-publique` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/droit-de-la-nationalite` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/droit-de-urbanisme` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/droit-des-etrangers` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/about` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/building-permit-refusal-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/contact` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/cookie-settings` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/disciplinary-board-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/fees` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/french-nationality-law` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/immigration-law` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/immigration-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/legal-notice` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/naturalisation-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/oqtf-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/planning-law` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/planning-law-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/practice-areas` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/privacy` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/public-law-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/public-service-law` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/en/talent-passport-resident-card-lawyer-paris` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/gestion-des-cookies` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/honoraires` | 100/100 | 3/3 | 100/100 | 3/3 |
| `/mentions-legales` | 100/100 | 3/3 | 100/100 | 3/3 |

## Reproduire les mesures

Utiliser `scripts/audit-site.mjs` selon les commandes du README. Le script écrit les rapports Lighthouse HTML et JSON et renvoie un code d’échec si une route ne peut pas être auditée ou échoue aux contrôles applicables. `--retry-failed` reprend uniquement les mesures incomplètes ou échouées, à utiliser sur une version inchangée.

Les résumés détaillés sont conservés dans `desktop.json`, `mobile.json` et `structure.json` à côté de ce rapport. Les fichiers HTML complets restent dans `/private/tmp/sophie-seo-final/`.

Le score SEO mesure les critères techniques de Lighthouse. Le ratio agentique mesure les contrôles applicables de cette catégorie expérimentale ; il ne certifie pas toutes les tâches possibles d’un agent. [Méthode Lighthouse](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring).
