import homeHeroAnimation from '../../public/animations/hha.json';

export const loader = async () => {
  return new Response(JSON.stringify(homeHeroAnimation), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
