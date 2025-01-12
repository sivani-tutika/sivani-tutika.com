
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sivani-tutika.com/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/sivani-tutika.com/main",
    "route": "/sivani-tutika.com"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/main"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/home"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/about"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/work"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/contact"
  },
  {
    "renderMode": 2,
    "route": "/sivani-tutika.com/more"
  }
],
  assets: {
    'index.csr.html': {size: 23630, hash: 'd4a68994d0ff92ef8701b494c2edd438a47375aea76bf323ff5bdff58a49726d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17204, hash: 'babf9c3ce045428dfc32aef54b3aae5f678b5dba9f263fe7933c6391168b1f18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'main/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/main_index_html.mjs').then(m => m.default)},
    'work/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'more/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/more_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 120946, hash: '4a23e21e03ed3c3b3dffdf57c751ccec903dd8cd8368dda36037c6a30f0d9fa7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-JBK7QVY4.css': {size: 6979, hash: 'W2DYmsmlU3E', text: () => import('./assets-chunks/styles-JBK7QVY4_css.mjs').then(m => m.default)}
  },
};
