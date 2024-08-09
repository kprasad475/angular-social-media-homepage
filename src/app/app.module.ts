import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { PostHeaderComponent } from './posts/post-header/post-header.component';
import { PostFooterComponent } from './posts/post-footer/post-footer.component';
import { PostImageComponent } from './posts/post-image/post-image.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    NavbarComponent,
    PostComponent,
    StoriesComponent,
    HomeComponent,
    PostHeaderComponent,
    PostFooterComponent,
    PostImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
