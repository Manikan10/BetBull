package Reusables;

import org.json.simple.JSONObject;
import io.restassured.response.Response;

public class apiTestsReuse {
	
	public static String baseUrl = "https://reqres.in/api";
	public static String responseBody;
	public static Response response;
	public static int responseCode;
	public static String domain="reqres.in";
	public JSONObject requestParams;
	
	public void JsonParameterPassing(String parameters)
	{
		try
		{
			requestParams =  new JSONObject();
	
			if(!parameters.isEmpty())
			{
		
				String[] params = parameters.split(",");
				for(int count = 0; count < params.length; count++)
				requestParams.put(params[count].split(":")[0], params[count].split(":")[1]);
			}		
			
			}
		catch (Exception e) 
		{
			System.out.println(e.getMessage() + "Exception in ApiTestsReuse.JsonParameterPassing");
		}
	}
}
