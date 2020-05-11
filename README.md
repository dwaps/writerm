![Logo DWAPS](https://gist.githubusercontent.com/dwaps/d2808259c76563bc64a58eb9684e0f1b/raw/9a4f783adb93e7beda06b378350a75d2818fa7b2/dwaps-300.gif)

## WRITERM - TP dans le cadre de la formation Node

Pour utiliser `writerm`, il suffit d'écrire quelques lignes dans un fichier où tu veux sur ton ordinateur.

Ensuite, tu peux lancer la commande `writerm <ton-fichier>`: le contenu sera lu à la vitesse désirée.

Pour régler la vitesse, 3 options possibles:
  - Ajouter une variable d'environment SPEED (ms) au processus
    Ex: `SPEED=30 writerm my-file.txt`
  - Ecrire la vitesse en ms directement dans le fichier, à la toute première ligne, en prenant soin de laisser une ligne vide juste en dessous.
  - Accepter la vitesse par défaut (50ms).

## Exécution à la volée

Exemple: `SPEED=5 npx writerm@latest my-file.txt`.

---

[® DWAPS Formation - Michael Cornillon](https://dwaps.fr "DWAPS")