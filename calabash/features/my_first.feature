Feature: Opening the help screen
  Scenario: As a user I want to be able to open the About Us screen from the side menu the first time I open the app
    Given I press "Stations"
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "About Us"
