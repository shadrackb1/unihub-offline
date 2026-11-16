UniHub - Offline (plug and play)
================================

WHAT THIS IS
  The complete UniHub site with its own web server and its own copy of the
  database, packaged so it runs on any Windows machine with no internet and
  nothing installed.

HOW TO RUN IT
  1. Copy this whole folder (or the USB stick) to the machine.
  2. Double-click  start.bat
  3. The browser opens at http://localhost:8080 (or the next free port).
  4. Leave the black window open while you use the site. Close it to stop.

  Windows may ask to allow the app through the firewall. Choose Cancel - the
  server only listens on 127.0.0.1 and does not need network access.

TEST ACCOUNTS
  Admin                admin@unihub.ke            TestAdmin2024!
  Landlord (pending)   landlord.pending@unihub.ke TestLandlord2024!
  Landlord (approved)  landlord.approved@unihub.ke TestLandlord2024!
  Landlord (rejected)  landlord.rejected@unihub.ke TestLandlord2024!
  Landlord (suspended) landlord.suspended@unihub.ke TestLandlord2024!
  Student              student@unihub.ke          TestStudent2024!
  University admin     university@unihub.ke       TestUniversity2024!

  Admin panel: http://localhost:8080/admin
  Landlord portal: http://localhost:8080/landlord/login

WHAT IS LOCAL
  - All pages, listings, hostels, images, fonts and videos.
  - The database: data\dev.db (SQLite). It already holds the accounts above,
    the seeded content and the settings.
  - Fonts are served from app\public\fonts instead of Google Fonts.
  - The campus map falls back to a bundled image of the same view, because
    map tiles are fetched from the internet.

IF SOMETHING DOES NOT START
  Run start.bat from a normal Command Prompt to see the message. Ports
  8080-8099 are tried in order. Do not move node.exe, app\ or data\ out of
  this folder - start.bat expects them next to itself.
