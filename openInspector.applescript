on run argv
    set device to item 1 of argv
    set game to item 2 of argv

    tell application "System Events"
        tell process "Safari"
            set frontmost to true
            click menu item game of menu of menu item device of menu "??" of menu bar 1
        end tell
    end tell
end run