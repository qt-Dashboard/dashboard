import { Routes } from '@angular/router';

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
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { UtilesComponent } from './utiles/utiles.component';
import { Zone1Component } from './zone1/zone1.component';
import { Zone1AjoutComponent } from './zone1/zone1-ajout/zone1-ajout.component';
import { Zone1ModifComponent } from './zone1/zone1-modif/zone1-modif.component';
import { Zone2AjoutComponent } from './zone2/zone2-ajout/zone2-ajout.component';
import { Zone2ModifComponent } from './zone2/zone2-modif/zone2-modif.component';
import { Zone2Component } from './zone2/zone2.component';
import { Zone3Component } from './zone3/zone3.component';
import { Zone3AjoutComponent } from './zone3/zone3-ajout/zone3-ajout.component';
import { Zone3ModifComponent } from './zone3/zone3-modif/zone3-modif.component';
import { Zone4Component } from './zone4/zone4.component';
import { Zone4AjoutComponent } from './zone4/zone4-ajout/zone4-ajout.component';
import { Zone4ModifComponent } from './zone4/zone4-modif/zone4-modif.component';
import { Zone6ModifComponent } from './zone6/zone6-modif/zone6-modif.component';
import { Zone6AjoutComponent } from './zone6/zone6-ajout/zone6-ajout.component';
import { Zone6Component } from './zone6/zone6.component';
import { BannersCategoryComponent } from './banners-category/banners-category.component';
import { BannersCategoryAjoutComponent } from './banners-category/banners-category-ajout/banners-category-ajout.component';
import { BannersCategoryModifComponent } from './banners-category/banners-category-modif/banners-category-modif.component';
import { BannersGenModifComponent } from './banners-gen/banners-gen-modif/banners-gen-modif.component';
import { BannersGenAjoutComponent } from './banners-gen/banners-gen-ajout/banners-gen-ajout.component';
import { BannersGenComponent } from './banners-gen/banners-gen.component';
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
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NewslettersModifComponent } from './newsletters/newsletters-modif/newsletters-modif.component';
import { SendComponent } from './send/send.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAjoutComponent } from './categories/categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './categories/categories-modif/categories-modif.component';
import { GammesComponent } from './gammes/gammes.component';
import { GammesAjoutComponent } from './gammes/gammes-ajout/gammes-ajout.component';
import { GammesModifComponent } from './gammes/gammes-modif/gammes-modif.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
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
import { CatTutosAjoutComponent } from './cat-tutos/cat-tutos-ajout/cat-tutos-ajout.component';
import { CatTutosComponent } from './cat-tutos/cat-tutos.component';
import { CatTutosModifComponent } from './cat-tutos/cat-tutos-modif/cat-tutos-modif.component';
import { TutosAjoutComponent } from './tutos/tutos-ajout/tutos-ajout.component';
import { TutosComponent } from './tutos/tutos.component';
import { TutosModifComponent } from './tutos/tutos-modif/tutos-modif.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { PartenairesAjoutComponent } from './partenaires/partenaires-ajout/partenaires-ajout.component';
import { PartenairesModifComponent } from './partenaires/partenaires-modif/partenaires-modif.component';
import { MembresComponent } from './membres/membres.component';
import { MembresAjoutComponent } from './membres/membres-ajout/membres-ajout.component';
import { MembresModifComponent } from './membres/membres-modif/membres-modif.component';
import { UsersComponent } from './users/users.component';
import { UsersAjoutComponent } from './users/users-ajout/users-ajout.component';
import { UsersModifComponent } from './users/users-modif/users-modif.component';

export const MaterialRoutes: Routes = [
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
    path: 'usersAjout',
    component: UsersAjoutComponent
  },
  {
    path: 'usersModif',
    component: UsersModifComponent
  },
  
];
