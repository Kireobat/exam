# Eksamen  | `07.06.23 - 9.06.23`

## Innholdsfortegnelse

- [Eksamen  | `07.06.23 - 9.06.23`](#eksamen---070623---90623)
  - [Innholdsfortegnelse](#innholdsfortegnelse)
  - [Oppgave](#oppgave)
    - [Hva betyr det?](#hva-betyr-det)
  - [Dokumentasjon](#dokumentasjon)
    - [Drift](#drift)
  - [Sjekkliste](#sjekkliste)


## Oppgave

Tema/situasjonsbeskrivelse

Sørvær oppvekstsenter er en tredelt skole. De har barnehage, barneskole og ungdomsskole. Alle de tre avdelingene er lokalisert i en treetasjes mursteinsbygning. De har planer om å oppgradere oppvekstsenterets IT-system. Både elevene og de ansatte må ha tilgang til ressurser som ukeplaner og bilder fra skolen på nettet. Oppgaven din er å planlegge et nettverk som ivaretar GDPR og digital sikkerhet både for brukere og ressurser. For å få tilgang til skolens resurser må brukeren registrere seg på en nettside/applikasjon. Alt moderne utstyr skal være med i løsningen og planleggingen, inkludert virtuelle løsninger og skytjenester.

Det er 10 ansatte på oppvekstsenteret, og alle skal ha en stasjonær og en bærbar enhet. De skal ha felles printer, og nettverket skal være segmentert i to - ett kablet nettverk og ett trådløst. De kjører hybride serverløsninger for lagring av nettsider, filer (undervisningsmateriale) og brukere.

Som IT-medarbeider i bedriften deltar du i planlegging og implementering av IT- systemet.

De ønsker at du hjelper dem med følgende:

1 Lage en datamodell og DB for brukere som registrerer seg, slik at man kan lagre opplysninger om brukerne. 

2 Lage en nettside eller app for portalen.

3 Lage en beskrivelse av de nødvendige nettverkstjenestene og rollene, og hvordan de kjøres.

4 Lese deg opp på og samle inn nødvendig informasjon om GDPR.

5 Sette opp et budsjett for alt utstyr - både programvare og maskinvare. 

6 Laste ned ISO-filer (W10/11 og W2016/2019/2022 - bare én av hver) og klargjøre maskiner for klient-tjener-nettverk.

### Hva betyr det?

- Drift
  - Stasjonære PCer
  - Bærbare PCer
  - Segmentert nettverk
  - Felles printer
- Brukerstøtte
  - Ivareta GDPR
  - Skrive dokumentasjon
- Utvikling
  - Nettside / Applikasjon med login
  - Lage en database og modell
  - 


## Dokumentasjon

[google sheets](https://docs.google.com/spreadsheets/d/1auid7jO8pZ8DDEQjhIPVLZzPIe0fVUC_fVMD-_4cGKM/edit?usp=sharing)

[forklaringer på nettverkstjenester](https://github.com/Kireobat/Info/blob/main/Drift/Forklaringer/VLAN/readme.md)
### Drift

Domene: skole.intra
DSRM: Kappa123
NetBIOS: SKOLE

Lærere har en delt mappe ved \\\SRV-005\Larer

Hjemme mapper blir autogenerert når en konto blir opprettet

Hjemme mappen er tilgjengelig ved Z:

Brukere genereres fra en malbruker

Info

- PFSense
  - 10.0.0.1
  - DHCP
    - 10.0.0.11-10.0.0.250
    - 255.255.255.0
- SRV-005
  - 10.0.0.10
  - DNS
  - AD
    - skole.intra
  - IIS
    - http://skole.intra
  - ++
- PC-02
  - 10.0.0.5


## Sjekkliste

- [ ] Lage en datamodell og DB for brukere som registrerer seg, slik at man kan lagre opplysninger om brukerne. 

- [x] Lage en nettside eller app for portalen.

- [x] Lage en beskrivelse av de nødvendige nettverkstjenestene og rollene, og hvordan de kjøres.

- [ ] Lese deg opp på og samle inn nødvendig informasjon om GDPR.

- [x] Sette opp et budsjett for alt utstyr - både programvare og maskinvare. 

- [x] Laste ned ISO-filer (W10/11 og W2016/2019/2022 - bare én av hver) og klargjøre maskiner for klient-tjener-nettverk.
