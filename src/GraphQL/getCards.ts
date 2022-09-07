import { gql, useQuery } from '@apollo/client';
import { CardObject } from '../Interfaces/card.interface';

const GET_CARDS = gql`
  query GetCards ($list: [String!]) {
    cards(slugs: $list) {
      id
      age
      position
      rarity
      shirtNumber
      serialNumber
      season {
        name
      }
      player {
        firstName
        lastName
        pictureUrl
        activeClub {
          name
          pictureUrl
        }
        country {
          flagUrl
          code
        }
      }
    }
  }
`;

export const useGetCards = (list: string[]): CardObject[] | undefined => {
  const { loading, error, data } = useQuery(GET_CARDS, { variables: { list } } );
  if (loading) return [];
  if (error) return [];
  const { cards } = data;
  return cards;
}