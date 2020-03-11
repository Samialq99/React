window.Seed = (function() {
  //notice window is a DOM
  //window.Seed fn contains a function bellow and array of products
  //this function stands alone
  function generateVoteCount() {
    return Math.floor(Math.random() * 50 + 15);
    //Math.random() used with Math.floor() can be used to return random integers.
    //Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):
    //Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
    // this means our fn returns between 0 + 15 to 49 + 15
  }
  //products bellow is an array of objects each is product obj
  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/daniel.jpg",
      productImageUrl: "images/products/image-aqua.png"
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      description:
        "Earn points when your favorite politicians pass legislation.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/kristy.png",
      productImageUrl: "images/products/image-rose.png"
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoil hats",
      description: "We already have your measurements and shipping address.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/veronika.jpg",
      productImageUrl: "images/products/image-steel.png"
    },
    {
      id: 4,
      title: "Haught or Naught",
      description: "High-minded or absent-minded? You decide.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "images/avatars/molly.png",
      productImageUrl: "images/products/image-yellow.png"
    }
  ];

  return { products: products };
})();
