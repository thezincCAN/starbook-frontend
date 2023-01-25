export async function getStoryById(id) {
  const rawData = await fetch(`http://localhost:3000/api/v1/stories/${id}`);
  const finalData = await rawData.json();
  return finalData;
}
