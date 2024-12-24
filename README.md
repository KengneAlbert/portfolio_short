# Gestion des Vidéos

Pour ajouter, modifier ou supprimer des vidéos sur le site, suivez ces étapes :

1. Accédez au fichier `src/content/videos.json`
2. Le fichier contient deux sections :
   - `showcase` : Les vidéos mises en avant sur la page d'accueil
   - `portfolio` : L'ensemble des vidéos du portfolio

## Structure d'une vidéo

### Pour le showcase :
```json
{
  "id": "unique_id",
  "src": "/videos/video-name.mp4",
  "title": "Titre de la vidéo",
  "views": "2.5M",
  "platform": "TikTok/YouTube Shorts/Instagram Reels",
  "description": "Description de la vidéo",
  "tags": ["#tag1", "#tag2"]
}
```

### Pour le portfolio :
```json
{
  "id": "unique_id",
  "title": "Titre de la vidéo",
  "category": "TikTok/YouTube Shorts/Instagram Reels",
  "thumbnail": "URL de la miniature",
  "videoUrl": "/videos/video-name.mp4",
  "description": "Description de la vidéo",
  "tags": ["#tag1", "#tag2"]
}
```

## Ajout de nouvelles vidéos

1. Ajoutez votre fichier vidéo dans le dossier `public/videos/`
2. Ajoutez les informations de la vidéo dans le fichier `videos.json`
3. Assurez-vous que l'ID est unique
4. Redéployez le site pour que les changements prennent effet

## Modification de vidéos existantes

1. Trouvez la vidéo à modifier dans le fichier `videos.json`
2. Modifiez les informations souhaitées
3. Redéployez le site

## Suppression de vidéos

1. Supprimez l'entrée correspondante dans le fichier `videos.json`
2. Vous pouvez également supprimer le fichier vidéo du dossier `public/videos/`
3. Redéployez le site