import React from "react";
import landsh from "./loading/landsh";
import Loading from "./loading";
const Danboard = landsh({
  loader: () => import("./dasboard"),
  loading: Loading,
});
const User = landsh({ loader: () => import("./user"), loading: Loading });

const Ts = landsh({
  loader: () => import("./subject/indexTs"),
  loading: Loading,
});

const Js = landsh({
  loader: () => import("./subject/indexJs"),
  loading: Loading,
});

export { Danboard, User, Ts, Js };
