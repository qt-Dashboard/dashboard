import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { UtilesComponent } from './utiles/utiles.component';
import { Zone1Component } from './zone1/zone1.component';
import { Zone1AjoutComponent } from './zone1/zone1-ajout/zone1-ajout.component';
import { Zone1ModifComponent } from './zone1/zone1-modif/zone1-modif.component';
import { Zone2Component } from './zone2/zone2.component';
import { Zone2AjoutComponent } from './zone2/zone2-ajout/zone2-ajout.component';
import { Zone2ModifComponent } from './zone2/zone2-modif/zone2-modif.component';
import { Zone3Component } from './zone3/zone3.component';
import { Zone3AjoutComponent } from './zone3/zone3-ajout/zone3-ajout.component';
import { Zone3ModifComponent } from './zone3/zone3-modif/zone3-modif.component';
import { Zone4Component } from './zone4/zone4.component';
import { Zone4AjoutComponent } from './zone4/zone4-ajout/zone4-ajout.component';
import { Zone4ModifComponent } from './zone4/zone4-modif/zone4-modif.component';
import { Zone6Component } from './zone6/zone6.component';
import { Zone6AjoutComponent } from './zone6/zone6-ajout/zone6-ajout.component';
import { Zone6ModifComponent } from './zone6/zone6-modif/zone6-modif.component';
import { BannersCategoryComponent } from './banners-category/banners-category.component';
import { BannersCategoryAjoutComponent } from './banners-category/banners-category-ajout/banners-category-ajout.component';
import { BannersCategoryModifComponent } from './banners-category/banners-category-modif/banners-category-modif.component';
import { BannersGenComponent } from './banners-gen/banners-gen.component';
import { BannersGenAjoutComponent } from './banners-gen/banners-gen-ajout/banners-gen-ajout.component';
import { BannersGenModifComponent } from './banners-gen/banners-gen-modif/banners-gen-modif.component';
import { PagesComponent } from './pages/pages.component';
import { PagesAjoutComponent } from './pages/pages-ajout/pages-ajout.component';
import { PagesModifComponent } from './pages/pages-modif/pages-modif.component';
import { OffresComponent } from './offres/offres.component';
import { OffresAjoutComponent } from './offres/offres-ajout/offres-ajout.component';
import { OffresModifComponent } from './offres/offres-modif/offres-modif.component';
import { BannersSiteComponent } from './banners-site/banners-site.component';
import { BannersSiteAjoutComponent } from './banners-site/banners-site-ajout/banners-site-ajout.component';
import { BannersSiteModifComponent } from './banners-site/banners-site-modif/banners-site-modif.component';
import { InscritsNewsletterComponent } from './inscrits-newsletter/inscrits-newsletter.component';
import { InscritsNewsletterAjoutComponent } from './inscrits-newsletter/inscrits-newsletter-ajout/inscrits-newsletter-ajout.component';
import { InscritsNewsletterModifComponent } from './inscrits-newsletter/inscrits-newsletter-modif/inscrits-newsletter-modif.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NewslettersModifComponent } from './newsletters/newsletters-modif/newsletters-modif.component';
import { SendComponent } from './send/send.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAjoutComponent } from './categories/categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './categories/categories-modif/categories-modif.component';
import { GammesComponent } from './gammes/gammes.component';
import { GammesAjoutComponent } from './gammes/gammes-ajout/gammes-ajout.component';
import { GammesModifComponent } from './gammes/gammes-modif/gammes-modif.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsAjoutComponent } from './produits/produits-ajout/produits-ajout.component';
import { ProduitsModifComponent } from './produits/produits-modif/produits-modif.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentairesModifComponent } from './commentaires/commentaires-modif/commentaires-modif.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsAjoutComponent } from './clients/clients-ajout/clients-ajout.component';
import { ClientsModifComponent } from './clients/clients-modif/clients-modif.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandesModifComponent } from './commandes/commandes-modif/commandes-modif.component';
import { CatBlogComponent } from './cat-blog/cat-blog.component';
import { CatBlogAjoutComponent } from './cat-blog/cat-blog-ajout/cat-blog-ajout.component';
import { CatBlogModifComponent } from './cat-blog/cat-blog-modif/cat-blog-modif.component';
import { BlogComponent } from './blog/blog.component';
import { BlogAjoutComponent } from './blog/blog-ajout/blog-ajout.component';
import { BlogModifComponent } from './blog/blog-modif/blog-modif.component';
import { CatTutosComponent } from './cat-tutos/cat-tutos.component';
import { CatTutosAjoutComponent } from './cat-tutos/cat-tutos-ajout/cat-tutos-ajout.component';
import { CatTutosModifComponent } from './cat-tutos/cat-tutos-modif/cat-tutos-modif.component';
import { TutosComponent } from './tutos/tutos.component';
import { TutosAjoutComponent } from './tutos/tutos-ajout/tutos-ajout.component';
import { TutosModifComponent } from './tutos/tutos-modif/tutos-modif.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { PartenairesAjoutComponent } from './partenaires/partenaires-ajout/partenaires-ajout.component';
import { PartenairesModifComponent } from './partenaires/partenaires-modif/partenaires-modif.component';
import { MembresComponent } from './membres/membres.component';
import { MembresAjoutComponent } from './membres/membres-ajout/membres-ajout.component';
import { MembresModifComponent } from './membres/membres-modif/membres-modif.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersComponent } from './users/users.component';
import { ToolsComponent } from './tools/tools.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UploadComponent } from './upload/upload.component';
import { FileDragNDropDirective } from './upload/file-drag-n-drop.directive';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapService } from '../services/map.service';
import { TestComponent } from './test/test.component';
import { TestFormComponent } from './test/test-form/test-form.component';
import { CatFormComponent } from './test/cat-form/cat-form.component';
import { CatListComponent } from './test/cat-list/cat-list.component';
import { MarkerListComponent } from './test/marker-list/marker-list.component';
import { MarkerFormComponent } from './test/marker-form/marker-form.component';
import { PoiService } from '../services/poi.service';
import { AnnuaireComponent } from './annuaire/annuaire.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [
    PoiService
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    UtilesComponent,
    Zone1Component,
    Zone1AjoutComponent,
    Zone1ModifComponent,
    Zone2Component,
    Zone2AjoutComponent,
    Zone2ModifComponent,
    Zone3Component,
    Zone3AjoutComponent,
    Zone3ModifComponent,
    Zone4Component,
    Zone4AjoutComponent,
    Zone4ModifComponent,
    Zone6Component,
    Zone6AjoutComponent,
    Zone6ModifComponent,
    BannersCategoryComponent,
    BannersCategoryAjoutComponent,
    BannersCategoryModifComponent,
    BannersGenComponent,
    BannersGenAjoutComponent,
    BannersGenModifComponent,
    PagesComponent,
    PagesAjoutComponent,
    PagesModifComponent,
    OffresComponent,
    OffresAjoutComponent,
    OffresModifComponent,
    BannersSiteComponent,
    BannersSiteAjoutComponent,
    BannersSiteModifComponent,
    InscritsNewsletterComponent,
    InscritsNewsletterAjoutComponent,
    InscritsNewsletterModifComponent,
    NewslettersComponent,
    NewslettersModifComponent,
    SendComponent,
    CategoriesComponent,
    CategoriesAjoutComponent,
    CategoriesModifComponent,
    GammesComponent,
    GammesAjoutComponent,
    GammesModifComponent,
    ProduitsComponent,
    ProduitsAjoutComponent,
    ProduitsModifComponent,
    CommentairesComponent,
    ArticlesComponent,
    CommentairesModifComponent,
    ClientsComponent,
    ClientsAjoutComponent,
    ClientsModifComponent,
    CommandesComponent,
    CommandesModifComponent,
    CatBlogComponent,
    CatBlogAjoutComponent,
    CatBlogModifComponent,
    BlogComponent,
    BlogAjoutComponent,
    BlogModifComponent,
    CatTutosComponent,
    CatTutosAjoutComponent,
    CatTutosModifComponent,
    TutosComponent,
    TutosAjoutComponent,
    TutosModifComponent,
    PartenairesComponent,
    PartenairesAjoutComponent,
    PartenairesModifComponent,
    MembresComponent,
    MembresAjoutComponent,
    MembresModifComponent,
    UsersComponent,
    UsersFormComponent,
    UsersComponent,
    ToolsComponent,
    ToolsComponent,
    ConfirmDialogComponent,
    UploadComponent,
    FileDragNDropDirective,
    ToolsComponent,
    DialogConfirmComponent,
    MapComponent,
    TestComponent,
    TestFormComponent,
    CatFormComponent,
    CatListComponent,
    MarkerListComponent,
    MarkerFormComponent,
    AnnuaireComponent,
    
    ]
})
export class MaterialComponentsModule {}
