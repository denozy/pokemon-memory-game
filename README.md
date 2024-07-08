TOP project to learn useEffect to fetch and use data.

This memory card game renders pokemon cards for the user to click.
The objective is to click as many unique pokemon as possible without clicking a duplicate.

----going forward ----
adjust styling for different screen sizes - when squished, the pokemon cards overflow in a really ugly way, instead of pushing the header and footer up.
fix loading screen, currently triggers based on fetching of pokemon data, but i can still see the pokemon cards being rendered onto the screen, when i'd prefer them to be fully loaded before the loading screen exits. The behavior doesn't seem tooooo terrible though. \*\*\*even on throttled internet it's not a problem.

change fetch pokemon dependencies so that function doesn't trigger when going back to start screen/picking a new difficulty. I need a better dependency for that because it's running when it doesn't need to.

add a transition animation when cards are initially displayed and shuffled.

---optional----mainly add to show skills
add music
add sound effects for clicks
create neat drop down modal for rules or something.
