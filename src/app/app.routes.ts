import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent) },
  { path: 'fleet', loadComponent: () => import('./pages/fleet/fleet.component').then((m) => m.FleetComponent) },
  { path: 'tour-packages', loadComponent: () => import('./pages/tour-packages/tour-packages.component').then((m) => m.TourPackagesComponent) },
  { path: 'request-quotation', loadComponent: () => import('./pages/quotation/quotation.component').then((m) => m.QuotationComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog-list.component').then((m) => m.BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import('./pages/blog/blog-detail.component').then((m) => m.BlogDetailComponent) },
  { path: 'kolhapur-taxi-service', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-taxi-service' } },
  { path: 'kolhapur-travel-agency', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-travel-agency' } },
  { path: 'kolhapur-to-goa-cab', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-to-goa-cab' } },
  { path: 'kolhapur-to-pune-cab', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-to-pune-cab' } },
  { path: 'kolhapur-to-mumbai-cab', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-to-mumbai-cab' } },
  { path: 'kolhapur-tour-packages', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'kolhapur-tour-packages' } },
  { path: 'maharashtra-tour-packages', loadComponent: () => import('./pages/location-seo/location-seo.component').then((m) => m.LocationSeoComponent), data: { slug: 'maharashtra-tour-packages' } },
  { path: '**', redirectTo: '' }
];
