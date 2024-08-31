export const removeComma = (number: any) => {
  if (typeof number === 'number') return number
  const newNumber = number?.replace(',', '')
  return parseFloat(newNumber)
}

export const formatCurrencyDZD = (value: number, formater?: any) => {

  if (isNaN(value)) {
    throw new Error('Value must be a number');
  }

  const formatter = new Intl.NumberFormat('en-DZ', {
    minimumFractionDigits: formater || 2,
    maximumFractionDigits: formater || 2
  });

  let formattedValue = formatter.format(value);

  // Replace 'DA' with 'DZD' or any custom symbol if needed
  formattedValue = formattedValue.replace('DA', 'DZD');

  // Remove commas from the formatted value
  formattedValue = formattedValue.replace(/,/g, ' ');

  return formattedValue;
}

export const filterToQueryParameters = (filter: any) => {
  if (!filter) {
    return ''
  }

  const params = []
  for (const property in filter) {
    const value = filter[property]
    if (value) {
      params.push(`${property}=${value}`)
    }
  }
  return params?.length ? `?${params.join('&')}` : ''
}
