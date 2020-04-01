import Loadable from "./Labload"
import {Loading} from "./../Components/"
 const Admin=Loadable({loader:()=>import("./Admin"),loading:Loading});
 const Board=Loadable({loader:()=>import("./Board"),loading:Loading});
 const Goods=Loadable({loader:()=>import("./Goods"),loading:Loading});
 const Login=Loadable({loader:()=>import("./Login"),loading:Loading});
 const NotFounds=Loadable({loader:()=>import("./NotFound"),loading:Loading});
 const Settings=Loadable({loader:()=>import("./Settings"),loading:Loading});
 const UserInfo=Loadable({loader:()=>import("./userInfo"),loading:Loading});
 const AdminUpdate=Loadable({loader:()=>import("./AdminUpdate"),loading:Loading});
export {
    Admin,
    Board,
    Goods,
    Login,
    NotFounds,
    Settings,
    UserInfo,
    AdminUpdate
}