import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/modals/edit-project/edit-project.component';
import { TrashComponent } from './components/trash/trash.component';
import { DeleteProjectComponent } from './components/modals/delete-project/delete-project.component';
import { DeleteAssetComponent } from './components/modals/delete-asset/delete-asset.component';
import { DeleteAllAssetComponent } from './components/modals/delete-all-asset/delete-all-asset.component';
import { DownloadFileComponent } from './components/modals/download-file/download-file.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PruebaMultipleComponent } from './prueba-multiple/prueba-multiple.component';
import { TagsComponent } from './components/tags/tags.component';
import { LoginService } from './services/login.service';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { FilterSearchAssetPipe } from './pipes/filter-search-asset.pipe';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    AddAssetComponent,
    AddProjectComponent,
    TrashComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    DeleteAssetComponent,
    DeleteAllAssetComponent,
    DownloadFileComponent,
    FooterComponent,
    LoginComponent,
    PruebaMultipleComponent,
    TagsComponent,
    SignupComponent,
    FilterSearchPipe,
    FilterSearchAssetPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    EditProjectComponent,
    DeleteProjectComponent,
    DeleteAssetComponent,
    DeleteAllAssetComponent,
    DownloadFileComponent
  ]
})
export class AppModule {

}
