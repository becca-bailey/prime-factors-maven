package becca.primefactors;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class Steps {
    ArrayList<Integer> factors;
    PrimeFactors primeFactors = new PrimeFactors();

    @When("^I generate the prime factors of (\\d+)$")
    public void iGenerateThePrimeFactorsOf(int n) throws Throwable {
        factors = primeFactors.generate(n);
    }

    @Then("^it returns list (.*)")
    public void itReturnsList(List<Integer> expectedFactors) throws Throwable {
        assertEquals(expectedFactors, factors);
    }
}
