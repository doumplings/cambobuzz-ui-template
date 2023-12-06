export const getFollowersYearly = (userData: {}) => {
  let userFollowers = [{}];
  const dataArr: any = [["Months", "Followers"]];

  Object.values(userData).forEach((item1: any) => {
    Object.values(item1.years).forEach((years: any) => {
      years.year == item1.current_date.year ? (userFollowers = years) : null;
    });
  });

  Object.values(userFollowers).map((month: any) => {
    month.follower_info === undefined
      ? null
      : dataArr.push([month.month, month.follower_info.follower_count]);
  });

  return dataArr;
};
