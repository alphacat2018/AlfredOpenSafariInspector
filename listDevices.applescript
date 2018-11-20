if application "Safari" is not running then
    tell application "Safari" 
        launch
    end tell
    delay 1
end if

tell application "System Events"
    tell process "Safari"
        name of every menu item of menu "Develop" of menu bar 1
    end tell
end tell