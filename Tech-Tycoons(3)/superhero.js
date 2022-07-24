/* const url = 'https://akabab.github.io/superhero-api/api/all.json'; 
 */

const Lib = {
    renderCollection: function (collection, template, target){
        let html='';
        let result = document.querySelector(target);
      
        for(let i=0; i<collection.length; i++){
            let item = collection[i];
            html += template(item);
        }
  
        result.innerHTML = html;
    },

    renderItem : function (item, template, target){
      document.querySelector(target).innerHTML = template(item)
    },

    getData: async function (url){
      const response = await fetch(url);
      return response.json();
    }
};

let heroes = {
    "id": 1,
    "name": "A-Bomb",
    "slug": "1-a-bomb",
    "powerstats": {
        "intelligence": 38,
        "strength": 100,
        "speed": 17,
        "durability": 80,
        "power": 24,
        "combat": 64
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "6'8",
            "203 cm"
        ],
        "weight": [
            "980 lb",
            "441 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "No Hair"
    },
    "biography": {
        "fullName": "Richard Milhouse Jones",
        "alterEgos": "No alter egos found.",
        "aliases": [
            "Rick Jones"
        ],
        "placeOfBirth": "Scarsdale, Arizona",
        "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        "publisher": "Marvel Comics",
        "alignment": "good"
    },
    "work": {
        "occupation": "Musician, adventurer, author; formerly talk show host",
        "base": "-"
    },
    "connections": {
        "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
        "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
    },
    "images": {
        "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
        "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
        "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
        "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
    }
};

function card({ name, images:{sm}, biography:{fullName, alterEgos, aliases}, appearance:{gender, race}, powerstats:{intelligence, strength, speed, durability, power, combat}}){
    return `<div class="container">
				<div class="box">
   			<div class="charName">
       		 <div class="image">
           	 <img src="${sm}">
       		 </div>
    		</div>

				<div class="charinfo">
       		 <div class="info">
						<div class="basic">
            		<h1>Character Name: ${name}</h1>
        		</div>
    				</div>
            	 <p> Character info</p>
							 <p> Original name: ${fullName}</p>
			 				<p> Alter ego: ${alterEgos}</p>
			 				<p> Gender: ${gender}</p>
			 				<p> Race/Species: ${race}</p>
        </div>
			<div class="details">
    		<div class="context">
        	<h1>Character Stats</h1>
        		<p>Intelligence: ${intelligence}</p>
            <p>Strength: ${strength}</p>
            <p>Speed: ${speed}</p>
            <p>Durability: ${durability}</p>
            <p>Power: ${power}</p>
            <p>Combat: ${combat}</p>
    		</div>
			</div>
    </div> 		
</div>`
;
}

function aside({name}){
	return `
 						<li> ${name} </li>
					`
}


Lib.renderItem(heroes, aside, '.display_names' )
Lib.renderItem(heroes, card, '#Character');

async function showHeroes(){
    try{
        let data = await Lib.getData("https://akabab.github.io/superhero-api/api/all.json");
    console.log(data);
			Lib.renderCollection(data, aside, '.display_names')
			Lib.renderCollection(data, card, '#Character');
    }
    catch(err){
        console.log(err);
    }
    
}


showHeroes();

async function showAllHeroes(){
    try{
    let data = await Lib.getData("https://akabab.github.io/superhero-api/api/all.json");
    data = data.heroes;
			Lib.renderCollection(data, aside, '.display_names')
    Lib.renderCollection(data, card,  '#Character');
    }
catch(err){
    console.log(err);

    }
   
}

showAllHeroes();





function nameCompare(a,b){
    return a.name.localeCompare(b.name);
}
function ascending(){
    let sorted = hero.sort(nameCompare);
    Lib.renderCollection(sorted, card, '#display_names');
}

function search(){
    let search = document.querySelector('#search').value;
    let result = hero.filter(item => item.name.includes(search));
    Lib.renderCollection(result, card, '.display_names');
}


