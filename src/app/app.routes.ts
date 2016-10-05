
import { RouterConfig } from '@angular/router';
import { UpContentPanelComponent } from './components/upcontentpanel/upcontentpanel.component';
import { UpUserContentPanelComponent } from './components/upusercontentpanel/upusercontentpanel.component';
import { UpLoginPageComponent } from './components/uploginpage/uploginpage.component';
import { UpbuyContentPanelComponent } from './components/upbuycontentpanel/upbuycontentpanel.component';

export const TestAppRoutes: RouterConfig = [
    { path: '', component: UpContentPanelComponent },
    { path: 'userdata', component: UpUserContentPanelComponent },
    { path: 'buy', component: UpbuyContentPanelComponent },
    { path: 'dashboard', component: UpContentPanelComponent },
    { path: 'login', component: UpLoginPageComponent},
    { path: 'logout', component: UpLoginPageComponent},
    { path: 'loggedin', component: UpContentPanelComponent},
    { path: 'datasets', component: UpLoginPageComponent},
    { path: '**', component: UpLoginPageComponent }
];