import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './clients/client.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'directives', component: DirectiveComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'form', component: FormComponent},
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'clients'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
