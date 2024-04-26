export const sideMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "details",
    children: [
      {
        label: "location",
        to: "location",
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];

export default sideMenu;
