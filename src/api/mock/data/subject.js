export default topicId => {
  if (!/c[1-4]t[1-3]/.test(topicId)) {
    return null;
  }
  function getCategorySlug() {
    if (topicId.indexOf("c1") === 0) {
      return "Story";
    } else if (topicId.indexOf("c2") === 0) {
      return "Memes";
    } else if (topicId.indexOf("c3") === 0) {
      return "News";
    } else if (topicId.indexOf("c4") === 0) {
      return "Trending";
    } else {
      return "Story";
    }
  }

  return {
    _id: topicId,
    title: "Village did removed",
    user: {
      name: "skinny_ratio",
      avatar: ""
    },
    content:
      "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    category: { slug: getCategorySlug() },
    createdAt: "2022-01-01",
    replies: [
      {
        _id: 1,
        user: {
          name: "sunny_arthur",
          avatar: ""
        },
        content:
          "Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted.",
        createdAt: "2022-01-01"
      },
      {
        _id: 2,
        user: {
          name: "calm_eagle",
          avatar: ""
        },
        content:
          "My justice wishing prudent waiting in be. Comparison age not pianoforte increasing delightful now. Insipidity sufficient dispatched any reasonably led ask.",
        createdAt: "2022-01-01"
      }
    ]
  };
};
