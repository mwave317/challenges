def fizzbuzz(n)
  (1..n).map do |x|
    if (x % 15).zero?   then "FizzBuzz"
    elsif (x % 3).zero? then "Fizz"
    elsif (x % 5).zero? then "Buzz"
    else x
    end
  end
end
