export default categorySlug => {
  const categoryTitle = categorySlug
    .replace("-", " ")
    .replace(
      /\w\S*/g,
      string => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
    );

  function getTopicId(id) {
    switch (categorySlug) {
      case "first-category":
        return `c1t${id}`;
      case "second-category":
        return `c2t${id}`;
      case "third-category":
        return `c3t${id}`;
      case "fourth-category":
        return `c4t${id}`;
      default:
        return `c1t${id}`;
    }
  }

  return [
    {
      _id: getTopicId(1),
      title: `Trending in ${categoryTitle}`,
      user: { name: "SuperUser", avatar: "" },
      views: 43,
      numberOfReplies: 2,
      category: { slug: categorySlug },
      createdAt: new Date().setDate(new Date().getDate() - 2)
    },
    {
      _id: getTopicId(2),
      title: `Hot in ${categoryTitle}`,
      user: { name: "SuperUser", avatar: "" },
      views: 10,
      numberOfReplies: 0,
      category: { slug: categorySlug },
      createdAt: new Date().setDate(new Date().getDate() - 1)
    },
    {
      _id: getTopicId(3),
      title: `Funny in ${categoryTitle}`,
      user: { name: "SuperUser", avatar: "" },
      views: 130,
      numberOfReplies: 4,
      category: { slug: categorySlug },
      createdAt: new Date()
    }
  ];
};
