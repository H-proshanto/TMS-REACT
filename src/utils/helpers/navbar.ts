export const getNavbarItems = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    return [
      { name: "Home", link: "/home" },
      { name: "Tasks", link: "/tasks" },
      { name: "Members", link: "/members" },
    ];
  } else {
    return [
      { name: "Login", link: "/login" },
      { name: "Register", link: "/register" },
    ];
  }
};
