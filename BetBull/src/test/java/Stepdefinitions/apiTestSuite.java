package Stepdefinitions;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import Reusables.apiTestsReuse;

public class apiTestSuite {
	
	public static apiTestsReuse usersReuse;
	public RequestSpecification httpRequest;
	
	@Given("^As an API client$")
	public void as_an_api_client () throws Throwable
	{
		try
		{
			RestAssured.baseURI=apiTestsReuse.baseUrl;
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}

	@When("^POST request for \"(.*)\" with \"(.*)\"$")
	public void post_request_for_resourceName_with_parameters (String resourceName, String parameters) throws Throwable
	{
		try
		{
		httpRequest =  RestAssured.given();
		usersReuse = new apiTestsReuse();
		usersReuse.JsonParameterPassing(parameters);
		httpRequest.header("Content-Type", "application/json");
		httpRequest.body(usersReuse.requestParams.toJSONString());	
		apiTestsReuse.response = httpRequest.post(resourceName);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		
	}
	
	@Then("^Validate the \"(.*)\"$")
	public void validate_the_statusCode (int statusCode) throws Throwable
	{
		try
		{
		apiTestsReuse.responseCode = apiTestsReuse.response.getStatusCode();
		assertEquals("Test is failed",apiTestsReuse.responseCode,statusCode);
		apiTestsReuse.responseBody = apiTestsReuse.response.getBody().asString();
		System.out.println("Response body is -----> "+ apiTestsReuse.responseBody);
		System.out.println("Status Code = "+ apiTestsReuse.responseCode);
		
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
	
	@And("^Print the \"(.*)\"$")
	public void print_the_token (String token) throws Throwable
	{
		try
		{
			String actToken = apiTestsReuse.response.getBody().jsonPath().get("token").toString();
			if(actToken.equals(token))
			{
				System.out.println("Test is passed" +"\nToken is ----->" + actToken);
			}
			else
			{
				System.out.println("Test is failed" +"\nToken is ----->" + actToken);
			}
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
	
	@And("^Print the response$")
	public void print_the_response() throws Throwable
	{
		try
		{
			if(!apiTestsReuse.responseBody.contains("Missing password"))
			{
				System.out.println("Test is failed");
			}
			else
			{
				System.out.println("Test is passed");
			}
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
	
	@When("^Send a GET Request for \"(.*)\"$")
	public void send_a_get_request_for_resourceName (String resourceName) throws Throwable
	{
		try
		{
			httpRequest =  RestAssured.given();
			apiTestsReuse.response= httpRequest.request(Method.GET, resourceName);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
	
	@Then("^Verify \"(.*)\" user entries are returned$")
	public void verify_numberOfUsers_user_entries_are_returned (int numberOfUsers) throws Throwable
	{
		try
		{
			ResponseBody body = apiTestsReuse.response.getBody();
			ArrayList<String> emails = new  ArrayList<String>();
			emails = body.jsonPath().get("data.email");
			int actnumberOfUsers = emails.size();
			assertEquals("Test is failed", actnumberOfUsers, numberOfUsers);
			
			String first_name = "";
			String last_name = "";
			
			for (int counter=0; counter < numberOfUsers; counter++) {
				first_name=body.jsonPath().get("data.first_name["+counter+"]");
				last_name=body.jsonPath().get("data.last_name["+counter+"]");
				assertEquals("Test is failed", true, emails.get(counter).equalsIgnoreCase(first_name+"."+last_name+"@"+apiTestsReuse.domain));
			}
			
			System.out.println("Test Case Passed.");
			
		}
		catch(Exception e)
		{
				System.out.println(e.getMessage());
		}		
	}	
}

