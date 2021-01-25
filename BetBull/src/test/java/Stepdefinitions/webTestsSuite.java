package Stepdefinitions;
import static org.junit.Assert.assertEquals;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import Reusables.LoginReuse;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class webTestsSuite {
	
	public static WebDriver driver;
	public static LoginReuse loginReuse; 
	
	@Before public void setup()
	{
		System.setProperty("webdriver.chrome.driver","driver\\chrome\\chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Given("^Load the Website and goto SignIn page$")
	public void load_the_website_and_goto_signin_page () throws Throwable
	{
		try
		{
		loginReuse = new LoginReuse(driver);
		loginReuse.launchHome();
		loginReuse.signin();
		loginReuse.launchLogin();
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			driver.quit();
		}
	}
	
	@When("^Enter the \"(.*)\" and \"(.*)\"$")
	public void enter_the_email_and_password (String email,String password) throws Throwable
	{
		try
		{
			loginReuse.enterEmail(email);
			loginReuse.enterPassword(password);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			driver.quit();
		}
	}
	
	@And("^Click on SignIn button$")
	public void click_on_signin_button () throws Throwable
	{
		try
		{
			loginReuse.clickLogin();
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			driver.quit();
		}
	}
	
	@Then("^Ensure the \"(.*)\" error message is displayed$")
	public void ensure_the_expMessage_error_message_is_displayed (String expMessage) throws Throwable
	{
		try
		{
		loginReuse.validationMessage();
		assertEquals("Test Case Failed. Expected validation message is not shown.",expMessage, loginReuse.validationMsg );	
		System.out.println("Test Case Passed. Expected validation message is shown - " + loginReuse.validationMsg);
		
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			driver.quit();
		}
	}
	
	@After public void cleanUp(){ 
	      driver.quit(); 
	   } 
}
