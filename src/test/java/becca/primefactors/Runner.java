package becca.primefactors;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions( monochrome = true,
features = "src/test/resources/cucumber/",
format = { "pretty","html: cucumber-html-reports",
        "json: cucumber-html-reports/cucumber.json" },
glue = "becca.primefactors")


public class Runner {
}
