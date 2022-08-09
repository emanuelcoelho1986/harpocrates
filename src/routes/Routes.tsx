import { Routes as ReactRoutes, Route } from "react-router-dom";

import { AvailableRoutes } from "routes/Available-Routes.enum";

/** Pages **/
import Home from "pages/Home";
import NotFound from "pages/NotFound";

export default function Routes() {
    return (
        <ReactRoutes>
          <Route path={AvailableRoutes.HOME} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
    )
}