import landsh from "./loading/landsh";
import Loading from "./loading";

const Welcome = landsh({
  loader: () => import("./welcome/index"),
  loading: Loading,
});

const User = landsh({
  loader: () => import("./user/index"),
  loading: Loading,
});

const Pageation = landsh({
  loader: () => import("./pageation/index"),
  loading: Loading,
});

const Svg = landsh({
  loader: () => import("./svg/index"),
  loading: Loading,
});

const Roles = landsh({
  loader: () => import("./roles/index"),
  loading: Loading,
});

const Menu = landsh({
  loader: () => import("./menu/index"),
  loading: Loading,
});

const Dictor = landsh({
  loader: () => import("./dictor/index"),
  loading: Loading,
});

export { Pageation, User, Welcome, Svg, Roles, Menu, Dictor };
