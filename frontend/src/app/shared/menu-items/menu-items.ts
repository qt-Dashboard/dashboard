import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;

}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'utiles', type: 'link', name: 'Informations utiles', icon: 'info'},
  { state: 'users', type: 'link', name: 'Users', icon: 'supervisor_account'},
  { state: 'test', type: 'link', name: 'Test', icon: 'map'},
  { state: 'annuaire', type: 'link', name: 'Annuaire', icon: 'menu_book'},
  // { state: 'zone1', type: 'link', name: 'Zone annonceurs Slider', icon: ''},
  // { state: 'zone2', type: 'link', name: 'Zone annonc. bannières', icon: ''},
  // { state: 'zone3', type: 'link', name: 'Zone accroche', icon: ''},
  // { state: 'zone4', type: 'link', name: 'Zone produits a la Une', icon: ''},
  // { state: 'zone6', type: 'link', name: 'Zone messages', icon: ''},
  // { state: 'bannersCategory', type: 'link', name: 'Zone bannières catég.', icon: ''},
  // { state: 'bannersGen', type: 'link', name: 'Zone bannière génerique', icon: ''},
  // { state: 'pages', type: 'link', name: 'Pages du site', icon: ''},
  // { state: 'offres', type: 'link', name: 'Zone offres', icon: ''},
  // { state: 'bannersSite', type: 'link', name: 'Zone bannière site', icon: ''},
  // { state: 'inscritsNewsletter', type: 'link', name: 'Inscrits newsletter', icon: 'local_library'},
  // { state: 'newsletters', type: 'link', name: 'Gestion des newsletters', icon: ''},
  // { state: 'articles', type: 'link', name: 'Gestion des articles', icon: ''},
  // { state: 'send', type: 'link', name: 'Envoyer newsletter', icon: ''},
  // { state: 'categories', type: 'link', name: 'Zone categories', icon: ''},
  // { state: 'gammes', type: 'link', name: 'Zone gamme produits', icon: ''},
  // { state: 'produits', type: 'link', name: 'Produits', icon: ''},
  // { state: 'commentaires', type: 'link', name: 'Zone Commentaires', icon: ''},
  // { state: 'clients', type: 'link', name: 'Zone clients', icon: ''},
  // { state: 'commandes', type: 'link', name: 'Zone commandes', icon: 'shop'},
  // { state: 'catBlog', type: 'link', name: 'Zone categories news', icon: ''},
  // { state: 'blog', type: 'link', name: 'Actualités', icon: ''},
  // { state: 'catTutos', type: 'link', name: 'Zone categories tutos', icon: ''},
  // { state: 'tutos', type: 'link', name: 'Tutoriaux', icon: ''},
  // { state: 'partenaires', type: 'link', name: 'Zone partenaires', icon: ''},
  // { state: 'membres', type: 'link', name: 'Zone membres', icon: ''},

  // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  // {
  //   state: 'expansion',
  //   type: 'link',
  //   name: 'Expansion Panel',
  //   icon: 'vertical_align_center'
  // },
  // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  // {
  //   state: 'progress-snipper',
  //   type: 'link',
  //   name: 'Progress snipper',
  //   icon: 'border_horizontal'
  // },
  // {
  //   state: 'progress',
  //   type: 'link',
  //   name: 'Progress Bar',
  //   icon: 'blur_circular'
  // },
  // {
  //   state: 'dialog',
  //   type: 'link',
  //   name: 'Dialog',
  //   icon: 'assignment_turned_in'
  // },
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive'
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
