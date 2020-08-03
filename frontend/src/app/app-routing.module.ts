import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const foodModule = () => import('./food/food.module').then(x => x.FoodModule);
const foodProductsModule = () => import('./food-products/food-products.module').then(x => x.FoodProductsModule);
const foodProductModule = () => import('./food-product/food-product.module').then(x => x.FoodProductModule);
const foodRecipesModule = () => import('./food-recipes/food-recipes.module').then(x => x.FoodRecipesModule);
// const foodRecipeModule = () => import('./food-recipe/food-recipe.module').then(x => x.FoodRecipeModule);


const feedModule = () => import('./feed/feed.module').then(x => x.FeedModule);
const feedProgramsModule = () => import('./feed-programs/feed-programs.module').then(x => x.FeedProgramsModule);
const feedCalendarsModule = () => import('./feed-calendars/feed-calendars.module').then(x => x.FeedCalendarsModule);

const fitModule = () => import('./fit/fit.module').then(x => x.FitModule);
const fitProgramsModule = () => import('./fit-programs/fit-programs.module').then(x => x.FitProgramsModule);
const fitCalendarsModule = () => import('./fit-calendars/fit-calendars.module').then(x => x.FitCalendarsModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    { path: 'food', loadChildren: foodModule, canActivate: [AuthGuard] },
    { path: 'food-products', loadChildren: foodProductsModule, canActivate: [AuthGuard] },
    { path: 'food-product', loadChildren: foodProductModule, canActivate: [AuthGuard] },
    { path: 'food-recipes', loadChildren: foodRecipesModule, canActivate: [AuthGuard] },
    // { path: 'food-recipe', loadChildren: foodRecipeModule, canActivate: [AuthGuard] },

    { path: 'feed', loadChildren: feedModule, canActivate: [AuthGuard] },
    { path: 'feed-programs', loadChildren: feedProgramsModule, canActivate: [AuthGuard] },
    { path: 'feed-calendars', loadChildren: feedCalendarsModule, canActivate: [AuthGuard] },

    { path: 'fit', loadChildren: fitModule, canActivate: [AuthGuard] },
    { path: 'fit-programs', loadChildren: fitProgramsModule, canActivate: [AuthGuard] },
    { path: 'fit-calendars', loadChildren: fitCalendarsModule, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
