# Agiilse tarkvaraarendusprojekti plaan

## 1. Tarkvaraprojekti kirjeldus

### Projekti idee
Valitud projekt on **ülesannete haldur** väikesele klassi- või töögrupile.

### Mis probleemi tarkvara lahendab?
Praegu jagatakse ülesandeid sageli eraldi vestlustes, e-kirjades või paberil. Selle tõttu võib info kaduda, tähtajad lähevad meelest ja keegi ei näe kiiresti, mis on juba tehtud ning mis veel tegemata.

### Kes on kasutajad?
- õpilased või tiimiliikmed
- õpetaja või tiimijuht
- projekti omanik või administraator

### Mis on tarkvaraarenduse eesmärk?
Eesmärk on luua lihtne veebipõhine tööriist, mis aitab ülesandeid lisada, jagada, jälgida ja lõpetada nii, et kogu tiim näeks töö seisu ühes kohas.

## 2. Agiilse arenduse põhimõtted

Agiilne tarkvaraarendus tähendab, et tarkvara ehitatakse väikeste sammudega ja iga sammu järel kogutakse tagasisidet. Selle asemel, et teha kõik valmis alles projekti lõpus, arendatakse toodet järk-järgult ning vajadusel saab suunda kiiresti muuta.

### Olulisemad põhimõtted
1. Töötav tarkvara on tähtsam kui pikk dokumentatsioon.
2. Muutusi võetakse vastu ka hilises arendusjärgus.
3. Tarkvara valmib väikeste iteratsioonide ehk sprintide kaupa.
4. Klient või kasutaja annab regulaarselt tagasisidet.
5. Arendustiim teeb tihedat koostööd ja suhtleb pidevalt.
6. Valmis töö peab olema testitud ja kasutatav.

### Kasutatud mõisted
- **Backlog**: kõigi soovitud funktsioonide ja tööde nimekiri.
- **Kasutajalugu**: lühike kirjeldus sellest, mida kasutaja vajab.
- **Sprint / iteratsioon**: kindla pikkusega arendusperiood, mille lõpus on valmis töö osa.
- **Valmis töö**: testitud ja kasutatav funktsionaalsus.
- **Tagasiside**: kasutajate või tellija arvamus valmis lahenduse kohta.
- **Arendustiim**: inimesed, kes planeerivad, arendavad ja testivad tarkvara.

## 3. Kasutajalood ja backlog

### Backlog olulisuse järgi
1. Kasutajana tahan lisada uue ülesande, et ma ei unustaks olulist tegevust.
2. Kasutajana tahan näha kõiki ülesandeid ühes vaates, et mul oleks ülevaade töödest.
3. Kasutajana tahan märkida ülesande tehtuks, et näha, mida on juba lõpetatud.
4. Kasutajana tahan määrata ülesandele tähtaja, et töö oleks ajaliselt korraldatud.
5. Kasutajana tahan jagada ülesande teisele kasutajale, et töö jaotuks tiimis õiglaselt.
6. Kasutajana tahan filtreerida ülesandeid staatuse järgi, et leida kiiresti pooleliolevad tööd.

### Vastuvõtutingimused

#### 1. Kasutajana tahan lisada uue ülesande
- Kasutaja saab sisestada ülesande pealkirja.
- Kasutaja saab salvestada ülesande.
- Süsteem kuvab lisatud ülesande nimekirjas.

#### 2. Kasutajana tahan märkida ülesande tehtuks
- Kasutaja saab valida olemasoleva ülesande.
- Kasutaja saab muuta staatuse väärtuseks "tehtud".
- Tehtud ülesanne kuvatakse eraldi või märgistatult.

#### 3. Kasutajana tahan määrata ülesandele tähtaja
- Kasutaja saab valida kuupäeva.
- Tähtaeg salvestatakse koos ülesandega.
- Süsteem kuvab tähtaja ülesande juures.

## 4. Metoodikate võrdlus

### Scrum
Scrum on agiilne metoodika, kus töö jagatakse sprintideks. Iga sprindi lõpus on midagi valmis ja saab tagasisidet.

### Kanban
Kanban keskendub töövoo nähtavaks tegemisele. Ülesandeid liigutatakse veergude vahel, näiteks "Tehtav", "Tegemisel", "Valmis".

### XP
XP ehk Extreme Programming rõhutab head koodi, sagedast testimist, paarisprogrammeerimist ja pidevat tagasisidet.

### Lean
Lean keskendub raiskamise vähendamisele ja sellele, et teha ainult väärtust loovat tööd.

