<script>
  import "./cookiebanner.css";
  import { Banner as GdprBanner } from "@beyonk/gdpr-cookie-consent-banner";

  function initAnalytics() {
    // do something with segment.io or google analytics etc
  }
</script>

<div class="banner">
  <GdprBanner
    cookieName="Despre cookie-uri"
    heading="Despre cookie-uri"
    description="Acest site vă respectă confidențialitatea și nu colectează date personale fără acordul dumneavoastră explicit 😎"
    canRejectCookies={window.innerWidth > 500}
    acceptLabel="Acceptă"
    rejectLabel="Refuză"
    settingsLabel="Preferințe"
    closeLabel="Închide"
    editLabel="Editează"
    choices={{
        necessary: {
            label: "Cookie-uri necesare",
            description: "Nu există cookie-uri obligatorii.",
            value: false
        },
        tracking: {
            label: "Cookie-uri de urmărire",
            description: "Nu există cookie-uri de urmărire.",
            value: false
        },
        marketing: {
            label: "Cookie-uri de marketing",
            description: "Nu există cookie-uri de marketing.",
            value: false
        },
        analytics: {
            label: "Cookie-uri analitice",
            description: "Folosite pentru analiza traficului.",
            value: false
        },
    }}
    on:analytics={initAnalytics}
  />
</div>
