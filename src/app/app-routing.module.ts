import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EventsComponent} from './event-maneg/events/events.component';
import {RegisterOrgnizerComponent} from './register/register-orgnizer/register-orgnizer.component';
import {RegisterAttenderComponent} from './register/register-attender/register-attender.component';
import {EditEventComponent} from './edit-event/edit-event.component';
import {EventManegComponent} from './event-maneg/event-maneg.component';
import {AddEventComponent} from './event-maneg/events/add-event/add-event.component';
import {ActiveEventComponent} from './event-maneg/events/active-event/active-event.component';
import {MyeventComponent} from './event-maneg/events/myevent/myevent.component';
import {UnactiveEventComponent} from './event-maneg/events/unactive-event/unactive-event.component';
import {TicketManegComponent} from './event-maneg/ticket-maneg/ticket-maneg.component';
import {CommentManegComponent} from './event-maneg/comment-maneg/comment-maneg.component';
import {TicketsForEventsComponent} from './event-maneg/events/tickets-for-events/tickets-for-events.component';
import {HomeComponent} from './home/home.component';
import {TestStylesComponent} from './test-styles/test-styles.component';
import {AuthGuard} from './authentication/auth.guard';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {UserDetailComponent} from './users/user-detail.component';
import {EventinformationComponent} from './event-maneg/events/active-event/eventinformation/eventinformation.component';
import {OrgnizereventsComponent} from './event-maneg/events/active-event/orgnizerevents/orgnizerevents.component';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'orgregister', component: RegisterOrgnizerComponent},
  {path: 'attender', component: RegisterAttenderComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard], data: {userRole : ['ROLE_ADMIN']}},
  {path: 'homeevent', component: EventManegComponent},
  {path: 'events', component: EventsComponent},
  {path: 'addEvent', component: AddEventComponent},
  {path: 'activeEvent', component: ActiveEventComponent},
  {path: 'unapproved', component: UnactiveEventComponent},
  {path: 'event/:id', component: EditEventComponent, canActivate: [AuthGuard]},
  {path: 'user/:userid', component: EditUserComponent, canActivate: [AuthGuard], data: {userRole : ['ROLE_ADMIN']}},
  {path: 'myevent', component: MyeventComponent},
  {path: 'myticket', component: TicketManegComponent},
  {path: 'ticketsforevent/:id', component: TicketsForEventsComponent, canActivate: [AuthGuard]},
  {path: 'mycomments', component: CommentManegComponent},
  {path: 'test', component: TestStylesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'myprofile/:id', component: MyprofileComponent, canActivate: [AuthGuard]},
  {path: 'edituser/:id', component: UserDetailComponent},
  {path: 'eventinfo/:id', component: EventinformationComponent, canActivate: [AuthGuard]},
  {path: 'org/:id', component: OrgnizereventsComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
