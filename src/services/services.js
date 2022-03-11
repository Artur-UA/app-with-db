export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
  
    getPerson = async (id) =>  {
      const getPerson = await this.getResource(`/people/${id}/`);
      return this._transformPerson(getPerson);
    }
  
    getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    getPlanet = async (id) => {
      const getPlanet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(getPlanet);
    }
  
    getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarShips);
    }
  
    getStarship = async (id) => {
      const getStar = await this.getResource(`/starships/${id}/`);
      return  this._transformStarShips(getStar)
    }

    _transformPlanet = (planet) => {
      console.log(planet);
      const id = parseInt(planet.url.match(/\d+/));
      return{
        id: id,
        population: planet.population,
        rotation: planet.rotation_period,
        diametr: planet.diameter,
        name: planet.name
      }
    }

    _transformStarShips = (starships) => {
      console.log(starships);
      const id = parseInt(starships.url.match(/\d+/));
      return{
        id: id,
        name: starships.name,
        model: starships.model,
        manufacturer: starships.manufacturer,
        costInCredids: starships.costInCredids,
        length: starships.length,
        crew: starships.crew,
        passengers: starships.passengers,
        cargoCapacity: starships.cargo_capacity,
      }
    }

    _transformPerson = (person) => {
      console.log(person);
      const id = parseInt(person.url.match(/\d+/));
      return{
        id: id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.hair_color
      }
    }
}
  