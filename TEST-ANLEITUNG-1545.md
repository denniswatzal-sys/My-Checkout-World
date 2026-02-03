# 🧪 KILL-SWITCH TEST - 15:45 UHR

## ⏰ TEST-ZEITPUNKT
**Ablaufdatum: HEUTE, 03.02.2026, 15:45 Uhr**

---

## 🚀 SCHNELL-ANLEITUNG

### 1. Diese 2 Dateien auf GitHub hochladen (ERSETZEN!):
- ✅ `index.html` 
- ✅ `service-worker.js`

### 2. Warte 1-2 Minuten (GitHub CDN)

### 3. App öffnen und testen:
**VOR 15:45 Uhr:**
- ✅ App läuft normal
- 📊 Console (F12) zeigt: "App gesperrt: false"

**NACH 15:45 Uhr:**
- 🔒 Sperrbildschirm erscheint
- 📊 Console zeigt: "App gesperrt: true"

### 4. WICHTIG nach dem Test:
**SOFORT die echten Dateien wieder hochladen!**
- Die mit Ablaufdatum 23.02.2026
- Sonst bleibt deine App gesperrt!

---

## 🧪 DETAILLIERTER TEST

### Console-Ausgabe prüfen (F12 → Console):

**Vor 15:45 Uhr siehst du:**
```
=== KILL-SWITCH TEST (15:45 Uhr) ===
Ablaufdatum: 03.02.2026, 15:45:00
Aktuelles Datum: 03.02.2026, 15:43:00
App gesperrt: false
```

**Nach 15:45 Uhr siehst du:**
```
=== KILL-SWITCH TEST (15:45 Uhr) ===
Ablaufdatum: 03.02.2026, 15:45:00
Aktuelles Datum: 03.02.2026, 15:46:00
App gesperrt: true
```

### Service Worker prüfen:
1. F12 → Tab "Application" 
2. Links: "Service Workers"
3. Console sollte zeigen:
```
=== SERVICE WORKER KILL-SWITCH TEST (15:45 Uhr) ===
Ablaufdatum: 03.02.2026, 15:45:00
Aktuelles Datum: 03.02.2026, 15:43:00
Service Worker gesperrt: false
```

---

## 🔒 OFFLINE-TEST (WICHTIG!)

Dieser Test beweist, dass die App auch offline blockiert wird:

### Schritt 1: Vor 15:45 Uhr
1. App normal öffnen und nutzen
2. Falls möglich: Als PWA installieren

### Schritt 2: Offline gehen
1. Handy: Flugmodus AN
2. Oder: WLAN ausschalten

### Schritt 3: Warten bis nach 15:45 Uhr

### Schritt 4: App öffnen
- 🔒 Sperrbildschirm sollte erscheinen
- Auch ohne Internet!
- Das beweist: Service Worker funktioniert!

---

## 📱 SPERRBILDSCHIRM

Nach 15:45 Uhr zeigt die App:

```
        🔒

    Beta-Phase beendet

Die Testphase dieser App ist abgelaufen.
Vielen Dank für deine Teilnahme!

    Ablaufdatum: 03.02.2026, 15:45:00

    🧪 TEST-VERSION (15:45 Uhr)
```

---

## ⚠️ NACH DEM TEST - SUPER WICHTIG!

### Was du JETZT tun musst:

1. **Finde die ECHTEN Dateien** (von vorhin):
   - `index.html` (mit Datum: 23.02.2026)
   - `service-worker.js` (mit Datum: 23.02.2026)

2. **Lade sie SOFORT wieder auf GitHub hoch**
   - Ersetze die Test-Dateien
   - Warte 1-2 Minuten

3. **Prüfe, dass die App wieder läuft**
   - Öffne die App
   - Sollte wieder normal funktionieren

### Falls du die echten Dateien nicht mehr findest:
Ich kann sie dir nochmal erstellen - sag einfach Bescheid!

---

## 🐛 TROUBLESHOOTING

### Problem: App zeigt nach 15:45 keinen Sperrbildschirm

**Lösung 1: Hard Reload**
- Chrome: Strg + Shift + R (Windows) oder Cmd + Shift + R (Mac)
- Safari: Cmd + Option + R
- Oder: Browser-Cache löschen

**Lösung 2: Service Worker neu laden**
1. F12 → Application → Service Workers
2. Button "Unregister" klicken
3. Seite neu laden

**Lösung 3: Systemzeit prüfen**
- Ist die Systemzeit korrekt?
- Ist es wirklich nach 15:45 Uhr?

### Problem: Console zeigt keine Logs

**Lösung:**
1. F12 öffnen
2. Tab "Console" öffnen
3. Seite neu laden
4. Logs sollten erscheinen

---

## ✅ ERFOLG!

Wenn du nach 15:45 Uhr den Sperrbildschirm siehst:
- 🎉 Kill-Switch funktioniert!
- 🎉 Offline-Schutz aktiv!
- 🎉 Du kannst beruhigt die echte Version (23.02.2026) nutzen!

---

## 📞 NÄCHSTE SCHRITTE

1. ✅ Test durchgeführt
2. ✅ Kill-Switch funktioniert
3. ✅ Echte Dateien wieder hochgeladen
4. ✅ App läuft wieder normal
5. 🚀 Teile die App mit deinen Testern!

**Denk dran: Die echte Version läuft bis 23.02.2026!**
