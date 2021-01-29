// export function getList() {
//   return fetch("https://vitrazai.lt/wp-json/wp/v2/media").then((data) =>
//     data.json()
//   );
// }
export async function getList() {
  return await fetch("https://vitrazai.lt/wp-json/wp/v2/media").then((data) =>
    data.json()
  );
}
