@echo off
setlocal EnableExtensions
cd /d "%~dp0"

title UniHub - Offline

rem Pick the first free port in 8080-8099 so the kit still starts when another
rem program already owns 8080 on the presentation machine.
set "PORT="
for /f %%P in ('powershell -NoProfile -Command "$p=8080; while ($p -lt 8100) { $c=New-Object Net.Sockets.TcpClient; try { $c.Connect('127.0.0.1',$p); $c.Close(); $p++ } catch { $c.Dispose(); break } }; $p"') do set "PORT=%%P"
if not defined PORT set "PORT=8080"

set "BETTER_AUTH_URL=http://localhost:%PORT%"
set "VITE_APP_URL=http://localhost:%PORT%"
set "NODE_ENV=production"
set "HOST=127.0.0.1"
rem The demo switches accounts quickly; the credential rate limit is off here only.
set "DISABLE_AUTH_RATE_LIMIT=1"

echo.
echo   UniHub is starting at http://localhost:%PORT%
echo   Keep this window open while you use the site.
echo.

rem Give the server a moment, then open the default browser.
start "" cmd /c "timeout /t 3 >nul & start http://localhost:%PORT%/"

"%~dp0node.exe" --env-file="%~dp0.env" "%~dp0app\server\index.mjs"

echo.
echo   UniHub has stopped. Press any key to close this window.
pause >nul
