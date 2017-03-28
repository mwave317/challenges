package KelseyNewman147;

/**
 * Created by kelseynewman on 3/26/17.
 */
public class FizzBuzz {
  public static void main(String[] args) {
    fizzBuzz(100);
  }

  public static String[] fizzBuzz(int counter) {
    String[] output = new String[counter];
    for (int i = 1; i <= counter; i++)
      if (i % 3 == 0 && i % 5 == 0) {
        output[i - 1] = "FizzBuzz";
      } else if (i % 3 == 0) {
        output[i - 1] = "Fizz";
      } else if (i % 5 == 0) {
        output[i - 1] = "Buzz"
      } else {
        output[i - 1] = String.valueOf(i);
      }
    return output;
  }
}
