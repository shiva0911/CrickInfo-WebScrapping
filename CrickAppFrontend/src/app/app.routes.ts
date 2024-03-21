import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LiveComponent } from './Pages/live/live.component';
import { HistoryComponent } from './Pages/history/history.component';
import { PointTableComponent } from './Pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        title:"Home|CrickInformer"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Match History|CrickInformer"

    },
    {
        path:"history",
        component:HistoryComponent,
        title:"Live|CrickInformer"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"Point-Table|CrickInformer"
    }
];
