import React from 'react';
import Grid from '@mui/material/Grid';
import {
     Switch,
     Route,
     useRouteMatch
   } from "react-router-dom";
import ContactManage from '../../Contact/ContactAdd/ContactManage/ContactManage';

const DashboardRoute = () => {
     let { path } = useRouteMatch();
     return (
          <>
            <Grid container spacing={2}>
          {/* nested route */}
               <Grid item xs={12} md={12}>
                    <Switch>
                         <Route path={`${path}`}>
                              <ContactManage></ContactManage>
                         </Route>
                    </Switch>
               </Grid>
          </Grid>   
          </>
     );
};

export default DashboardRoute;