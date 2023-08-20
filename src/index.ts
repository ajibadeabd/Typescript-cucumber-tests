export interface IUser {
  name: String;
  age: String;
}
const users: IUser[] = [
  {
    name: "User 1",
    age: "5 years",
  },
  {
    name: "User 2",
    age: "10 years",
  },
  {
    name: "User 20",
    age: "100 years",
  },
];

class Action {
  add(numbers: number[]) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  getUseName(userName: String): IUser | undefined {
    return users.find((user) => {
      return user.name === userName;
    });
  }
}

export { Action };
