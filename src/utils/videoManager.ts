import videos from '../content/videos.json';

export function getShowcaseVideos() {
  return videos.showcase;
}

export function getPortfolioVideos() {
  return videos.portfolio;
}

export function getVideoById(id: string) {
  return [...videos.showcase, ...videos.portfolio].find(video => video.id === id);
}

export function getVideosByCategory(category: string) {
  if (category === 'all') {
    return videos.portfolio;
  }
  return videos.portfolio.filter(video => video.category === category);
}