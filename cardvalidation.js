function validateCreditCardNumber(cardNumber) {
  var cleanedCardNumber = cardNumber.replace(/\D+/g, "");

  var regExPatterns = {
    Visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
    MasterCard:
      /^(?:5[1-5][0-9]{14}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|272[0-7])$/,
  };

  var cardType;
  for (var key in regExPatterns) {
    if (regExPatterns[key].test(cleanedCardNumber)) {
      cardType = key;
      break;
    }
  }

  if (!cardType) {
    console.log("The card number is invalid!");
  } else {
    console.log("The Card number provided is a " + cardType);
  }
}

//To validate a card
validateCreditCardNumber("5399    8390    0074    9266");