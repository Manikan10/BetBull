package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 

@RunWith(Cucumber.class) 
@CucumberOptions(features = "src/test/java/Features/ApiTestScenarios.feature",glue= {"Stepdefinitions"},
plugin = {"pretty", "html:Result/ApiTests"})

public class apiTestsRunner {

}