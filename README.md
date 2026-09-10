# sophie_lowyer_website

Website for Sophie Maréchal Lowyer in Paris 

Website realised with React 

Forst install : 
npm i 

Test : 
npm run dev

Build :
npm run build

Calendly :
Créer un fichier `.env.local` avec :

NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/votre-compte/votre-evenement


© Paul Maréchal 2026

## Images de partage

Les aperçus utilisent le même modèle que les routes OG, avec des textes courts en français et en anglais. Les fichiers sont livrés dans `public/social/{fr,en}/` et les métadonnées sélectionnent le visuel du domaine concerné.

| Usage | Dimensions |
| --- | --- |
| Open Graph, aperçu paysage | 1200 × 630 px |
| Carte X/Twitter | 1200 × 600 px |
| Variante carrée, aperçus compacts | 1200 × 1200 px |
| Icône d’accueil iPhone/iPad | 180 × 180 px |
| Icônes Android | 192 × 192 et 512 × 512 px |

Le paysage est déclaré en premier dans Open Graph et le carré en alternative. Chaque application choisit son rendu : le carré n’est pas une règle automatique pour tous les mobiles. Les icônes mobiles reprennent le pictogramme vectoriel existant dans `app/icon.svg`.

Pour modifier les textes : `src/lib/social-images.js`. Pour modifier la composition : `app/og-page-template.js`. Régénérer les fichiers avec `npm run images:social`, puis lancer `npm run build`. Les anciennes URL `/og.png` et `/Images/og_pages/*.png` restent utilisables.

Pour tester un partage après déploiement, utiliser le domaine public `https://www.sophiemarechal-avocat.fr`. Une URL d’aperçu protégée peut afficher « Protected Deployment – Vercel » à la place des métadonnées du cabinet : cela dépend de [Deployment Protection](https://vercel.com/docs/deployment-protection), pas des dimensions des images. Les applications peuvent également conserver un ancien aperçu en cache.

## Audit SEO et navigation agentique

Auditer la version de production avec Lighthouse, sur le domaine public ou avec `npm run build` puis `npm run start -- --hostname 127.0.0.1 --port 3100`. Les aperçus Vercel protégés renvoient `X-Robots-Tag: noindex` : leur score SEO n'est pas celui du domaine public. Conserver cette protection des aperçus.

Le script ci-dessous nécessite Node.js 22.19 ou plus récent et Chrome installé. Lighthouse est installé dans un dossier temporaire, sans changer les dépendances du site :

```sh
npm install --prefix /tmp/sophie-seo-tools --no-audit --no-fund --ignore-scripts lighthouse@13.4.1
node scripts/audit-site.mjs --tools-dir /tmp/sophie-seo-tools --base-url http://127.0.0.1:3100 --output-dir /tmp/sophie-audit/desktop --form-factor desktop
node scripts/audit-site.mjs --tools-dir /tmp/sophie-seo-tools --base-url http://127.0.0.1:3100 --output-dir /tmp/sophie-audit/mobile --form-factor mobile
```

Le script parcourt les pages du sitemap, conserve un rapport HTML et JSON pour chacune, puis écrit `summary.json`. Il échoue si une page ne peut pas être auditée, n'atteint pas 100 en SEO ou échoue à un contrôle agentique applicable. Les contrôles WebMCP non applicables sont identifiés séparément ; ils ne sont pas comptés comme des contrôles réussis.

Après publication, relancer avec `--base-url https://www.sophiemarechal-avocat.fr`. Pour une nouvelle page, ajouter ses liens français et anglais dans `public/llms.txt` au format Markdown `[titre](URL)` et veiller à ce qu'elle soit accessible depuis un lien du site, en plus du sitemap.
