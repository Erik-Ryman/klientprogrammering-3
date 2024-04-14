# Dokumentation

Next.js är ett populärt ramverk för att bygga SPAs med React. Det erbjuder möjligheter för server-side rendering (SSR), vilket innebär att den initiala HTML-koden genereras på servern och skickas till klienten. Detta kan förbättra prestandan genom att minska tiden det tar för sidan att ladda och förbättra sökmotoroptimeringen (SEO).

Next.js stöder också client-side rendering (CSR), vilket möjliggör dynamiska uppdateringar utan att behöva ladda om hela sidan. Detta kan ge en smidigare användarupplevelse och minska belastningen på servern.

När det gäller underhållbarhet förenklar Next.js utvecklingsprocessen genom att erbjuda funktioner som automatisk uppdelning av kod, hot module replacement och serverless deployment. Dessa funktioner gör det enklare att hantera och uppdatera applikationen över tiden.

Sammanfattningsvis kan användningen av Next.js för att bygga SPAs resultera i förbättrad prestanda, bättre SEO och förbättrad underhållbarhet.

# Analys och reflektion

Det jag har byggt är en väldigt grundläggande SPA utan backend. Jag har använt mig av nextJS element som exempelvis <Link> och <Image> för att det ska bli en effektiv SPA applikation. På grund av simpliciteten finns det inte så mycket att säga. Jag har importerat ikoner för att kunna skapa ett attraktivt UI och jag har jobbat mobile-first med hjälp av Tailwind CSS.

Jag har valt att använda App routern från next/navigation istället för Pages routern från next/router. På så sätt sköter jag routingen via App mappen där varje undermapp blir en route så länge jag har en page.tsx fil i mappen som exporterar en komponent.
