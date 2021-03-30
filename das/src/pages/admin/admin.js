import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Adddoc from "./add-doc";
import Addspecialty from "./add-specialty";

export default function Admin() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Admin</h1>
      <div>
        <Switch>
          <Route exact path={`${path}/add-doc`} component={Adddoc} />
          <Route path={`${path}/add-spec`} component={Addspecialty} />
        </Switch>
      </div>
    </div>
  );
}
