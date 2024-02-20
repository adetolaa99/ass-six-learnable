# A Javascipt program to validate if a credit card is of the type Visa or Mastercard

Description of the regex patterns:
The regex patterns contain regular expressions for Visa and MasterCard credit cards.

**Visa Pattern**: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/  
^: start of the string.  
4: this specifies that the card number must start with a 4.
[0-9]{12}: this matches exactly 12 digits.
(?:[0-9]{3})?: this specifies that the last three digits are optional and should be exactly 3 digits if present.
$: end of the string.

**MasterCard Pattern**: /^(?:5[1-5][0-9]{14}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|272[0-7])$/
^: start of the string.
5[1-5]: this specifies that the card number must start with a 5 followed by a digit between 1 and 5.
[0-9]{14}: this matches exactly 14 digits after the initial digit.
|: this represents an OR condition, for alternate patterns.
222[1-9]: this matches if the card number starts with 222 followed by a digit between 1 and 9.
|: an alternative pattern.
22[3-9][0-9]: this matches if the card number starts with 22, then a digit between 3 and 9, then any digit.
|: an alternative pattern.
2[3-6][0-9]{2}: this matches if the card number starts with 2, then a digit between 3 and 6, then two digits.
|: an alternative pattern.
27[01][0-9]: this matches if the card number starts with 27, then either 0 or 1, then any digit.
|: an alternative pattern.
272[0-7]): this matches if the card number starts with 272 then a digit between 0 and 7.
$: end of the string.
