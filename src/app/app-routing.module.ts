import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// canActivate[AuthGuardService]
// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'forgotPassword', component: ForgotPasswordComponent },
//   { path: 'validate', component: ValidateNewUserComponent },
//   {
//     path: 'main',
//     component: MainComponent,
//     children: [
//       { path: 'home', component: HomeComponentComponent ,canActivate: [LoginGuard] },
//       { path: 'domesticTransactions', component: TransactionsFilterComponent  ,canActivate: [LoginGuard]},
//       { path: 'deposits', component: DepositsFilterComponent ,canActivate: [LoginGuard]},
//       { path: 'orderPP30', component: OrderPP30Component ,canActivate: [LoginGuard] },
//       { path: 'orderPP50', component: OrderPP50Component ,canActivate: [LoginGuard] },
//       { path: 'orderPP53', component: OrderPP53Component ,canActivate: [LoginGuard] },
//       { path: 'myProfile', component: MyProfileComponent ,canActivate: [LoginGuard] },
//       { path: 'paymentOrders', component: PaymentOrdersComponent  ,canActivate: [LoginGuard] },
//       { path: 'archivedOrders', component: PaymentOrdersComponent  ,canActivate: [LoginGuard] },
//       { path: 'changePassword', component: ChangePasswordComponent  ,canActivate: [LoginGuard] },
//       { path: 'expiredPassword', component: ExpiredPasswordComponent, canDeactivate: [UnSavedPassGuard] },     // exp Pass
//       { path: 'paymentFromFile', component: WarrantFileComponent ,canActivate: [LoginGuard] },
//       { path: 'forgotPassword', component: ForgotPasswordComponent ,canActivate: [LoginGuard] },
//       { path: 'credits', component: CreditsFilterComponent,canActivate: [LoginGuard]  },
//       { path: 'managingCards', component: CardStatusComponent ,canActivate: [LoginGuard] },
//       { path: 'changeLimitsCards', component: CardLimitsComponent ,canActivate: [LoginGuard]},
//       { path: 'cards', component: CardsFilterComponent ,canActivate: [LoginGuard]},
//       { path: "changeLimits", component: ChangeLimitsComponent ,canActivate: [LoginGuard]},
//       { path: 'applications', component: ApplicationsComponent ,canActivate: [LoginGuard]},
//       { path: 'inbox', component: InboxMessageComponent ,canActivate: [LoginGuard]},
//       { path: 'information', component: InformationComponent ,canActivate: [LoginGuard]},
//       { path: 'homesettings', component: HomeSettingsComponent  ,canActivate: [LoginGuard] },
//       { path: 'foreignTransactions', component: ForeignTransactionFilterComponent  ,canActivate: [LoginGuard] },
//       {path: 'foreignPaymentOrders', component: ForeignOrdersFilterComponent ,canActivate: [LoginGuard] },
//       {path:'ordercurrencyExchange',component:OrdercurrencyExchangeComponent ,canActivate: [LoginGuard] },
//       {path: 'pp1450', component:ForeignOrders1450Component ,canActivate: [LoginGuard] },
//       {path:'ordercurrencyExchange',component:OrdercurrencyExchangeComponent ,canActivate: [LoginGuard] },
//       {path:'foreignorder',component:ForeignOrderUnallocatedComponent ,canActivate: [LoginGuard] },
//     ]
//   }
// ];



const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'login', component: LoginComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
