@echo off
echo =========================================================
echo   SchoolOS Main Web - Automatic GitHub Backup Service
echo =========================================================
echo Backup service is running in background...
echo (Close this window if you want to stop auto-backup)
echo.

:loop
timeout /t 30 /nobreak > nul
git add .
git diff-index --quiet HEAD || (
    echo [%date% %time%] Changes detected! Backing up to GitHub...
    git commit -m "Auto-backup: %date% %time%"
)
goto loop
