let page = 1;

const getPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return response.json();
  console.log(data);
};



const addPostIntoDOM = async () => {
    const posts = await getPost(
console.log(posts)
}

addPostIntoDOM()