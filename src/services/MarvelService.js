import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "da64fde8ca9153bdebf0fdf3e191142c";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getCharacterById = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "No description in MarvelAPI",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  return { loading, error, getCharacterById, getAllCharacters, clearError };
};

export default useMarvelService;
