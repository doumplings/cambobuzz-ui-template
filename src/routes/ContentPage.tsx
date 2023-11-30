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
      <div id="for-you-modal" className="md:w-1/2 w-11/12 transition-all">
        {content.map((item) => {
          return (
            <li key={item.username}>
              <img
                id="content-profile-pic"
                src={item.profilePic}
                alt=""
                className="w-8 float-left mt-4 mr-4 mb-4"
              />
              <h4 className="translate-y-5 mb-4">{item.username} </h4> <br />
              <p>{item.content} </p>
              <button className="mr-2 mt-4 w-4">
                <img src="src/assets/heart.svg" alt="Like" />
              </button>
              <button className="mr-2 w-4">
                <img src="src/assets/comment.svg" alt="Comment" />
              </button>
              <button className="mr-2 w-4">
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
