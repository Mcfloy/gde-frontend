import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'hall', loadChildren: './modules/hall/hall.module#HallModule' },
  { path: 'regiment', loadChildren: './modules/regiment/regiment.module#RegimentModule' },
  { path: 'calendar', loadChildren: './modules/calendar/calendar.module#CalendarModule' },
  { path: 'soundpad', loadChildren: './modules/soundpad/soundpad.module#SoundpadModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
