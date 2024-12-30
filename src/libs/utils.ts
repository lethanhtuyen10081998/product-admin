import Cookies from 'js-cookie';
import { LANGUAGE_EN } from 'src/constants/constants';

export const formatString = (value: string, variables: any) => {
  if (!value) {
    return '';
  }

  return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
    return variables[match.replace(/\{|\}|:/g, '')] || '';
  });
};

// Function to format the amount
export function formatMoney(
  amount = 0,
  currencySymbol: string = '$',
  decimalCount: number = 2,
  decimal: string = '.',
  thousands: string = ',',
): string {
  const locale = Cookies.get('locale');
  let end = '';

  try {
    if (locale === LANGUAGE_EN) {
      // Your locale-specific code can go here if needed
    } else {
      // Your locale-specific code can go here if needed
    }

    currencySymbol = '';
    end = '';
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(Math.abs(amount).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    let decimalPart = '';
    if (decimalCount) {
      const decimalValue = Math.abs(amount - parseFloat(i))
        .toFixed(decimalCount)
        .slice(2);
      if (decimalValue !== '00') {
        decimalPart = decimal + decimalValue;
      }
    }

    return (
      negativeSign +
      currencySymbol +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      decimalPart +
      ' ' +
      end
    );
  } catch (e) {
    console.error(e);
    return amount.toString();
  }
}

export function removeSpecialCharactersAndSpaces(inputString: string): string {
  // This regular expression matches any character that is not a word character (alphanumeric).
  const pattern = /[^\w]/g;
  // Use replace to remove matched characters
  const cleanString = inputString.replace(pattern, '');
  return cleanString;
}

export const getLinkImage = (image: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}/${image}.png`;
};

export function convertMoneyToNumber(stringWithCommas = '0'): number {
  // Remove all commas from the string
  const stringWithoutCommas = stringWithCommas.replace(/,/g, '');
  // Convert the resulting string to a number
  const number = parseInt(stringWithoutCommas, 10);

  // Check if the conversion was successful, if not return NaN
  if (isNaN(number)) {
    throw new Error('Invalid input: not a valid number');
  }

  return number;
}
