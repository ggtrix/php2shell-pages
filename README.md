# PHP2Shell landing pages

The four campaign landing pages, published with GitHub Pages until each one moves to its own domain.

| Page | File | Address |
|---|---|---|
| General | `index.html` | `https://<account>.github.io/<repo>/` |
| MSP / MSSP | `msp/index.html` | `…/msp/` |
| Healthcare | `healthcare/index.html` | `…/healthcare/` |
| Defense industrial base | `dib/index.html` | `…/dib/` |

**Connect the forms:** put the Apps Script web app URL in `config.js`. Until then the forms run in preview mode and send nothing.

**Moving a page to its own domain later:** upload that page's `index.html` and `config.js` (keep them side by side, and change `../config.js` to `./config.js` in the page), then update the links in `index.html` under `AUDIENCE_PAGES` to the new address.

This repo holds only the public pages. The hub, the backend and the scan data live in the private repo.
