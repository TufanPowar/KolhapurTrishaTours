import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-taxi-service',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-travel-agency',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-to-goa-cab',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-to-pune-cab',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-to-mumbai-cab',
    renderMode: RenderMode.Server
  },
  {
    path: 'kolhapur-tour-packages',
    renderMode: RenderMode.Server
  },
  {
    path: 'maharashtra-tour-packages',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
