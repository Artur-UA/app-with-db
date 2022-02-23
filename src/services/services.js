export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
  
    async getPerson(id) {
      const getPerson = await this.getResource(`/people/${id}/`);
      return this._transformPerson(getPerson);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet(res));
    }
  
    async getPlanet(id) {
      const getPlanet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(getPlanet);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarShips(res));
    }
  
    async getStarship(id) {
      const getStar = await this.getResource(`/starships/${id}/`);
      return  this._transformStarShips(getStar)
    }

    _transformPlanet(planet){
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

    _transformStarShips(starships){
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

    _transformPerson(person){
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
  