/* Settings shared by all four landing pages.
   Paste the Apps Script web app URL (ends in /exec) between the quotes, commit, and every page is connected.
   Left empty, the forms run in preview mode: they show a pretend Scan ID and send nothing. */
window.__SCAN_ENDPOINT = "https://script.google.com/macros/s/AKfycbx2nK9N2QzxYrxjixv34R9WiYOG81byeRXFhEz5cISnwno95_vcIHI1_jC3WlOv6B7-uQ/exec";

/* Stripe Payment Link for the $75/year quarterly-monitoring plan (starts with https://buy.stripe.com/).
   Used by "Upgrade to annual" and "Start free, then upgrade". Empty = those buttons scroll to pricing. */
window.__CHECKOUT_URL = 'https://buy.stripe.com/test_fZu4gA3yj2YU9kF45z9Zm00';
