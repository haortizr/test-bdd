Feature: Search for stations
  AS an user I want to search an specific station to verify its stops.

  Scenario: remove remove tutorn
    Given I press "Stations"

  Scenario Outline: I want to search for any station typing the station name
    Given I press "Stations"
    Then I press view with id "search_button"
    Then I enter text <stationName> into field with id "search_src_text"
    Then I press the enter button
    Then I touch the <stationSelector> text
    Then I wait to see <stationDetails>

    Examples:
      | stationName       | stationSelector                           | stationDetails                                    |
      | "calle 187"       | "Auto Norte / Cll. 185 / Cll. 187B Bis"   | "Detail: Auto Norte / Cll. 185 / Cll. 187B Bis"   |
      | "Alquería"        | "NQS / Cra. 52A"                          | "Detail: NQS / Cra. 52A"                          |
      | "Alcalá"          | "Auto Norte / Cll. 137 y Cll. 134A"       | "Detail: Auto Norte / Cll. 137 y Cll. 134A"       |
      | "Av. El Dorado"   | "NQS / Cll. 40A / Cra. 32A Bis"           | "Detail: NQS / Cll. 40A / Cra. 32A Bis"           |
      | "Av. 39"          | "Av. Caracas / Cll. 37 y Dg. 40A"         | "Detail: Av. Caracas / Cll. 37 y Dg. 40A"         |