# 🧪 Kill-Switch TEST-VERSION

## ⏰ Test-Ablaufdatum

**Ablauf:** 03.02.2026, 15:35 Uhr
**Status:** Heute um 15:35 Uhr wird die App gesperrt!

---

## 📋 Test-Dateien

Diese Dateien sind NUR ZUM TESTEN gedacht!

### 1. **index-test.html**
- Kill-Switch mit Ablauf: **heute 15:35 Uhr**
- Umbenennen zu `index.html` für Upload
- Zeigt Console-Logs für Debugging

### 2. **service-worker-test.js**
- Kill-Switch mit Ablauf: **heute 15:35 Uhr**
- Umbenennen zu `service-worker.js` für Upload
- Zeigt Console-Logs für Debugging

---

## 🧪 So testest du:

### Schritt 1: Upload auf GitHub
1. **index-test.html** → Umbenennen zu **index.html** → Upload
2. **service-worker-test.js** → Umbenennen zu **service-worker.js** → Upload

### Schritt 2: Warten bis 15:35 Uhr
- Jetzt ist es: **vor 15:35 Uhr** → App läuft normal
- Ab **15:35 Uhr** → Sperrbildschirm erscheint

### Schritt 3: Prüfen
**Vor 15:35 Uhr:**
- ✅ App lädt normal
- ✅ Loading Screen erscheint
- ✅ Start Screen ist sichtbar
- 📊 Console zeigt: "App gesperrt: false"

**Nach 15:35 Uhr:**
- 🔒 Sperrbildschirm erscheint sofort
- ❌ Keine weiteren Features laden
- 📊 Console zeigt: "App gesperrt: true"

### Schritt 4: Console öffnen (F12)
Du solltest sehen:
```
=== KILL-SWITCH TEST ===
Ablaufdatum: Mon Feb 03 2026 15:35:00
Aktuelles Datum: Mon Feb 03 2026 14:20:00
App gesperrt: false
```

Nach 15:35 Uhr:
```
=== KILL-SWITCH TEST ===
Ablaufdatum: Mon Feb 03 2026 15:35:00
Aktuelles Datum: Mon Feb 03 2026 15:36:00
App gesperrt: true
```

---

## 🎯 Was getestet wird:

### ✅ Online-Test
1. App vor 15:35 Uhr öffnen → Sollte laufen
2. App nach 15:35 Uhr öffnen → Sollte gesperrt sein

### ✅ Offline-Test (wichtig!)
1. App vor 15:35 Uhr öffnen und nutzen
2. App als PWA installieren (falls möglich)
3. Handy in Flugmodus / WLAN aus
4. Warten bis 15:35 Uhr
5. App neu öffnen → Sollte TROTZDEM gesperrt sein!

### ✅ Service Worker Test
1. DevTools öffnen (F12)
2. Tab "Application" → "Service Workers"
3. Sollte "activated and running" zeigen
4. Nach 15:35 Uhr → Console zeigt SW-Logs

---

## 📱 Sperrbildschirm-Anzeige

Nach 15:35 Uhr siehst du:

```
🔒
Beta-Phase beendet
Die Testphase dieser App ist abgelaufen.
Vielen Dank für deine Teilnahme!

Ablaufdatum: 03.02.2026, 15:35:00

🧪 TEST-VERSION
```

---

## ⚠️ Wichtig!

### Nach dem Test:
1. **SOFORT** die echten Dateien wieder hochladen:
   - `index.html` (mit Datum 23.02.2026)
   - `service-worker.js` (mit Datum 23.02.2026)

2. **NICHT** die Test-Dateien online lassen!
   - Sonst ist deine App dauerhaft gesperrt!

### Browser Cache leeren:
Nach dem Test solltest du:
1. Handy-Browser → Einstellungen → Browserdaten löschen
2. Oder: Service Worker manuell löschen (DevTools)

---

## 🔄 Nach dem Test → Echte Version hochladen

Wenn der Test erfolgreich war, lade die echten Dateien hoch:
- ✅ `index.html` (Ablauf: 23.02.2026)
- ✅ `service-worker.js` (Ablauf: 23.02.2026)

Diese findest du in den vorherigen Dateien!

---

## 🐛 Falls etwas nicht funktioniert:

### Problem: App läuft nach 15:35 Uhr weiter
**Lösung:**
- Browser-Cache leeren
- Service Worker löschen (DevTools → Application → Service Workers → Unregister)
- Seite neu laden (Strg + Shift + R)

### Problem: Console zeigt keine Logs
**Lösung:**
- DevTools öffnen (F12)
- Tab "Console" öffnen
- Logs sollten erscheinen
- Falls nicht: Service Worker Console prüfen

### Problem: Sperrbildschirm nicht sichtbar
**Lösung:**
- Systemzeit prüfen (ist es wirklich nach 15:35?)
- Netzwerkverbindung prüfen
- Neue Version lädt eventuell nicht → Hard Reload

---

## ✨ Viel Erfolg beim Testen!

Nach erfolgreichem Test weißt du, dass der Kill-Switch funktioniert! 🎉
Dann kannst du beruhigt die echte Version (Ablauf: 23.02.2026) hochladen.
