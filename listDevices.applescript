tell application "System Events"
	tell process "Safari"
		name of every menu item of menu "Develop" of menu bar 1
	end tell
end tell