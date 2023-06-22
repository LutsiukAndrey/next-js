


export const getAllposts = async ()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('smt wrong....');
  }

  return response.json();
}

export const getPostBySearch = async(search: string)=> {

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${search}`,
      {
        next: {
          revalidate: 10,
        },
      })
    
         if (!response.ok) {
    throw new Error('smt wrong....');
  }

    return response.json();

}