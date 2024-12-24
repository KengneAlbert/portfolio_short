import aboutData from '../content/about.json';

export function getAboutData() {
  return aboutData;
}

export function updateAboutData(newData: typeof aboutData) {
  // In a real app, this would update the server/database
  console.log('Updating about data:', newData);
}