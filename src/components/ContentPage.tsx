const ContentPage = () => {
  const content = [
    {
      username: "username",
      profilePic: "src/assets/Default_pfp.svg.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a saepe numquam, architecto ipsam reiciendis vero optio? Dolorem dolor veritatis pariatur, sed dolorum cum voluptatum, officia, inventore ex laudantium atque?",
    },
    {
      username: "username",
      profilePic: "src/assets/Default_pfp.svg.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a saepe numquam, architecto ipsam reiciendis vero optio? Dolorem dolor veritatis pariatur, sed dolorum cum voluptatum, officia, inventore ex laudantium atque?",
    },
    {
      username: "username",
      profilePic: "src/assets/Default_pfp.svg.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a saepe numquam, architecto ipsam reiciendis vero optio? Dolorem dolor veritatis pariatur, sed dolorum cum voluptatum, officia, inventore ex laudantium atque?",
    },
  ];

  return (
    <div id="for-you-page">
      <div id="for-you-modal">
        {content.map((item) => {
          return (
            <li key={item.username}>
              <img id="content-profile-pic" src={item.profilePic} alt="" />
              <h4>{item.username} </h4>
              <p>{item.content} </p>
              <button id="heart-btn">
                <img src="src/assets/heart.svg" alt="Like" />
              </button>
              <button id="heart-btn">
                <img src="src/assets/comment.svg" alt="Comment" />
              </button>
              <button id="heart-btn">
                <img src="src/assets/share.svg" alt="Share" />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ContentPage;
