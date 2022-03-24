@login @ui
Feature: Login

  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful Login
    Given I navigate to the 'Home' page
    When I enter <username> in the 'Username' textbox on the 'Home' page
      | username      |
      | standard_user |
    And I enter <password> in the 'Password' textbox on the 'Home' page
      | password     |
      | secret_sauce |
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'Inventory' page is displayed

  Scenario: Locked Account
    Given I navigate to the 'Home' page
    When I enter <username> in the 'Username' textbox on the 'Home' page
      | username        |
      | locked_out_user |
    And I enter <password> in the 'Password' textbox on the 'Home' page
      | password     |
      | secret_sauce |
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'locked out account' error message is displayed on the 'Home' page

  Scenario: Invalid password
    Given I navigate to the 'Home' page
    When I enter <username> in the 'Username' textbox on the 'Home' page
      | username      |
      | standard_user |
    And I enter <password> in the 'Password' textbox on the 'Home' page
      | password      |
      | secret_sauce1 |
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'credentials mismatch' error message is displayed on the 'Home' page

  Scenario: Empty Username and password
    Given I navigate to the 'Home' page
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'missing username' error message is displayed on the 'Home' page

  Scenario: Empty username
    Given I navigate to the 'Home' page
    And I enter <password> in the 'Password' textbox on the 'Home' page
      | password     |
      | secret_sauce |
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'missing username' error message is displayed on the 'Home' page

  Scenario: Empty password
    Given I navigate to the 'Home' page
    When I enter <username> in the 'Username' textbox on the 'Home' page
      | username      |
      | standard_user |
    And I click the 'LOGIN' button on the 'Home' page
    Then the 'missing password' error message is displayed on the 'Home' page
