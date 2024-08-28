import {RAPID_API, RAPID_HOST, RAPID_URL} from '../../API'

export const searchOptions = {
  method: 'GET',
  url: RAPID_URL + '/search',
  params: {
    output: 'json',
    status: 'forSale',
    sortSelection: 'priorityscore',
    listing_type: 'by_agent',
    doz: 'any',
    location: ''
  },
  headers: {
    'x-rapidapi-key': RAPID_API,
    'x-rapidapi-host': RAPID_HOST
  }
};
