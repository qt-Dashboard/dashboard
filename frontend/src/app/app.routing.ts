import { TooltipComponent } from '@angular/material/tooltip';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AnnuaireComponent } from './material-component/annuaire/annuaire.component';
import { ArticlesComponent } from './material-component/articles/articles.component';
import { BannersCategoryAjoutComponent } from './material-component/banners-category/banners-category-ajout/banners-category-ajout.component';
import { BannersCategoryModifComponent } from './material-component/banners-category/banners-category-modif/banners-category-modif.component';
import { BannersCategoryComponent } from './material-component/banners-category/banners-category.component';
import { BannersGenAjoutComponent } from './material-component/banners-gen/banners-gen-ajout/banners-gen-ajout.component';
import { BannersGenModifComponent } from './material-component/banners-gen/banners-gen-modif/banners-gen-modif.component';
import { BannersGenComponent } from './material-component/banners-gen/banners-gen.component';
import { BannersSiteAjoutComponent } from './material-component/banners-site/banners-site-ajout/banners-site-ajout.component';
import { BannersSiteModifComponent } from './material-component/banners-site/banners-site-modif/banners-site-modif.component';
import { BannersSiteComponent } from './material-component/banners-site/banners-site.component';
import { BlogAjoutComponent } from './material-component/blog/blog-ajout/blog-ajout.component';
import { BlogModifComponent } from './material-component/blog/blog-modif/blog-modif.component';
import { BlogComponent } from './material-component/blog/blog.component';
import { ButtonsComponent } from './material-component/buttons/buttons.component';
import { CatBlogAjoutComponent } from './material-component/cat-blog/cat-blog-ajout/cat-blog-ajout.component';
import { CatBlogModifComponent } from './material-component/cat-blog/cat-blog-modif/cat-blog-modif.component';
import { CatBlogComponent } from './material-component/cat-blog/cat-blog.component';
import { CatTutosAjoutComponent } from './material-component/cat-tutos/cat-tutos-ajout/cat-tutos-ajout.component';
import { CatTutosModifComponent } from './material-component/cat-tutos/cat-tutos-modif/cat-tutos-modif.component';
import { CatTutosComponent } from './material-component/cat-tutos/cat-tutos.component';
import { CategoriesAjoutComponent } from './material-component/categories/categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './material-component/categories/categories-modif/categories-modif.component';
import { CategoriesComponent } from './material-component/categories/categories.component';
import { ChipsComponent } from './material-component/chips/chips.component';
import { ClientsAjoutComponent } from './material-component/clients/clients-ajout/clients-ajout.component';
import { ClientsModifComponent } from './material-component/clients/clients-modif/clients-modif.component';
import { ClientsComponent } from './material-component/clients/clients.component';
import { CommandesModifComponent } from './material-component/commandes/commandes-modif/commandes-modif.component';
import { CommandesComponent } from './material-component/commandes/commandes.component';
import { CommentairesModifComponent } from './material-component/commentaires/commentaires-modif/commentaires-modif.component';
import { CommentairesComponent } from './material-component/commentaires/commentaires.component';
import { DialogComponent } from './material-component/dialog/dialog.component';
import { ExpansionComponent } from './material-component/expansion/expansion.component';
import { GammesAjoutComponent } from './material-component/gammes/gammes-ajout/gammes-ajout.component';
import { GammesModifComponent } from './material-component/gammes/gammes-modif/gammes-modif.component';
import { GammesComponent } from './material-component/gammes/gammes.component';
import { GridComponent } from './material-component/grid/grid.component';
import { InscritsNewsletterComponent } from './material-component/inscrits-newsletter/inscrits-newsletter.component';
import { ListsComponent } from './material-component/lists/lists.component';
import { MapComponent } from './material-component/map/map.component';
import { MembresAjoutComponent } from './material-component/membres/membres-ajout/membres-ajout.component';
import { MembresModifComponent } from './material-component/membres/membres-modif/membres-modif.component';
import { MembresComponent } from './material-component/membres/membres.component';
import { MenuComponent } from './material-component/menu/menu.component';
import { NewslettersModifComponent } from './material-component/newsletters/newsletters-modif/newsletters-modif.component';
import { NewslettersComponent } from './material-component/newsletters/newsletters.component';
import { OffresAjoutComponent } from './material-component/offres/offres-ajout/offres-ajout.component';
import { OffresModifComponent } from './material-component/offres/offres-modif/offres-modif.component';
import { OffresComponent } from './material-component/offres/offres.component';
import { PagesAjoutComponent } from './material-component/pages/pages-ajout/pages-ajout.component';
import { PagesModifComponent } from './material-component/pages/pages-modif/pages-modif.component';
import { PagesComponent } from './material-component/pages/pages.component';
import { PartenairesAjoutComponent } from './material-component/partenaires/partenaires-ajout/partenaires-ajout.component';
import { PartenairesModifComponent } from './material-component/partenaires/partenaires-modif/partenaires-modif.component';
import { PartenairesComponent } from './material-component/partenaires/partenaires.component';
import { ProduitsAjoutComponent } from './material-component/produits/produits-ajout/produits-ajout.component';
import { ProduitsModifComponent } from './material-component/produits/produits-modif/produits-modif.component';
import { ProduitsComponent } from './material-component/produits/produits.component';
import { ProgressSnipperComponent } from './material-component/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './material-component/progress/progress.component';
import { SendComponent } from './material-component/send/send.component';
import { SlideToggleComponent } from './material-component/slide-toggle/slide-toggle.component';
import { SliderComponent } from './material-component/slider/slider.component';
import { SnackbarComponent } from './material-component/snackbar/snackbar.component';
import { StepperComponent } from './material-component/stepper/stepper.component';
import { TabsComponent } from './material-component/tabs/tabs.component';
import { CatFormComponent } from './material-component/test/cat-form/cat-form.component';
import { CatListComponent } from './material-component/test/cat-list/cat-list.component';
import { MarkerFormComponent } from './material-component/test/marker-form/marker-form.component';
import { MarkerListComponent } from './material-component/test/marker-list/marker-list.component';
import { TestFormComponent } from './material-component/test/test-form/test-form.component';
import { TestComponent } from './material-component/test/test.component';
import { ToolbarComponent } from './material-component/toolbar/toolbar.component';
import { ToolsComponent } from './material-component/tools/tools.component';
import { TutosAjoutComponent } from './material-component/tutos/tutos-ajout/tutos-ajout.component';
import { TutosModifComponent } from './material-component/tutos/tutos-modif/tutos-modif.component';
import { TutosComponent } from './material-component/tutos/tutos.component';
import { UploadComponent } from './material-component/upload/upload.component';
import { UsersFormComponent } from './material-component/users/users-form/users-form.component';
import { UsersComponent } from './material-component/users/users.component';
import { UtilesComponent } from './material-component/utiles/utiles.component';
import { Zone1AjoutComponent } from './material-component/zone1/zone1-ajout/zone1-ajout.component';
import { Zone1ModifComponent } from './material-component/zone1/zone1-modif/zone1-modif.component';
import { Zone1Component } from './material-component/zone1/zone1.component';
import { Zone2AjoutComponent } from './material-component/zone2/zone2-ajout/zone2-ajout.component';
import { Zone2ModifComponent } from './material-component/zone2/zone2-modif/zone2-modif.component';
import { Zone2Component } from './material-component/zone2/zone2.component';
import { Zone3AjoutComponent } from './material-component/zone3/zone3-ajout/zone3-ajout.component';
import { Zone3ModifComponent } from './material-component/zone3/zone3-modif/zone3-modif.component';
import { Zone3Component } from './material-component/zone3/zone3.component';
import { Zone4AjoutComponent } from './material-component/zone4/zone4-ajout/zone4-ajout.component';
import { Zone4ModifComponent } from './material-component/zone4/zone4-modif/zone4-modif.component';
import { Zone4Component } from './material-component/zone4/zone4.component';
import { Zone6AjoutComponent } from './material-component/zone6/zone6-ajout/zone6-ajout.component';
import { Zone6ModifComponent } from './material-component/zone6/zone6-modif/zone6-modif.component';
import { Zone6Component } from './material-component/zone6/zone6.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'button',
        component: ButtonsComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'stepper',
        component: StepperComponent
      },
      {
        path: 'expansion',
        component: ExpansionComponent
      },
      {
        path: 'chips',
        component: ChipsComponent
      },
      {
        path: 'toolbar',
        component: ToolbarComponent
      },
      {
        path: 'progress-snipper',
        component: ProgressSnipperComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      },
      {
        path: 'tooltip',
        component: TooltipComponent
      },
      {
        path: 'snackbar',
        component: SnackbarComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleComponent
      },
      {
        path: 'utiles',
        component: UtilesComponent
      },
      {
        path: 'zone1',
        component: Zone1Component
      },
      {
        path: 'zone1-ajout',
        component: Zone1AjoutComponent
      },
      {
        path: 'zone1-modif',
        component: Zone1ModifComponent
      },
      {
        path: 'zone2',
        component: Zone2Component
      },
      {
        path: 'zone2-ajout',
        component: Zone2AjoutComponent
      },
      {
        path: 'zone2-modif',
        component: Zone2ModifComponent
      },
      {
        path: 'zone3',
        component: Zone3Component
      },
      {
        path: 'zone3-ajout',
        component: Zone3AjoutComponent
      },
      {
        path: 'zone3-modif',
        component: Zone3ModifComponent
      },
      {
        path: 'zone4',
        component: Zone4Component
      },
      {
        path: 'zone4-ajout',
        component: Zone4AjoutComponent
      },
      {
        path: 'zone4-modif',
        component: Zone4ModifComponent
      },
      {
        path: 'zone6',
        component: Zone6Component
      },
      {
        path: 'zone6-ajout',
        component: Zone6AjoutComponent
      },
      {
        path: 'zone6-modif',
        component: Zone6ModifComponent
      },
      {
        path: 'bannersCategory',
        component: BannersCategoryComponent
      },
      {
        path: 'bannersCategoryAjout',
        component: BannersCategoryAjoutComponent
      },
      {
        path: 'bannersCategoryModif',
        component: BannersCategoryModifComponent
      },
      {
        path: 'bannersGen',
        component: BannersGenComponent
      },
      {
        path: 'bannersGenAjout',
        component: BannersGenAjoutComponent
      },
      {
        path: 'bannersGenModif',
        component: BannersGenModifComponent
      },
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'pagesAjout',
        component: PagesAjoutComponent
      },
      {
        path: 'pagesModif',
        component: PagesModifComponent
      },
      {
        path: 'offres',
        component: OffresComponent
      },
      {
        path: 'offresAjout',
        component: OffresAjoutComponent
      },
      {
        path: 'offresModif',
        component: OffresModifComponent
      },
      {
        path: 'bannersSite',
        component: BannersSiteComponent
      },
      {
        path: 'bannersSiteAjout',
        component: BannersSiteAjoutComponent
      },
      {
        path: 'bannersSiteModif',
        component: BannersSiteModifComponent
      },
      {
        path: 'inscritsNewsletter',
        component: InscritsNewsletterComponent
      },
      {
        path: 'newsletters',
        component: NewslettersComponent
      },
      {
        path: 'newslettersModif',
        component: NewslettersModifComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'send',
        component: SendComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'categoriesAjout',
        component: CategoriesAjoutComponent
      },
      {
        path: 'categoriesModif',
        component: CategoriesModifComponent
      },
      {
        path: 'gammes',
        component: GammesComponent
      },
      {
        path: 'gammesAjout',
        component: GammesAjoutComponent
      },
      {
        path: 'gammesModif',
        component: GammesModifComponent
      },
      {
        path: 'produits',
        component: ProduitsComponent
      },
      {
        path: 'produitsAjout',
        component: ProduitsAjoutComponent
      },
      {
        path: 'produitsModif',
        component: ProduitsModifComponent
      },
      {
        path: 'commentaires',
        component: CommentairesComponent
      },
      {
        path: 'commentairesModif',
        component: CommentairesModifComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'clientsAjout',
        component: ClientsAjoutComponent
      },
      {
        path: 'clientsModif',
        component: ClientsModifComponent
      },
      {
        path: 'commandes',
        component: CommandesComponent
      },
      {
        path: 'commandesModif',
        component: CommandesModifComponent
      },
      {
        path: 'catBlog',
        component: CatBlogComponent
      },
      {
        path: 'catBlogAjout',
        component: CatBlogAjoutComponent
      },
      {
        path: 'catBlogModif',
        component: CatBlogModifComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blogAjout',
        component: BlogAjoutComponent
      },
      {
        path: 'blogModif',
        component: BlogModifComponent
      },
      {
        path: 'catTutos',
        component: CatTutosComponent
      },
      {
        path: 'catTutosAjout',
        component: CatTutosAjoutComponent
      },
      {
        path: 'catTutosModif',
        component: CatTutosModifComponent
      },
      {
        path: 'tutos',
        component: TutosComponent
      },
      {
        path: 'tutosAjout',
        component: TutosAjoutComponent
      },
      {
        path: 'tutosModif',
        component: TutosModifComponent
      },
      {
        path: 'partenaires',
        component: PartenairesComponent
      },
      {
        path: 'partenairesAjout',
        component: PartenairesAjoutComponent
      },
      {
        path: 'partenairesModif',
        component: PartenairesModifComponent
      },
      {
        path: 'membres',
        component: MembresComponent
      },
      {
        path: 'membresAjout',
        component: MembresAjoutComponent
      },
      {
        path: 'membresModif',
        component: MembresModifComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/form',
        component: UsersFormComponent
      },
      {
        path: 'users/form/:id',
        component: UsersFormComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'form',
        component: TestFormComponent
      },
      {
        path: 'cat-form',
        component: CatFormComponent
      },
      {
        path: 'cat-form/:id',
        component: CatFormComponent
      },
      {
        path: 'cat-list',
        component: CatListComponent
      },
      {
        path: 'marker-form',
        component: MarkerFormComponent
      },
      {
        path: 'marker-form/:id',
        component: MarkerFormComponent
      },
      {
        path: 'marker-list',
        component: MarkerListComponent
      }, 
      {
        path: 'annuaire',
        component: AnnuaireComponent
      },
    ]
  },
  
];
