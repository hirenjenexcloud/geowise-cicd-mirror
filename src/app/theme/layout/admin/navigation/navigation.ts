import {Injectable} from '@angular/core';
import { title } from 'process';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Search',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-search'
      },

      {
        id: 'device',
        title:"Device Management",
        type: 'collapse',
        icon: 'feather icon-cpu',
        children:[
          {
            id:'device',
            title: 'Add Device',
            type: 'item',
            url: '/device/add_device',
            icon: 'feather icon-plus'
          },
          // {
          //   id:'device',
          //   title: 'Delete Device',
          //   type: 'item',
          //   url: '/device/delete_device',
          //   icon: 'feather icon-trash'
          // },

           {
            id:'device',
            title: 'Tracking Map',
            type: 'item',
            url: '/device/map_view',
            icon: 'feather icon-map'
          },

        ]
      },
      //  {
      //   id: 'transfer',
      //   title:"Transfer Management",
      //   type: 'collapse',
      //   icon: 'feather icon-activity',
      //   children:[
      //     {
      //       id:'transfer',
      //       title: 'Transfer',
      //       type: 'item',
      //       url: '/transfer/transfer',
      //       icon: 'feather icon-repeat'
      //     },
      //     {
      //       id:'bulk-transfer',
      //       title: 'Bulk Transfer',
      //       type: 'item',
      //       url: '/transfer/bulk_transfer',
      //       icon: 'feather icon-layers'
      //     },
      //      {
      //       id:'transfer_history',
      //       title: 'Transfer History',
      //       type: 'item',
      //       url: '/transfer/transfer_history',
      //       icon: 'feather icon-clock'
      //     },

      //   ]
      // },
        {
        id: 'firmware',
        title:"Firmware Management",
        type: 'item',
        url: '/firmware',
        icon: 'feather icon-upload'
      },
       {
        id: 'group',
        title:"Group Management",
        type: 'item',
        url: '/group',
        icon: 'feather icon-users'
      },
      {
        id: 'setting',
        title:"Setting Management",
        type: 'item',
        url: '/setting',
        icon: 'feather icon-settings'
      }
    ]
  },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT & FORMS',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'forms-element',
  //       title: 'Form Elements',
  //       type: 'item',
  //       url: '/forms/basic',
  //       icon: 'feather icon-file-text'
  //     }
  //   ]
  // },
  // {
  //   id: 'table',
  //   title: 'Table & Charts',
  //   type: 'group',
  //   icon: 'feather icon-list',
  //   children: [
  //     {
  //       id: 'bootstrap',
  //       title: 'Bootstrap Table',
  //       type: 'item',
  //       url: '/tbl-bootstrap/bt-basic',
  //       icon: 'feather icon-server'
  //     },
     
  //   ]
  // },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'reset-password',
            title: 'Reset Password',
            type: 'item',
            url: '/auth/reset-password',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'change-password',
            title: 'Change Password',
            type: 'item',
            url: '/auth/change-password',
            target: true,
            breadcrumbs: false
          }
        ]
      },
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'feather icon-align-left',
  // }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