### SAFe
SAFe on raamistik suurtele organisatsioonidele, kus paljud tiimid peavad ühiselt ja koordineeritult töötama.

### Sobivaim valik sellele projektile
Selle projekti jaoks sobib kõige paremini **Scrum**, sest projekt on väike, funktsioone saab jagada sprintidesse ning iga sprindi lõpus on lihtne näidata valmis töö osa ja koguda tagasisidet. Kui projekt kasvaks suuremaks, võiks hiljem kasutada rohkem Kanbani põhimõtteid töövoo juhtimiseks.

## 5. Rollid ja töökorraldus

### Vajalikud rollid
- **Tooteomanik**: määrab, millised funktsioonid on kõige olulisemad.
- **Scrum Master**: aitab meeskonnal protsessi hoida ja takistusi eemaldada.
- **Arendaja**: kirjutab koodi ja loob funktsionaalsuse.
- **Testija**: kontrollib, et tarkvara töötaks korrektselt.
- **Kasutaja või esindaja**: annab tagasisidet, kas lahendus vastab vajadusele.

### Kuidas toimub grupitöö?
- Projekti alguses koostatakse backlog.
- Iga sprinti alguses valitakse järgmised kasutajalood.
- Ülesanded jagatakse arendajate ja testijate vahel.
- Sprindi ajal tehakse lühikesi koosolekuid, et jälgida edenemist.
- Sprindi lõpus demonstreeritakse valmis töö ja kogutakse tagasisidet.
- Tagasiside põhjal parandatakse või täiendatakse backlog'i.

## 6. Tarkvara elutsükkel ja arendussammud

Tarkvara liigub ideest valmis lahenduseni järgmise voona:

idee → kasutajalugu → planeerimine → arendus → testimine → ülevaatus → tagasiside → parandamine → valmis töö

### Selgitus
- **Idee**: leitakse probleem, mida lahendada.
- **Kasutajalugu**: kirjeldatakse, mida kasutaja tahab.
- **Planeerimine**: valitakse, mida tehakse esimeses sprintis.
- **Arendus**: kirjutatakse tarkvara.
- **Testimine**: kontrollitakse, kas kõik töötab.
- **Ülevaatus**: näidatakse tulemust kasutajale või õpetajale.
- **Tagasiside**: saadakse arvamus ja parandused.
- **Parandamine**: tehakse vajalikud muudatused.
- **Valmis töö**: funktsioon on kasutatav ja testitud.

## 7. Kihiline mudel

### Kasutajaliides
Kasutaja näeb siin ülesannete loendit, lisamisvormi ja nuppe staatuse muutmiseks.
- Näide: nupp "Lisa ülesanne" ja tabel ülesannete kuvamiseks.

### Ärilogika
Siin otsustatakse, kuidas ülesandeid lisatakse, kontrollitakse ja filtreeritakse.
- Näide: reegel, et ülesanne peab sisaldama pealkirja.

### Andmebaas
Siin hoitakse ülesannete andmeid püsivalt alles.
- Näide: tabel, kus on ülesande nimi, staatus ja tähtaeg.

## 8. Koodi lugemine ja dokumenteerimine

### Väike koodinäide
```python
class Task:
    def __init__(self, title, due_date=None):
        self.title = title
        self.due_date = due_date
        self.done = False

    def mark_done(self):
        self.done = True
```

### Mida see kood teeb?
See kood kirjeldab ühte ülesannet. Ülesandel on pealkiri, vajadusel tähtaeg ja olek, mis näitab, kas see on tehtud. Meetod `mark_done()` muudab ülesande staatuse tehtuks.

### Vajalik dokumentatsioon
- kasutusjuhend
- API dokumentatsioon
- andmemudeli kirjeldus
- arendus- ja paigaldusjuhend
- testimise kirjeldus
- muudatuste logi

## 9. Kokkuvõte

Ülesannete haldur on lihtne, kuid hea näide agiilsest projektist. Selle puhul saab kasutada backlog'i, kasutajalugusid, sprint'e ja tagasisidet, et arendada tarkvara samm-sammult. Scrum sobib sellele projektile hästi, sest see toetab selget planeerimist, regulaarset ülevaatust ja valmis töö järkjärgulist loomist.

## 10. Tegelik projekt

Selle plaani põhjal on loodud ka lihtne ülesannete halduri veebirakendus samas kaustas. Rakendus võimaldab ülesandeid lisada, märkida tehtuks, filtreerida ja salvestada brauseri mällu.

