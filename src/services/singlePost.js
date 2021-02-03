export async function getPostById(id) {
    return await fetch("https://vitrazai.lt/wp-json/wp/v2/media/"+id).then((data) =>
      data.json()
    );
  }