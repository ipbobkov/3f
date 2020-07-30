import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const foodModule = () => import('./food/food.module').then(x => x.FoodModule);
const foodProductsModule = () => import('./food-products/food-products.module').then(x => x.FoodProductsModule);
const foodRecipesModule = () => import('./food-recipes/food-Recipes.module').then(x => x.FoodRecipesModule);

const feedModule = () => import('./feed/feed.module').then(x => x.FeedModule);
const fitModule = () => import('./fit/fit.module').then(x => x.FitModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    { path: 'food', loadChildren: foodModule, canActivate: [AuthGuard] },
    { path: 'food-products', loadChildren: foodProductsModule, canActivate: [AuthGuard] },
    { path: 'food-recipes', loadChildren: foodRecipesModule, canActivate: [AuthGuard] },

    { path: 'feed', loadChildren: feedModule, canActivate: [AuthGuard] },
    { path: 'fit', loadChildren: fitModule, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
