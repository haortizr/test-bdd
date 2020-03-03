Feature: Register account in losestudiantes
  As an user I want to create my account within losestudiantes website in order to rate teachers

  Scenario Outline: Register account successful
    Given I go to losestudiantes home screen
    When I open the login screen
    And I register with <firstname>, <lastname>, <email>, <university>, <ismaestria>, <programa>, <dobleprogram>, <programa2>, <acept> and <password>
    And I try to register
    Then I expect successful register

    Examples:
      | firstname            | lastname         | email                        | university                | ismaestria | programa   | dobleprogram | programa2 | acept | password |
      | Hanner               | Ortiz            | ortiz1@example.com           | universidad-nacional      | N          | 329        | N            |           | S     | pass1234 |
      | Hanner               | Ortiz            | ortiz2@example.com           | universidad-de-los-andes  | N          | 78         | N            |           | S     | pass1234 |
      | Hanner               | Ortiz            | ortiz3@example.com           | universidad-nacional      | N          | 329        | S            | 318       | S     | pass1234 |
      | Hanner               | Ortiz            | ortiz4@example.com           | universidad-de-los-andes  | S          | 54         | N            |           | S     | pass1234 |



  Scenario Outline: Reister account failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I register with <firstname>, <lastname>, <email>, <university>, <ismaestria>, <programa>, <dobleprogram>, <programa2>, <acept> and <password>
    And I try to register
    Then I expect fail <error>

    Examples:
      | firstname            | lastname         | email                        | university               | ismaestria | programa   | dobleprogram | programa2 | acept | password  | error                                           |
      |                      |                  | example@correo.com           |                          |            |            |              |           |       | pass1234  | Debes aceptar los términos y condiciones        |
      |                      |                  | example@correo.com           |                          |            |            |              |           | S     |           | Ingresa una contraseña                          |
      |                      |                  | example@correo.com           |                          |            |            |              |           | S     | pass      | La contraseña debe ser al menos de 8 caracteres |
      |                      |                  |                              |                          |            |            |              |           | S     | pass1234  | Ingresa tu correo                               |
      |                      |                  | example                      |                          |            |            |              |           | S     | pass1234  | Ingresa un correo valido                        |
      |                      |                  | example@correo.com           |                          |            |            |              |           | S     | pass1234  |                                                 |
      | Nombre               |                  | example@correo.com           |                          |            |            |              |           | S     | pass1234  |                                                 |
      | Nombre               | Apellido         | example@correo.com           | inicial                  |            |            |              |           | S     | pass1234  | inicial                                         |
      | Nombre               | Apellido         | example@correo.com           | universidad-de-los-andes |            | inicial    |              |           | S     | pass1234  | inicial                                         |
