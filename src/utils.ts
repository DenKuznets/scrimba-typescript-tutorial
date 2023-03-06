

export function compareDate(user1: object, user2: object): object {
  let date1: string[];
  let date2: string[];
  if (
    "date" in user1 &&
    "date" in user2 &&
    typeof user1.date === "string" &&
    typeof user2.date === "string"
  ) {
    date1 = user1.date.split("-");
    date2 = user2.date.split("-");
    let date1time = new Date(
      parseInt(date1[2]),
      parseInt(date1[1]),
      parseInt(date1[0])
    ).getTime();
    let date2time = new Date(
      parseInt(date2[2]),
      parseInt(date2[1]),
      parseInt(date2[0])
    ).getTime();
    return date1time > date2time ? user1 : user2;
  }
  // если даты равны возвращаем последнего пользователя
  return user2;
}

export function lastReviewer(data: object[]): object {
  return data.reduce((last, current) => {
    return compareDate(last, current);
  });
}

export function showReveiwTotal(
  num: number,
  reviewer: string,
  isLoyal: boolean
) {
  let text = "";
  let loyaltyBadge = isLoyal ? "\u2606" : "";

  text =
    "total reviews " +
    num.toString() +
    " | Most recent review by " +
    reviewer +
    " " +
    loyaltyBadge;

  console.log(text);
  return text;
}
