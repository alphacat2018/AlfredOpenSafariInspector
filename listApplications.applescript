on run argv
    set device to item 1 of argv

    tell application "System Events"
	tell process "Safari"
		name of every menu item of menu of menu item device of menu "Develop" of menu bar 1
	end tell
end tell

end run