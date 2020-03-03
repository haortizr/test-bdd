Feature: Find a route
  AS an user i want to search a route to make a preview

Scenario: find a route in transmilenio
  Given I press "Routes"
  And I press "Routes"
  When I touch the "Portal 20 de Julio" text
  Then I wait to see "Path: Portal 20 de Julio"

Scenario: find a route in SITP
  Given I press "Routes"
  And I wait for 3 seconds
  When I touch the "URBANO" text
  And I press view with id "search_button"
  And I enter text "603B" into field with id "search_src_text"
  Then I press the enter button
  And I wait to see "Germania » Patio Bonito"
